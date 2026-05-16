"use client";

import React, { useState, useEffect } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [comment, setComment] = useState("");
  const [state,   setState]   = useState<FormState>("idle");
  const [errMsg,  setErrMsg]  = useState("");

  async function handleSubmit() {
    if (!phone.trim()) {
      setErrMsg("Укажите номер телефона");
      setTimeout(() => setErrMsg(""), 2500);
      return;
    }
    setState("loading");

    try {
      /*
       * ── WEBHOOK ─────────────────────────────────────────────────
       * Замените URL на ваш n8n / Make.com endpoint:
       *
       * await fetch("https://your-n8n.com/webhook/xxxx", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify({ name, phone, comment }),
       * });
       * ────────────────────────────────────────────────────────────
       */
      await new Promise((r) => setTimeout(r, 1100)); // mock delay
      setState("success");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  }

  return (
    <section
      id="contact"
      className="reveal border-t border-white/7"
      style={{ padding: "140px 60px" }}
    >
      <div className="text-[8px] tracking-[0.46em] uppercase text-accent mb-4">
        006 — Контакт
      </div>
      <h2
        className="font-head font-extrabold uppercase text-white"
        style={{
          fontSize: "clamp(34px, 5.5vw, 80px)",
          lineHeight: "0.93",
          letterSpacing: "-0.032em",
        }}
      >
        <TextReveal delay={0.1}>Оставьте</TextReveal>
        <TextReveal delay={0.2} className="text-muted">
          заявку
        </TextReveal>
      </h2>

      <div
        className="mt-16 grid gap-24 items-start"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Info */}
        <div>
          <p className="text-[13px] leading-[1.9] text-muted mb-10">
            Работаем напрямую с застройщиками и генподрядчиками.
            Оставьте заявку — менеджер свяжется в течение одного рабочего часа.
          </p>
          {[
            { label: "Email",         val: "vagina.2012@mail.ru", href: "mailto:vagina.2012@mail.ru" },
            { label: "Город",         val: "Владивосток · ДФО",   href: null },
            { label: "Специализация", val: "Светопрозрачные конструкции\nбизнес- и премиум-класса", href: null },
          ].map(({ label, val, href }) => (
            <div key={label} className="mb-7">
              <div className="text-[8px] tracking-[0.36em] uppercase text-accent mb-1.5">
                {label}
              </div>
              {href ? (
                <a
                  href={href}
                  className="font-head text-[15px] font-bold text-alum
                    transition-colors duration-300 hover:text-accent"
                >
                  {val}
                </a>
              ) : (
                <span className="font-head text-[14px] font-semibold text-alum whitespace-pre-line">
                  {val}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div>
          {state === "success" ? (
            <div
              className="p-5 border border-accent/28 text-accent text-[13px]
                leading-[1.6] tracking-[0.06em]"
              style={{ background: "rgba(0, 229, 255, 0.08)" }}
            >
              ✓ Заявка принята. Менеджер свяжется с вами в течение рабочего часа.
            </div>
          ) : (
            <>
              {[
                { id: "name",    label: "Имя",        type: "text",  value: name,    set: setName,    placeholder: "Иван Петров"           },
                { id: "phone",   label: "Телефон *",  type: "tel",   value: phone,   set: setPhone,   placeholder: "+7 (___) ___-__-__"    },
              ].map(({ id, label, type, value, set, placeholder }) => (
                <div key={id} className="flex flex-col gap-1.5 mb-3.5">
                  <label
                    htmlFor={id}
                    className="text-[8px] tracking-[0.28em] uppercase text-muted"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => set(e.target.value)}
                    placeholder={placeholder}
                    className="form-input bg-white/[0.04] border border-white/7 px-4 py-3.5
                      text-white font-body text-[13px] placeholder-muted/45
                      transition-colors duration-300"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5 mb-3.5">
                <label
                  htmlFor="comment"
                  className="text-[8px] tracking-[0.28em] uppercase text-muted"
                >
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Расскажите об объекте, сроках, масштабе..."
                  rows={4}
                  className="form-input bg-white/[0.04] border border-white/7 px-4 py-3.5
                    text-white font-body text-[13px] placeholder-muted/45
                    transition-colors duration-300 resize-y"
                />
              </div>

              {errMsg && (
                <p className="text-[11px] text-red-400 mb-3 tracking-[0.08em]">
                  {errMsg}
                </p>
              )}

              <MagneticButton>
                <button
                  onClick={handleSubmit}
                  disabled={state === "loading"}
                  className="font-body text-[9px] tracking-[0.27em] uppercase font-bold
                    text-bg bg-accent px-8 py-4 mt-2
                    transition-all duration-[350ms] ease-luxury
                    hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(0,229,255,0.30)]
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "loading" ? "Отправка..." : "Отправить заявку →"}
                </button>
              </MagneticButton>

              {state === "error" && (
                <p className="text-[11px] text-red-400 mt-3 tracking-[0.08em]">
                  Ошибка отправки. Попробуйте ещё раз или напишите нам напрямую.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
