const CACHE_NAME = '0.000.000.01';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './src/fonts/Loubag-Black.ttf',
  './src/fonts/Loubag-Light.ttf',
  './src/img/android-chrome-192x192.png',
  './src/img/android-chrome-512x512.png',
  './src/img/apple-touch-icon.png',
  './src/img/favicon-16x16.png',
  './src/img/favicon-32x32.png',
  './src/img/favicon.ico',
  './src/js/dualar.js',
  './src/js/script.js',
  './src/style/style.css'
];

// External URL'ler (opsiyonel cache)
const externalUrls = [
  'https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&family=Reem+Kufi+Ink&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Install event - Cache dosyaları
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache açıldı:', CACHE_NAME);
        // Ana dosyaları cache'le (hata toleranslı)
        return Promise.allSettled(
          urlsToCache.map(url => {
            return cache.add(url).catch(err => {
              console.warn('Cache hatası:', url, err);
              return null;
            });
          })
        ).then(() => {
          // External URL'leri opsiyonel olarak cache'le
          return Promise.allSettled(
            externalUrls.map(url => {
              return fetch(url)
                .then(response => {
                  if (response.ok) {
                    return cache.put(url, response);
                  }
                })
                .catch(err => {
                  console.warn('External cache hatası:', url, err);
                  return null;
                });
            })
          );
        });
      })
      .then(() => {
        // Install tamamlandı, hemen aktif et
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker install hatası:', err);
      })
  );
});

// Fetch event - Cache'den veya network'ten getir
self.addEventListener('fetch', (event) => {
  // Sadece GET istekleri için cache stratejisi uygula
  if (event.request.method !== 'GET') {
    return;
  }

  // Font dosyaları için network-first stratejisi
  if (event.request.url.includes('.ttf') || event.request.url.includes('Loubag')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Network hatası durumunda cache'den dene
          return caches.match(event.request);
        })
    );
    return;
  }

  // HTML, CSS, JS ve görsel dosyalar için network-first stratejisi
  // Böylece her zaman güncel içerik gösterilir, offline durumda cache kullanılır
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Network'ten başarıyla alındı
        // Geçerli bir response ise cache'e ekle
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch((err) => {
        // Network hatası durumunda cache'den dene
        console.warn('Network hatası, cache\'den getiriliyor:', event.request.url);
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Cache'de de yoksa ve HTML ise index.html'i göster
          if (event.request.destination === 'document' || event.request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
          // Diğer durumlarda hata döndür
          return new Response('Offline', { 
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// Activate event - Eski cache'leri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eski cache siliniyor:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Tüm client'lara kontrolü al
      return self.clients.claim();
    })
  );
});
