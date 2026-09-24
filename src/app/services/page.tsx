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
      
      <div className="flex flex-col gap-32 md:gap-48">
        {services.map((s, idx) => (
          <div key={s.title} className={`flex flex-col md:flex-row items-center gap-16 md:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-video shadow-xl bg-brand-light-gray group overflow-hidden">
              <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:items-end md:text-right' : 'items-start'} px-4 md:px-8`}>
              <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] mb-6 font-light text-brand-charcoal">{s.title}</h2>
              <p className="text-brand-gray mb-10 max-w-sm leading-relaxed text-sm md:text-base">{s.desc}</p>
              <Link href={s.link} className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-black pb-2 hover:text-brand-gray hover:border-brand-gray transition-all">
                Explore {s.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
