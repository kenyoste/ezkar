const CACHE_NAME = '1.000.000.03';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.webp',
  './logo.png',
  './üstlogo.webp',
  './üstlogo.png',
  './src/fonts/Loubag-Black.ttf',
  './src/fonts/Loubag-Light.ttf',
  './src/img/android/android-launchericon-512-512.png',
  './src/img/android/android-launchericon-192-192.png',
  './src/img/android/android-launchericon-144-144.png',
  './src/img/android/android-launchericon-96-96.png',
  './src/img/android/android-launchericon-72-72.png',
  './src/img/android/android-launchericon-48-48.png',
  './src/img/ios/180.png',
  './src/img/ios/152.png',
  './src/img/ios/144.png',
  './src/img/ios/120.png',
  './src/img/ios/114.png',
  './src/img/ios/1024.png',
  './src/img/ios/512.png',
  './src/img/ios/256.png',
  './src/img/ios/192.png',
  './src/img/ios/128.png',
  './src/img/ios/64.png',
  './src/img/ios/32.png',
  './src/img/ios/16.png',
  './src/js/dualar.js',
  './src/js/script.js',
  './src/style/style.css'
];

// External URL'ler (opsiyonel cache)
const externalUrls = [
  'https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Playwrite+DE+Grund:wght@100..400&family=Readex+Pro:wght@160..700&family=Reem+Kufi+Fun:wght@400..700&family=Reem+Kufi+Ink&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ruwudu:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&family=Vazirmatn:wght@100..900&display=swap',
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

  // sw.js hiç önbelleğe alınmasın; güncelleme kontrolü her zaman güncel dosyayı görsün
  if (event.request.url.includes('sw.js')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
    );
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
