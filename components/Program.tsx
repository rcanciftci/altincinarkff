"use client";

import AnimatedSection from "./ui/AnimatedSection";

const programCategories = [
  {
    icon: "▶",
    title: "Yarışma Filmleri",
    desc: "Ön jüri seçiminden geçen finalist filmler. 31 Mart 2026 başvuru sürecinin ardından açıklanacaktır.",
    tag: "Ana Program",
  },
  {
    icon: "◉",
    title: "Özel Gösterimler",
    desc: "Ulusal ve uluslararası seçki filmler. Halka açık ücretsiz gösterimler.",
    tag: "Halka Açık",
  },
  {
    icon: "◈",
    title: "Atölyeler",
    desc: "Sinema teknolojileri, senaryo yazımı ve yönetmenlik üzerine uygulamalı atölye çalışmaları.",
    tag: "Eğitim",
  },
  {
    icon: "◆",
    title: "Masterclass'lar",
    desc: "Alanında deneyimli yönetmen ve yapımcılarla birebir öğrenme oturumları.",
    tag: "Eğitim",
  },
  {
    icon: "◎",
    title: "Söyleşiler & Panel",
    desc: "Sektör profesyonelleri ile panel oturumları ve Q&A etkinlikleri.",
    tag: "Sektör",
  },
  {
    icon: "✦",
    title: "700. Yıl Özel Etkinlikleri",
    desc: "Bursa'nın fethinin 700. yıl dönümüne özel sinema programı. Tarihi bir dönüm noktasında sinema ile buluşma.",
    tag: "Özel",
    highlight: true,
  },
  {
    icon: "★",
    title: "Gala & Ödül Töreni",
    desc: "9 Mayıs 2026 Gala Gecesi. Beklenen mekan: Osmangazi Kültür Merkezi (TBA).",
    tag: "9 Mayıs",
    highlight: true,
  },
];

export default function Program() {
  return (
    <section
      id="program"
      className="bg-[#0A0A0A] py-28 lg:py-40"
      aria-labelledby="program-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Festival Programı</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2
            id="program-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            8–9 Mayıs 2026
            <br />
            <span className="text-[#E8540A]">Osmangazi, Bursa</span>
          </h2>
          <div className="max-w-sm">
            <div className="border border-dashed border-[#E8540A]/40 p-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#E8540A] mb-2">
                Duyuru
              </p>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Kesin program, 31 Mart 2026 başvuru sürecinin ardından açıklanacaktır.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Program grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
          {programCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 70} threshold={0.05}>
              <div
                className={`relative bg-[#0A0A0A] p-8 group min-h-[220px] flex flex-col justify-between ${
                  cat.highlight
                    ? "border border-dashed border-[#E8540A]/30"
                    : "hover:bg-[#0F0F0F]"
                } transition-colors duration-300`}
              >
                <div>
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase ${
                        cat.highlight ? "text-[#E8540A]" : "text-[#2A2A2A]"
                      }`}
                    >
                      {cat.tag}
                    </span>
                    <span
                      className={`text-lg ${
                        cat.highlight ? "text-[#E8540A]" : "text-[#2A2A2A] group-hover:text-[#E8540A]"
                      } transition-colors duration-300`}
                    >
                      {cat.icon}
                    </span>
                  </div>
                  <h3
                    className="text-[1rem] font-bold text-[#F5F0E8] mb-3 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{cat.desc}</p>
                </div>
                {/* Coming soon badge */}
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-[#4A4A4A]">
                    <span className="w-1 h-1 rounded-full bg-[#E8540A] animate-pulse" />
                    Yakında Açıklanacak
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
