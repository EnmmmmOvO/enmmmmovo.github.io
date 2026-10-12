"use client";

import { usePathname, useRouter } from "next/navigation";
import React from 'react';
import { LOCALE_STORAGE_KEY } from '@/i18n/routing';

export default function LanguageSwitchButton({}) {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/zh") ? "zh" : "en";

  const handleLanguageSwitch = () => {
    const nextLocale = currentLocale === "en" ? "zh" : "en";

    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "zh") segments.shift();

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {}
    router.push(`/${nextLocale}/${segments.join("/")}`);
    router.refresh();
  };

  return (
    <button
      id="color-switcher"
      className="mxd-color-switcher"
      type="button"
      role="switch"
      aria-label="language switch"
      aria-checked={currentLocale === "zh"}
      onClick={handleLanguageSwitch}
    >
      <i
        className="ph-bold ph-translate"
      />
    </button>
  );
}
