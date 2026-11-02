/* Embergine service worker: offline app shell; updates only when the user taps Update. */
const VERSION = "e4ef8e8f45";
const CACHE = "embergine-" + VERSION, FONTS = "embergine-fonts-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-180.png", "icons/favicon-32.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache:"reload"}))))); });
self.addEventListener("message", e => { if(e.data && e.data.type === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil((async () => { for(const k of await caches.keys()){ if(k.startsWith("embergine-") && k !== CACHE && k !== FONTS) await caches.delete(k); } await self.clients.claim(); })()); });
self.addEventListener("fetch", e => { const req = e.request; if(req.method !== "GET") return; const url = new URL(req.url);
  if(url.origin === location.origin){ if(req.mode === "navigate"){ e.respondWith(caches.match("index.html", {cacheName:CACHE}).then(r => r || fetch(req)).catch(() => caches.match("index.html"))); return; } e.respondWith(caches.match(req, {ignoreSearch:true}).then(r => r || fetch(req))); return; }
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){ e.respondWith(caches.open(FONTS).then(async c => { const hit = await c.match(req); const net = fetch(req).then(r => { if(r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }).catch(() => hit); return hit || net; })); }
});
