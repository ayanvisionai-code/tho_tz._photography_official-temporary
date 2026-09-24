import Image from 'next/image';
import Link from 'next/link';

export default function Weddings() {
  const images = [
    '/images/tho_tz._photography_official_1765622241_3786636268248649943_5469771706.jpg',
    '/images/tho_tz._photography_official_1765622241_3786636268257020836_5469771706.jpg',
    '/images/tho_tz._photography_official_1765622241_3786636268257020919_5469771706.jpg',
    '/images/tho_tz._photography_official_1765622241_3786636268257037400_5469771706.jpg',
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Weddings</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We document your special day with elegance and authenticity. From the intimate glances to the grand celebrations, our wedding photography is crafted to tell your unique love story.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] bg-gray-100">
            <Image src={img} alt={`Wedding ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contact" className="inline-block bg-black text-white px-8 py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors">
          Book Your Wedding
        </Link>
      </div>
    </div>
  );
}
