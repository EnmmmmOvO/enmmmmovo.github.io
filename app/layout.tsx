// app/[locale]/layout.tsx
import '@/public/css/styles.css'
import '@/styles/overrides.scss'
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from 'react';
import { cookies } from 'next/dist/server/request/cookies';

const setColorSchemeScript = `
  (function() {
    try {
      var scheme = localStorage.getItem('color-scheme') || 'light';
      document.documentElement.setAttribute('color-scheme', scheme);
    } catch(e) {}
  })();
`;

export default async function LocaleLayout({
  children
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";

  return (
    <>
      <html suppressHydrationWarning className="no-touch" lang={locale}>
        <head>
          <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
        </head>
        <body>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
