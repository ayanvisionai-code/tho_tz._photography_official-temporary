import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 bg-brand-off-white font-sans text-brand-black">
      <div className="w-full md:w-1/2 relative aspect-[3/4] bg-brand-light-gray group">
        <Image 
          src="/images/tho_tz._photography_official_1790051423_3991559943066680827_5469771706.jpg" 
          alt="About Thotz Photography" 
          fill 
          className="object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-[2s]"
        />
        <div className="absolute -bottom-8 -right-8 w-2/3 md:w-1/2 aspect-square bg-brand-black text-brand-off-white flex items-center justify-center p-8 z-20 shadow-xl">
          <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light italic leading-tight text-center">"Luxury through restraint."</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-12 pt-16 md:pt-0">
        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-brand-gray">About Us</h3>
        <h1 className="font-serif text-[clamp(3.5rem,6vw,5rem)] font-light tracking-tight mb-10 text-brand-charcoal leading-none">Thotz Photography</h1>
        <p className="text-brand-gray mb-8 leading-loose text-sm md:text-base">
          Based in the beautiful city of Auckland, New Zealand, we specialize in capturing life's most precious and authentic moments. Our approach is deeply rooted in cinematic storytelling and editorial minimalism.
        </p>
        <p className="text-brand-gray leading-loose mb-12 text-sm md:text-base">
          We believe that photography can feel like a collection of memories rather than a grid of images. With a passion for dramatic light, sophisticated whitespace, and human connection, we strive to deliver a premium experience that you'll cherish for generations.
        </p>
        <div className="flex gap-6 items-center">
          <div className="w-16 h-px bg-brand-charcoal"></div>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-brand-charcoal">Auckland, NZ</p>
        </div>
      </div>
    </div>
  );
}
