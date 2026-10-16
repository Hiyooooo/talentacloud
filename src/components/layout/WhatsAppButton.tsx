import React from "react";
import { site } from "@/lib/site";

interface WhatsAppButtonProps {
  whatsappUrl?: string;
}

export function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps = {}) {
  const targetUrl = whatsappUrl || site.whatsapp;

  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi tim TalentaCloud via WhatsApp (Buka di tab baru)"
        className="group flex items-center gap-3 px-4 py-2.5 min-h-[44px] rounded-full bg-[var(--surface-1)]/95 hover:bg-[var(--surface-2)] text-[var(--text-1)] border border-[var(--border-2)] hover:border-[var(--border-accent)] shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-2"
      >
        {/* WhatsApp Icon with Pulse Online Dot */}
        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 group-hover:scale-105 transition-transform shrink-0">
          <svg
            className="w-4 h-4 fill-current text-[#25D366]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.32a8.196 8.196 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
          </span>
        </span>

        {/* Text Container */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-3)] leading-none mb-0.5">
            Tanya Tim Kami
          </span>
          <span className="text-xs font-semibold text-[var(--text-1)] group-hover:text-white transition-colors leading-tight">
            Chat via WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}
