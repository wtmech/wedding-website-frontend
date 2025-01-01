'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from "@/components/layout/navigation/Navigation";
import { HeaderProps } from "./types";
import './Header.css';

function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${className}`.trim()}>
      {/* RSVP BUTTON */}
      <Link href="/rsvp" className="header-rsvp">
        RSVP
      </Link>

      {/* LOGO */}
      <div className="header-logo">
        <Link href="/">
          <span className="header-logo-letter b">B</span>
          <span className="header-logo-letter and">&</span>
          <span className="header-logo-letter k">K</span>
        </Link>
      </div>

      {/* DESKTOP NAV */}
      <nav className="header-nav">
        <Link href="/">Home</Link>
        <Link href="/getting-there">Getting There</Link>
        <Link href="/things-to-do-in-calabria">Things to Do</Link>
      </nav>

      {/* HAMBURGER MENU (MOBILE ONLY) */}
      <button
        className={`header-menu-button ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <Navigation isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;