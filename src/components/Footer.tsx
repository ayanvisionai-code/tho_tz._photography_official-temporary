import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-off-white overflow-hidden">
      {/* ── CTA block ──────────────────────────────────── */}
      <div className="relative px-6 md:px-16 pt-24 pb-20 md:pt-32 md:pb-28 text-center border-b border-white/10">
        {/* Ghost typography behind CTA */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-serif font-bold text-[18vw] text-white/[0.025] uppercase tracking-tighter select-none pointer-events-none leading-none overflow-hidden"
        >
          Timeless
        </span>

        <p className="relative font-serif text-[clamp(2.2rem,6vw,5rem)] font-light leading-tight mb-10 md:mb-14 text-balance">
          Let's create something<br className="hidden md:inline" /> timeless.
        </p>

        <Link
          href="/contact"
          className="relative inline-flex items-center justify-center border border-brand-off-white/60 text-[11px] uppercase tracking-[0.28em] font-semibold px-10 py-4 transition-all duration-500
            hover:bg-brand-pink hover:text-brand-black hover:border-brand-pink hover:shadow-[0_0_24px_rgba(242,217,217,0.35)]
            min-h-[44px]"
        >
          Inquire Now
        </Link>
      </div>

      {/* ── Info row ───────────────────────────────────── */}
      <div className="px-6 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-[11px] uppercase tracking-[0.18em] text-brand-gray">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-serif text-base tracking-widest text-brand-off-white mb-1">Thotz Photography</p>
          <p>Auckland, New Zealand</p>
        </div>

        {/* Contact */}
        <div className="text-center space-y-2">
          <a
            href="https://wa.me/64224618429"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-brand-pink transition-colors duration-300"
          >
            +64 22 461 8429
          </a>
          <a
            href="mailto:thotzphotography@gmail.com"
            className="block hover:text-brand-pink transition-colors duration-300"
          >
            thotzphotography@gmail.com
          </a>
        </div>

        {/* Social — text only, no icons */}
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="https://www.instagram.com/tho_tz._photography_official/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-pink-hover transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-pink-hover after:transition-all after:duration-300 hover:after:w-full"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/thotzphotography"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-pink-hover transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-pink-hover after:transition-all after:duration-300 hover:after:w-full"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* ── Copyright ──────────────────────────────────── */}
      <div className="px-6 md:px-16 pb-8 text-center md:text-left text-[10px] uppercase tracking-[0.2em] text-brand-gray/40">
        © {new Date().getFullYear()} Thotz Photography. All rights reserved.
      </div>
    </footer>
  );
}
