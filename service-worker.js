!function(){"use strict";const e=["client/card.a4b88720.js","client/index.f04043fb.js","client/index.c8a6d421.js","client/index.e3bb2d65.js","client/[slug].7e05cbbe.js","client/client.2d29ddde.js","client/[slug].6c5b094e.js","client/client.bdb62c69.js"].concat(["service-worker-index.html","CNAME","LICENSE","favicon.png","images/areo/fast.mp4","images/areo/objExport.mp4","images/areo/splash.jpg","images/areo/splash_half.jpg","images/areo/splash_small.jpg","images/areo/threeDPrint.mp4","images/areo-browser/alt.gif","images/areo-browser/fileCount.jpg","images/areo-browser/fileCount_half.jpg","images/areo-browser/mobile.jpg","images/areo-browser/mobile_half.jpg","images/areo-browser/normal.jpg","images/areo-browser/resolution.jpg","images/areo-browser/splash.jpg","images/areo-browser/splash_half.jpeg","images/areo-browser/splash_small.jpeg","images/areo-browser/ve.gif","images/articles/hello-motivation/desk.jpg","images/juno-observer/detail.jpg","images/juno-observer/detail_half.jpeg","images/juno-observer/fixedRot.jpg","images/juno-observer/fixedRot_half.jpeg","images/juno-observer/perijoves.jpg","images/juno-observer/perijoves_half.jpeg","images/juno-observer/splash.jpg","images/juno-observer/splash_half.jpeg","images/juno-observer/splash_small.jpeg","index.css","logo-192.png","logo-512.png","manifest.json","profile.jpg","tailwind.css","testImage.jpg"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1585158242761").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1585158242761"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&s.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585158242761").then(async s=>{try{const a=await fetch(e.request);return s.put(e.request,a.clone()),a}catch(a){const o=await s.match(e.request);if(o)return o;throw a}}))))})}();
