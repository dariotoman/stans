window.BOOKINGS = {
  "flights": [
    { "date": "Aug 3",  "airline": "Turkish", "num": "TK 18",  "from": "YYZ Toronto",  "to": "IST Istanbul",  "depart": "22:00",     "arrive": "14:50 +1", "aircraft": "B777-300ER" },
    { "date": "Aug 4",  "airline": "Turkish", "num": "TK 346", "from": "IST Istanbul", "to": "FRU Bishkek",   "depart": "16:50",     "arrive": "01:00 +1", "aircraft": "A321neo" },
    { "date": "Aug 26", "airline": "Turkish", "num": "TK 369", "from": "TAS Tashkent", "to": "IST Istanbul",  "depart": "09:35",     "arrive": "12:55",    "aircraft": "A330-200" },
    { "date": "Aug 26", "airline": "Turkish", "num": "TK 17",  "from": "IST Istanbul", "to": "YYZ Toronto",   "depart": "16:40",     "arrive": "20:15",    "aircraft": "B777-300ER" }
  ],
  "trains": [
    { "date": "Aug 22", "operator": "Afrosiyob",      "num": "770ФА", "from": "Samarkand", "to": "Bukhara-1",        "depart": "10:59",     "arrive": "12:36",     "seats": "W9, seats 11 & 12 (1st cl seat)" },
    { "date": "Aug 25", "operator": "Uzbek Railways", "num": "054ЩА", "from": "Bukhara-1", "to": "Tashkent Janubiy", "depart": "00:02",     "arrive": "07:28",     "seats": "W7, berths 15 & 16 (Lux sleeper)" }
  ],
  "hotels": [
    { "stopId": "bishkek",   "name": "Bishkek Centrum Hotel",       "checkIn": "Aug 4",  "checkOut": "Aug 6",  "nights": 2, "room": "Deluxe Room",       "address": "113 Sultan Ibraimov St, Bishkek", "phone": "+996 770 444 666" },
    { "stopId": "dushanbe",  "name": "Vatan Hotel",                 "checkIn": "Aug 18", "checkOut": "Aug 19", "nights": 1, "room": "Superior Double",    "address": "Хусейнзода 36а, Dushanbe",        "phone": "+992 94 934 3434", "lat": 38.5710, "lng": 68.7948 },
    { "stopId": "samarkand", "name": "Hotel Samaria Terrace",       "checkIn": "Aug 19", "checkOut": "Aug 22", "nights": 3, "room": "Standard Double",    "address": "Dahbed yo'li 94, Samarkand",      "phone": "+998 55 705 35 35", "lat": 39.6599, "lng": 66.9705 },
    { "stopId": "bukhara",   "name": "Komil Bukhara Boutique Hotel","checkIn": "Aug 22", "checkOut": "Aug 24", "nights": 2, "room": "Double or Twin",     "address": "40 Barakiyon, Bukhara",           "phone": "+998 90 715 03 05", "lat": 39.7698, "lng": 64.4200 }
  ]
};

