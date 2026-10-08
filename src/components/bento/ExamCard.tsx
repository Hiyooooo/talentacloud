"use client";

import React, { useState, useEffect } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import {
  ClipboardCheck,
  ShieldCheck,
  Timer,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Users,
  Target,
} from "lucide-react";
import { examData } from "@/lib/data";

export function ExamCard() {
  const [activeTab, setActiveTab] = useState<"rekrutmen" | "kinerja" | "kompetensi">("kompetensi");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [violationsCount, setViolationsCount] = useState(0);
  const [lastViolationTime, setLastViolationTime] = useState<string | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(582); // 09:42 = 582s

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60).toString().padStart(2, "0");
    const s = (totalSec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
  };

  const handleTabChange = (tab: "rekrutmen" | "kinerja" | "kompetensi") => {
    setActiveTab(tab);
    setSelectedOption(null);
    setHasAnswered(false);
  };

  const handleSimulateViolation = () => {
    setViolationsCount((prev) => prev + 1);
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    setLastViolationTime(`Pindah tab terdeteksi pada ${timeStr}`);
  };

  const currentExam = examData[activeTab];

  return (
    <BentoCard className="flex flex-col justify-between h-full group" aria-label="Modul Exam">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.25)] flex items-center justify-center">
            <ClipboardCheck className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
            Exam
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-2 tracking-tight">
          Ujian online, nilai keluar seketika.
        </h3>
        <p className="text-sm text-[var(--text-2)] mb-4">
          Rekrutmen, evaluasi kinerja, dan uji kompetensi dengan proctoring dan skor otomatis.
        </p>

        {/* Tab Jenis Ujian */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--surface-3)] border border-[var(--border-1)] mb-4">
          {(["rekrutmen", "kinerja", "kompetensi"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all capitalize ${
                activeTab === tab
                  ? "bg-[var(--blue)] text-white shadow-sm"
                  : "text-[var(--text-3)] hover:text-[var(--text-1)]"
              }`}
            >
              {tab === "rekrutmen" ? "Rekrutmen" : tab === "kinerja" ? "Kinerja" : "Kompetensi"}
            </button>
          ))}
        </div>

        {/* Interactive Question Card */}
        <div className="p-3.5 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] space-y-3">
          {/* Header Soal & Countdown Timer */}
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--border-1)]">
            <span className="font-medium text-[var(--text-1)]">Soal 3 / 10</span>
            <div
              className={`flex items-center gap-1.5 font-mono px-2 py-0.5 rounded-md ${
                timerSeconds < 60
                  ? "bg-[rgba(251,191,36,0.15)] text-[var(--warning)]"
                  : "bg-[var(--surface-2)] text-[var(--cyan)]"
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              <span className="tabular-nums">{formatTimer(timerSeconds)}</span>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-xs font-medium text-[var(--text-1)] leading-relaxed">
            {currentExam.question}
          </p>

          {/* 3 Interactive Choices */}
          <div className="space-y-1.5">
            {currentExam.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentExam.correctIndex;

              let btnStyle = "bg-[var(--surface-2)] text-[var(--text-2)] border-[var(--border-1)] hover:border-[var(--border-2)]";
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-[rgba(52,211,153,0.15)] text-[var(--success)] border-[var(--success)]";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-[rgba(248,113,113,0.15)] text-[var(--danger)] border-[var(--danger)]";
                } else {
                  btnStyle = "opacity-40 bg-[var(--surface-2)] text-[var(--text-3)] border-[var(--border-1)]";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-2 rounded-lg text-left text-xs border flex items-center justify-between transition-all ${btnStyle}`}
                >
                  <span className="flex-1">{opt}</span>
                  {hasAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 shrink-0 ml-2" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Score ring result after answer */}
          {hasAnswered && (
            <div className="pt-2 border-t border-[var(--border-1)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-2)] text-[11px]">Skor Ujian Otomatis:</span>
              <span className="px-2 py-0.5 rounded-full bg-[rgba(52,211,153,0.15)] text-[var(--success)] font-semibold font-mono">
                80 / 100 (Lulus)
              </span>
            </div>
          )}
        </div>

        {/* Proctoring Banner & Violation Simulation */}
        <div className="mt-3 p-2.5 rounded-[12px] bg-[var(--surface-2)]/60 border border-[var(--border-1)] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[rgba(34,211,238,0.15)] text-[var(--cyan)]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-[var(--text-1)] font-medium">Proctoring Aktif</span>
              <div className="text-[10px] text-[var(--text-3)]">
                {violationsCount === 0 ? "Tab tetap fokus ✓" : `${violationsCount} peringatan dicatat`}
              </div>
            </div>
          </div>

          <button
            onClick={handleSimulateViolation}
            className="px-2 py-1 rounded bg-[var(--surface-3)] hover:bg-[var(--surface-1)] text-[10px] font-medium text-[var(--warning)] border border-[rgba(251,191,36,0.3)] transition-colors"
          >
            Simulasi pelanggaran
          </button>
        </div>

        {lastViolationTime && (
          <div className="mt-1.5 px-2 py-1 rounded bg-[rgba(251,191,36,0.1)] border border-[var(--warning)] text-[10px] text-[var(--warning)] flex items-center gap-1.5">
            <AlertOctagon className="w-3 h-3 shrink-0" />
            <span>{lastViolationTime}</span>
          </div>
        )}
      </div>

      {/* Sub-fitur Chips */}
      <div className="mt-5 pt-4 border-t border-[var(--border-1)] flex flex-wrap items-center gap-1.5">
        <Badge variant="cyan" icon={<Users className="w-3 h-3" />}>
          Assessment rekrutmen
        </Badge>
        <Badge variant="cyan" icon={<Target className="w-3 h-3" />}>
          Evaluasi kinerja
        </Badge>
        <Badge variant="cyan" icon={<GraduationCap className="w-3 h-3" />}>
          Uji kompetensi
        </Badge>
        <Badge variant="cyan" icon={<ShieldCheck className="w-3 h-3" />}>
          Proctoring
        </Badge>
      </div>
    </BentoCard>
  );
}
