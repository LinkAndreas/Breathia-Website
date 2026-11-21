// Version history: every App Store release with its notes, from content/releases.js.
import { releases } from '../../content/releases.js';
import { renderDocument } from './layout.js';
import { languageName, languages, languageTag, rel, routes } from './util.js';

const anchor = (version) => `v${version.replaceAll('.', '-')}`;

export function renderVersions(lang, t, typeset) {
  const dir = routes.versions(lang);
  const month = new Intl.DateTimeFormat(languageTag(lang), { month: 'long', year: 'numeric', timeZone: 'UTC' });

  const others = languages
    .filter((code) => code !== lang)
    .map((code) => `<a href="${rel(dir, routes.versions(code))}" hreflang="${languageTag(code)}" lang="${languageTag(code)}" data-lang="${code}">${languageName(code)}</a>`)
    .join(' · ');

  const toc = releases
    .map(({ version }) => `<li><a href="#${anchor(version)}">${t.versions.version} ${version}</a></li>`)
    .join('\n              ');

  const entries = releases
    .map(({ version, date, notes }) => {
      const items = notes[lang].map((note) => `<li>${typeset(note)}</li>`).join('\n                ');
      return `
              <section class="release" aria-labelledby="${anchor(version)}">
                <h2 id="${anchor(version)}">${t.versions.version} ${version}</h2>
                <p class="legal__meta"><time datetime="${date}">${month.format(new Date(`${date}-01`))}</time></p>
                <ul>
                ${items}
                </ul>
              </section>`;
    })
    .join('\n');

  const content = `
      <article class="legal" aria-labelledby="legal-title">
        <div class="legal__inner container">
          <header class="legal__header">
            <p class="eyebrow">Breathia</p>
            <h1 class="legal__title" id="legal-title">${t.versions.title}</h1>
            <p class="legal__meta">${t.versions.lede}</p>
            <p class="legal__languages">${t.legal.otherLanguages}: ${others}</p>
          </header>

          <div class="legal__layout">
            <nav class="legal__toc" aria-labelledby="toc-title">
              <h2 class="legal__toc-title" id="toc-title">${t.legal.contents}</h2>
              <ol role="list">
              ${toc}
              </ol>
            </nav>
            <div class="legal__body">
${entries}
            </div>
          </div>
        </div>
      </article>`;

  return renderDocument({
    lang,
    t,
    page: 'versions',
    title: `${t.versions.title} — Breathia`,
    description: t.versions.description,
    content,
    bodyClass: 'page-legal',
  });
}
