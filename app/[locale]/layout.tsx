// app/[locale]/layout.tsx
import '@/public/css/styles.css'
import '@/styles/overrides.scss'
import ClientLayout from "@/components/layout/ClientLayout";
import Footer from "@/components/footers/Footer";
import MouseTracker from "@/components/animation/MouseTracker";
import ScrollToTop from '@/components/scroll/ScrollToTop';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { LOCALE_STORAGE_KEY, routing } from '@/i18n/routing';

const setColorSchemeScript = `
  (function() {
    try {
      var scheme = localStorage.getItem('color-scheme') || 'light';
      document.documentElement.setAttribute('color-scheme', scheme);
    } catch(e) {}
  })();
`;

// Full page loads always start at the top; ScrollToTop covers client-side navigation.
const manualScrollRestorationScript = `
  try { history.scrollRestoration = 'manual'; } catch(e) {}
`;

const saveLocaleScript = (locale: string) => `
  try { localStorage.setItem('${LOCALE_STORAGE_KEY}', '${locale}'); } catch(e) {}
`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html suppressHydrationWarning className="no-touch" lang={locale}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
        <script dangerouslySetInnerHTML={{ __html: manualScrollRestorationScript }} />
        <script dangerouslySetInnerHTML={{ __html: saveLocaleScript(locale) }} />
      </head>
      <body>
        <NextIntlClientProvider>
          <ScrollToTop />
          <MouseTracker />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
