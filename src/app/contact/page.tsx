"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FormState = { name: string; email: string; type: string; message: string };

const INQUIRY_TYPES = [
  "Wedding",
  "Pre-Wedding",
  "Maternity",
  "Newborn / Kids",
  "Portraits",
  "Family",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", type: "", message: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const update = (id: keyof FormState, val: string) => {
    setForm((p) => ({ ...p, [id]: val }));
    if (error) setError("");
  };

  const validate = (): string => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.type) return "Please select an inquiry type.";
    if (!form.message.trim()) return "Please include a message.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setSending(true);
    const text =
      `Hello Thotz Photography,\n\nI'd like to make an inquiry.\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nInquiry Type: ${form.type}\n\nMessage:\n${form.message}\n\nThank you.`;
    window.open(`https://wa.me/64224618429?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSending(false);
  };

  return (
    <div className="bg-brand-off-white text-brand-black min-h-screen">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — full-width cinematic image with overlay
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[340px] overflow-hidden bg-brand-black">
        <Image
          src="/images/tho_tz._photography_official_1774762943_3863313668176004120_5469771706.jpg"
          alt="Thotz Photography — Auckland contact"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-end px-6 md:px-14 pb-14 md:pb-20 safe-bottom">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-[clamp(3.4rem,9vw,7rem)] font-light tracking-tight text-white leading-none">
            Say Hello.
          </h1>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN BODY
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-14 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* ── LEFT COLUMN ─────────────────────────── */}
        <div className="flex flex-col gap-16">

          {/* Intro */}
          <div>
            <p className="text-brand-gray text-base md:text-lg leading-relaxed max-w-md font-light">
              Tell us about your vision and we'll be in touch. Whether it's a wedding, a family session, or something entirely new — we'd love to hear from you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gray font-medium mb-3">WhatsApp &amp; Phone</p>
              <a
                href="https://wa.me/64224618429"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-brand-charcoal text-base font-medium hover:text-brand-pink transition-colors duration-300 group w-fit"
              >
                {/* WhatsApp icon */}
                <svg className="w-5 h-5 shrink-0 text-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                +64 22 461 8429
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gray font-medium mb-3">Email</p>
              <a
                href="mailto:thotzphotography@gmail.com"
                className="text-brand-charcoal text-base hover:text-brand-pink transition-colors duration-300"
              >
                thotzphotography@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gray font-medium mb-3">Location</p>
              <p className="text-brand-charcoal text-base">Auckland, New Zealand</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gray font-medium mb-3">Social</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.instagram.com/tho_tz._photography_official/" target="_blank" rel="noreferrer" className="text-brand-charcoal hover:text-brand-pink transition-colors duration-300 text-base">Instagram</a>
                <a href="https://www.facebook.com/thotzphotography" target="_blank" rel="noreferrer" className="text-brand-charcoal hover:text-brand-pink transition-colors duration-300 text-base">Facebook</a>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href="https://wa.me/64224618429"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.22em] font-semibold px-8 py-4 hover:bg-[#1da851] transition-colors duration-300 w-fit min-h-[48px]"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Image teaser — portrait below details */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-brand-light-gray group hidden lg:block">
            <Image
              src="/images/tho_tz._photography_official_1774762943_3863313738128561366_5469771706.jpg"
              alt="Thotz Photography work"
              fill
              sizes="45vw"
              className="object-cover object-top transition-transform duration-[2.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            <p className="absolute bottom-5 left-5 font-serif italic text-white/80 text-lg">Auckland, New Zealand</p>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Form ─────────────────── */}
        <div>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-light text-brand-charcoal mb-10 leading-tight">
            Send an Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-9" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] font-medium text-brand-gray uppercase tracking-[0.28em] mb-3">
                Name <span className="text-brand-gray">*</span>
              </label>
              <input
                id="name" type="text" required
                value={form.name} onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-brand-charcoal/25 pb-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 placeholder:text-brand-gray/40 min-h-[44px]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[10px] font-medium text-brand-gray uppercase tracking-[0.28em] mb-3">
                Email <span className="text-brand-gray">*</span>
              </label>
              <input
                id="email" type="email" required
                value={form.email} onChange={(e) => update("email", e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-brand-charcoal/25 pb-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 placeholder:text-brand-gray/40 min-h-[44px]"
              />
            </div>

            {/* Inquiry Type — select */}
            <div>
              <label htmlFor="type" className="block text-[10px] font-medium text-brand-gray uppercase tracking-[0.28em] mb-3">
                Inquiry Type <span className="text-brand-gray">*</span>
              </label>
              <select
                id="type" required
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
                className="w-full bg-transparent border-b border-brand-charcoal/25 pb-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 appearance-none cursor-pointer min-h-[44px] text-brand-black"
              >
                <option value="" disabled>Select a service…</option>
                {INQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[10px] font-medium text-brand-gray uppercase tracking-[0.28em] mb-3">
                Message <span className="text-brand-gray">*</span>
              </label>
              <textarea
                id="message" rows={5} required
                value={form.message} onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your vision, preferred dates, location…"
                className="w-full bg-transparent border-b border-brand-charcoal/25 pb-3 text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 resize-none placeholder:text-brand-gray/40"
              />
            </div>

            {error && <p className="text-red-600 text-xs tracking-wide">{error}</p>}

            <button
              type="submit" disabled={sending}
              className="w-full bg-brand-black text-brand-off-white text-[11px] uppercase tracking-[0.28em] font-semibold py-5
                hover:bg-brand-pink hover:text-brand-black hover:shadow-[0_0_28px_rgba(242,217,217,0.5)]
                transition-all duration-400 min-h-[52px] disabled:opacity-50"
            >
              {sending ? "Opening WhatsApp…" : "Submit via WhatsApp"}
            </button>

            <p className="text-[10px] text-brand-gray/50 tracking-wide text-center">
              Your message will open in WhatsApp for you to send.
            </p>
          </form>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          EDITORIAL IMAGE STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="w-full flex overflow-hidden border-t border-brand-light-gray/60">
        {[
          "/images/tho_tz._photography_official_1774762943_3863313649578469326_5469771706.jpg",
          "/images/tho_tz._photography_official_1774053035_3857358458463630458_5469771706.jpg",
          "/images/tho_tz._photography_official_1782226386_3925921859587622942_5469771706.jpg",
          "/images/tho_tz._photography_official_1790051423_3991559947076288666_5469771706.jpg",
        ].map((src, i) => (
          <div key={i} className="relative flex-1 aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-brand-light-gray group">
            <Image
              src={src}
              alt={`Thotz Photography work ${i + 1}`}
              fill
              sizes="25vw"
              className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GOOGLE MAP — Auckland, New Zealand
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="w-full border-t border-brand-light-gray/60">
        <div className="max-w-[1300px] mx-auto px-6 md:px-14 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gray font-medium mb-1">Location</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal">Auckland, New Zealand</h3>
            </div>
            <a
              href="https://www.google.com/maps/place/Auckland,+New+Zealand"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-pink hover:border-brand-pink transition-all duration-300 whitespace-nowrap"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
        {/* Map embed */}
        <div className="w-full h-[380px] md:h-[480px] relative overflow-hidden">
          <iframe
            title="Thotz Photography Location — Auckland, New Zealand"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408325.15516543255!2d174.33763424506955!3d-36.84846002143506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1727180000000!5m2!1sen!2snz"
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}
