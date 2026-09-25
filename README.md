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

### Hostinger VPS (GitHub Actions + Docker)

The image builds the site and serves it with [Caddy](https://caddyserver.com) on port **32772**:
compression, caching and security headers are configured in `docker/Caddyfile`. HTTPS and the domain
come from the reverse proxy on the VPS — the same setup as TerraDelta.

1. **Create a VPS** in hPanel with the **Docker / Ubuntu** template (or install Docker:
   `curl -fsSL https://get.docker.com | sh`).
2. **Automate deployment via GitHub Actions.** In the repository, go to
   **Settings › Secrets and variables › Actions** and add:
   - Secrets: `HOSTINGER_HOST` (VPS IP address), `HOSTINGER_USERNAME` (SSH user, e.g. `root`),
     `HOSTINGER_SSH_KEY` (private SSH key)
   - Variable: `SITE_URL` — the public URL with a trailing slash, e.g. `https://breathia.example.com/`

   Every push to `main` (each release) runs `.github/workflows/deploy.yml`: it copies the project
   to `~/breathia-website` and runs `docker compose up -d --build`. It can also be started by hand
   under **Actions › Deploy to Hostinger VPS › Run workflow**.
3. **Point your domain and add HTTPS.** Map the domain to `127.0.0.1:32772` in your reverse proxy
   (Hostinger's panel, or Nginx + Certbot). Minimal Nginx site:

   ```nginx
   server {
     server_name breathia.example.com;
     location / {
       proxy_pass http://127.0.0.1:32772;
       proxy_set_header Host $host;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }
   ```

   Then `sudo certbot --nginx -d breathia.example.com` for the certificate.

To run it locally: `docker compose up -d --build` → <http://localhost:32772>.

### Anywhere else

`npm run build` outputs a static site in `dist/` with relative asset URLs, so it can be served from
any host and path. `SITE_URL` sets the canonical URL used in links, the sitemap and `robots.txt`
(default `https://www.linkandreas.de/breathia/`, see `content/site.js`).

## License

The code is available under the [MIT License](LICENSE). The Breathia name, icon and screenshots, the
Apple device mockups and the App Store badges are excluded — see [NOTICE.md](NOTICE.md).
