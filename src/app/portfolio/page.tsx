import Image from "next/image";
import Link from "next/link";

// Carefully selected images from actual assets
const gallery = [
  {
    src: "/images/tho_tz._photography_official_1774762943_3863313633463927844_5469771706.jpg",
    alt: "Family portrait session",
    aspect: "aspect-[16/9] md:aspect-[21/9]",
    cols: "col-span-1 md:col-span-12",
    label: "01",
    caption: "Cinematic Overview",
    align: "justify-between",
  },
  {
    src: "/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg",
    alt: "Wedding photography",
    aspect: "aspect-[3/4]",
    cols: "col-span-1 md:col-span-5 md:mt-20",
    label: "02",
    caption: null,
    align: "justify-end",
  },
  {
    src: "/images/tho_tz._photography_official_1774053035_3857358454076396155_5469771706.jpg",
    alt: "Pre-wedding photography",
    aspect: "aspect-[4/3]",
    cols: "col-span-1 md:col-span-7",
    label: "03",
    caption: null,
    align: "justify-start",
  },
  {
    src: "/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg",
    alt: "Maternity photography",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
    cols: "col-span-1 md:col-span-8",
    label: "04",
    caption: null,
    align: "justify-end",
  },
  {
    src: "/images/tho_tz._photography_official_1790051423_3991559943309988215_5469771706.jpg",
    alt: "Portrait photography",
    aspect: "aspect-[4/5]",
    cols: "col-span-1 md:col-span-4 md:-mt-20",
    label: "05",
    caption: null,
    align: "justify-start",
  },
  {
    src: "/images/tho_tz._photography_official_1782226386_3925921841183018457_5469771706.jpg",
    alt: "Family lifestyle photography",
    aspect: "aspect-[4/3] md:aspect-[16/9]",
    cols: "col-span-1 md:col-span-10 md:col-start-2 mt-4",
    label: "06",
    caption: "Fin",
    align: "justify-between",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-brand-off-white text-brand-black">

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-36 md:pt-48 pb-16 md:pb-24 px-6 md:px-14 text-center border-b border-brand-light-gray/60">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">
          A Collection of Moments
        </span>
        <h1 className="font-serif text-[clamp(3.8rem,10vw,8rem)] font-light tracking-tight text-brand-charcoal leading-none">
          Portfolio.
        </h1>
      </div>

      {/* ── Editorial Gallery ───────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 md:gap-y-24">
          {gallery.map((item) => (
            <div key={item.label} className={item.cols}>
              {/* Image */}
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-brand-light-gray group`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 80vw"
                  className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  loading={item.label === "01" ? "eager" : "lazy"}
                />
              </div>
              {/* Caption row */}
              <div className={`mt-4 flex items-center text-[10px] uppercase tracking-widest text-brand-gray ${item.align}`}>
                <span>{item.label}</span>
                {item.caption && <span>{item.caption}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* editorial mid-quote */}
        <div className="my-20 md:my-32 text-center">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light italic text-brand-charcoal text-balance">
            "The art of visual storytelling."
          </h2>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────── */}
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
    </div>
  );
}
