// Regenerates the site's raster assets from the Breathia app repository: touch icon, favicon,
// the social preview image and — when BEZELS is set — the device mockups (see below).
//
//   npm run images                              # app repo at ../../Swift/Breathia
//   BREATHIA_APP=/path/to/Breathia npm run images
//
// Outputs are committed to public/, so a normal build doesn't need the app repo.

import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { site } from '../content/site.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const appRepo = path.resolve(process.env.BREATHIA_APP ?? path.join(root, '../../Swift/Breathia'));
const screensIn = path.join(appRepo, 'Docs/Images/Screenshots');
const publicDir = path.join(root, 'public');

if (!existsSync(screensIn)) {
  console.error(`Screenshots not found at ${screensIn}. Set BREATHIA_APP to the app repository.`);
  process.exit(1);
}

// Icons
const iconPng = path.join(appRepo, 'Docs/Images/AppIcon.png');
await sharp(iconPng).resize(180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(iconPng).resize(256).webp({ quality: 90 }).toFile(path.join(publicDir, 'images/icon-256.webp'));
await copyFile(path.join(root, 'content/brand/icon.svg'), path.join(publicDir, 'favicon.svg'));

// Social preview (1200×630), drawn from the icon's own palette.
const icon = await readFile(path.join(root, 'content/brand/icon.svg'), 'utf8');
const iconData = `data:image/svg+xml;base64,${Buffer.from(icon).toString('base64')}`;
const og = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#050a24"/><stop offset="0.45" stop-color="#1b2a6e"/>
      <stop offset="0.78" stop-color="#6a4f9e"/><stop offset="1" stop-color="#f59a86"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.42" cy="0.4" r="0.6">
      <stop offset="0" stop-color="#fff8e6"/><stop offset="0.55" stop-color="#ffd9a3"/><stop offset="1" stop-color="#ff9f73"/>
    </radialGradient>
    <radialGradient id="halo" cx="900" cy="330" r="420" gradientUnits="userSpaceOnUse">
      <stop offset="0.3" stop-color="#ff8f7a" stop-opacity="0.5"/><stop offset="1" stop-color="#ff8f7a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="w1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a6dcf2" stop-opacity="0.5"/><stop offset="0.8" stop-color="#4a96cc"/></linearGradient>
    <linearGradient id="w2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#63abdc" stop-opacity="0.7"/><stop offset="0.8" stop-color="#16397a"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#sky)"/>
  <rect width="1200" height="630" fill="url(#halo)"/>
  <circle cx="900" cy="340" r="170" fill="url(#sun)"/>
  <path d="M0 470 C150 440 300 440 450 470 S750 500 900 470 S1100 440 1200 460 V630 H0Z" fill="url(#w1)"/>
  <path d="M0 540 C120 510 240 505 360 530 S600 575 720 545 S960 500 1200 540 V630 H0Z" fill="url(#w2)"/>
  <image href="${iconData}" x="80" y="92" width="112" height="112"/>
  <text x="80" y="300" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="700" font-size="84" fill="#ffffff" letter-spacing="-2">Breathia</text>
  <text x="82" y="362" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="500" font-size="34" fill="#ffffff" fill-opacity="0.82">Guided breathing with live</text>
  <text x="82" y="406" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="500" font-size="34" fill="#ffffff" fill-opacity="0.82">heart-rate &amp; HRV biofeedback.</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'og-image.png'));

console.log('Images written to public/.');

// ---------------------------------------------------------------------------------------------
// Device mockups: each screenshot composited into Apple's official product bezel, once per
// language. The default language's screenshots are in Docs/Images/Screenshots itself, the other
// languages' in a folder named after the language (Docs/Images/Screenshots/de, …); the mockups
// go to public/images/devices/<language>.
//
// The bezels come from Apple Design Resources (developer.apple.com/design/resources) and are
// licensed for mock-ups only — they must not be extracted or redistributed on their own. So the
// bare bezel PNGs are never copied into this repository; only the finished, flattened mockups
// are. Point BEZELS at a folder containing the mounted/extracted bezel DMGs to regenerate:
//
//   BEZELS=/Volumes npm run images     (with Bezel-iPhone-17 etc. mounted there)

const bezelDir = process.env.BEZELS;
const devicesOut = path.join(root, 'public/images/devices');
const languages = site.languages.map((l) => l.code);

const devices = {
  iphone: {
    bezel: 'Bezel-iPhone-17/PNG/iPhone 17 Pro Max/iPhone 17 Pro Max - Deep Blue - Portrait.png',
    screens: ['iphone-session', 'iphone-breathe', 'iphone-technique', 'iphone-history', 'iphone-historyDetail'],
    widths: [480, 740],
  },
  ipad: {
    bezel: 'Bezel-iPad-Pro-(M5)/PNG/iPad Pro (M5) 13" - Space Black - Portrait.png',
    screens: ['ipad-breathe'],
    widths: [480, 900],
  },
  mac: {
    bezel: 'Bezel-MacBook-Neo/PNG/MacBook Neo - Indigo.png',
    screens: ['mac-history'],
    widths: [1000, 1610],
  },
  watch: {
    bezel: 'Bezel-Apple-Watch-Series-11-2025/PNG/Sport Band/Apple Watch S11 - 46mm - Aluminum Jet Black + Sport Band Black.png',
    screens: ['watch-list', 'watch-session', 'watch-summary'],
    widths: [300, 560],
    schemes: [null], // watch screenshots have one appearance
  },
};

