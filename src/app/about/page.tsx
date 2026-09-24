import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-brand-off-white w-full">
      <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32 font-sans text-brand-black relative">
        {/* Background Typography */}
        <div className="absolute top-20 left-0 text-[15vw] font-serif font-bold text-brand-black/5 uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
          Our Story
        </div>

        <div className="w-full md:w-1/2 relative z-10 animate-slide-up">
          <div className="relative aspect-[3/4] bg-brand-light-gray group overflow-hidden">
            <Image 
              src="/images/tho_tz._photography_official_1790051423_3991559943066680827_5469771706.jpg" 
              alt="About Thotz Photography" 
              fill 
              className="object-cover shadow-2xl transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-12 md:-right-12 right-4 w-4/5 md:w-2/3 aspect-square bg-brand-off-white border-t border-l border-brand-light-gray flex items-center justify-center p-8 z-20 shadow-2xl">
            <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light italic leading-tight text-center text-brand-charcoal text-balance">"Luxury found through restraint."</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 pt-24 md:pt-0 z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-brand-gray flex items-center gap-4">
            <span className="w-8 h-px bg-brand-gray"></span> About Us
          </h3>
          <h1 className="font-serif text-[clamp(3.5rem,6vw,5rem)] font-light tracking-tight mb-10 text-brand-charcoal leading-none">The art of observation.</h1>
          <div className="space-y-6">
            <p className="text-brand-gray leading-relaxed text-sm md:text-base font-light">
              Based in the beautiful city of Auckland, New Zealand, we specialize in capturing life's most precious and authentic moments. Our approach is deeply rooted in cinematic storytelling and editorial minimalism.
            </p>
            <p className="text-brand-gray leading-relaxed text-sm md:text-base font-light">
              We believe that photography can feel like a collection of memories rather than a grid of images. With a passion for dramatic light, sophisticated whitespace, and human connection, we strive to deliver a premium experience that you'll cherish for generations.
            </p>
          </div>
          <div className="mt-16 flex gap-6 items-center">
            <div className="w-24 h-px bg-brand-charcoal/30"></div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-brand-charcoal">Auckland, NZ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
