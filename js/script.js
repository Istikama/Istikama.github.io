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
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
          translit: "Allahu la ilaha illa huwa, al-hayyu al-qayyum, la ta'khudhuhu sinatun wa la nawm...",
          translation: "Ayat al-Kursi — Allah, there is no god but Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him.",
          repeat: 1
        },
        {
          arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          translit: "Asbahna wa asbaha al-mulku lillah, wal-hamdu lillah, la ilaha illallah wahdahu la sharika lah.",
          translation: "We have entered the morning, and with it all sovereignty belongs to Allah. All praise is His alone; there is no god but Him.",
          repeat: 1
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
          translit: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduk...",
          translation: "The master supplication for forgiveness — O Allah, You are my Lord, there is no god but You. You created me and I am Your servant.",
          repeat: 1
        },
        {
          arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي",
          translit: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari.",
          translation: "O Allah, grant well-being to my body, my hearing, and my sight.",
          repeat: 3
        },
        {
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          translit: "Bismillahi alladhi la yadurru ma'a ismihi shay'un fil-ardi wa la fis-sama'.",
          translation: "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm.",
          repeat: 3
        },
        {
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          translit: "Subhan Allahi wa bihamdih.",
          translation: "Glory be to Allah, and praise be to Him.",
          repeat: 100
        }
      ]
    },
    evening: {
      ar: "أذكار المساء",
      en: "Evening",
      items: [
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
          translit: "Allahu la ilaha illa huwa, al-hayyu al-qayyum...",
          translation: "Ayat al-Kursi — read again as evening falls, a covering of remembrance before the night.",
          repeat: 1
        },
        {
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          translit: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illallah.",
          translation: "We have entered the evening, and with it all sovereignty belongs to Allah. All praise is His alone.",
          repeat: 1
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
          translit: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduk...",
          translation: "The evening form of the master supplication for forgiveness.",
          repeat: 1
        },
        {
          arabic: "أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ",
          translit: "Amsaytu ush-hiduka wa ush-hidu hamalata 'arshika annaka anta Allah...",
          translation: "I have entered the evening bearing witness to You, and to the bearers of Your throne, that You are Allah, alone without partner.",
          repeat: 4
        },
        {
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
          translit: "Bismillahi alladhi la yadurru ma'a ismihi shay'.",
          translation: "In the name of Allah, with whose name nothing can cause harm.",
          repeat: 3
        },
        {
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          translit: "Subhan Allahi wa bihamdih.",
          translation: "Glory be to Allah, and praise be to Him.",
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
          translit: "Astaghfirullah.",
          translation: "I seek Allah's forgiveness.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
          translit: "Allahumma anta as-salamu wa minka as-salam, tabarakta ya dhal-jalali wal-ikram.",
          translation: "O Allah, You are Peace, and from You comes peace. Blessed are You, Possessor of majesty and honor.",
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd...",
          translation: "There is no god but Allah alone, without partner. His is all sovereignty and all praise, and He is capable of all things.",
          repeat: 1
        },
        {
          arabic: "سُبْحَانَ اللَّهِ",
          translit: "Subhan Allah.",
          translation: "Glory be to Allah.",
          repeat: 33
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ",
          translit: "Alhamdulillah.",
          translation: "All praise belongs to Allah.",
          repeat: 33
        },
        {
          arabic: "اللَّهُ أَكْبَرُ",
          translit: "Allahu akbar.",
          translation: "Allah is greater than all else.",
          repeat: 34
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          translit: "Allahu la ilaha illa huwa al-hayyul-qayyum...",
          translation: "Ayat al-Kursi, closing the prayer under Allah's protection.",
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
          translit: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
          translation: "All praise to Allah, who gave us life after having taken it in sleep, and to Him is the return.",
          repeat: 1
        },
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ",
          translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd.",
          translation: "There is no god but Allah alone. His is all sovereignty and all praise.",
          repeat: 1
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ عَلَىٰ كُلِّ حَالٍ",
          translit: "Alhamdulillahi 'ala kulli hal.",
          translation: "All praise to Allah, in every circumstance.",
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
          translit: "Bismika Allahumma amutu wa ahya.",
          translation: "In Your name, O Allah, I die and I live.",
          repeat: 1
        },
        {
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          translit: "Allahu la ilaha illa huwa al-hayyul-qayyum...",
          translation: "Ayat al-Kursi, a protection kept through the night.",
          repeat: 1
        },
        {
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
          translit: "Qul huwa Allahu ahad, Allahu as-samad, lam yalid wa lam yulad...",
          translation: "Surah al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He begets not, nor is He begotten.",
          repeat: 3
        },
        {
          arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
          translit: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak.",
          translation: "O Allah, protect me from Your punishment on the day You resurrect Your servants.",
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
          translit: "La ilaha illallahul-'azimul-halim, la ilaha illallahu rabbul-'arshil-'azim.",
          translation: "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the mighty throne.",
          repeat: 1
        },
        {
          arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
          translit: "Hasbunallahu wa ni'mal-wakil.",
          translation: "Allah is sufficient for us, and He is the best disposer of affairs.",
          repeat: 7
        },
        {
          arabic: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ",
          translit: "Allahumma rahmataka arju fala takilni ila nafsi tarfata 'ayn.",
          translation: "O Allah, it is Your mercy I hope for — do not leave me to myself even for the blink of an eye.",
          repeat: 3
        },
        {
          arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          translit: "La hawla wa la quwwata illa billah.",
          translation: "There is no power and no strength except through Allah.",
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

    const toggle = document.createElement("button");
    toggle.className = "translit-toggle";
    toggle.type = "button";
    toggle.textContent = "Show transliteration";
    body.appendChild(toggle);

    const translit = document.createElement("p");
    translit.className = "dhikr-translit";
    translit.textContent = item.translit;
    body.appendChild(translit);

    toggle.addEventListener("click", () => {
      const open = translit.classList.toggle("is-open");
      toggle.textContent = open ? "Hide transliteration" : "Show transliteration";
    });

    const translation = document.createElement("p");
    translation.className = "dhikr-translation";
    translation.textContent = item.translation;
    body.appendChild(translation);

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
