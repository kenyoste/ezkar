<?php
require __DIR__ . '/counter.php';
$tesbihatVisits = getTesbihatVisitCount();
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
    <title>Namaz Tesbihatı | kenyoste</title>
    <meta name="title" content="Namaz Tesbihatı">
    <meta name="description" content="Namaz sonrası tesbihat. Sabah, öğle, ikindi, akşam ve yatsı namazlarının ardından okunacak dualar, sübhanallah, elhamdulillah, allahu ekber zikirleri, salavat ve istiğfar. Ücretsiz ve offline çalışan zikirmatik ile takip edin.">
    <meta name="keywords" content="namaz tesbihatı, namaz sonrası zikirler, sübhanallah elhamdulillah allahu ekber, salavat, istiğfar, zikirmatik, islami zikirler, namaz duası, peygamber tesbihatı">
    <meta name="author" content="kenyoste">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Turkish">
    <meta name="revisit-after" content="7 days">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://kenyoste.com/ezkar/namaz-tesbihat.php">
    <meta property="og:title" content="Namaz Tesbihatı | kenyoste">
    <meta property="og:description" content="Namaz sonrası tesbihat. Beş vakit namazın ardından okunacak dualar ve zikirler. Zikirmatik ile takip edin.">
    <meta property="og:image" content="https://kenyoste.com/ezkar/logo.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Namaz Tesbihatı - kenyoste">
    <meta property="og:locale" content="tr_TR">
    <meta property="og:site_name" content="kenyoste">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://kenyoste.com/ezkar/namaz-tesbihat.php">
    <meta property="twitter:title" content="Namaz Tesbihatı | kenyoste">
    <meta property="twitter:description" content="Namaz sonrası tesbihat. Beş vakit namazın ardından okunacak dualar ve zikirler.">
    <meta property="twitter:image" content="https://kenyoste.com/ezkar/logo.webp">
    <meta property="twitter:image:alt" content="Namaz Tesbihatı - kenyoste">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://kenyoste.com/ezkar/namaz-tesbihat.php">

    <!-- Hreflang Tags -->
    <link rel="alternate" hreflang="tr" href="https://kenyoste.com/ezkar/namaz-tesbihat.php">
    <link rel="alternate" hreflang="x-default" href="https://kenyoste.com/ezkar/namaz-tesbihat.php">

    <!-- Geo Meta Tags -->
    <meta name="geo.region" content="TR">
    <meta name="geo.placename" content="Türkiye">
    <meta name="geo.position" content="39.9334;32.8597">
    <meta name="ICBM" content="39.9334, 32.8597">

    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://kenyoste.com/"},
        {"@type": "ListItem", "position": 2, "name": "Sabah-Akşam Zikirleri", "item": "https://kenyoste.com/ezkar/"},
        {"@type": "ListItem", "position": 3, "name": "Namaz Tesbihatı", "item": "https://kenyoste.com/ezkar/namaz-tesbihat.php"}
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Namaz Tesbihatı",
      "description": "Namaz sonrası tesbihat. Beş vakit namazın ardından okunacak dualar, sübhanallah, elhamdulillah, allahu ekber zikirleri, salavat ve istiğfar.",
      "url": "https://kenyoste.com/ezkar/namaz-tesbihat.php",
      "inLanguage": "tr-TR",
      "isPartOf": {
        "@type": "WebSite",
        "name": "kenyoste",
        "url": "https://kenyoste.com"
      },
      "author": {
        "@type": "Person",
        "name": "kenyoste"
      }
    }
    </script>

    <!-- Icons -->
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="src/img/ios/180.png">
    <link rel="icon" type="image/png" href="src/img/android/android-launchericon-192-192.png">
    <link rel="shortcut icon" href="src/img/ios/16.png">

    <link rel="stylesheet" href="src/style/style.css">
    <link rel="icon" type="image/png" href="src/img/android/android-launchericon-192-192.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Reem+Kufi+Fun:wght@400..700&family=Reem+Kufi+Ink&family=Rubik:ital,wght@0,300..900;1,300..900&family=Ruwudu:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&family=Readex+Pro:wght@160..700&family=Vazirmatn:wght@100..900&display=swap">
