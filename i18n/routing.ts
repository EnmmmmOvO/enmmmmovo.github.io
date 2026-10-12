import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en'
});

// localStorage key for the visitor's last locale, read by app/page.tsx.
export const LOCALE_STORAGE_KEY = 'locale';