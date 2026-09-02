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
          meaning: { en: "Ayat al-Kursi (Al-Baqarah 2:255) — Allah, there is no god but Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him; His knowledge encompasses the heavens and the earth. Whoever recites it on entering the morning is guarded from the jinn until evening, and whoever recites it entering the evening is guarded until morning.", ar: "آية الكرسي (البقرة 255) — الله الحي القيوم الذي لا تأخذه سنة ولا نوم. من قرأها حين يصبح أُجير من الجن حتى يمسي، ومن قرأها حين يمسي أُجير حتى يصبح." },
          reference: { en: "Al-Baqarah 2:255. Virtue narrated by An-Nasa'i and Ibn as-Sunni, graded sahih by Al-Albani.", ar: "سورة البقرة 255. ثبتت فضيلتها عند النسائي وابن السني، وصححها الألباني." },
          repeat: 1
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
          meaning: { en: "Surah Al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent. Reciting the three short surahs (Ikhlas, Falaq, Nas) three times each, morning and evening, is enough protection against every harm.", ar: "سورة الإخلاص — قل هو الله أحد، الله الصمد، لم يلد ولم يولد. من قرأ السور الثلاث (الإخلاص والفلق والناس) ثلاثًا صباحًا ومساءً كفته من كل شيء." },
          reference: { en: "Surah 112. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.", ar: "السورة 112. رواه عبدالله بن خبيب — أبو داود والترمذي والنسائي." },
          repeat: 3
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
          meaning: { en: "Surah Al-Falaq — Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.", ar: "سورة الفلق — قل أعوذ برب الفلق، من شر ما خلق، ومن شر حاسد إذا حسد." },
          reference: { en: "Surah 113. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.", ar: "السورة 113. رواه عبدالله بن خبيب — أبو داود والترمذي والنسائي." },
          repeat: 3
        },
        {
          arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
          meaning: { en: "Surah An-Nas — Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer who whispers in the hearts of people, from among jinn and mankind.", ar: "سورة الناس — قل أعوذ برب الناس، من شر الوسواس الخناس الذي يوسوس في صدور الناس." },
          reference: { en: "Surah 114. Narrated by Abdullah ibn Khubayb — Abu Dawud, At-Tirmidhi, An-Nasa'i.", ar: "السورة 114. رواه عبدالله بن خبيب — أبو داود والترمذي والنسائي." },
          repeat: 3
        },
        {
          arabic: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر",
          meaning: { en: "We have entered the morning, and with it all sovereignty belongs to Allah, and all praise. There is no god but Him alone, without partner — a prayer for the good of the day and refuge from its harm, from laziness and the misery of old age, and from punishment in the Fire and the grave.", ar: "دعاء بأن الملك كله لله وحده لا شريك له، وسؤال خير هذا اليوم والعوذ من شره، ومن الكسل وسوء الكبر وعذاب النار والقبر." },
          reference: { en: "Narrated by Abdullah ibn Mas'ud — Sahih Muslim.", ar: "رواه عبدالله بن مسعود — صحيح مسلم." },
          repeat: 1
        },
        {
          arabic: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ",
          meaning: { en: "Sayyid al-Istighfar, the master supplication for forgiveness — O Allah, You are my Lord, there is no god but You. You created me and I am Your servant. Whoever says it during the day with certainty and dies that day enters Paradise, and likewise at night.", ar: "سيد الاستغفار — اعتراف بالربوبية والعبودية وطلب المغفرة. من قالها موقنًا بها ومات من يومه دخل الجنة، وكذلك مساءً." },
          reference: { en: "Narrated by Shaddad ibn Aws — Sahih al-Bukhari.", ar: "رواه شداد بن أوس — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً",
          meaning: { en: "I am pleased with Allah as Lord, with Islam as religion, and with Muhammad ﷺ as Prophet. Whoever says this morning and evening, Allah has made it a right upon Himself to please him on the Day of Judgment.", ar: "الرضا بالله ربًا وبالإسلام دينًا وبمحمد ﷺ نبيًا. من قالها صباحًا ومساءً كان حقًا على الله أن يرضيه يوم القيامة." },
          reference: { en: "Narrated by Thawban — Abu Dawud, At-Tirmidhi, An-Nasa'i, Ibn Majah.", ar: "رواه ثوبان — أبو داود والترمذي والنسائي وابن ماجه." },
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك",
          meaning: { en: "O Allah, I have entered the morning calling You to witness, and the bearers of Your throne, Your angels and all creation, that You are Allah — there is no god but You, alone without partner — and that Muhammad is Your servant and messenger. Whoever says it, Allah frees a portion of him from the Fire.", ar: "إشهاد الله وحملة عرشه وملائكته على وحدانيته وأن محمدًا عبده ورسوله. من قالها أعتق الله ربعه من النار." },
          reference: { en: "Narrated in Abu Dawud, graded hasan by Al-Albani.", ar: "رواه في أبي داود، وحسّنه الألباني." },
          repeat: 4
        },
        {
          arabic: "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر",
          meaning: { en: "O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner — so to You belongs all praise and all thanks. Whoever says this in the morning has fulfilled his gratitude for that day.", ar: "كل نعمة وصلت العبد أو أحدًا من الخلق فهي من الله وحده، فله الحمد والشكر. من قالها صباحًا أدى شكر يومه." },
          reference: { en: "Narrated by Abdullah ibn Ghannam — Abu Dawud, Ibn as-Sunni.", ar: "رواه عبدالله بن غنّام — أبو داود وابن السني." },
          repeat: 1
        },
        {
          arabic: "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم",
          meaning: { en: "Allah is sufficient for me, there is no god but Him, upon Him I rely, and He is Lord of the mighty throne. Said seven times, Allah suffices him in whatever concerns him from this world or the next.", ar: "الاكتفاء بالله والتوكل عليه رب العرش العظيم. من قالها سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة." },
          reference: { en: "Narrated by Abu al-Darda — Abu Dawud, Ibn as-Sunni.", ar: "رواه أبو الدرداء — أبو داود وابن السني." },
          repeat: 7
        },
        {
          arabic: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم",
          meaning: { en: "In the name of Allah, with whose name nothing on earth or in the heaven can cause harm, and He is the All-Hearing, All-Knowing. Said three times, nothing will harm the one who recites it that day.", ar: "التحصن باسم الله الذي لا يضر معه شيء في الأرض ولا في السماء. من قالها ثلاثًا لم يضره شيء." },
          reference: { en: "Narrated by Uthman ibn Affan — Abu Dawud, At-Tirmidhi, Ibn Majah.", ar: "رواه عثمان بن عفان — أبو داود والترمذي وابن ماجه." },
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور",
          meaning: { en: "O Allah, by You we enter the morning and by You we enter the evening; by You we live and by You we die, and to You is the resurrection.", ar: "بالله وحده تكون الحياة والموت والبعث، صباحًا ومساءً." },
          reference: { en: "Narrated by Abu Hurairah — At-Tirmidhi.", ar: "رواه أبو هريرة — الترمذي." },
          repeat: 1
        },
        {
          arabic: "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ",
          meaning: { en: "We have entered the morning upon the natural disposition of Islam, the word of sincerity, the religion of our Prophet Muhammad ﷺ, and the way of our father Ibrahim — a man of pure faith, and he was not among those who associate partners with Allah.", ar: "الثبات على فطرة الإسلام وكلمة الإخلاص ودين النبي ﷺ وملة إبراهيم الحنيف، وعدم الشرك بالله." },
          reference: { en: "Narrated by Anas ibn Malik — Musnad Ahmad.", ar: "رواه أنس بن مالك — مسند أحمد." },
          repeat: 1
        },
        {
          arabic: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه",
          meaning: { en: "Glory and praise to Allah, by the count of His creation, by His pleasure, by the weight of His throne, and by the extent of His words.", ar: "تسبيح بعدد الخلق ورضا النفس وزنة العرش ومداد الكلمات." },
          reference: { en: "Narrated by Juwayriyyah bint al-Harith — Sahih Muslim.", ar: "رواه جويرية بنت الحارث — صحيح مسلم." },
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ",
          meaning: { en: "O Allah, grant well-being to my body, my hearing, and my sight — there is no god but You.", ar: "سؤال العافية في البدن والسمع والبصر." },
          reference: { en: "Narrated by Abu Bakrah — Abu Dawud, Musnad Ahmad.", ar: "رواه أبو بكرة — أبو داود ومسند أحمد." },
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ",
          meaning: { en: "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave — there is no god but You.", ar: "العوذ بالله من الكفر والفقر وعذاب القبر." },
          reference: { en: "Narrated by Abu Bakrah — An-Nasa'i, Al-Hakim.", ar: "رواه أبو بكرة — النسائي والحاكم." },
          repeat: 3
        },
        {
          arabic: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي",
          meaning: { en: "O Allah, I ask You for pardon and well-being in this life and the next, in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and calm my fears, and guard me from before me, behind me, my right, my left, and above me, and I seek refuge in Your greatness from being seized from beneath me.", ar: "سؤال العفو والعافية في الدين والدنيا والأهل والمال، وستر العورات وتأمين الروعات والحفظ من كل جهة." },
          reference: { en: "Narrated by Ibn Umar — Ibn Majah, Musnad Ahmad.", ar: "رواه ابن عمر — ابن ماجه ومسند أحمد." },
          repeat: 1
        },
        {
          arabic: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ",
          meaning: { en: "O Ever-Living, O Sustainer of all, by Your mercy I seek help — set right all of my affairs, and do not leave me to myself even for the blink of an eye.", ar: "الاستغاثة برحمة الله الحي القيوم في إصلاح كل الشأن، وعدم التوكل إلى النفس طرفة عين." },
          reference: { en: "Narrated by Anas ibn Malik — An-Nasa'i in 'Amal al-Yawm wal-Laylah, Al-Hakim.", ar: "رواه أنس بن مالك — النسائي في عمل اليوم والليلة، والحاكم." },
          repeat: 3
        },
        {
          arabic: "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه",
          meaning: { en: "We have entered the morning, and with it all sovereignty belongs to Allah, Lord of all the worlds. O Allah, I ask You for the good of this day — its triumph, its help, its light, its blessing and its guidance — and refuge in You from the evil within it and what follows it.", ar: "سؤال خير هذا اليوم وفتحه ونصره ونوره وبركته وهداه، والعوذ من شره وشر ما بعده." },
          reference: { en: "Narrated in Ibn as-Sunni, from variant chains.", ar: "رواه بأسانيد متعددة — ابن السني." },
          repeat: 1
        },
        {
          arabic: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم",
          meaning: { en: "O Allah, Knower of the unseen and the seen, Creator of the heavens and earth, Lord and Sovereign of all things, I bear witness there is no god but You. I seek refuge in You from the evil of my own soul, from the evil of Satan and his incitement, and from bringing evil upon myself or leading it to another Muslim.", ar: "الشهادة بوحدانية الله عالم الغيب والشهادة، والعوذ من شر النفس والشيطان وشركه، ومن جر السوء إلى مسلم." },
          reference: { en: "Narrated by Abu Bakr as-Siddiq — At-Tirmidhi, Musnad Ahmad.", ar: "رواه أبو بكر الصديق — الترمذي ومسند أحمد." },
          repeat: 1
        },
        {
          arabic: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق",
          meaning: { en: "I seek refuge in the perfect words of Allah from the evil of what He has created.", ar: "الاستعاذة بكلمات الله الكاملة من شر كل ما خلق." },
          reference: { en: "Narrated by Khawlah bint Hakim — Sahih Muslim.", ar: "رواه خولة بنت حكيم — صحيح مسلم." },
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
          meaning: { en: "O Allah, send prayers, peace and blessings upon our Prophet Muhammad. Whoever sends blessings upon him ten times in the morning and evening will be reached by his intercession on the Day of Judgment.", ar: "الصلاة على النبي ﷺ. من صلى عليه عشرًا صباحًا ومساءً أدركته شفاعته يوم القيامة." },
          reference: { en: "Narrated by Abu al-Darda — At-Tabarani, graded hasan by Al-Albani.", ar: "رواه أبو الدرداء — الطبراني، وحسّنه الألباني." },
          repeat: 10
        },
        {
          arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
          meaning: { en: "O Allah, we seek refuge in You from knowingly associating any partner with You, and we seek Your forgiveness for what we do not know.", ar: "العوذ من الشرك بالله فيما نعلم، واستغفاره فيما لا نعلم." },
          reference: { en: "Narrated in Musnad Ahmad and Al-Bazzar.", ar: "رواه في مسند أحمد والبزار." },
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ",
          meaning: { en: "O Allah, I seek refuge in You from anxiety and grief, from incapacity and laziness, from cowardice and miserliness, from being overcome by debt and overpowered by others.", ar: "الاستعاذة من الهم والحزن والعجز والكسل والجبن والبخل وغلبة الدين وقهر الرجال." },
          reference: { en: "Narrated by Anas ibn Malik — Sahih al-Bukhari.", ar: "رواه أنس بن مالك — صحيح البخاري." },
          repeat: 3
        },
        {
          arabic: "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ",
          meaning: { en: "I seek the forgiveness of Allah the Mighty, there is no god but Him, the Ever-Living, the Sustainer, and I turn to Him in repentance. Whoever says this, Allah forgives him even if he had fled from battle.", ar: "الاستغفار والتوبة إلى الله الحي القيوم. من قالها غفر الله له ولو كان فرّ من الزحف." },
          reference: { en: "Narrated by Abu Hurairah — Abu Dawud, At-Tirmidhi.", ar: "رواه أبو هريرة — أبو داود والترمذي." },
          repeat: 3
        },
        {
          arabic: "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ",
          meaning: { en: "O my Lord, to You belongs all praise as befits the majesty of Your face and the greatness of Your authority.", ar: "حمد الله كما يليق بجلال وجهه وعظيم سلطانه." },
          reference: { en: "Narrated by Abu Sa'id al-Khudri and Abu Hurairah — Ibn Majah, Musnad Ahmad.", ar: "رواه أبو سعيد الخدري وأبو هريرة — ابن ماجه ومسند أحمد." },
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
          meaning: { en: "O Allah, I ask You for beneficial knowledge, good provision, and deeds that are accepted.", ar: "سؤال العلم النافع والرزق الطيب والعمل المتقبل، ويُقال بعد صلاة الفجر." },
          reference: { en: "Narrated by Umm Salamah — Ibn Majah, Musnad Ahmad; recited after the Fajr prayer.", ar: "رواه أم سلمة — ابن ماجه ومسند أحمد." },
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
          meaning: { en: "Ayat al-Kursi, read again as evening falls — a covering of remembrance before the night, guarding until morning.", ar: "آية الكرسي، تُقرأ مساءً كحصن من الذكر قبل الليل، تحفظ العبد حتى الصباح." },
          reference: { en: "Al-Baqarah 2:255. Virtue narrated by An-Nasa'i and Ibn as-Sunni, graded sahih by Al-Albani.", ar: "سورة البقرة 255. ثبتت فضيلتها عند النسائي وابن السني، وصححها الألباني." },
          repeat: 1
        },
        {
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          meaning: { en: "We have entered the evening, and with it all sovereignty belongs to Allah. All praise is His alone; there is no god but Him.", ar: "دعاء المساء المقابل لدعاء الصباح — الملك كله لله وحده والحمد له، لا إله إلا هو." },
          reference: { en: "Evening form of the narration by Abdullah ibn Mas'ud — Sahih Muslim.", ar: "الصيغة المسائية لحديث عبدالله بن مسعود — صحيح مسلم." },
          repeat: 1
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
          meaning: { en: "The evening form of Sayyid al-Istighfar, the master supplication for forgiveness.", ar: "الصيغة المسائية لسيد الاستغفار." },
          reference: { en: "Narrated by Shaddad ibn Aws — Sahih al-Bukhari.", ar: "رواه شداد بن أوس — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ",
          meaning: { en: "I have entered the evening bearing witness to You, and to the bearers of Your throne, that You are Allah, alone without partner.", ar: "إشهاد الله وحملة عرشه على وحدانيته مساءً." },
          reference: { en: "Narrated in Abu Dawud, graded hasan by Al-Albani.", ar: "رواه في أبي داود، وحسّنه الألباني." },
          repeat: 4
        },
        {
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
          meaning: { en: "In the name of Allah, with whose name nothing on earth or in the heaven can cause harm.", ar: "التحصن باسم الله الذي لا يضر معه شيء في الأرض ولا في السماء." },
          reference: { en: "Narrated by Uthman ibn Affan — Abu Dawud, At-Tirmidhi, Ibn Majah.", ar: "رواه عثمان بن عفان — أبو داود والترمذي وابن ماجه." },
          repeat: 3
        },
        {
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          meaning: { en: "Glory be to Allah, and praise be to Him. Whoever says it a hundred times in a day has his sins wiped away, even if like the foam of the sea.", ar: "من قالها مئة مرة في يوم حُطت خطاياه ولو كانت مثل زبد البحر." },
          reference: { en: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه أبو هريرة — صحيح البخاري ومسلم." },
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
          meaning: { en: "I seek Allah's forgiveness — said three times immediately after finishing the prayer.", ar: "الاستغفار عقب الصلاة مباشرة، يُقال ثلاثًا." },
          reference: { en: "Narrated by Thawban — Sahih Muslim.", ar: "رواه ثوبان — صحيح مسلم." },
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
          meaning: { en: "O Allah, You are Peace, and from You comes peace. Blessed are You, Possessor of majesty and honor.", ar: "الله هو السلام ومنه السلام، تبارك يا ذا الجلال والإكرام." },
          reference: { en: "Narrated by Thawban — Sahih Muslim.", ar: "رواه ثوبان — صحيح مسلم." },
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          meaning: { en: "There is no god but Allah alone, without partner. His is all sovereignty and all praise, and He is capable of all things.", ar: "التوحيد الخالص — له الملك وله الحمد وهو على كل شيء قدير." },
          reference: { en: "Narrated by Al-Mughirah ibn Shu'bah — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه المغيرة بن شعبة — صحيح البخاري ومسلم." },
          repeat: 1
        },
        {
          arabic: "سُبْحَانَ اللَّهِ",
          meaning: { en: "Glory be to Allah — part of a set of thirty-three-times tasbih recited after each obligatory prayer.", ar: "تسبيح يُقال بعد كل صلاة مكتوبة، ضمن تسبيحات الثلاث والثلاثين." },
          reference: { en: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه أبو هريرة — صحيح البخاري ومسلم." },
          repeat: 33
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ",
          meaning: { en: "All praise belongs to Allah.", ar: "تحميد يُقال بعد كل صلاة مكتوبة." },
          reference: { en: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه أبو هريرة — صحيح البخاري ومسلم." },
          repeat: 33
        },
        {
          arabic: "اللَّهُ أَكْبَرُ",
          meaning: { en: "Allah is greater than all else. Completing this tasbih of thirty-four brings the total to one hundred.", ar: "تكبير يُتم به المئة بعد التسبيح والتحميد." },
          reference: { en: "Narrated by Abu Hurairah — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه أبو هريرة — صحيح البخاري ومسلم." },
          repeat: 34
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          meaning: { en: "Ayat al-Kursi, closing the prayer under Allah's protection. Whoever recites it after every obligatory prayer, only death stands between him and entering Paradise.", ar: "من قرأ آية الكرسي دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا الموت." },
          reference: { en: "Narrated by Abu Umamah — An-Nasa'i, Ibn Hibban.", ar: "رواه أبو أمامة — النسائي وابن حبان." },
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
          meaning: { en: "All praise to Allah, who gave us life after having taken it in sleep, and to Him is the return.", ar: "حمد الله الذي أحيا العبد بعد نومه، وإليه المصير." },
          reference: { en: "Narrated by Hudhayfah and Al-Bara ibn Azib — Sahih al-Bukhari.", ar: "رواه حذيفة والبراء بن عازب — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ",
          meaning: { en: "There is no god but Allah alone. His is all sovereignty and all praise — whoever says this on waking and then asks forgiveness or makes supplication is answered.", ar: "من قالها عند الاستيقاظ ثم دعا أو استغفر أُجيب." },
          reference: { en: "Narrated by Ubadah ibn as-Samit — Sahih al-Bukhari.", ar: "رواه عبادة بن الصامت — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ عَلَىٰ كُلِّ حَالٍ",
          meaning: { en: "All praise to Allah, in every circumstance.", ar: "حمد الله على كل حال عند الاستيقاظ." },
          reference: { en: "A general phrase of gratitude recorded in Ibn Majah among the etiquettes of waking.", ar: "ورد في آداب الاستيقاظ عند ابن ماجه." },
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
          meaning: { en: "In Your name, O Allah, I die and I live — said on lying down for the night.", ar: "يُقال عند الاضطجاع للنوم، توكلًا على الله في الموت والحياة." },
          reference: { en: "Narrated by Hudhayfah — Sahih al-Bukhari.", ar: "رواه حذيفة — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          meaning: { en: "Ayat al-Kursi, a protection kept through the night — a companion angel taught it as a shield from Satan until morning.", ar: "حصن من الشيطان حتى الصباح، كما علّم الشيطانُ أبا هريرة." },
          reference: { en: "Narrated by Abu Hurairah — Sahih al-Bukhari.", ar: "رواه أبو هريرة — صحيح البخاري." },
          repeat: 1
        },
        {
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
          meaning: { en: "Surah al-Ikhlas, joined with al-Falaq and an-Nas — recited into the cupped hands and passed over the body before sleep.", ar: "تُقرأ المعوذات الثلاث وتُنفث في الكفين وتُمسح بها الجسد قبل النوم." },
          reference: { en: "Narrated by Aisha — Sahih al-Bukhari.", ar: "رواه عائشة — صحيح البخاري." },
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
          meaning: { en: "O Allah, protect me from Your punishment on the day You resurrect Your servants.", ar: "دعاء بالوقاية من عذاب يوم البعث." },
          reference: { en: "Narrated by Al-Bara ibn Azib — Abu Dawud, At-Tirmidhi.", ar: "رواه البراء بن عازب — أبو داود والترمذي." },
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
          meaning: { en: "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the mighty throne.", ar: "دعاء الكرب — توحيد يُلجأ إليه عند الشدة." },
          reference: { en: "Narrated by Ibn Abbas — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه ابن عباس — صحيح البخاري ومسلم." },
          repeat: 1
        },
        {
          arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
          meaning: { en: "Allah is sufficient for us, and He is the best disposer of affairs — said by the believers when facing overwhelming odds.", ar: "كلمة قالها المؤمنون عند اشتداد الخطب، تُقال سبعًا." },
          reference: { en: "Narrated by Ibn Abbas — Sahih al-Bukhari.", ar: "رواه ابن عباس — صحيح البخاري." },
          repeat: 7
        },
        {
          arabic: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
          meaning: { en: "O Allah, it is Your mercy I hope for — do not leave me to myself even for the blink of an eye.", ar: "طلب الرحمة وعدم التخلي عن العبد طرفة عين." },
          reference: { en: "Narrated by Abu Bakrah — Abu Dawud, Musnad Ahmad.", ar: "رواه أبو بكرة — أبو داود ومسند أحمد." },
          repeat: 3
        },
        {
          arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          meaning: { en: "There is no power and no strength except through Allah — described as a treasure from the treasures of Paradise.", ar: "كنز من كنوز الجنة." },
          reference: { en: "Narrated by Abu Musa al-Ash'ari — Sahih al-Bukhari and Sahih Muslim.", ar: "رواه أبو موسى الأشعري — صحيح البخاري ومسلم." },
          repeat: 1
        }
      ]
    }
  };

  /* ============================================
     UI strings — English / Arabic
     ============================================ */
  const UI = {
    en: {
      heroEyebrow: "A quiet moment, morning and night",
      heroTagline: "Remembrance carries the heart through the day.",
      heroDesc: "Six collections of adkar drawn from the Sunnah — read at your pace, and let each dhikr count itself as you go.",
      footer: "A small companion for daily remembrance, in the spirit of Hisn al-Muslim.",
      back: "Collections",
      meaningLabel: "Meaning",
      referenceLabel: "Reference",
      once: "once",
      remembrances: "remembrances",
      complete: (c, t) => `${c} of ${t} complete`,
      navMorning: "Morning",
      navEvening: "Evening",
      navAfterSalah: "After Salah",
      toggleTo: "العربية"
    },
    ar: {
      heroEyebrow: "لحظة سكينة، صباحًا ومساءً",
      heroTagline: "الذكر يحمل القلب طوال اليوم.",
      heroDesc: "ست مجموعات من الأذكار الواردة عن السنة — اقرأها براحتك، ودع كل ذكر يُحصي نفسه.",
      footer: "رفيق صغير للذكر اليومي، على نهج حصن المسلم.",
      back: "المجموعات",
      meaningLabel: "المعنى",
      referenceLabel: "المصدر",
      once: "مرة واحدة",
      remembrances: "أذكار",
      complete: (c, t) => `${c} من ${t} مكتمل`,
      navMorning: "الصباح",
      navEvening: "المساء",
      navAfterSalah: "بعد الصلاة",
      toggleTo: "English"
    }
  };

  let uiLang = "en";

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
  const backBtnLabel = document.getElementById("back-btn-label");
  const langToggle = document.getElementById("lang-toggle");
  const heroEyebrow = document.getElementById("hero-eyebrow");
  const heroTagline = document.getElementById("hero-tagline");
  const heroDesc = document.getElementById("hero-desc");
  const footerText = document.getElementById("footer-text");
  const navMorning = document.getElementById("nav-morning");
  const navEvening = document.getElementById("nav-evening");
  const navAfterSalah = document.getElementById("nav-after-salah");
  const tileMetas = document.querySelectorAll(".tile-meta");

  /* ============================================
     Rendering
     ============================================ */
  function openCategory(id, isRefresh) {
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
    if (!isRefresh) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
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
      { key: "meaning", labelKey: "meaningLabel", data: item.meaning },
      { key: "reference", labelKey: "referenceLabel", data: item.reference }
    ];

    panels.forEach(({ key, labelKey, data }) => {
      if (!data) return;

      const toggle = document.createElement("button");
      toggle.className = "info-toggle";
      toggle.type = "button";
      toggle.textContent = UI[uiLang][labelKey];
      toggle.dataset.labelKey = labelKey;

      const panel = document.createElement("p");
      panel.className = `info-panel info-panel-${key}`;
      panel.textContent = data[uiLang];
      panel.dir = uiLang === "ar" ? "rtl" : "ltr";
      panel.dataset.field = key;

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
    label.textContent = item.repeat === 1 ? UI[uiLang].once : `× ${item.repeat}`;
    label.dataset.ringLabel = "true";

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
    progressLabel.textContent = UI[uiLang].complete(complete, total);
  }

  /* ============================================
     Language switching
     ============================================ */
  function applyLanguage() {
    const t = UI[uiLang];
    const dir = uiLang === "ar" ? "rtl" : "ltr";

    heroEyebrow.textContent = t.heroEyebrow;
    heroEyebrow.dir = dir;
    heroTagline.textContent = t.heroTagline;
    heroTagline.dir = dir;
    heroDesc.textContent = t.heroDesc;
    heroDesc.dir = dir;
    footerText.textContent = t.footer;
    footerText.dir = dir;
    backBtnLabel.textContent = t.back;
    navMorning.textContent = t.navMorning;
    navEvening.textContent = t.navEvening;
    navAfterSalah.textContent = t.navAfterSalah;
    langToggle.textContent = t.toggleTo;

    tileMetas.forEach((el) => {
      const count = el.dataset.count;
      el.textContent = `${count} ${t.remembrances}`;
    });

    // Refresh any open reader view in place
    if (currentCategory) {
      openCategory(currentCategory, true);
    }
  }

  langToggle.addEventListener("click", () => {
    uiLang = uiLang === "en" ? "ar" : "en";
    applyLanguage();
  });

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

  applyLanguage();
})();
