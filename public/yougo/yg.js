/*!
 * YOUGO TRAVEL — site enhancements for yougotravel.tn (3T / Flexis template)
 * Loaded on every page. Each block is independent and wrapped in try/catch:
 * if 3T changes its template, one feature may stop working, never the site.
 * Edit CONFIG only for day-to-day changes.
 */
(function () {
  'use strict';

  var CONFIG = {
    font: 'Poppins',                      // Google Font for the whole site
    brand: '#e8a33d',                     // Yougo orange (logo / buttons)
    navy: '#1f3a5f',
    whatsapp: '21658755755',              // TO CONFIRM with the team
    whatsappText: "Bonjour Yougo Travel, je souhaite des informations sur une offre :",
    phoneMain: '+21671881300',
    omraThemeUrl: '/voyage-organisee?theme=9',
    renameMenu: { 'Promotions': 'Omra' },
    menuLinks: { 'Omra': '/voyage-organisee?theme=9' },
    labels: {                             // search bar & misc wording
      'Votre Arrivée': 'Arrivée',
      'Date de départ': 'Départ',
      'Voyageur(s)': 'Voyageurs',
      'Favories': 'Favoris'
    },
    placeholders: { 'Où allez-vous ?': 'Ville, région ou hôtel' },
    foreignCities: /casablanca|mecque|medina|annaba|agadir|marrakech|malaga|cappadocia|eskisehir|hurghada|tanger|bursa|bolu|fes|merzouga|dades|prague|vienne|d.sseldorf/i,
    fallbackImage: '/public/front/images/logo/logo.png'
  };

  var d = document, h = d.head;
  function safe(name, fn) { try { fn(); } catch (e) { if (window.console) console.warn('[YG] ' + name, e); } }
  function $$(sel, root) { return Array.prototype.slice.call((root || d).querySelectorAll(sel)); }
  function txt(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim(); }
  function walkText(root, cb) {
    var w = d.createTreeWalker(root || d.body, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { if (n.parentNode && !/SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)) cb(n); }
  }

  /* ---------- 1. HEAD: font, performance hints, favicon, lang ---------- */
  safe('head', function () {
    ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach(function (u) {
      var p = d.createElement('link'); p.rel = 'preconnect'; p.href = u; p.crossOrigin = ''; h.appendChild(p);
    });
    var f = d.createElement('link'); f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=' + CONFIG.font + ':wght@400;500;600;700&display=swap';
    h.appendChild(f);
    d.documentElement.lang = 'fr';
    if (!d.querySelector('meta[name=theme-color][content="' + CONFIG.brand + '"]')) {
      var tc = d.querySelector('meta[name=theme-color]') || d.createElement('meta');
      tc.name = 'theme-color'; tc.content = CONFIG.brand; h.appendChild(tc);
    }
  });

  /* ---------- 2. GLOBAL CSS ---------- */
  safe('css', function () {
    var c = [
      // typography
      'body,body *:not(i):not([class*=fa]):not([class*=icon]):not([class*=glyph]):not([class*=imoon]){font-family:' + CONFIG.font + ',Arial,sans-serif!important}',
      'body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}',
      'h1,h2,h3,h4,h5{letter-spacing:-.01em}',
      // hotels mega-menu (fixes overflow + white void at page bottom)
      'ul.yg-hm{display:grid!important;background:#fff;grid-template-columns:repeat(3,minmax(160px,1fr));column-gap:8px;width:600px;max-height:75vh;overflow-y:auto;box-shadow:0 12px 32px rgba(0,0,0,.12);border-radius:12px;padding:8px!important}',
      'ul.yg-hm li{background:#fff;list-style:none}',
      'ul.yg-hm li.yg-h{grid-column:1/-1;font-weight:600;padding:10px 12px 4px;color:' + CONFIG.brand + ';pointer-events:none;text-align:left;font-size:13px;text-transform:uppercase;letter-spacing:.06em}',
      '@media(max-width:991px){ul.yg-hm{display:block!important;width:auto;max-height:60vh;box-shadow:none}}',
      // any other long dropdown
      'ul.children-menu{max-height:80vh;overflow-y:auto}',
      // search bar
      '.span-moteur,.span-moteur-destination{white-space:nowrap}',
      // images
      'img{max-width:100%;height:auto}',
      'img.yg-fallback{object-fit:contain;background:#f6f3ee;padding:24px}',
      // responsive tables (room rates, programmes)
      '.yg-table-wrap{width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}',
      // focus visibility (accessibility)
      'a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid ' + CONFIG.brand + ';outline-offset:2px}',
      // buttons: smoother
      '.btn,button{transition:transform .15s ease,box-shadow .15s ease}',
      '.btn:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(0,0,0,.12)}',
      // cards hover
      '.yg-card{transition:transform .2s ease,box-shadow .2s ease}',
      '.yg-card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,0,0,.12)}',
      // WhatsApp floating button
      '.yg-wa{position:fixed;right:18px;bottom:18px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:transform .2s}',
      '.yg-wa:hover{transform:scale(1.08)}',
      '.yg-wa svg{width:30px;height:30px;fill:#fff}',
      // back to top
      '.yg-top{position:fixed;right:24px;bottom:86px;z-index:9998;width:42px;height:42px;border-radius:50%;border:0;background:' + CONFIG.navy + ';color:#fff;font-size:20px;opacity:0;pointer-events:none;transition:opacity .2s;cursor:pointer}',
      '.yg-top.on{opacity:.9;pointer-events:auto}',
      // trust strip
      '.yg-trust{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1140px;margin:32px auto;padding:0 16px}',
      '.yg-trust div{background:#fff;border-radius:14px;padding:18px;text-align:center;box-shadow:0 4px 18px rgba(0,0,0,.06)}',
      '.yg-trust b{display:block;color:' + CONFIG.navy + ';font-size:15px;margin-top:6px}',
      '.yg-trust span{font-size:13px;color:#666}',
      '.yg-trust i{font-style:normal;font-size:26px}',
      '@media(max-width:767px){.yg-trust{grid-template-columns:repeat(2,1fr)}}',
      // empty results card
      '.yg-empty{max-width:640px;margin:24px auto;padding:24px;border-radius:14px;background:#fff8ee;text-align:center}',
      '.yg-empty a{display:inline-block;margin:8px 6px 0;padding:10px 18px;border-radius:24px;background:' + CONFIG.brand + ';color:#fff!important;font-weight:600}',
      // reveal on scroll
      '.yg-reveal{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s ease}',
      '.yg-reveal.in{opacity:1;transform:none}',
      '@media(prefers-reduced-motion:reduce){.yg-reveal{opacity:1;transform:none;transition:none}}'
    ].join('');
    var s = d.createElement('style'); s.id = 'yg-css'; s.textContent = c; h.appendChild(s);
  });

  function run() {

    /* ---------- 3. MENU: rename, dedupe, group hotels ---------- */
    safe('menu', function () {
      $$('a').forEach(function (a) {
        var t = txt(a);
        if (CONFIG.renameMenu[t]) { a.textContent = CONFIG.renameMenu[t]; t = a.textContent; }
        if (CONFIG.menuLinks[t] && a.closest('nav,header,.menu,ul')) a.href = CONFIG.menuLinks[t];
      });
      $$('ul.children-menu').forEach(function (u) {
        if (u.children.length < 20) return;
        var seen = {}, tn = [], fr = [];
        Array.prototype.slice.call(u.children).forEach(function (li) {
          var k = txt(li).toLowerCase();
          if (seen[k]) { li.remove(); return; }
          seen[k] = 1; (CONFIG.foreignCities.test(k) ? fr : tn).push(li);
        });
        u.classList.add('yg-hm');
        function hd(x) { var e = d.createElement('li'); e.className = 'yg-h'; e.textContent = x; return e; }
        u.appendChild(hd('Tunisie')); tn.forEach(function (x) { u.appendChild(x); });
        if (fr.length) { u.appendChild(hd('Étranger')); fr.forEach(function (x) { u.appendChild(x); }); }
      });
    });

    /* ---------- 4. WORDING: labels, placeholders, broken texts ---------- */
    safe('wording', function () {
      $$('.span-moteur,.span-moteur-destination,a,span,label,button').forEach(function (e) {
        if (e.children.length) return;
        var t = txt(e); if (CONFIG.labels[t]) e.textContent = CONFIG.labels[t];
      });
      $$('input[placeholder]').forEach(function (i) {
        var p = CONFIG.placeholders[i.placeholder.trim()]; if (p) i.placeholder = p;
      });
      walkText(d.body, function (n) {
        var v = n.nodeValue, o = v;
        v = v.replace(/EnjoyouroffersinTunisiaandabroadwiththebestprices/g, 'Profitez de nos offres en Tunisie et à l’étranger aux meilleurs prix');
        v = v.replace(/(\w) \? (\w)/g, '$1 → $2');                    // "Tunis ? Istanbul"
        v = v.replace(/(\d{3,})\.000\s?TND/g, function (m, x) {       // 2290.000TND → 2 290 TND
          return Number(x).toLocaleString('fr-FR').replace(/ | /g, ' ') + ' TND';
        });
        v = v.replace(/(\d{4,})\s?TND/g, function (m, x) {
          return Number(x).toLocaleString('fr-FR').replace(/ | /g, ' ') + ' TND';
        });
        v = v.replace(/7001 etplus/g, '7 001 et plus');
        v = v.replace(/©\s?20\d\d/g, '© ' + new Date().getFullYear());
        if (v !== o) n.nodeValue = v;
      });
      // Capitalise lowercase offer titles: "paris 2026/2027" → "Paris 2026/2027"
      $$('h1,h2,h3,h4,h5,.card-title,.titre').forEach(function (e) {
        if (e.children.length) return;
        var t = e.textContent;
        if (/^[a-zà-ÿ]/.test(t.trim())) e.textContent = t.replace(/^\s*([a-zà-ÿ])/, function (m, c) { return m.replace(c, c.toUpperCase()); });
      });
    });

    /* ---------- 5. IMAGES: fallback, lazy-load, alt texts ---------- */
    safe('images', function () {
      $$('img').forEach(function (img, i) {
        var src = img.getAttribute('src') || '';
        var broken = /\/images\/image\/$/.test(src) || /non-disponible/.test(src);
        function fix() { img.src = CONFIG.fallbackImage; img.classList.add('yg-fallback'); }
        if (broken) fix(); else img.addEventListener('error', fix, { once: true });
        if (i > 3 && !img.loading) img.loading = 'lazy';
        img.decoding = 'async';
        if (!img.alt || /^(image|logo|basket|)$/i.test(img.alt.trim())) {
          var card = img.closest('a,div,article,li');
          var label = card ? txt(card).slice(0, 90) : '';
          img.alt = label || 'Yougo Travel';
        }
      });
    });

    /* ---------- 6. LINKS: click-to-call, external links ---------- */
    safe('links', function () {
      walkText(d.body, function (n) {
        if (n.parentNode.closest('a')) return;
        if (!/\b\d{2} ?\d{3} ?\d{3}\b/.test(n.nodeValue)) return;
        var frag = d.createDocumentFragment(), last = 0, v = n.nodeValue, m, re = /(\(\+216\)\s?)?\b(\d{2}) ?(\d{3}) ?(\d{3})\b/g;
        while ((m = re.exec(v))) {
          frag.appendChild(d.createTextNode(v.slice(last, m.index)));
          var a = d.createElement('a'); a.href = 'tel:+216' + m[2] + m[3] + m[4]; a.textContent = m[0];
          a.style.color = 'inherit'; frag.appendChild(a); last = re.lastIndex;
        }
        frag.appendChild(d.createTextNode(v.slice(last)));
        n.parentNode.replaceChild(frag, n);
      });
      $$('a[href^="http"]').forEach(function (a) {
        if (a.hostname !== location.hostname) { a.target = '_blank'; a.rel = 'noopener'; }
      });
    });

    /* ---------- 7. TABLES: horizontal scroll on mobile ---------- */
    safe('tables', function () {
      $$('table').forEach(function (t) {
        if (t.parentNode.classList.contains('yg-table-wrap')) return;
        var w = d.createElement('div'); w.className = 'yg-table-wrap';
        t.parentNode.insertBefore(w, t); w.appendChild(t);
      });
    });

    /* ---------- 8. WHATSAPP + BACK-TO-TOP ---------- */
    safe('floating', function () {
      if (/\/admin/.test(location.pathname)) return;
      var t = encodeURIComponent(CONFIG.whatsappText + ' ' + location.href);
      var wa = d.createElement('a'); wa.className = 'yg-wa'; wa.target = '_blank'; wa.rel = 'noopener';
      wa.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + t;
      wa.setAttribute('aria-label', 'Écrire à Yougo Travel sur WhatsApp');
      wa.innerHTML = '<svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.8 1.2 3.2 1.4 3.5 2.4 3.6 5.8 5c2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z"/></svg>';
      d.body.appendChild(wa);
      var top = d.createElement('button'); top.className = 'yg-top'; top.type = 'button';
      top.setAttribute('aria-label', 'Retour en haut'); top.textContent = '↑';
      top.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };
      d.body.appendChild(top);
      window.addEventListener('scroll', function () { top.classList.toggle('on', window.scrollY > 600); }, { passive: true });
    });

    /* ---------- 9. HOME: trust strip ---------- */
    safe('trust', function () {
      if (location.pathname !== '/' ) return;
      var anchor = d.querySelector('#search_1') ;
      anchor = anchor ? anchor.closest('section,.container,.row') : null;
      var target = $$('h2').find(function (x) { return /Hotels|Hôtels/i.test(txt(x)); });
      var host = target ? target.closest('section,div') : anchor;
      if (!host || d.querySelector('.yg-trust')) return;
      var items = [
        ['🏢', '4 agences', 'Menzah 9, Lafayette, Mégrine, Médenine'],
        ['💳', 'Paiement sécurisé', 'Carte bancaire Visa / Mastercard'],
        ['💬', 'Conseil personnalisé', 'Par téléphone ou WhatsApp'],
        ['✈️', 'Tunisie & monde', 'Hôtels, voyages organisés, Omra']
      ];
      var box = d.createElement('div'); box.className = 'yg-trust yg-reveal';
      items.forEach(function (it) {
        var c = d.createElement('div');
        var i = d.createElement('i'); i.textContent = it[0];
        var b = d.createElement('b'); b.textContent = it[1];
        var s = d.createElement('span'); s.textContent = it[2];
        c.appendChild(i); c.appendChild(b); c.appendChild(s); box.appendChild(c);
      });
      host.parentNode.insertBefore(box, host);
    });

    /* ---------- 10. EMPTY RESULTS → useful message ---------- */
    safe('empty', function () {
      walkText(d.body, function (n) {
        if (!/Aucun résultat trouvé/i.test(n.nodeValue)) return;
        var host = n.parentNode.closest('div'); if (!host || host.querySelector('.yg-empty')) return;
        var box = d.createElement('div'); box.className = 'yg-empty';
        var p = d.createElement('p'); p.textContent = 'Cette offre n’est pas encore en ligne. Nos conseillers peuvent vous préparer un programme sur mesure.';
        var a1 = d.createElement('a'); a1.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(CONFIG.whatsappText + ' ' + location.href); a1.target = '_blank'; a1.textContent = 'WhatsApp';
        var a2 = d.createElement('a'); a2.href = 'tel:' + CONFIG.phoneMain; a2.textContent = 'Appeler';
        var a3 = d.createElement('a'); a3.href = '/voyage-organisee'; a3.textContent = 'Voir nos voyages';
        box.appendChild(p); box.appendChild(a1); box.appendChild(a2); box.appendChild(a3);
        host.appendChild(box);
      });
    });

    /* ---------- 11. CARDS: hover + reveal on scroll ---------- */
    safe('cards', function () {
      $$('form [name=titre_voyage]').forEach(function (i) { var c = i.closest('.card,.item,div'); if (c) c.classList.add('yg-card'); });
      if (!('IntersectionObserver' in window)) { $$('.yg-reveal').forEach(function (e) { e.classList.add('in'); }); return; }
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .15 });
      $$('.yg-reveal').forEach(function (e) { io.observe(e); });
    });

    /* ---------- 12. SEO: per-page title & description, JSON-LD ---------- */
    safe('seo', function () {
      var h1 = d.querySelector('h1');
      var base = 'Yougo Travel';
      if (h1 && location.pathname !== '/') {
        var t = txt(h1);
        d.title = t + ' | ' + base;
        var m = d.querySelector('meta[name=description]') || d.createElement('meta');
        m.name = 'description';
        var p = d.querySelector('h1 ~ p, .description, .desc');
        m.content = (t + ' avec Yougo Travel. ' + (p ? txt(p) : 'Réservation en ligne ou en agence, 4 agences en Tunisie.')).slice(0, 158);
        h.appendChild(m);
      }
      var ld = {
        '@context': 'https://schema.org', '@type': 'TravelAgency', name: 'Yougo Travel', url: 'https://yougotravel.tn/',
        logo: 'https://yougotravel.tn/public/front/images/logo/logo.png', telephone: CONFIG.phoneMain, email: 'tourisme@yougotravel.tn',
        priceRange: '$$', areaServed: 'TN',
        address: { '@type': 'PostalAddress', streetAddress: '32 bis Avenue Saleh Ben Youssef, Menzah 9', addressLocality: 'Tunis', addressCountry: 'TN' },
        sameAs: ['https://www.facebook.com/YouGoTravel.Tunisie/', 'https://www.instagram.com/yougotravel.agency/']
      };
      var s = d.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(ld); h.appendChild(s);
    });

    /* ---------- 13. ACCESSIBILITY: labels on icon-only controls ---------- */
    safe('a11y', function () {
      $$('a,button').forEach(function (e) {
        if (txt(e) || e.getAttribute('aria-label')) return;
        var img = e.querySelector('img[alt]');
        e.setAttribute('aria-label', img && img.alt ? img.alt : (e.title || 'Lien'));
      });
      $$('input:not([type=hidden]),select,textarea').forEach(function (i) {
        if (i.getAttribute('aria-label') || i.id && d.querySelector('label[for="' + i.id + '"]')) return;
        if (i.placeholder) i.setAttribute('aria-label', i.placeholder);
      });
    });
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run); else run();
  // re-run light passes after AJAX content loads (search results, pagination)
  var timer; new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(function () {
    safe('images-late', function () { $$('img:not(.yg-fallback)').forEach(function (img) { var s = img.getAttribute('src') || ''; if (/\/images\/image\/$|non-disponible/.test(s)) { img.src = CONFIG.fallbackImage; img.classList.add('yg-fallback'); } }); });
  }, 300); }).observe(d.documentElement, { childList: true, subtree: true });
})();
