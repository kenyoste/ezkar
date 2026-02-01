

let showTranslation = false;
let darkMode = false;

function showZikir(type) {
    // Butonları güncelle
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // İçerikleri güncelle
    document.getElementById('sabah-content').classList.remove('active');
    document.getElementById('aksam-content').classList.remove('active');
    document.getElementById(type + '-content').classList.add('active');

    // İçeriği render et
    renderZikirler(type);
    
    // Progress'i güncelle
    setTimeout(updateScrollProgress, 100);
}

function renderZikirler(type) {
    const content = document.getElementById(type + '-content');
    const zikirList = zikirler[type];
    
    // Title gösterilecek dualar
    const titlesToShow = ["İHLÂS SÛRESİ", "FELAK SÛRESİ", "NÂS SÛRESİ", "AYETE'L-KÜRSÎ", "SEYYİDU'L-İSTİĞFAR"];
    
    content.innerHTML = zikirList.map((zikir, index) => {
        // Besmele için özel render
        if (zikir.title === "Besmele") {
            return `
                <div class="zikir-besmele">
                    <div class="zikir-besmele-arabic">${zikir.arabic}</div>
                </div>
            `;
        }
        
        // Hamd ve Salavat için özel render
        if (zikir.title === "Hamd ve Salavat") {
            return `
                <div class="zikir-hamd">
                    <div class="zikir-hamd-arabic">${zikir.arabic}</div>
                </div>
            `;
        }
        
        // Diğer dualar için normal render - sadece belirli duaların title'ı gösterilir
        const showTitle = titlesToShow.includes(zikir.title);
        const zikirId = `zikir-${type}-${index}`;
        // Data attribute'ları için HTML escape
        const escapeHtml = (str) => {
            if (!str) return '';
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        };
        return `
            <div class="zikir-item" data-zikir-id="${zikirId}" 
                 data-title="${escapeHtml(zikir.title)}"
                 data-arabic="${escapeHtml(zikir.arabic)}"
                 data-translation="${escapeHtml(zikir.translation)}"
                 data-count="${escapeHtml(zikir.count)}"
                 data-footnote="${zikir.footnote ? escapeHtml(zikir.footnote) : ''}">
                <button class="copy-btn-item" onclick="copyZikirFromElement(this)" title="Kopyala">
                    <i class="fas fa-copy"></i>
                </button>
                ${showTitle ? `<div class="zikir-title">${zikir.title}</div>` : ''}
                <div class="zikir-arabic">${zikir.arabic}</div>
                <div class="zikir-tags-container">
                    <div class="zikir-count">${zikir.count}</div>
                    ${zikir.footnote ? `
                        <div class="zikir-footnote">
                            <i class="fas fa-book"></i> ${zikir.footnote}
                        </div>
                    ` : ''}
                </div>
                <div class="zikir-translation ${showTranslation ? '' : 'hidden'}">
                    ${zikir.translation}
                </div>
            </div>
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
            
            setTimeout(() => {
                icon.className = originalClass;
                button.style.color = '';
                hideCopyTooltip(button);
            }, 2000);
        }
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
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
                
                setTimeout(() => {
                    icon.className = originalClass;
                    button.style.color = '';
                    hideCopyTooltip(button);
                }, 2000);
            }
        } catch (err) {
            alert('Kopyalama başarısız oldu. Lütfen manuel olarak kopyalayın.');
        }
        document.body.removeChild(textArea);
    });
}

function toggleTranslation() {
    showTranslation = !showTranslation;
    const btn = document.getElementById('translationBtn');
    const translations = document.querySelectorAll('.zikir-translation');
    
    translations.forEach(trans => {
        if (showTranslation) {
            trans.classList.remove('hidden');
            btn.innerHTML = ' Tercümeyi Gizle';
            btn.classList.add('active');
        } else {
            trans.classList.add('hidden');
            btn.innerHTML = 'Tercümeyi Göster';
            btn.classList.remove('active');
        }
    });
}

function toggleDarkMode() {
    darkMode = !darkMode;
    const btn = document.getElementById('darkModeBtn');
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        btn.innerHTML = ' Açık Mod';
        btn.classList.add('active');
    } else {
        document.body.classList.remove('dark-mode');
        btn.innerHTML = 'Koyu Mod';
        btn.classList.remove('active');
    }
}

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
                console.log('Kullanıcı PWA yüklemeyi kabul etti');
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

// Service Worker kayıt ve güncelleme kontrolü
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker kayıt başarılı:', registration.scope);
                
                // Yeni Service Worker kontrolü
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Yeni Service Worker yüklendi, sayfayı yenile
                            console.log('Yeni Service Worker yüklendi, sayfa yenileniyor...');
                            window.location.reload();
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('Service Worker kayıt hatası:', error);
            });
        
        // Periyodik olarak güncelleme kontrolü
        setInterval(() => {
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration) {
                    registration.update();
                }
            });
        }, 60000); // Her 60 saniyede bir kontrol et
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

// Sayfa yüklendiğinde sabah zikirlerini göster
document.addEventListener('DOMContentLoaded', () => {
    renderZikirler('sabah');
    
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
});
