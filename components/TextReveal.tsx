"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  return (
    <div className="relative block overflow-hidden">
      <motion.div
        className={`block ${className || "text-white"}`}
        initial={{ y: "102%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
