const cacheName = 'my-site-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css', // add your CSS files here
  '/script.js',  // add your JS files here
  // add other files/assets needed offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
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
