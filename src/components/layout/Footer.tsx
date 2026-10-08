import React from "react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-1)] bg-[var(--bg-1)] py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[var(--border-1)]">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-[var(--text-2)] max-w-md leading-relaxed">
                HRIS modern untuk startup dan tim digital. Kelola presensi, penggajian, ujian online, library SOP, dan izin dalam satu tempat.
              </p>
            </div>
            <div className="mt-6 text-xs text-[var(--text-3)]">
              Dirancang untuk efisiensi operasional tim berkinerja tinggi.
            </div>
          </div>

          {/* Nav Links: Produk (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-1)] mb-4">
              Produk & Modul
            </p>
            <ul className="space-y-2.5 text-xs text-[var(--text-2)]">
              <li>
                <a href="#modul" className="hover:text-[var(--cyan)] transition-colors">
                  Absensi GPS Geofencing
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-[var(--cyan)] transition-colors">
                  Gaji & Payroll Otomatis
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-[var(--cyan)] transition-colors">
                  Exam & Assessment Online
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-[var(--cyan)] transition-colors">
                  Library Dokumen & SOP
                </a>
              </li>
              <li>
                <a href="#modul" className="hover:text-[var(--cyan)] transition-colors">
                  Workflow Perizinan Cuti
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Perusahaan (2 cols) */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-1)] mb-4">
              Perusahaan
            </p>
            <ul className="space-y-2.5 text-xs text-[var(--text-2)]">
              <li>
                <a href="#cara-kerja" className="hover:text-[var(--cyan)] transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-[var(--cyan)] transition-colors">
                  Paket & Biaya
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--cyan)] transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@talentacloud.id?subject=Pertanyaan%20Kemitraan"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Kontak Tim
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Legal (2 cols) */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-1)] mb-4">
              Legalitas
            </p>
            <ul className="space-y-2.5 text-xs text-[var(--text-2)]">
              <li>
                <a
                  href="mailto:halo@talentacloud.id?subject=Kebijakan%20Privasi"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@talentacloud.id?subject=Syarat%20Ketentuan"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@talentacloud.id?subject=Keamanan%20Data"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Keamanan Data
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-3)] gap-4">
          <p>© 2026 TalentaCloud. Seluruh hak dilindungi.</p>
          <p className="text-[11px]">
            Platform HRIS All-in-One untuk Startup & Tim Digital Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
