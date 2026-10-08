"use client";

import React, { useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import {
  Wallet,
  Calculator,
  FileText,
  Download,
  Loader2,
  CheckCircle,
  X,
  CreditCard,
  Building,
} from "lucide-react";
import { payrollData } from "@/lib/data";

export function GajiCard() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCalculated, setIsCalculated] = useState(true);
  const [showSlipModal, setShowSlipModal] = useState(false);
  const [downloadToast, setDownloadToast] = useState(false);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setIsCalculated(false);
    setTimeout(() => {
      setIsCalculating(false);
      setIsCalculated(true);
    }, 600);
  };

  const handleDownloadSlip = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <BentoCard className="flex flex-col justify-between h-full group" aria-label="Modul Gaji (Payroll)">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.25)] flex items-center justify-center">
            <Wallet className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
            Gaji (Payroll)
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-2 tracking-tight">
          Payroll selesai dalam satu klik.
        </h3>
        <p className="text-sm text-[var(--text-2)] mb-5">
          Gaji, PPh 21, BPJS, dan reimbursement dihitung otomatis. Slip gaji terkirim digital.
        </p>

        {/* Action button: Hitung Gaji */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="px-3.5 py-1.5 rounded-lg bg-[var(--blue)] hover:bg-[var(--blue-strong)] text-white text-xs font-semibold flex items-center gap-2 shadow-[var(--glow-blue)] transition-all disabled:opacity-50"
          >
            {isCalculating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Calculator className="w-3.5 h-3.5" />
            )}
            <span>{isCalculating ? "Menghitung Komponen..." : "Hitung Gaji"}</span>
          </button>

          {isCalculated && (
            <button
              onClick={() => setShowSlipModal(true)}
              className="px-3 py-1.5 rounded-lg bg-[var(--surface-3)] hover:bg-[var(--surface-2)] text-[var(--cyan)] border border-[var(--border-accent)] text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lihat Slip Gaji</span>
            </button>
          )}
        </div>

        {/* Payroll Breakdown Summary Card */}
        <div className="p-3.5 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] space-y-2 text-xs">
          {/* Gaji Pokok & Lembur */}
          <div className="flex justify-between items-center text-[var(--text-2)]">
            <span>Gaji Pokok ({payrollData.period})</span>
            <span className="font-mono text-[var(--text-1)]">{formatRupiah(payrollData.baseSalary)}</span>
          </div>

          <div className="flex justify-between items-center text-[var(--text-2)]">
            <span>Lembur Operasional</span>
            <span className="font-mono text-[var(--success)]">+{formatRupiah(payrollData.overtime)}</span>
          </div>

          {/* Sub-fitur: Reimbursement */}
          <div className="flex justify-between items-center text-[var(--text-2)]">
            <span>Reimbursement Transport</span>
            <span className="font-mono text-[var(--cyan)]">+{formatRupiah(payrollData.reimbursement)}</span>
          </div>

          {/* Sub-fitur: PPh 21 */}
          <div className="flex justify-between items-center text-[var(--text-2)] pt-1 border-t border-[var(--border-1)]">
            <span>Potongan PPh 21 (TER 2026)</span>
            <span className="font-mono text-[var(--danger)]">-{formatRupiah(payrollData.pph21)}</span>
          </div>

          {/* Sub-fitur: BPJS */}
          <div className="flex justify-between items-center text-[var(--text-2)]">
            <span>BPJS Kesehatan (1%)</span>
            <span className="font-mono text-[var(--danger)]">-{formatRupiah(payrollData.bpjsKesehatan)}</span>
          </div>
          <div className="flex justify-between items-center text-[var(--text-2)]">
            <span>BPJS Ketenagakerjaan (2%)</span>
            <span className="font-mono text-[var(--danger)]">-{formatRupiah(payrollData.bpjsKetenagakerjaan)}</span>
          </div>

          {/* Total Net Salary */}
          <div className="flex justify-between items-center pt-2 border-t border-[var(--border-2)] font-semibold">
            <span className="text-[var(--text-1)]">Gaji Bersih Diterima</span>
            <span className="font-mono text-sm text-[var(--cyan)] tabular-nums">
              {isCalculating ? "Menghitung..." : formatRupiah(payrollData.netSalary)}
            </span>
          </div>
        </div>
      </div>

      {/* Sub-fitur Chips */}
      <div className="mt-5 pt-4 border-t border-[var(--border-1)] flex flex-wrap items-center gap-1.5">
        <Badge variant="cyan" icon={<Calculator className="w-3 h-3" />}>
          Hitung otomatis
        </Badge>
        <Badge variant="cyan" icon={<CreditCard className="w-3 h-3" />}>
          PPh 21
        </Badge>
        <Badge variant="cyan" icon={<Building className="w-3 h-3" />}>
          BPJS
        </Badge>
        <Badge variant="cyan" icon={<FileText className="w-3 h-3" />}>
          Slip digital
        </Badge>
        <Badge variant="cyan" icon={<Wallet className="w-3 h-3" />}>
          Reimbursement
        </Badge>
      </div>

      {/* Digital Salary Slip Modal */}
      {showSlipModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="slip-title"
        >
          <div className="w-full max-w-md rounded-[20px] bg-[var(--surface-1)] border border-[var(--border-2)] p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setShowSlipModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--surface-3)] transition-colors"
              aria-label="Tutup Slip Gaji"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[var(--cyan)]" />
              <h3 id="slip-title" className="text-base font-semibold text-[var(--text-1)]">
                Slip Gaji Digital
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-1)] space-y-3 text-xs mb-4">
              <div className="flex justify-between">
                <span className="text-[var(--text-3)]">Karyawan</span>
                <span className="font-semibold text-[var(--text-1)]">{payrollData.employeeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-3)]">ID / Departemen</span>
                <span className="text-[var(--text-2)]">{payrollData.employeeId} · {payrollData.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-3)]">Periode</span>
                <span className="text-[var(--text-2)]">{payrollData.period}</span>
              </div>
              <div className="border-t border-[var(--border-1)] pt-2 flex justify-between font-bold text-sm">
                <span className="text-[var(--text-1)]">Total Ditransfer</span>
                <span className="font-mono text-[var(--cyan)]">{formatRupiah(payrollData.netSalary)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handleDownloadSlip}
                className="w-full py-2.5 rounded-lg bg-[var(--blue)] hover:bg-[var(--blue-strong)] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-[var(--glow-blue)]"
              >
                <Download className="w-4 h-4" />
                <span>Unduh PDF</span>
              </button>
            </div>

            {downloadToast && (
              <div className="mt-3 p-2 rounded-lg bg-[rgba(52,211,153,0.15)] border border-[var(--success)] text-[var(--success)] text-xs flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>File slip gaji {payrollData.period} siap dicetak.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </BentoCard>
  );
}
