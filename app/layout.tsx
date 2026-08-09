import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Montserrat({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oshomysteryschoolnepal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "OSHO Mystery School Nepal | Meditation & Retreat Center Kathmandu", template: "%s | OSHO Mystery School Nepal" },
  description: "A meditation and retreat center near Kathmandu offering OSHO meditation, silence, nature, celebration, and community.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "OSHO Mystery School Nepal", title: "OSHO Mystery School Nepal", description: "Meditation, awareness, celebration, nature, and community near Kathmandu." },
  twitter: { card: "summary_large_image", title: "OSHO Mystery School Nepal", description: "A meditation and retreat center near Kathmandu, Nepal." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = getSiteSettings();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OSHO Mystery School Nepal",
    url: siteUrl,
    address: settings.address ? { "@type": "PostalAddress", streetAddress: settings.address, addressLocality: "Kathmandu", addressCountry: "NP" } : undefined,
    email: settings.email,
    telephone: settings.phone,
    sameAs: [settings.facebook, settings.instagram].filter(Boolean),
  };
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-2 focus:translate-y-0">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
