import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num:   "01",
    title: "Weddings",
    desc:  "A cinematic documentation of your love. We tell your wedding story with honesty, warmth, and a refined editorial eye — from the quiet morning preparations to the final dance.",
    link:  "/weddings",
    img:   "/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg",
    imgPos:"object-top",
    aspect:"aspect-[3/4]",
  },
  {
    num:   "02",
    title: "Pre-Weddings",
    desc:  "Before you say I do, we capture your love story in its most relaxed, natural form. Scenic locations, golden-hour light, and moments that feel entirely your own.",
    link:  "/pre-weddings",
    img:   "/images/tho_tz._photography_official_1774053035_3857358454076396155_5469771706.jpg",
    imgPos:"object-[center_30%]",
    aspect:"aspect-[16/9] md:aspect-[21/9]",
  },
  {
    num:   "03",
    title: "Maternity",
    desc:  "Welcoming new life is one of the most profound moments a family experiences. We document this journey with sensitivity, artistry, and deep respect.",
    link:  "/maternity-newborn",
    img:   "/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg",
    imgPos:"object-center",
    aspect:"aspect-[4/5]",
  },
  {
    num:   "04",
    title: "Portraits",
    desc:  "Timeless portraits for you and your loved ones. Whether a personal editorial session or a family portrait, we create images you will treasure for a lifetime.",
    link:  "/family-portraits",
    img:   "/images/tho_tz._photography_official_1790051423_3991559943309988215_5469771706.jpg",
    imgPos:"object-top",
    aspect:"aspect-[4/5]",
  },
];

export default function Services() {
  return (
    <div className="bg-brand-off-white text-brand-black">

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-36 md:pt-48 pb-16 md:pb-20 px-6 md:px-14 border-b border-brand-light-gray/60">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">
          What We Do
        </span>
        <h1 className="font-serif text-[clamp(3.8rem,10vw,8rem)] font-light tracking-tight text-brand-charcoal leading-none">
          Our Services.
        </h1>
        <p className="mt-8 text-brand-gray text-sm md:text-base leading-relaxed max-w-xl font-light">
          From quiet beginnings to unforgettable celebrations — we bring a cinematic, editorial eye to every story we are trusted to tell.
        </p>
      </div>

      {/* ── Services ───────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 md:py-32 flex flex-col gap-28 md:gap-44">

        {/* 01 — Weddings: portrait image LEFT, text RIGHT */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          <div className={`w-full md:w-5/12 relative ${services[0].aspect} overflow-hidden bg-brand-light-gray group flex-shrink-0`}>
            <Image src={services[0].img} alt={services[0].title} fill sizes="(max-width:768px) 100vw, 42vw" className={`object-cover ${services[0].imgPos} transition-transform duration-[2.5s] group-hover:scale-105`} />
          </div>
          <div className="w-full md:w-7/12 md:pt-16">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium mb-5">{services[0].num}</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-charcoal mb-6 leading-tight">{services[0].title}</h2>
            <p className="text-brand-gray leading-relaxed text-sm md:text-base mb-10 max-w-md">{services[0].desc}</p>
            <Link href={services[0].link} className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300">
              Explore {services[0].title}
            </Link>
          </div>
        </div>

        {/* 02 — Pre-Weddings: full-width cinematic with floating text card */}
        <div className="flex flex-col items-start gap-0 relative">
          <div className={`w-full relative ${services[1].aspect} overflow-hidden bg-brand-light-gray group`}>
            <Image src={services[1].img} alt={services[1].title} fill sizes="100vw" className={`object-cover ${services[1].imgPos} transition-transform duration-[2.5s] group-hover:scale-105`} />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 to-transparent z-10" />
            {/* Floating text — inside the image on desktop */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-14 z-20 max-w-xs">
              <span className="block text-[10px] uppercase tracking-[0.35em] text-white/60 font-medium mb-3">{services[1].num}</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white mb-4 leading-tight">{services[1].title}</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 hidden md:block">{services[1].desc}</p>
              <Link href={services[1].link} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-white border-b border-white/50 pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300">
                Explore
              </Link>
            </div>
          </div>
          {/* Mobile-only description below the image */}
          <p className="md:hidden text-brand-gray text-sm leading-relaxed mt-6 mb-4">{services[1].desc}</p>
          <Link href={services[1].link} className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 mt-2">
            Explore {services[1].title}
          </Link>
        </div>

        {/* 03 & 04 — Maternity + Portraits: split grid, staggered vertically */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {[services[2], services[3]].map((s, i) => (
            <div key={s.num} className={`flex flex-col ${i === 1 ? "md:mt-28" : ""}`}>
              <div className={`w-full relative ${s.aspect} overflow-hidden bg-brand-light-gray group mb-8`}>
                <Image src={s.img} alt={s.title} fill sizes="(max-width:768px) 100vw, 50vw" className={`object-cover ${s.imgPos} transition-transform duration-[2.5s] group-hover:scale-105`} />
              </div>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium mb-4">{s.num}</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-brand-charcoal mb-4 leading-tight">{s.title}</h2>
              <p className="text-brand-gray leading-relaxed text-sm mb-8 max-w-sm">{s.desc}</p>
              <Link href={s.link} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 w-fit hover:text-brand-pink hover:border-brand-pink transition-all duration-300">
                Explore {s.title}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
