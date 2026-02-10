

let showTranslation = false;
let darkMode = false;

// Zikirmatik sayıları (sessionStorage'da tutulur)
let zikirCounts = {};

// Count metninden hedef sayıyı çıkar: "Üç kere okunur" -> 3
function parseCount(countStr) {
    if (!countStr) return 1;
    const s = countStr.toLowerCase();
    if (s.includes('bir')) return 1;
    if (s.includes('üç') || s.includes('uc')) return 3;
    if (s.includes('dört')) return 4;
    if (s.includes('yedi')) return 7;
    if (s.includes('on')) return 10;
    if (s.includes('yüz') || s.includes('yuz')) return 100;
    return 1;
}

// Zikirmatik daire çevresi (r=15)
const ZIKIRMATIK_CIRCLE = 2 * Math.PI * 15;

// Zikirmatik artır - tik at, hedefe ulaşınca sonraki zikre kay
function incrementZikir(btn) {
    const zikirId = btn.getAttribute('data-zikir-id');
    const zikirBlock = btn.closest('.zikir-besmele, .zikir-hamd, .zikir-item');
    if (!zikirId || !zikirBlock) return;
    const target = parseInt(btn.getAttribute('data-target') || '1', 10);
    const current = (zikirCounts[zikirId] || 0) + 1;
    zikirCounts[zikirId] = current;
    try { sessionStorage.setItem('zikirCounts', JSON.stringify(zikirCounts)); } catch (e) {}

    const countEl = btn.querySelector('.zikirmatik-num');
    const tickEl = btn.querySelector('.zikirmatik-tick');
    const ringFill = btn.querySelector('.zikirmatik-ring-fill');
    if (countEl) countEl.textContent = current;

    // Daire ilerlemesi
    const progress = Math.min(current / target, 1);
    const offset = ZIKIRMATIK_CIRCLE * (1 - progress);
    if (ringFill) ringFill.style.strokeDashoffset = offset;

    const justReached = current === target;
    if (current >= target && tickEl) {
        btn.classList.add('zikirmatik-done');
        tickEl.classList.remove('hidden');
        if (ringFill) ringFill.classList.add('complete');
        if (justReached) {
            // Tik animasyonu bittikten sonra (600ms) sonraki duaya yavaşça geç
            setTimeout(() => {
                const content = zikirBlock.parentElement;
                if (content) {
                    const children = Array.from(content.children);
                    const idx = children.indexOf(zikirBlock);
                    const next = children[idx + 1];
                    if (next) {
                        next.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }, 650);
        }
    }
}

function showZikir(type, buttonElement = null) {
    // Loading göster
    showLoading();
    
    // Butonları güncelle
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((btn, index) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        
        // ARIA güncellemesi
        if (buttonElement === btn || 
            (type === 'sabah' && btn.id === 'sabah-tab') ||
            (type === 'aksam' && btn.id === 'aksam-tab')) {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        }
    });
    
    // Eğer button elementi verilmişse onu aktif yap
    if (buttonElement) {
        buttonElement.classList.add('active');
        buttonElement.setAttribute('aria-selected', 'true');
    } else {
        // Aksi halde type'a göre ilgili butonu bul ve aktif yap
        tabButtons.forEach(btn => {
            const btnText = btn.textContent.trim();
            if ((type === 'sabah' && btnText.includes('Sabah')) || 
                (type === 'aksam' && btnText.includes('Akşam'))) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
            }
        });
    }

    // İçerikleri güncelle
    document.getElementById('sabah-content').classList.remove('active');
    document.getElementById('aksam-content').classList.remove('active');
    document.getElementById(type + '-content').classList.add('active');

    // İçeriği render et
    renderZikirler(type);
    
    // Progress'i güncelle
    setTimeout(() => {
        updateScrollProgress();
        hideLoading();
        const content = document.getElementById(type + '-content');
        if (content) {
            content.focus();
            announceToScreenReader(`${type === 'sabah' ? 'Sabah' : 'Akşam'} zikirleri yüklendi`);
        }
    }, 100);
}

