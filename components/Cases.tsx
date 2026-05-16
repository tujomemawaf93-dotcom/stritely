"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import TextReveal from "./TextReveal";

const cases = [
  {
    id: "gavan",
    tag: "ЖК · Владивосток · 2024",
    title: ["Гавань", "Резиденс"],
    sub: "Структурное остекление, витражи и\nалюминиевые фасады у моря",
    image: "/images/gavan-wide.jpg",
    meta: [
      { num: "12 500", label: "м² остекления" },
      { num: "24",     label: "этажа"         },
      { num: "2024",   label: "год сдачи"     },
    ],
    featured: true,
  },
  {
    id: "stark",
    tag: "ЖК · Владивосток · 2023",
    title: ["ЖК", "СТАРК"],
    sub: "Алюминиевые фасады и панорамное\nостекление жилого комплекса бизнес-класса",
    image: "/images/stark.jpg",
    meta: [
      { num: "12 500", label: "м² фасада" },
      { num: "18",     label: "этажей"    },
      { num: "2023",   label: "год сдачи" },
    ],
    featured: false,
  },
];

export default function Cases() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [tx, setTx]         = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect  = sec.getBoundingClientRect();
      const secH  = sec.offsetHeight;
      const prog  = Math.max(0, Math.min(1, -rect.top / (secH - window.innerHeight)));
      const newTx = -prog * window.innerWidth * (cases.length - 1);
      setTx(newTx);
      setActive(Math.round(-newTx / window.innerWidth));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cases"
      className="relative"
      style={{ height: `${cases.length * 140}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Header overlay */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start pointer-events-none"
          style={{ padding: "46px 60px 0" }}
        >
          <div>
            <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-2.5">
              004 — Объекты
            </div>
            <h2
              className="font-head font-extrabold uppercase text-white"
              style={{
                fontSize: "clamp(28px, 4vw, 56px)",
                letterSpacing: "-0.03em",
                lineHeight: "0.94",
              }}
            >
              <TextReveal delay={0.1}>Реали&shy;</TextReveal>
              <TextReveal delay={0.2}>зованные</TextReveal>
              <TextReveal delay={0.3} className="text-muted">
                проекты
              </TextReveal>
            </h2>
          </div>
          <div
            className="font-head font-extrabold self-end"
            style={{
              fontSize: "96px",
              color: "rgba(255,255,255,0.055)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            {String(active + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Cards track */}
        <div className="absolute inset-0 flex items-stretch">
          <div
            ref={trackRef}
            className="flex h-full"
            style={{
              width: "max-content",
              transform: `translateX(${tx}px)`,
              willChange: "transform",
              transition: "transform 0.05s linear",
            }}
          >
            {cases.map((c) => (
              <div
                key={c.id}
                className="relative flex-shrink-0 overflow-hidden flex items-end"
                style={{ width: "100vw", height: "100vh" }}
              >
                {/* Background photo */}
                <div className="absolute inset-0">
                  <Image
                    src={c.image}
                    alt={c.title.join(" ")}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-[8000ms] linear hover:scale-[1.03]"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.28) 52%, transparent 100%)",
                    }}
                  />
                  {/* Featured badge glow for Гавань */}
                  {c.featured && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="relative z-[2] w-full flex justify-between items-end"
                  style={{ padding: "46px 60px 64px" }}
                >
                  <div>
                    {c.featured && (
                      <div
                        className="inline-block mb-3 text-[8px] tracking-[0.42em] uppercase
                          font-semibold text-bg bg-accent px-3 py-1"
                      >
                        Визитная карточка
                      </div>
                    )}
                    <div
                      className="mb-3 text-[8px] tracking-[0.42em] uppercase text-accent
                        border border-accent/35 px-3 py-1 inline-block"
                    >
                      {c.tag}
                    </div>
                    <h3
                      className="font-head font-extrabold uppercase"
                      style={{
                        fontSize: "clamp(36px, 6vw, 80px)",
                        letterSpacing: "-0.035em",
                        lineHeight: "0.92",
                      }}
                    >
                      {c.title[0]}<br />{c.title[1]}
                    </h3>
                    <p className="text-[12px] text-muted mt-3 leading-[1.7] whitespace-pre-line">
                      {c.sub}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 items-end">
                    {c.meta.map((m) => (
                      <div key={m.label} className="text-right">
                        <div
                          className="font-head font-bold text-white"
                          style={{ fontSize: "28px", letterSpacing: "-0.02em", lineHeight: 1 }}
                        >
                          {m.num}
                        </div>
                        <div className="text-[8px] tracking-[0.22em] uppercase text-muted mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {cases.map((_, i) => (
            <div
              key={i}
              className={`h-px transition-all duration-[450ms] ease-luxury
                ${active === i ? "bg-accent w-12" : "bg-white/20 w-6"}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute right-[60px] bottom-[70px] z-20 flex items-center gap-2.5
            text-[8px] tracking-[0.30em] uppercase text-muted"
        >
          Листайте
          <span className="hint-arrow" />
          <span className="hint-arrow" />
        </div>
      </div>
    </section>
  );
}
