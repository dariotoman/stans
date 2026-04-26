window.ITINERARY = {
  "name": "23-Day Option B",
  "stops": [
    { "id": "bishkek", "days": "1-2", "note": "Ala-Archa day hike" },
    { "id": "burana-tower", "days": "3", "note": "morning en route east" },
    { "id": "issyk-kul", "days": "3-4", "note": "Karakol / Jeti-Oguz" },
    { "id": "song-kul", "days": "5-6", "note": "yurt stay" },
    { "id": "osh", "days": "7-8", "note": "Sulaiman-Too, bazaar" },
    { "id": "pamir-highway", "days": "9-16", "note": "full M41 + Wakhan loop" },
    { "id": "dushanbe", "days": "17", "note": "rest day" },
    { "id": "iskanderkul", "days": "17", "note": "detour on the way out" },
    { "id": "panjakent", "days": "18", "note": "+ Seven Lakes if time" },
    { "id": "samarkand", "days": "19-20" },
    { "id": "bukhara", "days": "21-22", "note": "Afrosiyob from Samarkand" },
    { "id": "tashkent", "days": "23", "note": "fly out" }
  ],
  "trainLegs": [
    ["samarkand", "bukhara"],
    ["bukhara", "tashkent"]
  ],
  "route": [
    "bishkek",
    "burana-tower",
    "issyk-kul",
    { "lat": 42.2056, "lng": 75.7447, "name": "Kochkor" },
    "song-kul",
    { "lat": 42.0080, "lng": 74.8470, "name": "Chaek" },
    { "lat": 42.1833, "lng": 73.2150, "name": "Suusamyr Valley" },
    { "lat": 41.8750, "lng": 72.9427, "name": "Toktogul" },
    { "lat": 41.3417, "lng": 72.2170, "name": "Tash-Kumyr" },
    { "lat": 40.9333, "lng": 72.8000, "name": "Jalal-Abad" },
    "osh",
    { "lat": 39.7211, "lng": 73.2578, "name": "Sary-Tash" },
    { "lat": 39.6336, "lng": 73.4811, "name": "Kyzylart Pass" },
    { "lat": 39.0310, "lng": 73.5060, "name": "Karakul Lake (Pamir)" },
    { "lat": 38.1706, "lng": 73.9661, "name": "Murghab" },
    { "lat": 37.8497, "lng": 73.6125, "name": "Alichur" },
    { "lat": 37.4897, "lng": 71.5544, "name": "Khorog" },
    { "lat": 37.9475, "lng": 71.5458, "name": "Rushan" },
    { "lat": 38.4619, "lng": 70.7750, "name": "Qal'ai-Khumb" },
    { "lat": 38.8583, "lng": 69.5119, "name": "Obigarm" },
    "dushanbe",
    "iskanderkul",
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
      "id": "khiva",
      "name": "Khiva",
      "country": "Uzbekistan",
      "lat": 41.3784,
      "lng": 60.3633,
      "rating": 4,
      "notes": "Walled inner city (Itchan Kala) feels like an open-air museum. 1 night enough.",
      "image": "images/khiva.jpg",
      "attractions": []
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
      "id": "kokand",
      "name": "Kokand",
      "country": "Uzbekistan",
      "lat": 40.5392,
      "lng": 70.9425,
      "rating": 3,
      "notes": "Historic Fergana Valley khanate capital. Half-day stop en route.",
      "image": "images/kokand.jpg",
      "attractions": [
        {
          "id": "khudayar-khan-palace",
          "name": "Khudayar Khan Palace",
          "lat": 40.5386,
          "lng": 70.9378,
          "rating": 4,
          "notes": "Ornately tiled 19th-century palace of the last khan of Kokand.",
          "image": "images/khudayar-khan-palace.jpg"
        }
      ]
    },
    {
      "id": "khujand",
      "name": "Khujand",
      "country": "Tajikistan",
      "lat": 40.2794,
      "lng": 69.6319,
      "rating": 3,
      "notes": "Tajikistan's 2nd city, on the Syr Darya. Panjshanbe Bazaar is the highlight.",
      "image": "images/khujand.jpg",
      "attractions": [
        {
          "id": "khujand-jami",
          "name": "Masjidi Jami (Panjshanbe)",
          "lat": 40.2833,
          "lng": 69.6222,
          "rating": 3,
          "notes": "Sheikh Massal ad-Din mosque complex next to Panjshanbe Bazaar.",
          "image": "images/khujand-jami.jpg"
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
      "id": "almaty",
      "name": "Almaty",
      "country": "Kazakhstan",
      "lat": 43.2389,
      "lng": 76.8897,
      "rating": 4,
      "notes": "Mountain-backdrop city, good cafes and a cable-car up to Shymbulak. 2 nights.",
      "image": "images/almaty.jpg",
      "attractions": [
        {
          "id": "medeu",
          "name": "Medeu Ice Rink",
          "lat": 43.1594,
          "lng": 77.0556,
          "rating": 3,
          "notes": "High-altitude skating rink, jumping-off point for Shymbulak cable car.",
          "image": "images/medeu.jpg"
        },
        {
          "id": "shymbulak",
          "name": "Shymbulak",
          "lat": 43.1289,
          "lng": 77.0789,
          "rating": 4,
          "notes": "Ski resort at 2,260m. Summer hiking, winter skiing.",
          "image": "images/shymbulak.jpg"
        },
        {
          "id": "kok-tobe",
          "name": "Kok-Tobe Hill",
          "lat": 43.2336,
          "lng": 76.9769,
          "rating": 3,
          "notes": "City viewpoint, cable car from downtown.",
          "image": "images/kok-tobe.jpg"
        }
      ]
    },
    {
      "id": "astana",
      "name": "Astana (Nur-Sultan)",
      "country": "Kazakhstan",
      "lat": 51.1694,
      "lng": 71.4491,
      "rating": 2,
      "notes": "Futuristic capital, long way north. Skip unless flying through.",
      "image": "images/astana.jpg",
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
      "id": "ashgabat",
      "name": "Ashgabat",
      "country": "Turkmenistan",
      "lat": 37.9601,
      "lng": 58.3261,
      "rating": 3,
      "notes": "White-marble capital, strict visa regime. Worth a day.",
      "image": "images/ashgabat.jpg",
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
      "id": "issyk-kul",
      "name": "Issyk-Kul Lake",
      "country": "Kyrgyzstan",
      "category": "nature",
      "lat": 42.4167,
      "lng": 77.2500,
      "rating": 4,
      "notes": "10th-largest lake in the world, warm & salty, never freezes. Multi-day loop.",
      "image": "images/issyk-kul.jpg"
    },
    {
      "id": "marquzor-lakes",
      "name": "Marquzor (Seven) Lakes",
      "country": "Tajikistan",
      "category": "nature",
      "lat": 39.1500,
      "lng": 68.1000,
      "rating": 4,
      "notes": "Haft Kul — chain of seven turquoise alpine lakes in the Fann Mountains, accessed from Panjakent.",
      "image": "images/marquzor-lakes.jpg"
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
      "id": "ala-archa",
      "name": "Ala-Archa National Park",
      "country": "Kyrgyzstan",
      "category": "nature",
      "lat": 42.5667,
      "lng": 74.4833,
      "rating": 4,
      "notes": "Day-hike from Bishkek, glacier views.",
      "image": "images/ala-archa.jpg"
    },
    {
      "id": "charyn-canyon",
      "name": "Charyn Canyon",
      "country": "Kazakhstan",
      "category": "nature",
      "lat": 43.3550,
      "lng": 79.0750,
      "rating": 4,
      "notes": "Mini Grand Canyon, day trip from Almaty.",
      "image": "images/charyn-canyon.jpg"
    },
    {
      "id": "pamir-highway",
      "name": "Pamir Highway (M41)",
      "country": "Tajikistan",
      "category": "route",
      "lat": 38.5000,
      "lng": 73.0000,
      "rating": 5,
      "notes": "Epic high-altitude road trip, Khorog to Osh. 7-10 days + 4WD.",
      "image": "images/pamir-highway.jpg"
    },
    {
      "id": "iskanderkul",
      "name": "Iskanderkul Lake",
      "country": "Tajikistan",
      "category": "nature",
      "lat": 39.0781,
      "lng": 68.3722,
      "rating": 4,
      "notes": "Turquoise mountain lake, named after Alexander the Great.",
      "image": "images/iskanderkul.jpg"
    },
    {
      "id": "darvaza",
      "name": "Darvaza Gas Crater",
      "country": "Turkmenistan",
      "category": "nature",
      "lat": 40.2525,
      "lng": 58.4394,
      "rating": 4,
      "notes": "'Door to Hell' — burning gas crater in the desert. Overnight camp.",
      "image": "images/darvaza.jpg"
    }
  ]
};
