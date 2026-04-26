# Stans Trip Planner

Interactive map for planning a trip through Central Asia. Cities, attractions, ratings, photos, and a road/rail itinerary.

## View

Open `index.html` in a browser, or visit the GitHub Pages deployment.

## Files

- `index.html` — the app (Leaflet map + sidebar)
- `places.js` — cities, attractions, standalone places, and the itinerary
- `route.js` — pre-computed road & train geometry
- `images/` — photos referenced by cards and popups
- `_build_route.py` — regenerates `route.js` after editing the itinerary (`python3 _build_route.py`)
