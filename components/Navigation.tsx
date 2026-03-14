"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#hakkinda", label: "Hakkında" },
  { href: "/katilim-sartnamesi", label: "Katılım Şartnamesi" },
  { href: "/#program", label: "Program" },
  { href: "/#oduller", label: "Ödüller" },
  { href: "/#sss", label: "SSS" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-[#2A2A2A]"
            : "py-5 bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Altın Çınar Kısa Film Festivali Ana Sayfa">
            <Image
              src="/logo.png"
              alt="Altın Çınar Kısa Film Festivali"
              width={144}
              height={180}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/#basvuru"
              className="btn-primary hidden sm:inline-block text-[0.65rem] py-3 px-5"
              aria-label="Film başvurusu yap"
            >
              Başvuru
            </Link>
            <button
              className="lg:hidden flex flex-col gap-1.5 w-6 h-5 justify-center cursor-pointer relative z-[999]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-[1px] bg-[#F5F0E8] transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-[#F5F0E8] transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-[#F5F0E8] transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[997] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Decorative top rule */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8540A]" />

        <nav className="flex flex-col items-center gap-8" aria-label="Mobil navigasyon">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-2xl font-bold text-[#F5F0E8] hover:text-[#E8540A] transition-colors duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#basvuru"
            className="btn-primary mt-6 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Film Başvurusu Yap
          </Link>
        </nav>

        {/* Bottom info */}
        <p className="absolute bottom-8 text-[#6B6B6B] text-xs tracking-[0.15em] uppercase">
          8–9 Mayıs 2026 · Osmangazi, Bursa
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E8540A]" />
      </div>
    </>
  );
}
