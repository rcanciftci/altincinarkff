"use client";

import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";

const faqData = [
  {
    category: "Başvuru",
    items: [
      {
        q: "Başvurular ne zaman açılıyor, ne zaman kapanıyor?",
        a: "Başvurular 20 Ocak 2026'da açılır, 31 Mart 2026 saat 23.59'da kapanır.",
      },
      {
        q: "Kimler başvurabilir?",
        a: "Başvuru yapılacak filmde yapımcı ve/veya yönetmenlerden en az birinin T.C. vatandaşı olması gerekir.",
      },
      {
        q: "Başvuru ücretli mi?",
        a: "Hayır. Başvuru ücretsizdir; başvuru/katılım bedeli veya değerlendirme ücreti talep edilmez.",
      },
      {
        q: "Aynı yönetmen/yapımcı birden fazla filmle başvurabilir mi?",
        a: "Evet, başvurabilir. Ancak festival yönetimi, finale kalma/seleksiyon aşamasında tek filme öncelik tanıyabilir.",
      },
      {
        q: "Film daha önce başka festivallerde gösterildiyse başvurabilir mi?",
        a: "Evet. Daha önce festivallere katılmış olması başvuruya engel değildir.",
      },
      {
        q: "Başvuru için film dosyasını mı yüklüyoruz?",
        a: "Başvuru sırasında film dosyası yerine şifreli online izleme linki (Vimeo/YouTube vb.) ve şifresi yüklenir; link değerlendirme süresince aktif kalmalıdır.",
      },
      {
        q: "Festival başvurusu yapıldıktan sonra geri çekilebilir mi?",
        a: "Başvuru sahibi, başvurunun değerlendirme süreci başlamadan önce yazılı bildirimle filmini yarışmadan çekebilir. Seçkiye alındıktan sonra geri çekme kabul edilmez.",
      },
    ],
  },
  {
    category: "Film Kriterleri",
    items: [
      {
        q: "Hangi tür filmler kabul ediliyor?",
        a: "Yarışma yalnızca kurmaca kısa filmlere açıktır. Belgesel, animasyon, deneysel ve reklam/klip formatı kapsam dışıdır.",
      },
      {
        q: "Film süresi kaç dakika olmalı?",
        a: "Film süresi jenerik dâhil 20 dakikayı aşmamalıdır.",
      },
      {
        q: "Hangi tarihten sonra tamamlanan filmler başvurabilir?",
        a: "1 Ocak 2024'ten sonra tamamlanmış (post-prodüksiyonu bitmiş) filmler başvurabilir.",
      },
      {
        q: "Filmim Türkçe değil; altyazı zorunlu mu?",
        a: "Evet. Film Türkçe dışında bir dildeyse değerlendirme kopyasında Türkçe altyazı bulunması zorunludur.",
      },
      {
        q: "Filmim YouTube'da herkese açık yayında; başvurabilir miyim?",
        a: "Hayır. Kamuya açık (şifresiz / herkesin izleyebildiği) dijital platformlarda yayınlanmış filmler kabul edilmez.",
      },
      {
        q: "Festivale katılacak filmlere afiş zorunlu mu?",
        a: "Evet. Filmlerin afiş görseli gereklidir. Detaylar için başvuru şartnamesine bakın.",
      },
    ],
  },
  {
    category: "Değerlendirme & Jüri",
    items: [
      {
        q: "Ön jüri / ön eleme süreci var mı?",
        a: "Evet. Başvurular festival yönetimi tarafından oluşturulan ön jüri tarafından değerlendirilir. Ön jüri değerlendirmesini geçen filmler final seçkisine alınır.",
      },
      {
        q: "Final seçkisine kaç film alınacak?",
        a: "Final seçkisine alınacak film sayısı, başvuru yoğunluğu ve jüri değerlendirmeleri doğrultusunda festival yönetimi tarafından belirlenir.",
      },
      {
        q: "Jüri üyeleri ne zaman açıklanacak?",
        a: "Festival jürisi, başvuruların tamamlanmasının ardından festivalin resmî sosyal medya hesapları ve internet sitesi üzerinden ilan edilecektir.",
      },
      {
        q: "Finale kaldım; hangi materyalleri teslim etmem gerekir?",
        a: "Festival yönetiminin bildireceği tarihe kadar gösterim kopyası, altyazı dosyaları ve katalog/tanıtım materyalleri eksiksiz teslim edilmelidir.",
      },
      {
        q: "Finale kaldıktan sonra filmi değiştirebilir miyim?",
        a: "Seçkiye alındıktan sonra film kopyasında içeriksel değişiklik yapılamaz. Yalnız teknik düzeltmeler festival yönetimi onayıyla kabul edilebilir.",
      },
      {
        q: "Finalist olduğumu açıklayabilir miyim?",
        a: "Hayır. Finalist seçildiğinize ilişkin bilgi, festivalin resmî kanallarından duyurulana kadar gizli tutulmalıdır.",
      },
    ],
  },
  {
    category: "Ödüller & Gösterimler",
    items: [
      {
        q: "Ödüller nelerdir ve nasıl ödenir?",
        a: "1.'lik: 100.000 TL, 2.'lik: 80.000 TL, 3.'lük: 60.000 TL + heykelcik. Para ödülü, başvuru formunda adı geçen kişi/kurum hesabına, yasal prosedürler tamamlandıktan sonra yatırılır.",
      },
      {
        q: "Festival başvuru sonuçları nasıl ve ne zaman duyurulacak?",
        a: "Finale kalan filmler, festivalin resmî internet sitesi ve sosyal medya hesapları üzerinden ilan edilir. Ayrıca finale kalan başvuru sahiplerine e-posta yoluyla bilgilendirme yapılır.",
      },
      {
        q: "Festival gösterimleri halka açık mı?",
        a: "Festival kapsamında gerçekleştirilecek gösterimlerin büyük bölümü halka açık olarak planlanmaktadır. Özel gösterim ve davetli seanslar ayrıca duyurulur.",
      },
      {
        q: "Festival kapsamında yarışma dışı / özel seçki olacak mı?",
        a: "Evet. Festival programında yarışma bölümü dışında özel gösterimler ve seçkiler yer alabilir. Bu seçkiler festival yönetimi tarafından belirlenir.",
      },
      {
        q: "Festival yönetimi filmlerden kesit kullanabilir mi?",
        a: "Evet. Festival yönetimi, tanıtım ve arşiv amaçlı olarak filmlerden kesitleri, başvuru sahibinin adı belirtilmek koşuluyla kullanabilir.",
      },
    ],
  },
  {
    category: "Festival Genel",
    items: [
      {
        q: "Festival hangi şehirde ve ne zaman gerçekleşecek?",
        a: "Bursa Altın Çınar Kısa Film Festivali, Bursa / Osmangazi'de gerçekleştirilecektir. Festival tarihleri ve program detayları ileri bir tarihte festivalin resmî kanallarından duyurulacaktır.",
      },
      {
        q: "Yönetmen veya ekipten festival süresince katılım zorunlu mu?",
        a: "Finale kalan filmler için festival süresince yönetmen veya ekipten en az bir temsilcinin katılımı önerilir, ancak zorunlu değildir. Festival programına göre ayrıca bilgilendirme yapılır.",
      },
      {
        q: "Festival şartnamesinde değişiklik yapılabilir mi?",
        a: "Festival yönetimi, zorunlu hallerde şartnamede değişiklik yapma hakkını saklı tutar. Yapılan değişiklikler festivalin resmî kanalları üzerinden duyurulur.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-[#2A2A2A]">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-6 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8540A]"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-[0.9375rem] font-medium text-[#F5F0E8] group-hover:text-[#E8540A] transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border ${
            isOpen ? "border-[#E8540A] text-[#E8540A]" : "border-[#2A2A2A] text-[#6B6B6B]"
          } transition-all duration-200 mt-0.5`}
          aria-hidden="true"
        >
          <span
            className={`text-sm transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
          >
            +
          </span>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        <p className="text-[#6B6B6B] text-sm leading-relaxed pb-6 pr-11">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  let globalIndex = 0;

  return (
    <section
      id="sss"
      className="bg-[#111111] py-28 lg:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">SSS</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="mb-16">
          <h2
            id="faq-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sıkça Sorulan
            <br />
            <span className="text-[#E8540A]">Sorular</span>
          </h2>
        </AnimatedSection>

        {/* FAQ groups */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Categories sidebar */}
          <AnimatedSection direction="left" className="hidden lg:block">
            <div className="sticky top-28">
              <nav aria-label="SSS kategorileri">
                <ul className="space-y-1">
                  {faqData.map((group) => (
                    <li key={group.category}>
                      <a
                        href={`#faq-${group.category.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "")}`}
                        className="flex items-center gap-3 py-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#6B6B6B] hover:text-[#E8540A] transition-colors duration-200"
                      >
                        <span className="w-4 h-[1px] bg-[#2A2A2A]" aria-hidden="true" />
                        {group.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </AnimatedSection>

          {/* FAQ items */}
          <AnimatedSection direction="right" delay={150}>
            <div className="space-y-12">
              {faqData.map((group) => (
                <div
                  key={group.category}
                  id={`faq-${group.category.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "")}`}
                >
                  <h3 className="section-label mb-6 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-[#E8540A]" aria-hidden="true" />
                    {group.category}
                  </h3>
                  {group.items.map((item) => {
                    const key = `${group.category}-${globalIndex}`;
                    const currentIndex = globalIndex++;
                    return (
                      <AccordionItem
                        key={key}
                        question={item.q}
                        answer={item.a}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggle(key)}
                        index={currentIndex}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
