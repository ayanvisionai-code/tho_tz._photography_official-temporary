import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#FAFAF7] px-8 md:px-16 py-20 flex flex-col items-center border-t border-gray-800">
      <div className="max-w-4xl w-full text-center mb-16">
        <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8">Let's create something timeless.</h2>
        <Link href="/contact" className="inline-block border border-[#FAFAF7] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#FAFAF7] hover:text-[#111] transition-colors duration-500">
          Inquire Now
        </Link>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-gray-400">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Thotz Photography
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
