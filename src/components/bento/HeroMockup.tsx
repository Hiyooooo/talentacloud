"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export function HeroMockup() {
  const targetPayroll = 482750000;
  const [workSeconds, setWorkSeconds] = useState(15153); // 04:12:33 in seconds
  const [payrollAmount, setPayrollAmount] = useState(targetPayroll);

  // Counter animation on mount
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setPayrollAmount(Math.floor(easeProgress * targetPayroll));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Timer ticking for attendance duration
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatWorkTime = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl xl:max-w-7xl group [perspective:1000px]">
      {/* Radial Glow behind mockup */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-[rgba(59,130,246,0.18)] to-[rgba(34,211,238,0.14)] rounded-[28px] blur-2xl opacity-60 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Window */}
      <div
        className="w-full bg-[var(--surface-1)]/90 backdrop-blur-xl border border-[var(--border-2)] rounded-[20px] shadow-2xl overflow-hidden transition-transform duration-500 md:[transform:rotateX(4deg)] md:group-hover:[transform:rotateX(0deg)]"
        aria-label="Preview Dashboard TalentaCloud"
      >
        {/* Browser / App Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border-1)] bg-[var(--bg-0)]/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--surface-3)]/60 border border-[var(--border-1)] text-xs text-[var(--text-3)] font-mono">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
            app.talentacloud.id
          </div>

          <div className="flex items-center gap-2 text-xs text-[var(--text-3)]">
            <span className="inline-flex items-center gap-1 text-[var(--success)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
              Sistem Aktif
            </span>
          </div>
        </div>

        {/* Dashboard Bento Content Grid (12 Columns) */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Presensi Aktif (5 Kolom) */}
          <div className="md:col-span-5 p-4 rounded-[14px] bg-[var(--surface-2)]/80 border border-[var(--border-1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-3)]">
                Presensi Aktif
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-[rgba(52,211,153,0.12)] text-[var(--success)] border border-[rgba(52,211,153,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-ping" />
                Hadir · 08:02 WIB
              </span>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-3)] border border-[var(--border-accent)] flex items-center justify-center font-semibold text-sm text-[var(--cyan)]">
                RP
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-1)]">Rani Putri</div>
                <p className="text-xs text-[var(--text-3)]">Head of People · Kantor Jakarta</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[var(--border-1)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-3)]">Jam Kerja Hari Ini</span>
              <span className="font-mono text-sm font-medium text-[var(--text-1)] tabular-nums">
                {formatWorkTime(workSeconds)}
              </span>
            </div>
          </div>

          {/* Card 2: Total Gaji Terbayar (4 Kolom) */}
          <div className="md:col-span-4 p-4 rounded-[14px] bg-[var(--surface-2)]/80 border border-[var(--border-1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-3)]">
                Payroll Periode
              </span>
              <span className="text-xs text-[var(--cyan)] font-medium">Oktober 2026</span>
            </div>

            <div className="my-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-[var(--text-1)] tabular-nums">
                {formatRupiah(payrollAmount)}
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-[var(--success)] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>+4,2% vs bulan lalu (100% diproses)</span>
              </div>
            </div>

            {/* Sparkline SVG 12 points */}
            <div className="mt-3 pt-2 border-t border-[var(--border-1)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-3)]">Tren 12 Bulan</span>
              <svg className="w-28 h-6 overflow-visible" viewBox="0 0 110 24" fill="none">
                <path
                  d="M0 18 L10 16 L20 17 L30 14 L40 15 L50 12 L60 13 L70 9 L80 11 L90 7 L100 8 L110 4"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="110" cy="4" r="3" fill="var(--cyan)" />
              </svg>
            </div>
          </div>

          {/* Card 3: Jadwal Ujian (3 Kolom) */}
          <div className="md:col-span-3 p-4 rounded-[14px] bg-[var(--surface-2)]/80 border border-[var(--border-1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-3)]">
                Jadwal Ujian
              </span>
              <span className="p-1 rounded bg-[var(--surface-3)] text-[var(--cyan)]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
            </div>

            <div>
              <div className="text-sm font-semibold text-[var(--text-1)]">Ujian Onboarding</div>
              <p className="text-xs text-[var(--text-3)] mt-0.5">Kamis, 8 Okt · 10:00 WIB</p>
            </div>

            <div className="mt-3 pt-3 border-t border-[var(--border-1)] flex items-center justify-between">
              {/* Avatar stack */}
              <div className="flex items-center -space-x-1.5">
                <span className="w-6 h-6 rounded-full bg-blue-600 border border-[var(--surface-2)] text-[10px] flex items-center justify-center font-bold text-white">
                  A
                </span>
                <span className="w-6 h-6 rounded-full bg-cyan-600 border border-[var(--surface-2)] text-[10px] flex items-center justify-center font-bold text-white">
                  B
                </span>
                <span className="w-6 h-6 rounded-full bg-slate-600 border border-[var(--surface-2)] text-[10px] flex items-center justify-center font-bold text-white">
                  D
                </span>
                <span className="w-6 h-6 rounded-full bg-[var(--surface-3)] border border-[var(--surface-2)] text-[9px] flex items-center justify-center font-semibold text-[var(--text-3)]">
                  +12
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--cyan)] hover:text-white transition-colors">
                Lihat
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
