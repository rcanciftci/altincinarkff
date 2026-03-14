import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2. Bursa Altın Çınar Kısa Film Festivali | 8–9 Mayıs 2026",
  description:
    "Osmangazi Belediyesi tarafından düzenlenen 2. Bursa Altın Çınar Kısa Film Festivali. 8–9 Mayıs 2026 tarihlerinde Osmangazi'de gerçekleşecek. Başvurular açık!",
  keywords: [
    "Bursa",
    "kısa film",
    "festival",
    "Altın Çınar",
    "Osmangazi",
    "sinema",
    "2026",
    "film yarışması",
  ],
  authors: [{ name: "Osmangazi Belediyesi" }],
  openGraph: {
    title: "2. Bursa Altın Çınar Kısa Film Festivali",
    description:
      "8–9 Mayıs 2026 · Osmangazi, Bursa. Hikayeni perdede anlat.",
    type: "website",
    locale: "tr_TR",
    siteName: "Altın Çınar Kısa Film Festivali",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "2. Bursa Altın Çınar Kısa Film Festivali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2. Bursa Altın Çınar Kısa Film Festivali",
    description: "8–9 Mayıs 2026 · Osmangazi, Bursa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "2. Bursa Altın Çınar Kısa Film Festivali",
              startDate: "2026-05-08",
              endDate: "2026-05-09",
              location: {
                "@type": "Place",
                name: "Osmangazi Kültür Merkezi",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bursa",
                  addressCountry: "TR",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Osmangazi Belediyesi",
              },
              description:
                "Osmangazi Belediyesi tarafından düzenlenen 2. Bursa Altın Çınar Kısa Film Festivali.",
            }),
          }}
        />
      </head>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