function renderZikirler(type) {
    try {
        const saved = sessionStorage.getItem('zikirCounts');
        if (saved) zikirCounts = JSON.parse(saved);
    } catch (e) {}

    const content = document.getElementById(type + '-content');
    const zikirList = zikirler[type];
    
    // Title gösterilecek dualar
    const titlesToShow = ["İHLÂS SÛRESİ", "FELAK SÛRESİ", "NÂS SÛRESİ", "AYETE'L-KÜRSÎ", "SEYYİDU'L-İSTİĞFAR"];
    
    const escapeHtml = (str) => {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    };
    
    content.innerHTML = zikirList.map((zikir, index) => {
        const zikirId = `zikir-${type}-${index}`;
        const targetCount = parseCount(zikir.count);
        const currentCount = zikirCounts[zikirId] || 0;
        const hasTick = currentCount >= targetCount;
        const progress = targetCount > 0 ? Math.min(currentCount / targetCount, 1) : 0;
        const ringOffset = (2 * Math.PI * 15) * (1 - progress);
        const isAyetelKursi = zikir.title === "AYETE'L-KÜRSÎ";
        const zikirmatikLabelHtml = isAyetelKursi ? '<span class="zikirmatik-label">zikirmatik</span>' : '';
        const zikirmatikHtml = `<span class="zikirmatik-wrap" title="Tıkla: zikir sayacı"><button type="button" class="zikirmatik ${hasTick ? 'zikirmatik-done' : ''}" data-zikir-id="${zikirId}" data-target="${targetCount}" onclick="incrementZikir(this)" aria-label="Zikir sayacı: ${currentCount} / ${targetCount}"><span class="zikirmatik-ring"><svg viewBox="0 0 36 36"><circle class="zikirmatik-ring-bg" cx="18" cy="18" r="15" fill="none" stroke-width="2.5"/><circle class="zikirmatik-ring-fill ${hasTick ? 'complete' : ''}" cx="18" cy="18" r="15" fill="none" stroke-width="2.5" stroke-dasharray="94.25" stroke-dashoffset="${ringOffset}" transform="rotate(-90 18 18)"/></svg></span><span class="zikirmatik-center"><span class="zikirmatik-num">${currentCount}</span><span class="zikirmatik-sep">/</span><span class="zikirmatik-target">${targetCount}</span><span class="zikirmatik-tick ${hasTick ? '' : 'hidden'}"><i class="fas fa-check"></i></span></span></button>${zikirmatikLabelHtml}</span>`;

        // Besmele için özel render (zikirmatik yok; etiket sadece Ayetel Kürsi'de)
        if (zikir.title === "Besmele") {
            const pron = zikir.pronunciation || '';
            return `
                <div class="zikir-besmele" data-zikir-id="${zikirId}" data-title="${escapeHtml(zikir.title)}" data-arabic="${escapeHtml(zikir.arabic)}" data-translation="${escapeHtml(zikir.translation)}" data-pronunciation="${escapeHtml(pron)}" data-count="${escapeHtml(zikir.count)}">
                    <div class="zikir-besmele-arabic" dir="rtl" lang="ar">${zikir.arabic}</div>
                    <div class="zikir-pronunciation ltr-block ${showTranslation && pron ? '' : 'hidden'}" dir="ltr"><div class="zikir-block-content">${pron}</div></div>
                    <div class="zikir-translation ltr-block ${showTranslation ? '' : 'hidden'}" dir="ltr"><div class="zikir-block-content">${zikir.translation}</div></div>
                </div>
            `;
        }
        
        // Hamd ve Salavat için özel render (zikirmatik yok; etiket sadece Ayetel Kürsi'de)
        if (zikir.title === "Hamd ve Salavat") {
            const pron = zikir.pronunciation || '';
            return `
                <div class="zikir-hamd" data-zikir-id="${zikirId}" data-title="${escapeHtml(zikir.title)}" data-arabic="${escapeHtml(zikir.arabic)}" data-translation="${escapeHtml(zikir.translation)}" data-pronunciation="${escapeHtml(pron)}" data-count="${escapeHtml(zikir.count)}">
                    <div class="zikir-hamd-arabic" dir="rtl" lang="ar">${zikir.arabic}</div>
                    <div class="zikir-pronunciation ltr-block ${showTranslation && pron ? '' : 'hidden'}" dir="ltr"><div class="zikir-block-content">${pron}</div></div>
                    <div class="zikir-translation ltr-block ${showTranslation ? '' : 'hidden'}" dir="ltr"><div class="zikir-block-content">${zikir.translation}</div></div>
                </div>
            `;
        }
        
        // Diğer dualar için normal render - sadece belirli duaların title'ı gösterilir; etiketler sadece Ayetel Kürsi'de
        const showTitle = titlesToShow.includes(zikir.title);
        const pron = zikir.pronunciation || '';
        const labelOkunus = isAyetelKursi ? '<span class="zikir-block-label">Türkçe okunuş</span>' : '';
        const labelTercume = isAyetelKursi ? '<span class="zikir-block-label">Tercüme</span>' : '';
        return `
            <article class="zikir-item" data-zikir-id="${zikirId}"
                 data-title="${escapeHtml(zikir.title)}"
                 data-arabic="${escapeHtml(zikir.arabic)}"
                 data-translation="${escapeHtml(zikir.translation)}"
                 data-pronunciation="${escapeHtml(pron)}"
                 data-count="${escapeHtml(zikir.count)}"
                 data-footnote="${zikir.footnote ? escapeHtml(zikir.footnote) : ''}">
                <button class="copy-btn-item" onclick="copyZikirFromElement(this)" title="Kopyala" aria-label="Zikri kopyala">
                    <i class="fas fa-copy"></i>
                </button>
                ${showTitle ? `<h2 class="zikir-title">${zikir.title}</h2>` : ''}
                <div class="zikir-arabic" dir="rtl" lang="ar">${zikir.arabic}</div>
                <div class="zikir-tags-container">
                    <div class="zikir-count">${zikir.count}</div>
                    ${zikirmatikHtml}
                    ${zikir.footnote ? `
                        <div class="zikir-footnote">
                            <i class="fas fa-book"></i> ${zikir.footnote}
                        </div>
                    ` : ''}
                </div>
                <div class="zikir-pronunciation ltr-block ${showTranslation && pron ? '' : 'hidden'}" dir="ltr">${labelOkunus}<div class="zikir-block-content">${pron}</div></div>
                <div class="zikir-translation ltr-block ${showTranslation ? '' : 'hidden'}" dir="ltr">${labelTercume}<div class="zikir-block-content">${zikir.translation}</div></div>
            </article>
        `;
    }).join('');
    
    // Progress'i güncelle
    setTimeout(updateScrollProgress, 100);
}

