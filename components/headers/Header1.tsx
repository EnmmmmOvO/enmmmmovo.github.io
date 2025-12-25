"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitcherButton from "./ColorSwitcher";
import Logo from '@/components/headers/Logo';

export default function Header1() {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`/`} className="mxd-logo">
          {/* logo icon */}
          <Logo className="mxd-logo__image" />
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />
      </div>
    </header>
  );
}
