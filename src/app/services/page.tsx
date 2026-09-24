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
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto bg-[#FAFAF7]">
      <h1 className="font-serif text-5xl md:text-7xl text-center font-light tracking-tight mb-24">Our Services.</h1>
      
      <div className="flex flex-col gap-24">
        {services.map((s, idx) => (
          <div key={s.title} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 relative aspect-video shadow-lg">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8">
              <h2 className="font-serif text-4xl mb-4 font-light">{s.title}</h2>
              <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">{s.desc}</p>
              <Link href={s.link} className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1 hover:text-gray-400 transition-all">
                Explore {s.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
