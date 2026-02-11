/**
 * Namaz Tesbihatı
 * Kaynak: nursin.net
 * 5 vakit: Sabah, Öğle, İkindi, Akşam, Yatsı
 * tesbihat = Uzun tesbihat | tesbihatKisa = Kısa tesbihat (daha sonra güncellenecek)
 */

function parseTesbihatCount(countStr) {
    if (!countStr) return 1;
    const s = countStr.toLowerCase();
    if (s.includes('bir')) return 1;
    if (s.includes('otuz üç') || s.includes('otuzuc') || s.includes('33')) return 33;
    if (s.includes('yirmi beş') || s.includes('yirmibes') || s.includes('25')) return 25;
    if (s.includes('üç') || s.includes('uc')) return 3;
    if (s.includes('dört')) return 4;
    if (s.includes('yedi')) return 7;
    if (s.includes('on')) return 10;
    if (s.includes('yüz') || s.includes('yuz')) return 100;
    return 1;
}

const tesbihat = {
    sabah: [
        {
            title: "Tevhid Zikri (Sabah, İkindi, Akşam)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Bütün mülk O'na aittir. Bütün hamd O'nadır. O her şeye gücü yetendir."
        },
        {
            title: "Ateşten Korunma Duası (Sabah, Akşam)",
            count: "Yedi defa okunur",
            arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
            pronunciation: "Allâhümme ecirnî minen-nâr.",
            translation: "Allah'ım! Beni ateşten (cehennemden) kurtar."
        },
        {
            title: "İstiğfar ve Selam Duası",
            count: "Bir defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَحَيَّانَا يَا رَبِّ بِالسَّلَامِ، تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Estağfirullâhel azîm. Allâhümme entes selâmü ve minkes selâm, tehayyeynâ yâ Rabbe bis selâm. Tebârekte ve teâleyte yâ ze'l celâli vel ikrâm.",
            translation: "Yüce olan Allah'tan bağışlanmamı dilerim. Allah'ım! Sen selametsin, selamet de Senden'dir. Ey Rabbimiz! Bizi selametle ihya et. Mübareksin ve yücesin, ey celal ve ikram sahibi."
        },
        {
            title: "Tevhid ve Kudret Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Allâhümme lâ mâni'a limâ a'tayte ve lâ mu'tiye limâ mena'te ve lâ yenfeu ze'l ceddi minkel cedd. Lâ havle ve lâ kuvvete illâ billâhil aliyyil azîm.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. Allah'ım! Verdiğine kimse engel olamaz. Engellediğini de kimse veremez. Zenginlik sahipleri Sana karşı bir şey yapamaz. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Sübhanallah",
            count: "Otuz üç defa okunur",
            arabic: "سُبْحَانَ اللَّهِ",
            pronunciation: "Sübhânallâh.",
            translation: "Allah noksan sıfatlardan münezzehtir."
        },
        {
            title: "Elhamdulillah",
            count: "Otuz üç defa okunur",
            arabic: "الْحَمْدُ لِلَّهِ",
            pronunciation: "Elhamdulillâh.",
            translation: "Hamd Allah'adır."
        },
        {
            title: "Allahu Ekber",
            count: "Otuz üç defa okunur",
            arabic: "اللَّهُ أَكْبَرُ",
            pronunciation: "Allâhu ekber.",
            translation: "Allah en büyüktür."
        },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        {
            note: true,
            title: "Kişisel Dua",
            translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir."
        },
        {
            title: "Tehlil (Kısa)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
            pronunciation: "Lâ ilâhe illallâh.",
            translation: "Allah'tan başka ilah yoktur."
        },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        {
            title: "İstiğfar",
            count: "Yirmi beş defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            pronunciation: "Estağfirullâh.",
            translation: "Allah'tan bağışlanmamı dilerim."
        }
    ],
    ogle: [
        {
            title: "İstiğfar ve Selam Duası",
            count: "Bir defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَحَيَّانَا يَا رَبِّ بِالسَّلَامِ، تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Estağfirullâhel azîm. Allâhümme entes selâmü ve minkes selâm, tehayyeynâ yâ Rabbe bis selâm. Tebârekte ve teâleyte yâ ze'l celâli vel ikrâm.",
            translation: "Yüce olan Allah'tan bağışlanmamı dilerim. Allah'ım! Sen selametsin, selamet de Senden'dir. Ey Rabbimiz! Bizi selametle ihya et. Mübareksin ve yücesin, ey celal ve ikram sahibi."
        },
        {
            title: "Tevhid ve Kudret Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Allâhümme lâ mâni'a limâ a'tayte ve lâ mu'tiye limâ mena'te ve lâ yenfeu ze'l ceddi minkel cedd. Lâ havle ve lâ kuvvete illâ billâhil aliyyil azîm.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. Allah'ım! Verdiğine kimse engel olamaz. Engellediğini de kimse veremez. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Sübhanallah",
            count: "Otuz üç defa okunur",
            arabic: "سُبْحَانَ اللَّهِ",
            pronunciation: "Sübhânallâh.",
            translation: "Allah noksan sıfatlardan münezzehtir."
        },
        {
            title: "Elhamdulillah",
            count: "Otuz üç defa okunur",
            arabic: "الْحَمْدُ لِلَّهِ",
            pronunciation: "Elhamdulillâh.",
            translation: "Hamd Allah'adır."
        },
        {
            title: "Allahu Ekber",
            count: "Otuz üç defa okunur",
            arabic: "اللَّهُ أَكْبَرُ",
            pronunciation: "Allâhu ekber.",
            translation: "Allah en büyüktür."
        },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        {
            note: true,
            title: "Kişisel Dua",
            translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir."
        },
        {
            title: "Tehlil (Kısa)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
            pronunciation: "Lâ ilâhe illallâh.",
            translation: "Allah'tan başka ilah yoktur."
        },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        {
            title: "İstiğfar",
            count: "Yirmi beş defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            pronunciation: "Estağfirullâh.",
            translation: "Allah'tan bağışlanmamı dilerim."
        }
    ],
    ikindi: [
        {
            title: "Tevhid Zikri (Sabah, İkindi, Akşam)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Bütün mülk O'na aittir. Bütün hamd O'nadır. O her şeye gücü yetendir."
        },
        {
            title: "İstiğfar ve Selam Duası",
            count: "Bir defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَحَيَّانَا يَا رَبِّ بِالسَّلَامِ، تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Estağfirullâhel azîm. Allâhümme entes selâmü ve minkes selâm, tehayyeynâ yâ Rabbe bis selâm. Tebârekte ve teâleyte yâ ze'l celâli vel ikrâm.",
            translation: "Yüce olan Allah'tan bağışlanmamı dilerim. Allah'ım! Sen selametsin, selamet de Senden'dir. Ey Rabbimiz! Bizi selametle ihya et. Mübareksin ve yücesin, ey celal ve ikram sahibi."
        },
        {
            title: "Tevhid ve Kudret Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Allâhümme lâ mâni'a limâ a'tayte ve lâ mu'tiye limâ mena'te ve lâ yenfeu ze'l ceddi minkel cedd. Lâ havle ve lâ kuvvete illâ billâhil aliyyil azîm.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. Allah'ım! Verdiğine kimse engel olamaz. Engellediğini de kimse veremez. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Sübhanallah",
            count: "Otuz üç defa okunur",
            arabic: "سُبْحَانَ اللَّهِ",
            pronunciation: "Sübhânallâh.",
            translation: "Allah noksan sıfatlardan münezzehtir."
        },
        {
            title: "Elhamdulillah",
            count: "Otuz üç defa okunur",
            arabic: "الْحَمْدُ لِلَّهِ",
            pronunciation: "Elhamdulillâh.",
            translation: "Hamd Allah'adır."
        },
        {
            title: "Allahu Ekber",
            count: "Otuz üç defa okunur",
            arabic: "اللَّهُ أَكْبَرُ",
            pronunciation: "Allâhu ekber.",
            translation: "Allah en büyüktür."
        },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        {
            note: true,
            title: "Kişisel Dua",
            translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir."
        },
        {
            title: "Tehlil (Kısa)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
            pronunciation: "Lâ ilâhe illallâh.",
            translation: "Allah'tan başka ilah yoktur."
        },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        {
            title: "İstiğfar",
            count: "Yirmi beş defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            pronunciation: "Estağfirullâh.",
            translation: "Allah'tan bağışlanmamı dilerim."
        }
    ],
    aksam: [
        {
            title: "Tevhid Zikri (Sabah, İkindi, Akşam)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Bütün mülk O'na aittir. Bütün hamd O'nadır. O her şeye gücü yetendir."
        },
        {
            title: "Ateşten Korunma Duası (Sabah, Akşam)",
            count: "Yedi defa okunur",
            arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
            pronunciation: "Allâhümme ecirnî minen-nâr.",
            translation: "Allah'ım! Beni ateşten (cehennemden) kurtar."
        },
        {
            title: "İstiğfar ve Selam Duası",
            count: "Bir defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَحَيَّانَا يَا رَبِّ بِالسَّلَامِ، تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Estağfirullâhel azîm. Allâhümme entes selâmü ve minkes selâm, tehayyeynâ yâ Rabbe bis selâm. Tebârekte ve teâleyte yâ ze'l celâli vel ikrâm.",
            translation: "Yüce olan Allah'tan bağışlanmamı dilerim. Allah'ım! Sen selametsin, selamet de Senden'dir. Ey Rabbimiz! Bizi selametle ihya et. Mübareksin ve yücesin, ey celal ve ikram sahibi."
        },
        {
            title: "Tevhid ve Kudret Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Allâhümme lâ mâni'a limâ a'tayte ve lâ mu'tiye limâ mena'te ve lâ yenfeu ze'l ceddi minkel cedd. Lâ havle ve lâ kuvvete illâ billâhil aliyyil azîm.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. Allah'ım! Verdiğine kimse engel olamaz. Engellediğini de kimse veremez. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Sübhanallah",
            count: "Otuz üç defa okunur",
            arabic: "سُبْحَانَ اللَّهِ",
            pronunciation: "Sübhânallâh.",
            translation: "Allah noksan sıfatlardan münezzehtir."
        },
        {
            title: "Elhamdulillah",
            count: "Otuz üç defa okunur",
            arabic: "الْحَمْدُ لِلَّهِ",
            pronunciation: "Elhamdulillâh.",
            translation: "Hamd Allah'adır."
        },
        {
            title: "Allahu Ekber",
            count: "Otuz üç defa okunur",
            arabic: "اللَّهُ أَكْبَرُ",
            pronunciation: "Allâhu ekber.",
            translation: "Allah en büyüktür."
        },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        {
            note: true,
            title: "Kişisel Dua",
            translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir."
        },
        {
            title: "Tehlil (Kısa)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
            pronunciation: "Lâ ilâhe illallâh.",
            translation: "Allah'tan başka ilah yoktur."
        },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        {
            title: "İstiğfar",
            count: "Yirmi beş defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            pronunciation: "Estağfirullâh.",
            translation: "Allah'tan bağışlanmamı dilerim."
        }
    ],
    yatsi: [
        {
            title: "İstiğfar ve Selam Duası",
            count: "Bir defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَحَيَّانَا يَا رَبِّ بِالسَّلَامِ، تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Estağfirullâhel azîm. Allâhümme entes selâmü ve minkes selâm, tehayyeynâ yâ Rabbe bis selâm. Tebârekte ve teâleyte yâ ze'l celâli vel ikrâm.",
            translation: "Yüce olan Allah'tan bağışlanmamı dilerim. Allah'ım! Sen selametsin, selamet de Senden'dir. Ey Rabbimiz! Bizi selametle ihya et. Mübareksin ve yücesin, ey celal ve ikram sahibi."
        },
        {
            title: "Tevhid ve Kudret Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Allâhümme lâ mâni'a limâ a'tayte ve lâ mu'tiye limâ mena'te ve lâ yenfeu ze'l ceddi minkel cedd. Lâ havle ve lâ kuvvete illâ billâhil aliyyil azîm.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. Allah'ım! Verdiğine kimse engel olamaz. Engellediğini de kimse veremez. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Sübhanallah",
            count: "Otuz üç defa okunur",
            arabic: "سُبْحَانَ اللَّهِ",
            pronunciation: "Sübhânallâh.",
            translation: "Allah noksan sıfatlardan münezzehtir."
        },
        {
            title: "Elhamdulillah",
            count: "Otuz üç defa okunur",
            arabic: "الْحَمْدُ لِلَّهِ",
            pronunciation: "Elhamdulillâh.",
            translation: "Hamd Allah'adır."
        },
        {
            title: "Allahu Ekber",
            count: "Otuz üç defa okunur",
            arabic: "اللَّهُ أَكْبَرُ",
            pronunciation: "Allâhu ekber.",
            translation: "Allah en büyüktür."
        },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        {
            note: true,
            title: "Kişisel Dua",
            translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir."
        },
        {
            title: "Tehlil (Kısa)",
            count: "On defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
            pronunciation: "Lâ ilâhe illallâh.",
            translation: "Allah'tan başka ilah yoktur."
        },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        {
            title: "İstiğfar",
            count: "Yirmi beş defa okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            pronunciation: "Estağfirullâh.",
            translation: "Allah'tan bağışlanmamı dilerim."
        }
    ]
};

