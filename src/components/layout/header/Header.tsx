'use client';

import { useState } from 'react';
import LocaleLink from '@/components/base/link/LocaleLink';
import Navigation from "@/components/layout/navigation/Navigation";
import LanguageSwitcher from "@/components/base/language-switcher/LanguageSwitcher";
import { useTranslation } from '@/components/base/translation/TranslationProvider';
import { HeaderProps } from "./types";
import './Header.css';

function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${className}`.trim()}>
      {/* RSVP BUTTON */}
      <LocaleLink href="/rsvp" className="header-rsvp">
        {t.navigation.rsvp}
      </LocaleLink>

      {/* LOGO */}
      <div className="header-logo">
        <LocaleLink href="/">
          <span className="header-logo-letter b">B</span>
          <span className="header-logo-letter and">&</span>
          <span className="header-logo-letter k">K</span>
        </LocaleLink>
      </div>

      {/* DESKTOP NAV */}
      <nav className="header-nav">
        <LocaleLink href="/">{t.navigation.home}</LocaleLink>
        <LocaleLink href="/getting-there">{t.navigation.gettingThere}</LocaleLink>
        <LocaleLink href="/things-to-do-in-calabria">{t.navigation.thingsToDo}</LocaleLink>
        <div className="desktop-only">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* MOBILE CONTROLS */}
      <div className="mobile-controls">
        <LanguageSwitcher />
        <button
          className={`header-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={t.navigation.menuButton}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <Navigation isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;