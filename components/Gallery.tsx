"use client";

import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";

// Placeholder gallery items — replace with actual images
const galleryImages = [
  {
    id: 1,
    src: "https://picsum.photos/seed/festival1/800/600",
    alt: "1. Festival gösterim salonu",
    category: "Gösterimler",
    caption: "Açılış Gösterimi · Mayıs 2025",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/festival2/600/800",
    alt: "Ödül töreni sahne",
    category: "Ödül Töreni",
    caption: "Panorama 1326 · Ödül Töreni",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/festival3/800/500",
    alt: "Senaryo atölyesi",
    category: "Atölye",
    caption: "Senaryo Yazımı Atölyesi",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/festival4/700/500",
    alt: "Birincilik ödülü töreni",
    category: "Ödül Töreni",
    caption: "\"Mori\" — Birincilik Ödülü",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/festival5/800/600",
    alt: "Film gösterimi",
    category: "Gösterimler",
    caption: "Finalist Gösterimi",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/festival6/600/700",
    alt: "Atölye çalışması",
    category: "Atölye",
    caption: "Yönetmenlik Atölyesi",
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/festival7/800/450",
    alt: "Panorama 1326 Müzesi",
    category: "Ödül Töreni",
    caption: "Panorama 1326 Bursa Fetih Müzesi",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/festival8/600/600",
    alt: "Halil Ergün Emek Onur Ödülü",
    category: "Ödül Töreni",
    caption: "Emek Onur Ödülü — Halil Ergün",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/festival9/800/550",
    alt: "Seyirci kitlesi",
    category: "Gösterimler",
    caption: "Gala Gecesi Seyircileri",
  },
];

const categories = ["Tümü", "Gösterimler", "Ödül Töreni", "Atölye"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filtered =
    activeCategory === "Tümü"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="galeri"
      className="bg-[#0A0A0A] py-28 lg:py-40"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Galeri</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2
            id="gallery-heading"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            1. Festival'den
            <br />
            <span className="text-[#E8540A]">Kareler</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed">
            10 Mayıs 2025 · Panorama 1326 Bursa Fetih Müzesi
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={150} className="mb-10">
          <div className="flex flex-wrap gap-1" role="tablist" aria-label="Galeri kategorileri">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[0.65rem] font-semibold tracking-[0.12em] uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#E8540A] text-[#F5F0E8]"
                    : "bg-[#1A1A1A] text-[#6B6B6B] hover:text-[#F5F0E8] hover:bg-[#2A2A2A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry grid */}
        <AnimatedSection delay={200} threshold={0.05}>
          <div className="columns-2 lg:columns-3 gap-1 space-y-1" role="list" aria-label="Galeri görselleri">
            {filtered.map((image) => (
              <div
                key={image.id}
                className="gallery-item break-inside-avoid mb-1 relative overflow-hidden group cursor-pointer"
                role="listitem"
                onClick={() => setLightboxImage(image)}
                onKeyDown={(e) => e.key === "Enter" && setLightboxImage(image)}
                tabIndex={0}
                aria-label={`${image.alt} — büyütmek için tıkla`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full block transition-transform duration-500 group-hover:scale-[1.04] group-hover:brightness-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#F5F0E8] text-xs font-medium leading-snug">{image.caption}</p>
                  <span className="text-[0.6rem] text-[#E8540A] font-semibold tracking-[0.1em] uppercase mt-1">
                    {image.category}
                  </span>
                </div>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-7 h-7 border border-[#F5F0E8]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#F5F0E8] text-xs" aria-hidden="true">⤢</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9998] bg-[#0A0A0A]/98 flex items-center justify-center p-4 lg:p-12"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Görsel büyütme"
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#F5F0E8] hover:border-[#E8540A] hover:text-[#E8540A] transition-colors duration-200 z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Kapat"
          >
            ✕
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[#F5F0E8] text-sm">{lightboxImage.caption}</p>
              <span className="section-label">{lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
