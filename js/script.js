(() => {
  "use strict";

  /* ============================================
     Data — collections of adkar
     Texts follow common Sunnah sources (in the
     spirit of Hisn al-Muslim); translations are
     rendered in plain, contemporary English.
     ============================================ */
  const COLLECTIONS = {
    morning: {
      ar: "أذكار الصباح",
      en: "Morning",
      items: [
        {
          arabic: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ. اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
          meaning: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ. اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
          reference: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ. اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
          repeat: 1
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
          meaning: "Surah Al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent. Reciting the three short surahs (Ikhlas, Falaq, Nas) three times each, morning and evening, is enough protection against every harm.",
          reference: "Surah 112. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.",
          repeat: 3
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
          meaning: "Surah Al-Falaq — Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
          reference: "Surah 113. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.",
          repeat: 3
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
          meaning: "Surah An-Nas — Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer who whispers in the hearts of people, from among jinn and mankind.",
          reference: "Surah 114. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.",
          repeat: 3
        },
        {
          arabic: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر",
          meaning: "We have entered the morning, and with it all sovereignty belongs to Allah, and all praise. There is no god but Him alone, without partner — a prayer for the good of the day and refuge from its harm, from laziness and the misery of old age, and from punishment in the Fire and the grave.",
          reference: "Narrated by Abdullah ibn Mas'ud — Sahih Muslim.",
          repeat: 1
        },
        {
          arabic: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ",
          meaning: "Sayyid al-Istighfar, the master supplication for forgiveness — O Allah, You are my Lord, there is no god but You. You created me and I am Your servant. Whoever says it during the day with certainty and dies that day enters Paradise, and likewise at night.",
          reference: "Narrated by Shaddad ibn Aws — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً",
          meaning: "I am pleased with Allah as Lord, with Islam as religion, and with Muhammad ﷺ as Prophet. Whoever says this morning and evening, Allah has made it a right upon Himself to please him on the Day of Judgment.",
          reference: "Narrated by Thawban — Abu Dawud, At-Tirmidhi, An-Nasa'i, Ibn Majah.",
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك",
          meaning: "O Allah, I have entered the morning calling You to witness, and the bearers of Your throne, Your angels and all creation, that You are Allah — there is no god but You, alone without partner — and that Muhammad is Your servant and messenger. Whoever says it, Allah frees a portion of him from the Fire.",
          reference: "Narrated in Abu Dawud, graded hasan by Al-Albani.",
          repeat: 4
        },
        {
          arabic: "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر",
          meaning: "O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner — so to You belongs all praise and all thanks. Whoever says this in the morning has fulfilled his gratitude for that day.",
          reference: "Narrated by Abdullah ibn Ghannam — Abu Dawud, Ibn as-Sunni.",
          repeat: 1
        },
        {
          arabic: "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم",
          meaning: "Allah is sufficient for me, there is no god but Him, upon Him I rely, and He is Lord of the mighty throne. Said seven times, Allah suffices him in whatever concerns him from this world or the next.",
          reference: "Narrated by Abu al-Darda — Abu Dawud, Ibn as-Sunni.",
          repeat: 7
        },
        {
          arabic: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم",
          meaning: "In the name of Allah, with whose name nothing on earth or in the heaven can cause harm, and He is the All-Hearing, All-Knowing. Said three times, nothing will harm the one who recites it that day.",
          reference: "Narrated by Uthman ibn Affan — Abu Dawud, At-Tirmidhi, Ibn Majah.",
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور",
          meaning: "O Allah, by You we enter the morning and by You we enter the evening; by You we live and by You we die, and to You is the resurrection.",
          reference: "Narrated by Abu Hurairah — At-Tirmidhi.",
          repeat: 1
        },
        {
          arabic: "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ",
          meaning: "We have entered the morning upon the natural disposition of Islam, the word of sincerity, the religion of our Prophet Muhammad ﷺ, and the way of our father Ibrahim — a man of pure faith, and he was not among those who associate partners with Allah.",
          reference: "Narrated by Anas ibn Malik — Musnad Ahmad.",
          repeat: 1
        },
        {
          arabic: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه",
          meaning: "Glory and praise to Allah, by the count of His creation, by His pleasure, by the weight of His throne, and by the extent of His words.",
          reference: "Narrated by Juwayriyyah bint al-Harith — Sahih Muslim.",
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ",
          meaning: "O Allah, grant well-being to my body, my hearing, and my sight — there is no god but You.",
          reference: "Narrated by Abu Bakrah — Abu Dawud, Musnad Ahmad.",
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ",
          meaning: "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave — there is no god but You.",
          reference: "Narrated by Abu Bakrah — An-Nasa'i, Al-Hakim.",
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي",
          meaning: "O Allah, I ask You for pardon and well-being in this life and the next, in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and calm my fears, and guard me from before me, behind me, my right, my left, and above me, and I seek refuge in Your greatness from being seized from beneath me.",
          reference: "Narrated by Ibn Umar — Ibn Majah, Musnad Ahmad.",
          repeat: 1
        },
        {
          arabic: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ",
          meaning: "O Ever-Living, O Sustainer of all, by Your mercy I seek help — set right all of my affairs, and do not leave me to myself even for the blink of an eye.",
          reference: "Narrated by Anas ibn Malik — An-Nasa'i in 'Amal al-Yawm wal-Laylah, Al-Hakim.",
          repeat: 3
        },
        {
          arabic: "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه",
          meaning: "We have entered the morning, and with it all sovereignty belongs to Allah, Lord of all the worlds. O Allah, I ask You for the good of this day — its triumph, its help, its light, its blessing and its guidance — and refuge in You from the evil within it and what follows it.",
          reference: "Narrated in Ibn as-Sunni, from variant chains.",
          repeat: 1
        },
        {
          arabic: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم",
          meaning: "O Allah, Knower of the unseen and the seen, Creator of the heavens and earth, Lord and Sovereign of all things, I bear witness there is no god but You. I seek refuge in You from the evil of my own soul, from the evil of Satan and his incitement, and from bringing evil upon myself or leading it to another Muslim.",
          reference: "Narrated by Abu Bakr as-Siddiq — At-Tirmidhi, Musnad Ahmad.",
          repeat: 1
        },
        {
          arabic: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق",
          meaning: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Narrated by Khawlah bint Hakim — Sahih Muslim.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
          meaning: "O Allah, send prayers, peace and blessings upon our Prophet Muhammad. Whoever sends blessings upon him ten times in the morning and evening will be reached by his intercession on the Day of Judgment.",
          reference: "Narrated by Abu al-Darda — At-Tabarani, graded hasan by Al-Albani.",
          repeat: 10
        },
        {
          arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
          meaning: "O Allah, we seek refuge in You from knowingly associating any partner with You, and we seek Your forgiveness for what we do not know.",
          reference: "Narrated in Musnad Ahmad and Al-Bazzar.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ",
          meaning: "O Allah, I seek refuge in You from anxiety and grief, from incapacity and laziness, from cowardice and miserliness, from being overcome by debt and overpowered by others.",
          reference: "Narrated by Anas ibn Malik — Sahih al-Bukhari.",
          repeat: 3
        },
        {
          arabic: "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ",
          meaning: "I seek the forgiveness of Allah the Mighty, there is no god but Him, the Ever-Living, the Sustainer, and I turn to Him in repentance. Whoever says this, Allah forgives him even if he had fled from battle.",
          reference: "Narrated by Abu Hurairah — Abu Dawud, At-Tirmidhi.",
          repeat: 3
        },
        {
          arabic: "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ",
          meaning: "O my Lord, to You belongs all praise as befits the majesty of Your face and the greatness of Your authority.",
          reference: "Narrated by Abu Sa'id al-Khudri and Abu Hurairah — Ibn Majah, Musnad Ahmad.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
          meaning: "O Allah, I ask You for beneficial knowledge, good provision, and deeds that are accepted.",
          reference: "Narrated by Umm Salamah — Ibn Majah, Musnad Ahmad; recited after the Fajr prayer.",
          repeat: 1
        }
      ]
    },
    evening: {
      ar: "أذكار المساء",
      en: "Evening",
      items: [
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
          meaning: "Ayat al-Kursi, read again as evening falls — a covering of remembrance before the night, guarding until morning.",
          reference: "Al-Baqarah 2:255. Virtue narrated by An-Nasa'i and Ibn as-Sunni, graded sahih by Al-Albani.",
          repeat: 1
        },
        {
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          meaning: "We have entered the evening, and with it all sovereignty belongs to Allah. All praise is His alone; there is no god but Him.",
          reference: "Evening form of the narration by Abdullah ibn Mas'ud — Sahih Muslim.",
          repeat: 1
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
          meaning: "The evening form of Sayyid al-Istighfar, the master supplication for forgiveness.",
          reference: "Narrated by Shaddad ibn Aws — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ",
          meaning: "I have entered the evening bearing witness to You, and to the bearers of Your throne, that You are Allah, alone without partner.",
          reference: "Narrated in Abu Dawud, graded hasan by Al-Albani.",
          repeat: 4
        },
        {
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
          meaning: "In the name of Allah, with whose name nothing on earth or in the heaven can cause harm.",
          reference: "Narrated by Uthman ibn Affan — Abu Dawud, At-Tirmidhi, Ibn Majah.",
          repeat: 3
        },
        {
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          meaning: "Glory be to Allah, and praise be to Him. Whoever says it a hundred times in a day has his sins wiped away, even if like the foam of the sea.",
          reference: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 100
        }
      ]
    },
    "after-salah": {
      ar: "أذكار بعد الصلاة",
      en: "After Salah",
      items: [
        {
          arabic: "أَسْتَغْفِرُ اللَّهَ",
          meaning: "I seek Allah's forgiveness — said three times immediately after finishing the prayer.",
          reference: "Narrated by Thawban — Sahih Muslim.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
          meaning: "O Allah, You are Peace, and from You comes peace. Blessed are You, Possessor of majesty and honor.",
          reference: "Narrated by Thawban — Sahih Muslim.",
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          meaning: "There is no god but Allah alone, without partner. His is all sovereignty and all praise, and He is capable of all things.",
          reference: "Narrated by Al-Mughirah ibn Shu'bah — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 1
        },
        {
          arabic: "سُبْحَانَ اللَّهِ",
          meaning: "Glory be to Allah — part of a set of thirty-three-times tasbih recited after each obligatory prayer.",
          reference: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 33
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ",
          meaning: "All praise belongs to Allah.",
          reference: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 33
        },
        {
          arabic: "اللَّهُ أَكْبَرُ",
          meaning: "Allah is greater than all else. Completing this tasbih of thirty-four brings the total to one hundred.",
          reference: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 34
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          meaning: "Ayat al-Kursi, closing the prayer under Allah's protection. Whoever recites it after every obligatory prayer, only death stands between him and entering Paradise.",
          reference: "Narrated by Abu Umamah — An-Nasa'i, Ibn Hibban.",
          repeat: 1
        }
      ]
    },
    waking: {
      ar: "أذكار الاستيقاظ",
      en: "Waking Up",
      items: [
        {
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
          meaning: "All praise to Allah, who gave us life after having taken it in sleep, and to Him is the return.",
          reference: "Narrated by Hudhayfah and Al-Bara ibn Azib — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ",
          meaning: "There is no god but Allah alone. His is all sovereignty and all praise — whoever says this on waking and then asks forgiveness or makes supplication is answered.",
          reference: "Narrated by Ubadah ibn as-Samit — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ عَلَىٰ كُلِّ حَالٍ",
          meaning: "All praise to Allah, in every circumstance.",
          reference: "A general phrase of gratitude recorded in Ibn Majah among the etiquettes of waking.",
          repeat: 1
        }
      ]
    },
    sleep: {
      ar: "أذكار النوم",
      en: "Before Sleep",
      items: [
        {
          arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          meaning: "In Your name, O Allah, I die and I live — said on lying down for the night.",
          reference: "Narrated by Hudhayfah — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          meaning: "Ayat al-Kursi, a protection kept through the night — a companion angel taught it as a shield from Satan until morning.",
          reference: "Narrated by Abu Hurairah — Sahih al-Bukhari.",
          repeat: 1
        },
        {
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
          meaning: "Surah al-Ikhlas, joined with al-Falaq and an-Nas — recited into the cupped hands and passed over the body before sleep.",
          reference: "Narrated by Aisha — Sahih al-Bukhari.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
          meaning: "O Allah, protect me from Your punishment on the day You resurrect Your servants.",
          reference: "Narrated by Al-Bara ibn Azib — Abu Dawud, At-Tirmidhi.",
          repeat: 3
        }
      ]
    },
    distress: {
      ar: "أذكار الكرب",
      en: "In Distress",
      items: [
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ",
          meaning: "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the mighty throne.",
          reference: "Narrated by Ibn Abbas — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 1
        },
        {
          arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
          meaning: "Allah is sufficient for us, and He is the best disposer of affairs — said by the believers when facing overwhelming odds.",
          reference: "Narrated by Ibn Abbas — Sahih al-Bukhari.",
          repeat: 7
        },
        {
          arabic: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
          meaning: "O Allah, it is Your mercy I hope for — do not leave me to myself even for the blink of an eye.",
          reference: "Narrated by Abu Bakrah — Abu Dawud, Musnad Ahmad.",
          repeat: 3
        },
        {
          arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          meaning: "There is no power and no strength except through Allah — described as a treasure from the treasures of Paradise.",
          reference: "Narrated by Abu Musa al-Ash'ari — Sahih al-Bukhari and Sahih Muslim.",
          repeat: 1
        }
      ]
    }
  };

  /* ============================================
     State
     ============================================ */
  const todayKey = () => `adkar-${new Date().toISOString().slice(0, 10)}`;

  function loadProgress() {
    try {
      const raw = localStorage.getItem(todayKey());
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(todayKey(), JSON.stringify(progress));
    } catch (e) {
      /* storage unavailable — progress just won't persist */
    }
  }

  let progress = loadProgress();
  let currentCategory = null;

  /* ============================================
     Elements
     ============================================ */
  const homeView = document.getElementById("view-home");
  const readerView = document.getElementById("view-reader");
  const readerAr = document.getElementById("reader-ar");
  const readerEn = document.getElementById("reader-en");
  const adkarList = document.getElementById("adkar-list");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");
  const backBtn = document.getElementById("back-btn");

  /* ============================================
     Rendering
     ============================================ */
  function openCategory(id) {
    const collection = COLLECTIONS[id];
    if (!collection) return;
    currentCategory = id;

    readerAr.textContent = collection.ar;
    readerEn.textContent = collection.en;

    adkarList.innerHTML = "";
    collection.items.forEach((item, index) => {
      adkarList.appendChild(buildCard(id, item, index));
    });

    updateProgressBar();

    homeView.hidden = true;
    readerView.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function closeCategory() {
    currentCategory = null;
    readerView.hidden = true;
    homeView.hidden = false;
  }

  function getCount(catId, index) {
    const key = `${catId}:${index}`;
    return progress[key] || 0;
  }

  function setCount(catId, index, value) {
    const key = `${catId}:${index}`;
    progress[key] = value;
    saveProgress(progress);
  }

  function buildCard(catId, item, index) {
    const card = document.createElement("article");
    card.className = "dhikr-card";

    const done = getCount(catId, index) >= item.repeat;
    if (done) card.classList.add("is-complete");

    const body = document.createElement("div");
    body.className = "dhikr-body";

    const arabic = document.createElement("p");
    arabic.className = "dhikr-arabic";
    arabic.textContent = item.arabic;
    body.appendChild(arabic);

    const infoRow = document.createElement("div");
    infoRow.className = "info-row";

    const panels = [
      { key: "meaning", label: "Meaning", text: item.meaning },
      { key: "reference", label: "Reference", text: item.reference }
    ];

    panels.forEach(({ key, label, text }) => {
      if (!text) return;

      const toggle = document.createElement("button");
      toggle.className = "info-toggle";
      toggle.type = "button";
      toggle.textContent = label;

      const panel = document.createElement("p");
      panel.className = `info-panel info-panel-${key}`;
      panel.textContent = text;

      toggle.addEventListener("click", () => {
        const open = panel.classList.toggle("is-open");
        toggle.classList.toggle("is-active", open);
      });

      infoRow.appendChild(toggle);
      body.appendChild(panel);
    });

    body.insertBefore(infoRow, body.children[1]);

    const counter = document.createElement("div");
    counter.className = "dhikr-counter";

    const ringBtn = document.createElement("button");
    ringBtn.className = "ring-btn";
    ringBtn.type = "button";
    ringBtn.setAttribute("aria-label", `Count this dhikr, repeat ${item.repeat} times`);

    const radius = 32;
    const circumference = 2 * Math.PI * radius;

    ringBtn.innerHTML = `
      <svg width="76" height="76" viewBox="0 0 76 76">
        <circle class="ring-track" cx="38" cy="38" r="${radius}"></circle>
        <circle class="ring-progress" cx="38" cy="38" r="${radius}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"></circle>
      </svg>
      <span class="ring-count">${Math.max(item.repeat - getCount(catId, index), 0)}</span>
    `;

    const ringProgress = ringBtn.querySelector(".ring-progress");
    const ringCount = ringBtn.querySelector(".ring-count");

    function render() {
      const count = getCount(catId, index);
      const remaining = Math.max(item.repeat - count, 0);
      const fraction = Math.min(count / item.repeat, 1);
      ringProgress.setAttribute(
        "stroke-dashoffset",
        String(circumference * (1 - fraction))
      );
      ringCount.textContent = remaining === 0 ? "✓" : remaining;
      card.classList.toggle("is-complete", remaining === 0);
    }

    ringBtn.addEventListener("click", () => {
      const count = getCount(catId, index);
      if (count >= item.repeat) {
        setCount(catId, index, 0);
      } else {
        setCount(catId, index, count + 1);
        ringBtn.classList.remove("pulse");
        void ringBtn.offsetWidth;
        ringBtn.classList.add("pulse");
      }
      render();
      updateProgressBar();
    });

    render();

    const label = document.createElement("span");
    label.className = "ring-label";
    label.textContent = item.repeat === 1 ? "once" : `× ${item.repeat}`;

    counter.appendChild(ringBtn);
    counter.appendChild(label);

    card.appendChild(body);
    card.appendChild(counter);

    return card;
  }

  function updateProgressBar() {
    if (!currentCategory) return;
    const collection = COLLECTIONS[currentCategory];
    const total = collection.items.length;
    const complete = collection.items.filter(
      (item, index) => getCount(currentCategory, index) >= item.repeat
    ).length;

    progressFill.style.width = `${(complete / total) * 100}%`;
    progressLabel.textContent = `${complete} of ${total} complete`;
  }

  /* ============================================
     Event wiring
     ============================================ */
  document.querySelectorAll("[data-category]").forEach((el) => {
    el.addEventListener("click", () => openCategory(el.dataset.category));
  });

  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => openCategory(el.dataset.nav));
  });

  backBtn.addEventListener("click", closeCategory);
})();
