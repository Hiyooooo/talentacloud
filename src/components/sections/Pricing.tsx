import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section id="harga" className="py-20 md:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* ilustratif: paket harga placeholder */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)] block mb-2">
            Pilihan Paket
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-3">
            Investasi transparan untuk pertumbuhan tim.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)]">
            Semua paket menyertakan masa uji coba 14 hari penuh dengan seluruh modul aktif.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingPlans.map((plan, idx) => {
          const isGrowth = plan.isPopular;

          return (
            <Reveal key={plan.id} delay={idx * 80} className="h-full">
              <BentoCard
                className={`flex flex-col justify-between h-full p-6 sm:p-7 relative ${
                  isGrowth
                    ? "border-[var(--border-accent)] bg-gradient-to-b from-[rgba(20,28,51,0.95)] to-[rgba(15,22,41,0.95)] ring-1 ring-[var(--border-accent)]"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[var(--text-1)]">{plan.name}</h3>
                    {plan.badge && (
                      <Badge variant="cyan" className="font-semibold text-[11px]">
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-[var(--text-2)] min-h-[36px] mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[var(--border-1)]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold font-mono text-[var(--text-1)] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[var(--text-3)] font-mono">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <ul className="space-y-3 mb-8 text-xs text-[var(--text-2)]">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[rgba(34,211,238,0.15)] text-[var(--cyan)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href="mailto:halo@talentacloud.id?subject=Permintaan%20Percobaan%20TalentaCloud"
                    className="block w-full"
                  >
                    <Button
                      variant={isGrowth ? "primary" : "secondary"}
                      className="w-full text-xs font-semibold"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </a>
                  <p className="text-[10px] text-center text-[var(--text-3)] mt-2.5">
                    Masa coba 14 hari · Tanpa kartu kredit
                  </p>
                </div>
              </BentoCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 text-center text-[10px] text-[var(--text-3)] italic">
        *Harga ilustratif untuk demonstrasi. Hubungi tim kami untuk penawaran skala enterprise.
      </div>
    </section>
  );
}
