!function(){"use strict";const e=["client/pageLayout.e728335b.js","client/index.e0caba11.js","client/juno-observer.9fc62d3c.js","client/areo-browser.11bfa094.js","client/index.e5a53dfc.js","client/index.9aad7226.js","client/client.21d7cc61.js","client/[slug].fda781ee.js","client/client.8ff2b79b.js"].concat(["service-worker-index.html","favicon.png","index.css","logo-192.png","logo-512.png","manifest.json","profile.jpg","tailwind.css","testImage.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1584645837166").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1584645837166"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1584645837166").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
