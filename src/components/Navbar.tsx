import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute w-full top-0 left-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 text-white mix-blend-difference">
      <div className="font-serif text-2xl md:text-3xl tracking-wide">
        <Link href="/">THOTZ</Link>
      </div>
      <div className="hidden md:flex space-x-8 text-xs font-medium tracking-[0.2em] uppercase">
        <Link href="/portfolio" className="hover:opacity-70 transition-opacity">Portfolio</Link>
        <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
      </div>
    </nav>
  );
}
