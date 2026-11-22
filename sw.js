const C='forest-v3';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;const u=new URL(r.url);if(u.hostname.includes('supabase'))return;
e.respondWith(fetch(r).then(n=>{if(n.ok&&(u.origin==location.origin||u.hostname.includes('gstatic')||u.hostname.includes('googleapis'))){const cp=n.clone();caches.open(C).then(c=>c.put(r,cp))}return n}).catch(()=>caches.match(r)))});
