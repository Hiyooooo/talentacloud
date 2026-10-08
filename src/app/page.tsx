import { generateJsonLd } from "@/lib/schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { Modules } from "@/components/sections/Modules";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  const jsonLd = generateJsonLd();

  return (
    <>
      {/* Schema Markup JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Navbar */}
      <Navbar />

      <main id="konten-utama">
        {/* 2. Hero + Mockup Bento */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Masalah -> Solusi */}
        <Problem />

        {/* 5. Modul (Bento 5 Modul Wajib) */}
        <Modules />

        {/* 6. Cara Kerja (3 Langkah) */}
        <HowItWorks />

        {/* 7. Testimoni */}
        <Testimonials />

        {/* 8. Paket & Harga (Ilustratif) */}
        <Pricing />

        {/* 9. FAQ */}
        <Faq />

        {/* 10. CTA Penutup */}
        <FinalCta />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button (Pojok Kanan Bawah) */}
      <WhatsAppButton />
    </>
  );
}
