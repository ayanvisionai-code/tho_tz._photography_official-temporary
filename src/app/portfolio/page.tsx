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
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto bg-brand-off-white">
      <div className="text-center mb-24 md:mb-32">
        <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] font-light tracking-tight mb-6 text-brand-charcoal text-balance">Portfolio.</h1>
        <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand-gray">A collection of moments</p>
      </div>
      
      {/* Cinematic Editorial Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 md:gap-y-32">
        {/* Row 1: Large Feature */}
        <div className="col-span-1 md:col-span-12 animate-slide-up">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-brand-light-gray group">
            <Image src={images[0]} alt="Portfolio Feature" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-6 flex justify-between items-center text-xs uppercase tracking-widest text-brand-gray">
            <span>01</span>
            <span>Cinematic Overview</span>
          </div>
        </div>

        {/* Row 2: Editorial Split */}
        <div className="col-span-1 md:col-span-5 md:mt-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light-gray group">
            <Image src={images[1]} alt="Portfolio Detail 1" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-4 text-xs uppercase tracking-widest text-brand-gray text-right">02</div>
        </div>
        <div className="col-span-1 md:col-span-7 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-brand-light-gray group">
            <Image src={images[2]} alt="Portfolio Detail 2" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-4 text-xs uppercase tracking-widest text-brand-gray">03</div>
        </div>

        {/* Row 3: Full Width with text */}
        <div className="col-span-1 md:col-span-12 my-12 md:my-24 text-center animate-slide-up">
           <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal text-balance">The art of visual storytelling.</h2>
        </div>

        {/* Row 4: Offset Grid */}
        <div className="col-span-1 md:col-span-8 animate-slide-up">
          <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-brand-light-gray group">
            <Image src={images[3]} alt="Portfolio Detail 3" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-4 text-xs uppercase tracking-widest text-brand-gray text-right">04</div>
        </div>
        <div className="col-span-1 md:col-span-4 md:-mt-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-brand-light-gray group">
            <Image src={images[4]} alt="Portfolio Detail 4" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-4 text-xs uppercase tracking-widest text-brand-gray">05</div>
        </div>

        {/* Row 5: Single End */}
        <div className="col-span-1 md:col-span-10 md:col-start-2 mt-12 md:mt-16 animate-slide-up">
          <div className="relative w-full aspect-video overflow-hidden bg-brand-light-gray group">
            <Image src={images[5]} alt="Portfolio Detail 5" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="mt-4 flex justify-between items-center text-xs uppercase tracking-widest text-brand-gray">
            <span>06</span>
            <span>Fin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
