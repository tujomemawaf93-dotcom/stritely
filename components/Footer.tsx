import Image from "next/image";

const navLinks = [
  { href: "#about",      label: "О нас"        },
  { href: "#services",   label: "Услуги"       },
  { href: "#advantages", label: "Преимущества" },
  { href: "#cases",      label: "Объекты"      },
  { href: "#workflow",   label: "Процесс"      },
  { href: "#contact",    label: "Контакт"      },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/7" style={{ padding: "40px 60px" }}>
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ООО Строительные Системы"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-head text-[11px] font-bold tracking-[0.26em] uppercase">
              ООО «<span className="text-accent">Строительные Системы</span>»
            </div>
            <div className="text-[9px] text-muted mt-1 tracking-[0.1em]">
              Владивосток · Светопрозрачные конструкции
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[9px] tracking-[0.20em] uppercase text-muted
                transition-colors duration-300 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <div className="text-[9px] tracking-[0.10em]" style={{ color: "rgba(107,114,128,0.32)" }}>
          © 2024 · Все права защищены
        </div>
      </div>
    </footer>
  );
}
