import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-brand-off-white text-brand-black">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — CINEMATIC HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-brand-black">
        <Image
          src="/images/tho_tz._photography_official_1774762943_3863313633463927844_5469771706.jpg"
          alt="Thotz Photography — Auckland wedding and portrait photographer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-75 scale-105"
          style={{ animation: "scaleIn 8s cubic-bezier(0.22,1,0.36,1) forwards" }}
        />
        {/* gradient overlay — bottom heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />

        {/* content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-start px-6 md:px-14 pb-16 md:pb-24 safe-bottom">
          <p className="anim-fade-up text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/60 mb-5">
            Auckland, New Zealand
          </p>
          <h1 className="anim-fade-up delay-100 font-serif text-[clamp(3.8rem,11vw,8.5rem)] font-light leading-none tracking-tight text-white mb-6">
            Thotz.
          </h1>
          <p className="anim-fade-up delay-200 font-serif italic text-[clamp(1rem,2.5vw,1.6rem)] font-light text-white/70 mb-10 max-w-xs md:max-w-md">
            Photography &amp; Videography
          </p>
          <Link
            href="/portfolio"
            className="anim-fade-up delay-300 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-semibold text-white border-b border-white/40 pb-1 hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
          >
            View the Work
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth="1" className="translate-y-px">
              <path d="M0 4h18M14 1l4 3-4 3"/>
            </svg>
          </Link>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-40 anim-fade-up delay-500">
          <div className="w-px h-10 bg-white animate-pulse" />
          <span className="text-white text-[9px] uppercase tracking-widest rotate-90 origin-center translate-x-4">Scroll</span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 — EDITORIAL INTRODUCTION
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full py-28 md:py-40 px-6 md:px-14 overflow-hidden border-b border-brand-light-gray/60">
        {/* ghost background word */}
        <span aria-hidden="true" className="absolute top-0 right-0 font-serif font-bold text-[22vw] text-brand-black/[0.03] uppercase select-none pointer-events-none leading-none tracking-tighter">
          Vision
        </span>
        <div className="max-w-5xl mx-auto md:ml-[12%] relative z-10">
          <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-8 font-medium">
            01 &mdash; Philosophy
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.15] text-brand-charcoal text-balance mb-10">
            Photography is not a grid of images.<br className="hidden md:inline"/>
            It is a collection of memories,<br className="hidden md:inline"/>
            carefully woven to tell your story.
          </h2>
          <div className="w-12 h-px bg-brand-charcoal/30" />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 — FEATURED EDITORIAL (asymmetric)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-brand-warm-white border-b border-brand-light-gray/60">
        <span aria-hidden="true" className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 font-serif font-bold text-[14vw] text-brand-black/[0.025] uppercase select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap">
          Featured
        </span>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative z-10">

          {/* Left — stacked images */}
          <div className="w-full lg:w-[55%] relative flex-shrink-0">
            {/* Primary landscape */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-brand-light-gray group">
              <Image
                src="/images/tho_tz._photography_official_1774762943_3863313668176004120_5469771706.jpg"
                alt="Featured photography work"
                fill
                sizes="(max-width:1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
            {/* Offset portrait — pulled down and right */}
            <div className="absolute -bottom-10 right-4 md:-bottom-14 md:-right-10 w-[38%] md:w-[42%] aspect-[3/4] overflow-hidden bg-brand-light-gray shadow-2xl border-[6px] border-brand-warm-white group z-10">
              <Image
                src="/images/tho_tz._photography_official_1774762943_3863313738128561366_5469771706.jpg"
                alt="Featured portrait"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right — text, pulled down to align with primary image base */}
          <div className="w-full lg:w-[45%] lg:pt-24 pt-14">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-6 font-medium">
              02 &mdash; Journal
            </span>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-light leading-tight text-brand-charcoal text-balance mb-6">
              Moments that linger.
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Every session is a collaboration. We find the quiet, human moments — a glance, a laugh, a tender pause — and build a visual story around them.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 — SERVICES PREVIEW (vertical editorial)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full py-28 md:py-40 px-6 md:px-14 bg-brand-off-white border-b border-brand-light-gray/60 overflow-hidden">
        <span aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[18vw] text-brand-black/[0.025] uppercase select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap">
          Curated
        </span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* heading row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-5 font-medium">03 &mdash; Services</span>
              <h2 className="font-serif text-[clamp(2.8rem,7vw,5rem)] font-light text-brand-charcoal leading-none text-balance">
                Curated<br/> Offerings.
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300">
              View All Services
            </Link>
          </div>

          {/* Two feature services — offset grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Weddings */}
            <Link href="/weddings" className="group flex flex-col">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light-gray mb-7">
                <Image
                  src="/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg"
                  alt="Wedding photography"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gray mb-2">01</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mb-2">Weddings</h3>
              <p className="text-[12px] uppercase tracking-[0.18em] text-brand-gray">A cinematic documentation of your love.</p>
            </Link>

            {/* Pre-Weddings — offset down on desktop */}
            <Link href="/pre-weddings" className="group flex flex-col md:mt-24">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light-gray mb-7">
                <Image
                  src="/images/tho_tz._photography_official_1774053035_3857358454076396155_5469771706.jpg"
                  alt="Pre-wedding photography"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover object-[center_30%] transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gray mb-2">02</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mb-2">Pre-Weddings</h3>
              <p className="text-[12px] uppercase tracking-[0.18em] text-brand-gray">Beautiful moments before you say I do.</p>
            </Link>
          </div>

          {/* mobile — view all */}
          <div className="mt-16 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 — DARK CINEMATIC STATEMENT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full bg-brand-black text-brand-off-white py-28 md:py-44 px-6 md:px-14 overflow-hidden">
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-serif font-bold text-[18vw] text-white/[0.025] uppercase select-none pointer-events-none leading-none tracking-tighter">
          Shadows
        </span>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-10 font-medium">04 &mdash; Aesthetics</span>
          <h2 className="font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[1.1] text-balance mb-8">
            Every frame should feel like a memory.
          </h2>
          <p className="text-sm font-light leading-loose text-brand-gray max-w-xl mx-auto mb-16 text-balance">
            We embrace contrast, dramatic light, and sophisticated stillness to elevate authentic moments into timeless visual stories.
          </p>
          {/* Full-bleed image */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-brand-charcoal group">
            <Image
              src="/images/tho_tz._photography_official_1776389503_3876958446876814290_5469771706.jpg"
              alt="Cinematic photography"
              fill
              sizes="100vw"
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s] ease-out"
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 — ABOUT TEASER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full py-28 md:py-40 px-6 md:px-14 bg-brand-warm-white border-t border-brand-light-gray/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
          <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-light-gray group flex-shrink-0">
            <Image
              src="/images/tho_tz._photography_official_1790051423_3991559943309988215_5469771706.jpg"
              alt="About Thotz Photography"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-[2.5s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-6 font-medium">05 &mdash; Studio</span>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light leading-tight text-brand-charcoal text-balance mb-7">
              The art of observation.
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-4 max-w-md">
              Based in Auckland, New Zealand, Thotz Photography specialises in capturing life's most precious and authentic moments. Our approach is deeply rooted in cinematic storytelling and editorial minimalism.
            </p>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-12 max-w-md">
              We believe photography should feel like a collection of memories — layered with emotion, dramatic light, and human connection.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300"
            >
              About Thotz
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
