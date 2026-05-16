"use client";

import React from "react";
import { useReveal } from "@/lib/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export default function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useReveal();
  const delayClass = delay ? `reveal-d${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
