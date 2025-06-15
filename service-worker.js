
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("radiofama-store").then(function(cache) {
      return cache.addAll([
        "/radiofama_splash_audio_vercel.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
