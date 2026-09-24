"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services",  label: "Services"  },
  { href: "/about",     label: "About"     },
  { href: "/contact",   label: "Contact"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Main nav bar ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 safe-top
          ${scrolled
            ? "bg-brand-off-white/95 backdrop-blur-md border-b border-brand-light-gray/60 py-4"
            : "bg-transparent py-6 md:py-8"
          }
        `}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`font-serif text-xl md:text-2xl tracking-[0.18em] uppercase transition-colors duration-300
              ${scrolled ? "text-brand-black" : "text-white"}
            `}
          >
            Thotz
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                  after:bg-brand-pink-hover after:transition-all after:duration-300 hover:after:w-full
                  ${scrolled ? "text-brand-charcoal hover:text-brand-black" : "text-white/90 hover:text-white"}
                `}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 text-[11px] uppercase tracking-[0.22em] font-semibold border px-5 py-2.5 transition-all duration-300
                hover:bg-brand-pink hover:border-brand-pink hover:text-brand-black
                ${scrolled ? "border-brand-charcoal text-brand-charcoal" : "border-white text-white"}
              `}
            >
              Inquire
            </Link>
          </div>

          {/* Mobile burger — 44×44 tap target */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`md:hidden flex flex-col justify-center items-end gap-[5px] w-11 h-11 z-50 transition-colors duration-300
              ${scrolled || open ? "text-brand-black" : "text-white"}
            `}
          >
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center
                ${open ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"}
              `}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300
                ${open ? "w-0 opacity-0" : "w-4"}
              `}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center
                ${open ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"}
              `}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ───────────────────── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center bg-brand-black transition-all duration-500 ease-in-out safe-top safe-bottom
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Decorative number */}
        <span className="absolute top-24 left-8 font-serif text-[8rem] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
          Menu
        </span>

        <nav className="flex flex-col items-center gap-2 w-full px-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`group w-full text-center font-serif text-[clamp(2.5rem,8vw,4rem)] font-light text-brand-off-white py-4
                border-b border-white/10 transition-colors duration-300 hover:text-brand-pink
                anim-fade-up ${open ? "" : "opacity-0"}
              `}
              style={{ animationDelay: `${0.05 + i * 0.08}s` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-12 text-xs uppercase tracking-[0.3em] text-brand-gray border border-brand-gray/40 px-8 py-4 hover:text-brand-pink hover:border-brand-pink transition-all duration-300 anim-fade-up delay-400"
        >
          Start a Conversation
        </Link>

        <p className="absolute bottom-10 text-[10px] uppercase tracking-widest text-brand-gray/50">
          Auckland, New Zealand
        </p>
      </div>
    </>
  );
}
