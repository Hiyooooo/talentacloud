import React from "react";
import { ArrowDown, MapPin, Wallet, CalendarCheck, XCircle, CheckCircle2 } from "lucide-react";
import { problemSolutions } from "@/lib/data";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";

export function Problem() {
  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[var(--cyan)]" />;
      case "Wallet":
        return <Wallet className="w-5 h-5 text-[var(--cyan)]" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5 text-[var(--cyan)]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)] block mb-2">
            Tantangan Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-4 leading-tight">
            HR manual itu mahal, diam-diam.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)]">
            Waktu habis merekap absensi dan menghitung pajak, sementara karyawan menunggu kejelasan cuti mereka.
          </p>
        </Reveal>
      </div>

      {/* 3 Sebelum -> Sesudah Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {problemSolutions.map((item, idx) => (
          <Reveal key={idx} delay={idx * 80}>
            <BentoCard className="flex flex-col justify-between h-full p-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-3)] border border-[var(--border-2)] flex items-center justify-center mb-6">
                  {getIcon(item.icon)}
                </div>

                {/* Sebelum */}
                <div className="p-3 rounded-lg bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.2)] mb-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[var(--danger)] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[var(--danger)] block">
                        Sebelumnya
                      </span>
                      <p className="text-xs text-[var(--text-2)] font-medium mt-0.5">
                        {item.before}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sesudah */}
                <div className="p-3 rounded-lg bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)] mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[var(--success)] block">
                        Dengan TalentaCloud
                      </span>
                      <p className="text-xs text-[var(--text-1)] font-semibold mt-0.5">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-3)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>

      {/* Link ke Modul */}
      <Reveal delay={200}>
        <div className="text-center">
          <a
            href="#modul"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--cyan)] hover:text-white transition-colors"
          >
            <span>Lihat bagaimana kelima modul kami menyelesaikannya</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
