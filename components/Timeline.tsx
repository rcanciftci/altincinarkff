"use client";

import AnimatedSection from "./ui/AnimatedSection";

const timelineEvents = [
  {
    number: "01",
    date: "Ocak 2026",
    title: "Başvuru Başlangıcı",
    desc: "Film başvuruları sisteme açılır.",
    done: true,
  },
  {
    number: "02",
    date: "31 Mart 2026",
    title: "Son Başvuru Tarihi",
    desc: "Tüm başvuruların sisteme yüklenmiş olması gerekmektedir.",
    done: false,
    highlight: true,
  },
  {
    number: "03",
    date: "Nisan 2026",
    title: "Finalist Duyurusu",
    desc: "Ön jüri değerlendirmesi sonucunda finalistler açıklanır. (Kesin tarih TBA)",
    done: false,
  },
  {
    number: "04",
    date: "8–9 Mayıs 2026",
    title: "Festival Günleri",
    desc: "Gösterimler, atölyeler, masterclass'lar ve söyleşiler Osmangazi'de gerçekleşir.",
    done: false,
    highlight: true,
  },
  {
    number: "05",
    date: "9 Mayıs 2026",
    title: "Ödül Töreni — Gala Gecesi",
    desc: "Festival büyük finali ve ödüller, gala gecesiyle taçlandırılır.",
    done: false,
  },
];

export default function Timeline() {
  return (
    <section
      id="takvim"
      className="bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Takvim</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="mb-16">
          <h2
            id="timeline-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Önemli Tarihler
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-[2.5rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent hidden lg:block"
            aria-hidden="true"
          />

          <ol className="relative space-y-1" aria-label="Festival takvimi">
            {timelineEvents.map((event, i) => (
              <AnimatedSection key={event.number} delay={i * 100} threshold={0.1}>
                <li
                  className={`relative lg:pl-24 py-8 lg:py-10 border-b border-[#2A2A2A] last:border-0 group ${
                    event.highlight ? "" : ""
                  }`}
                >
                  {/* Number circle — desktop */}
                  <div
                    className={`absolute left-0 top-8 lg:top-10 w-[5rem] h-[5rem] hidden lg:flex items-center justify-center border ${
                      event.highlight ? "border-[#E8540A] bg-[#E8540A]/10" : "border-[#2A2A2A]"
                    } transition-colors duration-300 group-hover:border-[#E8540A]`}
                    aria-hidden="true"
                  >
                    <span
                      className={`text-sm font-bold ${
                        event.highlight ? "text-[#E8540A]" : "text-[#2A2A2A] group-hover:text-[#E8540A]"
                      } transition-colors duration-300`}
                    >
                      {event.number}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                    {/* Date */}
                    <div className="flex items-center gap-3 lg:hidden mb-3">
                      <span
                        className="text-xs font-bold text-[#E8540A]"
                      >
                        {event.number}
                      </span>
                      <div className="h-[1px] w-4 bg-[#E8540A]" aria-hidden="true" />
                    </div>
                    <div className="sm:w-44 flex-shrink-0">
                      <time
                        className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#E8540A]"
                        dateTime={event.date}
                      >
                        {event.date}
                      </time>
                    </div>
                    <div className="flex-1 mt-2 sm:mt-0">
                      <h3
                        className="text-[1.1rem] font-bold text-[#F5F0E8] mb-2 group-hover:text-[#E8540A] transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
