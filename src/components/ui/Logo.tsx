import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isLink?: boolean;
}

export function Logo({ className = "", isLink = true }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 font-semibold text-[var(--text-1)] select-none ${className}`}>
      {/* Cloud Icon with Cyan Spark Accent */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-1)] border border-[var(--border-2)] text-[var(--blue)] shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
        <svg
          className="w-5 h-5 text-[var(--blue)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
        {/* Cyan Spark Dot */}
        <span
          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]"
          aria-hidden="true"
        />
      </span>
      <span className="text-lg tracking-tight font-semibold">
        Talenta<span className="text-[var(--cyan)]">Cloud</span>
      </span>
    </span>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-4 rounded-md"
      aria-label="TalentaCloud Beranda"
    >
      {content}
    </Link>
  );
}
