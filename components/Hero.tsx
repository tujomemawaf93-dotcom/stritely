"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const EZ = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
      style={{ padding: "0 60px 72px" }}
    >
      {/* ── Background photo — Гавань Резиденс as hero ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gavan-hero.jpg"
          alt="ЖК Гавань Резиденс — фасады от ООО Строительные Системы"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.92) 60%, rgba(10,10,10,0.97) 100%)",
          }}
        />
      </div>

      {/* Animated grid */}
      <div className="hero-grid" />

      {/* Left accent line */}
      <div className="hero-vline" />

      {/* Decorative rotated frames */}
      <div
        className="hero-deco"
        style={{
          right: "-90px", top: "8%",
          width: "500px", height: "500px",
          transform: "rotate(12deg)",
          animationDelay: "1s",
        }}
      />
      <div
        className="hero-deco"
        style={{
          right: "-40px", top: "16%",
          width: "360px", height: "360px",
          transform: "rotate(12deg)",
          animationDelay: "1.25s",
        }}
      />

      {/* ── Glassmorphism badge ── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: EZ, delay: 1.6 }}
        className="hidden lg:block absolute right-[60px] z-10"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className="border border-white/7 p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            minWidth: "210px",
          }}
        >
          <div className="text-[8px] tracking-[0.42em] uppercase text-accent mb-2">
            Владивосток · ДФО
          </div>
          <div className="font-head text-[17px] font-bold leading-snug">
            Фасады<br />премиум-класса
          </div>
          <div className="text-[11px] text-muted mt-1.5 leading-relaxed">
            Бизнес и выше
          </div>
          <div className="w-full h-px bg-white/7 my-4" />
          {[
            ["Опыт",        "3+ года"  ],
            ["Смонтировано","25 000 м²"],
            ["Реализовано", "2 объекта"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between items-baseline mb-2 last:mb-0">
              <span className="text-[9px] text-muted">{label}</span>
              <span className="text-[11px] font-semibold text-alum">{val}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-[3]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EZ, delay: 0.65 }}
          className="text-[9px] tracking-[0.42em] uppercase text-accent font-medium mb-6"
        >
          ООО «Строительные системы» · Светопрозрачные конструкции
        </motion.div>

        {/* Title with mask reveal */}
        <h1
          className="font-head font-extrabold uppercase text-white"
          style={{
            fontSize: "clamp(52px, 8vw, 120px)",
            lineHeight: "0.92",
            letterSpacing: "-0.035em",
          }}
        >
          <TextReveal delay={0.7}>Свето&shy;</TextReveal>
          <TextReveal delay={0.85}>прозрачные</TextReveal>
          <TextReveal delay={1.0} className="text-accent">
            конструкции
          </TextReveal>
        </h1>

        {/* Bottom row */}
        <div className="flex items-end justify-between mt-12">
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EZ, delay: 1.2 }}
              className="flex gap-10"
            >
              {[
                { num: "25K",  sup: "",  label: "м² смонтировано" },
                { num: "3+",   sup: "",  label: "лет на рынке"    },
                { num: "2",    sup: "",  label: "крупных объекта" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-head font-bold text-white"
                    style={{ fontSize: "28px", letterSpacing: "-0.02em", lineHeight: 1 }}
                  >
                    <span className="text-accent">{num}</span>
                  </div>
                  <div className="text-[9px] tracking-[0.16em] uppercase text-muted mt-1.5">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EZ, delay: 1.35 }}
              className="mt-6 text-[13px] leading-[1.9] text-muted max-w-[380px]"
            >
              Изготовление и монтаж фасадных систем премиум-класса для застройщиков
              Дальнего Востока. Алюминиевые фасады, панорамное остекление,
              витражи — под ключ.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EZ, delay: 1.5 }}
            className="hidden sm:flex flex-col items-center gap-3"
          >
            <span
              className="text-[8px] tracking-[0.32em] uppercase text-muted"
              style={{ writingMode: "vertical-rl" }}
            >
              Прокрутите
            </span>
            <div className="scroll-line" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
