// sw.js

const CACHE_NAME = "your-app-cache-v1";
const urlsToCache = [
  "/",
  "/offline", // Halaman cadangan untuk mode offline
  // Tambahkan URL sumber daya lainnya yang ingin Anda cache
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        // Jika sumber daya tidak ditemukan dalam cache dan offline, arahkan ke halaman cadangan
        if (event.request.mode === "navigate") {
          return caches.match("/offline");
        }
      })
  );
});
