<?php
require __DIR__ . '/counter.php';
$totalVisits = getTotalVisitCount();
?>
<!DOCTYPE html>
<html lang="tr" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#d42121">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <!-- Primary Meta Tags -->
    <title>Sabah-Akşam Zikirleri | Sahih Hadislerle Dualar</title>
    <meta name="title" content="Sabah-Akşam Zikirleri | Sahih Hadislerle Dualar">
    <meta name="description" content="Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri. Ayetel Kürsi, İhlas, Felak, Nas sureleri ve Peygamber Efendimiz'in (s.a.v.) tavsiye ettiği günlük dualar. Her zikir için Buhari, Müslim, Tirmizi gibi sahih kaynaklar belirtilmiştir. Ücretsiz ve offline çalışan PWA uygulaması. Hemen kullanmaya başlayın!">
    <meta name="keywords" content="sabah zikirleri, akşam zikirleri, sahih hadisler, günlük dualar, islami zikirler, ayetel kürsi, ihlas suresi, felak suresi, nas suresi, buhari hadisleri, müslim hadisleri, tirmizi hadisleri, dua uygulaması, zikir uygulaması, sahih zikirler, peygamber duaları, islami dua uygulaması, günlük zikir uygulaması, sahih hadis zikirleri, peygamber duaları uygulaması, offline zikir uygulaması, pwa zikir uygulaması, mobil zikir uygulaması">
    <meta name="author" content="kenyoste">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Turkish">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://kenyoste.com/ezkar/">
    <meta property="og:title" content="Sabah-Akşam Zikirleri | Sahih Hadislerle Dualar">
    <meta property="og:description" content="Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri. Buhari, Müslim, Tirmizi gibi sahih kaynaklarla. Peygamber Efendimiz'in (s.a.v.) tavsiye ettiği dualar. Ücretsiz ve offline çalışan PWA uygulaması. Hemen kullanmaya başlayın!">
    <meta property="og:image" content="https://kenyoste.com/ezkar/logo.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Sabah-Akşam Zikirleri Logo">
    <meta property="og:locale" content="tr_TR">
    <meta property="og:site_name" content="Sabah-Akşam Zikirleri">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://kenyoste.com/ezkar/">
    <meta property="twitter:title" content="Sabah-Akşam Zikirleri | Sahih Hadislerle Dualar">
    <meta property="twitter:description" content="Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri. Buhari, Müslim, Tirmizi kaynaklarıyla. Peygamber Efendimiz'in (s.a.v.) tavsiye ettiği dualar. Ücretsiz ve offline çalışan PWA uygulaması.">
    <meta property="twitter:image" content="https://kenyoste.com/ezkar/logo.webp">
    <meta property="twitter:image:alt" content="Sabah-Akşam Zikirleri Logo">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://kenyoste.com/ezkar/">
    
    <!-- Hreflang Tags -->
    <link rel="alternate" hreflang="tr" href="https://kenyoste.com/ezkar/">
    <link rel="alternate" hreflang="x-default" href="https://kenyoste.com/ezkar/">
    
    <!-- Geo Meta Tags -->
    <meta name="geo.region" content="TR">
    <meta name="geo.placename" content="Türkiye">
    <meta name="geo.position" content="39.9334;32.8597">
    <meta name="ICBM" content="39.9334, 32.8597">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    
    <!-- Icons -->
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="src/img/ios/180.png">
    <link rel="icon" type="image/png" sizes="512x512" href="src/img/android/android-launchericon-512-512.png">
    <link rel="icon" type="image/png" sizes="192x192" href="src/img/android/android-launchericon-192-192.png">
    <link rel="icon" type="image/png" sizes="144x144" href="src/img/android/android-launchericon-144-144.png">
    <link rel="icon" type="image/png" sizes="96x96" href="src/img/android/android-launchericon-96-96.png">
    <link rel="icon" type="image/png" sizes="72x72" href="src/img/android/android-launchericon-72-72.png">
    <link rel="icon" type="image/png" sizes="48x48" href="src/img/android/android-launchericon-48-48.png">
    <link rel="icon" type="image/png" sizes="32x32" href="src/img/ios/32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="src/img/ios/16.png">
    <link rel="shortcut icon" href="src/img/ios/16.png">
    
    <!-- Preconnect for Performance (LCP/FCP iyileştirmesi) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    
    <!-- Font Preload (sadece http/https; file:// CORS hatası vermesin diye) -->
    <script>
    (function() {
        var p = window.location.protocol;
        if (p !== 'http:' && p !== 'https:') return;
        var f = ['Loubag-Black.ttf', 'Loubag-Light.ttf'];
        f.forEach(function(name) {
            var link = document.createElement('link');
            link.rel = 'preload';
            link.href = 'src/fonts/' + name;
            link.as = 'font';
            link.type = 'font/ttf';
            link.setAttribute('crossorigin', 'anonymous');
            document.head.appendChild(link);
        });
    })();
    </script>
    
    <!-- Stylesheets: Kritik yol sadece kendi CSS; harici CSS async (render-blocking azaltma) -->
    <link rel="preload" href="src/style/style.css" as="style">
    <link rel="stylesheet" href="src/style/style.css">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Playwrite+DE+Grund:wght@100..400&family=Readex+Pro:wght@160..700&family=Reem+Kufi+Fun:wght@400..700&family=Reem+Kufi+Ink&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ruwudu:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&family=Vazirmatn:wght@100..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Playwrite+DE+Grund:wght@100..400&family=Readex+Pro:wght@160..700&family=Reem+Kufi+Fun:wght@400..700&family=Reem+Kufi+Ink&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ruwudu:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&family=Vazirmatn:wght@100..900&display=swap"></noscript>
    <script>
    function applyFontAwesomeDisplaySwap() {
        var s = document.createElement('style');
        s.textContent = "@font-face{font-family:'Font Awesome 6 Free';font-weight:900;font-style:normal;font-display:swap;src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2') format('woff2')}";
        document.head.appendChild(s);
    }
    </script>
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet';applyFontAwesomeDisplaySwap();">
    <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></noscript>
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Sabah-Akşam Zikirleri",
      "alternateName": "Zikirler",
      "description": "Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri. Ayetel Kürsi, İhlas, Felak, Nas sureleri ve Peygamber Efendimiz'in (s.a.v.) tavsiye ettiği günlük dualar. Her zikir için Buhari, Müslim, Tirmizi, Ebu Davud gibi sahih hadis kaynakları belirtilmiştir. Ücretsiz ve offline çalışan PWA uygulaması.",
      "applicationCategory": "LifestyleApplication",
      "url": "https://kenyoste.com/ezkar/",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "1"
      },
      "featureList": [
        "Sahih hadis kaynaklı sabah zikirleri",
        "Sahih hadis kaynaklı akşam zikirleri",
        "Buhari, Müslim, Tirmizi hadis referansları",
        "Türkçe tercüme ve açıklamalar",
        "Hadis kaynak bilgileri",
        "Offline çalışma desteği",
        "Koyu mod",
        "PWA desteği"
      ],
      "screenshot": "https://kenyoste.com/ezkar/logo.webp",
      "softwareVersion": "1.0",
      "releaseNotes": "Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri uygulaması",
      "datePublished": "2026-02-01",
      "dateModified": "2026-02-01",
      "author": {
        "@type": "Person",
        "name": "kenyoste"
      }
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sabah-Akşam Zikirleri",
      "url": "https://kenyoste.com/ezkar/",
      "description": "Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirleri. Peygamber Efendimiz'in (s.a.v.) tavsiye ettiği dualar ve zikirler. Ücretsiz ve offline çalışan günlük İslami zikir uygulaması.",
      "inLanguage": "tr-TR",
      "publisher": {
        "@type": "Organization",
        "name": "kenyoste"
      }
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://kenyoste.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sabah-Akşam Zikirleri",
          "item": "https://kenyoste.com/ezkar/"
        }
      ]
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Neden Her Gün Zikir Yapılmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zikir, Allah'ı (c.c.) anmak ve hatırlamak demektir. Her gün düzenli olarak zikir yapmak, müminin hayatının ayrılmaz bir parçasıdır. Peygamber Efendimiz (s.a.v.) şöyle buyurmuştur: 'İki kelime vardır ki, dile hafif, mizanda ağır, Rahman'a sevimlidir: Sübhânallahi ve bihamdihî, sübhânallahi'l-azîm' (Buhari, Müslim)."
          }
        },
        {
          "@type": "Question",
          "name": "Zikir Yapmanın Faydaları Nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zikir yapmanın birçok faydası vardır: Kalp huzuru sağlar, Allah'ın rızasını kazanmaya vesile olur, günahların bağışlanmasına ve sevapların artmasına neden olur, şeytanın vesveselerinden korunmaya yardımcı olur, hem dünya hem de ahiret hayatında bereket getirir ve Allah'ı sürekli hatırlamamızı sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "Allah'ı Anmamız Neden Önemlidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kur'an-ı Kerim'de Allah (c.c.) şöyle buyurmuştur: 'Beni anın ki Ben de sizi anayım. Bana şükredin, sakın nankörlük etmeyin.' (Bakara, 152) Allah'ı anmak, O'nun bize verdiği nimetlere şükretmek ve O'na yakınlaşmak demektir. Zikir, bu yakınlaşmanın en güzel yollarından biridir."
          }
        },
        {
          "@type": "Question",
          "name": "Bu uygulama offline çalışır mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, bu uygulama bir PWA (Progressive Web App) olarak tasarlanmıştır ve Service Worker teknolojisi sayesinde internet bağlantısı olmadan da çalışabilir. Tüm zikirler ve içerikler cihazınıza kaydedilir."
          }
        },
        {
          "@type": "Question",
          "name": "Zikirler hangi kaynaklardan alınmıştır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uygulamadaki tüm zikirler sahih hadis kaynaklarından derlenmiştir. Her zikir için Buhari, Müslim, Tirmizi, Ebu Davud gibi güvenilir hadis kaynakları belirtilmiştir."
          }
        }
      ]
    }
    </script>
