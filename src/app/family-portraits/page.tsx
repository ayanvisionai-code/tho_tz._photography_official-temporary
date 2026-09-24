import Image from 'next/image';
import Link from 'next/link';

export default function FamilyPortraits() {
  const images = [
    '/images/_shilpa_santhosh_1787399276_3969314718661171190_9666622877.jpg',
    '/images/_shilpa_santhosh_1787399276_3969314719432723657_9666622877.jpg',
    '/images/_shilpa_santhosh_1787399276_3969314721941147954_9666622877.jpg',
    '/images/_shilpa_santhosh_1787399276_3969314722813363193_9666622877.jpg',
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Family & Portraits</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Celebrate your loved ones and your own unique essence. Our family and portrait sessions are designed to capture genuine smiles, connections, and moments you'll treasure forever.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] bg-gray-100">
            <Image src={img} alt={`Family Portrait ${i + 1}`} fill className="object-cover" />
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
