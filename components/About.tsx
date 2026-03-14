"use client";

import AnimatedSection from "./ui/AnimatedSection";

export default function About() {
  return (
    <section
      id="hakkinda"
      className="bg-[#111111] py-28 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section label */}
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Festival Hakkında</span>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left — Large pull quote */}
          <AnimatedSection direction="left">
            <blockquote>
              <p
                className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-[1.2] text-[#F5F0E8]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "Binlerce yılın tanığı çınar ağaçları gibi, bu festival de sinemaya köklü bir yurt olmayı amaçlıyor."
              </p>
              <footer className="mt-6">
                <div className="h-[1px] w-12 bg-[#E8540A] mb-4" />
                <cite className="section-label not-italic">Osmangazi Belediyesi</cite>
              </footer>
            </blockquote>
          </AnimatedSection>

          {/* Right — Descriptive text */}
          <AnimatedSection direction="right" delay={150}>
            <div className="space-y-6 text-[#6B6B6B] text-[0.9375rem] leading-relaxed">
              <p>
                <strong className="text-[#F5F0E8]">Bursa Altın Çınar Kısa Film Festivali</strong>,
                Osmangazi Belediyesi tarafından düzenlenen ve 2025 yılında ilk kez gerçekleştirilen
                ulusal bir kısa film yarışmasıdır. Festival adını, Bursa'nın tarihi sembolü olan
                ve binlerce yılın tanığı çınar ağaçlarından almaktadır.
              </p>
              <p>
                Bu yıl <strong className="text-[#F5F0E8]">ikinci kez</strong> kapılarını açan festival,
                hızla büyüyen sinema endüstrisinde genç ve yetenekli sinemacılara destek olmayı,
                yaratıcı fikirlerin filizlenmesi için verimli bir ortam oluşturmayı ve eserlerin
                ulusal ve uluslararası platformlarda gösterilmesine zemin hazırlamayı misyon edinmiştir.
              </p>
              <p>
                Festival yalnızca bir yarışma değil; sinema tutkunları için prestijli bir buluşma
                noktası ve genç yönetmenler için bir öğrenme platformudur.
              </p>
              <p>
                <strong className="text-[#F5F0E8]">2026 yılı</strong>, Bursa'nın fethinin
                700. yıl dönümüne denk gelmektedir. Festival programı, bu köklü dönüm noktasına
                özel sinema etkinliklerini de kapsayacaktır.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Orange rule */}
        <div className="orange-rule mb-20" />

        {/* Full-width statement */}
        <AnimatedSection threshold={0.2}>
          <p
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.15] text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#F5F0E8]">Bir kısa film,</span>{" "}
            <span
              style={{
                WebkitTextStroke: "1px #E8540A",
                color: "transparent",
              }}
            >
              binlerce sözcüğün
            </span>{" "}
            <span className="text-[#F5F0E8]">taşıyamadığını taşır.</span>
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={200} className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { number: "2.", label: "Festival Yılı" },
            { number: "700.", label: "Osmanlı'nın Bursa Fetih Yılı Dönümü" },
            { number: "20dk", label: "Maksimum Film Süresi" },
            { number: "Ücretsiz", label: "Başvuru" },
          ].map((stat) => (
            <div key={stat.label} className="border-t border-[#2A2A2A] pt-6">
              <div
                className="text-[2.5rem] font-bold text-[#E8540A] leading-none mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.number}
              </div>
              <div className="text-[0.75rem] font-medium tracking-[0.05em] text-[#6B6B6B] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
