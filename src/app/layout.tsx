import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Thotz Photography | Cinematic & Editorial",
  description: "Premium photography services in Auckland. Capturing memories through an immersive, cinematic, and editorial lens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-[#FAFAF7] text-[#1A1A1A] selection:bg-indigo-100 selection:text-indigo-900`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
