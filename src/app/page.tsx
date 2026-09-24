import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-brand-off-white text-brand-black">
      {/* Cinematic Hero */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end items-center pb-24 md:pb-32 bg-brand-black overflow-hidden">
        <Image 
          src="/images/tho_tz._photography_official_1761971443_3756011156600450166_5469771706.jpg" 
          alt="Cinematic Hero"
          fill
          sizes="100vw"
          className="object-cover opacity-70 object-[center_30%] scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent z-10" />
        <div className="z-20 text-center text-brand-off-white px-6 w-full max-w-5xl mx-auto flex flex-col items-center animate-fade-in">
          <h1 className="font-serif text-[clamp(4.5rem,12vw,9rem)] font-light mb-4 md:mb-6 tracking-tight drop-shadow-2xl leading-none">Thotz.</h1>
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] md:tracking-[0.4em] uppercase opacity-90 drop-shadow-md max-w-[250px] md:max-w-none text-balance leading-relaxed">
            An Immersive Visual Experience
          </p>
        </div>
      </section>

      {/* Intro (Light Editorial) */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-16 flex justify-center items-center overflow-hidden border-b border-brand-charcoal/10">
        <div className="absolute top-10 right-10 text-[10vw] font-serif font-bold text-brand-black/[0.03] uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
          Vision
        </div>
        <div className="max-w-4xl text-center relative z-10 animate-slide-up">
          <span className="text-xs uppercase tracking-widest text-brand-gray block mb-8">01 &mdash; Philosophy</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-snug md:leading-[1.1] mb-10 font-light text-balance text-brand-charcoal">
            "Photography is not just a grid of images. It is a collection of memories, carefully woven to tell your unique story."
          </h2>
          <p className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-brand-gray font-medium">
            Based in Auckland, New Zealand
          </p>
        </div>
      </section>

      {/* Featured Story (Asymmetrical Editorial Layout) */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 bg-brand-light-gray/30 border-b border-brand-charcoal/10 overflow-hidden">
        <div className="absolute -left-20 top-1/3 -rotate-90 origin-top-left text-[8vw] font-serif font-bold text-brand-black/[0.03] uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
          Featured
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="w-full md:w-7/12 relative h-[500px] md:h-[700px] flex items-center justify-center animate-slide-up">
            {/* Base Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[400px] md:h-[550px] z-10 overflow-hidden group">
              <Image 
                src="/images/tho_tz._photography_official_1765622241_3786636268248649943_5469771706.jpg" 
                alt="Featured Story 1" 
                fill 
                sizes="(max-width: 768px) 80vw, 45vw"
                className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
              />
            </div>
            {/* Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[300px] md:h-[450px] shadow-2xl z-20 border-[8px] border-brand-off-white transform translate-y-8 md:translate-y-16 -translate-x-4 overflow-hidden group">
              <Image 
                src="/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg" 
                alt="Featured Story 2" 
                fill 
                sizes="(max-width: 768px) 65vw, 35vw"
                className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="w-full md:w-5/12 text-left pt-16 md:pt-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">02 &mdash; Journal</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] mb-8 font-light leading-tight text-balance text-brand-charcoal">Moments that linger.</h2>
            <p className="text-brand-gray leading-relaxed mb-12 text-sm md:text-base text-balance">
              We approach every session like crafting a personalized scrapbook—layering emotions, details, and dramatic lighting to create an immersive, warm, and romantic atmosphere. Luxury is found through restraint and thoughtful composition.
            </p>
            <Link href="/about" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-pink hover:border-brand-pink transition-all">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Services (Staggered Layout) */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-brand-off-white border-b border-brand-charcoal/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-brand-black/[0.02] uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
          Curated
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8 animate-slide-up">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">03 &mdash; Services</span>
              <h2 className="font-serif text-[clamp(3rem,6vw,4.5rem)] font-light text-brand-charcoal text-balance leading-none m-0">Curated Offerings</h2>
            </div>
            <Link href="/services" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-1 hover:text-brand-pink hover:border-brand-pink transition-all">
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {[
              { name: 'Weddings', link: '/weddings', img: '/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg', desc: 'A cinematic documentation of your love.', offset: false },
              { name: 'Maternity', link: '/maternity-newborn', img: '/images/tho_tz._photography_official_1769072959_3815582990504947736_5469771706.jpg', desc: 'Embracing the profound journey of life.', offset: true }
            ].map((s, idx) => (
              <Link href={s.link} key={s.name} className={`group flex flex-col animate-slide-up ${s.offset ? 'md:mt-32' : ''}`} style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="w-full relative aspect-[3/4] mb-8 overflow-hidden bg-brand-light-gray">
                  <Image src={s.img} alt={s.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl mb-3 text-brand-charcoal">{s.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gray">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-20 md:hidden">
            <Link href="/services" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-1 hover:text-brand-pink hover:border-brand-pink transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Cinematic Section */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-brand-black text-brand-off-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-bold text-white/[0.03] uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
          Shadows
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-slide-up">
          <span className="text-xs uppercase tracking-widest text-brand-gray block mb-8">04 &mdash; Aesthetics</span>
          <h2 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light leading-tight mb-8 text-balance">
            Shadows define the light.
          </h2>
          <p className="text-sm tracking-[0.15em] font-light max-w-2xl mx-auto text-brand-gray mb-16 leading-loose text-balance uppercase">
            By embracing contrast and playing with dramatic darkness, we elevate ordinary portraits into powerful, cinematic centerpieces.
          </p>
          <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-brand-charcoal overflow-hidden group">
            <Image src="/images/_shilpa_santhosh_1787399276_3969314718661171190_9666622877.jpg" alt="Dark Cinematic" fill sizes="100vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out" />
          </div>
        </div>
      </section>
    </div>
  );
}
