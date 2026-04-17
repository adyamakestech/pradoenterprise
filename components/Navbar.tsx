// components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
              P
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-800">
              Prado <span className="text-amber-500">Enterprise</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-600 hover:text-amber-500 transition-colors font-medium">Beranda</Link>
            <Link href="/tentang-kami" className="text-slate-600 hover:text-amber-500 transition-colors font-medium">Tentang Kami</Link>
            <Link href="/layanan" className="text-slate-600 hover:text-amber-500 transition-colors font-medium">Layanan</Link>
            <Link href="/proyek" className="text-slate-600 hover:text-amber-500 transition-colors font-medium">Proyek</Link>
            <Link href="/hubungi" className="bg-amber-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg">
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-md">Beranda</Link>
            <Link href="/tentang-kami" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-md">Tentang Kami</Link>
            <Link href="/layanan" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-md">Layanan</Link>
            <Link href="/proyek" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-md">Proyek</Link>
            <Link href="/hubungi" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-amber-600 font-bold hover:bg-slate-50 rounded-md">Hubungi Kami</Link>
          </div>
        </div>
      )}
    </nav>
  );
}