</head>
<body>
    <main id="main-content" class="container">
        <nav class="breadcrumb" aria-label="Konum">
            <a href="https://kenyoste.com/">Ana Sayfa</a>
            <span class="breadcrumb-sep" aria-hidden="true">›</span>
            <a href="index.php">Sabah-Akşam Zikirleri</a>
            <span class="breadcrumb-sep" aria-hidden="true">›</span>
            <span class="breadcrumb-current" id="breadcrumbCurrent">Uzun Namaz Tesbihatı</span>
        </nav>
        <header class="header">
            <div class="header-logo">
                <picture>
                    <source srcset="üstlogo.webp" type="image/webp">
                    <img src="üstlogo.png" alt="Namaz Tesbihatı" width="190" height="150" fetchpriority="high">
                </picture>
            </div>
            <h1 id="tesbihatHeaderTitle">Namaz Tesbihatı</h1>
    
        </header>

        <nav aria-label="Namaz vakitleri ve tesbihat türü">
            <div class="buttons-wrapper tesbihat-nav-grid" role="tablist">
                <button type="button" class="tab-button tesbihat-mode-btn" id="tesbihatModeBtn" aria-pressed="false">Kısa Tesbihat</button>
                <button type="button" class="tab-button tesbihat-tabs" data-vakit="sabah" role="tab">Sabah</button>
                <button type="button" class="tab-button tesbihat-tabs" data-vakit="ogle" role="tab">Öğle</button>
                <button type="button" class="tab-button tesbihat-tabs" data-vakit="ikindi" role="tab">İkindi</button>
                <button type="button" class="tab-button tesbihat-tabs" data-vakit="aksam" role="tab">Akşam</button>
                <button type="button" class="tab-button tesbihat-tabs" data-vakit="yatsi" role="tab">Yatsı</button>
            </div>
        </nav>

        <div class="controls">
            <button type="button" class="control-button control-button-square" onclick="toggleFocusMode()" id="focusModeBtn" aria-label="Derin odak modu (tam ekran)" title="Tam ekran" aria-pressed="false">
                <i class="fas fa-expand" aria-hidden="true"></i>
            </button>
            <a href="index.php" class="control-button control-button-home" aria-label="Ana ekrana dön" title="Ana ekrana dön">
                <img src="src/img/android/ikon-zikir.webp" alt="Ezkar sayfasına yönlendiren proje logosu" aria-hidden="true">
            </a>
            <button type="button" class="control-button control-button-square" onclick="toggleDarkMode()" id="darkModeBtn" aria-pressed="false" aria-label="Koyu mod" title="Koyu mod"><span class="icon-swap"><i class="fas fa-moon" aria-hidden="true"></i><i class="fas fa-sun" aria-hidden="true"></i></span></button>
            <button type="button" class="control-button control-button-square control-button-translate" id="translationBtn" aria-pressed="false" aria-label="Tercümeyi göster" title="Tercümeyi göster"><span class="icon-swap"><img src="src/img/android/ikon-translate-ar.webp" class="translate-icon" alt="" aria-hidden="true"><img src="src/img/android/ikon-translate-tr.webp" class="translate-icon" alt="" aria-hidden="true"></span></button>
        </div>

        <section id="tesbihat-content" class="zikir-content active" aria-label="Tesbihat içeriği"></section>
    </main>

    <footer class="footer">
        <div class="footer-count-wrap">
            <span class="footer-count-row">
                Toplam okuma: <strong class="footer-visit-count"><span id="visitCount" data-target="<?php echo (int)$tesbihatVisits; ?>"><?php echo (int)$tesbihatVisits; ?></span></strong>
            </span>
        </div>
        <div class="footer-powered">
            POWERED by <span class="footer-brand">kenyoste</span>
        </div>
    </footer>

    <!-- Scroll Progress (sağ üst) -->
    <div class="scroll-progress-container">
        <div class="circular-progress">
            <svg class="progress-ring" width="60" height="60">
                <circle class="progress-ring-circle" cx="30" cy="30" r="25" fill="transparent" stroke="rgba(212, 33, 33, 0.2)" stroke-width="4"/>
                <circle class="progress-ring-circle progress-ring-progress" cx="30" cy="30" r="25" fill="transparent" stroke="#d42121" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="circular-progress-text"><span id="circularProgressPercent">0</span>%</div>
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

    <script src="src/js/tesbihat.js"></script>
    <script>
    (function() {
        const ZIKIRMATIK_CIRCLE = 2 * Math.PI * 15;
        let tesbihatCounts = {};
        let showTranslation = false;
        let darkMode = false;
        let tesbihatMode = 'uzun';

        try {
            const saved = sessionStorage.getItem('tesbihatCounts');
            if (saved) tesbihatCounts = JSON.parse(saved);
        } catch (e) {}

        function toggleDarkMode() {
            darkMode = !darkMode;
            document.body.classList.toggle('dark-mode', darkMode);
            const btn = document.getElementById('darkModeBtn');
            if (!btn) return;
            btn.setAttribute('aria-pressed', darkMode);
            btn.setAttribute('aria-label', darkMode ? 'Açık mod' : 'Koyu mod');
            btn.setAttribute('title', darkMode ? 'Açık mod' : 'Koyu mod');
            var wrap = btn.querySelector('.icon-swap');
            if (wrap) wrap.classList.toggle('state-dark', darkMode);
            try { localStorage.setItem('darkMode', darkMode); } catch (e) {}
        }
        window.toggleDarkMode = toggleDarkMode;

        function toggleFocusMode() {
            const isFocus = document.body.classList.toggle('focus-mode');
            const btn = document.getElementById('focusModeBtn');
            if (btn) btn.setAttribute('aria-pressed', isFocus.toString());
            const el = document.documentElement;
            if (isFocus) {
                const req = el.requestFullscreen || el.webkitRequestFullscreen;
                if (req) req.call(el).catch(function() {});
            } else {
                const ex = document.exitFullscreen || document.webkitExitFullscreen;
                if (ex) ex.call(document);
            }
        }
        window.toggleFocusMode = toggleFocusMode;

        function onFullscreenChange() {
            const inFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
            if (!inFs && document.body.classList.contains('focus-mode')) {
                document.body.classList.remove('focus-mode');
                const btn = document.getElementById('focusModeBtn');
                if (btn) btn.setAttribute('aria-pressed', 'false');
            }
        }
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);

        function incrementTesbihatZikir(btn) {
            const zikirId = btn.getAttribute('data-zikir-id');
            const zikirBlock = btn.closest('.zikir-item');
            if (!zikirId || !zikirBlock) return;
            const target = parseInt(btn.getAttribute('data-target') || '1', 10);
            const current = (tesbihatCounts[zikirId] || 0) + 1;
            tesbihatCounts[zikirId] = current;
            try { sessionStorage.setItem('tesbihatCounts', JSON.stringify(tesbihatCounts)); } catch (e) {}

            const countEl = btn.querySelector('.zikirmatik-num');
            const tickEl = btn.querySelector('.zikirmatik-tick');
            const ringFill = btn.querySelector('.zikirmatik-ring-fill');
            if (countEl) countEl.textContent = current;

            const progress = Math.min(current / target, 1);
            const offset = ZIKIRMATIK_CIRCLE * (1 - progress);
            if (ringFill) ringFill.style.strokeDashoffset = offset;

            if (current >= target && tickEl) {
                btn.classList.add('zikirmatik-done');
                tickEl.classList.remove('hidden');
                if (ringFill) ringFill.classList.add('complete');
                if (current === target) {
                    setTimeout(function() {
                        const content = zikirBlock.parentElement;
                        if (content) {
                            const children = Array.from(content.children);
                            const idx = children.indexOf(zikirBlock);
                            const next = children[idx + 1];
                            if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 650);
                }
            }
        }
        window.incrementTesbihatZikir = incrementTesbihatZikir;

        function escapeHtml(str) {
            if (!str) return '';
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        }

        function getTesbihatList(vakit) {
            if (tesbihatMode === 'kisa') {
                return (typeof tesbihatKisa !== 'undefined' && tesbihatKisa[vakit]) ? tesbihatKisa[vakit] : tesbihat[vakit];
            }
            return tesbihat[vakit];
        }

        function renderTesbihat(vakit) {
            const list = getTesbihatList(vakit);
            if (!list) return;

            const firstZikirmatikIndex = list.findIndex(function(z) { return !z.note; });
            const content = document.getElementById('tesbihat-content');
            content.innerHTML = list.map(function(zikir, index) {
                if (zikir.note) {
                    return '<article class="zikir-item tesbihat-note" data-zikir-id="tesbihat-' + vakit + '-' + index + '">' +
                        '<div class="tesbihat-note-icon"><i class="fas fa-info-circle"></i></div>' +
                        '<h2 class="zikir-title">' + escapeHtml(zikir.title) + '</h2>' +
                        '<div class="zikir-translation ltr-block tesbihat-note-text"><div class="zikir-block-content">' + escapeHtml(zikir.translation || '') + '</div></div>' +
                        '</article>';
                }
                const zikirId = 'tesbihat-' + vakit + '-' + index;
                const targetCount = parseTesbihatCount(zikir.count);
                const currentCount = tesbihatCounts[zikirId] || 0;
                const hasTick = currentCount >= targetCount;
                const progress = targetCount > 0 ? Math.min(currentCount / targetCount, 1) : 0;
                const ringOffset = (2 * Math.PI * 15) * (1 - progress);

                const largeClass = targetCount === 33 ? ' zikirmatik-wrap-large' : '';
                const labelHtml = (index === firstZikirmatikIndex) ? '<span class="zikirmatik-label">zikirmatik</span>' : '';
                const zikirmatikHtml = '<span class="zikirmatik-wrap' + largeClass + '" title="Tıkla: zikir sayacı">' +
                    '<button type="button" class="zikirmatik ' + (hasTick ? 'zikirmatik-done' : '') + '" data-zikir-id="' + zikirId + '" data-target="' + targetCount + '" onclick="incrementTesbihatZikir(this)" aria-label="Zikir sayacı: ' + currentCount + ' / ' + targetCount + '">' +
                    '<span class="zikirmatik-ring"><svg viewBox="0 0 36 36"><circle class="zikirmatik-ring-bg" cx="18" cy="18" r="15" fill="none" stroke-width="2.5"/><circle class="zikirmatik-ring-fill ' + (hasTick ? 'complete' : '') + '" cx="18" cy="18" r="15" fill="none" stroke-width="2.5" stroke-dasharray="94.25" stroke-dashoffset="' + ringOffset + '" transform="rotate(-90 18 18)"/></svg></span>' +
                    '<span class="zikirmatik-center"><span class="zikirmatik-num">' + currentCount + '</span><span class="zikirmatik-sep">/</span><span class="zikirmatik-target">' + targetCount + '</span><span class="zikirmatik-tick ' + (hasTick ? '' : 'hidden') + '"><i class="fas fa-check"></i></span></span></button>' +
                    labelHtml + '</span>';

                return '<article class="zikir-item" data-zikir-id="' + zikirId + '">' +
                    '<div class="zikir-arabic" dir="rtl" lang="ar">' + zikir.arabic + '</div>' +
                    '<div class="zikir-tags-container tesbihat-tags">' +
                    zikirmatikHtml + '<div class="zikir-count">' + escapeHtml(zikir.count) + '</div>' +
                    '</div>' +
                    '<div class="zikir-pronunciation ltr-block ' + (showTranslation && zikir.pronunciation ? '' : 'hidden') + '" dir="ltr"><span class="zikir-block-label">Türkçe okunuş</span><div class="zikir-block-content">' + escapeHtml(zikir.pronunciation || '') + '</div></div>' +
                    '<div class="zikir-translation ltr-block ' + (showTranslation ? '' : 'hidden') + '" dir="ltr"><span class="zikir-block-label">Tercüme</span><div class="zikir-block-content">' + escapeHtml(zikir.translation) + '</div></div>' +
                    '</article>';
            }).join('');

            document.querySelectorAll('.tesbihat-tabs[data-vakit]').forEach(function(btn) {
                btn.classList.toggle('active', btn.getAttribute('data-vakit') === vakit);
                btn.setAttribute('aria-selected', btn.getAttribute('data-vakit') === vakit);
            });
        }

        document.getElementById('translationBtn').addEventListener('click', function() {
            showTranslation = !showTranslation;
            this.setAttribute('aria-pressed', showTranslation);
            this.setAttribute('aria-label', showTranslation ? 'Tercümeyi gizle' : 'Tercümeyi göster');
            this.setAttribute('title', showTranslation ? 'Tercümeyi gizle' : 'Tercümeyi göster');
            var wrap = this.querySelector('.icon-swap');
            if (wrap) wrap.classList.toggle('state-tr', showTranslation);
            document.querySelectorAll('#tesbihat-content .zikir-translation:not(.tesbihat-note-text)').forEach(function(el) {
                el.classList.toggle('hidden', !showTranslation);
            });
            document.querySelectorAll('#tesbihat-content .zikir-pronunciation').forEach(function(p) {
                var content = p.querySelector('.zikir-block-content');
                var hasContent = content && content.textContent.trim().length > 0;
                p.classList.toggle('hidden', !showTranslation || !hasContent);
            });
        });

        document.querySelectorAll('.tesbihat-tabs[data-vakit]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var v = this.getAttribute('data-vakit');
                renderTesbihat(v);
            });
        });

        function updateTesbihatHeaderTitle() {
            var title = tesbihatMode === 'uzun' ? 'Uzun Namaz Tesbihatı' : 'Kısa Namaz Tesbihatı';
            var h1 = document.getElementById('tesbihatHeaderTitle');
            var bc = document.getElementById('breadcrumbCurrent');
            if (h1) h1.textContent = title;
            if (bc) bc.textContent = title;
        }
        updateTesbihatHeaderTitle();

        document.getElementById('tesbihatModeBtn').addEventListener('click', function() {
            tesbihatMode = tesbihatMode === 'uzun' ? 'kisa' : 'uzun';
            this.textContent = tesbihatMode === 'uzun' ? 'Kısa Tesbihat' : 'Uzun Tesbihat';
            this.setAttribute('aria-pressed', tesbihatMode === 'kisa');
            this.classList.toggle('active', tesbihatMode === 'kisa');
            updateTesbihatHeaderTitle();
            var activeVakit = document.querySelector('.tesbihat-tabs[data-vakit].active');
            renderTesbihat(activeVakit ? activeVakit.getAttribute('data-vakit') : 'sabah');
        });

        if (localStorage.getItem('darkMode') === 'true') {
            darkMode = true;
            document.body.classList.add('dark-mode');
            var dmBtn = document.getElementById('darkModeBtn');
            if (dmBtn) {
                dmBtn.setAttribute('aria-pressed', 'true');
                dmBtn.setAttribute('aria-label', 'Açık mod');
                dmBtn.setAttribute('title', 'Açık mod');
                var wrap = dmBtn.querySelector('.icon-swap');
                if (wrap) wrap.classList.add('state-dark');
            }
        }

        (function initTesbihatArabicFont() {
            var saved = null;
            try { saved = localStorage.getItem('arabicFont'); } catch (e) {}
            if (saved) {
                var value = "'" + saved + "', serif";
                document.documentElement.style.setProperty('--font-arabic', value);
            }
        })();

        function updateScrollProgress() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var windowHeight = window.innerHeight;
            var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
            var scrollableHeight = documentHeight - windowHeight;
            var progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0;
            var circularProgress = document.querySelector('.progress-ring-progress');
            var circularProgressText = document.getElementById('circularProgressPercent');
            var progressRing = document.querySelector('.progress-ring');
            if (!circularProgress || !progressRing) return;
            var radius = 25;
            var circumference = 2 * Math.PI * radius;
            var offset = progress === 0 ? circumference : circumference - (progress / 100) * circumference;
            circularProgress.style.strokeDashoffset = offset;
            circularProgress.style.strokeDasharray = circumference;
            if (circularProgressText) circularProgressText.textContent = Math.round(progress);
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollToTop = scrollToTop;

        function toggleScrollToTopButton() {
            var btn = document.getElementById('scrollToTopBtn');
            if (!btn) return;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
            var scrollableHeight = documentHeight - window.innerHeight;
            if (scrollTop === 0 || scrollableHeight <= 0) {
                btn.style.opacity = '0';
                btn.style.visibility = 'hidden';
                btn.style.transform = 'translateX(-20px) translateY(20px)';
                btn.classList.remove('initial-animation');
                return;
            }
            var minScrollPixels = 50;
            if (scrollTop < minScrollPixels) {
                if (!btn.classList.contains('initial-animation')) {
                    btn.classList.add('initial-animation');
                    btn.style.visibility = 'visible';
                    btn.style.opacity = '0';
                    btn.style.transform = 'translateX(-20px) translateY(20px)';
                    setTimeout(function() {
                        btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        btn.style.opacity = '0.3';
                        btn.style.transform = 'translateX(0) translateY(0)';
                    }, 50);
                } else {
                    btn.style.visibility = 'visible';
                    btn.style.opacity = '0.3';
                    btn.style.transform = 'translateX(0) translateY(0)';
                }
            } else {
                btn.classList.add('initial-animation');
                btn.style.visibility = 'visible';
                var effectiveScrollPixels = scrollTop - minScrollPixels;
                var maxEffectiveScroll = scrollableHeight - minScrollPixels;
                var scrollProgress = Math.min(effectiveScrollPixels / maxEffectiveScroll, 1);
                var finalOpacity = Math.min(0.3 + scrollProgress * 0.7, 1);
                btn.style.opacity = String(finalOpacity);
                btn.style.transform = 'translateX(0) translateY(0)';
            }
        }

        var scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
            scrollTimeout = requestAnimationFrame(function() {
                updateScrollProgress();
                toggleScrollToTopButton();
            });
        }, { passive: true });

        renderTesbihat('sabah');
        setTimeout(updateScrollProgress, 100);
    })();
    </script>
</body>
</html>
