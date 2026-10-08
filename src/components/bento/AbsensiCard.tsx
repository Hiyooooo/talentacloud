"use client";

import React, { useState, useEffect } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Compass,
} from "lucide-react";
import { shiftOptions, initialAttendanceRecords } from "@/lib/data";

export function AbsensiCard() {
  const [selectedShift, setSelectedShift] = useState(shiftOptions[0].id);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [presentCount, setPresentCount] = useState(32);
  const totalEmployees = 36;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("08:21:00");
  const [workDurationSec, setWorkDurationSec] = useState(0);

  // Live WIB clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${h}:${m}:${s}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Work duration counter when checked in
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCheckedIn) {
      interval = setInterval(() => {
        setWorkDurationSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCheckedIn]);

  const handleToggleClock = () => {
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      setPresentCount((prev) => Math.min(prev + 1, totalEmployees));
      setToastMessage("Check-in berhasil · 08:21 WIB (Radius valid 14m)");
      setTimeout(() => setToastMessage(null), 3500);
    } else {
      setIsCheckedIn(false);
      setPresentCount((prev) => Math.max(prev - 1, 0));
      const hours = Math.floor(workDurationSec / 3600);
      const mins = Math.floor((workDurationSec % 3600) / 60);
      setToastMessage(`Clock Out tercatat · Total durasi: ${hours}j ${mins}m`);
      setWorkDurationSec(0);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  const formatDuration = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600).toString().padStart(2, "0");
    const m = Math.floor((totalSec % 3600) / 60).toString().padStart(2, "0");
    const s = (totalSec % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const currentShiftObj = shiftOptions.find((s) => s.id === selectedShift) || shiftOptions[0];

  return (
    <BentoCard className="flex flex-col justify-between h-full group" aria-label="Modul Absensi">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.25)] flex items-center justify-center">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
            Absensi
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-1)] mb-2 tracking-tight">
          Absen akurat, di mana pun tim bekerja.
        </h3>
        <p className="text-sm text-[var(--text-2)] mb-5 max-w-2xl">
          Clock-in/out dengan geofencing GPS, shift fleksibel, dan rekap kehadiran real-time.
        </p>

        {/* Shift Selector */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[var(--text-3)] font-medium mr-1">Shift kerja:</span>
          {shiftOptions.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedShift(s.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all border ${
                selectedShift === s.id
                  ? "bg-[var(--cyan-soft)] text-[var(--cyan)] border-[rgba(34,211,238,0.4)] shadow-sm"
                  : "bg-[var(--surface-3)] text-[var(--text-3)] border-[var(--border-1)] hover:text-[var(--text-2)] hover:border-[var(--border-2)]"
              }`}
            >
              {s.label} ({s.time})
            </button>
          ))}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-2">
          {/* Sub-fitur 1 & 2: Clock-in/out & GPS Geofence Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Clock-in / Clock-out Action Banner */}
            <div className="p-4 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-3)] font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-[var(--cyan)]" />
                  <span>WIB: {currentTime}</span>
                  <span className="text-[var(--text-3)]">· Target {currentShiftObj.label}</span>
                </div>
                <div className="text-xs text-[var(--text-2)]">
                  {isCheckedIn ? (
                    <span className="text-[var(--success)] font-medium">
                      Status: Aktif Bekerja ({formatDuration(workDurationSec)})
                    </span>
                  ) : (
                    <span>Siap untuk presensi masuk</span>
                  )}
                </div>
              </div>

              <button
                onClick={handleToggleClock}
                className={`px-4 py-2 text-xs font-semibold rounded-[8px] transition-all flex items-center gap-2 shadow-sm ${
                  isCheckedIn
                    ? "bg-[var(--danger)] hover:bg-red-600 text-white"
                    : "bg-[var(--blue)] hover:bg-[var(--blue-strong)] text-white shadow-[var(--glow-blue)]"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                {isCheckedIn ? "Clock Out" : "Clock In"}
              </button>
            </div>

            {/* GPS Geofencing Interactive Map */}
            <div className="relative h-48 sm:h-52 rounded-[14px] bg-[var(--bg-1)] border border-[var(--border-1)] overflow-hidden flex items-center justify-center">
              {/* Map Abstract Grid Lines */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.3) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Road vectors simulation */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="80" x2="400" y2="120" stroke="#94A3B8" strokeWidth="6" />
                <line x1="180" y1="0" x2="220" y2="200" stroke="#94A3B8" strokeWidth="6" />
                <line x1="60" y1="0" x2="360" y2="200" stroke="#64748B" strokeWidth="3" />
              </svg>

              {/* Geofence Safe Radius Circle */}
              <div className="relative w-40 h-40 rounded-full border border-dashed border-[var(--cyan)] bg-[var(--cyan-soft)] flex items-center justify-center animate-[pulse_4s_infinite]">
                <span className="text-[10px] font-semibold text-[var(--cyan)] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[var(--surface-1)] border border-[rgba(34,211,238,0.4)]">
                  Geofence Kantor (100m)
                </span>
              </div>

              {/* Dynamic User Pin when Checked In */}
              {isCheckedIn && (
                <div
                  className="absolute w-6 h-6 rounded-full bg-[var(--blue)] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold transition-all duration-700 shadow-[var(--glow-blue)] animate-bounce"
                  style={{ left: "48%", top: "42%" }}
                  title="Lokasi Presensi Anda"
                >
                  Anda
                </div>
              )}

              {/* Employee Pins on Map */}
              {initialAttendanceRecords.map((rec) => {
                const isHovered = hoveredEmployeeId === rec.id;
                const isInside = rec.status !== "luar_area";
                return (
                  <div
                    key={rec.id}
                    className={`absolute transition-all duration-300 flex items-center gap-1 ${
                      isHovered ? "scale-125 z-20" : "z-10"
                    }`}
                    style={{ left: `${rec.coords.x}%`, top: `${rec.coords.y}%` }}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shadow-md border ${
                        isInside
                          ? "bg-[var(--success)] border-emerald-300"
                          : "bg-[var(--danger)] border-red-300"
                      }`}
                    >
                      {rec.avatar[0]}
                    </span>
                    {isHovered && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-[var(--surface-1)] border border-[var(--border-2)] text-[var(--text-1)] whitespace-nowrap shadow-md">
                        {rec.name} ({rec.status === "luar_area" ? "Di luar area" : "Dalam radius"})
                      </span>
                    )}
                  </div>
                );
              })}

              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[var(--surface-1)]/90 border border-[var(--border-1)] text-[10px] text-[var(--text-3)]">
                Pusat: Kantor Jakarta Selatan
              </div>
            </div>
          </div>

          {/* Sub-fitur 4: Rekap kehadiran real-time & Live List (5 cols) */}
          <div className="lg:col-span-5 p-4 rounded-[14px] bg-[var(--surface-3)]/90 border border-[var(--border-1)] flex flex-col justify-between">
            <div>
              {/* Header Rekap */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--text-1)]">Rekap Kehadiran Hari Ini</span>
                <span className="text-xs font-mono font-medium text-[var(--cyan)] tabular-nums">
                  {presentCount} / {totalEmployees} Hadir
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-[var(--surface-1)] overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] transition-all duration-500 rounded-full"
                  style={{ width: `${(presentCount / totalEmployees) * 100}%` }}
                />
              </div>

              {/* Live Attendance List */}
              <div className="space-y-2">
                {initialAttendanceRecords.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredEmployeeId(item.id)}
                    onMouseLeave={() => setHoveredEmployeeId(null)}
                    className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors cursor-pointer border ${
                      hoveredEmployeeId === item.id
                        ? "bg-[var(--surface-2)] border-[var(--border-accent)]"
                        : "bg-[var(--surface-2)]/50 border-transparent hover:border-[var(--border-1)]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[var(--surface-1)] border border-[var(--border-2)] text-[10px] font-semibold text-[var(--text-2)] flex items-center justify-center">
                        {item.avatar}
                      </span>
                      <div>
                        <div className="font-medium text-[var(--text-1)]">{item.name}</div>
                        <div className="text-[10px] text-[var(--text-3)]">{item.role}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      {item.status === "hadir" && (
                        <span className="text-[11px] text-[var(--success)] font-medium flex items-center gap-1 justify-end">
                          <CheckCircle2 className="w-3 h-3" />
                          Hadir · {item.time}
                        </span>
                      )}
                      {item.status === "terlambat" && (
                        <span className="text-[11px] text-[var(--warning)] font-medium flex items-center gap-1 justify-end">
                          <AlertTriangle className="w-3 h-3" />
                          Terlambat · {item.time}
                        </span>
                      )}
                      {item.status === "luar_area" && (
                        <span className="text-[11px] text-[var(--danger)] font-medium flex items-center gap-1 justify-end">
                          <MapPin className="w-3 h-3" />
                          Di luar area
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Toast */}
            {toastMessage && (
              <div
                className="mt-3 p-2.5 rounded-lg bg-[var(--surface-1)] border border-[var(--cyan)] text-xs text-[var(--cyan)] flex items-center gap-2 shadow-lg animate-in fade-in"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--cyan)]" />
                <span>{toastMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sub-fitur Chips */}
      <div className="mt-6 pt-4 border-t border-[var(--border-1)] flex flex-wrap items-center gap-2">
        <Badge variant="cyan" icon={<Compass className="w-3 h-3" />}>
          Clock-in/out
        </Badge>
        <Badge variant="cyan" icon={<MapPin className="w-3 h-3" />}>
          GPS Geofencing
        </Badge>
        <Badge variant="cyan" icon={<Clock className="w-3 h-3" />}>
          Shift kerja
        </Badge>
        <Badge variant="cyan" icon={<UserCheck className="w-3 h-3" />}>
          Rekap real-time
        </Badge>
      </div>
    </BentoCard>
  );
}
