"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const links = [
  { href: "#about",      label: "О нас"         },
  { href: "#services",   label: "Услуги"        },
  { href: "#advantages", label: "Преимущества"  },
  { href: "#cases",      label: "Объекты"       },
  { href: "#workflow",   label: "Процесс"       },
  { href: "#contact",    label: "Контакт"       },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between
        transition-all duration-500 ease-luxury
        ${scrolled
          ? "px-[60px] py-4 bg-bg/85 backdrop-blur-2xl border-b border-white/7"
          : "px-[60px] py-8"
        }`}
      style={{ padding: scrolled ? "16px 60px" : "30px 60px" }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="ООО Строительные Системы"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <div
            className="font-head text-[11px] font-bold tracking-[0.28em] uppercase
              text-white leading-tight"
          >
            Строительные
          </div>
          <div className="font-head text-[8px] tracking-[0.40em] uppercase text-accent font-normal mt-0.5">
            Системы · Владивосток
          </div>
        </div>
      </a>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            className="font-body text-[10px] tracking-[0.22em] uppercase text-muted
              font-medium relative group transition-colors duration-300 hover:text-white"
          >
            {l.label}
            <span
              className="absolute -bottom-1 left-0 w-0 h-px bg-accent
                transition-all duration-[450ms] ease-luxury group-hover:w-full"
            />
          </button>
        ))}
      </div>

      {/* CTA */}
      <MagneticButton>
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block font-body text-[9px] tracking-[0.26em] uppercase
            font-bold text-bg bg-accent px-6 py-3
            transition-all duration-[350ms] ease-luxury
            hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,229,255,0.30)]"
        >
          Оставить заявку
        </button>
      </MagneticButton>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Меню"
      >
        <span
          className={`block w-6 h-px bg-white transition-all duration-300
            ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-all duration-300
            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-bg/96 backdrop-blur-2xl z-[499]
            flex flex-col items-center justify-center gap-10"
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-head text-3xl font-bold uppercase tracking-[0.06em]
                text-white hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <MagneticButton>
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-6 font-body text-[10px] tracking-[0.26em] uppercase
                font-bold text-bg bg-accent px-8 py-4"
            >
              Оставить заявку
            </button>
          </MagneticButton>
        </div>
      )}
    </nav>
  );
}
