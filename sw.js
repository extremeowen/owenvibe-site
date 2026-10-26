/* Сервіс-воркер: сайт працює офлайн і відкривається миттєво з кешу.
   Коли щось зміниш у файлах — підніми версію нижче (v2, v3...),
   інакше браузер показуватиме стару копію. */
const CACHE = "extremeowen-v24";
const OFFLINE = "./offline.html";

const ASSETS = [
  "./",
  "./index.html",
  "./404.html",
  "./offline.html",
  "./styles.css",
  "./script.js",
  "./avatar.jpg",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./favicon-32.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./og-image.png"
];

/* аварійна сторінка: показується, навіть якщо кеш зовсім порожній */
const FALLBACK = `<!DOCTYPE html><html lang="uk"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>extremeowen — немає з'єднання</title>
<style>
:root{color-scheme:dark}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#08080a;color:#f5f5f7;
font:16px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;text-align:center;padding:24px}
.box{max-width:380px;display:grid;gap:12px;justify-items:center}
.mark{width:56px;height:56px;border-radius:18px;display:grid;place-items:center;font-size:24px;
background:linear-gradient(135deg,#0071e3,#7b61ff)}
h1{margin:0;font-size:20px}p{margin:0;color:#9a9aa2;font-size:14px}
a{margin-top:8px;color:#5aa7ff;text-decoration:none;font-size:14px}
</style></head><body><div class="box"><div class="mark">⚡</div>
<h1>Немає з'єднання</h1><p>Сайт збережено в кеші — відкрий, коли повернеться інтернет.</p>
<a href="./">Спробувати ще раз</a></div></body></html>`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // кожен файл окремо: якщо один не завантажився, решта все одно в кеші
      await Promise.allSettled(
        ASSETS.map((url) => cache.add(new Request(url, { cache: "reload" })).catch(() => null))
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));

      // страховка: якщо під час встановлення щось не долетіло — довантажуємо ключові файли
      const cache = await caches.open(CACHE);
      const essential = ["./index.html", "./offline.html", "./styles.css", "./script.js"];
      await Promise.allSettled(
        essential.map(async (url) => {
          const hit = await cache.match(url);
          if (hit) return null;
          return cache.add(new Request(url, { cache: "reload" })).catch(() => null);
        })
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function navigateFallback(request) {
  // шукаємо в усіх кешах — і в нашому, і в тому, що зробила кнопка «зберегти офлайн»
  const exact = await caches.match(request);
  if (exact) return exact;

  const index = await caches.match("./index.html");
  if (index) return index;

  const offline = await caches.match(OFFLINE);
  if (offline) return offline;

  return new Response(FALLBACK, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;

  // навігація: спершу мережа (щоб оновлення долітали), офлайн — кеш, далі аварійна сторінка
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => navigateFallback(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE);
          const offline = await cache.match(OFFLINE);
          return offline || new Response("", { status: 503, statusText: "offline" });
        });
    })
  );
});






