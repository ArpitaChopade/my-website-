const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/my-website-/',
  '/my-website-/blob/main/index.html',
  '/my-website-/blob/main/manifest.json',
  '/my-website-/blob/main/styles.css',
  '/my-website-/blob/main/app.js',
  '/my-website-/blob/main/logo.svg',
  '/my-website-/blob/main/sw.js',
  '/my-website-/blob/main/main.js',
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
