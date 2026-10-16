import React from "react";
import { Logo } from "@/components/ui/Logo";
import type { SiteBranding, SiteContact } from "@/lib/api";

import { site } from "@/lib/site";

interface FooterProps {
  branding?: SiteBranding;
  contact?: SiteContact;
  footerText?: string;
  siteName?: string;
  whatsappUrl?: string;
}

export function Footer({
  branding,
  contact,
  footerText,
  siteName,
  whatsappUrl,
}: FooterProps = {}) {
  const email = contact?.email || "halo@talentacloud.id";
  const phone = contact?.phone || "+62 812-3456-7890";
  const copyrightText =
    footerText || "© 2026 TalentaCloud. Seluruh hak dilindungi.";
  const socialLinks = contact?.social_links || [];

  return (
    <footer className="border-t border-[var(--border-1)] bg-[var(--bg-1)] py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[var(--border-1)]">
          {/* Brand info (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Logo logoUrl={branding?.logo_url} name={siteName || site.name} />
              <p className="mt-4 text-sm text-[var(--text-2)] max-w-md leading-relaxed">
                HRIS modern untuk startup dan tim digital. Kelola presensi,
                penggajian, ujian online, library SOP, dan izin dalam satu
                tempat.
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
                <a
                  href="#modul"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Absensi GPS Geofencing
                </a>
              </li>
              <li>
                <a
                  href="#modul"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Gaji & Payroll Otomatis
                </a>
              </li>
              <li>
                <a
                  href="#modul"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Exam & Assessment Online
                </a>
              </li>
              <li>
                <a
                  href="#modul"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Library Dokumen & SOP
                </a>
              </li>
              <li>
                <a
                  href="#modul"
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Workflow Perizinan Cuti
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Kontak & Media Sosial (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-1)] mb-4">
              Kontak & Bantuan
            </p>
            <ul className="space-y-2.5 text-xs text-[var(--text-2)]">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl || `tel:${phone.replace(/[^0-9+]/g, "")}`}
                  target={whatsappUrl ? "_blank" : undefined}
                  rel={whatsappUrl ? "noopener noreferrer" : undefined}
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  {phone}
                </a>
              </li>
              {socialLinks.length > 0 && (
                <li className="pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-3)] mb-2">
                    Media Sosial
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-[var(--surface-3)] hover:text-[var(--cyan)] border border-[var(--border-1)] transition-colors"
                      >
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </li>
              )}
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
                  href={`mailto:${email}?subject=Kebijakan%20Privasi`}
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}?subject=Syarat%20Ketentuan`}
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}?subject=Keamanan%20Data`}
                  className="hover:text-[var(--cyan)] transition-colors"
                >
                  Keamanan Data
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice - Dinamis dari Admin Panel */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-3)] gap-4">
          <p>{copyrightText}</p>
          <p className="text-[11px]">
            Platform HRIS All-in-One untuk Startup & Tim Digital Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
