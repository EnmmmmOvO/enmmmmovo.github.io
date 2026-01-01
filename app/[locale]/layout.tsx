// app/layout.tsx
import ClientLayout from "@/components/layout/ClientLayout";
import Footer from "@/components/footers/Footer";
import MouseTracker from "@/components/animation/MouseTracker";
import { ReactNode } from 'react';

export default async function LocaleLayout({
  children
}: {
  children: ReactNode;
}) {

  return (
    <>
      <MouseTracker />
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </>
  );
}
