"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // --- Глобальная логика проявления (Scroll Reveal) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Отключаем наблюдение после проявления, чтобы анимация проигрывалась один раз
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    // Инициализация для уже существующих в DOM элементов
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Отслеживание динамически добавленных компонентов (из-за ssr: false)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Node.ELEMENT_NODE
            const el = node as HTMLElement;
            if (el.classList?.contains("reveal")) {
              observer.observe(el);
            }
            // Также проверяем дочерние элементы
            const children = el.querySelectorAll(".reveal");
            children.forEach((child) => observer.observe(child));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
