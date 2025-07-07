const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/my-website-/',
  '/my-website-/index.html',
  '/my-website-/manifest.json',
  '/my-website-/style.css',
  '/my-website-/app.js',
  '/my-website-/logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Activate new SW immediately
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    clients.claim()  // Take control of all pages immediately
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