// Kopyalama tooltip fonksiyonları
function showCopyTooltip(button) {
    // Mevcut tooltip varsa kaldır
    hideCopyTooltip(button);
    
    // Yeni tooltip oluştur
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = 'Kopyalandı';
    
    // Butonun parent'ına ekle (position: relative olmalı)
    const parent = button.parentElement;
    if (parent) {
        parent.appendChild(tooltip);
        
        // Animasyon için
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
    }
}

function hideCopyTooltip(button) {
    const parent = button.parentElement;
    if (parent) {
        const tooltip = parent.querySelector('.copy-tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                tooltip.remove();
            }, 300);
        }
    }
}

// Dua kopyalama fonksiyonu (element'ten veri alır)
function copyZikirFromElement(button) {
    const zikirItem = button.closest('.zikir-item, .zikir-besmele, .zikir-hamd');
    if (!zikirItem) return;
    
    const title = zikirItem.getAttribute('data-title') || '';
    const arabic = zikirItem.getAttribute('data-arabic') || '';
    const translation = zikirItem.getAttribute('data-translation') || '';
    const pronunciation = zikirItem.getAttribute('data-pronunciation') || '';
    const count = zikirItem.getAttribute('data-count') || '';
    const footnote = zikirItem.getAttribute('data-footnote') || '';
    
    // HTML decode
    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    
    const decodedTitle = decodeHtml(title);
    const decodedArabic = decodeHtml(arabic);
    const decodedTranslation = decodeHtml(translation);
    const decodedPronunciation = decodeHtml(pronunciation);
    const decodedCount = decodeHtml(count);
    const decodedFootnote = decodeHtml(footnote);
    
    // Metni formatla
    let textToCopy = '';
    
    if (decodedTitle && decodedTitle !== 'Besmele' && decodedTitle !== 'Hamd ve Salavat') {
        textToCopy += `${decodedTitle}\n\n`;
    }
    
    textToCopy += `${decodedArabic}\n\n`;
    textToCopy += `Okunma: ${decodedCount}\n`;
    
    if (decodedFootnote) {
        textToCopy += `Kaynak: ${decodedFootnote}\n`;
    }
    
    if (decodedPronunciation) {
        textToCopy += `\nOkunuş:\n${decodedPronunciation}\n`;
    }
    textToCopy += `\nTercüme:\n${decodedTranslation}`;
    
    // Kopyala
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Başarılı mesajı göster
        const icon = button.querySelector('i');
        if (icon) {
            const originalClass = icon.className;
            icon.className = 'fas fa-check';
            button.style.color = '#28a745';
            
            // "Kopyalandı" tooltip'i göster
            showCopyTooltip(button);
            showSuccess('Zikir kopyalandı');
            announceToScreenReader('Zikir panoya kopyalandı');
            
            setTimeout(() => {
                icon.className = originalClass;
                button.style.color = '';
                hideCopyTooltip(button);
            }, 2000);
        }
    }).catch(err => {
        logger.error('Kopyalama hatası:', err);
        // Fallback: Eski yöntem
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const icon = button.querySelector('i');
            if (icon) {
                const originalClass = icon.className;
                icon.className = 'fas fa-check';
                button.style.color = '#28a745';
                
                // "Kopyalandı" tooltip'i göster
                showCopyTooltip(button);
                showSuccess('Zikir kopyalandı');
                announceToScreenReader('Zikir panoya kopyalandı');
                
                setTimeout(() => {
                    icon.className = originalClass;
                    button.style.color = '';
                    hideCopyTooltip(button);
                }, 2000);
            }
        } catch (err) {
            showError('Kopyalama başarısız oldu. Lütfen tekrar deneyin.');
            announceToScreenReader('Kopyalama başarısız oldu');
        }
        document.body.removeChild(textArea);
    });
}

