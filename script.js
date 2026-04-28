/* =============================================
   sandstudio.lt — interactions + i18n
   ============================================= */

(function () {
  'use strict';

  /* ---------------- Dynamic gallery loader ---------------- */
  (function loadGallery() {
    var grid = document.getElementById('gallery-grid');
    if (!grid) return;
    var loaded = [], pending = 100;

    function addItem(n) {
      var btn = document.createElement('button');
      btn.className = 'gallery__item';
      btn.setAttribute('data-src', 'images/' + n + '.jpg');
      var img = document.createElement('img');
      img.src = 'images/' + n + '.jpg';
      img.alt = 'Sand Studio nail work — ' + n;
      img.loading = 'lazy';
      btn.appendChild(img);
      grid.appendChild(btn);
    }

    function finish() {
      if (--pending === 0) {
        loaded.sort(function(a, b) { return a - b; });
        loaded.forEach(addItem);
        if (typeof initLightbox === 'function') initLightbox();
      }
    }

    for (var i = 1; i <= 100; i++) {
      (function(n) {
        var img = new Image();
        img.onload  = function() { loaded.push(n); finish(); };
        img.onerror = finish;
        img.src = 'images/' + n + '.jpg';
      })(i);
    }
  })();

  /* ---------------- i18n dictionary ---------------- */
  var translations = {
    en: {
      __title: "Sand Studio — Nail Care in Vilnius",
      __meta_desc: "Sand Studio by Evelina — bespoke nail care, manicures, pedicures and nail art in Vilnius. Book your appointment today.",

      nav_services: "Services",
      nav_gallery:  "Gallery",
      nav_about:    "About",
      nav_contact:  "Contact",
      nav_location: "Location",
      nav_book:     "Book\u00a0Now",

      hero_eyebrow:     "Bespoke Nail Care",
      hero_title_html:  "Polished. Pampered.<br/><em>Perfectly you.</em>",
      hero_lede:        "A warm, intimate studio where every manicure is made to your hands — not the other way around.",
      hero_cta_primary: "Book an appointment",
      hero_cta_ghost:   "See the work",

      services_eyebrow: "The Menu",
      services_title:   "Services & Pricing",
      services_lede:    "A curated list of what I offer. Prices are a starting point — final pricing depends on length, design, and extras.",

      svc1_title: "Classic Manicure",
      svc1_desc:  "Shape, cuticle care, a luxurious hand massage, and a flawless polish finish.",
      svc1_price: "from €35",
      svc2_title: "Gel Manicure",
      svc2_desc:  "Long-lasting gel colour, chip-free for up to three weeks with a glossy finish.",
      svc2_price: "from €50",
      svc3_title: "Builder Gel / Extensions",
      svc3_desc:  "Strengthening overlay or tip extensions for length, shape and resilience.",
      svc3_price: "from €75",
      svc4_title: "Spa Pedicure",
      svc4_desc:  "Soak, exfoliation, callus care, massage, and polish — a full reset for tired feet.",
      svc4_price: "from €55",
      svc5_title: "Nail Art",
      svc5_desc:  "Hand-painted detail, French tips, chrome, or minimalist accents. Bring the inspiration.",
      svc5_price: "from €10 / nail",
      svc6_title: "Soak-off & Repair",
      svc6_desc:  "Gentle removal of existing gel or acrylic with a nourishing treatment for healthy nails.",
      svc6_price: "from €20",

      gallery_eyebrow:   "Gallery",
      gallery_title:     "Recent Work",
      gallery_lede_html: "A glimpse of my latest work.",

      about_eyebrow:    "About Me",
      about_title_html: "Hi, I'm <em>Evelina</em>",
      about_p1_html:    "I'm a certified nail technician with over <strong>[X]</strong> years of experience in manicures, pedicures, gel, and nail art. My studio is a small, quiet space where you can exhale — no rushing, no assembly line, just beautiful, healthy nails done right.",
      about_p2:         "I believe nail care is self-care. Whether you want a classic, elegant look or something bold and bespoke, I'll work with you to find what suits your hands and your life.",
      about_badge1:     "✦ Licensed & insured",
      about_badge2:     "✦ Sanitary, single-use tools",
      about_badge3:     "✦ Cruelty-free products",
      about_badge4:     "✦ By appointment only",

      contact_eyebrow:      "Say Hello",
      contact_title:        "Contact",
      contact_lede:         "The fastest way to reach me is Instagram DM. For bookings, please use the calendar below.",
      contact_insta_label:  "Instagram",
      contact_email_label:  "Email",
      contact_phone_label:  "Phone",

      book_eyebrow:      "Booking",
      book_title:        "Reserve Your Time",
      book_lede:         "Pick a service and a time that works for you. Confirmation arrives by email.",
      book_ph_title:     "Booking widget goes here",
      book_ph_desc_html: 'Paste your Booksy (or Calendly / Square) embed code into <code>index.html</code> where you see <code>id="booksy-embed"</code>.',
      book_ph_link:      "Open Booksy in a new tab →",

      location_eyebrow:        "Find Me",
      location_title:          "The Studio",
      location_addr_heading:   "Address",
      location_addr_html:      "<strong>Sand Studio</strong><br />[Street address]<br />Vilnius, Lithuania",
      location_hours_heading:  "Hours",
      location_hours_html:     "Tue – Fri &nbsp;· &nbsp;10am – 7pm<br />Saturday &nbsp;·&nbsp; 9am – 5pm<br />Sun – Mon &nbsp;·&nbsp; Closed",
      location_directions:     "Get directions →",

      footer_meta: "sandstudio.lt · All rights reserved."
    },

    lt: {
      __title: "Sand Studio — Nagų priežiūra Vilniuje",
      __meta_desc: "Sand Studio, meistrė Evelina — išskirtinė nagų priežiūra, manikiūras, pedikiūras ir nagų dizainas Vilniuje. Rezervuokite laiką jau dabar.",

      nav_services: "Paslaugos",
      nav_gallery:  "Galerija",
      nav_about:    "Apie mane",
      nav_contact:  "Kontaktai",
      nav_location: "Vieta",
      nav_book:     "Registruotis",

      hero_eyebrow:     "Išskirtinė nagų priežiūra",
      hero_title_html:  "Tobula. Išpuoselėta.<br/><em>Tavo stilius.</em>",
      hero_lede:        "Jauki, šilta studija, kurioje kiekvienas manikiūras pritaikomas būtent tavo rankoms — o ne atvirkščiai.",
      hero_cta_primary: "Rezervuoti laiką",
      hero_cta_ghost:   "Peržiūrėti darbus",

      services_eyebrow: "Meniu",
      services_title:   "Paslaugos ir kainos",
      services_lede:    "Atrinktas paslaugų sąrašas. Kainos yra preliminarios – galutinė kaina priklauso nuo ilgio, dizaino ir papildomų elementų.",

      svc1_title: "Klasikinis manikiūras",
      svc1_desc:  "Formavimas, odelių priežiūra, prabangus rankų masažas ir nepriekaištinga lako danga.",
      svc1_price: "nuo €35",
      svc2_title: "Gelinis manikiūras",
      svc2_desc:  "Ilgalaikė gelio spalva, nesiskelianti iki trijų savaičių, blizgi danga.",
      svc2_price: "nuo €50",
      svc3_title: "Statybinis gelis / pailginimas",
      svc3_desc:  "Stiprinanti danga ar pailginimai ilgiui, formai ir atsparumui.",
      svc3_price: "nuo €75",
      svc4_title: "SPA pedikiūras",
      svc4_desc:  "Mirkymas, šveitimas, nuospaudų priežiūra, masažas ir lakavimas – pilna pavargusių pėdų atgaiva.",
      svc4_price: "nuo €55",
      svc5_title: "Nagų dizainas",
      svc5_desc:  "Ranka pieštos detalės, prancūziškas manikiūras, chromas ar minimalistiniai akcentai. Tavo idėja – mano darbas.",
      svc5_price: "nuo €10 / nagas",
      svc6_title: "Nuėmimas ir atstatymas",
      svc6_desc:  "Švelnus gelio ar akrilo nuėmimas su maitinančia procedūra sveikiems nagams.",
      svc6_price: "nuo €20",

      gallery_eyebrow:   "Galerija",
      gallery_title:     "Naujausi darbai",
      gallery_lede_html: "Žvilgsnis į naujausius mano darbus.",

      about_eyebrow:    "Apie mane",
      about_title_html: "Sveiki, aš <em>Evelina</em>",
      about_p1_html:    "Esu sertifikuota nagų meistrė, turinti daugiau nei <strong>[X]</strong> metų patirties atliekant manikiūrą, pedikiūrą, gelinį lakavimą ir nagų dizainą. Mano studija – tai maža, rami erdvė, kurioje galima atsipalaiduoti: jokio skubėjimo, jokio konvejerio, tik gražūs ir sveiki nagai.",
      about_p2:         "Tikiu, kad nagų priežiūra yra savęs puoselėjimas. Nesvarbu, ar norite klasikinės elegancijos, ar kažko drąsaus ir išskirtinio – dirbsime kartu, kad rastume tai, kas tinka jūsų rankoms ir gyvenimo būdui.",
      about_badge1:     "✦ Licencijuota ir apdrausta",
      about_badge2:     "✦ Sterilūs, vienkartiniai įrankiai",
      about_badge3:     "✦ Produktai be žiaurumo gyvūnams",
      about_badge4:     "✦ Tik pagal išankstinę registraciją",

      contact_eyebrow:      "Susisiekime",
      contact_title:        "Kontaktai",
      contact_lede:         "Greičiausias būdas susisiekti – Instagram žinutė. Dėl rezervacijų prašome naudotis kalendoriumi apačioje.",
      contact_insta_label:  "Instagram",
      contact_email_label:  "El. paštas",
      contact_phone_label:  "Telefonas",

      book_eyebrow:      "Rezervacija",
      book_title:        "Rezervuokite laiką",
      book_lede:         "Pasirinkite paslaugą ir jums tinkamą laiką. Patvirtinimas bus išsiųstas el. paštu.",
      book_ph_title:     "Rezervacijos įrankis bus čia",
      book_ph_desc_html: 'Įklijuokite Booksy (arba Calendly / Square) kodą faile <code>index.html</code>, ten kur nurodyta <code>id="booksy-embed"</code>.',
      book_ph_link:      "Atidaryti Booksy naujame lange →",

      location_eyebrow:        "Rasite mane",
      location_title:          "Studija",
      location_addr_heading:   "Adresas",
      location_addr_html:      "<strong>Sand Studio</strong><br />[Gatvės adresas]<br />Vilnius, Lietuva",
      location_hours_heading:  "Darbo laikas",
      location_hours_html:     "Antr. – Penkt. &nbsp;· &nbsp;10:00 – 19:00<br />Šeštad. &nbsp;·&nbsp; 9:00 – 17:00<br />Sekm. – Pirmad. &nbsp;·&nbsp; Nedirbama",
      location_directions:     "Rasti kelią →",

      footer_meta: "sandstudio.lt · Visos teisės saugomos."
    }
  };

  /* ---------------- Language picker ---------------- */
  function detectLang() {
    try {
      var saved = localStorage.getItem('lnsLang');
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    var nav = ((navigator.language || navigator.userLanguage || 'en') + '').toLowerCase();
    if (nav.indexOf('lt') === 0) return 'lt';
    return 'en';
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = 'en';
    var t = translations[lang];

    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('lnsLang', lang); } catch (e) {}

    // Title + meta description
    if (t.__title) document.title = t.__title;
    var md = document.querySelector('meta[name="description"]');
    if (md && t.__meta_desc) md.setAttribute('content', t.__meta_desc);

    // Plain-text keys
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });
    // HTML keys (preserve markup)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] != null) el.innerHTML = t[key];
    });

    // Switcher state
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  // Wire up the buttons
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      applyLang(b.getAttribute('data-lang'));
    });
  });

  // Apply on load
  applyLang(detectLang());

  /* ---------------- Year in footer ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu   = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      // Don't collapse when clicking a language button
      if (e.target.closest && e.target.closest('.lang-switch')) return;
      if (e.target.tagName === 'A') {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------- Nav background on scroll ---------------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(250, 246, 240, 0.92)';
      nav.style.boxShadow  = '0 1px 12px rgba(60, 40, 25, 0.06)';
    } else {
      nav.style.background = 'rgba(250, 246, 240, 0.72)';
      nav.style.boxShadow  = 'none';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll('.section__head, .service-card, .gallery__item, .about__media, .about__body, .contact__card, .book__frame, .location__info, .location__map');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------- Scrollspy: highlight current section in nav ---------------- */
  var navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
  var sectionIds = [];
  var linkBySection = {};
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.length < 2) return;
    var id = href.slice(1);
    if (document.getElementById(id)) {
      sectionIds.push(id);
      (linkBySection[id] = linkBySection[id] || []).push(link);
    }
  });

  function setActiveSection(id) {
    navLinks.forEach(function (a) { a.classList.remove('is-current'); });
    if (id && linkBySection[id]) {
      linkBySection[id].forEach(function (a) { a.classList.add('is-current'); });
    }
  }

  function updateScrollspy() {
    // Use a line 30% down from the top of the viewport as the "current" marker.
    var marker = window.innerHeight * 0.3;
    var current = null;
    for (var i = 0; i < sectionIds.length; i++) {
      var sec = document.getElementById(sectionIds[i]);
      if (!sec) continue;
      var r = sec.getBoundingClientRect();
      if (r.top <= marker && r.bottom > marker) { current = sectionIds[i]; break; }
    }
    // Near the bottom of the page, force the last section active
    if (!current && (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 4)) {
      current = sectionIds[sectionIds.length - 1];
    }
    setActiveSection(current);
  }
  window.addEventListener('scroll', updateScrollspy, { passive: true });
  window.addEventListener('resize', updateScrollspy);
  updateScrollspy();

  /* ---------------- Gallery lightbox ---------------- */
  var lb = document.getElementById('lightbox');
  var lbImg, lbNext, lbPrev, lbClose, lbIndex = 0, lbItems = [];

  if (lb) {
    lbImg   = lb.querySelector('.lightbox__img');
    lbNext  = lb.querySelector('.lightbox__next');
    lbPrev  = lb.querySelector('.lightbox__prev');
    lbClose = lb.querySelector('.lightbox__close');

    function lbOpen(i) {
      lbIndex = (i + lbItems.length) % lbItems.length;
      lbImg.src = lbItems[lbIndex].full;
      lbImg.alt = lbItems[lbIndex].alt;
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function lbClose2() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    lbNext.addEventListener('click', function () { lbOpen(lbIndex + 1); });
    lbPrev.addEventListener('click', function () { lbOpen(lbIndex - 1); });
    lbClose.addEventListener('click', lbClose2);
    lb.addEventListener('click', function (e) { if (e.target === lb) lbClose2(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape')     lbClose2();
      if (e.key === 'ArrowRight') lbOpen(lbIndex + 1);
      if (e.key === 'ArrowLeft')  lbOpen(lbIndex - 1);
    });
  }

  function initLightbox() {
    var items = document.querySelectorAll('.gallery__item');
    lbItems = Array.prototype.map.call(items, function (el) {
      return { full: el.dataset.src || el.querySelector('img').src, alt: el.querySelector('img').alt };
    });
    items.forEach(function (el, i) {
      el.addEventListener('click', function () { lbOpen(i); });
    });
  }
})();
