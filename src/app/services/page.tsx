import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    { title: 'Weddings', desc: 'A cinematic documentation of your love.', link: '/weddings', img: '/images/tho_tz._photography_official_1765622241_3786636268248649943_5469771706.jpg' },
    { title: 'Pre-Weddings', desc: 'Beautiful moments before you say I do.', link: '/pre-weddings', img: '/images/tho_tz._photography_official_1774053035_3857358454076396155_5469771706.jpg' },
    { title: 'Maternity', desc: 'Welcoming new life into the world.', link: '/maternity-newborn', img: '/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg' },
    { title: 'Portraits', desc: 'Timeless portraits for you and your loved ones.', link: '/family-portraits', img: '/images/_shilpa_santhosh_1787399276_3969314718661171190_9666622877.jpg' },
  ];

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto bg-brand-off-white font-sans text-brand-black">
      <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] text-center font-light tracking-tight mb-32 text-brand-charcoal">Our Services.</h1>
      
      <div className="flex flex-col gap-32 md:gap-48 relative">
        {/* Service 1: Weddings (Large Offset Portrait) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 animate-slide-up">
          <div className="w-full md:w-5/12 order-2 md:order-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">01</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] mb-6 font-light text-brand-charcoal">{services[0].title}</h2>
            <p className="text-brand-gray mb-10 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm md:text-base">{services[0].desc}</p>
            <Link href={services[0].link} className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-pink transition-all">
              Explore {services[0].title}
            </Link>
          </div>
          <div className="w-full md:w-7/12 order-1 md:order-2 relative aspect-[3/4] overflow-hidden bg-brand-light-gray group">
            <Image src={services[0].img} alt={services[0].title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </div>
        </div>

        {/* Service 2: Pre-Weddings (Landscape Centered) */}
        <div className="flex flex-col items-center gap-10 animate-slide-up">
          <div className="w-full relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-brand-light-gray group">
            <Image src={services[1].img} alt={services[1].title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105 object-[center_30%]" />
          </div>
          <div className="w-full max-w-2xl text-center md:-mt-20 relative z-10 bg-brand-off-white/90 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">02</span>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] mb-6 font-light text-brand-charcoal">{services[1].title}</h2>
            <p className="text-brand-gray mb-10 leading-relaxed text-sm md:text-base">{services[1].desc}</p>
            <Link href={services[1].link} className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-pink transition-all">
              Explore {services[1].title}
            </Link>
          </div>
        </div>

        {/* Service 3 & 4: Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 animate-slide-up">
          {/* Service 3: Maternity */}
          <div className="flex flex-col">
            <div className="w-full relative aspect-[4/5] overflow-hidden bg-brand-light-gray group mb-10">
              <Image src={services[2].img} alt={services[2].title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">03</span>
              <h2 className="font-serif text-4xl mb-4 font-light text-brand-charcoal">{services[2].title}</h2>
              <p className="text-brand-gray mb-8 leading-relaxed text-sm">{services[2].desc}</p>
              <Link href={services[2].link} className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-pink transition-all">
                Explore
              </Link>
            </div>
          </div>
          {/* Service 4: Portraits */}
          <div className="flex flex-col md:mt-32">
            <div className="w-full relative aspect-[4/5] overflow-hidden bg-brand-light-gray group mb-10">
              <Image src={services[3].img} alt={services[3].title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </div>
            <div className="md:text-right">
              <span className="text-xs uppercase tracking-widest text-brand-gray block mb-4">04</span>
              <h2 className="font-serif text-4xl mb-4 font-light text-brand-charcoal">{services[3].title}</h2>
              <p className="text-brand-gray mb-8 leading-relaxed text-sm">{services[3].desc}</p>
              <Link href={services[3].link} className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-pink transition-all">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