</head>
<body>
    <!-- ARIA Live Region for Screen Readers -->
    <div id="ariaLiveRegion" aria-live="polite" aria-atomic="true" class="sr-only"></div>
    
    <!-- Loading Spinner -->
    <div id="loadingSpinner" class="loading-spinner" aria-hidden="true">
        <div class="spinner-wrap">
            <img src="logo.webp" alt="" class="spinner-logo" width="44" height="44">
            <div class="spinner"></div>
        </div>
        <p>Yükleniyor...</p>
    </div>
    
    <!-- Toast Notification -->
    <div id="errorToast" class="toast toast-error" role="alert" aria-live="assertive" aria-hidden="true">
        <i class="fas fa-exclamation-circle"></i>
        <span id="errorMessage"></span>
    </div>
    
    <!-- Success Toast -->
    <div id="successToast" class="toast toast-success" role="status" aria-live="polite" aria-hidden="true">
        <i class="fas fa-check-circle"></i>
        <span id="successMessage"></span>
    </div>
    
    <main id="main-content" class="container">
        <header class="header">
            <div class="header-logo">
                <picture>
                    <source srcset="üstlogo.webp" type="image/webp">
                    <img src="üstlogo.png" alt="Sabah-Akşam Zikirleri - Sahih Hadislerle Günlük Dua ve Zikirler Logo" width="190" height="150" fetchpriority="high">
                </picture>
            </div>
            <h1>Sabah-Akşam Zikirleri</h1>
        </header>

        <nav aria-label="Ana navigasyon">
            <div class="buttons-wrapper">
                <div class="button-group" role="tablist" aria-label="Zikir seçimi">
                    <button class="tab-button" 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="aksam-content"
                            id="aksam-tab"
                            onclick="showZikir('aksam', this)">
                       </i> Akşam Zikirleri
                    </button>
                    <button class="tab-button active" 
                    role="tab" 
                    aria-selected="true" 
                    aria-controls="sabah-content"
                    id="sabah-tab"
                    onclick="showZikir('sabah', this)">
              </i> Sabah Zikirleri
            </button>
                </div>
            </div>
        </nav>

                <div class="controls">
                 
                  
                    <button class="help-button control-help-btn" onclick="showHelpModal()" aria-label="Yardım">
                        <i class="fas fa-question-circle"></i>
                    </button>
                    <button class="control-button control-button-square" onclick="toggleFocusMode()" id="focusModeBtn" aria-label="Derin odak modu (tam ekran)" title="Derin odak modu">
                        <i class="fas fa-expand" aria-hidden="true"></i>
                    </button>
                    <a href="namaz-tesbihat.php" class="control-button control-button-home" aria-label="Namaz Tesbihatı" title="Namaz Tesbihatı">
                        <img src="src/img/android/ikon-tesbihat.webp" alt="" width="24" height="24" aria-hidden="true">
                    </a>
                    <button class="control-button" onclick="toggleDarkMode()" id="darkModeBtn" aria-pressed="false">
                        Koyu Mod   
                       </button>
                       <button class="control-button" onclick="toggleTranslation()" id="translationBtn" aria-pressed="false">
                        Tercümeyi Göster 
                     </button>
                   
                </div>

        <section id="sabah-content" class="zikir-content active" aria-label="Sabah Zikirleri"></section>
        <section id="aksam-content" class="zikir-content" aria-label="Akşam Zikirleri"></section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-count-wrap">
                <a href="namaz-tesbihat.php" class="footer-link-tesbihat" style="display:block; margin-bottom:8px; color: var(--primary-red); text-decoration: none; font-weight: 600;">Namaz Tesbihatı →</a>
                <span class="footer-count-row">
                    Toplam okuma:
                    <strong class="footer-visit-count">
                        <span
                            id="visitCount"
                            data-target="<?php echo htmlspecialchars((string)$totalVisits, ENT_QUOTES, 'UTF-8'); ?>"
                        >0</span>
                    </strong>
                </span>
            </div>
            <div class="footer-powered">
                POWERED by <span class="footer-brand">kenyoste</span>
            </div>
        </footer>
    </main>

    <!-- Scroll Progress Indicators -->
    <div class="scroll-progress-container">
        <div class="circular-progress">
            <svg class="progress-ring" width="60" height="60">
                <circle class="progress-ring-circle" cx="30" cy="30" r="25" fill="transparent" stroke="rgba(212, 33, 33, 0.2)" stroke-width="4"/>
                <circle class="progress-ring-circle progress-ring-progress" cx="30" cy="30" r="25" fill="transparent" stroke="#d42121" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="circular-progress-text">
                <span id="circularProgressPercent">0</span>%
            </div>
        </div>
        
    </div>

    <!-- Scroll to Top Button -->
    <button id="scrollToTopBtn" class="scroll-to-top" onclick="scrollToTop()" aria-label="En üste dön">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Derin odak modundan çıkış (sadece focus-mode'da görünür) -->
    <button id="focusModeExitBtn" class="focus-mode-exit" onclick="toggleFocusMode()" aria-label="Tam ekrandan çık" title="Tam ekrandan çık">
        <i class="fas fa-compress-alt" aria-hidden="true"></i>
    </button>

    <!-- PWA Install Prompt -->
    <div id="pwaInstallPrompt" class="pwa-install-prompt">
        <div class="pwa-prompt-content">
            <div class="pwa-icon">
                <picture>
                    <source srcset="logo.webp" type="image/webp">
                    <img src="logo.png" alt="Sabah-Akşam Zikirleri - Sahih Hadislerle Günlük Dua ve Zikirler Logo" width="60" height="60" loading="lazy" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;">
                </picture>
            </div>
            <div class="pwa-text-content">
                <div class="pwa-title">Sabah ve Akşam Zikirleriniz Elinizin Altında</div>
                <div class="pwa-description">Sahih hadis kaynaklarından derlenmiş sabah ve akşam zikirlerini,
                    ana ekranınıza ekleyerek her zaman kolayca okuyabilirsiniz.</div>
            </div>
        </div>
        <div class="pwa-timer-bar">
            <div id="pwaTimerFill" class="pwa-timer-fill"></div>
        </div>
        <div class="pwa-buttons">
            <button class="pwa-btn pwa-btn-add" id="pwaAddBtn">Ekle</button>
            <button class="pwa-btn pwa-btn-close" id="pwaCloseBtn">Kapat</button>
        </div>
    </div>

    <!-- Help Modal -->
    <div id="helpModal" class="help-modal" role="dialog" aria-modal="true" aria-labelledby="helpModalTitle" aria-hidden="true">
        <div class="help-modal-content">
            <div class="help-modal-header">
                <h2 id="helpModalTitle" itemprop="headline">Yardım</h2>
                <button class="help-modal-close" onclick="closeHelpModal()" aria-label="Kapat">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="help-modal-body">
                <div class="help-section">
                    <h3>Dua / Zikir Yazı Tipi</h3>
                    <p>Duaların Arapça metninde kullanılacak yazı tipini seçin. Önizleme aşağıda görünür.</p>
                    <label for="arabicFontSelect" class="sr-only">Arapça yazı tipi</label>
                    <select id="arabicFontSelect" class="arabic-font-select" aria-label="Dua yazı tipi seçimi">
                        <option value="IBM Plex Sans Arabic">IBM Plex Sans Arabic</option>
                        <option value="Noto Naskh Arabic">Noto Naskh Arabic</option>
                        <option value="Amiri">Amiri</option>
                        <option value="Amiri Quran">Amiri Quran</option>
                        <option value="Noto Sans Arabic">Noto Sans Arabic</option>
                        <option value="Reem Kufi Ink">Reem Kufi Ink</option>
                        <option value="Reem Kufi Fun">Reem Kufi Fun</option>
                        <option value="Tajawal">Tajawal</option>
                        <option value="Almarai">Almarai</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Vazirmatn">Vazirmatn</option>
                        <option value="Ruwudu">Ruwudu</option>
                        <option value="Readex Pro">Readex Pro</option>
                        <option value="Rubik">Rubik</option>
                    </select>
                    <div id="arabicFontPreview" class="arabic-font-preview" dir="rtl" lang="ar" aria-hidden="true">الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ</div>
                </div>

                <div class="help-section">
                    <h3>Neden Her Gün Zikir Yapılmalı?</h3>
                    <p>Zikir, Allah'ı (c.c.) anmak ve hatırlamak demektir. Her gün düzenli olarak zikir yapmak, müminin hayatının ayrılmaz bir parçasıdır. Peygamber Efendimiz (s.a.v.) şöyle buyurmuştur:</p>
                    <p class="hadith">"İki kelime vardır ki, dile hafif, mizanda ağır, Rahman'a sevimlidir: 'Sübhânallahi ve bihamdihî, sübhânallahi'l-azîm' (Allah'ı ve O'na hamdı tesbih ederim, yüce Allah'ı tesbih ederim)." (Buhari, Müslim)</p>
                </div>

                <div class="help-section">
                    <h3>Zikir Yapmanın Faydaları</h3>
                    <ul>
                        <li><strong>Kalp Huzuru:</strong> Zikir, kalbi huzura kavuşturur ve ruhu sakinleştirir.</li>
                        <li><strong>Allah'ın Rızası:</strong> Düzenli zikir, Allah'ın rızasını kazanmaya vesile olur.</li>
                        <li><strong>Günahların Bağışlanması:</strong> Zikir, günahların bağışlanmasına ve sevapların artmasına neden olur.</li>
                        <li><strong>Şeytan'dan Korunma:</strong> Zikir, şeytanın vesveselerinden korunmaya yardımcı olur.</li>
                        <li><strong>Dünya ve Ahiret Bereketi:</strong> Zikir, hem dünya hem de ahiret hayatında bereket getirir.</li>
                        <li><strong>Allah'ı Hatırlama:</strong> Zikir, Allah'ı sürekli hatırlamamızı sağlar ve unutkanlığımızı azaltır.</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h3>Allah'ı Anmamız Gerektiği</h3>
                    <p>Kur'an-ı Kerim'de Allah (c.c.) şöyle buyurmuştur:</p>
                    <p class="verse">"Beni anın ki Ben de sizi anayım. Bana şükredin, sakın nankörlük etmeyin." (Bakara, 152)</p>
                    <p>Allah'ı anmak, O'nun bize verdiği nimetlere şükretmek ve O'na yakınlaşmak demektir. Zikir, bu yakınlaşmanın en güzel yollarından biridir.</p>
                </div>

                <div class="help-section">
                    <h3>Paylaş</h3>
                    <p>Uygulamayı sevdiklerinizle paylaşın. Sabah-Akşam zikirleri herkese ulaşsın.</p>
                    <div class="share-buttons">
                        <button type="button" class="share-btn share-btn-native" onclick="shareApp()" aria-label="Paylaş">
                            <i class="fas fa-share-alt"></i>
                            <span>Paylaş</span>
                        </button>
                        <a href="#" id="shareWhatsApp" class="share-link share-whatsapp" target="_blank" rel="noopener noreferrer nofollow" aria-label="WhatsApp ile paylaş">
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a href="#" id="shareTwitter" class="share-link share-twitter" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter ile paylaş">
                            <i class="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>

                <div class="help-section">
                    <h3>İletişim</h3>
                    <p>Sorularınız, önerileriniz veya geri bildirimleriniz için benimle iletişime geçebilirsiniz:</p>
                    <div class="social-links">
                        <a href="https://twitter.com/kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-twitter">
                            <i class="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </a>
                        <a href="https://instagram.com/kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-instagram">
                            <i class="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://github.com/kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-github">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-linkedin">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://youtube.com/@kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-youtube">
                            <i class="fab fa-youtube"></i>
                            <span>YouTube</span>
                        </a>
                        <a href="https://tiktok.com/@kenyoste" target="_blank" rel="noopener noreferrer nofollow" class="social-link social-tiktok">
                            <i class="fab fa-tiktok"></i>
                            <span>TikTok</span>
                        </a>
                    </div>
                    <p class="social-username">Tüm platformlarda: <strong>@kenyoste</strong></p>
                </div>
            </div>
        </div>
    </div>

 <script src="src/js/dualar.js" defer></script>
 <script src="src/js/script.js" defer></script>
</body>
</html>
