'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute w-full top-0 left-0 z-[60] flex justify-between items-center px-4 md:px-16 py-6 md:py-8 text-white mix-blend-difference">
        <div className="font-serif text-2xl md:text-3xl tracking-wide z-[60]">
          <Link href="/" onClick={() => setIsOpen(false)}>THOTZ</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xs font-medium tracking-[0.2em] uppercase">
          <Link href="/portfolio" className="hover:opacity-70 transition-opacity">Portfolio</Link>
          <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 space-y-1.5 z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black text-brand-off-white z-50 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-2xl font-serif tracking-widest uppercase">
          <Link href="/portfolio" className="hover:text-brand-light-gray transition-colors py-2 px-4" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/services" className="hover:text-brand-light-gray transition-colors py-2 px-4" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="hover:text-brand-light-gray transition-colors py-2 px-4" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-brand-light-gray transition-colors py-2 px-4" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
