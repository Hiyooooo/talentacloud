import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* ilustratif: testimoni fiktif untuk demo */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)] block mb-2">
            Pengalaman Pengguna
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-3">
            Dipercaya oleh praktisi People & Culture.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)]">
            Dengar bagaimana tim startup menghemat jam kerja mingguan dengan platform terintegrasi.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Reveal key={idx} delay={idx * 80}>
            <BentoCard className="flex flex-col justify-between h-full p-6">
              <div>
                <Quote className="w-6 h-6 text-[var(--cyan)] opacity-70 mb-4" />
                <p className="text-sm text-[var(--text-1)] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-1)]">
                <div className="w-9 h-9 rounded-full bg-[var(--surface-3)] border border-[var(--border-2)] flex items-center justify-center font-semibold text-xs text-[var(--cyan)]">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-1)]">{t.name}</div>
                  <p className="text-[11px] text-[var(--text-3)]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center text-[10px] text-[var(--text-3)] italic">
        *Kutipan dan identitas di atas disimulasikan sebagai representasi feedback pengguna.
      </div>
    </section>
  );
}
