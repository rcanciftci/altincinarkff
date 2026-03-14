"use client";

import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="iletisim"
      className="bg-[#0A0A0A] py-28 lg:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">İletişim</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="mb-16">
          <h2
            id="contact-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bizimle
            <br />
            <span className="text-[#E8540A]">İletişime Geçin</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-10">
              {/* Info cards */}
              {[
                {
                  label: "Telefon",
                  value: "444 16 01",
                  href: "tel:4441601",
                  icon: "◎",
                },
                {
                  label: "E-posta",
                  value: "altincinarkisafilmfestivali@osmangazi.bel.tr",
                  href: "mailto:altincinarkisafilmfestivali@osmangazi.bel.tr",
                  icon: "◈",
                },
                {
                  label: "Adres",
                  value: "Osmangazi Belediyesi, Bursa",
                  href: "https://maps.google.com/?q=Osmangazi+Belediyesi+Bursa",
                  icon: "◆",
                },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="flex items-start gap-6">
                    <span className="text-[#E8540A] text-lg mt-1 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="section-label mb-2">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#F5F0E8] text-sm hover:text-[#E8540A] transition-colors duration-200 break-all"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social media */}
              <div>
                <p className="section-label mb-4">Sosyal Medya</p>
                <div className="flex gap-4">
                  {[
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/altincinarkff/",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Facebook",
                      href: "https://www.facebook.com/altincinarkff",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "X",
                      href: "https://x.com/OsmangaziBLD",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "YouTube",
                      href: "https://www.youtube.com/@OsmangaziBLD",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#6B6B6B] hover:border-[#E8540A] hover:text-[#E8540A] transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={150}>
            {sent ? (
              <div className="border border-[#E8540A]/30 p-8 text-center">
                <p className="text-[#E8540A] text-3xl mb-4">✓</p>
                <p
                  className="text-[#F5F0E8] font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Mesajınız İletildi
                </p>
                <p className="text-[#6B6B6B] text-sm">En kısa sürede dönüş yapılacaktır.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Ad Soyad <span className="text-[#E8540A]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="form-input"
                    placeholder="Ad Soyad"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    E-posta <span className="text-[#E8540A]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="form-input"
                    placeholder="eposta@ornek.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Mesaj <span className="text-[#E8540A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    className="form-input resize-none"
                    placeholder="Mesajınızı buraya yazınız..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Gönder
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
