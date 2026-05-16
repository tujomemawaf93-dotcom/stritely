"use client";

import { useCounter } from "@/lib/useCounter";
import TextReveal from "./TextReveal";

function StatCell({
  target,
  suffix,
  label,
  desc,
}: {
  target: number;
  suffix: string;
  label: string;
  desc: string;
}) {
  const { value, ref } = useCounter(target);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="stat-cell bg-bg p-11"
      style={{ padding: "44px 36px" }}
    >
      <div
        className="font-head font-extrabold text-white"
        style={{
          fontSize: "clamp(44px, 6vw, 80px)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {value.toLocaleString("ru")}
        <span className="text-accent">{suffix}</span>
      </div>
      <div
        className="text-[10px] tracking-[0.16em] uppercase text-muted mt-3.5"
        style={{ lineHeight: 1.55 }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <div className="text-[12px] text-muted/50 mt-1.5">{desc}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="reveal border-t border-white/7"
      style={{ padding: "130px 60px" }}
    >
      <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-4">
        001 — О компании
      </div>
      <h2
        className="font-head font-extrabold uppercase text-white"
        style={{
          fontSize: "clamp(34px, 5.5vw, 80px)",
          lineHeight: "0.93",
          letterSpacing: "-0.032em",
        }}
      >
        <TextReveal delay={0.1}>Прямые поставки.</TextReveal>
        <TextReveal delay={0.2} className="text-muted">
          Собственные бригады.
        </TextReveal>
        <TextReveal delay={0.3}>Сертифицированное качество.</TextReveal>
      </h2>

      {/* Stats grid */}
      <div
        className="reveal reveal-d2 mt-[72px] grid grid-cols-1 sm:grid-cols-3 border border-white/7"
        style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
      >
        <StatCell
          target={3}
          suffix="+"
          label="Года на рынке<br/>Дальнего Востока"
          desc="Работаем с ведущими застройщиками региона"
        />
        <StatCell
          target={25000}
          suffix=" м²"
          label="Смонтировано<br/>фасадных систем"
          desc="На объектах бизнес- и премиум-класса"
        />
        <StatCell
          target={2}
          suffix=""
          label="Реализованных<br/>знаковых объекта"
          desc="ЖК Гавань Резиденс · ЖК СТАРК"
        />
      </div>
    </section>
  );
}
