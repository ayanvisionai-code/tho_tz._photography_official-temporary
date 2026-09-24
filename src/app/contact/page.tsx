"use client";

import { useState } from "react";

type Field = { id: string; label: string; required: boolean; type: string; placeholder: string };

const fields: Field[] = [
  { id: "name",    label: "Name",         required: true,  type: "text",  placeholder: "Your full name" },
  { id: "email",   label: "Email",        required: true,  type: "email", placeholder: "your@email.com" },
  { id: "type",    label: "Inquiry Type", required: true,  type: "text",  placeholder: "e.g. Wedding, Portrait, Maternity" },
  { id: "message", label: "Message",      required: true,  type: "textarea", placeholder: "Tell us about your vision…" },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", type: "", message: "" });
  const [error, setError]   = useState("");
  const [sending, setSending] = useState(false);

  const update = (id: string, val: string) => {
    setForm((p) => ({ ...p, [id]: val }));
    if (error) setError("");
  };

  const validate = (): string => {
    if (!form.name.trim())    return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.type.trim())    return "Please specify the inquiry type.";
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
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Inquiry Type: ${form.type}\n\n` +
      `Message:\n${form.message}\n\n` +
      `Thank you.`;

    const url = `https://wa.me/64224618429?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-brand-off-white text-brand-black">

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-36 md:pt-48 pb-16 px-6 md:px-14 border-b border-brand-light-gray/60">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">
          Get in Touch
        </span>
        <h1 className="font-serif text-[clamp(3.8rem,10vw,8rem)] font-light tracking-tight text-brand-charcoal leading-none">
          Say Hello.
        </h1>
        <p className="mt-6 text-brand-gray text-sm md:text-base leading-relaxed max-w-md font-light">
          Tell us a little about what you're planning and we'll be in touch.
        </p>
      </div>

      {/* ── Body ───────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 py-20 md:py-32 flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-40">

        {/* Contact details */}
        <aside className="w-full md:w-2/5 flex-shrink-0">
          <div className="space-y-10 text-[11px] uppercase tracking-[0.22em]">
            <div>
              <p className="text-brand-gray font-medium mb-2">WhatsApp</p>
              <a
                href="https://wa.me/64224618429"
                target="_blank"
                rel="noreferrer"
                className="text-brand-black hover:text-brand-pink transition-colors duration-300 normal-case text-sm tracking-normal"
              >
                +64 22 461 8429
              </a>
            </div>
            <div>
              <p className="text-brand-gray font-medium mb-2">Email</p>
              <a
                href="mailto:thotzphotography@gmail.com"
                className="text-brand-black hover:text-brand-pink transition-colors duration-300 normal-case text-sm tracking-normal"
              >
                thotzphotography@gmail.com
              </a>
            </div>
            <div>
              <p className="text-brand-gray font-medium mb-2">Location</p>
              <p className="text-brand-black normal-case text-sm tracking-normal">Auckland, New Zealand</p>
            </div>
            <div>
              <p className="text-brand-gray font-medium mb-3">Social</p>
              <div className="flex flex-col gap-2 normal-case text-sm tracking-normal">
                <a href="https://www.instagram.com/tho_tz._photography_official/" target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors duration-300">Instagram</a>
                <a href="https://www.facebook.com/thotzphotography" target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors duration-300">Facebook</a>
              </div>
            </div>
          </div>

          {/* Decorative thin line */}
          <div className="hidden md:block mt-16 w-px h-32 bg-brand-charcoal/15 ml-1" />
        </aside>

        {/* Form */}
        <div className="w-full md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-10" noValidate>
            {fields.map((f) => (
              <div key={f.id} className="group">
                <label
                  htmlFor={f.id}
                  className="block text-[10px] font-medium text-brand-gray uppercase tracking-[0.28em] mb-3"
                >
                  {f.label} {f.required && <span className="text-brand-gray">*</span>}
                </label>
                {f.type === "textarea" ? (
                  <textarea
                    id={f.id}
                    rows={5}
                    required={f.required}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => update(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 resize-none text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 placeholder:text-brand-gray/40 min-h-[120px]"
                  />
                ) : (
                  <input
                    id={f.id}
                    type={f.type}
                    required={f.required}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => update(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 text-sm focus:outline-none focus:border-brand-charcoal transition-colors duration-300 placeholder:text-brand-gray/40 min-h-[44px]"
                  />
                )}
              </div>
            ))}

            {error && (
              <p className="text-sm text-red-600 tracking-wide">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-brand-black text-brand-off-white text-[11px] uppercase tracking-[0.28em] font-semibold py-5 mt-4
                hover:bg-brand-pink hover:text-brand-black
                hover:shadow-[0_0_24px_rgba(242,217,217,0.45)]
                transition-all duration-400 min-h-[52px] disabled:opacity-50"
            >
              {sending ? "Opening WhatsApp…" : "Submit Inquiry"}
            </button>

            <p className="text-[10px] text-brand-gray/60 tracking-wide text-center">
              Submitting will open WhatsApp with your message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
