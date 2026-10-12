// app/not-found.tsx
// Next includes this component in every page render, which shares one next-intl request locale.
'use client';

import '@/public/css/styles.css'
import '@/styles/overrides.scss'
import { NextIntlClientProvider } from 'next-intl';
import NotFoundPage from '@/components/common/NotFound';
import InitScroll from '@/components/scroll/InitScroll';
import { routing } from '@/i18n/routing';

// Exported as /404.html for paths outside /en and /zh.
export default function RootNotFound() {
  return (
    <html className="no-touch" lang={routing.defaultLocale}>
      <body>
        <title>Page Not Found | WillCode</title>
        <NextIntlClientProvider locale={routing.defaultLocale}>
          <NotFoundPage />
          <InitScroll />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
