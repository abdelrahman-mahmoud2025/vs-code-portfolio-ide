const SW_VERSION = "v3";
const CORE_CACHE = `portfolio-core-${SW_VERSION}`;
const ASSET_CACHE = `portfolio-assets-${SW_VERSION}`;
const CORE_FILES = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/pwa-icon.svg",
  "/icons/icon-192x192.webp",
  "/icons/icon-512x512.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CORE_CACHE && key !== ASSET_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const cloned = response.clone();
            caches.open(CORE_CACHE).then((cache) => cache.put("/index.html", cloned));
          }
          return response;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  const staticResource =
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "manifest";

  if (!staticResource) return;

  event.respondWith(
    caches.open(ASSET_CACHE).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => cached);

        return cached || networkFetch;
      })
    )
  );
});
