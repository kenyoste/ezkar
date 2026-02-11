<?php
declare(strict_types=1);

const COUNTER_COOKIE_NAME         = 'unique_visit_1h';
const COUNTER_COOKIE_TESBIHAT     = 'unique_visit_tesbihat_1h';
const COUNTER_COOKIE_LIFETIME     = 3600; // 1 saat (saniye cinsinden)

/**
 * Ana sayfa sayaç dosyasının tam yolu.
 */
function getCounterFilePath(): string
{
    return __DIR__ . '/storage/count.txt';
}

/**
 * Tesbihat sayfası sayaç dosyasının tam yolu.
 */
function getTesbihatCounterFilePath(): string
{
    return __DIR__ . '/storage/count-tesbihat.txt';
}

/**
 * Ziyaretçiyi 1 saat içinde sadece 1 kez sayar.
 * Toplam sayıyı dosyadan okuyup, gerekiyorsa artırır ve geri döner.
 */
function getTotalVisitCount(): int
{
    $counterFile = getCounterFilePath();

    // Dosya yoksa 0 ile oluştur
    if (!file_exists($counterFile)) {
        // '0' ile başlat, LOCK_EX ile tek seferlik güvenli yazım
        file_put_contents($counterFile, "0\n", LOCK_EX);
    }

    // Sayaç dosyasını oku/yaz modunda aç
    $fp = fopen($counterFile, 'c+');
    if ($fp === false) {
        // Üretimde burada kullanıcıya sayacın gösterilmemesi daha iyi olabilir
        throw new RuntimeException('Sayaç dosyası açılamadı.');
    }

    // Dosyayı kilitle (yarış durumlarını engellemek için)
    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        throw new RuntimeException('Sayaç dosyası kilitlenemedi.');
    }

    // Mevcut sayıyı oku
    $contents = stream_get_contents($fp);
    $current  = is_numeric(trim((string)$contents)) ? (int)trim((string)$contents) : 0;

    // Cookie var mı?
    $hasRecentVisit = isset($_COOKIE[COUNTER_COOKIE_NAME]);

    // Cookie yoksa yeni benzersiz ziyaret: sayacı artır
    if (!$hasRecentVisit) {
        $current++;

        // Dosyayı baştan itibaren yeniden yaz
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, (string)$current);
        fflush($fp);

        // 1 saatlik cookie ayarla
        $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');

        setcookie(
            COUNTER_COOKIE_NAME,
            '1',
            [
                'expires'  => time() + COUNTER_COOKIE_LIFETIME,
                'path'     => '/',
                'secure'   => $secure,   // HTTPS varsa true olsun
                'httponly' => true,
                'samesite' => 'Lax',
            ]
        );
    }

    // Kilidi bırak ve dosyayı kapat
    flock($fp, LOCK_UN);
    fclose($fp);

    return $current;
}

/**
 * Tesbihat sayfası ziyaretçisini 1 saat içinde sadece 1 kez sayar.
 */
function getTesbihatVisitCount(): int
{
    $counterFile = getTesbihatCounterFilePath();

    if (!file_exists($counterFile)) {
        file_put_contents($counterFile, "0\n", LOCK_EX);
    }

    $fp = fopen($counterFile, 'c+');
    if ($fp === false) {
        throw new RuntimeException('Tesbihat sayaç dosyası açılamadı.');
    }

    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        throw new RuntimeException('Tesbihat sayaç dosyası kilitlenemedi.');
    }

    $contents = stream_get_contents($fp);
    $current  = is_numeric(trim((string)$contents)) ? (int)trim((string)$contents) : 0;

    $hasRecentVisit = isset($_COOKIE[COUNTER_COOKIE_TESBIHAT]);

    if (!$hasRecentVisit) {
        $current++;

        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, (string)$current);
        fflush($fp);

        $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');

        setcookie(
            COUNTER_COOKIE_TESBIHAT,
            '1',
            [
                'expires'  => time() + COUNTER_COOKIE_LIFETIME,
                'path'     => '/',
                'secure'   => $secure,
                'httponly' => true,
                'samesite' => 'Lax',
            ]
        );
    }

    flock($fp, LOCK_UN);
    fclose($fp);

    return $current;
}