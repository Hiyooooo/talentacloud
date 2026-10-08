import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const AbsensiCard = dynamic(() => import("@/components/bento/AbsensiCard").then((mod) => mod.AbsensiCard));
const GajiCard = dynamic(() => import("@/components/bento/GajiCard").then((mod) => mod.GajiCard));
const ExamCard = dynamic(() => import("@/components/bento/ExamCard").then((mod) => mod.ExamCard));
const LibraryCard = dynamic(() => import("@/components/bento/LibraryCard").then((mod) => mod.LibraryCard));
const PerizinanCard = dynamic(() => import("@/components/bento/PerizinanCard").then((mod) => mod.PerizinanCard));

export function Modules() {
  return (
    <section id="modul" className="py-20 md:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>5 modul, 1 platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-3 leading-tight">
            Semua yang tim HR kamu butuhkan.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)]">
            Pakai satu modul saja, atau semuanya. Paling kuat saat seluruh data terhubung dalam satu alur.
          </p>
        </Reveal>
      </div>

      {/* Bento Grid (12 Columns Desktop, 2 Tablet, 1 Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-4 mb-12">
        {/* Row 1 Top Left: Absensi (7 Cols, Row Span 2 on Desktop) */}
        <div className="lg:col-span-7 lg:row-span-2">
          <Reveal delay={60} className="h-full">
            <AbsensiCard />
          </Reveal>
        </div>

        {/* Row 1 Top Right: Gaji (5 Cols) */}
        <div className="lg:col-span-5">
          <Reveal delay={120} className="h-full">
            <GajiCard />
          </Reveal>
        </div>

        {/* Row 2 Middle Right: Exam (5 Cols) */}
        <div className="lg:col-span-5">
          <Reveal delay={180} className="h-full">
            <ExamCard />
          </Reveal>
        </div>

        {/* Row 3 Bottom Left: Library (5 Cols) */}
        <div className="lg:col-span-5">
          <Reveal delay={240} className="h-full">
            <LibraryCard />
          </Reveal>
        </div>

        {/* Row 3 Bottom Right: Perizinan (7 Cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={300} className="h-full">
            <PerizinanCard />
          </Reveal>
        </div>
      </div>

      {/* CTA Under Grid */}
      <Reveal delay={360}>
        <div className="text-center pt-4">
          <a href="#harga">
            <Button size="lg" variant="primary">
              <span>Coba Gratis 14 Hari</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