window.ITINERARY = {
  "name": "22-Day Stans Trip (Aug 5-26, 2026)",
  "startDate": "2026-08-05",
  "stops": [
    {
      "id": "bishkek", "days": "1", "date": "Aug 5", "note": "arrival 01:00 (TK346)",
      "details": {
        "itinerary": [
          "Arrive FRU Manas Intl at 01:00 (TK 346 from Istanbul)",
          "Taxi to Bishkek Centrum Hotel",
          "Rest, sleep off the jet lag",
          "Explore Ala-Too Square + downtown"
        ],
        "altitude": "800 m",
        "weather": "Hot & dry — highs ~30°C, lows ~17°C, minimal rain",
        "wifi": "Widely available at hotels and cafes",
        "cell": "Buy a SIM at the airport (Beeline / Megacom / O!); good coverage citywide"
      }
    },
    {
      "id": "song-kul", "days": "2", "date": "Aug 6", "note": "Tour D1 · via Burana Tower", "tour": true,
      "details": {
        "itinerary": [
          "9:00 AM — meet at Visit Alay office, Frunze Street 571, Bishkek",
          "Short stop at supermarket for snacks, water",
          "Stop at 12th-c. Burana Tower (Karakhanid minaret)",
          "Cross Kalmak Ashuu Pass — first view of Song-Kul",
          "Descend to lakeshore, walk around",
          "Yurt stay with a nomad family"
        ],
        "altitude": "3,016 m",
        "weather": "Alpine — 12-18°C day, 0-5°C night; afternoon storms possible",
        "wifi": "None at yurts",
        "cell": "No signal at the lake"
      }
    },
    {
      "id": "tash-rabat", "days": "3", "date": "Aug 7", "note": "Tour D2 · via Naryn", "tour": true,
      "details": {
        "itinerary": [
          "Descend south via Moldo Ashuu Pass (switchbacks)",
          "Lunch in Naryn city",
          "Visit Tash Rabat — Silk Road caravanserai (15th-c. or older)",
          "Overnight in a yurt near the site"
        ],
        "altitude": "3,200 m",
        "weather": "Cool alpine, similar to Song-Kul",
        "wifi": "None",
        "cell": "None at Tash Rabat; some signal in Naryn"
      }
    },
    {
      "id": "kazarman", "days": "4", "date": "Aug 8", "note": "Tour D3", "tour": true,
      "details": {
        "itinerary": [
          "Backtrack via Naryn, then west along the Naryn river",
          "Pass shepherds' yurts, cross rolling passes",
          "Arrive Kazarman village",
          "Homestay"
        ],
        "altitude": "1,310 m",
        "weather": "Warmer valley — 22-28°C day, cool night",
        "wifi": "Homestays may have basic wifi",
        "cell": "Some signal in the village"
      }
    },
    {
      "id": "osh", "days": "5", "date": "Aug 9", "note": "Tour D4 · via Kaldama Pass", "tour": true,
      "details": {
        "itinerary": [
          "Cross Kaldama Pass — day's highlight, panoramic ranges",
          "Descend through dense bush country",
          "Arrive Osh, check into hotel",
          "Optional: Sulaiman-Too climb, Jayma Bazaar"
        ],
        "altitude": "963 m",
        "weather": "Hot Fergana Valley — highs 33°C, lows 20°C, dry",
        "wifi": "Good at hotels",
        "cell": "Full coverage — last reliable signal for a week"
      }
    },
    {
      "id": "tulpar-kul", "days": "6", "date": "Aug 10", "note": "Tour D5 · Sary-Mogol, Lenin Peak BC", "tour": true,
      "details": {
        "itinerary": [
          "Drive SE via Sary-Tash toward Sary-Mogol",
          "Cross Taldyk Pass (3,600 m) — yaks grazing",
          "Bridge crossing to Tulpar-Kul yurt camp at 3,500 m",
          "Views of Lenin Peak (7,134 m)",
          "Walk around the lakes"
        ],
        "altitude": "3,500 m",
        "weather": "Cold, windy — 5-10°C day, near-freezing night. Altitude effects likely",
        "wifi": "None",
        "cell": "None"
      }
    },
    {
      "id": "karakul-tj", "days": "7", "date": "Aug 11", "note": "Tour D6 · Traveler's Pass hike + border", "tour": true,
      "details": {
        "itinerary": [
          "Hike to Traveler's Pass (4,130 m) — 3 hr up, 3 hr down",
          "Glacier views tumbling off Lenin Peak",
          "Drive to Kyrgyz border, 20 km no-man's-land",
          "Cross Kyzylart Pass (4,280 m) into Tajikistan",
          "Continue to Karakul Lake village",
          "Guesthouse — pit toilet, no shower, solar power only"
        ],
        "altitude": "4,000 m",
        "weather": "Cold high desert — 5-12°C day, freezing at night, very dry. Altitude sickness risk",
        "wifi": "None",
        "cell": "None. Charge devices before arrival"
      }
    },
    {
      "id": "alichur", "days": "8", "date": "Aug 12", "note": "Tour D7 · Ak-Baital Pass + Murghab", "tour": true,
      "details": {
        "itinerary": [
          "Cross Ak-Baital Pass (4,655 m) — highest on the Pamir Hwy",
          "Short walk near the pass for panoramic views",
          "Lunch in Murghab (fuel, cash, SIM if wanted)",
          "Optional yak-riding + Kyrgyz nomadic yurt visit",
          "Continue to Alichur village",
          "Guesthouse"
        ],
        "altitude": "3,900 m",
        "weather": "Cold high plateau — 8-14°C day, frost at night. Altitude sickness risk",
        "wifi": "Some guesthouses in Murghab; none in Alichur (solar power only)",
        "cell": "Tcell has some coverage in Murghab; none in Alichur"
      }
    },
    {
      "id": "maljuran", "days": "9", "date": "Aug 13", "note": "Tour D8 · Mahan Peak hike", "tour": true,
      "details": {
        "itinerary": [
          "Short drive to Maljuran Valley",
          "11 km hike, 5-6 hr — panoramic viewpoint, then Mahan Peak (4,400 m) for those keen",
          "Views over Yashilkul, Bulunkul, Alichur Valley",
          "Return to yurt camp, natural hot spring, homemade dinner"
        ],
        "altitude": "3,750 m",
        "weather": "Cold nights, cool days — hot spring feels excellent",
        "wifi": "None",
        "cell": "None"
      }
    },
    {
      "id": "langar", "days": "10", "date": "Aug 14", "note": "Tour D9 · Kargush + Panorama Ridge", "tour": true,
      "details": {
        "itinerary": [
          "Watch morning yak-milking and butter-churning",
          "Drive to Kargush Pass",
          "Hike Panorama Ridge (4,800 m) — Afghan Wakhan + Great Pamir views",
          "GBAO permit checkpoint at Afghan border",
          "Drive along Pamir river into Wakhan corridor",
          "Great views of Hindu Kush (Pakistan) approaching Wakhan valley",
          "Homestay in Langar"
        ],
        "altitude": "2,900 m",
        "weather": "Warmer — 15-25°C day, 5-10°C night. Jacket needed",
        "wifi": "None",
        "cell": "None"
      }
    },
    {
      "id": "khorog", "days": "11", "date": "Aug 15", "note": "Tour D10 · Yamchun + Bibi Fatima", "tour": true,
      "details": {
        "itinerary": [
          "Detour to 12th-c. Yamchun Fortress",
          "Bibi Fatima hot springs (mineral-rich)",
          "Brief stop at Khaaka Fortress near Namadgut village",
          "Continue to Khorog",
          "Afternoon: Regional Museum + Central Park",
          "Evening: Botanical Garden hike, café dinner, hotel"
        ],
        "altitude": "2,123 m",
        "weather": "Mild — 20-27°C day, 10-15°C night",
        "wifi": "Good at hotels — restock supplies here",
        "cell": "Tcell coverage — first real signal since Osh"
      }
    },
    {
      "id": "bartang", "days": "12", "date": "Aug 16", "note": "Tour D11 · Jizeu hike", "tour": true,
      "details": {
        "itinerary": [
          "Drive 3 hr up Bartang Valley",
          "Cross bridge off the road, walk 6 km / 2 hr to Jizeu village",
          "Tree-lined river lakes",
          "Homestay — no shop, no electricity, pit toilet. Bring food & water",
          "Charge everything before arrival — solar power only"
        ],
        "altitude": "2,083 m (Jizeu village)",
        "weather": "Warm days, cool nights",
        "wifi": "None",
        "cell": "None"
      }
    },
    {
      "id": "kalaikhum", "days": "13", "date": "Aug 17", "note": "Tour D12", "tour": true,
      "details": {
        "itinerary": [
          "2 hr walk back to car",
          "Drive 4 hr along the Panj to Darvoz district",
          "Road widens at the Vanj valley confluence",
          "Continue along the Afghan border to Kalaikhum",
          "Guesthouse"
        ],
        "altitude": "1,200 m",
        "weather": "Warm — 25-32°C day, 15-20°C night",
        "wifi": "Guesthouse may have limited wifi",
        "cell": "Some Tcell coverage"
      }
    },
    {
      "id": "dushanbe", "days": "14", "date": "Aug 18", "note": "Tour D13 · Vatan Hotel 1 night", "tour": true,
      "details": {
        "itinerary": [
          "Drive along the Panj (spectacular villages + gorges)",
          "Cross Shurobod Pass before Kulob",
          "Lunch at a chaikhana",
          "Visit 11th-c. Hulbuk Palace",
          "Views of Nurek hydro station in the distance",
          "Arrive Dushanbe ~3-4 PM, driver drops at Vatan Hotel"
        ],
        "altitude": "750 m",
        "weather": "Hot — 32-36°C day, 18-22°C night, dry",
        "wifi": "Good at hotel",
        "cell": "Full coverage"
      }
    },
    {
      "id": "samarkand", "days": "15-17", "date": "Aug 19-21", "note": "taxi transfer from Dushanbe on Aug 19",
      "details": {
        "itinerary": [
          "Aug 19: Checkout Vatan by 12:00; taxi transfer Dushanbe → Samarkand (5-6 hr via Anzob Tunnel + Panjakent/Sarazm border); arrive evening, check into Samaria Terrace",
          "Aug 20: Registan (morning + sunset), Shah-i-Zinda early, Bibi-Khanym + Siab bazaar",
          "Aug 21: Gur-e-Amir, Ulugh Beg Observatory, evening at Registan light show"
        ],
        "altitude": "700 m",
        "weather": "Hot summer — 33-38°C day, 20°C night, dry",
        "wifi": "Everywhere in Samarkand",
        "cell": "Buy Uzbek SIM on arrival (Ucell, Beeline UZ, Mobiuz) — good coverage"
      }
    },
    {
      "id": "bukhara", "days": "18-20", "date": "Aug 22-24", "note": "Afrosiyob 10:59 → 12:36 · checkout noon Aug 24",
      "details": {
        "itinerary": [
          "Aug 22: Morning in Samarkand; Afrosiyob 10:59 → 12:36; check into Komil Boutique; Poi Kalyan at golden hour",
          "Aug 23: Ark of Bukhara morning; old town wander; siesta in the heat; Lyabi-Hauz evening",
          "Aug 24: Checkout 12:00; luggage at hotel; evening dinner; catch overnight train 054ЩА at 00:02 (technically Aug 25)"
        ],
        "altitude": "225 m",
        "weather": "Very hot desert — 35-40°C day, 22°C night",
        "wifi": "Good at hotel",
        "cell": "Full coverage"
      }
    },
    {
      "id": "tashkent", "days": "21-22", "date": "Aug 25-26", "note": "overnight train arrives 07:28 · fly out 09:35 Aug 26",
      "details": {
        "itinerary": [
          "Aug 25: Arrive Tashkent Janubiy 07:28; check into hotel (⚠ NOT YET BOOKED); Chorsu Bazaar morning; Soviet metro tour; rest before flight",
          "Aug 26: Early transfer to Tashkent Intl; TK 369 09:35 → IST 12:55; TK 17 16:40 → YYZ 20:15"
        ],
        "altitude": "455 m",
        "weather": "Hot — 33-37°C day, 20°C night",
        "wifi": "Good everywhere",
        "cell": "Full coverage"
      }
    }
  ],
  "trainLegs": [
    ["samarkand", "bukhara"],
    ["bukhara", "tashkent"]
  ],
  "route": [
    "bishkek",
    "burana-tower",
    "song-kul",
    "tash-rabat",
    "kazarman",
    "osh",
    { "lat": 39.7211, "lng": 73.2578, "name": "Sary-Tash" },
    { "lat": 39.6800, "lng": 72.9300, "name": "Sary-Mogol" },
    "tulpar-kul",
    "karakul-tj",
    "murghab",
    "alichur",
    "maljuran",
    "langar",
    "yamchun",
    { "lat": 36.7247, "lng": 71.6003, "name": "Ishkashim" },
    "khorog",
    { "lat": 37.9475, "lng": 71.5458, "name": "Rushan" },
    "bartang",
    "kalaikhum",
    "hulbuk",
    "dushanbe",
    "panjakent",
    "samarkand",
    "bukhara",
    "tashkent"
  ]
};

