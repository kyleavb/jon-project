'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-800/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm sm:text-lg">V</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-display font-semibold text-sm sm:text-base tracking-wide">
                  Virtual Prep Academy
                </div>
                <div className="text-teal-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
                  Oregon
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/landing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Get Started
            </Link>
            <a href="tel:+5413042202" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              541.304.2202
            </a>
            <a
              href="#qualify-form"
              className="bg-amber-500 hover:bg-amber-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/25"
            >
              See If Your Child Qualifies
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-lg border-t border-white/10 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white text-lg font-medium">
              Home
            </Link>
            <Link href="/landing" onClick={() => setMobileOpen(false)} className="block text-white text-lg font-medium">
              Get Started
            </Link>
            <a href="tel:+5413042202" className="block text-teal-400 text-lg font-medium">
              541.304.2202
            </a>
            <a
              href="#qualify-form"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-amber-500 text-navy-900 font-semibold text-lg px-6 py-3 rounded-lg"
            >
              See If Your Child Qualifies
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
