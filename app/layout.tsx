import "../public/css/styles.css";
import "@/styles/overrides.scss"
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
import Footer1 from '@/components/footers/Footer1';
import MouseTracker from '@/components/animation/MouseTracker';
import { MetaDescription, MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title: MetaTitle,
  description: MetaDescription,
};

const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="no-touch">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body>
        <MouseTracker />
        <ClientLayout>{children}</ClientLayout>
        <Footer1 />
      </body>
    </html>
  );
}
