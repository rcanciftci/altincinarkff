"use client";

import { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AnimatedSection from "./ui/AnimatedSection";

const formSchema = z.object({
  adSoyad: z.string().min(3, "En az 3 karakter giriniz"),
  telefon: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  eposta: z.string().email("Geçerli bir e-posta adresi giriniz"),
  filmKunyesi: z.string().min(10, "Film künyesi gereklidir"),
  kisaOzet: z.string().min(20, "Kısa özet en az 20 karakter olmalıdır"),
  yonetmenBiyografi: z.string().min(20, "Biyografi en az 20 karakter olmalıdır"),
  yonetmenFoto: z
    .any()
    .refine((f) => f instanceof FileList && f.length > 0, "Fotoğraf gereklidir"),
  filmFotolar: z
    .any()
    .refine((f) => f instanceof FileList && f.length > 0, "En az bir fotoğraf gereklidir"),
  afis: z
    .any()
    .refine((f) => f instanceof FileList && f.length > 0, "Afiş gereklidir"),
  odulListesi: z.string().optional(),
  fragmanLink: z.string().optional(),
  fragmanSifre: z.string().optional(),
  izlemeLink: z.string().min(1, "İzleme linki gereklidir"),
  izlemeSifre: z.string().min(1, "İzleme şifresi gereklidir"),
  robotCheck: z
    .boolean()
    .refine((val) => val === true, { message: "Lütfen doğrulayınız" }),
});

type FormData = z.infer<typeof formSchema>;

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="form-label">
        {label}
        {required && <span className="text-[#E8540A] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-[0.7rem] text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function FileUploadField({
  id,
  label,
  hint,
  accept,
  multiple = false,
  required = false,
  registration,
  error,
}: {
  id: string;
  label: string;
  hint?: string;
  accept: string;
  multiple?: boolean;
  required?: boolean;
  registration: UseFormRegisterReturn;
  error?: string;
}) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="space-y-2">
      <label className="form-label">
        {label}
        {required && <span className="text-[#E8540A] ml-1">*</span>}
      </label>
      {hint && (
        <p className="text-[0.65rem] text-[#4A4A4A] leading-tight">{hint}</p>
      )}
      <div
        className={`border border-dashed transition-colors duration-200 ${
          error ? "border-red-500" : "border-[#2A2A2A] hover:border-[#E8540A]"
        }`}
      >
        <input
          {...registration}
          type="file"
          id={id}
          accept={accept}
          multiple={multiple}
          className="sr-only"
          onChange={(e) => {
            registration.onChange(e);
            if (e.target.files) setFiles(Array.from(e.target.files));
          }}
        />
        <label
          htmlFor={id}
          className="cursor-pointer flex flex-col items-center justify-center py-6 px-4 gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={error ? "#f87171" : "#E8540A"}
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          {files.length > 0 ? (
            <span className="text-[0.7rem] text-[#F5F0E8] text-center break-all">
              {multiple && files.length > 1
                ? `${files.length} dosya seçildi`
                : files[0].name}
            </span>
          ) : (
            <span className="text-[0.7rem] text-[#6B6B6B] text-center">
              <span className="text-[#E8540A] font-semibold">Dosya Seç</span>
            </span>
          )}
        </label>
      </div>
      {error && (
        <p className="text-[0.7rem] text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    setSubmitted(true);
    window.scrollTo({
      top: document.getElementById("basvuru")?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <section id="basvuru" className="bg-[#111111] py-28 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 lg:px-16 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 border border-[#E8540A] flex items-center justify-center mx-auto mb-8">
              <span className="text-[#E8540A] text-2xl">✓</span>
            </div>
            <h2
              className="text-[2rem] font-bold text-[#F5F0E8] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Başvurunuz Alındı
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed max-w-md mx-auto">
              Başvurunuz başarıyla gönderilmiştir. Ön jüri değerlendirmesi
              sürecinde sizinle iletişime geçilecektir. Teşekkür ederiz.
            </p>
          </div>
          <div className="orange-rule mb-8" />
          <p className="text-[#4A4A4A] text-sm">
            Sorularınız için:{" "}
            <a
              href="mailto:altincinarkisafilmfestivali@osmangazi.bel.tr"
              className="text-[#E8540A] hover:underline"
            >
              altincinarkisafilmfestivali@osmangazi.bel.tr
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="basvuru"
      className="bg-[#111111] py-28 lg:py-40"
      aria-labelledby="form-heading"
    >
      <div className="max-w-[900px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-[#E8540A]" />
          <span className="section-label">Katılım</span>
        </AnimatedSection>
        <AnimatedSection delay={100} className="mb-12">
          <h2
            id="form-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#F5F0E8] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Film Başvuru Formu
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed">
            Son başvuru tarihi:{" "}
            <strong className="text-[#E8540A]">31 Mart 2026</strong>. Başvuru
            tamamen ücretsizdir.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            noValidate
          >
            {/* Ad Soyad | Telefon | E-Posta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                label="Ad Soyad"
                required
                error={errors.adSoyad?.message}
              >
                <input
                  {...register("adSoyad")}
                  type="text"
                  className={`form-input ${errors.adSoyad ? "error" : ""}`}
                  placeholder="Ad Soyad"
                  autoComplete="name"
                />
              </FormField>
              <FormField
                label="Telefon"
                required
                error={errors.telefon?.message}
              >
                <input
                  {...register("telefon")}
                  type="tel"
                  className={`form-input ${errors.telefon ? "error" : ""}`}
                  placeholder="+90 5XX XXX XX XX"
                  autoComplete="tel"
                />
              </FormField>
              <FormField
                label="E-Posta"
                required
                error={errors.eposta?.message}
              >
                <input
                  {...register("eposta")}
                  type="email"
                  className={`form-input ${errors.eposta ? "error" : ""}`}
                  placeholder="eposta@ornek.com"
                  autoComplete="email"
                />
              </FormField>
            </div>

            {/* Film Künyesi */}
            <FormField
              label="Film Künyesi (TR/EN)"
              required
              error={errors.filmKunyesi?.message}
            >
              <textarea
                {...register("filmKunyesi")}
                rows={5}
                className={`form-input resize-none ${errors.filmKunyesi ? "error" : ""}`}
                placeholder="Film adı, yönetmen, yapımcı, yapım yılı, süre, ülke, dil..."
              />
            </FormField>

            {/* Kısa Özet */}
            <FormField
              label="Kısa Özet (TR/EN)"
              required
              error={errors.kisaOzet?.message}
            >
              <textarea
                {...register("kisaOzet")}
                rows={5}
                className={`form-input resize-none ${errors.kisaOzet ? "error" : ""}`}
                placeholder="Filmin kısa özeti (Türkçe ve İngilizce)..."
              />
            </FormField>

            {/* Yönetmen Biyografisi */}
            <FormField
              label="Yönetmen Biyografisi ve Filmografisi (TR/EN)"
              required
              error={errors.yonetmenBiyografi?.message}
            >
              <textarea
                {...register("yonetmenBiyografi")}
                rows={5}
                className={`form-input resize-none ${errors.yonetmenBiyografi ? "error" : ""}`}
                placeholder="Yönetmen biyografisi ve filmografisi (Türkçe ve İngilizce)..."
              />
            </FormField>

            {/* File Uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FileUploadField
                id="yonetmen-foto"
                label="Yönetmen Fotoğrafı"
                accept=".jpg,.jpeg"
                required
                registration={register("yonetmenFoto")}
                error={errors.yonetmenFoto?.message as string}
              />
              <FileUploadField
                id="film-fotolar"
                label="Film Fotoğrafları"
                hint="Kamera arkası görüntüsü değil, filmin içinden kareler olmalıdır."
                accept=".jpg,.jpeg"
                multiple
                required
                registration={register("filmFotolar")}
                error={errors.filmFotolar?.message as string}
              />
              <FileUploadField
                id="afis"
                label="Afiş (yüksek çözünürlük)"
                accept=".jpg,.jpeg,.png"
                required
                registration={register("afis")}
                error={errors.afis?.message as string}
              />
            </div>

            {/* Ödül Listesi */}
            <FormField label="Ödül Listesi">
              <textarea
                {...register("odulListesi")}
                rows={4}
                className="form-input resize-none"
                placeholder="Varsa daha önce aldığınız ödülleri giriniz..."
              />
            </FormField>

            {/* Fragman */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                label="Fragman/teaser (30 Sn) Linki"
                error={errors.fragmanLink?.message}
              >
                <input
                  {...register("fragmanLink")}
                  type="url"
                  className={`form-input ${errors.fragmanLink ? "error" : ""}`}
                  placeholder="https://..."
                />
              </FormField>
              <FormField label="Fragman Şifresi">
                <input
                  {...register("fragmanSifre")}
                  type="text"
                  className="form-input"
                  placeholder="Şifre"
                />
              </FormField>
            </div>

            {/* Şifreli İzleme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                label="Şifreli İzleme Linki"
                required
                error={errors.izlemeLink?.message}
              >
                <input
                  {...register("izlemeLink")}
                  type="url"
                  className={`form-input ${errors.izlemeLink ? "error" : ""}`}
                  placeholder="https://..."
                />
              </FormField>
              <FormField
                label="Şifreli İzleme Linki Şifresi"
                required
                error={errors.izlemeSifre?.message}
              >
                <input
                  {...register("izlemeSifre")}
                  type="text"
                  className={`form-input ${errors.izlemeSifre ? "error" : ""}`}
                  placeholder="Şifre"
                />
              </FormField>
            </div>

            {/* Robot Check */}
            <div>
              <label className="flex items-center gap-4 cursor-pointer group w-fit">
                <div className="relative flex-shrink-0">
                  <input
                    {...register("robotCheck")}
                    type="checkbox"
                    className="sr-only peer"
                    id="robot-check"
                  />
                  <div className="w-5 h-5 border border-[#2A2A2A] peer-checked:border-[#E8540A] peer-checked:bg-[#E8540A] transition-colors duration-200 flex items-center justify-center">
                    <span className="text-[#F5F0E8] text-xs opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
                      ✓
                    </span>
                  </div>
                </div>
                <span className="text-[#6B6B6B] text-sm group-hover:text-[#F5F0E8] transition-colors duration-200">
                  Ben bir insanım
                </span>
              </label>
              {errors.robotCheck && (
                <p className="text-[0.7rem] text-red-400 mt-2 ml-9" role="alert">
                  {errors.robotCheck.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary flex items-center gap-3"
              >
                Başvuruyu Gönder
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
