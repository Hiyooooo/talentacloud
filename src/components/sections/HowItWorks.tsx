import React from "react";
import { UserPlus, Sliders, Smartphone } from "lucide-react";
import { howItWorksSteps } from "@/lib/data";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserPlus className="w-5 h-5 text-[var(--cyan)]" />;
      case 1:
        return <Sliders className="w-5 h-5 text-[var(--cyan)]" />;
      case 2:
        return <Smartphone className="w-5 h-5 text-[var(--cyan)]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="cara-kerja"
      className="py-20 md:py-28 bg-[var(--bg-1)]/40 border-y border-[var(--border-1)]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)] block mb-2">
              Proses Cepat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-3">
              Mulai dalam 3 langkah.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-2)]">
              Tidak membutuhkan instalasi server rumit atau konsultasi berbulan-bulan.
            </p>
          </Reveal>
        </div>

        {/* 3 Steps Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorksSteps.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 100}>
              <BentoCard className="flex flex-col justify-between h-full p-6">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-[var(--text-3)] group-hover:text-[var(--cyan)] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-3)] border border-[var(--border-2)] flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-1)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-1)] text-[11px] font-mono text-[var(--cyan)]">
                  {step.subtext}
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
