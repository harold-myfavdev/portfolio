if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }

const CACHE_NAME = 'my-cache-v1'; // Name your cache
const urlsToCache = [
  '/', // Root HTML file
  '/index.html',
  '/css/main.css',
  '/css/index.css',
  '/js/main.js',
  '/service-worker.js',
  '/js/router.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache); // Pre-cache resources
      })
  );
});
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // If the request is in the cache, return the cached version
          if (response) {
            return response;
          }
  
          // Otherwise, fetch the resource from the network
          return fetch(event.request).then(networkResponse => {
            // Optionally, cache the new resource
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
    );
  });
  self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME]; // Keep only the current cache
  
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
    