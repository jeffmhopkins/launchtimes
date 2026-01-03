const CACHE_NAME = 'launchtimes-v1';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json'
  // Add icons here if you upload them, e.g. './icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
