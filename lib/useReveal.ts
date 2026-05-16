"use client";

import { useEffect, useRef, RefObject } from "react";

export function useReveal(threshold = 0.1): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -56px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}