function toggleTranslation() {
    showTranslation = !showTranslation;
    const btn = document.getElementById('translationBtn');
    const translations = document.querySelectorAll('.zikir-translation');
    const pronunciations = document.querySelectorAll('.zikir-pronunciation');
    
    btn.setAttribute('aria-pressed', showTranslation.toString());
    
    if (showTranslation) {
        btn.innerHTML = ' Tercümeyi Gizle';
        btn.classList.add('active');
    } else {
        btn.innerHTML = 'Tercümeyi Göster';
        btn.classList.remove('active');
    }
    
    translations.forEach(trans => {
        if (showTranslation) {
            trans.classList.remove('hidden');
        } else {
            trans.classList.add('hidden');
        }
    });
    
    pronunciations.forEach(pron => {
        if (showTranslation) {
            pron.classList.remove('hidden');
        } else {
            pron.classList.add('hidden');
        }
    });
    
    announceToScreenReader(showTranslation ? 'Tercümeler ve okunuşlar gösteriliyor' : 'Tercümeler gizlendi');
}

function toggleDarkMode() {
    darkMode = !darkMode;
    const btn = document.getElementById('darkModeBtn');
    
    btn.setAttribute('aria-pressed', darkMode.toString());
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        btn.innerHTML = ' Açık Mod';
        btn.classList.add('active');
        announceToScreenReader('Koyu mod etkinleştirildi');
    } else {
        document.body.classList.remove('dark-mode');
        btn.innerHTML = 'Koyu Mod';
        btn.classList.remove('active');
        announceToScreenReader('Açık mod etkinleştirildi');
    }
}

function toggleFocusMode() {
    const isFocus = document.body.classList.toggle('focus-mode');
    const btn = document.getElementById('focusModeBtn');
    if (btn) btn.setAttribute('aria-pressed', isFocus.toString());

    if (isFocus) {
        const el = document.documentElement;
        const req = el.requestFullscreen || el.webkitRequestFullscreen;
        if (req) {
            req.call(el).catch(function () {
                announceToScreenReader('Tam ekran kullanılamadı');
            });
        }
    } else {
        const ex = document.exitFullscreen || document.webkitExitFullscreen;
        if (ex) ex.call(document);
    }
    announceToScreenReader(isFocus ? 'Derin odak modu açıldı' : 'Derin odak modu kapatıldı');
}

