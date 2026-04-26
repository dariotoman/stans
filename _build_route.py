#!/usr/bin/env python3
"""Pre-compute the itinerary road route via Valhalla and write route.js."""
import json
import re
import sys
import time
import urllib.request
import urllib.error

PLACES_JS = "places.js"
OUT = "route.js"
VALHALLA = "https://valhalla1.openstreetmap.de/route"


def decode_polyline6(encoded):
    coords = []
    idx = lat = lng = 0
    while idx < len(encoded):
        result = shift = 0
        while True:
            b = ord(encoded[idx]) - 63
            idx += 1
            result |= (b & 0x1f) << shift
            shift += 5
            if b < 0x20:
                break
        dlat = ~(result >> 1) if result & 1 else result >> 1
        lat += dlat
        result = shift = 0
        while True:
            b = ord(encoded[idx]) - 63
            idx += 1
            result |= (b & 0x1f) << shift
            shift += 5
            if b < 0x20:
                break
        dlng = ~(result >> 1) if result & 1 else result >> 1
        lng += dlng
        coords.append((lat / 1e6, lng / 1e6))
    return coords


def load_places():
    src = open(PLACES_JS, "r").read()
    # Extract the JSON object assigned to window.ITINERARY and window.PLACES.
    def find_object(key):
        m = re.search(rf"window\.{key}\s*=\s*", src)
        if not m:
            raise SystemExit(f"{key} not found in {PLACES_JS}")
        i = m.end()
        depth = 0
        start = None
        in_str = False
        esc = False
        for j in range(i, len(src)):
            c = src[j]
            if in_str:
                if esc:
                    esc = False
                elif c == "\\":
                    esc = True
                elif c == '"':
                    in_str = False
                continue
            if c == '"':
                in_str = True
                continue
            if c == "{":
                if start is None:
                    start = j
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return json.loads(src[start : j + 1])
        raise SystemExit("unterminated object")

    return find_object("PLACES"), find_object("ITINERARY")


def resolve(id_, places):
    for c in places["cities"]:
        if c["id"] == id_:
            return c["lat"], c["lng"], c["name"]
        for a in c.get("attractions", []):
            if a["id"] == id_:
                return a["lat"], a["lng"], a["name"]
    for p in places["places"]:
        if p["id"] == id_:
            return p["lat"], p["lng"], p["name"]
    return None


def route_leg(a, b):
    body = {
        "locations": [
            {"lat": a[0], "lon": a[1], "type": "break_through"},
            {"lat": b[0], "lon": b[1], "type": "break_through"},
        ],
        "costing": "auto",
        "directions_options": {"units": "kilometers"},
    }
    req = urllib.request.Request(
        VALHALLA,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as res:
            data = json.load(res)
    except urllib.error.HTTPError as e:
        return None, f"HTTP {e.code}: {e.read()[:200].decode(errors='replace')}"
    except Exception as e:
        return None, str(e)
    trip = data.get("trip")
    if not trip or not trip.get("legs"):
        return None, f"no trip: {data}"
    coords = []
    for leg in trip["legs"]:
        coords.extend(decode_polyline6(leg["shape"]))
    km = sum(l.get("summary", {}).get("length", 0) for l in trip["legs"])
    return coords, km


def main():
    places, itin = load_places()
    train_pairs = {tuple(p) for p in itin.get("trainLegs", [])}

    pts = []
    for item in itin["route"]:
        if isinstance(item, str):
            r = resolve(item, places)
            if not r:
                print(f"!! cannot resolve {item}", file=sys.stderr)
                continue
            pts.append({"lat": r[0], "lng": r[1], "name": r[2], "ref": item})
        else:
            pts.append({
                "lat": item["lat"], "lng": item["lng"],
                "name": item.get("name", ""), "ref": None,
            })

    print(f"routing {len(pts)} waypoints, {len(pts)-1} legs")
    segments = []
    current = None  # {"mode": ..., "coords": [...]}
    for i in range(len(pts) - 1):
        a = pts[i]
        b = pts[i + 1]
        is_train = (a["ref"] is not None and b["ref"] is not None
                    and (a["ref"], b["ref"]) in train_pairs)
        if is_train:
            mode = "train"
            coords = [(a["lat"], a["lng"]), (b["lat"], b["lng"])]
            print(f"  [{i+1:02d}] {a['name']:25s} -> {b['name']:25s}  TRAIN   (straight line)")
        else:
            mode = "road"
            coords, info = None, None
            for attempt in range(4):
                coords, info = route_leg((a["lat"], a["lng"]), (b["lat"], b["lng"]))
                if coords is not None:
                    break
                if "429" in str(info):
                    time.sleep(2 + 2 * attempt)
                else:
                    break
            if coords is None:
                print(f"  [{i+1:02d}] {a['name']:25s} -> {b['name']:25s}  FAIL: {str(info)[:80]}  (straight line)")
                coords = [(a["lat"], a["lng"]), (b["lat"], b["lng"])]
            else:
                print(f"  [{i+1:02d}] {a['name']:25s} -> {b['name']:25s}  {info:7.1f} km  ({len(coords)} pts)")
            time.sleep(1.2)

        if current is None or current["mode"] != mode:
            if current is not None:
                segments.append(current)
            current = {"mode": mode, "coords": list(coords)}
        else:
            current["coords"].extend(coords[1:])
    if current is not None:
        segments.append(current)

    total_pts = sum(len(s["coords"]) for s in segments)
    out_segments = [
        {"mode": s["mode"], "coords": [[round(lat, 6), round(lng, 6)] for lat, lng in s["coords"]]}
        for s in segments
    ]
    with open(OUT, "w") as f:
        f.write("window.ROUTE_SEGMENTS = ")
        json.dump(out_segments, f)
        f.write(";\n")
    print(f"wrote {OUT}: {len(segments)} segments, {total_pts} total points")


def simplify_by_distance(coords, min_m=200):
    import math
    if len(coords) < 3:
        return list(coords)
    def meters(a, b):
        dlat = (b[0] - a[0]) * 111000
        dlng = (b[1] - a[1]) * 111000 * math.cos(math.radians((a[0] + b[0]) / 2))
        return math.hypot(dlat, dlng)
    out = [coords[0]]
    for c in coords[1:-1]:
        if meters(out[-1], c) >= min_m:
            out.append(c)
    out.append(coords[-1])
    return out


if __name__ == "__main__":
    main()
