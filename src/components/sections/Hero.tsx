import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMockup } from "@/components/bento/HeroMockup";
import type { SiteHero } from "@/lib/api";

interface HeroProps {
  hero?: SiteHero & {
    cta_url?: string;
    secondary_cta_text?: string;
    secondary_cta_url?: string;
  };
  whatsappUrl?: string;
}

export function Hero({ hero, whatsappUrl }: HeroProps = {}) {
  const headline = hero?.headline || "Semua urusan HR, dalam satu dashboard.";
  const subheadline =
    hero?.subheadline ||
    "Absensi GPS, payroll dengan PPh 21 dan BPJS otomatis, ujian online, library SOP, serta perizinan: terhubung dan rapi. Tanpa spreadsheet, tanpa grup WhatsApp.";
  const ctaText = hero?.cta_text || "Coba Gratis 14 Hari";
  const ctaUrl = hero?.cta_url || "#harga";
  const secondaryCtaText = hero?.secondary_cta_text || "Lihat Semua Modul";
  const secondaryCtaUrl = hero?.secondary_cta_url || "#modul";

  const waTarget =
    whatsappUrl ||
    "https://wa.me/6281234567890?text=Halo%20TalentaCloud,%20saya%20ingin%20konsultasi%20mengenai%20platform%20HRIS";

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="animate-hero-eyebrow inline-flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--cyan)]" />
            <span>HRIS modern untuk tim digital</span>
          </span>
        </div>

        {/* H1 Headline - Dinamis dari Admin Panel */}
        <h1 className="animate-hero-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-1)] max-w-5xl mx-auto leading-[1.08] mb-6">
          {headline}
        </h1>

        {/* Subtitle - Dinamis dari Admin Panel */}
        <p className="animate-hero-subtitle text-base sm:text-lg text-[var(--text-2)] max-w-3xl mx-auto leading-relaxed mb-8">
          {subheadline}
        </p>

        {/* CTAs: Tombol Utama, Tombol WhatsApp Hero, dan Modul Link */}
        <div className="animate-hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <a href={ctaUrl} className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          {/* Tombol WhatsApp di Hero menggunakan URL otomatis dari API */}
          <a
            href={waTarget}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            aria-label="Konsultasi langsung via WhatsApp"
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 fill-current text-[#25D366]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.32a8.196 8.196 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29" />
              </svg>
              <span>Chat WhatsApp</span>
            </Button>
          </a>

          <a
            href={secondaryCtaUrl}
            className="w-full sm:w-auto text-xs text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors py-2 px-3"
          >
            {secondaryCtaText} ↓
          </a>
        </div>

        {/* Microcopy */}
        <div className="animate-hero-meta flex items-center justify-center gap-4 text-xs text-[var(--text-3)] mb-12 sm:mb-16">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--cyan)]" />
            Tanpa kartu kredit
          </span>
          <span className="text-[var(--border-2)]">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--cyan)]" />
            Setup kurang dari 10 menit
          </span>
        </div>

        {/* Bento Hero Mockup */}
        <div className="animate-hero-mockup">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
