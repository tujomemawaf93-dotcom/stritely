"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Устанавливаем setLoading(false) через 3.5 секунды
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    
    // Блокируем скролл во время загрузки
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      
      // Global reveal logic
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
