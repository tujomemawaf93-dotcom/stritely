"use client";

import { useState, useEffect, useRef } from "react";
import TextReveal from "./TextReveal";

const items = [
  {
    num: "01",
    name: "Цена без переплат",
    body: "Прямые контракты с производителями алюминиевого профиля и стекла исключают наценки дилерского звена.",
    bold: "Экономия заказчика — до 18% от рыночной стоимости",
    after: " при сопоставимом качестве материалов.",
    tag: "Прямые поставки · Без посредников",
  },
  {
    num: "02",
    name: "Сертифицированное качество",
    body: "Все конструкции соответствуют ГОСТ и отраслевым техрегламентам.",
    bold: "Полный пакет исполнительной документации",
    after: " для сдачи объекта — без дополнительных согласований.",
    tag: "ГОСТ · Техрегламент · ИД",
  },
  {
    num: "03",
    name: "Сроки под контролем",
    body: "Собственные бригады монтажников базируются во Владивостоке.",
    bold: "Никакой зависимости от привлечённых субподрядчиков",
    after: " — мы управляем графиком изнутри.",
    tag: "Свои бригады · Владивосток",
  },
  {
    num: "04",
    name: "BIM-технологии",
    body: "Проектирование в среде BIM позволяет выявить коллизии до начала производства и синхронизировать модель с генподрядчиком.",
    bold: "Результат — ноль переделок на объекте.",
    after: "",
    tag: "BIM · Ревит · 3D-модель",
  },
  {
    num: "05",
    name: "Собственное производство",
    body: "Производственная база в Приморском крае: полный цикл от нарезки профиля до сборки и остекления.",
    bold: "Любой нестандартный узел — по вашему чертежу,",
    after: " без компромиссов с дизайн-концепцией.",
    tag: "Производство ПК · Полный цикл",
  },
];

export default function Advantages() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let ai = 0;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top + r.height / 2 < window.innerHeight * 0.60) ai = i;
      });
      setActive(ai);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pct = ((active + 1) / items.length) * 100;

  return (
    <section
      id="advantages"
      className="grid border-t border-white/7"
      style={{
        gridTemplateColumns: "1fr 1fr",
        gap: "0 96px",
        padding: "0 60px",
      }}
    >
      {/* LEFT STICKY */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center"
        style={{ padding: "80px 0" }}
      >
        <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-6">
          003 — Почему мы
        </div>
        <h2
          className="font-head font-extrabold uppercase text-white"
          style={{
            fontSize: "clamp(38px, 5vw, 70px)",
            lineHeight: "0.93",
            letterSpacing: "-0.03em",
          }}
        >
          <TextReveal delay={0.1}>Почему</TextReveal>
          <TextReveal delay={0.2} className="text-muted">
            выбирают нас
          </TextReveal>
        </h2>
        <p className="mt-8 text-[12px] leading-[1.9] text-muted max-w-[310px]">
          Пять системных преимуществ, которые отличают нас от региональных
          подрядчиков и делают сотрудничество предсказуемым для застройщика.
        </p>

        {/* Progress */}
        <div className="mt-12">
          <div className="h-px w-[190px] bg-white/8 relative overflow-hidden">
            <div
              className="adv-progress-fill absolute left-0 top-0 h-full bg-accent"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="text-[9px] tracking-[0.18em] text-muted mt-2.5">
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* RIGHT SCROLLING */}
      <div style={{ padding: "170px 0" }}>
        {items.map((item, i) => (
          <div
            key={item.num}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`border-t border-white/7 relative
              transition-all duration-[450ms] ease-luxury
              ${active === i ? "pl-6" : "pl-0"}`}
            style={{ padding: active === i ? "54px 0 46px 24px" : "54px 0 46px 0" }}
          >
            {/* Left accent line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent
                transition-transform duration-[550ms] ease-luxury origin-top"
              style={{ transform: active === i ? "scaleY(1)" : "scaleY(0)" }}
            />

            <div
              className={`text-[9px] tracking-[0.36em] mb-3.5 transition-colors duration-300
                ${active === i ? "text-accent" : "text-muted"}`}
            >
              {item.num}
            </div>
            <div
              className={`font-head font-extrabold uppercase transition-colors duration-400
                ${active === i ? "text-accent" : "text-white"}`}
              style={{
                fontSize: "clamp(22px, 3vw, 40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {item.name}
            </div>

            {/* Expandable body */}
            <div
              className="overflow-hidden transition-all duration-[650ms] ease-luxury"
              style={{
                maxHeight: active === i ? "240px" : "0",
                opacity:   active === i ? 1 : 0,
              }}
            >
              <div className="pt-5 text-[12px] leading-[1.9] text-muted max-w-[480px]">
                {item.body} <strong className="text-alum font-medium">{item.bold}</strong>
                {item.after}
                <div
                  className="inline-block mt-3.5 text-[8px] tracking-[0.26em] uppercase
                    border border-accent/35 text-accent px-3 py-1"
                >
                  {item.tag}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
