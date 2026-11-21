import { site } from '../../content/site.js';

export const languages = site.languages.map((l) => l.code);
export const defaultLanguage = languages[0];

/**
 * Site-relative output paths (directories, trailing slash) for each page.
 * Privacy and terms keep the /privacy/<lang> and /termsofuse/<lang> paths the app links to.
 * The legal notice (Impressum) lives at /imprint/<lang>.
 */
export const routes = {
  home: (lang) => (lang === defaultLanguage ? '' : `${lang}/`),
  privacy: (lang) => `privacy/${lang}/`,
  terms: (lang) => `termsofuse/${lang}/`,
  imprint: (lang) => `imprint/${lang}/`,
  versions: (lang) => `versions/${lang}/`,
};

/** A relative href from one page directory to another (or to a file/anchor). */
export function rel(fromDir, to) {
  const depth = fromDir.split('/').filter(Boolean).length;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  return prefix + to;
}

export const absolute = (path) => site.url + path;

export const escapeHtml = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** Replaces {name} placeholders. */
export const fill = (template, values) =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));

const language = (code) => site.languages.find((l) => l.code === code);
export const languageName = (code) => language(code).name;
export const ogLocale = (code) => language(code).locale;
/** BCP 47 tag for lang/hreflang attributes and Intl (the URL code may differ, e.g. pt-br → pt-BR). */
export const languageTag = (code) => language(code).tag;
/** Short label for the language switcher button, e.g. "PT" for pt-br. */
export const languageShort = (code) => code.split('-')[0].toUpperCase();

/**
 * Maps a browser language's primary subtag to a site language code (e.g. pt → pt-br, zh → zh),
 * for the client-side redirects. Use with browserLanguageScript().
 */
export const browserLanguageMap = Object.fromEntries(site.languages.map((l) => [l.tag.split('-')[0].toLowerCase(), l.code]));

/** Client JS expression: the visitor's preferred languages as site codes (unsupported ones as null). */
export const preferredLanguagesScript = () =>
  `(navigator.languages || [navigator.language]).map(function (l) { return ${JSON.stringify(browserLanguageMap)}[String(l).split('-')[0].toLowerCase()] || null; })`;
