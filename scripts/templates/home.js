// The landing page, one per language.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { site } from '../../content/site.js';
import { appStrings, categories, techniques } from '../../content/app.js';
import devices from '../../content/devices.json' with { type: 'json' };
import { renderDocument, storeBadge } from './layout.js';
import { escapeHtml, fill, languages, preferredLanguagesScript, rel, routes } from './util.js';

// Techniques offered in the interactive breathing circle.
const pacerTechniques = ['resonance', 'box', '478', 'sigh'];

const phaseName = (kind, lang) => appStrings[kind][lang];

/** "5s Inhale · 5s Exhale" (+ " · 10 min"), formatted as the app does. */
function patternLabel(technique, lang, { withMinutes = true } = {}) {
  const parts = technique.phases.map(({ kind, seconds }) =>
    fill(appStrings.phaseLabel[lang], { n: seconds, s: phaseName(kind, lang) }),
  );
  if (withMinutes) parts.push(fill(appStrings.minutes[lang], { n: technique.minutes }));
  return parts.join(' · ');
}

const deviceSizes = {
  iphone: '(min-width: 960px) 360px, 72vw',
  ipad: '(min-width: 960px) 320px, 80vw',
  mac: '(min-width: 960px) 600px, 100vw',
  wrist: '<path d="M12 20s-6.5-4.1-6.5-9.2A3.8 3.8 0 0 1 12 8.4a3.8 3.8 0 0 1 6.5 2.4C18.5 15.9 12 20 12 20z" /><path d="M7.5 12.5h2.2l1.2-2 1.6 3.5 1.1-1.5h2.9" />',
};

const publicDir = new URL('../../public', import.meta.url).pathname;

/**
 * `url` with a hash of the file's content, so a new screenshot gets a new URL: images are
 * cached for a week by browsers and the CDN, while the pages always revalidate.
 */
function versioned(url) {
  const hash = createHash('sha256').update(readFileSync(publicDir + url)).digest('hex').slice(0, 10);
  return `${url}?v=${hash}`;
}

/** Languages without their own mockups (public/images/devices/<lang>/) show the English ones. */
const mockupLanguage = (lang) => (existsSync(`${publicDir}/images/devices/${lang}`) ? lang : languages[0]);

/**
 * A screenshot inside its real device bezel (composited by scripts/build-images.mjs), taken
 * from the app running in the page's language.
 * `scheme: 'auto'` follows the visitor's light/dark appearance; the watch has a single one.
 */
function device(lang, kind, name, { alt, className = '', scheme = kind === 'watch' ? null : 'auto', eager = false }) {
  const { width, height, widths } = devices[kind];
  const folder = mockupLanguage(lang);
  const set = (suffix) => widths.map((w) => `${versioned(`/images/devices/${folder}/${name}${suffix}-${w}.webp`)} ${w}w`).join(', ');
  const fallback = (suffix) => versioned(`/images/devices/${folder}/${name}${suffix}-${widths[0]}.webp`);
  const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
  const sizesAttr = deviceSizes[kind];
  const img = (suffix) =>
    `<img src="${fallback(suffix)}" srcset="${set(suffix)}" sizes="${sizesAttr}" width="${width}" height="${height}"${loading} alt="${escapeHtml(alt)}" />`;
  const content =
    scheme === 'auto'
      ? `<picture>
                <source srcset="${set('-dark')}" sizes="${sizesAttr}" media="(prefers-color-scheme: dark)" data-dark-source />
                ${img('-light')}
              </picture>`
      : img(scheme ? `-${scheme}` : '');
  return `<figure class="device device--${kind}${className ? ` ${className}` : ''}">
              ${content}
            </figure>`;
}

/** A smooth wave with a 300-unit period, so the scrolling illustration loops seamlessly. */
function wavePath(y, amplitude, shift) {
  let d = `M${-300 + shift} ${y}`;
  for (let x = -300 + shift, up = true, first = true; x < 1200; x += 150, up = !up) {
    const cy = up ? y - amplitude : y + amplitude;
    d += first ? ` C${x + 50} ${cy} ${x + 100} ${cy} ${x + 150} ${y}` : ` S${x + 100} ${cy} ${x + 150} ${y}`;
    first = false;
  }
  return d;
}