function onFullscreenChange() {
    var inFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (!inFs && document.body.classList.contains('focus-mode')) {
        document.body.classList.remove('focus-mode');
        var btn = document.getElementById('focusModeBtn');
        if (btn) btn.setAttribute('aria-pressed', 'false');
    }
}
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange);

// PWA Install Prompt
let pwaPrompt = null;
let pwaTimer = null;
let pwaTimerInterval = null;
let pwaTimerRemaining = 6;

function showPWAInstallPrompt() {
    // Standalone modda mı kontrol et
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        return;
    }

    const prompt = document.getElementById('pwaInstallPrompt');
    const timerFill = document.getElementById('pwaTimerFill');
    
    prompt.classList.add('show');
    
    // Timer başlat
    pwaTimerRemaining = 6;
    timerFill.style.width = '100%';
    
    pwaTimerInterval = setInterval(() => {
        pwaTimerRemaining -= 0.1;
        const percentage = (pwaTimerRemaining / 6) * 100;
        timerFill.style.width = percentage + '%';
        
        if (pwaTimerRemaining <= 0) {
            clearInterval(pwaTimerInterval);
            hidePWAInstallPrompt();
        }
    }, 100);
}

function hidePWAInstallPrompt() {
    const prompt = document.getElementById('pwaInstallPrompt');
    prompt.classList.remove('show');
    if (pwaTimerInterval) {
        clearInterval(pwaTimerInterval);
    }
}

function handlePWAInstall() {
    // Beforeinstallprompt event'i yakalanmışsa kullan
    if (pwaPrompt) {
        pwaPrompt.prompt();
        pwaPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                logger.log('Kullanıcı PWA yüklemeyi kabul etti');
            }
            pwaPrompt = null;
            hidePWAInstallPrompt();
        });
    } else {
        // iOS için talimat göster
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            alert('Ana ekrana eklemek için: Safari menüsünden "Ana Ekrana Ekle" seçeneğini kullanın.');
        } else {
            alert('Ana ekrana eklemek için tarayıcınızın menüsünden "Ana ekrana ekle" seçeneğini kullanın.');
        }
        hidePWAInstallPrompt();
    }
}

// Beforeinstallprompt event'ini yakala
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    pwaPrompt = e;
    // İlk ziyaret için prompt göster
    setTimeout(() => {
        showPWAInstallPrompt();
    }, 2000);
});

// Buton event listener'ları
document.getElementById('pwaAddBtn').addEventListener('click', handlePWAInstall);
document.getElementById('pwaCloseBtn').addEventListener('click', hidePWAInstallPrompt);

// Service Worker kayıt ve güncelleme kontrolü (sadece http/https; file:// desteklenmez)
// SW_VERSION: sw.js içindeki CACHE_NAME ile aynı tutun; her yayında ikisini de artırın
var SW_VERSION = '0.000.000.41';
var isSecureOrigin = (location.protocol === 'http:' || location.protocol === 'https:');
if (isSecureOrigin && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js?v=' + SW_VERSION)
            .then((registration) => {
                logger.log('Service Worker kayıt başarılı:', registration.scope);
                // Sayfa her yüklendiğinde güncelleme kontrolü yap (tarayıcı 24h throttle yapabiliyor)
                registration.update();

                if (!navigator.serviceWorker.controller) {
                    navigator.serviceWorker.addEventListener('controllerchange', () => {});
                }

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            logger.log('Yeni Service Worker yüklendi, sayfa yenileniyor...');
                            window.location.reload();
                        }
                    });
                });
            })
            .catch((error) => {
                logger.error('Service Worker kayıt hatası:', error);
                showError('Service Worker yüklenemedi. Offline özellikler çalışmayabilir.');
            });

        setInterval(() => {
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration) registration.update();
            });
        }, 60000);
    });
}

