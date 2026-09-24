"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Scroll-reveal hook ─────────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Reveal wrapper ─────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Individual animated image tile ─────────────────────────────────── */
function Tile({
  src,
  alt,
  aspect,
  label,
  caption,
  delay = 0,
  objectPos = "object-center",
}: {
  src: string;
  alt: string;
  aspect: string;
  label: string;
  caption?: string;
  delay?: number;
  objectPos?: string;
}) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`group transition-all duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image container with clip-path reveal */}
      <div
        className={`relative w-full ${aspect} overflow-hidden bg-brand-light-gray`}
        style={{
          clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1.1s cubic-bezier(0.77,0,0.175,1)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 60vw"
          className={`object-cover ${objectPos} transition-transform duration-[3s] ease-out group-hover:scale-[1.04]`}
        />
        {/* Subtle dark hover overlay */}
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-700" />
      </div>
      {/* Caption */}
      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-brand-gray/70">
        <span>{label}</span>
        {caption && <span className="italic normal-case tracking-normal text-[10px] text-brand-gray/50">{caption}</span>}
      </div>
    </div>
  );
}

/* ── Horizontal scrolling strip ─────────────────────────────────────── */
function ScrollStrip({ images }: { images: { src: string; alt: string }[] }) {
  const { ref, visible } = useReveal(0.05);
  return (
    <div
      ref={ref}
      className={`w-full overflow-x-auto scrollbar-none transition-all duration-[1.2s] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex gap-4 md:gap-6 w-max pb-2">
        {images.map((img, i) => (
          <div key={i} className="relative h-[280px] md:h-[380px] w-[200px] md:w-[260px] flex-shrink-0 overflow-hidden bg-brand-light-gray group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="260px"
              className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-[1.06]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   PORTFOLIO PAGE
════════════════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  return (
    <div className="bg-brand-off-white text-brand-black">

      {/* ── Hero header ─────────────────────────── */}
      <Reveal className="pt-36 md:pt-48 pb-16 md:pb-24 px-6 md:px-14 border-b border-brand-light-gray/60">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">
          A Collection of Moments
        </span>
        <h1 className="font-serif text-[clamp(3.8rem,10vw,8rem)] font-light tracking-tight text-brand-charcoal leading-none">
          Portfolio.
        </h1>
      </Reveal>

      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 md:py-32 space-y-24 md:space-y-40">

        {/* ── Row 1: FULL-WIDTH cinematic ─────────── */}
        <Tile
          src="/images/tho_tz._photography_official_1774762943_3863313633463927844_5469771706.jpg"
          alt="Family lifestyle session"
          aspect="aspect-[16/9] md:aspect-[21/9]"
          label="01"
          caption="Family · Lifestyle"
          objectPos="object-center"
          delay={0}
        />

        {/* ── Row 2: Split asymmetric ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 md:mt-16">
            <Tile
              src="/images/tho_tz._photography_official_1782226386_3925921841183018457_5469771706.jpg"
              alt="Family portrait"
              aspect="aspect-[3/4]"
              label="02"
              caption="Portraits"
              delay={0}
            />
          </div>
          <div className="md:col-span-7">
            <Tile
              src="/images/tho_tz._photography_official_1774762943_3863313668176004120_5469771706.jpg"
              alt="Outdoor family session"
              aspect="aspect-[4/3]"
              label="03"
              caption="Family · Outdoor"
              delay={150}
            />
          </div>
        </div>

        {/* ── Editorial pull-quote ─────────────────── */}
        <Reveal delay={100}>
          <div className="relative py-12 md:py-16 text-center border-y border-brand-charcoal/10">
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-serif font-bold text-[14vw] text-brand-black/[0.025] uppercase select-none pointer-events-none leading-none tracking-tighter overflow-hidden">
              Moments
            </span>
            <p className="font-serif italic text-[clamp(1.4rem,3.5vw,2.8rem)] font-light text-brand-charcoal relative z-10 text-balance max-w-3xl mx-auto">
              "The art of visual storytelling."
            </p>
          </div>
        </Reveal>

        {/* ── Row 3: THREE-column portrait grid ────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            { src: "/images/tho_tz._photography_official_1782236217_3926003647500727227_5469771706.jpg", alt: "Family moment", label: "04", caption: "Family", delay: 0 },
            { src: "/images/tho_tz._photography_official_1782236217_3926003676063754173_5469771706.jpg", alt: "Intimate family portrait", label: "05", caption: "Family", delay: 120 },
            { src: "/images/tho_tz._photography_official_1782236217_3926003709853087070_5469771706.jpg", alt: "Lifestyle photography", label: "06", caption: "Lifestyle", delay: 240 },
          ].map((t) => (
            <Tile key={t.label} {...t} aspect="aspect-[4/5]" objectPos="object-center" />
          ))}
        </div>

        {/* ── Row 4: Landscape + Portrait offset ────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-8">
            <Tile
              src="/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg"
              alt="Maternity photography"
              aspect="aspect-[4/3] md:aspect-[16/10]"
              label="07"
              caption="Maternity"
              objectPos="object-center"
              delay={0}
            />
          </div>
          <div className="md:col-span-4 md:-mt-20">
            <Tile
              src="/images/tho_tz._photography_official_1790051423_3991559943309988215_5469771706.jpg"
              alt="Portrait session"
              aspect="aspect-[4/5]"
              label="08"
              caption="Portraits"
              objectPos="object-top"
              delay={180}
            />
          </div>
        </div>

        {/* ── Row 5: Horizontal scroll strip ─────────── */}
        <Reveal delay={0}>
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium">09 &mdash; Family Series</span>
          </div>
        </Reveal>
        <ScrollStrip
          images={[
            { src: "/images/tho_tz._photography_official_1774762943_3863313647263162798_5469771706.jpg", alt: "Family series 1" },
            { src: "/images/tho_tz._photography_official_1774762943_3863313649578469326_5469771706.jpg", alt: "Family series 2" },
            { src: "/images/tho_tz._photography_official_1774762943_3863313657816084683_5469771706.jpg", alt: "Family series 3" },
            { src: "/images/tho_tz._photography_official_1774762943_3863313678275875983_5469771706.jpg", alt: "Family series 4" },
            { src: "/images/tho_tz._photography_official_1774762943_3863313689273327053_5469771706.jpg", alt: "Family series 5" },
            { src: "/images/tho_tz._photography_official_1774762943_3863313696739178619_5469771706.jpg", alt: "Family series 6" },
          ]}
        />

        {/* ── Row 6: Pre-wedding couple ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Tile
            src="/images/tho_tz._photography_official_1774053035_3857358454076396155_5469771706.jpg"
            alt="Pre-wedding couple photography"
            aspect="aspect-[3/4]"
            label="10"
            caption="Pre-Wedding"
            objectPos="object-[center_30%]"
            delay={0}
          />
          <div className="flex flex-col gap-8 md:mt-24">
            <Tile
              src="/images/tho_tz._photography_official_1774053035_3857358464662793344_5469771706.jpg"
              alt="Pre-wedding detail"
              aspect="aspect-[4/3]"
              label="11"
              caption="Pre-Wedding"
              delay={150}
            />
            <Reveal delay={250}>
              <div className="bg-brand-black text-brand-off-white p-8 md:p-10">
                <p className="font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] font-light italic leading-snug text-balance">
                  "Every frame should<br/>feel like a memory."
                </p>
                <div className="mt-6 w-8 h-px bg-brand-off-white/30" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Row 7: Full-width closing image ─────────── */}
        <Tile
          src="/images/tho_tz._photography_official_1782226386_3925921892353500253_5469771706.jpg"
          alt="Family portrait closing image"
          aspect="aspect-[4/3] md:aspect-[21/9]"
          label="12"
          caption="Fin"
          objectPos="object-center"
          delay={0}
        />

      </div>

      {/* ── CTA ────────────────────────────────────── */}
      <Reveal>
        <div className="bg-brand-warm-white border-t border-brand-light-gray/60 py-20 md:py-28 px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-6">Ready to begin?</p>
          <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-brand-charcoal mb-10 text-balance">
            Let's create your story together.
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-brand-charcoal text-[11px] uppercase tracking-[0.25em] font-semibold px-10 py-4 hover:bg-brand-pink hover:text-brand-black hover:border-brand-pink transition-all duration-300 min-h-[44px]"
          >
            Inquire Now
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
