import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-off-white px-6 md:px-16 py-16 md:py-24 flex flex-col items-center border-t border-brand-charcoal">
      <div className="max-w-4xl w-full text-center mb-16 md:mb-20">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light tracking-tight mb-8 md:mb-10 leading-tight">
          Let's create<br className="md:hidden" /> something timeless.
        </h2>
        <Link href="/contact" className="inline-flex items-center justify-center border border-brand-off-white px-8 py-5 md:px-10 md:py-4 text-sm md:text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brand-off-white hover:text-brand-black transition-colors duration-500 min-h-[44px] min-w-[44px]">
          Inquire Now
        </Link>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.15em] md:tracking-widest uppercase text-brand-gray gap-8 md:gap-0">
        <div className="order-2 md:order-1 opacity-70">
          &copy; {new Date().getFullYear()} Thotz Photography
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center order-1 md:order-2 w-full md:w-auto">
          <a href="#" className="p-3 md:p-0 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">Instagram</a>
          <a href="#" className="p-3 md:p-0 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">Facebook</a>
          <a href="#" className="p-3 md:p-0 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
