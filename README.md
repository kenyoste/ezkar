# Sabah-Akşam Zikirleri

Modern ve kullanıcı dostu bir web uygulaması ile günlük sabah ve akşam zikirlerini kolayca okuyabilirsiniz. Uygulama Progressive Web App (PWA) özellikleri ile offline çalışma desteği sunar.

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Özellik Detayları](#özellik-detayları)
- [PWA Özellikleri](#pwa-özellikleri)
- [Tarayıcı Desteği](#tarayıcı-desteği)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## ✨ Özellikler

- 🌅 **Sabah Zikirleri**: Sahih hadis kaynaklarından derlenmiş günlük sabah zikirleri ve duaları
- 🌙 **Akşam Zikirleri**: Sahih hadis kaynaklarından derlenmiş günlük akşam zikirleri ve duaları
- 📚 **Sahih Hadis Kaynakları**: Her zikir için Buhari, Müslim, Tirmizi, Ebu Davud gibi sahih kaynaklar belirtilmiştir
- 🌐 **Tercüme Desteği**: Her zikrin Türkçe tercümesini göster/gizle
- 🌓 **Koyu Mod**: Göz yormayan koyu tema desteği
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm (Mobilde 2x2 grid düzeni)
- 🔄 **PWA Desteği**: Offline çalışma ve ana ekrana ekleme özelliği
- 📖 **Kaynak Bilgileri**: Her zikrin hadis kaynakları ve açıklamaları
- 📋 **Kopyalama Özelliği**: Her duayı tek tıkla kopyalayın (başlık, Arapça metin, tercüme, kaynak)
- 📊 **Scroll Progress**: Dairesel ve lineer progress göstergeleri ile okuma ilerlemesini takip edin
- ⬆️ **Scroll to Top**: Sayfanın en altına ulaştığınızda en üste dönmek için buton
- 🎨 **Modern UI/UX**: Kullanıcı dostu ve estetik arayüz
- 🔤 **RTL Desteği**: Sağdan sola yazım desteği (Arapça metinler için)
- 🔍 **SEO Optimizasyonu**: Meta tags, Open Graph, Twitter Cards, Structured Data ile optimize edilmiş

## 🛠 Teknolojiler

- **HTML5**: Yapısal markup
- **CSS3**: Modern stil ve animasyonlar
- **Vanilla JavaScript**: Framework bağımlılığı olmadan saf JavaScript
- **Service Worker**: Offline çalışma ve cache yönetimi
- **PWA**: Progressive Web App özellikleri
- **Google Fonts**: Reem Kufi Ink, Rubik, Playwrite DE Grund
- **Font Awesome**: İkon kütüphanesi

## 📁 Proje Yapısı

```
ezkar/
├── index.html              # Ana HTML dosyası (SEO optimize edilmiş)
├── manifest.json           # PWA manifest dosyası
├── sw.js                   # Service Worker dosyası
├── robots.txt              # Arama motorları için yönlendirme
├── sitemap.xml             # Site haritası
├── logo.webp                # Uygulama logosu
├── README.md               # Proje dokümantasyonu
└── src/
    ├── fonts/
    │   ├── Loubag-Black.ttf
    │   ├── Loubag-Light.ttf
    │   └── exFont-License.txt
    ├── img/
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── apple-touch-icon.png
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   └── site.webmanifest
    ├── js/
    │   ├── dualar.js       # Zikir verileri (sabah ve akşam)
    │   └── script.js        # Ana JavaScript mantığı
    └── style/
        └── style.css       # Ana stil dosyası
```

## 🚀 Kurulum

### Yerel Geliştirme

1. Projeyi klonlayın veya indirin:
```bash
git clone <repository-url>
cd ezkar
```

2. Bir web sunucusu kullanarak çalıştırın. Örneğin:

**Python ile:**
```bash
python -m http.server 8000
```

**Node.js ile (http-server):**
```bash
npx http-server -p 8000
```

**VS Code Live Server eklentisi ile:**
- VS Code'da projeyi açın
- `index.html` dosyasına sağ tıklayın
- "Open with Live Server" seçeneğini seçin

3. Tarayıcınızda `http://localhost:8000` adresine gidin.

### Production Deployment

1. Tüm dosyaları web sunucunuza yükleyin.
2. HTTPS protokolü kullanın (PWA için zorunludur).
3. `manifest.json` ve `sw.js` dosyalarının doğru yolda olduğundan emin olun.

## 📖 Kullanım

### Temel Kullanım

1. **Sabah Zikirleri**: Ana sayfada "Sabah Zikirleri" butonuna tıklayın.
2. **Akşam Zikirleri**: "Akşam Zikirleri" butonuna tıklayın.
3. **Tercüme Gösterme**: "Tercümeyi Göster" butonuna tıklayarak Türkçe tercümeleri görüntüleyin.
4. **Koyu Mod**: "Koyu Mod" butonuna tıklayarak koyu temaya geçin.
5. **Dua Kopyalama**: Her duanın sol üst köşesindeki kopyala ikonuna tıklayarak duayı kopyalayın.
6. **Scroll Progress**: Sağ üstteki progress göstergeleri ile okuma ilerlemenizi takip edin.
7. **En Üste Dön**: Sağ alt köşedeki butona tıklayarak sayfanın en üstüne dönün.

### PWA Olarak Yükleme

#### Android (Chrome):
1. Uygulamayı açın
2. Menüden "Ana ekrana ekle" seçeneğini seçin
3. Veya otomatik olarak gösterilen prompt'tan "Ekle" butonuna tıklayın

#### iOS (Safari):
1. Uygulamayı Safari'de açın
2. Paylaşım butonuna tıklayın
3. "Ana Ekrana Ekle" seçeneğini seçin

## 🎯 Özellik Detayları

### Zikir Kategorileri

#### Sabah Zikirleri İçeriği:
- Besmele
- Hamd ve Salavat
- Ayetel Kürsi
- İhlas, Felak, Nas Sureleri
- Sabah Duası
- Seyyidü'l-İstiğfar
- Nimet Duası
- Nefis ve Şeytan Duası
- Af ve Afiyet Duası
- Hayy ve Kayyum Duası
- Günün Hayrı Duası
- Fıtrat Duası
- İlim ve Rızık Duası
- İsim Duası
- Razı Olma Duası
- Tesbih Duası
- Afiyet Duası
- Hasbiyallahu Duası
- Şehadet Duası
- Tehlil
- Tesbih
- İstiğfar
- Salavat

#### Akşam Zikirleri İçeriği:
- Besmele
- Hamd ve Salavat
- Ayetel Kürsi
- İhlas, Felak, Nas Sureleri
- Akşam Duası
- Seyyidü'l-İstiğfar
- Nimet Duası
- Nefis ve Şeytan Duası
- Af ve Afiyet Duası
- Hayy ve Kayyum Duası
- Gecenin Hayrı Duası
- Fıtrat Duası
- Kelimat Duası
- İsim Duası
- Razı Olma Duası
- Afiyet Duası
- Hasbiyallahu Duası
- Şehadet Duası
- Tehlil
- Tesbih
- Salavat

### Tasarım Özellikleri

- **Özel Fontlar**: 
  - Loubag-Black ve Loubag-Light (başlıklar için)
  - Reem Kufi Ink ve Rubik (Arapça metinler için)
  - Playwrite DE Grund (açıklamalar için)

- **Renk Paleti**:
  - Ana Renk: `#d42121` (Kırmızı)
  - Arka Plan (Açık): `#fdf5e6` (Krem)
  - Arka Plan (Koyu): `#1a1a2e` (Koyu Mavi)
  - Metin (Açık): `#333` (Koyu Gri)
  - Metin (Koyu): `#fdf5e6` (Krem)

- **Animasyonlar**: 
  - Fade-in efektleri
  - Hover efektleri
  - Geçiş animasyonları
  - Scroll progress animasyonları
  - Scroll to top butonu animasyonları

- **Özel Özellikler**:
  - Scroll progress göstergeleri (dairesel ve lineer)
  - Kopyalama özelliği (her dua için)
  - Scroll to top butonu (kademeli görünürlük)
  - Mobilde 2x2 grid buton düzeni
  - Semantic HTML5 yapısı

## 🔧 PWA Özellikleri

### Service Worker

Uygulama, offline çalışma için Service Worker kullanır:
- **Cache Stratejisi**: Cache-first stratejisi ile hızlı yükleme
- **Offline Desteği**: İnternet bağlantısı olmadan da çalışır
- **Otomatik Güncelleme**: Yeni versiyonlar otomatik olarak cache'lenir

### Manifest Özellikleri

- **Standalone Mod**: Uygulama tam ekran modda çalışır
- **Portrait Orientation**: Dikey yönlendirme
- **Icons**: 192x192 ve 512x512 piksel ikonlar
- **Theme Color**: `#d42121`

### Install Prompt

Uygulama, kullanıcılara ana ekrana ekleme önerisi sunar:
- İlk ziyarette otomatik gösterilir
- 5 saniyelik geri sayım ile kapanır
- iOS ve Android için özel talimatlar

## 🔍 SEO Özellikleri

- ✅ **Meta Tags**: Geliştirilmiş title, description, keywords
- ✅ **Open Graph**: Facebook ve LinkedIn paylaşımları için optimize
- ✅ **Twitter Cards**: Twitter paylaşımları için optimize
- ✅ **Structured Data**: JSON-LD ile WebApplication ve WebSite schema
- ✅ **Semantic HTML**: `<main>`, `<header>`, `<section>`, `<footer>` kullanımı
- ✅ **Canonical URL**: Duplicate content önleme
- ✅ **robots.txt**: Arama motorları için yönlendirme
- ✅ **sitemap.xml**: Site haritası
- ✅ **Alt Text**: Tüm görseller için açıklayıcı alt text'ler
- ✅ **Sahih Hadis Vurgusu**: Tüm açıklamalarda sahih hadis kaynakları vurgulanmıştır

## 🌐 Tarayıcı Desteği

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Opera (76+)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

## 📝 Veri Yapısı

Zikir verileri `src/js/dualar.js` dosyasında `zikirler` objesi içinde saklanır:

```javascript
const zikirler = {
    sabah: [
        {
            title: "Zikir Başlığı",
            count: "Okunma sayısı",
            arabic: "Arapça metin",
            translation: "Türkçe tercüme",
            footnote: "Hadis kaynağı (opsiyonel)"
        }
    ],
    aksam: [...]
}
```

## 🔄 Güncelleme

Service Worker cache versiyonu `sw.js` dosyasında `CACHE_NAME` değişkeninde tutulur. Yeni bir güncelleme yapıldığında bu versiyon numarasını artırın:

```javascript
const CACHE_NAME = 'zikirler-v13'; // Versiyon numarasını artırın
```

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Bir Pull Request oluşturun

### Katkı Önerileri

- Yeni sahih hadis kaynaklı zikirler ekleme
- Tasarım iyileştirmeleri
- Performans optimizasyonları
- Erişilebilirlik iyileştirmeleri
- Çeviri desteği
- Hata düzeltmeleri
- SEO iyileştirmeleri

## 📄 Lisans

Bu proje açık kaynaklıdır. Kaynak kodları serbestçe kullanılabilir.

## 🙏 Teşekkürler

- Hadis kaynakları için İslami kaynaklara teşekkürler
- Font sağlayıcılarına teşekkürler
- Açık kaynak topluluğuna teşekkürler

## 📞 İletişim

Sorularınız veya önerileriniz için lütfen issue açın.

---

## ⏱️ Tahmini Okuma Süresi

- **Sabah Zikirleri**: ~12-15 dakika
- **Akşam Zikirleri**: ~9-12 dakika
- **Günlük Toplam**: ~20-30 dakika

*Not: Süreler okuma hızına ve tekrar sayılarına göre değişebilir. 100'lük tekrarlar (Tesbih, Tehlil, İstiğfar) toplam sürenin büyük kısmını oluşturur.*

## 📊 Özellik Detayları

### Scroll Progress Göstergeleri

- **Dairesel Progress**: Sağ üstte, scroll ilerledikçe daire tamamlanır
- **Lineer Progress**: Dairesel göstergenin altında, yüzdelik ilerleme çubuğu
- **Gerçek Zamanlı**: Scroll pozisyonuna göre anlık güncellenir

### Kopyalama Özelliği

- Her duanın sol üst köşesinde kopyala ikonu
- Tıklandığında duanın tüm bilgileri kopyalanır:
  - Dua başlığı (varsa)
  - Arapça metin
  - Okunma sayısı
  - Kaynak/dipnot (varsa)
  - Tercüme
- Başarılı kopyalama sonrası "Kopyalandı" tooltip'i gösterilir

### Scroll to Top Butonu

- Sağ alt köşede konumlandırılmış
- Scroll yapıldıktan sonra animasyonlu olarak görünür
- Scroll pozisyonuna göre şeffaflığı kademeli olarak artar
- Tıklandığında yumuşak bir şekilde en üste scroll eder

### Mobil Optimizasyon

- Butonlar mobilde 2x2 grid düzeninde
- Responsive font boyutları
- Touch-friendly buton boyutları
- Optimize edilmiş görsel boyutları

---

**Not**: Bu uygulama, günlük zikir ve dua pratiğinizi kolaylaştırmak için tasarlanmıştır. Tüm dualar ve zikirler **sahih hadis kaynaklarından** (Buhari, Müslim, Tirmizi, Ebu Davud, Nesai, İbn Mace, Ahmed) derlenmiştir. Her zikir için kaynak bilgileri belirtilmiştir.
