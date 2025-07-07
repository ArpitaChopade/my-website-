const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/my-website-/',
  '/my-website-/index.html',
  '/my-website-/manifest.json',
  '/my-website-/styles.css',
  '/my-website-/app.js',
  '/my-website-/icons/icon-192.png',
  '/my-website-/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
