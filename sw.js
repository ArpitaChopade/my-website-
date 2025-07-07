self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/styles.css',
        '/app.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        // add any other static assets you need cached
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
