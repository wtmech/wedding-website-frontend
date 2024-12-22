'use client';

import Link from "next/link";
import { NavigationProps } from "./types";
import "./Navigation.css";

function Navigation({
  isOpen,
  onClose = () => console.warn('onClose handler is not provided'),
  className = ''
}: NavigationProps) {
  return (
    <nav className={`mobile-menu ${isOpen ? 'open' : ''} ${className}`.trim()}>
      <ul>
        <li>
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/getting-there" onClick={onClose}>
            Getting There/Lodging
          </Link>
        </li>
        <li>
          <Link href="/things-to-do-in-calabria" onClick={onClose}>
            Things to Do in Calabria
          </Link>
        </li>
        <li>
          <Link href="/invites" onClick={onClose}>
            Invites
          </Link>
        </li>
        <li>
          <Link href="/rsvp" onClick={onClose}>
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;