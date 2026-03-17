'use client';

import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 animate-fade-in">
      <a
        href="#qualify-form"
        className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-base py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
      >
        See If Your Child Qualifies
      </a>
    </div>
  );
}
