import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "blue" | "success" | "warning" | "neutral";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "cyan",
  className = "",
  icon,
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-[var(--cyan-soft)] text-[var(--cyan)] border-[rgba(34,211,238,0.25)]",
    blue: "bg-[var(--blue-soft)] text-[var(--blue)] border-[rgba(59,130,246,0.25)]",
    success: "bg-[rgba(52,211,153,0.14)] text-[var(--success)] border-[rgba(52,211,153,0.25)]",
    warning: "bg-[rgba(251,191,36,0.14)] text-[var(--warning)] border-[rgba(251,191,36,0.25)]",
    neutral: "bg-[var(--surface-3)] text-[var(--text-2)] border-[var(--border-1)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
