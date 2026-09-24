import Image from 'next/image';
import Link from 'next/link';

export default function MaternityNewborn() {
  const images = [
    '/images/tho_tz._photography_official_1769072959_3815582990496502927_5469771706.jpg',
    '/images/tho_tz._photography_official_1769072959_3815582990504928136_5469771706.jpg',
    '/images/tho_tz._photography_official_1769072959_3815582990504947736_5469771706.jpg',
    '/images/tho_tz._photography_official_1769072959_3815582990504950365_5469771706.jpg',
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Maternity & Newborn</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome new life with beautiful, gentle, and timeless photography. We capture the glowing anticipation of maternity and the delicate early days of your newborn.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] bg-gray-100">
            <Image src={img} alt={`Maternity & Newborn ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contact" className="inline-block bg-black text-white px-8 py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors">
          Book a Session
        </Link>
      </div>
    </div>
  );
}
