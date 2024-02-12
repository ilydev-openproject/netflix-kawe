// public/sw.js

const CACHE_NAME = "your-app-cache-v1";
const urlsToCache = ["/", "/offline"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("/offline");
        }
      })
  );
});