// Scroll Progress Tracking
function updateScrollProgress() {
    const activeContent = document.querySelector('.zikir-content.active');
    if (!activeContent) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    
    const scrollableHeight = documentHeight - windowHeight;
    const scrolled = scrollTop;
    const progress = scrollableHeight > 0 ? Math.min((scrolled / scrollableHeight) * 100, 100) : 0;
    
    // Dairesel progress - dinamik radius hesaplama
    const circularProgress = document.querySelector('.progress-ring-progress');
    const circularProgressText = document.getElementById('circularProgressPercent');
    const progressRing = document.querySelector('.progress-ring');
    
    if (!circularProgress || !progressRing) return;
    
    // SVG'nin gerçek boyutunu al
    const svgWidth = progressRing.getBoundingClientRect().width || parseInt(progressRing.getAttribute('width')) || 60;
    const isMobile = svgWidth <= 50;
    
    let radius = isMobile ? 20 : 25; // Mobil için 20, masaüstü için 25
    const circumference = 2 * Math.PI * radius;
    
    // 0%'da tamamen gizli olmalı (offset = circumference)
    // 100%'da tamamen görünür olmalı (offset = 0)
    let offset = circumference - (progress / 100) * circumference;
    
    // 0%'da offset'i tam olarak circumference'e eşitle (küçük farkları önlemek için)
    if (progress === 0) {
        offset = circumference;
    }
    
    // Offset değerini ayarla
    circularProgress.style.strokeDashoffset = offset;
    
    // stroke-dasharray'i her zaman güncelle
    circularProgress.style.strokeDasharray = circumference;
    if (circularProgressText) {
        circularProgressText.textContent = Math.round(progress);
    }
    
    // Lineer progress
    const linearProgressFill = document.getElementById('linearProgressFill');
    const linearProgressText = document.getElementById('linearProgressPercent');
    
    if (linearProgressFill) {
        linearProgressFill.style.width = progress + '%';
    }
    if (linearProgressText) {
        linearProgressText.textContent = Math.round(progress);
    }
}

// Scroll to Top Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    
    const scrollableHeight = documentHeight - windowHeight;
    
    // En başta (scrollTop = 0) görünmez
    if (scrollTop === 0 || scrollableHeight <= 0) {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
        scrollToTopBtn.style.transform = 'translateX(-20px) translateY(20px)';
        scrollToTopBtn.classList.remove('initial-animation');
        return;
    }
    
    // Scroll yapıldı - buton görünmeye başlar
    // Scroll yüzdesini hesapla
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;
    
    // İlk görünürlük için minimum scroll pikseli (örneğin 50px)
    const minScrollPixels = 50;
    
    if (scrollTop < minScrollPixels) {
        // İlk scroll eşiğinin altında - buton animasyonlu olarak gelir
        if (!scrollToTopBtn.classList.contains('initial-animation')) {
            scrollToTopBtn.classList.add('initial-animation');
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'translateX(-20px) translateY(20px)';
            
            // Animasyonu başlat
            setTimeout(() => {
                scrollToTopBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                scrollToTopBtn.style.opacity = '0.3';
                scrollToTopBtn.style.transform = 'translateX(0) translateY(0)';
            }, 50);
        } else {
            // Animasyon tamamlandı, sadece opacity ayarla
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.opacity = '0.3';
            scrollToTopBtn.style.transform = 'translateX(0) translateY(0)';
        }
    } else {
        // Scroll eşiğini geçti - şeffaflık scroll'a göre artar
        scrollToTopBtn.classList.add('initial-animation');
        scrollToTopBtn.style.visibility = 'visible';
        
        // Minimum scroll pikselinden itibaren hesapla
        const effectiveScrollPixels = scrollTop - minScrollPixels;
        const maxEffectiveScroll = scrollableHeight - minScrollPixels;
        
        // Her 1px scroll için opacity artışı hesapla
        // Her %1 scroll için %3 opacity artışı (1:3 oranı)
        // Minimum opacity 0.3, maksimum 1.0
        const baseOpacity = 0.3;
        const opacityRange = 1.0 - baseOpacity; // 0.7
        
        // Scroll yüzdesine göre opacity hesapla
        const scrollProgress = Math.min(effectiveScrollPixels / maxEffectiveScroll, 1);
        const opacityIncrease = scrollProgress * opacityRange;
        const finalOpacity = Math.min(baseOpacity + opacityIncrease, 1.0);
        
        scrollToTopBtn.style.opacity = finalOpacity.toString();
        scrollToTopBtn.style.transform = 'translateX(0) translateY(0)';
    }
}

// Scroll event listener
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(() => {
        updateScrollProgress();
        toggleScrollToTopButton();
    });
}, { passive: true });

