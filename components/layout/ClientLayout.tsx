"use client";

import MobileMenu from "@/components/headers/MobileMenu";
import Header from "@/components/headers/Header";
import InitScroll from "@/components/scroll/InitScroll";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <MobileMenu />
      <Header />
      {children}
      <InitScroll />
      <ScrollTop />
      <LenisSmoothScroll />
    </>
  );
}
