"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * The Header component contains the primary navigation for the marketing site.
 * It is responsive: on small screens the navigation collapses into a
 * hamburger menu. The links correspond to anchors within the one-page
 * marketing layout. A prominent call‑to‑action button directs users to
 * the application forms.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="bg-navy text-grayLight shadow-sm sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2">
          <Image
            src="/brand/qx8-mark.svg"
            alt="QX8 mark"
            width={36}
            height={36}
            priority
          />
          <span className="font-heading text-xl sm:text-2xl">QuantXlr8</span>
        </Link>
        <button
          className="sm:hidden focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {open ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <ul
          className={`sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 right-0 bg-navy sm:bg-transparent transition-all duration-200 ${
            open ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a
              href="#startups"
              className="block px-4 py-2 hover:text-electric focus:text-electric focus:outline-none"
              onClick={() => setOpen(false)}
            >
              Startups
            </a>
          </li>
          <li>
            <a
              href="#corporates"
              className="block px-4 py-2 hover:text-electric focus:text-electric focus:outline-none"
              onClick={() => setOpen(false)}
            >
              Corporates
            </a>
          </li>
          <li>
            <a
              href="#investors"
              className="block px-4 py-2 hover:text-electric focus:text-electric focus:outline-none"
              onClick={() => setOpen(false)}
            >
              Investors
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="block px-4 py-2 hover:text-electric focus:text-electric focus:outline-none"
              onClick={() => setOpen(false)}
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block px-4 py-2 hover:text-electric focus:text-electric focus:outline-none"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li className="px-4 py-2">
            <a
              href="#apply"
              className="inline-block bg-electric text-navy rounded-md px-3 py-2 text-center font-semibold hover:bg-teal focus:bg-teal focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              Apply
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}