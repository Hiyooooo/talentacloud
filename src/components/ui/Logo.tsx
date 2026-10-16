import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isLink?: boolean;
  logoUrl?: string | null;
  name?: string;
}

export function Logo({
  className = "",
  isLink = true,
  logoUrl,
  name = "TalentaCloud",
}: LogoProps) {
  const content = (
    <span
      className={`inline-flex items-center gap-2.5 font-semibold text-[var(--text-1)] select-none ${className}`}
    >
      {logoUrl && logoUrl.trim() !== "" && logoUrl !== "/logo.svg" ? (
        // Gambar logo custom dari Admin Panel jika berbeda dari default
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logoUrl}
          alt={name}
          className="h-8 w-auto max-w-[160px] object-contain rounded"
        />
      ) : (
        <>
          {/* Logo icon menggunakan file /logo.svg (salinan favicon.svg) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt={`${name} Logo`}
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-contain shadow-sm shrink-0"
          />
          <span className="text-lg tracking-tight font-semibold">
            {name === "TalentaCloud" ? (
              <>
                Talenta<span className="text-[var(--cyan)]">Cloud</span>
              </>
            ) : (
              name
            )}
          </span>
        </>
      )}
    </span>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-4 rounded-md"
      aria-label={`${name} Beranda`}
    >
      {content}
    </Link>
  );
}
