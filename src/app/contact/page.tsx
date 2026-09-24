"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.type || !formData.message) {
      setError("Please fill out your name, inquiry type, and message.");
      return;
    }
    const whatsappNumber = "64224618429";
    const text = `Hello Thotz Photography!\n\nName: ${formData.name}\nEmail: ${formData.email || "N/A"}\nInquiry Type: ${formData.type}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-off-white text-brand-black pt-40 pb-20 px-6 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-5/12">
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
            Say Hello.
          </h1>
          <p className="text-brand-gray leading-relaxed mb-12 text-lg">
            We would love to hear about your upcoming event, your vision, and how we can collaborate to create timeless, cinematic memories. 
          </p>
          <div className="space-y-8 text-xs uppercase tracking-[0.2em]">
            <div>
              <p className="text-brand-gray mb-2 font-medium">WhatsApp</p>
              <a href="https://wa.me/64224618429" target="_blank" rel="noreferrer" className="hover:text-brand-gray transition-colors text-sm">+64 22 461 8429</a>
            </div>
            <div>
              <p className="text-brand-gray mb-2 font-medium">Email</p>
              <a href="mailto:hello@thotzphotography.co.nz" className="hover:text-brand-gray transition-colors text-sm">hello@thotzphotography.co.nz</a>
            </div>
            <div>
              <p className="text-brand-gray mb-2 font-medium">Location</p>
              <p className="text-sm">Auckland, New Zealand</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12">
          <form className="space-y-10 text-sm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-brand-gray uppercase tracking-widest mb-3">Name *</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 focus:outline-none focus:border-brand-black transition-colors text-base" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-brand-gray uppercase tracking-widest mb-3">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 focus:outline-none focus:border-brand-black transition-colors text-base" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="type" className="block text-xs font-medium text-brand-gray uppercase tracking-widest mb-3">Inquiry Type *</label>
              <input type="text" id="type" value={formData.type} onChange={handleChange} className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 focus:outline-none focus:border-brand-black transition-colors text-base" placeholder="e.g. Wedding, Portrait, Commercial" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-brand-gray uppercase tracking-widest mb-3">Message *</label>
              <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 focus:outline-none focus:border-brand-black transition-colors resize-none text-base" placeholder="Tell us more about your vision..."></textarea>
            </div>
            {error && <p className="text-red-700 text-xs tracking-wide">{error}</p>}
            <button type="submit" className="w-full bg-brand-black text-brand-off-white text-xs font-medium uppercase tracking-[0.2em] py-6 hover:bg-brand-charcoal transition-all duration-300">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
