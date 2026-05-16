import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";
import AppWrapper from "@/components/AppWrapper";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ООО Строительные Системы — Светопрозрачные конструкции · Владивосток",
  description:
    "Изготовление и монтаж светопрозрачных конструкций бизнес- и премиум-класса. " +
    "Алюминиевые фасады, панорамное остекление, витражи — под ключ. Владивосток, ДФО.",
  keywords: [
    "алюминиевые фасады", "панорамное остекление", "витражи",
    "светопрозрачные конструкции", "Владивосток", "застройщик",
  ],
  openGraph: {
    title: "ООО Строительные Системы",
    description: "Премиальные светопрозрачные конструкции для застройщиков Дальнего Востока",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${syne.variable} ${manrope.variable}`}>
      <body>
        {/* Фоновые премиум-эффекты */}
        <div className="swiss-grid" />


        <LenisProvider>
          <Cursor />
          <AppWrapper>
            {children}
          </AppWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}
