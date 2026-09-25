# Breathia website

Marketing site for [Breathia](https://github.com/LinkAndreas/Breathia) in English, German, French and
Spanish, with its Privacy Policy and Terms of Use. Static HTML rendered at build time, built with Vite.

```bash
npm install
npm run dev       # local development (re-renders when content or templates change)
npm run build     # production build → dist/
npm run preview   # serve dist/
```

## Pages

| Path | Page |
|---|---|
| `/` · `/de/` · `/fr/` · `/es/` | Landing page (English at the root) |
| `/privacy/<lang>/` | Privacy Policy |
| `/termsofuse/<lang>/` | Terms of Use (the app's custom EULA) |
| `/privacy/` · `/termsofuse/` | Forward to the visitor's language |

The legal paths match the links built into the app (`SupportLinks.swift`). On a first visit, the English
root page forwards visitors whose browser prefers German, French or Spanish; choosing a language in the
switcher is remembered and turns this off.

## Where things live

| Path | What |
|---|---|
| `content/locales/<lang>.js` | All page copy per language — keys must match `en.js` (checked at build) |
| `content/legal/<doc>.<lang>.html` | Privacy Policy and Terms of Use text |
| `content/site.js` | URLs, App Store ID, developer details, legal effective date, languages |
| `content/app.js` | Techniques, categories and UI strings **generated from the app** (`npm run sync`) |
| `scripts/templates/` | Page templates (layout, home, legal) |
| `scripts/render.mjs` | Renders all pages into `site/` and writes `public/sitemap.xml` |
| `site/src/` | Client code: styles, nav/reveal/filters (`main.js`), breathing circle (`pacer.js`) |
| `public/` | Static files: images, icons, OG image, robots.txt |

`site/**/*.html` and `public/sitemap.xml` are generated — edit `content/` or the templates instead.

## Keeping in sync with the app

```bash
BREATHIA_APP=../../Swift/Breathia npm run sync     # technique catalog + translations
BREATHIA_APP=../../Swift/Breathia npm run images   # icons, OG image
```

### Device mockups

The screenshots on the site are composited into Apple's official product bezels
(iPhone 17 Pro Max, Apple Watch Series 11 46 mm, MacBook Neo) by
`scripts/build-images.mjs`, which finds each bezel's screen cutout and fits the screenshot to it.
The finished mockups live in `public/images/devices/`.

The bezels are Apple Design Resources, licensed for mock-ups only: they must not be extracted or
redistributed on their own, so they are **not** in this repository. To regenerate the mockups
(e.g. after new screenshots), download the bezel DMGs from
[developer.apple.com/design/resources](https://developer.apple.com/design/resources/), mount them,
and run:

```bash
BEZELS=/Volumes BREATHIA_APP=../../Swift/Breathia npm run images
```

## Adding a language

Add it to `languages` in `content/site.js`, create `content/locales/<code>.js` and
`content/legal/{privacy,terms}.<code>.html`, and add the code to `languages` in
`scripts/sync-app-content.mjs` (the app must ship that translation).

## Deploying

### Docker (Hostinger VPS or any Linux server)

The image builds the site and serves it from an unprivileged nginx with its default configuration.
`compose.yaml` adds [Caddy](https://caddyserver.com) in front for automatic HTTPS via Let's Encrypt,
compression, caching and security headers (`docker/Caddyfile`).

1. Point your domain's DNS **A** (and **AAAA**) record — and `www.` if you want it — to the VPS IP.
2. On the VPS (Docker and the Compose plugin installed), copy or clone this project, then:

   ```bash
   cp .env.example .env    # set DOMAIN and SITE_URL
   docker compose up -d --build
   ```

3. Open ports 80 and 443 in the VPS firewall (Hostinger hPanel › VPS › Firewall, and `ufw` if used).

Caddy requests the certificate on first start. To update the site, pull the new version and run
`docker compose up -d --build` again. Logs: `docker compose logs -f`.

Already running a reverse proxy (Traefik, Nginx Proxy Manager, another Caddy)? Remove the `caddy`
service from `compose.yaml`, point the proxy at the `web` container, port `8080`, and carry over the
headers and the trailing-slash redirect from `docker/Caddyfile`.

Build on the VPS itself: it is `linux/amd64`, while a Mac builds `arm64` images by default.

### Anywhere else

`npm run build` outputs a static site in `dist/` with relative asset URLs, so it can be served from
any host and path. `SITE_URL` sets the canonical URL used in links, the sitemap and `robots.txt`
(default `https://www.linkandreas.de/breathia/`, see `content/site.js`).

## License

The code is available under the [MIT License](LICENSE). The Breathia name, icon and screenshots, the
Apple device mockups and the App Store badges are excluded — see [NOTICE.md](NOTICE.md).
