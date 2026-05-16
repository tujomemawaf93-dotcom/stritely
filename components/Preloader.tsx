"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="relative w-[300px] sm:w-[400px]">
        {/* Silhouette logo */}
        <div className="relative w-full aspect-[4/1]">
           <Image
            src="/images/logo.png"
            alt="Logo silhouette"
            fill
            className="object-contain opacity-20 grayscale"
            priority
          />
        </div>

        {/* Filled logo reveal */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/logo.png"
              alt="Logo filled"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
