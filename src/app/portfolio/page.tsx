import Image from 'next/image';

export default function Portfolio() {
  const images = [
    '/images/tho_tz._photography_official_1761971443_3756011156600450166_5469771706.jpg',
    '/images/tho_tz._photography_official_1761971443_3756011156717881893_5469771706.jpg',
    '/images/tho_tz._photography_official_1761971443_3756011156743033567_5469771706.jpg',
    '/images/tho_tz._photography_official_1761971443_3756011156927547279_5469771706.jpg',
    '/images/tho_tz._photography_official_1761971443_3756011156935984356_5469771706.jpg',
    '/images/tho_tz._photography_official_1761971443_3756011156986307409_5469771706.jpg',
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto bg-[#FAFAF7]">
      <div className="text-center mb-24">
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-6">Portfolio.</h1>
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500">A collection of moments</p>
      </div>
      
      {/* Asymmetric / Scrapbook Gallery */}
      <div className="flex flex-col gap-32">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-3/5 relative aspect-square md:aspect-video z-10">
            <Image src={images[0]} alt="Portfolio 1" fill className="object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="w-full md:w-2/5 md:-ml-20 relative aspect-[3/4] z-20 border-[12px] border-[#FAFAF7]">
            <Image src={images[1]} alt="Portfolio 2" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-center mt-20">
          <div className="w-full md:w-1/2 relative aspect-square z-10">
            <Image src={images[2]} alt="Portfolio 3" fill className="object-cover shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 md:-mr-16 relative aspect-video z-20 mt-16 md:mt-0">
            <Image src={images[3]} alt="Portfolio 4" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start mt-20">
          <div className="w-full md:w-1/3 relative aspect-[3/4] mt-10 md:mt-32">
            <Image src={images[4]} alt="Portfolio 5" fill className="object-cover shadow-xl" />
          </div>
          <div className="w-full md:w-2/3 relative aspect-video">
            <Image src={images[5]} alt="Portfolio 6" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