const icons = {
  pulse: '<path d="M3 12h4l2-5 3 10 2-6 1.5 3H21" />',
  trend: '<path d="M4 17l5-5 4 4 7-8" /><path d="M15 8h5v5" />',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" />',
  bluetooth: '<path d="M7 7l10 10-5 5V2l5 5L7 17" />',
  wrist: '<path d="M12 20s-6.5-4.1-6.5-9.2A3.8 3.8 0 0 1 12 8.4a3.8 3.8 0 0 1 6.5 2.4C18.5 15.9 12 20 12 20z" /><path d="M7.5 12.5h2.2l1.2-2 1.6 3.5 1.1-1.5h2.9" />',
  check: '<circle cx="12" cy="12" r="8" /><path d="M8.5 12.5l2.3 2.3 4.7-5" />',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />',
  noAccount: '<circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" /><path d="M4 4l16 16" />',
  heart: '<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />',
};
const icon = (name, className) => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;

function techniqueLibrary(lang) {
  return categories
    .map((category) => {
      const members = techniques.filter((t) => t.category === category.id);
      const items = members
        .map(
          (t) => `
            <li class="technique" style="--hue:${t.hue}">
              <span class="technique__orb" aria-hidden="true"></span>
              <span class="technique__text">
                <span class="technique__name">${escapeHtml(t.name[lang])}</span>
                <span class="technique__purpose">${escapeHtml(t.purpose[lang])}</span>
                <span class="technique__pattern">${escapeHtml(patternLabel(t, lang))}</span>
              </span>
            </li>`,
        )
        .join('');
      return `
          <section class="library__group" data-category="${category.id}" aria-labelledby="cat-${category.id}">
            <h3 class="library__heading" id="cat-${category.id}">${escapeHtml(category.title[lang])}
              <span class="library__count">${members.length}</span></h3>
            <ul class="library__list" role="list">${items}</ul>
          </section>`;
    })
    .join('');
}

function pacer(t, lang) {
  const presets = Object.fromEntries(
    pacerTechniques.map((id) => {
      const technique = techniques.find((x) => x.id === id);
      return [id, { hue: technique.hue, phases: technique.phases, pattern: patternLabel(technique, lang, { withMinutes: false }) }];
    }),
  );
  const labels = {
    inhale: appStrings.inhale[lang],
    exhale: appStrings.exhale[lang],
    hold: appStrings.hold[lang],
    cycle: appStrings.cycle[lang],
    pause: appStrings.pause[lang],
    play: t.breathe.play,
  };
  const first = techniques.find((x) => x.id === pacerTechniques[0]);
  const chips = pacerTechniques
    .map((id, i) => {
      const technique = techniques.find((x) => x.id === id);
      return `<button type="button" class="chip" role="radio" aria-checked="${i === 0}" data-technique="${id}" style="--hue: ${technique.hue}">${escapeHtml(technique.name[lang])}</button>`;
    })
    .join('\n                  ');

  return `<div class="pacer" data-pacer data-presets='${escapeHtml(JSON.stringify(presets))}' data-labels='${escapeHtml(JSON.stringify(labels))}'>
              <button type="button" class="pacer__toggle" data-pacer-toggle aria-pressed="false">
                <span data-pacer-toggle-label>${labels.pause}</span>
              </button>
              <div class="pacer__stage">
                <div class="pacer__circle" data-pacer-circle>
                  <div class="pacer__readout" aria-hidden="true">
                    <span class="pacer__phase" data-pacer-phase>${labels.inhale}</span>
                    <span class="pacer__count" data-pacer-count>1</span>
                    <span class="pacer__cycle" data-pacer-cycle>${fill(labels.cycle, { n: 1 })}</span>
                  </div>
                </div>
              </div>
              <div class="pacer__controls">
                <div class="pacer__chips" role="radiogroup" aria-label="${t.breathe.tryLabel}">
                  ${chips}
                </div>
              </div>
              <p class="pacer__pattern" data-pacer-pattern>${escapeHtml(presets[first.id].pattern)}</p>
              <p class="visually-hidden">${t.breathe.demoNote}</p>
            </div>`;
}