// Kısa tesbihat - Ayetel Kürsi'den sonra 33'lü zikirler (tüm vakitler aynı)
const kisaTesbihatListesi = [
        {
            title: "Selam Duası",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            pronunciation: "Allâhümme ente's-selâmü ve minke's-selâm, tebârekte yâ ze'l celâli ve'l-ikrâm.",
            translation: "Allah'ım! Selâm sensin, selâmet ve esenlik sendendir. Ey azamet ve kerem sahibi Allah'ım, sen hayır ve bereketi çok olansın."
        },
        {
            title: "Tesbih",
            count: "Bir defa okunur",
            arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            pronunciation: "Sübhânallahi ve'l-hamdü lillâhi ve lâ ilâhe illallâhü vallâhu ekber. Ve lâ havle ve lâ kuvvete illâ billâhi'l-aliyyi'l-azîm.",
            translation: "Allah eksik sıfatlardan münezzehtir. Hamd Allah'adır. Allah'tan başka ilah yoktur ve Allah en büyüktür. Güç ve kuvvet ancak yüce ve azamet sahibi Allah iledir."
        },
        {
            title: "Ayete'l-Kürsi",
            count: "Bir defa okunur",
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ<br>اَللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            pronunciation: "Eûzu billâhi mineş şeytânir racîm. Allâhu lâ ilâhe illâ huvel hayyul kayyûm. Lâ te'huzuhu sinetun velâ nevm. Lehu mâ fîs semâvâti ve mâ fil ard. Men zellezî yeşfeu indehu illâ bi iznih. Ya'lemu mâ beyne eydîhim ve mâ halfehum. Velâ yuhîtûne bi şey'in min ilmihi illâ bi mâ şâe. Vesi'a kürsiyyuhus semâvâti vel ard. Velâ yeûduhu hıfzuhuma. Ve huvel aliyyul azîm.",
            translation: "Kovulmuş şeytandan Allah'a sığınırım. Allah, O'ndan başka hak ilah olmayan, Hayy (diri) ve Kayyum'dur. Kendisine ne uyku gelir ne de uyuklama. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini, işleyeceklerini bilir. O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onların gözetilmesi O'na ağır gelmez. O yücedir, büyüktür. (Bakara Sûresi: 255)"
        },
        { title: "Sübhanallah", count: "Otuz üç defa okunur", arabic: "سُبْحَانَ اللَّهِ", pronunciation: "Sübhânallâh.", translation: "Allah noksan sıfatlardan münezzehtir." },
        { title: "Elhamdulillah", count: "Otuz üç defa okunur", arabic: "الْحَمْدُ لِلَّهِ", pronunciation: "Elhamdulillâh.", translation: "Hamd Allah'adır." },
        { title: "Allahu Ekber", count: "Otuz üç defa okunur", arabic: "اللَّهُ أَكْبَرُ", pronunciation: "Allâhu ekber.", translation: "Allah en büyüktür." },
        {
            title: "Tehlil ve Tesbih Duası",
            count: "Bir defa okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ<br><br>سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّابِ",
            pronunciation: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr. Sübhâne rabbiyel-aliyyil-a'lel-vehhab.",
            translation: "Allah'tan başka ilah yoktur. Tek ilah sadece O'dur. O'nun ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye gücü yetendir. — Rabbim, en yüce, en üstün ve çok ihsan eden Allah noksan sıfatlardan münezzehtir."
        },
        { note: true, title: "Kişisel Dua", translation: "Bu duada eller açılarak kişi kendi hususi duasını eder. Duası tamamlanınca tesbihata devam edilir." },
        { title: "Tehlil (Kısa)", count: "On defa okunur", arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", pronunciation: "Lâ ilâhe illallâh.", translation: "Allah'tan başka ilah yoktur." },
        {
            title: "Salavat-ı Şerife (Uzun)",
            count: "Bir defa okunur",
            arabic: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ بِعَدَدِ كُلِّ دَاءٍ وَدَوَاءٍ وَبَارِكْ وَسَلِّمْ عَلَيْهِ وَعَلَيْهِمْ كَثِيرًا، يَا رَبِّ صَلِّ وَسَلِّمْ وَزِدْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ جَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَىٰ آلِ كُلٍّ وَصَحْبِ كُلٍّ أَجْمَعِينَ، آمِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            pronunciation: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammedin bi-adedi külli dâin ve devâin, ve bârik ve sellim aleyhi ve aleyhim kesîran kesîrâ. Yâ Rabbe salli ve sellim ve zid ve bârik alâ seyyidinâ Muhammedin ve alâ cemîil enbiyâi vel mürselîn, ve alâ âli küllin ve sahbi küllin ecmaîn. Âmîn. Vel hamdü lillâhi rabbil âlemîn.",
            translation: "Allah'ım! Her hastalık ve deva sayısınca Efendimiz Muhammed'e ve onun ehline salat et. Ona ve onlara bereket ve selam eyle. Ey Rabbim! Efendimiz Muhammed'e, tüm peygamberlere, elçilere, hepsinin ehline ve ashabına salat, selam ve bereket eyle. Âmin. Âlemlerin Rabbi Allah'a hamd olsun."
        },
        { title: "İstiğfar", count: "Yirmi beş defa okunur", arabic: "أَسْتَغْفِرُ اللَّهَ", pronunciation: "Estağfirullâh.", translation: "Allah'tan bağışlanmamı dilerim." }
];
const tesbihatKisa = { sabah: kisaTesbihatListesi, ogle: kisaTesbihatListesi, ikindi: kisaTesbihatListesi, aksam: kisaTesbihatListesi, yatsi: kisaTesbihatListesi };
