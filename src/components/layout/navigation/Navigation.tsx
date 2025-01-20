'use client';

import LocaleLink from "@/components/base/link/LocaleLink";
import { useTranslation } from '@/components/base/translation/TranslationProvider';
import { NavigationProps } from "./types";
import "./Navigation.css";

function Navigation({
  isOpen,
  onClose = () => console.warn('onClose handler is not provided'),
  className = ''
}: NavigationProps) {
  const { t } = useTranslation();

  return (
    <nav className={`mobile-menu ${isOpen ? 'open' : ''} ${className}`.trim()}>
      <ul>
        <li>
          <LocaleLink href="/" className="nav-link" onClick={onClose}>
            {t.navigation.home}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink href="/getting-there" className="nav-link" onClick={onClose}>
            {t.navigation.gettingThere}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink href="/things-to-do-in-calabria" className="nav-link" onClick={onClose}>
            {t.navigation.thingsToDo}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink href="/rsvp" className="nav-link" onClick={onClose}>
            {t.navigation.rsvp}
          </LocaleLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;