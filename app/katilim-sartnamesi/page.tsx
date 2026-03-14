import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Katılım Şartnamesi | Bursa Altın Çınar Kısa Film Festivali 2026",
  description:
    "2. Bursa Altın Çınar Kısa Film Festivali katılım şartnamesi. Başvuru koşulları, film kriterleri, jüri süreci ve telif hakları.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[1.4rem] font-bold text-[#F5F0E8] mb-6 mt-14 first:mt-0 flex items-center gap-4"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {children}
    </h2>
  );
}

function Rule({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6 py-5 border-b border-[#2A2A2A]">
      <span className="text-[0.65rem] font-bold text-[#E8540A] tracking-[0.1em] flex-shrink-0 mt-0.5 w-6">{number}</span>
      <p className="text-[#6B6B6B] text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default function KatilimSartnamesi() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <div className="bg-[#0A0A0A] pt-28 lg:pt-36 pb-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-[#6B6B6B] text-xs hover:text-[#E8540A] transition-colors duration-200 flex items-center gap-2">
              ← Ana Sayfa
            </Link>
            <span className="text-[#2A2A2A]">/</span>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#E8540A]">Şartname</span>
          </div>
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Katılım Şartnamesi
          </h1>
          <div className="h-[1px] bg-[#E8540A] mb-6" />
          <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xl">
            2. Bursa Altın Çınar Kısa Film Festivali — Osmangazi Belediyesi tarafından düzenlenmektedir.
            Son başvuru tarihi: <strong className="text-[#E8540A]">31 Mart 2026</strong>.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#111111] py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16">

          {/* Download CTA top */}
          <div className="border border-dashed border-[#E8540A]/40 p-6 mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[#F5F0E8] font-semibold text-sm mb-1">Şartnameyi PDF Olarak İndir</p>
              <p className="text-[#6B6B6B] text-xs">Resmi belgeyi bilgisayarınıza kaydedin</p>
            </div>
            <a href="/sartname.pdf" download className="btn-primary flex-shrink-0 text-[0.65rem] py-3 px-5">
              PDF İndir
            </a>
          </div>

          {/* 6.1 */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">6.1</span>
            </div>
            <SectionTitle>Genel Koşullar</SectionTitle>
            <div className="border-t border-[#2A2A2A]">
              <Rule number="a">Festival ulusal kısa filmlere açıktır.</Rule>
              <Rule number="b">Yapımcılardan en az biri ya da filmin yönetmeni T.C. vatandaşı olmalıdır.</Rule>
              <Rule number="c">Başvuru tamamen ücretsizdir.</Rule>
              <Rule number="d">Birden fazla eserle başvuru yapılabilir.</Rule>
              <Rule number="e">Daha önce ulusal ya da uluslararası yarışmalara katılmış ya da ödül almış filmler başvurabilir.</Rule>
            </div>
          </div>

          {/* 6.2 */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">6.2</span>
            </div>
            <SectionTitle>Film Kriterleri</SectionTitle>
            <div className="border-t border-[#2A2A2A]">
              <Rule number="a">
                <strong className="text-[#F5F0E8]">Süre:</strong> En fazla 20 dakika (jenerik dahil).
              </Rule>
              <Rule number="b">
                <strong className="text-[#F5F0E8]">Tür:</strong> Kurmaca, belgesel, animasyon, deneysel. Tür ayrımı gözetilmemektedir.
              </Rule>
              <Rule number="c">
                <strong className="text-[#F5F0E8]">Çekim yılı:</strong> 2024 veya 2025 yılında tamamlanmış olmalıdır.
              </Rule>
              <Rule number="d">
                <strong className="text-[#F5F0E8]">Gönderi formatı:</strong> Çevrimiçi (Vimeo veya YouTube) şifreli özel link olarak gönderilmelidir.
              </Rule>
            </div>
          </div>

          {/* 6.3 */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">6.3</span>
            </div>
            <SectionTitle>Başvuru İçin Gerekenler</SectionTitle>
            <div className="border-t border-[#2A2A2A]">
              {[
                "Ad Soyad",
                "Telefon ve E-posta",
                "Film Künyesi (Türkçe ve İngilizce)",
                "Kısa Özet (Türkçe ve İngilizce — maks. 1000 karakter)",
                "Yönetmen Biyografisi ve Filmografisi (Türkçe ve İngilizce — maks. 500 karakter)",
                "Yönetmen Fotoğrafı (yüksek çözünürlük, JPG)",
                "Film Fotoğrafları (kamera arkası görüntüsü değil — filmin içinden kareler, JPG)",
                "Afiş (yüksek çözünürlük, dikey format)",
                "Ödül Listesi (varsa)",
                "Fragman/Teaser (30 saniye) — link",
                "Fragman Şifresi",
                "Şifreli İzleme Linki",
                "İzleme Linki Şifresi",
              ].map((item, i) => (
                <Rule key={i} number={String(i + 1).padStart(2, "0")}>
                  {item}
                </Rule>
              ))}
            </div>
          </div>

          {/* 6.4 */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">6.4</span>
            </div>
            <SectionTitle>Jüri & Değerlendirme</SectionTitle>
            <div className="border-t border-[#2A2A2A]">
              <Rule number="a">
                <strong className="text-[#F5F0E8]">Ön Jüri:</strong> Gelen tüm başvuruları değerlendirir ve finalistleri belirler.
              </Rule>
              <Rule number="b">
                <strong className="text-[#F5F0E8]">Ana Jüri:</strong> Finalist filmler arasında ödül kararlarını verir.
              </Rule>
              <Rule number="c">Jüri kararları kesindir; itiraz hakkı yoktur.</Rule>
              <Rule number="d">Jüri üyeleri yarışma filmlerine medyada yorum yapamaz.</Rule>
            </div>
          </div>

          {/* 6.5 */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">6.5</span>
            </div>
            <SectionTitle>Telif & Yasal</SectionTitle>
            <div className="border-t border-[#2A2A2A]">
              <Rule number="a">
                Filmde kullanılan tüm görüntü, müzik, metin ve ses kayıtlarının telif hakları başvuru sahibine aittir.
              </Rule>
              <Rule number="b">
                Festival, seçilen filmleri yalnızca ticari olmayan kültürel etkinlikler kapsamında gösterme hakkına sahiptir.
              </Rule>
              <Rule number="c">
                Başvurunun tamamlanmasıyla birlikte tüm şartname hükümleri kabul edilmiş sayılır.
              </Rule>
            </div>
          </div>

          {/* Download CTA bottom */}
          <div className="mt-16 pt-10 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Başvuru için hazır mısınız?</p>
              <p className="text-[#6B6B6B] text-sm">Son başvuru tarihi 31 Mart 2026</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/sartname.pdf" download className="btn-outline text-center">
                PDF İndir
              </a>
              <Link href="/#basvuru" className="btn-primary text-center">
                Film Başvurusu Yap
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
