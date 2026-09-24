import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-brand-off-white text-brand-black">

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-36 md:pt-48 pb-16 px-6 md:px-14 border-b border-brand-light-gray/60">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">
          The Studio
        </span>
        <h1 className="font-serif text-[clamp(3.8rem,10vw,8rem)] font-light tracking-tight text-brand-charcoal leading-none">
          About.
        </h1>
      </div>

      {/* ── Intro — asymmetric layout ───────────── */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-14 overflow-hidden bg-brand-off-white">
        {/* Ghost word */}
        <span aria-hidden="true" className="absolute top-0 right-0 font-serif font-bold text-[20vw] text-brand-black/[0.03] uppercase select-none pointer-events-none leading-none tracking-tighter">
          Story
        </span>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-28 relative z-10">

          {/* Image collage — left */}
          <div className="w-full lg:w-[48%] relative flex-shrink-0">
            {/* Primary portrait */}
            <div className="relative w-[80%] md:w-[75%] aspect-[3/4] overflow-hidden bg-brand-light-gray group">
              <Image
                src="/images/tho_tz._photography_official_1790051423_3991559943066680827_5469771706.jpg"
                alt="Thotz Photography — Auckland studio"
                fill
                sizes="(max-width:1024px) 80vw, 38vw"
                className="object-cover object-top transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
            {/* Secondary — offset bottom right */}
            <div className="absolute bottom-0 right-0 w-[52%] aspect-[4/5] overflow-hidden bg-brand-light-gray shadow-2xl border-[8px] border-brand-off-white group z-10">
              <Image
                src="/images/tho_tz._photography_official_1790051423_3991559944417273144_5469771706.jpg"
                alt="Authentic moment captured by Thotz"
                fill
                sizes="25vw"
                className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
            {/* Quote card */}
            <div className="absolute -bottom-8 left-4 md:left-0 w-52 md:w-60 bg-brand-black text-brand-off-white p-6 md:p-8 z-20 shadow-2xl">
              <p className="font-serif text-lg md:text-xl font-light italic leading-snug text-balance">
                "Luxury through restraint."
              </p>
            </div>
          </div>

          {/* Text — right */}
          <div className="w-full lg:w-[52%] pt-16 lg:pt-10">
            <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium mb-8">
              <span className="w-8 h-px bg-brand-gray inline-block" />
              About Us
            </span>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light leading-tight text-brand-charcoal text-balance mb-8">
              Thotz Photography
            </h2>
            <div className="space-y-5 text-brand-gray text-sm md:text-base leading-relaxed font-light max-w-lg">
              <p>
                Based in the beautiful city of Auckland, New Zealand, we specialise in capturing life's most precious and authentic moments. Our approach is deeply rooted in cinematic storytelling and editorial minimalism.
              </p>
              <p>
                We believe that photography can feel like a collection of memories rather than a grid of images. With a passion for dramatic light, sophisticated whitespace, and human connection, we strive to deliver a premium experience that you'll cherish for generations.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-brand-charcoal/30" />
              <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-brand-charcoal">Auckland, NZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy pillars ──────────────────── */}
      <section className="w-full py-20 md:py-28 px-6 md:px-14 bg-brand-warm-white border-t border-b border-brand-light-gray/60">
        <div className="max-w-[1400px] mx-auto">
          <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium mb-12">Our Approach</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { n: "01", title: "Authentic Moments",     body: "We look for the unscripted. The real." },
              { n: "02", title: "Cinematic Storytelling", body: "Every session is a visual narrative." },
              { n: "03", title: "Editorial Approach",    body: "Deliberate composition. Refined light." },
              { n: "04", title: "Personal Experience",   body: "Intimate, relaxed, and always intentional." },
            ].map((p) => (
              <div key={p.n} className="border-t border-brand-charcoal/20 pt-6">
                <span className="block text-[10px] uppercase tracking-widest text-brand-gray mb-4">{p.n}</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal mb-3">{p.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width image ────────────────────── */}
      <section className="w-full relative aspect-[4/3] md:aspect-[21/9] bg-brand-black overflow-hidden">
        <Image
          src="/images/tho_tz._photography_official_1774762943_3863313668176004120_5469771706.jpg"
          alt="Thotz Photography — our work"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent z-10" />
        <div className="absolute bottom-8 left-6 md:bottom-16 md:left-14 z-20">
          <p className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-light italic text-white text-balance max-w-lg">
            "Your story deserves to be remembered."
          </p>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────── */}
      <section className="py-24 md:py-32 px-6 text-center bg-brand-off-white">
        <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gray mb-6">Ready to Begin?</p>
        <h3 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-brand-charcoal mb-10 text-balance">
          Let's create together.
        </h3>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-brand-charcoal text-[11px] uppercase tracking-[0.25em] font-semibold px-10 py-4 hover:bg-brand-pink hover:text-brand-black hover:border-brand-pink transition-all duration-300 min-h-[44px]"
        >
          Inquire Now
        </Link>
      </section>
    </div>
  );
}
