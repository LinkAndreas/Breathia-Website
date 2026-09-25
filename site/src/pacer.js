// A web rendition of Breathia's breathing circle (Breathia/Features/Session/Live/BreathingCircle.swift).
// Each phase eases the circle toward its target scale (inhale 1.15, exhale 0.8, holds as given).
// The count rises while you inhale and hold, and falls while you exhale — as in the app.

// Techniques and labels come from the page (data-presets / data-labels), rendered from the
// app's own catalog and translations — see scripts/templates/home.js.

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

export function initPacer(root) {
  if (!root) return;

  const circle = root.querySelector('[data-pacer-circle]');
  const phaseEl = root.querySelector('[data-pacer-phase]');
  const countEl = root.querySelector('[data-pacer-count]');
  const cycleEl = root.querySelector('[data-pacer-cycle]');
  const patternEl = root.querySelector('[data-pacer-pattern]');
  const toggle = root.querySelector('[data-pacer-toggle]');
  const toggleLabel = root.querySelector('[data-pacer-toggle-label]');
  const chips = [...root.querySelectorAll('[data-technique]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const presets = JSON.parse(root.dataset.presets);
  const labels = JSON.parse(root.dataset.labels);

  let preset = presets[chips[0].dataset.technique];
  let elapsed = 0; // ms into the current session
  let last = null;
  let frame = null;
  let userPaused = reducedMotion.matches;
  let onScreen = false;

  const cycleLength = () => preset.phases.reduce((sum, p) => sum + p.seconds * 1000, 0);

  function render() {
    const cycleMs = cycleLength();
    const cycle = Math.floor(elapsed / cycleMs) + 1;
    let t = elapsed % cycleMs;
    let index = 0;
    while (t >= preset.phases[index].seconds * 1000) {
      t -= preset.phases[index].seconds * 1000;
      index += 1;
    }
    const phase = preset.phases[index];
    const previous = preset.phases[(index - 1 + preset.phases.length) % preset.phases.length];
    const progress = t / (phase.seconds * 1000);
    const scale = previous.scale + (phase.scale - previous.scale) * easeInOut(progress);

    const second = Math.floor(t / 1000);
    const count = phase.kind === 'exhale' ? phase.seconds - second : second + 1;

    circle.style.setProperty('--scale', scale.toFixed(4));
    const phaseText = labels[phase.kind];
    if (phaseEl.textContent !== phaseText) phaseEl.textContent = phaseText;
    if (countEl.textContent !== String(count)) countEl.textContent = count;
    const cycleText = labels.cycle.replace('{n}', cycle);
    if (cycleEl.textContent !== cycleText) cycleEl.textContent = cycleText;
  }

  function tick(now) {
    if (last !== null) elapsed += now - last;
    last = now;
    render();
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    const shouldRun = !userPaused && onScreen && !document.hidden;
    if (shouldRun && frame === null) {
      last = null;
      frame = requestAnimationFrame(tick);
    } else if (!shouldRun && frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggleLabel.textContent = userPaused ? labels.play : labels.pause;
  }

  function select(id) {
    preset = presets[id];
    elapsed = 0;
    root.style.setProperty('--hue', preset.hue);
    patternEl.textContent = preset.pattern;
    chips.forEach((chip) => chip.setAttribute('aria-checked', String(chip.dataset.technique === id)));
    render();
  }

  chips.forEach((chip, i) => {
    chip.addEventListener('click', () => select(chip.dataset.technique));
    // Arrow keys move between options, as in a native radio group.
    chip.addEventListener('keydown', (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      const next = chips[(i + step + chips.length) % chips.length];
      next.focus();
      select(next.dataset.technique);
    });
    chip.tabIndex = chip.getAttribute('aria-checked') === 'true' ? 0 : -1;
  });
  root.addEventListener('focusin', () => {
    chips.forEach((c) => (c.tabIndex = c.getAttribute('aria-checked') === 'true' ? 0 : -1));
  });

  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    sync();
  });

  // Only animate while visible, like the app pausing when you leave it.
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  }).observe(root);
  document.addEventListener('visibilitychange', sync);

  select(chips[0].dataset.technique);
  sync();
}
