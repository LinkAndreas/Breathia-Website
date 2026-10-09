import { initPacer } from './pacer.js';

// Nav: transparent over the hero, frosted once the page scrolls past it.
const nav = document.querySelector('[data-nav]');
const hero = document.querySelector('.hero');
if (nav && hero && !nav.classList.contains('nav--static')) {
  new IntersectionObserver(([entry]) => nav.classList.toggle('is-solid', !entry.isIntersecting), {
    // Turn solid once only the nav's own height of the hero is left on screen.
    rootMargin: '0px 0px -100% 0px',
  }).observe(hero);
}

// Scroll reveal, staggered within each parent.
const revealer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      revealer.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('.reveal').forEach((el) => {
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
  el.style.setProperty('--delay', `${Math.min(siblings.indexOf(el), 4) * 0.08}s`);
  revealer.observe(el);
});

// Technique library filter (the full list is in the HTML; filtering is an enhancement).
const library = document.querySelector('[data-library]');
if (library) {
  const bar = library.querySelector('[data-library-filters]');
  const groups = [...library.querySelectorAll('.library__group')];
  const chips = [...bar.querySelectorAll('.chip')];
  bar.hidden = false;
  bar.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    groups.forEach((g) => (g.hidden = filter !== 'all' && g.dataset.category !== filter));
  });
}

initPacer(document.querySelector('[data-pacer]'));

// Language menus: remember an explicit choice (the default-language home page uses it to
// skip its browser-language redirect), and close the menu on outside click or Escape.
document.querySelectorAll('[data-lang]').forEach((link) =>
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('breathia.lang', link.dataset.lang);
    } catch {
      // Storage unavailable (private mode) — the choice just isn't remembered.
    }
  }),
);
const menus = [...document.querySelectorAll('[data-lang-menu]')];
document.addEventListener('click', (event) => {
  menus.forEach((menu) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  menus.forEach((menu) => {
    if (!menu.open) return;
    menu.open = false;
    menu.querySelector('summary').focus();
  });
});

// Appearance toggle. Without a stored choice the page follows the system setting (see the
// inline script in <head>); a click stores the opposite of what's currently shown.
const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => root.dataset.theme ?? (systemDark.matches ? 'dark' : 'light');

function applyTheme() {
  const chosen = root.dataset.theme;
  // Screenshot <picture>s pick their dark variant by media query; point it at the chosen theme.
  document.querySelectorAll('source[data-dark-source]').forEach((source) => {
    source.media = chosen === 'dark' ? 'all' : chosen === 'light' ? 'not all' : '(prefers-color-scheme: dark)';
  });
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-label', currentTheme() === 'dark' ? button.dataset.labelLight : button.dataset.labelDark);
  });
}

document.querySelectorAll('[data-theme-toggle]').forEach((button) =>
  button.addEventListener('click', () => {
    root.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('breathia.theme', root.dataset.theme);
    } catch {
      // Storage unavailable — the choice lasts for this page only.
    }
    applyTheme();
  }),
);
systemDark.addEventListener('change', applyTheme);
applyTheme();

// Live Activity illustration: a 5-minute session played back ten times faster, the elapsed time
// following the bar. Without script or with reduced motion it stays at 1:30 of 5:00.
const island = document.querySelector('[data-island]');
if (island && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const bar = island.querySelector('[data-island-bar]');
  const elapsedLabel = island.querySelector('[data-island-elapsed]');
  const sessionSeconds = 300;
  const speed = 10;
  let shown = -1;
  const tick = (now) => {
    const elapsed = ((now / 1000) * speed) % sessionSeconds;
    bar.style.width = `${(elapsed / sessionSeconds) * 100}%`;
    const seconds = Math.floor(elapsed);
    if (seconds !== shown) {
      shown = seconds;
      elapsedLabel.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
