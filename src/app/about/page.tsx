import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-[#FAFAF7]">
      <div className="w-full md:w-1/2 relative aspect-[3/4]">
        <Image 
          src="/images/tho_tz._photography_official_1790051423_3991559943066680827_5469771706.jpg" 
          alt="About Thotz Photography" 
          fill 
          className="object-cover shadow-2xl grayscale"
        />
        <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-[#111] text-[#FAFAF7] flex items-center justify-center p-8 z-20">
          <p className="font-serif text-2xl font-light italic">"Luxury through restraint."</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[#5c6e7a]">About Us</h3>
        <h1 className="font-serif text-5xl font-light tracking-tight mb-8">Thotz Photography</h1>
        <p className="text-gray-600 mb-6 leading-loose">
          Based in the beautiful city of Auckland, New Zealand, we specialize in capturing life's most precious and authentic moments. Our approach is deeply rooted in cinematic storytelling and editorial minimalism.
        </p>
        <p className="text-gray-600 leading-loose mb-10">
          We believe that photography can feel like a collection of memories rather than a grid of images. With a passion for dramatic light, sophisticated whitespace, and human connection, we strive to deliver a premium experience that you'll cherish for generations.
        </p>
        <div className="flex gap-4">
          <div className="w-16 h-px bg-black mt-3"></div>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-black">Auckland, NZ</p>
        </div>
      </div>
    </div>
  );
}