/** The bezel's transparent screen area: the region connected to the image center. */
async function screenArea(file) {
  const { data, info } = await sharp(file).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const inside = new Uint8Array(w * h);
  const start = (h >> 1) * w + (w >> 1);
  const stack = [start];
  inside[start] = 1;
  let x0 = w, x1 = 0, y0 = h, y1 = 0;
  while (stack.length) {
    const i = stack.pop();
    const x = i % w, y = (i / w) | 0;
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    for (const [j, ok] of [[i - 1, x > 0], [i + 1, x < w - 1], [i - w, y > 0], [i + w, y < h - 1]]) {
      if (ok && !inside[j] && data[j] < 128) { inside[j] = 1; stack.push(j); }
    }
  }
  // Grow the area a few pixels under the bezel's anti-aliased inner edge, so no seam shows.
  const grown = new Uint8Array(inside);
  for (let pass = 0; pass < 3; pass++) {
    const source = new Uint8Array(grown);
    for (let i = 0; i < w * h; i++) {
      if (source[i]) continue;
      const x = i % w;
      if ((x > 0 && source[i - 1]) || (x < w - 1 && source[i + 1]) || source[i - w] || source[i + w]) grown[i] = 1;
    }
  }
  // The device's own outline (opaque pixels), so mockups can be cropped to the product itself.
  let bx0 = w, bx1 = 0, by0 = h, by1 = 0;
  for (let i = 0; i < w * h; i++) {
    if (data[i] < 128) continue;
    const x = i % w, y = (i / w) | 0;
    bx0 = Math.min(bx0, x); bx1 = Math.max(bx1, x); by0 = Math.min(by0, y); by1 = Math.max(by1, y);
  }
  const bounds = { left: bx0, top: by0, width: bx1 - bx0 + 1, height: by1 - by0 + 1 };
  return { width: w, height: h, left: x0, top: y0, screenWidth: x1 - x0 + 1, screenHeight: y1 - y0 + 1, mask: grown, bounds };
}

async function composite(bezelFile, area, screenshotFile, outBase, widths) {
  const { width, height, left, top, screenWidth, screenHeight, mask } = area;
  const screen = await sharp(screenshotFile).resize(screenWidth, screenHeight, { fit: 'fill' }).png().toBuffer();
  const layer = await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: screen, left, top }])
    .raw()
    .toBuffer();
  for (let i = 0; i < width * height; i++) layer[i * 4 + 3] = mask[i] ? layer[i * 4 + 3] : 0;
  const composited = await sharp(layer, { raw: { width, height, channels: 4 } })
    .composite([{ input: bezelFile }])
    .png()
    .toBuffer();
  const mockup = await sharp(composited).extract(area.bounds).png().toBuffer();
  for (const w of widths) {
    await sharp(mockup).resize({ width: w }).webp({ quality: 86, alphaQuality: 90, effort: 6 }).toFile(`${outBase}-${w}.webp`);
  }
}

if (bezelDir) {
  for (const lang of languages) await mkdir(path.join(devicesOut, lang), { recursive: true });
  // Devices whose bezel isn't mounted keep their existing mockups and manifest entry.
  const manifestFile = path.join(root, 'content/devices.json');
  const previous = existsSync(manifestFile) ? JSON.parse(await readFile(manifestFile, 'utf8')) : {};
  const manifest = Object.fromEntries(Object.entries(previous).filter(([kind]) => kind in devices));
  for (const [kind, device] of Object.entries(devices)) {
    const bezelFile = path.join(bezelDir, device.bezel);
    if (!existsSync(bezelFile)) {
      console.log(`${kind}: bezel not found in BEZELS — kept existing mockups.`);
      continue;
    }
    const area = await screenArea(bezelFile);
    manifest[kind] = { width: area.bounds.width, height: area.bounds.height, widths: device.widths };
    for (const lang of languages) {
      const screens = lang === languages[0] ? screensIn : path.join(screensIn, lang);
      for (const name of device.screens) {
        for (const scheme of device.schemes ?? ['light', 'dark']) {
          const suffix = scheme ? `-${scheme}` : '';
          await composite(bezelFile, area, path.join(screens, `${name}${suffix}.png`), path.join(devicesOut, lang, `${name}${suffix}`), device.widths);
        }
      }
    }
    console.log(`${kind}: ${device.screens.length} mockups per language, screen ${area.screenWidth}×${area.screenHeight} at ${area.left},${area.top}`);
  }
  await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
} else {
  console.log('BEZELS not set — kept the existing device mockups in public/images/devices.');
}
