// Site-wide settings used by the page templates (scripts/templates) and the renderer.
const appStoreId = '6812983709';

/** Canonical, absolute URL of the deployed site. Override with SITE_URL at build time. */
const siteUrl = (process.env.SITE_URL || 'https://breathia.linkandreas.de/').replace(/\/?$/, '/');

export const site = {
  /** Canonical, absolute URL of the deployed site, with a trailing slash. */
  url: siteUrl,
  appStoreId,
  appStoreUrl: `https://apps.apple.com/app/id${appStoreId}`,
  feedbackEmail: 'feedback@linkandreas.de',
  privacyEmail: 'privacy@linkandreas.de',

  /** The provider of the app, named in the legal pages. */
  developer: {
    name: 'Andreas Link',
    email: 'feedback@linkandreas.de',
    // Postal address for the contact blocks of the legal pages. Lines are rendered as given;
    // leave empty to omit (the build warns while it is missing).
    address: ['Schwarzwaldstr. 22', '76473 Iffezheim', 'Deutschland'],
  },

  /** Effective date of the legal pages (ISO). Update whenever their text changes. */
  legalEffectiveDate: '2026-11-21',

  /**
   * Languages, in switcher order. The first is the default at the site root.
   * `code` is the URL path segment (and the locale file name), `tag` the BCP 47 language tag
   * for lang/hreflang attributes, `locale` the Open Graph locale.
   */
  languages: [
    { code: 'en', tag: 'en', name: 'English', locale: 'en_US' },
    { code: 'de', tag: 'de', name: 'Deutsch', locale: 'de_DE' },
    { code: 'fr', tag: 'fr', name: 'Français', locale: 'fr_FR' },
    { code: 'es', tag: 'es', name: 'Español', locale: 'es_ES' },
    { code: 'it', tag: 'it', name: 'Italiano', locale: 'it_IT' },
    { code: 'pt-br', tag: 'pt-BR', name: 'Português (Brasil)', locale: 'pt_BR' },
    { code: 'nl', tag: 'nl', name: 'Nederlands', locale: 'nl_NL' },
    { code: 'ja', tag: 'ja', name: '日本語', locale: 'ja_JP' },
    { code: 'ko', tag: 'ko', name: '한국어', locale: 'ko_KR' },
    { code: 'zh', tag: 'zh-Hans', name: '简体中文', locale: 'zh_CN' },
    { code: 'ru', tag: 'ru', name: 'Русский', locale: 'ru_RU' },
  ],
};