// Loading States Fonksiyonları
function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.add('show');
        spinner.setAttribute('aria-hidden', 'false');
    }
}

function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.remove('show');
        spinner.setAttribute('aria-hidden', 'true');
    }
}

// Toast Notification Fonksiyonları
function showToast(message, type = 'error') {
    const toastId = type === 'error' ? 'errorToast' : 'successToast';
    const messageId = type === 'error' ? 'errorMessage' : 'successMessage';
    const toast = document.getElementById(toastId);
    const messageEl = document.getElementById(messageId);
    
    if (toast && messageEl) {
        messageEl.textContent = message;
        toast.setAttribute('aria-hidden', 'false');
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.setAttribute('aria-hidden', 'true');
            }, 300);
        }, 5000);
    }
}

function showError(message) {
    showToast(message, 'error');
}

function showSuccess(message) {
    showToast(message, 'success');
}

// ARIA Live Region Fonksiyonu
function announceToScreenReader(message) {
    const liveRegion = document.getElementById('ariaLiveRegion');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

// Dua / Arapça yazı tipi seçimi (localStorage + CSS variable)
function applyArabicFont(fontFamily) {
    if (!fontFamily) return;
    const value = "'" + fontFamily + "', serif";
    document.documentElement.style.setProperty('--font-arabic', value);
    try { localStorage.setItem('arabicFont', fontFamily); } catch (e) {}
    const preview = document.getElementById('arabicFontPreview');
    if (preview) preview.style.fontFamily = value;
}

function initArabicFontChoice() {
    const select = document.getElementById('arabicFontSelect');
    if (!select) return;
    let saved = null;
    try { saved = localStorage.getItem('arabicFont'); } catch (e) {}
    if (saved) {
        const opt = Array.from(select.options).find(o => o.value === saved);
        if (opt) { select.value = saved; applyArabicFont(saved); }
    }
    select.addEventListener('change', function() {
        applyArabicFont(this.value);
    });
}

// Paylaş (Yardım menüsü)
function getShareUrl() {
    return document.querySelector('link[rel="canonical"]') ? document.querySelector('link[rel="canonical"]').href : window.location.href;
}

function getShareText() {
    return 'Sabah ve akşam zikirlerini okumayı unutmayın. Sahih hadislerle derlenen zikir programına göz atın!';
}

function shareApp() {
    const url = getShareUrl();
    const text = getShareText();
    if (navigator.share) {
        navigator.share({
            title: 'Sabah-Akşam Zikirleri',
            text: text,
            url: url
        }).then(() => {
            showSuccess('Paylaşım başarılı');
        }).catch((err) => {
            if (err.name !== 'AbortError') showError('Paylaşım iptal edildi veya başarısız.');
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showSuccess('Link kopyalandı. Paylaşmak için yapıştırın.');
        }).catch(() => {
            showError('Link kopyalanamadı.');
        });
    }
}

function initShareLinks() {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(getShareText());
    const wa = document.getElementById('shareWhatsApp');
    const tw = document.getElementById('shareTwitter');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(getShareText() + ' ' + getShareUrl());
    if (tw) tw.href = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
}

// Yardım Modal Fonksiyonları
function showHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // Focus'u modal içindeki ilk öğeye taşı
        const closeBtn = modal.querySelector('.help-modal-close');
        if (closeBtn) {
            closeBtn.focus();
        }
        announceToScreenReader('Yardım menüsü açıldı');
    }
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // Focus'u yardım butonuna geri taşı
        const helpBtn = document.querySelector('.help-button');
        if (helpBtn) {
            helpBtn.focus();
        }
        announceToScreenReader('Yardım menüsü kapatıldı');
    }
}

// Keyboard Navigation - Yardım Butonu
document.addEventListener('DOMContentLoaded', () => {
    const helpButton = document.querySelector('.help-button');
    if (helpButton) {
        helpButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showHelpModal();
            }
        });
    }
    
    // Modal Kapatma Butonu için Keyboard Desteği
    const modalCloseBtn = document.querySelector('.help-modal-close');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeHelpModal();
            }
        });
    }
    
    // Tab Butonları için Ok Tuşu Desteği
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((btn, index) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const nextIndex = e.key === 'ArrowRight' 
                    ? (index + 1) % tabButtons.length 
                    : (index - 1 + tabButtons.length) % tabButtons.length;
                tabButtons[nextIndex].focus();
                tabButtons[nextIndex].click();
            }
        });
    });
    
    // Control Butonları için Keyboard Desteği
    const controlButtons = document.querySelectorAll('.control-button');
    controlButtons.forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
});

