"use client";

import React, { useRef } from "react";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function BentoCard({
  as: Component = "div",
  children,
  className = "",
  ...props
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`bento-card p-5 sm:p-6 text-left ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
