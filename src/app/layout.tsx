import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thotz Photography | Auckland Wedding, Portrait & Maternity Photographer",
  description:
    "Thotz Photography — Premium cinematic and editorial photography in Auckland, New Zealand. Specialising in weddings, portraits, maternity, and family photography.",
  openGraph: {
    title: "Thotz Photography",
    description: "Premium cinematic photography in Auckland, New Zealand.",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans min-h-screen flex flex-col bg-brand-off-white text-brand-black antialiased`}
      >
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
