"use client";

import AnimatedSection from "./ui/AnimatedSection";

const currentAwards = [
  {
    rank: "01",
    title: "Birincilik Ödülü",
    prize: "100.000 TL",
    icon: "◆",
    note: "+ Heykelcik",
  },
  {
    rank: "02",
    title: "İkincilik Ödülü",
    prize: "80.000 TL",
    icon: "◆",
    note: "+ Heykelcik",
  },
  {
    rank: "03",
    title: "Üçüncülük Ödülü",
    prize: "60.000 TL",
    icon: "◆",
    note: "+ Heykelcik",
  },
];


export default function Awards() {
  return (
    <section
      id="oduller"
      className="bg-[#111111] py-28 lg:py-40"
      aria-labelledby="awards-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Yarışma Ödülleri</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <h2
            id="awards-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            2. Festival Ödülleri
            <br />
            <span className="text-[#E8540A]">2026</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed">
            Başvuru ücretsizdir. Kazananlara heykelcik ve nakit ödül takdim edilir.
          </p>
        </AnimatedSection>

        {/* Current awards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] mb-20">
          {currentAwards.map((award, i) => (
            <AnimatedSection key={award.rank} delay={i * 80} threshold={0.1}>
              <div className="bg-[#111111] p-8 group hover:bg-[#161616] transition-colors duration-300 cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[0.6rem] font-bold tracking-[0.2em] text-[#2A2A2A] group-hover:text-[#E8540A] transition-colors duration-300"
                  >
                    {award.rank}
                  </span>
                  <span className="text-[#E8540A] text-lg">{award.icon}</span>
                </div>
                <h3
                  className="text-[1.1rem] font-bold text-[#F5F0E8] mb-3 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {award.title}
                </h3>
                <p className="text-[#E8540A] text-sm font-semibold tracking-wide mb-2">
                  {award.prize}
                </p>
                {award.note && (
                  <p className="text-[#6B6B6B] text-[0.7rem] tracking-[0.05em] uppercase">
                    {award.note}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
