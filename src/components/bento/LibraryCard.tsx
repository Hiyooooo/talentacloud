"use client";

import React, { useState, useMemo } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Badge } from "@/components/ui/Badge";
import {
  BookOpen,
  Search,
  FileText,
  Archive,
  GraduationCap,
  Command,
} from "lucide-react";
import { libraryItems } from "@/lib/data";

export function LibraryCard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"semua" | "sop" | "arsip" | "elearning">("semua");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = useMemo(() => {
    return libraryItems.filter((item) => {
      const matchCategory = selectedFilter === "semua" || item.category === selectedFilter;
      const matchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [searchQuery, selectedFilter]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="text-[var(--cyan)] font-semibold underline decoration-[var(--cyan)]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case "sop":
        return <FileText className="w-3.5 h-3.5 text-blue-400" />;
      case "arsip":
        return <Archive className="w-3.5 h-3.5 text-slate-300" />;
      case "elearning":
        return <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <BookOpen className="w-3.5 h-3.5" />;
    }
  };

  return (
    <BentoCard className="flex flex-col justify-between h-full group" aria-label="Modul Library">
      {/* Header Info */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.25)] flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
            Library
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-2 tracking-tight">
          Pengetahuan tim, selalu dalam jangkauan.
        </h3>
        <p className="text-sm text-[var(--text-2)] mb-4">
          SOP, arsip dokumen, dan modul e-learning dalam satu pencarian instan.
        </p>

        {/* Command Palette Mini Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-3)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder='Cari "cuti", SOP, atau panduan...'
            className="w-full pl-9 pr-14 py-2 text-xs rounded-xl bg-[var(--surface-3)] border border-[var(--border-1)] text-[var(--text-1)] placeholder:text-[var(--text-3)] focus:outline-none focus:border-[var(--cyan)] focus:ring-1 focus:ring-[var(--cyan)] transition-all"
            aria-label="Cari dokumen SOP atau modul e-learning"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-[var(--text-3)] bg-[var(--surface-1)] px-1.5 py-0.5 rounded border border-[var(--border-1)] font-mono">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1">
          {(["semua", "sop", "arsip", "elearning"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg transition-all capitalize whitespace-nowrap ${
                selectedFilter === cat
                  ? "bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)]"
                  : "bg-[var(--surface-3)] text-[var(--text-3)] border border-transparent hover:text-[var(--text-1)]"
              }`}
            >
              {cat === "semua" ? "Semua" : cat === "elearning" ? "E-learning" : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Document Results List */}
        <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
          {filteredItems.length === 0 ? (
            <div className="py-6 text-center text-xs text-[var(--text-3)] bg-[var(--surface-3)]/50 rounded-xl border border-[var(--border-1)]">
              Tidak ada dokumen yang cocok dengan &quot;{searchQuery}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedIndex === idx
                    ? "bg-[var(--surface-2)] border-[var(--border-accent)] shadow-sm"
                    : "bg-[var(--surface-3)]/60 border-[var(--border-1)] hover:bg-[var(--surface-2)]/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-[var(--surface-1)] border border-[var(--border-1)]">
                      {getIcon(item.category)}
                    </span>
                    <span className="text-xs font-medium text-[var(--text-1)]">
                      {highlightMatch(item.title, searchQuery)}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--text-3)] uppercase font-mono">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Sub-fitur 3: E-learning progress bar */}
                {item.category === "elearning" && typeof item.progress === "number" && (
                  <div className="mt-2 pt-2 border-t border-[var(--border-1)]/60">
                    <div className="flex justify-between text-[10px] text-[var(--text-3)] mb-1">
                      <span>Progres Belajar</span>
                      <span className="font-mono text-[var(--cyan)] font-medium">
                        {item.progress}% Selesai
                      </span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-[var(--surface-1)] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sub-fitur Chips */}
      <div className="mt-5 pt-4 border-t border-[var(--border-1)] flex flex-wrap items-center gap-1.5">
        <Badge variant="cyan" icon={<FileText className="w-3 h-3" />}>
          SOP kantor
        </Badge>
        <Badge variant="cyan" icon={<Archive className="w-3 h-3" />}>
          Arsip dokumen
        </Badge>
        <Badge variant="cyan" icon={<GraduationCap className="w-3 h-3" />}>
          E-learning
        </Badge>
      </div>
    </BentoCard>
  );
}