/** Redirects first-time visitors of the default-language home page to their browser's language. */
const languageRedirect = (dir) => `<script>
      (function () {
        try {
          if (localStorage.getItem('breathia.lang')) return;
          var supported = ${JSON.stringify(site.languages.map((l) => l.code).slice(1))};
          var preferred = ${preferredLanguagesScript()};
          for (var i = 0; i < preferred.length; i++) {
            if (preferred[i] === '${site.languages[0].code}') return;
            if (supported.indexOf(preferred[i]) !== -1) { location.replace('${dir}' + preferred[i] + '/' + location.hash); return; }
          }
        } catch (e) {}
      })();
    </script>`;

/** The app icons everyone can choose, in the app's order, with their files in public/images/icons. */
const appIcons = [
  ['classic', 'classic'],
  ['amethyst', 'amethyst'],
  ['blush', 'blush'],
  ['ember', 'ember'],
  ['glacier', 'glacier'],
  ['lagoon', 'lagoon'],
  ['midnightGold', 'midnight-gold'],
  ['noir', 'noir'],
];

export function renderHome(lang, t) {
  const count = techniques.length;
  const vars = { count, categories: categories.length };
  const dir = routes.home(lang);
  const f = (s) => fill(s, vars);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Breathia: Breathing & HRV',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS 27, iPadOS 27, macOS 27, watchOS 27',
    description: f(t.meta.description),
    url: site.url + dir,
    downloadUrl: site.appStoreUrl,
    image: `${site.url}og-image.png`,
    inLanguage: site.languages.map((l) => l.tag),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: site.developer.name },
  };

  const head = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>${
    dir === '' ? `\n    ${languageRedirect(rel(dir, ''))}` : ''
  }`;

  const content = `
      <!-- Hero -->
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero__sky" aria-hidden="true">
          <span class="star" style="--x: 14%; --y: 16%; --s: 3px"></span>
          <span class="star" style="--x: 82%; --y: 12%; --s: 2.5px"></span>
          <span class="star" style="--x: 30%; --y: 9%; --s: 2px"></span>
          <span class="star" style="--x: 68%; --y: 26%; --s: 2px"></span>
          <span class="star" style="--x: 91%; --y: 38%; --s: 1.5px"></span>
          <span class="star" style="--x: 6%; --y: 44%; --s: 1.5px"></span>
        </div>

        <div class="hero__copy container">
          <p class="hero__eyebrow intro">
            <img src="/images/icon-256.webp" width="56" height="56" alt="" class="hero__icon" />
            <span>${t.hero.eyebrow}</span>
          </p>
          <h1 class="hero__title intro" id="hero-title">${t.hero.title}</h1>
          <p class="hero__lede intro">${f(t.hero.lede)}</p>
          <div class="hero__actions">
            ${storeBadge(t, lang)}
            <a class="link-arrow link-arrow--light intro" href="#breathe">${t.hero.secondary}</a>
          </div>
          <p class="hero__meta intro">${t.hero.meta}</p>
        </div>

        <div class="hero__stage">
          <div class="hero__sun" aria-hidden="true"></div>
          ${device(lang, 'iphone', 'iphone-session', { alt: t.hero.phoneAlt, className: 'hero__phone', eager: true })}
          <svg class="hero__waves" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="wave-far" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#a6dcf2" stop-opacity="0.45" />
                <stop offset="0.8" stop-color="#4a96cc" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient id="wave-near" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#63abdc" stop-opacity="0.7" />
                <stop offset="0.75" stop-color="#16397a" />
              </linearGradient>
            </defs>
            <path class="wave wave--far" fill="url(#wave-far)" d="M0 90 C180 60 360 60 540 90 S900 120 1080 90 S1440 60 1620 90 S1980 120 2160 90 S2520 60 2880 90 V260 H0Z" />
            <path class="wave wave--near" fill="url(#wave-near)" d="M0 170 C160 140 320 135 480 160 S800 205 960 175 S1280 130 1440 170 S1760 205 1920 175 S2240 135 2400 160 S2720 205 2880 170 V260 H0Z" />
          </svg>
        </div>
      </section>

      <!-- At a glance -->
      <section class="glance" aria-label="${t.glance.label}">
        <ul class="glance__list container" role="list">
          <li><strong>${count}</strong><span>${t.glance.techniques}</span></li>
          <li><strong>${categories.length}</strong><span>${t.glance.categories}</span></li>
          <li><strong>4</strong><span>${t.glance.platforms}</span></li>
          <li><strong>0</strong><span>${t.glance.accounts}</span></li>
        </ul>
      </section>

      <!-- Breathing guidance -->
      <section class="section" id="breathe" aria-labelledby="breathe-title">
        <div class="container split">
          <div class="split__copy">
            <p class="eyebrow reveal" style="--accent: var(--pink)">${t.breathe.eyebrow}</p>
            <h2 class="section__title reveal" id="breathe-title">${t.breathe.title}</h2>
            <p class="section__lede reveal">${t.breathe.lede}</p>
            <ul class="ticks reveal" role="list">
              ${t.breathe.ticks.map((tick) => `<li>${tick}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="split__visual reveal">
            ${pacer(t, lang)}
          </div>
        </div>
      </section>

      <!-- Biofeedback -->
      <section class="section section--bio" id="biofeedback" aria-labelledby="bio-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--green)">${t.bio.eyebrow}</p>
            <h2 class="section__title reveal" id="bio-title">${t.bio.title}</h2>
            <p class="section__lede reveal">${t.bio.lede}</p>
          </header>

          <div class="bio">
            ${device(lang, 'iphone', 'iphone-session', { alt: t.bio.deviceAlt, className: 'bio__device reveal' })}
            <div class="bio__cards">
              ${t.bio.cards
                .map(
                  (card, i) => `<article class="card card--glass reveal">
                ${icon(['pulse', 'trend', 'shield'][i], 'card__icon')}
                <h3>${card.title}</h3>
                <p>${card.body}</p>
              </article>`,
                )
                .join('\n              ')}
            </div>
          </div>

          <figure class="rsa reveal" aria-labelledby="rsa-caption">
            <svg viewBox="0 0 800 180" class="rsa__chart" role="img" aria-labelledby="rsa-title">
              <title id="rsa-title">${t.bio.chartTitle}</title>
              <path class="rsa__breath" d="${wavePath(90, 60, 0)}" />
              <path class="rsa__heart" d="${wavePath(92, 52, 18)}" />
            </svg>
            <figcaption id="rsa-caption" class="rsa__legend">
              <span class="rsa__key rsa__key--breath">${t.bio.keyBreath}</span>
              <span class="rsa__key rsa__key--heart">${t.bio.keyHeart}</span>
              <span class="rsa__note">${t.bio.chartNote}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Sensors -->
      <section class="section section--alt" id="sensors" aria-labelledby="sensors-title">
        <div class="container">
          <header class="section__header">
            <p class="eyebrow reveal" style="--accent: var(--blue)">${t.sensors.eyebrow}</p>
            <h2 class="section__title reveal" id="sensors-title">${t.sensors.title}</h2>
          </header>

          <div class="sensors">
            <article class="sensor sensor--feature reveal">
              <div class="sensor__badge">${t.sensors.recommended}</div>
              <svg class="sensor__art" viewBox="0 0 240 120" aria-hidden="true">
                <defs>
                  <linearGradient id="strap" x1="0" x2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".15" /><stop offset=".5" stop-color="currentColor" stop-opacity=".35" /><stop offset="1" stop-color="currentColor" stop-opacity=".15" /></linearGradient>
                </defs>
                <path d="M0 70 C60 52 180 52 240 70 V86 C180 68 60 68 0 86Z" fill="url(#strap)" />
                <rect x="80" y="38" width="80" height="50" rx="25" fill="currentColor" opacity=".9" />
                <circle cx="120" cy="63" r="9" fill="none" stroke="var(--bg)" stroke-width="3" />
              </svg>
              <h3>Polar H10</h3>
              <p>${t.sensors.polarBody}</p>
            </article>
            <article class="sensor reveal">
              ${icon('bluetooth', 'sensor__icon')}
              <h3>${t.sensors.bleTitle}</h3>
              <p>${t.sensors.bleBody}</p>
            </article>
            <article class="sensor reveal">
              ${icon('wrist', 'sensor__icon')}
              <h3>${t.sensors.watchTitle}</h3>
              <p>${t.sensors.watchBody}</p>
            </article>
            <article class="sensor reveal">
              ${icon('check', 'sensor__icon')}
              <h3>${t.sensors.noneTitle}</h3>
              <p>${t.sensors.noneBody}</p>
            </article>
          </div>

          <p class="fineprint reveal">${t.sensors.fineprint}</p>
        </div>
      </section>

      <!-- How it works -->
      <section class="section" id="how" aria-labelledby="how-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--peach-deep)">${t.how.eyebrow}</p>
            <h2 class="section__title reveal" id="how-title">${t.how.title}</h2>
          </header>
          <ol class="steps" role="list">
            ${t.how.steps
              .map(
                (step, i) => `<li class="step reveal">
              ${device(lang, 'iphone', ['iphone-breathe', 'iphone-session', 'iphone-historyDetail'][i], { alt: step.alt, className: 'device--sm' })}
              <h3>${step.title}</h3>
              <p>${step.body}</p>
            </li>`,
              )
              .join('\n            ')}
          </ol>
        </div>
      </section>

      <!-- Technique library -->
      <section class="section section--alt" id="techniques" aria-labelledby="tech-title">
        <div class="container">
          <div class="library-intro">
            <header class="section__header">
              <p class="eyebrow reveal" style="--accent: var(--violet)">${t.library.eyebrow}</p>
              <h2 class="section__title reveal" id="tech-title">${f(t.library.title)}</h2>
              <p class="section__lede reveal">${t.library.lede}</p>
            </header>
            ${device(lang, 'iphone', 'iphone-technique', { alt: t.library.phoneAlt, className: 'device--sm library-intro__phone reveal' })}
          </div>

          <div class="library" data-library>
            <div class="library__filters" role="toolbar" aria-label="${t.library.filterLabel}" hidden data-library-filters>
              <button type="button" class="chip" data-filter="all" aria-pressed="true">${appStrings.all[lang]}</button>
              ${categories
                .map((c) => `<button type="button" class="chip" data-filter="${c.id}" aria-pressed="false">${escapeHtml(c.title[lang])}</button>`)
                .join('\n              ')}
            </div>
            <div class="library__groups">${techniqueLibrary(lang)}
            </div>
          </div>

          <p class="fineprint reveal">${t.library.fineprint}</p>
        </div>
      </section>

      <!-- History & Health -->
      <section class="section" id="history" aria-labelledby="history-title">
        <div class="container split split--reverse">
          <div class="split__copy">
            <p class="eyebrow reveal" style="--accent: var(--blue)">${t.history.eyebrow}</p>
            <h2 class="section__title reveal" id="history-title">${t.history.title}</h2>
            <p class="section__lede reveal">${t.history.lede}</p>
            <ul class="ticks reveal" role="list">
              ${t.history.ticks.map((tick) => `<li>${tick}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="split__visual split__visual--duo reveal">
            ${device(lang, 'iphone', 'iphone-history', { alt: t.history.listAlt, className: 'device--sm' })}
            ${device(lang, 'iphone', 'iphone-historyDetail', { alt: t.history.detailAlt, className: 'device--sm duo__front' })}
          </div>
        </div>
      </section>

      <!-- Everywhere -->
      <section class="section section--alt" id="everywhere" aria-labelledby="everywhere-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--pink)">${t.everywhere.eyebrow}</p>
            <h2 class="section__title reveal" id="everywhere-title">${t.everywhere.title}</h2>
          </header>

          <div class="bento">
            <article class="tile tile--watch reveal">
              <div class="tile__copy">
                <h3>${t.everywhere.watchTitle}</h3>
                <p>${t.everywhere.watchBody}</p>
              </div>
              <div class="watch-row">
                ${device(lang, 'watch', 'watch-list', { alt: t.everywhere.watchListAlt })}
                ${device(lang, 'watch', 'watch-session', { alt: t.everywhere.watchSessionAlt, className: 'device--watch-hero' })}
                ${device(lang, 'watch', 'watch-summary', { alt: t.everywhere.watchSummaryAlt })}
              </div>
            </article>

            <article class="tile tile--live reveal">
              <div class="tile__copy">
                <h3>${t.everywhere.liveTitle}</h3>
                <p>${t.everywhere.liveBody}</p>
              </div>
              <div class="island" aria-hidden="true" data-island>
                <div class="island__top">
                  <span class="island__name">${escapeHtml(techniques.find((x) => x.id === 'box').name[lang])}</span>
                  <span class="island__buttons">
                    <span class="island__btn"><svg viewBox="0 0 24 24"><rect x="7" y="5" width="3.5" height="14" rx="1" /><rect x="13.5" y="5" width="3.5" height="14" rx="1" /></svg></span>
                    <span class="island__btn island__btn--end"><svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /></svg></span>
                  </span>
                </div>
                <div class="island__bar"><span data-island-bar></span></div>
                <div class="island__times"><span data-island-elapsed>1:30</span><span>5:00</span></div>
              </div>
              <p class="tile__note">${t.everywhere.liveNote}</p>
            </article>

            <article class="tile tile--mac reveal">
              <div class="tile__copy">
                <h3>${t.everywhere.macTitle}</h3>
                <p>${t.everywhere.macBody}</p>
              </div>
              ${device(lang, 'mac', 'mac-history', { alt: t.everywhere.macAlt, className: 'tile__device' })}
            </article>

            <article class="tile tile--ipad reveal">
              <div class="tile__copy">
                <h3>${t.everywhere.ipadTitle}</h3>
                <p>${t.everywhere.ipadBody}</p>
              </div>
              ${device(lang, 'ipad', 'ipad-breathe', { alt: t.everywhere.ipadAlt, className: 'tile__device' })}
            </article>
          </div>
        </div>
      </section>

      <!-- Privacy & free -->
      <section class="section" id="privacy" aria-labelledby="privacy-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--green)">${t.privacy.eyebrow}</p>
            <h2 class="section__title reveal" id="privacy-title">${t.privacy.title}</h2>
            <p class="section__lede reveal">${t.privacy.lede}</p>
            <p class="section__link reveal"><a class="link-arrow" href="${rel(dir, routes.privacy(lang))}">${t.privacy.link}</a></p>
          </header>

          <ul class="pillars" role="list">
            ${t.privacy.pillars
              .map(
                (pillar, i) => `<li class="pillar reveal">
              <svg viewBox="0 0 24 24" aria-hidden="true">${icons[['lock', 'noAccount', 'heart'][i]]}</svg>
              <h3>${pillar.title}</h3>
              <p>${pillar.body}</p>
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- App icons -->
      <section class="section section--alt" id="icons" aria-labelledby="icons-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--violet)">${t.icons.eyebrow}</p>
            <h2 class="section__title reveal" id="icons-title">${t.icons.title}</h2>
            <p class="section__lede reveal">${t.icons.lede}</p>
          </header>
          <ul class="app-icons" role="list" aria-label="${t.icons.label}">
            ${appIcons
              .map(
                ([id, file]) => `<li class="app-icon reveal">
              <picture>
                <source srcset="${versioned(`/images/icons/${file}-dark.svg`)}" media="(prefers-color-scheme: dark)" data-dark-source />
                <img src="${versioned(`/images/icons/${file}.svg`)}" width="96" height="96" alt="" loading="lazy" />
              </picture>
              <span>${t.icons.names[id]}</span>
            </li>`,
              )
              .join('\n            ')}
          </ul>
          <p class="app-icons__note reveal">${t.icons.note}</p>
        </div>
      </section>

      <!-- Download CTA -->
      <section class="cta" id="download" aria-labelledby="cta-title">
        <div class="cta__sun" aria-hidden="true"></div>
        <div class="container cta__inner">
          <img class="cta__icon reveal" src="/images/icon-256.webp" width="112" height="112" alt="${escapeHtml(t.cta.iconAlt)}" loading="lazy" />
          <h2 class="cta__title reveal" id="cta-title">${t.cta.title}</h2>
          <p class="cta__lede reveal">${t.cta.lede}</p>
          ${storeBadge(t, lang, { height: 56 })}
          <p class="cta__meta reveal">${t.cta.meta}</p>
        </div>
      </section>`;

  return renderDocument({
    lang,
    t,
    page: 'home',
    title: t.meta.title,
    description: f(t.meta.description),
    ogTitle: t.meta.ogTitle,
    ogDescription: f(t.meta.ogDescription),
    head,
    content,
  });
}
