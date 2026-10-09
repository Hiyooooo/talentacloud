"use client";

import React, { useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import {
  CalendarCheck,
  Check,
  X,
  FileCheck2,
  Clock,
  HeartPulse,
  Calendar,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { initialLeaveRequests, LeaveRequest } from "@/lib/data";

export function PerizinanCard() {
  const [requests, setRequests] = useState<LeaveRequest[]>(initialLeaveRequests);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dewiLeaveBalance, setDewiLeaveBalance] = useState(8);

  const currentItem = requests[currentIndex];

  const handleAction = (status: "approved" | "rejected") => {
    if (!currentItem) return;

    if (currentItem.id === "leave-1" && status === "approved") {
      // Reduce Dewi's leave by 3 days
      setDewiLeaveBalance((prev) => Math.max(prev - 3, 0));
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setRequests(initialLeaveRequests);
    setCurrentIndex(0);
    setDewiLeaveBalance(8);
  };

  const isAllReviewed = currentIndex >= requests.length;

  return (
    <BentoCard className="flex flex-col justify-between h-full group" aria-label="Modul Perizinan">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.25)] flex items-center justify-center">
            <CalendarCheck className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
            Perizinan
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-2 tracking-tight">
          Setujui izin tanpa chat panjang.
        </h3>
        <p className="text-sm text-[var(--text-2)] mb-5 max-w-2xl">
          Cuti, izin sakit, dan lembur dengan alur approval jelas dan sisa cuti yang transparan.
        </p>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Approval Panel (7 cols) */}
          <div className="md:col-span-7 p-4 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] flex flex-col justify-between">
            {isAllReviewed ? (
              <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(52,211,153,0.15)] text-[var(--success)] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-1)]">
                    Semua permintaan sudah ditinjau
                  </div>
                  <p className="text-xs text-[var(--text-3)] mt-0.5">
                    Notifikasi telah otomatis dikirimkan ke karyawan.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-lg bg-[var(--surface-2)] text-xs text-[var(--cyan)] border border-[var(--border-accent)] hover:bg-[var(--surface-1)] transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Demo</span>
                </button>
              </div>
            ) : (
              <div>
                {/* Stepper Approval Workflow */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-1)] text-[11px]">
                  <div className="flex items-center gap-1.5 text-[var(--success)] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[rgba(52,211,153,0.2)] flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span>Diajukan</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--text-3)]" />
                  <div className="flex items-center gap-1.5 text-[var(--cyan)] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[var(--cyan-soft)] border border-[rgba(34,211,238,0.4)] flex items-center justify-center text-[10px] font-bold">
                      2
                    </span>
                    <span>Atasan Langsung</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--text-3)]" />
                  <div className="flex items-center gap-1.5 text-[var(--text-3)]">
                    <span className="w-4 h-4 rounded-full bg-[var(--surface-2)] flex items-center justify-center text-[10px]">
                      3
                    </span>
                    <span>HR Dept</span>
                  </div>
                </div>

                {/* Request Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-1)]">
                        {currentItem.employeeName}
                      </span>
                      <span className="text-[11px] text-[var(--text-3)] ml-2">
                        ({currentItem.role})
                      </span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase border ${
                        currentItem.type === "cuti"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                          : currentItem.type === "sakit"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                          : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                      }`}
                    >
                      {currentItem.type === "cuti"
                        ? "Cuti Tahunan"
                        : currentItem.type === "sakit"
                        ? "Izin Sakit"
                        : "Lembur"}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-[var(--text-1)]">
                    {currentItem.title}
                  </div>
                  <p className="text-xs text-[var(--text-2)]">{currentItem.detail}</p>
                </div>

                {/* Accept / Reject Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-1)]">
                  <button
                    onClick={() => handleAction("approved")}
                    className="flex-1 py-2 px-3 rounded-lg bg-[rgba(52,211,153,0.15)] text-[var(--success)] border border-[rgba(52,211,153,0.3)] hover:bg-[rgba(52,211,153,0.25)] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Setujui Permintaan</span>
                  </button>
                  <button
                    onClick={() => handleAction("rejected")}
                    className="py-2 px-3 rounded-lg bg-transparent text-[var(--danger)] border border-[rgba(248,113,113,0.3)] hover:bg-[rgba(248,113,113,0.1)] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Tolak</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sisa Cuti Transparency Panel (5 cols) */}
          <div className="md:col-span-5 p-4 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--border-1)]">
                <span className="text-xs font-semibold text-[var(--text-1)]">
                  Transparansi Saldo Cuti
                </span>
                <span className="text-[10px] text-[var(--text-3)]">Tahun 2026</span>
              </div>

              {/* Employee 1: Dewi Anggraini (interactive update) */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[var(--text-1)]">Dewi Anggraini</span>
                  <span className="font-mono text-[var(--cyan)] font-semibold transition-all">
                    {dewiLeaveBalance} / 12 Hari
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[var(--surface-1)] overflow-hidden">
                  <div
                    className="h-full bg-[var(--cyan)] transition-all duration-500 rounded-full"
                    style={{ width: `${(dewiLeaveBalance / 12) * 100}%` }}
                  />
                </div>
                {dewiLeaveBalance < 8 && (
                  <span className="text-[10px] text-[var(--success)] mt-1 block">
                    -3 hari cuti tahunan berhasil dipotong
                  </span>
                )}
              </div>

              {/* Employee 2: Fajar Nugroho */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[var(--text-1)]">Fajar Nugroho</span>
                  <span className="font-mono text-[var(--text-2)] font-semibold">12 / 12 Hari</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[var(--surface-1)] overflow-hidden">
                  <div
                    className="h-full bg-slate-500 rounded-full"
                    style={{ width: `100%` }}
                  />
                </div>
              </div>

              {/* Employee 3: Bagas Pratama */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[var(--text-1)]">Bagas Pratama</span>
                  <span className="font-mono text-[var(--text-2)] font-semibold">10 / 12 Hari</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[var(--surface-1)] overflow-hidden">
                  <div
                    className="h-full bg-slate-500 rounded-full"
                    style={{ width: `${(10 / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[var(--border-1)] text-[10px] text-[var(--text-3)] flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[var(--cyan)]" />
              <span>Sinkronisasi otomatis ke perhitungan payroll.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-fitur Chips */}
      <div className="mt-5 pt-4 border-t border-[var(--border-1)] flex flex-wrap items-center gap-1.5">
        <Badge variant="cyan" icon={<CalendarCheck className="w-3 h-3" />}>
          Approval cuti
        </Badge>
        <Badge variant="cyan" icon={<HeartPulse className="w-3 h-3" />}>
          Izin sakit
        </Badge>
        <Badge variant="cyan" icon={<Clock className="w-3 h-3" />}>
          Lembur
        </Badge>
        <Badge variant="cyan" icon={<FileCheck2 className="w-3 h-3" />}>
          Sisa cuti transparan
        </Badge>
      </div>
    </BentoCard>
  );
}
