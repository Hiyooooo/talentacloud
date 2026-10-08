"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "h-9 px-3.5 text-xs rounded-[8px] gap-1.5",
    md: "h-11 px-5 text-sm rounded-[10px] gap-2",
    lg: "h-12 px-6 text-base rounded-[10px] gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[var(--blue)] text-white hover:bg-[var(--blue-strong)] hover:-translate-y-0.5 shadow-[var(--glow-blue)] active:translate-y-0",
    secondary:
      "bg-transparent text-[var(--text-1)] border border-[var(--border-2)] hover:bg-[var(--surface-2)] hover:border-[var(--border-accent)] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)]",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