// Modal dışına tıklanınca kapat
document.addEventListener('click', (e) => {
    const modal = document.getElementById('helpModal');
    if (modal && e.target === modal) {
        closeHelpModal();
    }
});

// ESC tuşu ile modal kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('helpModal');
        if (modal && modal.classList.contains('show')) {
            closeHelpModal();
        }
    }
});

// Development modu kontrolü
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname.includes('.local');

// Console wrapper - Production'da console.log'ları gizle
const logger = {
    log: (...args) => {
        if (isDevelopment) console.log(...args);
    },
    warn: (...args) => {
        if (isDevelopment) console.warn(...args);
    },
    error: (...args) => {
        // Error'lar her zaman gösterilmeli (hata takibi için)
        console.error(...args);
    }
};

// Performance Monitoring
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        logger.log('Sayfa yükleme süresi:', pageLoadTime, 'ms');
        
        // Core Web Vitals
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.entryType === 'largest-contentful-paint') {
                            logger.log('LCP:', entry.renderTime || entry.loadTime, 'ms');
                        }
                    }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                logger.log('Performance Observer desteklenmiyor');
            }
        }
    }
});

// Sayfa yüklendiğinde sabah zikirlerini göster
document.addEventListener('DOMContentLoaded', () => {
    // Kayıtlı Arapça yazı tipi seçimini uygula
    initArabicFontChoice();
    // Paylaş linklerini güncelle
    initShareLinks();

    // URL parametresini kontrol et
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    
    // Eğer tab parametresi varsa ve geçerliyse onu kullan, yoksa sabah'ı göster
    const defaultTab = (tab === 'aksam' || tab === 'sabah') ? tab : 'sabah';
    
    // İlgili sekmeyi göster
    showZikir(defaultTab);
    
    // İlk progress güncellemesi
    setTimeout(() => {
        updateScrollProgress();
        toggleScrollToTopButton();
    }, 100);
    
    // iOS için manuel prompt göster (beforeinstallprompt iOS'ta çalışmaz)
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        setTimeout(() => {
            showPWAInstallPrompt();
        }, 2000);
    }
    
    // Service Worker hatalarını yakala (sadece http/https ortamında)
    if (isSecureOrigin && 'serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (!registration) logger.warn('Service Worker kayıtlı değil');
        }).catch(error => {
            logger.error('Service Worker kontrol hatası:', error);
            showError('Service Worker yüklenemedi. Lütfen sayfayı yenileyin.');
        });
    }

    // Footer sayaç animasyonu (scroll ile görünce 0'dan hedefe artan sayı + +1 efekti)
    initVisitCounterAnimation();
});

function initVisitCounterAnimation() {
    const countEl = document.getElementById('visitCount');
    const footer = document.querySelector('footer.footer');
    if (!countEl || !footer) return;

    const target = parseInt(countEl.getAttribute('data-target') || '0', 10);
    if (!Number.isFinite(target) || target < 0) {
        countEl.textContent = '0';
        return;
    }

    // +1 animasyonu için eleman oluştur
    const plusOne = document.createElement('span');
    plusOne.className = 'visit-plus-one';
    plusOne.textContent = '+1';
    plusOne.setAttribute('aria-hidden', 'true');
    footer.querySelector('.footer-text')?.appendChild(plusOne);

    let animated = false;
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!animated && entry.isIntersecting) {
                animated = true;
                obs.disconnect();

                const duration = 1000;
                const startTime = performance.now();
                const startValue = 0;

                function step(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(startValue + (target - startValue) * progress);
                    countEl.textContent = current.toString();

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        countEl.textContent = target.toString();
                        // +1 animasyonunu tetikle
                        plusOne.classList.add('show');
                        setTimeout(() => {
                            plusOne.classList.remove('show');
                        }, 700);
                    }
                }

                requestAnimationFrame(step);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(footer);
}
