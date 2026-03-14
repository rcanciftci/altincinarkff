"use client";

import Link from "next/link";
import CountdownTimer from "./ui/CountdownTimer";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] overflow-hidden"
      aria-label="Festival ana bölümü"
    >
      {/* Background — abstract film frame lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top film strip */}
        <div className="absolute top-0 left-0 right-0 flex gap-1 px-8 pt-2 opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex-1 h-4 border border-[#E8540A] rounded-sm" />
          ))}
        </div>
        {/* Bottom film strip */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-1 px-8 pb-2 opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex-1 h-4 border border-[#E8540A] rounded-sm" />
          ))}
        </div>
        {/* Vertical accent lines */}
        <div className="absolute top-[15%] bottom-[15%] left-8 w-[1px] bg-gradient-to-b from-transparent via-[#E8540A]/20 to-transparent" />
        <div className="absolute top-[15%] bottom-[15%] right-8 w-[1px] bg-gradient-to-b from-transparent via-[#E8540A]/20 to-transparent" />
        {/* Large background year */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-[#F5F0E8]/[0.02] select-none"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          2026
        </div>
      </div>

      {/* Top spacer for nav */}
      <div className="h-52 lg:h-56" />

      {/* Center content */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        {/* Main headline */}
        <h1
          className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight text-[#F5F0E8] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Hikayeni
        </h1>
        <h1
          className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.95] tracking-tight mb-10"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            WebkitTextStroke: "1px #E8540A",
            color: "transparent",
          }}
        >
          Perdede Anlat.
        </h1>

        {/* Sub-copy */}
        <p className="text-[#6B6B6B] text-sm sm:text-base font-medium tracking-[0.08em] uppercase mb-12 max-w-lg">
          2. Bursa Altın Çınar Kısa Film Festivali&nbsp;·&nbsp;8–9 Mayıs 2026&nbsp;·&nbsp;Osmangazi
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/#basvuru" className="btn-primary text-center">
            Film Başvurusu Yap
          </Link>
          <a
            href="/sartname.pdf"
            download
            className="btn-outline text-center"
            aria-label="Katılım şartnamesini PDF olarak indir"
          >
            Şartnameyi İndir
          </a>
        </div>

        {/* Divider */}
        <div className="orange-rule w-full mb-10" />

        {/* Countdown */}
        <div>
          <p className="section-label mb-6">Festivale Kalan Süre</p>
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center pb-10 gap-3" aria-hidden="true">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#6B6B6B]">Aşağı Kaydır</span>
        <div className="scroll-indicator flex flex-col items-center gap-1">
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#E8540A] to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#E8540A]" />
        </div>
      </div>
    </section>
  );
}
