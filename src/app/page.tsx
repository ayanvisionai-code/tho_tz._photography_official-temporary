import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FAFAF7] text-[#1A1A1A]">
      {/* Cinematic Hero */}
      <section className="relative w-full h-[100vh] flex flex-col justify-end items-center pb-20 bg-[#111] overflow-hidden">
        <Image 
          src="/images/tho_tz._photography_official_1761971443_3756011156600450166_5469771706.jpg" 
          alt="Cinematic Hero"
          fill
          className="object-cover opacity-70 object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <div className="z-20 text-center text-[#FAFAF7] px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-6xl md:text-9xl font-light mb-6 tracking-tight drop-shadow-lg">Thotz.</h1>
          <p className="text-sm md:text-lg font-medium tracking-[0.3em] uppercase opacity-90 drop-shadow-md">
            An Immersive Visual Experience
          </p>
        </div>
      </section>

      {/* Intro (Light Editorial) */}
      <section className="w-full py-32 px-8 md:px-16 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 font-light">
            "Photography is not just a grid of images. It is a collection of memories, carefully woven to tell your unique story."
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
            Based in Auckland, New Zealand
          </p>
        </div>
      </section>

      {/* Featured Story (Collage / Scrapbook Layout) */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative h-[600px] flex items-center justify-center">
            {/* Base Image */}
            <div className="absolute top-10 left-0 w-3/4 h-[400px] shadow-2xl z-10">
              <Image src="/images/tho_tz._photography_official_1765622241_3786636268248649943_5469771706.jpg" alt="Featured Story 1" fill className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* Overlapping Image */}
            <div className="absolute bottom-10 right-0 w-2/3 h-[350px] shadow-xl z-20 border-8 border-white transform rotate-2">
              <Image src="/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg" alt="Featured Story 2" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[#5c6e7a]">Featured Story</h3>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 font-light">Moments that linger.</h2>
            <p className="text-gray-600 leading-loose mb-10 max-w-lg mx-auto md:mx-0">
              We approach every session like crafting a personalized scrapbook—layering emotions, details, and dramatic lighting to create an immersive, warm, and romantic atmosphere. Luxury is found through restraint.
            </p>
            <Link href="/about" className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 hover:text-[#5c6e7a] hover:border-[#5c6e7a] transition-all">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Services */}
      <section className="w-full py-32 px-8 md:px-16 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 font-light">Curated Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { name: 'Weddings', link: '/weddings', img: '/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg', desc: 'A cinematic documentation of your love.' },
              { name: 'Maternity', link: '/maternity-newborn', img: '/images/tho_tz._photography_official_1769072959_3815582990504947736_5469771706.jpg', desc: 'Embracing the profound journey of life.' }
            ].map((s, idx) => (
              <Link href={s.link} key={s.name} className="group flex flex-col items-center">
                <div className="w-full relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <h3 className="font-serif text-3xl mb-2">{s.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-20">
            <Link href="/services" className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 hover:text-gray-500 transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Cinematic Section */}
      <section className="w-full py-40 px-8 md:px-16 bg-[#111] text-[#FAFAF7]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-7xl font-light leading-tight mb-8">
            Shadows define the light.
          </h2>
          <p className="text-sm tracking-[0.1em] font-light max-w-2xl mx-auto text-gray-400 mb-12 leading-loose">
            By embracing contrast and playing with dramatic darkness, we elevate ordinary portraits into powerful, cinematic centerpieces.
          </p>
          <div className="relative w-full aspect-[21/9] bg-black shadow-2xl">
            <Image src="/images/_shilpa_santhosh_1787399276_3969314718661171190_9666622877.jpg" alt="Dark Cinematic" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
