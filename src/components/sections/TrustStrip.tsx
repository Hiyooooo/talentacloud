import React from "react";
import { trustStats, clientLogos } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-[var(--border-1)] bg-[var(--bg-1)]/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ilustratif: ganti dengan data & klien asli */}
        {/* 4 Angka Metrik Terpercaya */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-[var(--border-1)] text-center">
          {trustStats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-[var(--text-1)] tracking-tight tabular-nums mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-3)] font-medium">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Deretan Klien / Perusahaan Fiktif */}
        <div className="pt-8 text-center">
          <p className="text-xs uppercase tracking-wider text-[var(--text-3)] font-semibold mb-6">
            Dipercaya oleh tim digital berkembang di Indonesia
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {clientLogos.map((client, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base font-semibold text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors select-none tracking-tight font-mono"
              >
                {client}
              </span>
            ))}
          </div>

          <div className="mt-4 text-[10px] text-[var(--text-3)] italic">
            *Logo dan angka di atas bersifat ilustratif untuk kebutuhan peninjauan fitur.
          </div>
        </div>
      </div>
    </section>
  );
}
