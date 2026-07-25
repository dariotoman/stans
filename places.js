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
    { "id": "bishkek",     "days": "1",     "date": "Aug 5",      "note": "arrival 01:00 (TK346)" },
    { "id": "song-kul",    "days": "2",     "date": "Aug 6",      "note": "Tour D1 · via Burana Tower",           "tour": true },
    { "id": "tash-rabat",  "days": "3",     "date": "Aug 7",      "note": "Tour D2 · via Naryn",                   "tour": true },
    { "id": "kazarman",    "days": "4",     "date": "Aug 8",      "note": "Tour D3",                               "tour": true },
    { "id": "osh",         "days": "5",     "date": "Aug 9",      "note": "Tour D4 · via Kaldama Pass",            "tour": true },
    { "id": "tulpar-kul",  "days": "6",     "date": "Aug 10",     "note": "Tour D5 · Sary-Mogol, Lenin Peak BC",   "tour": true },
    { "id": "karakul-tj",  "days": "7",     "date": "Aug 11",     "note": "Tour D6 · Traveler's Pass hike + border","tour": true },
    { "id": "alichur",     "days": "8",     "date": "Aug 12",     "note": "Tour D7 · Ak-Baital Pass + Murghab",    "tour": true },
    { "id": "maljuran",    "days": "9",     "date": "Aug 13",     "note": "Tour D8 · Mahan Peak hike",             "tour": true },
    { "id": "langar",      "days": "10",    "date": "Aug 14",     "note": "Tour D9 · Kargush + Panorama Ridge",    "tour": true },
    { "id": "khorog",      "days": "11",    "date": "Aug 15",     "note": "Tour D10 · Yamchun + Bibi Fatima",      "tour": true },
    { "id": "bartang",     "days": "12",    "date": "Aug 16",     "note": "Tour D11 · Jizeu hike",                 "tour": true },
    { "id": "kalaikhum",   "days": "13",    "date": "Aug 17",     "note": "Tour D12",                              "tour": true },
    { "id": "dushanbe",    "days": "14",    "date": "Aug 18",     "note": "Tour D13 · Vatan Hotel 1 night",        "tour": true },
    { "id": "samarkand",   "days": "15-17", "date": "Aug 19-21",  "note": "taxi transfer from Dushanbe on Aug 19" },
    { "id": "bukhara",     "days": "18-20", "date": "Aug 22-24",  "note": "Afrosiyob 10:59 → 12:36 · checkout noon Aug 24" },
    { "id": "tashkent",    "days": "21-22", "date": "Aug 25-26",  "note": "overnight train arrives 07:28 · fly out 09:35 Aug 26" }
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
