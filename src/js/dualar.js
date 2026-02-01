
// Zikir verileri
const zikirler = {
    sabah: [
        {
            title: "Besmele",
            count: "Bir kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            translation: "\"Rahman ve Rahim olan Allah'ın adıyla.\""
        },
        {
            title: "Hamd ve Salavat",
            count: "Bir kere okunur",
            arabic: "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ",
            translation: "\"Hamd yalnızca Allah'a mahsustur. Kendisinden sonra peygamber gelmeyecek olan (Hz. Muhammed)'e salat ve selam olsun.\""
        },
        {
            title: "AYETE'L-KÜRSÎ",
            count: "Bir kere okunur",
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاَللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            translation: "Kovulmuş şeytandan Allah'a sığınırım:\n\"Allah, Kendisinden başka hak ilah olmayan, Hayy (diri) ve Kayyum'dur (her an yaratıklarını gözetendir), Kendisine ne uyku gelir ne de uyuklama. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini, işleyeceklerini bilir. Onlar, O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onların (göklerin ve yerin) gözetilmesi O'na ağır gelmez. O yücedir, büyüktür.\" (Bakara Sûresi: 255)"
        },
        {
            title: "İHLÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: O Allah birdir. Allah Samet'tir, (her şeyden müstağnidir ve her şey O'na muhtaçtır). O doğurmamış ve doğmamıştır. Hiçbir şey O'na denk değildir.\" (İhlas Sûresi)"
        },
        {
            title: "FELAK SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِن شَرِّ مَا خَلَقَ\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: Yarattıklarının şerrinden, bastırdığı zaman karanlığın şerrinden, düğümlere üfleyen büyücülerin şerrinden, haset ettiği zaman hasetçilerin şerrinden, tan yerini ağartan Rabbe sığınırım.\" (Felak Sûresi)"
        },
        {
            title: "NÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: İnsanlar ve cinlerden olup insanların göğüslerine vesvese veren o sinsi vesvesecinin şerrinden, insanların Rabbi, insanların hükümdarı ve insanların ilahı olan Allah'a sığınırım.\" (Nas Sûresi)"
        },
        {
            title: "Sabah Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ",
            translation: "\"Mülk, Allah'a ait olduğu halde sabahladık. Hamd Allah'adır. Allah'tan başka hak ilah yoktur. O, tektir ve ortağı yoktur. Mülk O'nundur. Hamd da O'nadır. O, her şeye gücü yetendir. Rabbim! Sen'den, bugünde olan ve bugünden sonraki hayrı isterim; bugünün şerrinden ve bugünden sonra (meydana gelecek olan) şerden de Sana sığınırım. Rabbim! Tembellikten ve (aklını yitirmek ve bunamak gibi) ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Cehennem ve kabir azabından Sana sığınırım.\"",
            footnote: "Müslim (4/2088)"
        },
        {
            title: "Sabah-Akşam Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
            translation: "\"Allah'ım! Sen'in (nimetin, koruman ve zikrin) ile akşamlarız ve Sen'in (nimetin, koruman ve zikrin) ile sabahlarız. Sen'in yardımınla yaşar ve Sen'in yardımınla ölürüz. Ve (kıyamet günü) dönüş yalnızca Sana'dır.\"",
            footnote: "Tirmizi (5/466), Bkz. Sahih-i Tirmizi (3/142)"
        },
        {
            title: "SEYYİDU'L-İSTİĞFAR",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            translation: "\"Allah'ım! Sen benim Rabbimsin. Sen'den başka hak ilah yoktur. Beni Sen yarattın ve ben Sen'in kulunum. Gücüm yettiğince Sana verdiğim söz (ulûhiyetini ve vahdaniyetini itiraf etme sözü) üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Üzerimdeki nimetini itiraf ediyorum. İşlediğim günahlarımı kabul ediyorum. Beni bağışla. Zira günahları ancak Sen bağışlarsın.\"",
            footnote: "Kim bunu akşamladığı vakit içtenlikle inanarak söyler de o gece ölürse cennete girer. Sabahladığı vakit yaparsa da böyledir. Buhâri (7/150)"
        },
        {
            title: "Nimet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            translation: "\"Allah'ım! Benim veya kullarından birisinin yanında sabaha çıkan her nimet, yalnızca Sen'dendir. Sen'in ortağın yoktur. Hamd, yalnızca Sana'dır. Şükür de Sana'dır.\"",
            footnote: "Kim bunu sabahladığı zaman söylerse, gününün şükrünü eda etmiştir. Ebu Dâvud (4/318), Nesâi, İbn-i es-Sünnî (h. 41)"
        },
        {
            title: "Nefis ve Şeytan Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
            translation: "\"Gizli ve aşikârı bilen, göklerin ve yerin yaratıcısı Allah'ım! Her şeyin Rabbi ve sahibi! Senden başka hak ilah olmadığına şehadet ederim. Nefsimin şerrinden Sana sığınırım. Şeytanın ve şirkinin şerrinden, nefsime kötülük etmekten veya o kötülüğü bir Müslümana götürmekten Sana sığınırım.\"",
            footnote: "Tirmizi, Ebu Dâvud; Bkz. Sahih-i Tirmizi (3/142)"
        },
        {
            title: "Af ve Afiyet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِن بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَن يَمِينِي، وَعَن شِمَالِي، وَمِن فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحْتِي",
            translation: "\"Allah'ım! Dünya ve ahirette Sen'den, af ve âfiyet dilerim. Allah'ım! Dinim, dünyam, ailem ve malım hakkında Sen'den, af ve âfiyet dilerim. Allah'ım! Kusurlarımı gizle ve beni korkularımdan emin kıl. Allah'ım! Beni önümden, arkamdan, sağımdan, solumdan ve üstümden (gelecek belâlara karşı) koru. Altımdan yere batırılarak helak edilmekten Sen'in azametine sığınırım.\""
        },
        {
            title: "Hayy ve Kayyum Duası",
            count: "Bir kere okunur",
            arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
            translation: "\"Ya Hayy, ya Kayyum! Sen'in rahmetinle yardım dilerim. Bütün işlerimi düzelt ve göz açıp kapatıncaya kadar -bile olsa- beni nefsime bırakma.\""
        },
        {
            title: "Günün Hayrı Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذَا الْيَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ",
            translation: "\"Mülk, Allah'a ait olduğu halde sabahladık. Allah'ım! Sen'den; bugünün hayrını, zaferini, (ilim ve amelde muvaffak olmak suretiyle) nurunu, (kolay helal rızık kazanmak suretiyle) bereketini ve hidayetini dilerim. Ondaki ve sonrasındaki şerden de Sana sığınırım.\"",
            footnote: "Ebu Dâvud (4/322); Bkz. Zâdu'l-Meâd (2/273)"
        },
        {
            title: "Fıtrat Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
            translation: "\"İslâm fıtratı (hak dini), ihlas kelimesi (kelime-i şehadet) ve Nebimiz Muhammed -sallallahu aleyhi ve sellem-'in dini üzere; Hanif ve Müslüman olan, müşriklerden olmayan babamız İbrahim'in milleti üzere sabahladık.\"",
            footnote: "Ahmed (3/406-407); İbn es-Sünnî, Bkz. Sahihu'l-Câmî (4/209)"
        },
        {
            title: "İlim ve Rızık Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
            translation: "\"Allah'ım! Sen'den; faydalı bir ilim, helal bir rızık ve kabul olunan bir amel dilerim.\"",
            footnote: "İbn-i es-Sünnî, İbn-i Mâce (h. 925); Bkz. Zâdü'l-Meâd (2/375)"
        },
        {
            title: "İsim Duası",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            translation: "\"İsmiyle yerde ve gökte hiçbir şeyin zarar veremediği Allah'ın adıyla (sığınırım). O, Semi'dir (hakkıyla işitendir) ve Alîm'dir (her şeyi hakkıyla bilendir).\"",
            footnote: "Sabah-akşam üç kere söyleyene hiçbir şey zarar veremez. Ebu Dâvud (4/323), Tirmizi (5/465), İbn-i Mâce; Bkz. Tuhfetu'l-Ahyar (s. 39)"
        },
        {
            title: "Razı Olma Duası",
            count: "Üç kere okunur",
            arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا",
            translation: "\"Rab olarak Allah'tan, din olarak İslam'dan, nebi olarak Muhammed -sallallahu aleyhi ve sellem-'den razı oldum.\"",
            footnote: "Bunu sabah üç kere söyleyeni razı etmesi, kıyamet günü Allah üzerine hak olur. Ahmed (4/337), Nesâi, Ebu Dâvud (4/418), Tirmizi (5/465); Bkz. Tuhfetu'l-Ahyar (s. 39)"
        },
        {
            title: "Tesbih Duası",
            count: "Üç kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translation: "\"Yarattıklarının sayısınca, Kendisinin razı olacağı kadar, arşının ağırlığınca ve kelimelerinin çokluğunca hamd ederek Allah'ı tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Müslim (4/2090)"
        },
        {
            title: "Afiyet Duası",
            count: "Üç kere okunur",
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ",
            translation: "\"Allah'ım! Bedenime âfiyet ver. Allah'ım! Kulağıma âfiyet ver. Allah'ım! Gözüme âfiyet ver. Sen'den başka hak ilah yoktur. Allah'ım! Küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Sen'den başka hak ilah yoktur.\""
        },
        {
            title: "Hasbiyallahu Duası",
            count: "Yedi kere okunur",
            arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            translation: "\"Allah bana yeter. O'ndan başka hak ilah yoktur. O'na tevekkül ettim ve O, büyük arşın Rabbidir.\"",
            footnote: "Kim bunu sabahladığı ve akşamlığı zaman yedi kere söylerse, onu üzen dünya ve ahiret işlerine Allah kafidir. (Ebu Davud (4/321))"
        },
        {
            title: "Şehadet Duası",
            count: "Dört kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
            translation: "\"Allah'ım! Sen'den başka hak ilah olmadığına ve Muhammed'in de kulun ve Rasûlün olduğuna; Sen'i, arşını taşıyanları, meleklerini ve bütün yarattıklarını şahit tutarak sabahladım.\"",
            footnote: "Kim sabahladığı veya akşamladığı zaman dört kere bunu söylerse, Allah onu Cehennem'den azat eder. Ebu Dâvud (4/317), Buhâri, Nesâi"
        },
        {
            title: "Tehlil",
            count: "On kere okunur (tembellik edilirse bir defa)",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "\"Allah'tan başka hak ilah yoktur. O, birdir ve ortağı yoktur. Mülk O'nundur, hamd da O'nadır. O, her şeye gücü yetendir.\"",
            footnote: "Bunu günde yüz defa okuyan on köle azat etmiş kadar sevap alır. Bununla ona yüz hasene yazılarak ondan yüz günah silinir. Akşamlayıncaya kadar o gün şeytandan korunur. Bundan daha çok amel işleyen bir kimseden başka hiç kimse onun getirdiğinden daha faziletlisini getiremez. Buhâri (4/95), Müslim (4/2071)"
        },
        {
            title: "Tesbih",
            count: "Yüz kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            translation: "\"Allah'a hamd ederek O'nu tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Sabahladığı ve akşamladığı zaman yüz kere bunu söyleyen kimse, başkası da onun kadar veya daha çok söylemedikçe; kıyamet gününe onun getirdiğinden daha faziletli bir amel getiremez. Müslim (4/2071)"
        },
        {
            title: "Tehlil (Günlük)",
            count: "Günde yüz kere okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "\"Allah'tan başka hak ilah yoktur. O, birdir ve ortağı yoktur. Mülk O'nundur, hamd da O'nadır. O, her şeye gücü yetendir.\""
        },
        {
            title: "İstiğfar",
            count: "Günde yüz kere okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
            translation: "\"Allah'tan mağfiret diler ve O'na tövbe ederim.\"",
            footnote: "Rasûlullah sallallahu aleyhi ve sellem şöyle buyurmuştur: \"Muhakkak ki ben, Allah'a günde yüz kere istiğfar ederim.\" Müslim (2702)"
        },
        {
            title: "Salavat",
            count: "On kere okunur",
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
            translation: "\"Allah'ım! Peygamberimiz Muhammed'e (sallallahu aleyhi ve sellem) salât ve selam et.\"",
            footnote: "Kim sabahladığı-akşamladığı zaman 10 defa bana salat getirirse kıyamet günü şefaatim ona ulaşır. Mecmau'z-Zevaid (10/120)"
        }
    ],
    aksam: [
        {
            title: "Besmele",
            count: "Bir kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            translation: "\"Rahman ve Rahim olan Allah'ın adıyla.\""
        },
        {
            title: "Hamd ve Salavat",
            count: "Bir kere okunur",
            arabic: "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ",
            translation: "\"Hamd yalnızca Allah'a mahsustur. Kendisinden sonra peygamber gelmeyecek olan (Hz. Muhammed)'e salat ve selam olsun.\""
        },
        {
            title: "AYETE'L-KÜRSÎ",
            count: "Bir kere okunur",
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاَللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            translation: "Kovulmuş şeytandan Allah'a sığınırım\n\"Allah, O'ndan başka hak ilah olmayan, Hayy (diri) ve Kayyum'dur (her an yaratıklarını gözetendir), kendisine ne uyku gelir ne de uyuklama. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini, işleyeceklerini bilir. O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onların (Göklerin ve yerin) gözetilmesi O'na ağır gelmez. O yücedir, büyüktür.\" (Bakara Sûresi: 255)"
        },
        {
            title: "İHLÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: O Allah birdir. Allah Samet'tir, (her şeyden müstağnidir ve her şey O'na muhtaçtır). O doğurmamış ve doğmamıştır. Hiçbir şey O'na denk değildir.\" (İhlas Sûresi)"
        },
        {
            title: "FELAK SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِن شَرِّ مَا خَلَقَ\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: Yarattıklarının şerrinden, bastırdığı zaman karanlığın şerrinden, düğümlere üfleyen büyücülerin şerrinden, haset ettiği zaman hasetçilerin şerrinden, tan yerini ağartan Rabbe sığınırım.\" (Felak Sûresi)"
        },
        {
            title: "NÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: İnsanlar ve cinlerden olup insanların göğüslerine vesvese veren o sinsi vesvesecinin şerrinden, insanların Rabbi, insanların hükümdarı ve insanların ilahı olan Allah'a sığınırım.\" (Nas Sûresi)"
        },
        {
            title: "Akşam Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ",
            translation: "\"Mülk, Allah'a ait olduğu halde akşamladık. Hamd Allah'adır. Allah'tan başka hak ilah yoktur. O, tektir ve ortağı yoktur. Mülk O'nundur. Hamd da O'nadır. O, her şeye gücü yetendir. Rabbim! Sen'den; akşamda olan ve akşamdan sonraki hayrı isterim; akşamın şerrinden ve akşamdan sonra (meydana gelecek olan) şerden de Sana sığınırım. Rabbim! Tembellikten ve (aklını yitirmek ve bunamak gibi) ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Cehennem ve kabir azabından Sana sığınırım.\"",
            footnote: "Müslim (4/2088)"
        },
        {
            title: "Sabah-Akşam Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
            translation: "\"Allah'ım! Sen'in (nimetin, koruman ve zikrin) ile akşamlarız ve Sen'in (nimetin, koruman ve zikrin) ile sabahlarız. Sen'in yardımınla yaşar ve Sen'in yardımınla ölürüz. Ve (kıyamet günü) dönüş yalnızca Sana'dır.\"",
            footnote: "Tirmizi (5/466), Bkz. Sahih-i Tirmizi (3/142)"
        },
        {
            title: "SEYYİDU'L-İSTİĞFAR",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            translation: "\"Allah'ım! Sen benim Rabbimsin. Sen'den başka hak ilah yoktur. Beni Sen yarattın ve ben Sen'in kulunum. Gücüm yettiğince Sana verdiğim söz (ulûhiyetini ve vahdaniyetini itiraf etme sözü) üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Üzerimdeki nimetini itiraf ediyorum. İşlediğim günahlarımı kabul ediyorum. Beni bağışla. Zira günahları ancak Sen bağışlarsın.\"",
            footnote: "Kim bunu akşamladığı vakit içtenlikle inanarak söyler de o gece ölürse cennete girer. Sabahladığı vakit yaparsa da böyledir. Buhâri (7/150)"
        },
        {
            title: "Nimet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            translation: "\"Allah'ım! Benim veya kullarından birisinin yanında akşama çıkan her nimet, yalnızca Sen'dendir. Sen'in ortağın yoktur. Hamd, yalnızca Sana'dır. Şükür de Sana'dır.\"",
            footnote: "Kim bunu sabahladığı veya akşamladığı zaman söylerse, gününün veya gecesinin şükrünü eda etmiştir.  Ebu Dâvud (4/318)"
        },
        {
            title: "Nefis ve Şeytan Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
            translation: "\"Gizli ve aşikârı bilen, göklerin ve yerin yaratıcısı Allah'ım! Her şeyin Rabbi ve sahibi! Senden başka hak ilah olmadığına şehadet ederim. Nefsimin şerrinden Sana sığınırım. Şeytanın ve şirkinin şerrinden, nefsime kötülük etmekten veya o kötülüğü bir Müslümana götürmekten Sana sığınırım.\"",
            footnote: "Tirmizi, Ebu Dâvud; Bkz. Sahih-i Tirmizi (3/142)"
        },
        {
            title: "Af ve Afiyet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِن بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَن يَمِينِي، وَعَن شِمَالِي، وَمِن فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحْتِي",
            translation: "\"Allah'ım! Dünya ve ahirette Sen'den, af ve âfiyet dilerim. Allah'ım! Dinim, dünyam, ailem ve malım hakkında Sen'den, af ve âfiyet dilerim. Allah'ım! Kusurlarımı gizle ve beni korkularımdan emin kıl. Allah'ım! Beni önümden, arkamdan, sağımdan, solumdan ve üstümden (gelecek belâlara karşı) koru. Altımdan yere batırılarak helak edilmekten Sen'in azametine sığınırım.\"",
            footnote: "Ebu Dâvud, İbn Mâce; Bkz. Sahih-i İbn Mâce (2/332)"
        },
        {
            title: "Hayy ve Kayyum Duası",
            count: "Bir kere okunur",
            arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
            translation: "\"Ya Hayy, ya Kayyum! Sen'in rahmetinle yardım dilerim. Bütün işlerimi düzelt ve göz açıp kapatıncaya kadar -bile olsa- beni nefsime bırakma.\"",
            footnote: "Hakim (1/545), Bkz. Sahihu't-Terğib ve't-Terhib (1/273)"
        },
        {
            title: "Gecenin Hayrı Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذِهِ اللَّيْلَةِ، فَتْحَهَا وَنَصْرَهَا، وَنُورَهَا وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا",
            translation: "\"Mülk, Allah'a ait olduğu halde akşamladık. Allah'ım! Sen'den; bu akşamın hayrını, zaferini, (ilim ve amelde muvaffak olmak suretiyle) nurunu, (kolay helal rızık kazanmak suretiyle) bereketini ve hidayetini dilerim. Ondaki ve sonrasındaki şerden de Sana sığınırım.\"",
            footnote: "Ebu Dâvud (4/322); Bkz. Zâdu'l-Meâd (2/273)"
        },
        {
            title: "Fıtrat Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
            translation: "\"İslâm fıtratı (hak dini), ihlas kelimesi (kelime-i şehadet) ve Nebimiz Muhammed -sallallahu aleyhi ve sellem-'in dini üzere; Hanif ve Müslüman olan, müşriklerden olmayan babamız İbrahim'in milleti üzere akşamladık.\"",
            footnote: "Ahmed (3/406-407); İbn es-Sünnî, Bkz. Sahihu'l-Câmî (4/209)"
        },
        {
            title: "Kelimat Duası",
            count: "Üç kere okunur",
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translation: "\"Yarattıklarının şerrinden, Allah'ın eksiksiz sözlerine (isimlerine ve kitaplarına) sığınırım.\"",
            footnote: "Kim akşamladığı zaman bunu üç kere söylerse, o gecenin humması (akşamla birlikte ortaya çıkan hastalık ve zararlar) ona zarar veremez. Ahmed (2/290)"
        },
        {
            title: "İsim Duası",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            translation: "\"İsmiyle yerde ve gökte hiçbir şeyin zarar veremediği Allah'ın adıyla (sığınırım). O, Semi'dir (hakkıyla işitendir) ve Alîm'dir (her şeyi hakkıyla bilendir).\"",
            footnote: "Sabah-akşam üç kere söyleyene hiçbir şey zarar veremez. Tirmizi (5/465)"
        },
        {
            title: "Razı Olma Duası",
            count: "Üç kere okunur",
            arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا",
            translation: "\"Rab olarak Allah'tan, din olarak İslam'dan, Nebi olarak Muhammed -sallallahu aleyhi ve sellem-'den razı oldum.\"",
            footnote: "Bunu sabah üç kere söyleyeni razı etmesi, kıyamet günü Allah üzerine hak olur. Ahmed (4/337), Nesâi, Ebu Dâvud (4/418), Tirmizi (5/465); Bkz. Tuhfetu'l-Ahyar (s. 39)"
        },
        {
            title: "Afiyet Duası",
            count: "Üç kere okunur",
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ",
            translation: "\"Allah'ım! Bedenime âfiyet ver. Allah'ım! Kulağıma âfiyet ver. Allah'ım! Gözüme âfiyet ver. Sen'den başka hak ilah yoktur. Allah'ım! Küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Sen'den başka hak ilah yoktur.\"",
            footnote: "Ebu Dâvud (4/324), Ahmed (5/42), Nesâi; Bkz. Tuhfetu'l-Ahyar (s. 26)"
        },
        {
            title: "Hasbiyallahu Duası",
            count: "Yedi kere okunur",
            arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            translation: "\"Allah bana yeter. O'ndan başka hak ilah yoktur. O'na tevekkül ettim ve O, büyük arşın Rabbidir.\"",
            footnote: "Kim bunu sabahladığı ve akşamlığı zaman yedi kere söylerse, onu üzen dünya ve ahiret işlerine Allah kafidir. (Ebu Davud (4/321)"
        },
        {
            title: "Şehadet Duası",
            count: "Dört kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
            translation: "\"Allah'ım! Sen'den başka hak ilah olmadığına ve Muhammed'in de kulun ve Rasûlün olduğuna; Sen'i, arşını taşıyanları, meleklerini ve bütün yarattıklarını şahit tutarak akşamladım.\"",
            footnote: "Kim sabahladığı veya akşamladığı  zaman dört kere bunu söylerse, Allah onu Cehennem'den azat eder. Ebu Dâvud (4/317), Buhâri, Nesâi; Bkz. Tuhfetu'l-Ahyâr (s. 23)"
        },
        {
            title: "Tehlil",
            count: "On kere okunur (tembellik edilirse bir defa)",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "\"Allah'tan başka hak ilah yoktur. O, birdir ve ortağı yoktur. Mülk O'nundur, hamd da O'nadır. O, her şeye gücü yetendir.\"",
            footnote: "Bunu günde yüz defa okuyan on köle azat etmiş kadar sevap alır. Bununla ona yüz hasene yazılarak ondan yüz günah silinir. Akşamlayıncaya kadar o gün şeytandan korunur. Bundan daha çok amel işleyen bir kimseden başka hiç kimse onun getirdiğinden daha faziletlisini getiremez. Buhâri (4/95), Müslim (4/2071)"
        },
        {
            title: "Tesbih",
            count: "Yüz kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            translation: "\"Allah'a hamd ederek O'nu tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Sabahladığı ve akşamladığı zaman yüz kere bunu söyleyen kimse, başkası da onun kadar veya daha çok söylemedikçe; kıyamet gününe onun getirdiğinden daha faziletli bir amel getiremez. Müslim (4/2071)"
        },
        {
            title: "Salavat",
            count: "On kere okunur",
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
            translation: "\"Allah'ım! Peygamberimiz Muhammed'e (sallallahu aleyhi ve sellem) salât ve selam et.\"",
            footnote: "Kim sabahladığı-akşamladığı zaman 10 defa bana salat getirirse kıyamet günü şefaatim ona ulaşır. Mecmau'z-Zevaid (10/120)"
        }
    ]
};