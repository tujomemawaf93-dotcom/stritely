import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:     "#0A0A0A",
        surf:   "#111111",
        white:  "#F3F4F6",
        muted:  "#6B7280",
        accent: "#00E5FF",
        alum:   "#D1D5DB",
      },
      fontFamily: {
        head: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(52px, 8vw, 120px)",
        "fluid-h2":   "clamp(34px, 5.5vw, 80px)",
        "fluid-h3":   "clamp(22px, 3vw, 40px)",
        "fluid-srv":  "clamp(20px, 3vw, 36px)",
        "fluid-case": "clamp(36px, 6vw, 80px)",
        "fluid-wf":   "clamp(20px, 2.8vw, 36px)",
      },
      lineHeight: {
        tight92: "0.92",
        tight93: "0.93",
        tight95: "0.95",
      },
      letterSpacing: {
        "ultra": "0.42em",
        "wide":  "0.30em",
        "mid":   "0.22em",
        "sm":    "0.16em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "900": "900ms",
        "1200": "1200ms",
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        revealLine: {
          from: { transform: "translateY(112%)" },
          to:   { transform: "translateY(0)" },
        },
        vlineGrow: {
          to: { transform: "scaleY(1)" },
        },
        decoFade: {
          to: { opacity: "1" },
        },
        badgeSlide: {
          from: { opacity: "0", transform: "translate(32px, -50%)" },
          to:   { opacity: "1", transform: "translate(0, -50%)" },
        },
        gridShift: {
          "0%":   { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "76px 76px" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%":      { opacity: "1" },
        },
        hintPulse: {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.5" },
          "50%":      { transform: "translateX(4px)", opacity: "1" },
        },
      },
      animation: {
        "slide-up":    "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "reveal-line": "revealLine 1.15s cubic-bezier(0.16,1,0.3,1) forwards",
        "vline-grow":  "vlineGrow 1.5s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
        "deco-fade":   "decoFade 2.5s cubic-bezier(0.16,1,0.3,1) 1s forwards",
        "badge-slide": "badgeSlide 1.3s cubic-bezier(0.16,1,0.3,1) 1.6s forwards",
        "grid-shift":  "gridShift 28s linear infinite",
        "scroll-pulse":"scrollPulse 2.2s ease-in-out infinite 2s",
        "hint-pulse":  "hintPulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