window.PLACES = {
  "cities": [
    {
      "id": "samarkand",
      "name": "Samarkand",
      "country": "Uzbekistan",
      "lat": 39.6547,
      "lng": 66.9597,
      "rating": 5,
      "notes": "Timur's capital, most spectacular city on the Silk Road. 2-3 nights.",
      "image": "images/samarkand.jpg",
      "attractions": [
        {
          "id": "registan",
          "name": "Registan",
          "lat": 39.6548,
          "lng": 66.9758,
          "rating": 5,
          "notes": "Iconic trio of madrasas. Go at sunset and again for the evening light show.",
          "image": "images/registan.jpg"
        },
        {
          "id": "shah-i-zinda",
          "name": "Shah-i-Zinda",
          "lat": 39.6658,
          "lng": 66.9881,
          "rating": 5,
          "notes": "Avenue of mausoleums with stunning tilework. Less crowded early morning.",
          "image": "images/shah-i-zinda.jpg"
        },
        {
          "id": "gur-e-amir",
          "name": "Gur-e-Amir",
          "lat": 39.6486,
          "lng": 66.9689,
          "rating": 4,
          "notes": "Timur's tomb. Small but intense interior.",
          "image": "images/gur-e-amir.jpg"
        },
        {
          "id": "bibi-khanym",
          "name": "Bibi-Khanym Mosque",
          "lat": 39.6617,
          "lng": 66.9781,
          "rating": 4,
          "notes": "Massive mosque across from the Siab bazaar.",
          "image": "images/bibi-khanym.jpg"
        }
      ]
    },
    {
      "id": "bukhara",
      "name": "Bukhara",
      "country": "Uzbekistan",
      "lat": 39.7747,
      "lng": 64.4286,
      "rating": 5,
      "notes": "Best-preserved medieval city in Central Asia. Wander the old town; 2 nights.",
      "image": "images/bukhara.jpg",
      "attractions": [
        {
          "id": "poi-kalyan",
          "name": "Poi Kalyan Complex",
          "lat": 39.7761,
          "lng": 64.4141,
          "rating": 5,
          "notes": "Kalyan Minaret + mosque + Mir-i-Arab Madrasa. Heart of old Bukhara.",
          "image": "images/poi-kalyan.jpg"
        },
        {
          "id": "lyabi-hauz",
          "name": "Lyabi-Hauz",
          "lat": 39.7753,
          "lng": 64.4197,
          "rating": 4,
          "notes": "Pond square with teahouses and mulberry trees. Good for evenings.",
          "image": "images/lyabi-hauz.jpg"
        },
        {
          "id": "ark-fortress",
          "name": "Ark of Bukhara",
          "lat": 39.7781,
          "lng": 64.4094,
          "rating": 4,
          "notes": "Royal fortress, 5th century origins. Museum inside.",
          "image": "images/ark-fortress.jpg"
        }
      ]
    },
    {
      "id": "tashkent",
      "name": "Tashkent",
      "country": "Uzbekistan",
      "lat": 41.2995,
      "lng": 69.2401,
      "rating": 3,
      "notes": "Capital, likely arrival/departure. 1 night for metro + Chorsu.",
      "image": "images/tashkent.jpg",
      "attractions": [
        {
          "id": "chorsu-bazaar",
          "name": "Chorsu Bazaar",
          "lat": 41.3264,
          "lng": 69.2356,
          "rating": 4,
          "notes": "Enormous domed market, best in the morning.",
          "image": "images/chorsu-bazaar.jpg"
        },
        {
          "id": "tashkent-metro",
          "name": "Tashkent Metro",
          "lat": 41.3111,
          "lng": 69.2797,
          "rating": 3,
          "notes": "Soviet-era stations, each individually designed. Buy a ticket and ride around.",
          "image": "images/tashkent-metro.jpg"
        }
      ]
    },
    {
      "id": "bishkek",
      "name": "Bishkek",
      "country": "Kyrgyzstan",
      "lat": 42.8746,
      "lng": 74.5698,
      "rating": 3,
      "notes": "Relaxed capital, good base for nearby nature. 1-2 nights.",
      "image": "images/bishkek.jpg",
      "attractions": [
        {
          "id": "ala-too-square",
          "name": "Ala-Too Square",
          "lat": 42.8764,
          "lng": 74.6039,
          "rating": 3,
          "notes": "Main square, hourly changing of the guard at the flagpole.",
          "image": "images/ala-too-square.jpg"
        }
      ]
    },
    {
      "id": "osh",
      "name": "Osh",
      "country": "Kyrgyzstan",
      "lat": 40.5283,
      "lng": 72.7985,
      "rating": 4,
      "notes": "Ancient Silk Road city in the Fergana Valley, 2nd largest in Kyrgyzstan. 1-2 nights.",
      "image": "images/osh.jpg",
      "attractions": [
        {
          "id": "sulaiman-too",
          "name": "Sulaiman-Too Sacred Mountain",
          "lat": 40.5311,
          "lng": 72.7828,
          "rating": 5,
          "notes": "UNESCO-listed sacred mountain in the middle of Osh. Great panorama at the top.",
          "image": "images/sulaiman-too.jpg"
        },
        {
          "id": "jayma-bazaar",
          "name": "Jayma Bazaar",
          "lat": 40.5242,
          "lng": 72.7981,
          "rating": 4,
          "notes": "Sprawling riverside bazaar, one of Central Asia's oldest markets.",
          "image": "images/jayma-bazaar.jpg"
        }
      ]
    },
    {
      "id": "panjakent",
      "name": "Panjakent",
      "country": "Tajikistan",
      "lat": 39.4894,
      "lng": 67.6069,
      "rating": 3,
      "notes": "Small town near the ruins of Ancient Panjakent, a 5th-8th c. Sogdian city.",
      "image": "images/panjakent.jpg",
      "attractions": []
    },
    {
      "id": "dushanbe",
      "name": "Dushanbe",
      "country": "Tajikistan",
      "lat": 38.5598,
      "lng": 68.7870,
      "rating": 3,
      "notes": "Capital, start/end of the Pamir Highway. 1 night.",
      "image": "images/dushanbe.jpg",
      "attractions": []
    },
    {
      "id": "kazarman",
      "name": "Kazarman",
      "country": "Kyrgyzstan",
      "lat": 41.4000,
      "lng": 74.0500,
      "rating": 3,
      "notes": "Remote village along the Naryn river, homestay stop between Tash Rabat and Osh.",
      "image": "images/kazarman.jpg",
      "attractions": []
    },
    {
      "id": "alichur",
      "name": "Alichur",
      "country": "Tajikistan",
      "lat": 37.8500,
      "lng": 73.6100,
      "rating": 3,
      "notes": "Tiny Pamir village at 3,870m on a wide steppe plateau. Guesthouse overnight.",
      "image": "images/alichur.jpg",
      "attractions": []
    },
    {
      "id": "murghab",
      "name": "Murghab",
      "country": "Tajikistan",
      "lat": 38.1706,
      "lng": 73.9661,
      "rating": 3,
      "notes": "'Heart of the Eastern Pamirs' at 3,650m — fuel, SIMs, supplies. Tour stops for lunch.",
      "image": "",
      "attractions": []
    },
    {
      "id": "langar",
      "name": "Langar",
      "country": "Tajikistan",
      "lat": 37.0428,
      "lng": 72.6667,
      "rating": 4,
      "notes": "Wakhan valley village at the confluence of the Pamir and Wakhan rivers. Homestay.",
      "image": "",
      "attractions": []
    },
    {
      "id": "khorog",
      "name": "Khorog",
      "country": "Tajikistan",
      "lat": 37.4897,
      "lng": 71.5544,
      "rating": 4,
      "notes": "Capital of GBAO, on the Panj river facing Afghanistan. Botanical garden, regional museum.",
      "image": "images/khorog.jpg",
      "attractions": []
    },
    {
      "id": "kalaikhum",
      "name": "Kalaikhum (Qal'ai-Khumb)",
      "country": "Tajikistan",
      "lat": 38.4619,
      "lng": 70.7750,
      "rating": 3,
      "notes": "Town in Darvoz district, on the Afghan border along the Panj river. Last Pamir overnight.",
      "image": "",
      "attractions": []
    }
  ],
  "places": [
    {
      "id": "burana-tower",
      "name": "Burana Tower",
      "country": "Kyrgyzstan",
      "category": "monument",
      "lat": 42.7469,
      "lng": 75.2486,
      "rating": 4,
      "notes": "11th-century minaret, remains of the Karakhanid city of Balasagun. Day trip from Bishkek.",
      "image": "images/burana-tower.jpg"
    },
    {
      "id": "song-kul",
      "name": "Song-Kul Lake",
      "country": "Kyrgyzstan",
      "category": "nature",
      "lat": 41.8500,
      "lng": 75.1333,
      "rating": 5,
      "notes": "High-altitude alpine lake, yurt stays with nomad families. 1-2 nights.",
      "image": "images/song-kul.jpg"
    },
    {
      "id": "tash-rabat",
      "name": "Tash Rabat",
      "country": "Kyrgyzstan",
      "category": "monument",
      "lat": 40.8232,
      "lng": 75.2888,
      "rating": 5,
      "notes": "Stone Silk Road caravanserai at 3,200m. 15th-c. (possibly older). Yurt overnight nearby.",
      "image": "images/tash-rabat.jpg"
    },
    {
      "id": "tulpar-kul",
      "name": "Tulpar-Kul Lake (Lenin Peak BC)",
      "country": "Kyrgyzstan",
      "category": "nature",
      "lat": 39.4500,
      "lng": 72.8500,
      "rating": 5,
      "notes": "Cluster of lakes at 3,500m below Lenin Peak (7,134m). Yurt camp. Hike to Traveler's Pass.",
      "image": "images/tulpar-kul.jpg"
    },
    {
      "id": "karakul-tj",
      "name": "Karakul Lake (Tajikistan)",
      "country": "Tajikistan",
      "category": "nature",
      "lat": 39.0400,
      "lng": 73.4200,
      "rating": 5,
      "notes": "Meteorite-impact lake at 3,900m, totally different from Karakul in Uzbekistan. Guesthouse village.",
      "image": "images/karakul-tj.jpg"
    },
    {
      "id": "maljuran",
      "name": "Maljuran Valley",
      "country": "Tajikistan",
      "category": "nature",
      "lat": 37.7200,
      "lng": 72.9500,
      "rating": 4,
      "notes": "Hidden valley near Bulunkul/Yashilkul. Yurt camp, hot spring, hike to Mahan Peak (4,400m).",
      "image": "images/maljuran.jpg"
    },
    {
      "id": "yamchun",
      "name": "Yamchun Fortress",
      "country": "Tajikistan",
      "category": "monument",
      "lat": 37.0300,
      "lng": 72.4200,
      "rating": 4,
      "notes": "12th-c. hilltop fort in the Wakhan valley. Nearby Bibi Fatima hot springs.",
      "image": ""
    },
    {
      "id": "bartang",
      "name": "Bartang Valley (Jizeu)",
      "country": "Tajikistan",
      "category": "nature",
      "lat": 38.0500,
      "lng": 71.6500,
      "rating": 4,
      "notes": "Side valley off the Panj. Trailhead to the Jizeu hike — tree-lined river lakes, no road, no shop.",
      "image": "images/bartang.jpg"
    },
    {
      "id": "hulbuk",
      "name": "Hulbuk Palace",
      "country": "Tajikistan",
      "category": "monument",
      "lat": 37.8050,
      "lng": 69.6464,
      "rating": 3,
      "notes": "11th-c. medieval palace excavation site in Khatlon region, visited en route Dushanbe.",
      "image": "images/hulbuk.jpg"
    }
  ]
};
