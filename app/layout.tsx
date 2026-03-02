import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Simha Fintech — Institutional-Grade Blockchain & Crypto Solutions",
    template: "%s | Simha Fintech",
  },
  description:
    "Simha Fintech provides 21 institutional-grade blockchain and cryptocurrency solutions. EU-regulated fintech company offering Financial, Technical, and Consulting services from Kraków, Poland.",
  keywords: [
    "blockchain solutions",
    "cryptocurrency services",
    "fintech Poland",
    "EU regulated crypto",
    "institutional crypto",
    "DeFi",
    "smart contracts",
    "crypto exchange",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Simha Fintech",
    title: "Simha Fintech — Institutional-Grade Blockchain & Crypto Solutions",
    description:
      "21 blockchain and cryptocurrency solutions. EU-regulated, institutional-grade fintech from Kraków, Poland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simha Fintech — Institutional-Grade Blockchain & Crypto Solutions",
    description:
      "21 blockchain and cryptocurrency solutions. EU-regulated, institutional-grade fintech from Kraków, Poland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        {/* Mesh Background */}
        <div className="mesh-bg" aria-hidden="true">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-blob mesh-blob-3" />
        </div>

        <Navbar />

        <main style={{ paddingTop: "var(--navbar-height)" }}>
          {children}
        </main>

        <Footer />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Simha Fintech sp. z o.o.",
              url: "https://simhafintech.com",
              logo: "https://simhafintech.com/logo.png",
              description:
                "Institutional-grade blockchain and cryptocurrency solutions. EU-regulated fintech company from Kraków, Poland.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kraków",
                addressCountry: "PL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@simhafintech.com",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
