const CACHE_NAME = 'korean-app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './icon.png'  // ←ここにアイコンのファイル名を追加！
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン時はキャッシュから応答
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
