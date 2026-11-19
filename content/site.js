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
  legalEffectiveDate: '2026-11-19',

  /** Languages, in switcher order. The first is the default at the site root. */
  languages: [
    { code: 'en', name: 'English', locale: 'en_US' },
    { code: 'de', name: 'Deutsch', locale: 'de_DE' },
    { code: 'fr', name: 'Français', locale: 'fr_FR' },
    { code: 'es', name: 'Español', locale: 'es_ES' },
  ],
};
