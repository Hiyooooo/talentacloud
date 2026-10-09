"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Hairline Load Accent Sweep Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-full bg-[var(--cyan)] animate-page-load-bar" />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 animate-navbar-in transition-all duration-200 ${
          isScrolled
            ? "bg-[rgba(7,10,18,0.85)] backdrop-blur-md border-b border-[var(--border-1)] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
      <nav
        aria-label="Utama"
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-2 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:halo@talentacloud.id?subject=Permintaan%20Demo%20TalentaCloud"
            className="text-xs font-semibold text-[var(--text-2)] hover:text-[var(--text-1)] px-3 py-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--cyan)]"
          >
            Jadwalkan Demo
          </a>
          <a href="#harga">
            <Button size="sm" variant="primary">
              Coba Gratis 14 Hari
            </Button>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--cyan)]"
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Full Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-[var(--bg-0)]/95 backdrop-blur-xl border-b border-[var(--border-1)] flex flex-col p-6 animate-in fade-in duration-200 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          <div className="flex flex-col gap-5 py-4">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[var(--text-1)] hover:text-[var(--cyan)] transition-colors py-2 border-b border-[var(--border-1)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-[var(--border-1)] flex flex-col gap-3">
            <a
              href="mailto:halo@talentacloud.id?subject=Permintaan%20Demo%20TalentaCloud"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-semibold rounded-[10px] text-[var(--text-1)] border border-[var(--border-2)] hover:bg-[var(--surface-2)] transition-colors"
            >
              Jadwalkan Demo
            </a>
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-semibold rounded-[10px] bg-[var(--blue)] text-white shadow-[var(--glow-blue)] transition-colors"
            >
              Coba Gratis 14 Hari
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
