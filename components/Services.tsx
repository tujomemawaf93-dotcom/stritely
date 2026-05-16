"use client";

import React from "react";
import TextReveal from "./TextReveal";

const services = [
  "Алюминиевые фасады",
  "Панорамное остекление",
  "Витражи",
  "Окна и двери",
  "Остекление балконов",
  "Зимние сады",
  "Перегородки",
  "Структурное остекление",
];

export default function Services() {
  return (
    <section
      id="services"
      className="reveal border-t border-white/7"
      style={{ padding: "130px 60px" }}
    >
      <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-4">
        002 — Услуги
      </div>
      <h2
        className="font-head font-extrabold uppercase text-white"
        style={{
          fontSize: "clamp(34px, 5.5vw, 80px)",
          lineHeight: "0.93",
          letterSpacing: "-0.032em",
        }}
      >
        <TextReveal delay={0.1}>Что мы</TextReveal>
        <TextReveal delay={0.2} className="text-muted">
          производим
        </TextReveal>
      </h2>

      <div className="mt-16">
        {services.map((name, i) => (
          <div
            key={name}
            className={`reveal reveal-d${Math.min(i % 4 + 1, 4)} group flex items-center
              justify-between border-b border-white/7 relative overflow-hidden
              transition-all duration-[450ms] ease-luxury
              hover:pl-5`}
            style={{ padding: "22px 0", cursor: "none" }}
          >
            {/* Hover bg */}
            <div
              className="absolute inset-0 w-0 bg-accent/[0.045]
                transition-all duration-500 ease-luxury group-hover:w-full"
            />

            <span
              className="font-head font-extrabold uppercase relative z-[1]
                transition-colors duration-300 group-hover:text-accent"
              style={{
                fontSize: "clamp(20px, 3vw, 36px)",
                letterSpacing: "-0.018em",
              }}
            >
              {name}
            </span>

            <div className="flex items-center gap-6 relative z-[1]">
              <span className="text-[10px] tracking-[0.22em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="text-[20px] text-muted transition-all duration-[450ms]
                  ease-luxury group-hover:translate-x-1.5 group-hover:-translate-y-1.5
                  group-hover:text-accent"
              >
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
