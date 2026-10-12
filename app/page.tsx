// app/page.tsx
import { LOCALE_STORAGE_KEY, routing } from '@/i18n/routing';

// Redirects "/" to the saved locale, then the first supported browser language, then the default locale.
const redirectScript = `
  (function() {
    var locales = ${JSON.stringify(routing.locales)};
    var locale = null;
    try { locale = localStorage.getItem('${LOCALE_STORAGE_KEY}'); } catch(e) {}
    if (locales.indexOf(locale) === -1) {
      locale = '${routing.defaultLocale}';
      var langs = navigator.languages || [navigator.language];
      for (var i = 0; i < langs.length; i++) {
        var lang = String(langs[i] || '').toLowerCase().split('-')[0];
        if (locales.indexOf(lang) !== -1) { locale = lang; break; }
      }
    }
    location.replace('/' + locale);
  })();
`;

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=/${routing.defaultLocale}`} />
        </noscript>
      </head>
      <body />
    </html>
  );
}
