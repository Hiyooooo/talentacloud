import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface FinalCtaProps {
  whatsappUrl?: string;
}

export function FinalCta({ whatsappUrl }: FinalCtaProps = {}) {
  const demoTarget =
    whatsappUrl ||
    "mailto:halo@talentacloud.id?subject=Permintaan%20Demo%20TalentaCloud";

  return (
    <section id="final-cta" className="py-20 md:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative rounded-[24px] overflow-hidden p-8 sm:p-12 md:p-16 border border-[var(--border-accent)] bg-[var(--surface-1)] text-center shadow-[var(--glow-cyan)]">
          {/* Subtle Glow backdrop */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[rgba(34,211,238,0.12)] rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Akses Penuh Semua Modul</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-1)] mb-4 leading-tight">
              Siap merapikan HR tim kamu?
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-2)] mb-8 max-w-xl mx-auto">
              Coba 14 hari gratis. Tanpa kartu kredit. Gabungkan seluruh urusan karyawan dalam satu alur yang tenang dan presisi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="#harga" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  <span>Coba Gratis 14 Hari</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a
                href={demoTarget}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Jadwalkan Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
