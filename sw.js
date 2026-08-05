const CORE_CACHE = 'stans-core-v3';
const TILE_CACHE = 'stans-tiles-v2';

const CORE_ASSETS = [
  './',
  './index.html',
  './places.js',
  './route.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  './images/ala-too-square.jpg',
  './images/alichur.jpg',
  './images/ark-fortress.jpg',
  './images/bartang.jpg',
  './images/bibi-khanym.jpg',
  './images/bishkek.jpg',
  './images/bukhara.jpg',
  './images/burana-tower.jpg',
  './images/chorsu-bazaar.jpg',
  './images/dushanbe.jpg',
  './images/gur-e-amir.jpg',
  './images/hulbuk.jpg',
  './images/jayma-bazaar.jpg',
  './images/karakul-tj.jpg',
  './images/kazarman.jpg',
  './images/khorog.jpg',
  './images/khujand-jami.jpg',
  './images/lyabi-hauz.jpg',
  './images/maljuran.jpg',
  './images/osh.jpg',
  './images/panjakent.jpg',
  './images/poi-kalyan.jpg',
  './images/registan.jpg',
  './images/samarkand.jpg',
  './images/shah-i-zinda.jpg',
  './images/song-kul.jpg',
  './images/sulaiman-too.jpg',
  './images/tash-rabat.jpg',
  './images/tashkent-metro.jpg',
  './images/tashkent.jpg',
  './images/tulpar-kul.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CORE_CACHE)
      .then(cache => Promise.allSettled(
        CORE_ASSETS.map(url => cache.add(new Request(url, { cache: 'reload' })).catch(err => {
          console.warn('SW precache failed:', url, err.message);
        }))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CORE_CACHE && k !== TILE_CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname.endsWith('basemaps.cartocdn.com')) {
    event.respondWith(tileCacheFirst(req));
    return;
  }

  if (url.origin === self.location.origin || url.hostname === 'unpkg.com') {
    event.respondWith(coreCacheFirst(req));
    return;
  }
});

async function coreCacheFirst(req) {
  const cache = await caches.open(CORE_CACHE);
  const cached = await cache.match(req, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    if (req.mode === 'navigate') {
      const fallback = await cache.match('./index.html');
      if (fallback) return fallback;
    }
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function tileCacheFirst(req) {
  const cache = await caches.open(TILE_CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    return cached || new Response('', { status: 504 });
  }
}
