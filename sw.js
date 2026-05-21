const CACHE_NAME = 'ghosl-hanafi-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json', '/icon.png', 'https://i.servimg.com/u/f57/14/57/85/46/unt6it10.jpg'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));