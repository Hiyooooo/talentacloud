import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMockup } from "@/components/bento/HeroMockup";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Radial Glow & Hairline Grid */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[rgba(59,130,246,0.18)] to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="animate-hero-eyebrow inline-flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--cyan)]" />
            <span>HRIS modern untuk tim digital</span>
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="animate-hero-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-1)] max-w-5xl mx-auto leading-[1.08] mb-6">
          Semua urusan HR, dalam satu dashboard.
        </h1>

        {/* Subtitle */}
        <p className="animate-hero-subtitle text-base sm:text-lg text-[var(--text-2)] max-w-3xl mx-auto leading-relaxed mb-8">
          Absensi GPS, payroll dengan PPh 21 dan BPJS otomatis, ujian online, library SOP, serta perizinan: terhubung dan rapi. Tanpa spreadsheet, tanpa grup WhatsApp.
        </p>

        {/* CTAs */}
        <div className="animate-hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <a href="#harga" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              <span>Coba Gratis 14 Hari</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <a href="#modul" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Lihat Semua Modul
            </Button>
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
