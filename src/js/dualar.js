
// Zikir verileri
const zikirler = {
    sabah: [
        {
            title: "Besmele",
            count: "Bir kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            pronunciation: "Bismillâhirrahmânirrahîm",
            translation: "\"Rahman ve Rahim olan Allah'ın adıyla.\""
        },
        {
            title: "Hamd ve Salavat",
            count: "Bir kere okunur",
            arabic: "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ",
            pronunciation: "Elhamdulillâhi vehdehû, vesselâtu vesselâmu alâ men lâ nebiyye ba'dehû",
            translation: "\"Hamd yalnızca Allah'a mahsustur. Kendisinden sonra peygamber gelmeyecek olan (Hz. Muhammed)'e salat ve selam olsun.\""
        },
        {
            title: "AYETE'L-KÜRSÎ",
            count: "Bir kere okunur",
            arabic: "\nاَللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            pronunciation: "Allâhu lâ ilâhe illâ huvel hayyül kayyûm. Lâ te'huzuhû sinetün velâ nevm. Lehû mâ fîs semâvâti ve mâ fil ard. Men zellezî yeşfeu indehû illâ bi iznih. Ya'lemü mâ beyne eydîhim ve mâ halfehüm. Velâ yuhîtûne bi şey'in min ilmihî illâ bi mâ şâe. Vesi'a kursiyyühüs semâvâti vel ard. Velâ yeûdühû hıfzuhumâ. Ve hüvel aliyyul azîm.",
            translation: "Kovulmuş şeytandan Allah'a sığınırım:\n\"Allah, Kendisinden başka hak ilah olmayan, Hayy (diri) ve Kayyum'dur (her an yaratıklarını gözetendir), Kendisine ne uyku gelir ne de uyuklama. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini, işleyeceklerini bilir. Onlar, O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onların (göklerin ve yerin) gözetilmesi O'na ağır gelmez. O yücedir, büyüktür.\" (Bakara Sûresi: 255)"
        },
        {
            title: "İHLÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul huvallâhu ehad. Allâhussamed. Lem yelid ve lem yûled. Ve lem yekullehû kufuven ehad.",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: O Allah birdir. Allah Samet'tir, (her şeyden müstağnidir ve her şey O'na muhtaçtır). O doğurmamış ve doğmamıştır. Hiçbir şey O'na denk değildir.\" (İhlas Sûresi)"
        },
        {
            title: "FELAK SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِن شَرِّ مَا خَلَقَ\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul eûzü bi rabbil felak. Min şerri mâ halak. Ve min şerri ğasikın izâ vekab. Ve min şerrin neffâsâti fil ukad. Ve min şerri hâsidin izâ hased.",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: Yarattıklarının şerrinden, bastırdığı zaman karanlığın şerrinden, düğümlere üfleyen büyücülerin şerrinden, haset ettiği zaman hasetçilerin şerrinden, tan yerini ağartan Rabbe sığınırım.\" (Felak Sûresi)"
        },
        {
            title: "NÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul eûzü bi rabbin nâs. Melikin nâs. İlâhin nâs. Min şerril vesvâsil hannâs. Ellezî yüvesvisü fî sudûrin nâs. Minel cinneti ven nâs.",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: İnsanlar ve cinlerden olup insanların göğüslerine vesvese veren o sinsi vesvesecinin şerrinden, insanların Rabbi, insanların hükümdarı ve insanların ilahı olan Allah'a sığınırım.\" (Nas Sûresi)"
        },
        {
            title: "Sabah Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ",
            pronunciation: "Asbahna ve asbehal mulku lillâhi, velhamdu lillâhi, lâ ilâhe illallâhü vehdehû lâ şerîke leh, lehül mulku ve lehul hamdü ve huve alâ külli şey'in kadîr. Rabbi es'elüke hayra mâ fî hâzel yevmi ve hayra mâ ba'dehû, ve eûzü bike min şerri mâ fî hâzel yevmi ve şerri mâ ba'dehû. Rabbi eûzü bike minel keseli ve sûil kiberi. Rabbi eûzü bike min azâbin fin nâri ve azâbin fil kabr.",
            translation: "\"Mülk, Allah'a ait olduğu halde sabahladık. Hamd Allah'adır. Allah'tan başka hak ilah yoktur. O, tektir ve ortağı yoktur. Mülk O'nundur. Hamd da O'nadır. O, her şeye gücü yetendir. Rabbim! Sen'den, bugünde olan ve bugünden sonraki hayrı isterim; bugünün şerrinden ve bugünden sonra (meydana gelecek olan) şerden de Sana sığınırım. Rabbim! Tembellikten ve (aklını yitirmek ve bunamak gibi) ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Cehennem ve kabir azabından Sana sığınırım.\"",
            footnote: "Müslim (4/2088)"
        },
        {
            title: "Sabah-Akşam Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
            pronunciation: "Allâhumme bike asbahnâ ve bike emseynâ, ve bike nahyâ ve bike nemûtü ve ileykel masîr.",
            translation: "\"Allah'ım! Sen'in (nimetin, koruman ve zikrin) ile akşamlarız ve Sen'in (nimetin, koruman ve zikrin) ile sabahlarız. Sen'in yardımınla yaşar ve Sen'in yardımınla ölürüz. Ve (kıyamet günü) dönüş yalnızca Sana'dır.\"",
            footnote: "Tirmizi (5/466)"
        },
        {
            title: "SEYYİDU'L-İSTİĞFAR",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            pronunciation: "Allâhumme ente rabbî lâ ilâhe illâ ente, halaktenî ve ene abduke, ve ene alâ ahdike ve va'dike mesteta'tü. Eûzü bike min şerri mâ sana'tü. Ebûu leke bi ni'metike aleyye ve ebûu bi zenbî fağfir lî fe innehu lâ yağfirüz zunûbe illâ ente.",
            translation: "\"Allah'ım! Sen benim Rabbimsin. Sen'den başka hak ilah yoktur. Beni Sen yarattın ve ben Sen'in kulunum. Gücüm yettiğince Sana verdiğim söz (ulûhiyetini ve vahdaniyetini itiraf etme sözü) üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Üzerimdeki nimetini itiraf ediyorum. İşlediğim günahlarımı kabul ediyorum. Beni bağışla. Zira günahları ancak Sen bağışlarsın.\"",
            footnote: "Kim bunu akşamladığı vakit içtenlikle inanarak söyler de o gece ölürse cennete girer. Sabahladığı vakit yaparsa da böyledir. Buhâri (7/150)"
        },
        {
            title: "Nimet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            pronunciation: "Allâhümme mâ asbeha bî min ni'metin ev bi ehadin min halkıke fe minke vehdeke lâ şerîke leke, fe lekel hamdü ve lekeş şukr.",
            translation: "\"Allah'ım! Benim veya kullarından birisinin yanında sabaha çıkan her nimet, yalnızca Sen'dendir. Sen'in ortağın yoktur. Hamd, yalnızca Sana'dır. Şükür de Sana'dır.\"",
            footnote: "Kim bunu sabahladığı zaman söylerse, gününün şükrünü eda etmiştir. Ebu Dâvud (4/318)"
        },
        {
            title: "Nefis ve Şeytan Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
            pronunciation: "Allâhumme âlimel ğaybi veş şehâdeti fâtıras semâvâti vel ardı, rabbe külli şey'in ve melîkehû. Eşhedu en lâ ilâhe illâ ente. Eûzü bike min şerri nefsî ve min şerriş şeytâni ve şirkihî. Ve en ekterife alâ nefsî sûen ev ecürrahu ilâ muslim.",
            translation: "\"Gizli ve aşikârı bilen, göklerin ve yerin yaratıcısı Allah'ım! Her şeyin Rabbi ve sahibi! Senden başka hak ilah olmadığına şehadet ederim. Nefsimin şerrinden Sana sığınırım. Şeytanın ve şirkinin şerrinden, nefsime kötülük etmekten veya o kötülüğü bir Müslümana götürmekten Sana sığınırım.\"",
            footnote: "Sahih-i Tirmizi (3/142)"
        },
        {
            title: "Af ve Afiyet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِن بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَن يَمِينِي، وَعَن شِمَالِي، وَمِن فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحْتِي",
            pronunciation: "Allâhumme innî es'elukel afve vel âfiyete fid dunyâ vel âhırati. Allâhümme innî es'elukel afve vel âfiyete fî dînî ve dunyâye ve ehlî ve mâlî. Allâhummestur avrâtî ve âmin rev'âtî. Allâhummahfaznî min beyni yedeyye ve min halfî ve an yemînî ve an şimâlî ve min fevkî. Ve eûzü bi azametike en uğtâle min tahtî.",
            translation: "\"Allah'ım! Dünya ve ahirette Sen'den, af ve âfiyet dilerim. Allah'ım! Dinim, dünyam, ailem ve malım hakkında Sen'den, af ve âfiyet dilerim. Allah'ım! Kusurlarımı gizle ve beni korkularımdan emin kıl. Allah'ım! Beni önümden, arkamdan, sağımdan, solumdan ve üstümden (gelecek belâlara karşı) koru. Altımdan yere batırılarak helak edilmekten Sen'in azametine sığınırım.\"",
            footnote: "Ebu Davud (4/5074)"
        },
        {
            title: "Hayy ve Kayyum Duası",
            count: "Bir kere okunur",
            arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
            pronunciation: "Yâ Hayyu yâ Kayyûmu bi rahmetike estagîsu. Aslıh lî şe'nî kullehû ve lâ tekilnî ilâ nefsî tarfete ayn.",
            translation: "\"Ya Hayy, ya Kayyum! Sen'in rahmetinle yardım dilerim. Bütün işlerimi düzelt ve göz açıp kapatıncaya kadar -bile olsa- beni nefsime bırakma.\"",
            footnote: "Nesai, Amelü’l-Yevmi ve’l-Leyle (570)"
        },
        {
            title: "Günün Hayrı Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذَا الْيَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ",
            pronunciation: "Asbahnâ ve asbehal mulku lillâhi rabbil âlemîn. Allâhumme innî es'elüke hayra hâzel yevmi fethehû ve nasrehû ve nûrehû ve bereketehû ve hudâhû. Ve eûzu bike min şerri mâ fîhi ve şerri mâ ba'deh.",
            translation: "\"Mülk, Allah'a ait olduğu halde sabahladık. Allah'ım! Sen'den; bugünün hayrını, zaferini, (ilim ve amelde muvaffak olmak suretiyle) nurunu, (kolay helal rızık kazanmak suretiyle) bereketini ve hidayetini dilerim. Ondaki ve sonrasındaki şerden de Sana sığınırım.\"",
            footnote: "Ebu Dâvud (4/322)"
        },
        {
            title: "Fıtrat Duası",
            count: "Bir kere okunur",
            arabic: "أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
            pronunciation: "Asbahnâ alâ fıtratil islâmi ve alâ kelimetil ihlası ve alâ dîni nebiyyinâ Muhammedin sallallâhü aleyhi ve sellem. Ve alâ milleti ebînâ İbrâhîme hanîfen muslimen ve mâ kâne minel muşrikîn.",
            translation: "\"İslâm fıtratı (hak dini), ihlas kelimesi (kelime-i şehadet) ve Nebimiz Muhammed -sallallahu aleyhi ve sellem-'in dini üzere; Hanif ve Müslüman olan, müşriklerden olmayan babamız İbrahim'in milleti üzere sabahladık.\"",
            footnote: "Ahmed (3/406-407)"
        },
        {
            title: "İlim ve Rızık Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
            pronunciation: "Allâhumme innî es'elüke ilmen nâfian ve rızkan tayyiben ve amelen mutekabbelen.",
            translation: "\"Allah'ım! Sen'den; faydalı bir ilim, helal bir rızık ve kabul olunan bir amel dilerim.\"",
            footnote: "İbn-i Mâce (h. 925)"
        },
        {
            title: "İsim Duası",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            pronunciation: "Bismillâhillezî lâ yedurru maa ismihî şey'un fil ardı ve lâ fis semâi ve huves semîul alîm.",
            translation: "\"İsmiyle yerde ve gökte hiçbir şeyin zarar veremediği Allah'ın adıyla (sığınırım). O, Semi'dir (hakkıyla işitendir) ve Alîm'dir (her şeyi hakkıyla bilendir).\"",
            footnote: "Sabah-akşam üç kere söyleyene hiçbir şey zarar veremez. Ebu Dâvud (4/323)"
        },
        {
            title: "Razı Olma Duası",
            count: "Üç kere okunur",
            arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا",
            pronunciation: "Radıytu billâhi rabben ve bil islâmi dînen ve bi Muhammedin nebiyyen.",
            translation: "\"Rab olarak Allah'tan, din olarak İslam'dan, nebi olarak Muhammed -sallallahu aleyhi ve sellem-'den razı oldum.\"",
            footnote: "Bunu sabah üç kere söyleyeni razı etmesi, kıyamet günü Allah üzerine hak olur. Ahmed (4/337)"
        },
        {
            title: "Tesbih Duası",
            count: "Üç kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            pronunciation: "Subhânallahi ve bi hamdihî, adede halkıhî ve rıdâ nefsihî ve zinate arşihî ve midâde kelimâtihî.",
            translation: "\"Yarattıklarının sayısınca, Kendisinin razı olacağı kadar, arşının ağırlığınca ve kelimelerinin çokluğunca hamd ederek Allah'ı tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Müslim (4/2090)"
        },
        {
            title: "Afiyet Duası",
            count: "Üç kere okunur",
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ",
            pronunciation: "Allâhummâfınî fî bedenî. Allâhummâfınî fî sem'î. Allâhummâfınî fî basarî. Lâ ilâhe illâ ente. Allâhumme innî eûzü bike minel kufri vel fakrı. Ve eûzü bike min azâbil kabr. Lâ ilâhe illâ ente.",
            translation: "\"Allah'ım! Bedenime âfiyet ver. Allah'ım! Kulağıma âfiyet ver. Allah'ım! Gözüme âfiyet ver. Sen'den başka hak ilah yoktur. Allah'ım! Küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Sen'den başka hak ilah yoktur.\"",  
            footnote: "Ebu Davud (4/5090)"
        },
        {
            title: "Hasbiyallahu Duası",
            count: "Yedi kere okunur",
            arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            pronunciation: "Hasbiyallâhu lâ ilâhe illâ hû. Aleyhi tevekkeltu ve huve rabbul arşil azîm.",
            translation: "\"Allah bana yeter. O'ndan başka hak ilah yoktur. O'na tevekkül ettim ve O, büyük arşın Rabbidir.\"",
            footnote: "Kim bunu sabahladığı ve akşamlığı zaman yedi kere söylerse, onu üzen dünya ve ahiret işlerine Allah kafidir. (Ebu Davud (4/321))"
        },
        {
            title: "Şehadet Duası",
            count: "Dört kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
            pronunciation: "Allâhümme innî asbahtü üşhidüke ve üşhidü hamlete arşike ve melâiketeke ve cemîa halkıke. Enneke entallâhü lâ ilâhe illâ ente vahdeke lâ şerîke leke. Ve enne Muhammeden abduke ve resûlüke.",
            translation: "\"Allah'ım! Sen'den başka hak ilah olmadığına ve Muhammed'in de kulun ve Rasûlün olduğuna; Sen'i, arşını taşıyanları, meleklerini ve bütün yarattıklarını şahit tutarak sabahladım.\"",
            footnote: "Kim sabahladığı veya akşamladığı zaman dört kere bunu söylerse, Allah onu Cehennem'den azat eder. Ebu Dâvud (4/317)"
        },
        {
            title: "Tehlil",
            count: "On kere okunur",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            pronunciation: "Lâ ilâhe illallâhü vehdehû lâ şerîke leh. Lehul mulku ve lehul hamdu. Ve huve alâ kulli şey'in kadîr.",
            translation: "\"Allah'tan başka hak ilah yoktur. O, birdir ve ortağı yoktur. Mülk O'nundur, hamd da O'nadır. O, her şeye gücü yetendir.\"",
            footnote: "Bunu günde yüz defa okuyan on köle azat etmiş kadar sevap alır. Bununla ona yüz hasene yazılarak ondan yüz günah silinir. Akşamlayıncaya kadar o gün şeytandan korunur. Bundan daha çok amel işleyen bir kimseden başka hiç kimse onun getirdiğinden daha faziletlisini getiremez. Buhâri (4/95)"
        },
        {
            title: "Tesbih",
            count: "Yüz kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            pronunciation: "Subhânallahi ve bi hamdihî.",
            translation: "\"Allah'a hamd ederek O'nu tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Sabahladığı ve akşamladığı zaman yüz kere bunu söyleyen kimse, başkası da onun kadar veya daha çok söylemedikçe; kıyamet gününe onun getirdiğinden daha faziletli bir amel getiremez. Müslim (4/2071)"
        },
      
        {
            title: "İstiğfar",
            count: "Günde yüz kere okunur",
            arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
            pronunciation: "Estagfirullâhe ve etûbu ileyh.",
            translation: "\"Allah'tan mağfiret diler ve O'na tövbe ederim.\"",
            footnote: "Rasûlullah sallallahu aleyhi ve sellem şöyle buyurmuştur: \"Muhakkak ki ben, Allah'a günde yüz kere istiğfar ederim.\" Müslim (2702)"
        },
        {
            title: "Salavat",
            count: "On kere okunur",
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
            pronunciation: "Allâhumme salli ve sellim alâ nebiyyinâ Muhammed.",
            translation: "\"Allah'ım! Peygamberimiz Muhammed'e (sallallahu aleyhi ve sellem) salât ve selam et.\"",
            footnote: "Kim sabahladığı-akşamladığı zaman 10 defa bana salat getirirse kıyamet günü şefaatim ona ulaşır. Mecmau'z-Zevaid (10/120)"
        }
    ],
    aksam: [
        {
            title: "Besmele",
            count: "Bir kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            pronunciation: "Bismillâhirrahmânirrahîm",
            translation: "\"Rahman ve Rahim olan Allah'ın adıyla.\""
        },
        {
            title: "Hamd ve Salavat",
            count: "Bir kere okunur",
            arabic: "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ",
            pronunciation: "Elhamdulillâhi vehdehu, vesselâtu vesselâmu alâ men lâ nebiyye ba'dehu",
            translation: "\"Hamd yalnızca Allah'a mahsustur. Kendisinden sonra peygamber gelmeyecek olan (Hz. Muhammed)'e salat ve selam olsun.\""
        },
        {
            title: "AYETE'L-KÜRSÎ",
            count: "Bir kere okunur",
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاَللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            pronunciation: "Eûzu billâhi mineş şeytânir racîm. Allâhu lâ ilâhe illâ huvel hayyul kayyûm. Lâ te'huzuhu sinetun velâ nevm. Lehu mâ fîs semâvâti ve mâ fil ard. Men zellezî yeşfeu indehu illâ bi iznih. Ya'lemu mâ beyne eydîhim ve mâ halfehum. Velâ yuhîtûne bi şey'in min ilmihi illâ bi mâ şâe. Vesi'a kürsiyyuhus semâvâti vel ard. Velâ yeûduhu hıfzuhuma. Ve huvel aliyyul azîm.",
            translation: "Kovulmuş şeytandan Allah'a sığınırım\n\"Allah, O'ndan başka hak ilah olmayan, Hayy (diri) ve Kayyum'dur (her an yaratıklarını gözetendir), kendisine ne uyku gelir ne de uyuklama. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların işlediklerini, işleyeceklerini bilir. O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onların (Göklerin ve yerin) gözetilmesi O'na ağır gelmez. O yücedir, büyüktür.\" (Bakara Sûresi: 255)"
        },
        {
            title: "İHLÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: O Allah birdir. Allah Samet'tir, (her şeyden müstağnidir ve her şey O'na muhtaçtır). O doğurmamış ve doğmamıştır. Hiçbir şey O'na denk değildir.\" (İhlas Sûresi)",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul huvallâhu ehad. Allâhussamed. Lem yelid ve lem yûled. Ve lem yekullehû kufuven ehad.",
        },
        {
            title: "FELAK SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِن شَرِّ مَا خَلَقَ\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: Yarattıklarının şerrinden, bastırdığı zaman karanlığın şerrinden, düğümlere üfleyen büyücülerin şerrinden, haset ettiği zaman hasetçilerin şerrinden, tan yerini ağartan Rabbe sığınırım.\" (Felak Sûresi)",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul eûzü bi rabbil felak. Min şerri mâ halak. Ve min şerri ğasikın izâ vekab. Ve min şerrin neffâsâti fil ukad. Ve min şerri hâsidin izâ hased."
        },
        {
            title: "NÂS SÛRESİ",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
            translation: "Bismillahirrahmânirrahîm\n\"De ki: İnsanlar ve cinlerden olup insanların göğüslerine vesvese veren o sinsi vesvesecinin şerrinden, insanların Rabbi, insanların hükümdarı ve insanların ilahı olan Allah'a sığınırım.\" (Nas Sûresi)",
            pronunciation: "Bismillâhirrahmânirrahîm. Kul eûzü bi rabbin nâs. Melikin nâs. İlâhin nâs. Min şerril vesvâsil hannâs. Ellezî yüvesvisü fî sudûrin nâs. Minel cinneti ven nâs."
        },
        {
            title: "Akşam Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ، وَعَذَابٍ فِي الْقَبْرِ",
            pronunciation: "Emsayna ve emsel mulku lillâhi, velhamdu lillâhi, lâ ilâhe illallâhu vehdehu lâ şerîke leh, lehul mulku ve lehul hamdu ve huve alâ kulli şey'in kadîr. Rabbi es'eluke hayra mâ fî hâzihil leyleti ve hayra mâ ba'dehâ, ve eûzu bike min şerri mâ fî hâzihil leyleti ve şerri mâ ba'dehâ. Rabbi eûzu bike minel keseli ve suil kiber. Rabbi eûzu bike min azâbin fin nâri ve azâbin fil kabr.",
            translation: "\"Mülk, Allah'a ait olduğu halde akşamladık. Hamd Allah'adır. Allah'tan başka hak ilah yoktur. O, tektir ve ortağı yoktur. Mülk O'nundur. Hamd da O'nadır. O, her şeye gücü yetendir. Rabbim! Sen'den; akşamda olan ve akşamdan sonraki hayrı isterim; akşamın şerrinden ve akşamdan sonra (meydana gelecek olan) şerden de Sana sığınırım. Rabbim! Tembellikten ve (aklını yitirmek ve bunamak gibi) ihtiyarlığın kötülüğünden Sana sığınırım. Rabbim! Cehennem ve kabir azabından Sana sığınırım.\"",
            footnote: "Müslim (4/2088)"
        },
        {
            title: "Sabah-Akşam Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
            pronunciation: "Allâhumme bike emseyna ve bike asbahna, ve bike nahya ve bike nemûtu ve ileykel masîr.",
            translation: "\"Allah'ım! Sen'in (nimetin, koruman ve zikrin) ile akşamlarız ve Sen'in (nimetin, koruman ve zikrin) ile sabahlarız. Sen'in yardımınla yaşar ve Sen'in yardımınla ölürüz. Ve (kıyamet günü) dönüş yalnızca Sana'dır.\"",
            footnote: "Tirmizi (5/466)"
        },
        {
            title: "SEYYİDU'L-İSTİĞFAR",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            pronunciation: "Allâhumme ente rabbî lâ ilâhe illâ ente, halaktenî ve ene abduke, ve ene alâ ahdike ve va'dike mesteta'tu. Eûzu bike min şerri mâ sana'tu. Ebûu leke bi ni'metike aleyye ve ebûu bi zenbî fagfir lî fe innehu lâ yagfiruz zunûbe illâ ente.",
            translation: "\"Allah'ım! Sen benim Rabbimsin. Sen'den başka hak ilah yoktur. Beni Sen yarattın ve ben Sen'in kulunum. Gücüm yettiğince Sana verdiğim söz (ulûhiyetini ve vahdaniyetini itiraf etme sözü) üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Üzerimdeki nimetini itiraf ediyorum. İşlediğim günahlarımı kabul ediyorum. Beni bağışla. Zira günahları ancak Sen bağışlarsın.\"",
            footnote: "Kim bunu akşamladığı vakit içtenlikle inanarak söyler de o gece ölürse cennete girer. Sabahladığı vakit yaparsa da böyledir. Buhâri (7/150)"
        },
        {
            title: "Nimet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            pronunciation: "Allâhumme mâ emsâ bî min ni'metin ev bi ehadin min halkike fe minke vehdeke lâ şerîke leke, fe lekel hamdu ve lekes şukru.",
            translation: "\"Allah'ım! Benim veya kullarından birisinin yanında akşama çıkan her nimet, yalnızca Sen'dendir. Sen'in ortağın yoktur. Hamd, yalnızca Sana'dır. Şükür de Sana'dır.\"",
            footnote: "Kim bunu sabahladığı veya akşamladığı zaman söylerse, gününün veya gecesinin şükrünü eda etmiştir.  Ebu Dâvud (4/318)"
        },
        {
            title: "Nefis ve Şeytan Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
            pronunciation: "Allâhumme âlimel ğaybi veş şehâdeti fâtıras semâvâti vel ardı, rabbe kulli şey'in ve melîkehu. Eşhedu en lâ ilâhe illâ ente. Eûzu bike min şerri nefsî ve min şerriş şeytâni ve şirkihi. Ve en ekterife alâ nefsî suen ev ecurrahu ilâ muslim.",
            translation: "\"Gizli ve aşikârı bilen, göklerin ve yerin yaratıcısı Allah'ım! Her şeyin Rabbi ve sahibi! Senden başka hak ilah olmadığına şehadet ederim. Nefsimin şerrinden Sana sığınırım. Şeytanın ve şirkinin şerrinden, nefsime kötülük etmekten veya o kötülüğü bir Müslümana götürmekten Sana sığınırım.\"",
            footnote: "Tirmizi, Ebu Dâvud"
        },
        {
            title: "Af ve Afiyet Duası",
            count: "Bir kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِن بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَن يَمِينِي، وَعَن شِمَالِي، وَمِن فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحْتِي",
            pronunciation: "Allâhumme innî es'elukel afve vel âfiyete fid dunyâ vel âhırati. Allâhumme innî es'elukel afve vel âfiyete fî dînî ve dunyâye ve ehlî ve mâlî. Allâhummestur avrâtî ve âmin rev'âtî. Allâhummahfaznî min beyni yedeyye ve min halfî ve an yemînî ve an şimâlî ve min fevkî. Ve eûzu bi azametike en ugtâle min tahtî.",
            translation: "\"Allah'ım! Dünya ve ahirette Sen'den, af ve âfiyet dilerim. Allah'ım! Dinim, dünyam, ailem ve malım hakkında Sen'den, af ve âfiyet dilerim. Allah'ım! Kusurlarımı gizle ve beni korkularımdan emin kıl. Allah'ım! Beni önümden, arkamdan, sağımdan, solumdan ve üstümden (gelecek belâlara karşı) koru. Altımdan yere batırılarak helak edilmekten Sen'in azametine sığınırım.\"",
            footnote: "Ebu Davud (4/5074)"
        },
        {
            title: "Hayy ve Kayyum Duası",
            count: "Bir kere okunur",
            arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
            pronunciation: "Yâ Hayyu yâ Kayyûmu bi rahmetike estagîsu. Aslıh lî şe'nî kullehu ve lâ tekilnî ilâ nefsî tarfete ayn.",
            translation: "\"Ya Hayy, ya Kayyum! Sen'in rahmetinle yardım dilerim. Bütün işlerimi düzelt ve göz açıp kapatıncaya kadar -bile olsa- beni nefsime bırakma.\"",
            footnote: "Nesai, Amelü’l-Yevmi ve’l-Leyle (570)"
        },
        {
            title: "Gecenin Hayrı Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذِهِ اللَّيْلَةِ، فَتْحَهَا وَنَصْرَهَا، وَنُورَهَا وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا",
            pronunciation: "Emsayna ve emsel mulku lillâhi rabbil âlemîn. Allâhumme innî es'eluke hayra hâzihil leyleti fethehâ ve nasrehâ ve nûrehâ ve bereketehâ ve hudâhâ. Ve eûzu bike min şerri mâ fîhâ ve şerri mâ ba'dehâ.",
            translation: "\"Mülk, Allah'a ait olduğu halde akşamladık. Allah'ım! Sen'den; bu akşamın hayrını, zaferini, (ilim ve amelde muvaffak olmak suretiyle) nurunu, (kolay helal rızık kazanmak suretiyle) bereketini ve hidayetini dilerim. Ondaki ve sonrasındaki şerden de Sana sığınırım.\"",
            footnote: "Ebu Dâvud (4/322)"
        },
        {
            title: "Fıtrat Duası",
            count: "Bir kere okunur",
            arabic: "أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
            pronunciation: "Emsayna alâ fıtratil islâmi ve alâ kelimetil ihlası ve alâ dînî nebiyyinâ Muhammedin sallallâhu aleyhi ve sellem. Ve alâ milleti ebînâ İbrâhîme hanîfen muslimen ve mâ kâne minel muşrikîn.",
            translation: "\"İslâm fıtratı (hak dini), ihlas kelimesi (kelime-i şehadet) ve Nebimiz Muhammed -sallallahu aleyhi ve sellem-'in dini üzere; Hanif ve Müslüman olan, müşriklerden olmayan babamız İbrahim'in milleti üzere akşamladık.\"",
            footnote: "Ahmed (3/406-407)"
        },
        {
            title: "Kelimat Duası",
            count: "Üç kere okunur",
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            pronunciation: "Eûzu bi kelimâtillâhit tâmmâti min şerri mâ halak.",
            translation: "\"Yarattıklarının şerrinden, Allah'ın eksiksiz sözlerine (isimlerine ve kitaplarına) sığınırım.\"",
            footnote: "Kim akşamladığı zaman bunu üç kere söylerse, o gecenin humması (akşamla birlikte ortaya çıkan hastalık ve zararlar) ona zarar veremez. Ahmed (2/290)"
        },
        {
            title: "İsim Duası",
            count: "Üç kere okunur",
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            pronunciation: "Bismillâhillezî lâ yedurru maa ismihi şey'un fil ardı ve lâ fis semâi ve huves semîul alîm.",
            translation: "\"İsmiyle yerde ve gökte hiçbir şeyin zarar veremediği Allah'ın adıyla (sığınırım). O, Semi'dir (hakkıyla işitendir) ve Alîm'dir (her şeyi hakkıyla bilendir).\"",
            footnote: "Sabah-akşam üç kere söyleyene hiçbir şey zarar veremez. Tirmizi (5/465)"
        },
        {
            title: "Razı Olma Duası",
            count: "Üç kere okunur",
            arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا",
            pronunciation: "Radıytu billâhi rabben ve bil islâmi dînen ve bi Muhammedin nebiyyen.",
            translation: "\"Rab olarak Allah'tan, din olarak İslam'dan, Nebi olarak Muhammed -sallallahu aleyhi ve sellem-'den razı oldum.\"",
            footnote: "Bunu sabah üç kere söyleyeni razı etmesi, kıyamet günü Allah üzerine hak olur. Ahmed (4/337)"
        },
        {
            title: "Afiyet Duası",
            count: "Üç kere okunur",
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ",
            pronunciation: "Allâhummâfınî fî bedenî. Allâhummâfınî fî sem'î. Allâhummâfınî fî basarî. Lâ ilâhe illâ ente. Allâhumme innî eûzu bike minel kufri vel fakrı. Ve eûzu bike min azâbil kabr. Lâ ilâhe illâ ente.",
            translation: "\"Allah'ım! Bedenime âfiyet ver. Allah'ım! Kulağıma âfiyet ver. Allah'ım! Gözüme âfiyet ver. Sen'den başka hak ilah yoktur. Allah'ım! Küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Sen'den başka hak ilah yoktur.\"",
            footnote: "Ebu Dâvud (4/324)"
        },
        {
            title: "Hasbiyallahu Duası",
            count: "Yedi kere okunur",
            arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            pronunciation: "Hasbiyallâhu lâ ilâhe illâ hû. Aleyhi tevekkeltu ve huve rabbul arşil azîm.",
            translation: "\"Allah bana yeter. O'ndan başka hak ilah yoktur. O'na tevekkül ettim ve O, büyük arşın Rabbidir.\"",
            footnote: "Kim bunu sabahladığı ve akşamlığı zaman yedi kere söylerse, onu üzen dünya ve ahiret işlerine Allah kafidir. (Ebu Davud (4/321)"
        },
        {
            title: "Şehadet Duası",
            count: "Dört kere okunur",
            arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
            pronunciation: "Allâhumme innî emsaytu uşhiduke ve uşhidu hamlete arşike ve melâiketeke ve cemîa halkike. Enneke entallâhu lâ ilâhe illâ ente vahdeke lâ şerîke leke. Ve enne Muhammeden abduke ve resûluke.",
            translation: "\"Allah'ım! Sen'den başka hak ilah olmadığına ve Muhammed'in de kulun ve Rasûlün olduğuna; Sen'i, arşını taşıyanları, meleklerini ve bütün yarattıklarını şahit tutarak akşamladım.\"",
            footnote: "Kim sabahladığı veya akşamladığı  zaman dört kere bunu söylerse, Allah onu Cehennem'den azat eder. Ebu Dâvud (4/317)"
        },
        {
            title: "Tehlil",
            count: "On kere okunur (tembellik edilirse bir defa)",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            pronunciation: "Lâ ilâhe illallâhu vehdehu lâ şerîke leh. Lehul mulku ve lehul hamdu. Ve huve alâ kulli şey'in kadîr.",
            translation: "\"Allah'tan başka hak ilah yoktur. O, birdir ve ortağı yoktur. Mülk O'nundur, hamd da O'nadır. O, her şeye gücü yetendir.\"",
            footnote: "Bunu günde yüz defa okuyan on köle azat etmiş kadar sevap alır. Bununla ona yüz hasene yazılarak ondan yüz günah silinir. Akşamlayıncaya kadar o gün şeytandan korunur. Bundan daha çok amel işleyen bir kimseden başka hiç kimse onun getirdiğinden daha faziletlisini getiremez. Buhâri (4/95)"
        },
        {
            title: "Tesbih",
            count: "Yüz kere okunur",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            pronunciation: "Subhânallahi ve bi hamdihî.",
            translation: "\"Allah'a hamd ederek O'nu tüm noksanlıklardan tenzih ederim.\"",
            footnote: "Sabahladığı ve akşamladığı zaman yüz kere bunu söyleyen kimse, başkası da onun kadar veya daha çok söylemedikçe; kıyamet gününe onun getirdiğinden daha faziletli bir amel getiremez. Müslim (4/2071)"
        },
        {
            title: "Salavat",
            count: "On kere okunur",
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
            pronunciation: "Allâhumme salli ve sellim alâ nebiyyinâ Muhammed.",
            translation: "\"Allah'ım! Peygamberimiz Muhammed'e (sallallahu aleyhi ve sellem) salât ve selam et.\"",
            footnote: "Kim sabahladığı-akşamladığı zaman 10 defa bana salat getirirse kıyamet günü şefaatim ona ulaşır. Mecmau'z-Zevaid (10/120)"
        }
    ]
};