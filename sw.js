const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/my-website-/',            // root page
  '/my-website-/index.html',
  '/my-website-/manifest.json',
  '/my-website-/style.css',
  '/my-website-/app.js',
  '/my-website-/logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    }).catch(err => {
      console.error('Cache addAll failed:', err);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
