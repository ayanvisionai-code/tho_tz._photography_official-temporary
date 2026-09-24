import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FAFAF7] text-[#1A1A1A]">
      {/* Cinematic Hero */}
      <section className="relative w-full h-[100dvh] flex flex-col justify-end items-center pb-24 md:pb-32 bg-[#111] overflow-hidden">
        <Image 
          src="/images/tho_tz._photography_official_1761971443_3756011156600450166_5469771706.jpg" 
          alt="Cinematic Hero"
          fill
          sizes="100vw"
          className="object-cover opacity-70 object-[center_30%] scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <div className="z-20 text-center text-[#FAFAF7] px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-[clamp(4rem,10vw,8rem)] font-light mb-4 md:mb-6 tracking-tight drop-shadow-2xl">Thotz.</h1>
          <p className="text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90 drop-shadow-md max-w-[250px] md:max-w-none text-balance leading-relaxed">
            An Immersive Visual Experience
          </p>
        </div>
      </section>

      {/* Intro (Light Editorial) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-16 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] leading-snug md:leading-tight mb-8 font-light text-balance text-[#111]">
            "Photography is not just a grid of images. It is a collection of memories, carefully woven to tell your unique story."
          </h2>
          <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
            Based in Auckland, New Zealand
          </p>
        </div>
      </section>

      {/* Featured Story (Collage / Scrapbook Layout) */}
      <section className="w-full py-20 md:py-24 px-6 md:px-16 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative h-[450px] md:h-[600px] flex items-center justify-center">
            {/* Base Image */}
            <div className="absolute top-0 md:top-10 left-0 w-[85%] md:w-3/4 h-[300px] md:h-[400px] shadow-2xl z-10">
              <Image 
                src="/images/tho_tz._photography_official_1765622241_3786636268248649943_5469771706.jpg" 
                alt="Featured Story 1" 
                fill 
                sizes="(max-width: 768px) 85vw, 40vw"
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            {/* Overlapping Image */}
            <div className="absolute bottom-0 md:bottom-10 right-0 w-[75%] md:w-2/3 h-[250px] md:h-[350px] shadow-xl z-20 border-[6px] md:border-8 border-white transform md:rotate-2">
              <Image 
                src="/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg" 
                alt="Featured Story 2" 
                fill 
                sizes="(max-width: 768px) 75vw, 35vw"
                className="object-cover" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left pt-8 md:pt-0">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-[#5c6e7a]">Featured Story</h3>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] mb-6 md:mb-8 font-light leading-tight text-balance">Moments that linger.</h2>
            <p className="text-gray-600 leading-relaxed md:leading-loose mb-10 max-w-lg mx-auto md:mx-0 text-sm md:text-base text-balance">
              We approach every session like crafting a personalized scrapbook—layering emotions, details, and dramatic lighting to create an immersive, warm, and romantic atmosphere. Luxury is found through restraint.
            </p>
            <Link href="/about" className="inline-block text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 md:pb-2 hover:text-[#5c6e7a] hover:border-[#5c6e7a] transition-all p-2 -ml-2 md:p-0 md:-ml-0 min-h-[44px]">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Services */}
      <section className="w-full py-24 md:py-32 px-6 md:px-16 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[clamp(2.5rem,5vw,3rem)] md:text-5xl text-center mb-16 md:mb-20 font-light text-balance">Curated Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { name: 'Weddings', link: '/weddings', img: '/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg', desc: 'A cinematic documentation of your love.' },
              { name: 'Maternity', link: '/maternity-newborn', img: '/images/tho_tz._photography_official_1769072959_3815582990504947736_5469771706.jpg', desc: 'Embracing the profound journey of life.' }
            ].map((s, idx) => (
              <Link href={s.link} key={s.name} className="group flex flex-col items-center">
                <div className="w-full relative aspect-[4/5] md:aspect-[3/4] mb-6 md:mb-8 overflow-hidden bg-gray-200">
                  <Image src={s.img} alt={s.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <h3 className="font-serif text-3xl md:text-3xl mb-2">{s.name}</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 text-center">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16 md:mt-20">
            <Link href="/services" className="inline-block text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 hover:text-gray-500 transition-all p-2 min-h-[44px]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Cinematic Section */}
      <section className="w-full py-24 md:py-40 px-6 md:px-16 bg-[#111] text-[#FAFAF7]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight mb-6 md:mb-8 text-balance">
            Shadows define the light.
          </h2>
          <p className="text-xs md:text-sm tracking-[0.1em] font-light max-w-2xl mx-auto text-gray-400 mb-10 md:mb-12 leading-relaxed md:leading-loose text-balance">
            By embracing contrast and playing with dramatic darkness, we elevate ordinary portraits into powerful, cinematic centerpieces.
          </p>
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-black shadow-2xl overflow-hidden">
            <Image src="/images/_shilpa_santhosh_1787399276_3969314718661171190_9666622877.jpg" alt="Dark Cinematic" fill sizes="100vw" className="object-cover opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
