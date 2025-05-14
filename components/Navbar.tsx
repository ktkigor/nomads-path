'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleLanguage = () => setLanguage(language === 'en' ? 'mn' : 'en');

  const makeLink = (href: string, label: string) => (
    <Link href={href} className="hover:text-gray-600 transition">
      {label}
    </Link>
  );

  return (
    <nav className="bg-white h-20 px-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="h-full w-[160px] relative pl-4 flex-shrink-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Nomads Path Logo"
            fill
            className="object-cover h-full w-full"
            priority
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 text-black font-medium pr-6 items-center">
        {makeLink('/', t.home)}
        {makeLink('/upcoming', t.upcoming)}
        {makeLink('/places', t.places)}
        {makeLink('/contact', t.contact)}
        <button onClick={toggleLanguage} className="text-sm px-2 py-1 border rounded">
          {language === 'en' ? 'MN' : 'EN'}
        </button>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden text-black z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>{t.home}</Link>
          <Link href="/upcoming" onClick={() => setMenuOpen(false)}>{t.upcoming}</Link>
          <Link href="/places" onClick={() => setMenuOpen(false)}>{t.places}</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link>
          <button onClick={toggleLanguage} className="text-sm px-2 py-1 border rounded">
            {language === 'en' ? 'MN' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
