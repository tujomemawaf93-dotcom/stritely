"use client";

import { useRef, useEffect, useState } from "react";
import TextReveal from "./TextReveal";

const steps = [
  {
    num: "01",
    title: "Заявка и замер",
    stepLabel: "Этап первый",
    desc: "Получаем заявку, выезжаем на объект в течение 48 часов. Замерщик фиксирует все критические отметки, фасадную геометрию и особенности конструктива. Результат — технический паспорт объекта.",
    tags: ["Выезд 48ч", "Лазерный замер", "Тех. паспорт"],
    time: "1–2 дня",
  },
  {
    num: "02",
    title: "Проект и расчёт",
    stepLabel: "Этап второй",
    desc: "Инженер разрабатывает BIM-модель, конструктор рассчитывает нагрузки и узловые соединения. Спецификация материалов формируется автоматически. Согласование через единый PDF-пакет.",
    tags: ["BIM-модель", "Расчёт нагрузок", "Спецификация"],
    time: "5–10 дней",
  },
  {
    num: "03",
    title: "Производство",
    stepLabel: "Этап третий",
    desc: "Собственная производственная база в Приморском крае: нарезка, фрезеровка, сборка, остекление. Пооперационный контроль ОТК. Заказчик получает доступ к фотоотчёту по каждой партии изделий.",
    tags: ["Собственный цех", "ОТК", "Фотоотчёт"],
    time: "15–30 дней",
  },
  {
    num: "04",
    title: "Монтаж и сдача",
    stepLabel: "Этап четвёртый",
    desc: "Бригада монтажников работает по нашему же проекту — никакого «сломанного телефона». Сдача по акту с исполнительной документацией, готовой к передаче в надзорные органы.",
    tags: ["Свои монтажники", "Акт КС-2", "Исп. документация"],
    time: "По графику",
  },
];

export default function Workflow() {
  const trackRef    = useRef<HTMLDivElement>(null);
  const fillRef     = useRef<HTMLDivElement>(null);
  const stepRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      const fill  = fillRef.current;
      if (!track || !fill) return;

      const r   = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - r.top) / r.height));
      fill.style.height = (pct * 100) + "%";

      let ai = -1;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const sr = el.getBoundingClientRect();
        if (sr.top + sr.height / 2 < window.innerHeight * 0.57) ai = i;
      });
      setActive(ai);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="workflow"
      className="reveal border-t border-white/7"
      style={{ padding: "140px 60px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-[92px]">
        <div>
          <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-4">
            005 — Процесс
          </div>
          <h2
            className="font-head font-extrabold uppercase text-white"
            style={{
              fontSize: "clamp(34px, 5.5vw, 80px)",
              lineHeight: "0.93",
              letterSpacing: "-0.032em",
            }}
          >
            <TextReveal delay={0.1}>Как мы</TextReveal>
            <TextReveal delay={0.2} className="text-muted">
              работаем
            </TextReveal>
          </h2>
        </div>
        <p className="text-[12px] text-muted max-w-[260px] leading-[1.9] text-right hidden md:block">
          Четыре предсказуемых этапа.<br />
          Каждый — с фиксированным результатом<br />
          и точкой контроля для заказчика.
        </p>
      </div>

      {/* Track */}
      <div className="relative" ref={trackRef}>
        {/* Background line */}
        <div
          className="absolute top-0 bottom-0 bg-white/6"
          style={{ left: "27px", width: "1px" }}
        />
        {/* Fill line */}
        <div
          ref={fillRef}
          className="absolute top-0 w-px"
          style={{
            left: "27px",
            height: "0%",
            background: "linear-gradient(180deg, #00E5FF, rgba(0, 229, 255, 0.12))",
            transition: "height 0.12s linear",
          }}
        />

        {steps.map((step, i) => {
          const isActive = active >= i;
          return (
            <div
              key={step.num}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`grid border-b border-white/7 relative items-start
                ${i === steps.length - 1 ? "border-none" : ""}`}
              style={{
                gridTemplateColumns: "54px 1fr",
                gap: "0 40px",
                padding: "46px 0",
              }}
            >
              {/* Node */}
              <div
                className="w-[54px] h-[54px] rounded-full flex items-center justify-center
                  flex-shrink-0 relative z-[2] font-head font-bold text-[13px]
                  transition-all duration-[550ms] ease-luxury"
                style={{
                  border: isActive ? "1px solid #00E5FF" : "1px solid rgba(255,255,255,0.10)",
                  background: isActive ? "rgba(0, 229, 255, 0.11)" : "#0A0A0A",
                  color: isActive ? "#00E5FF" : "#6B7280",
                  boxShadow: isActive ? "0 0 0 6px rgba(0, 229, 255, 0.08)" : "none",
                }}
              >
                {step.num}
              </div>

              {/* Body */}
              <div style={{ paddingTop: "10px" }}>
                <div
                  className={`text-[8px] tracking-[0.36em] uppercase mb-2.5
                    transition-colors duration-300
                    ${isActive ? "text-accent" : "text-muted"}`}
                >
                  {step.stepLabel}
                </div>
                <div
                  className={`font-head font-extrabold uppercase transition-colors duration-400
                    ${isActive ? "text-accent" : "text-white"}`}
                  style={{
                    fontSize: "clamp(20px, 2.8vw, 36px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {step.title}
                </div>

                {/* Expandable desc */}
                <div
                  className="overflow-hidden transition-all duration-[650ms] ease-luxury"
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                    opacity:   isActive ? 1 : 0,
                  }}
                >
                  <p className="mt-3 text-[12px] text-muted leading-[1.9] max-w-[600px]">
                    {step.desc}
                  </p>
                  <div
                    className="flex gap-2 flex-wrap mt-3.5 overflow-hidden
                      transition-all duration-[550ms] ease-luxury"
                    style={{
                      maxHeight: isActive ? "56px" : "0",
                      opacity:   isActive ? 1 : 0,
                      transitionDelay: isActive ? "0.12s" : "0s",
                    }}
                  >
                    {step.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] tracking-[0.22em] uppercase border border-white/7
                          text-alum px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time label */}
              <div
                className="absolute right-0 text-[9px] tracking-[0.14em] uppercase"
                style={{ top: "46px", color: "rgba(107,114,128,0.35)" }}
              >
                {step.time}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
