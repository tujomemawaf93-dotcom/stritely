# ООО Строительные Системы — Next.js сайт

## Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev

# 3. Открыть в браузере
# http://localhost:3000
```

## Фотографии — положить в `/public/images/`

| Файл               | Что это                                        | Откуда взять        |
|--------------------|------------------------------------------------|---------------------|
| `logo.png`         | Логотип компании (3-е фото из чата)            | Скачать из чата     |
| `gavan-hero.jpg`   | ЖК Гавань Резиденс — 2-е фото (вид с воды)    | Скачать из чата     |
| `gavan-wide.jpg`   | ЖК Гавань Резиденс — 2-е фото (широкий план)  | То же фото / дубль  |
| `stark.jpg`        | ЖК СТАРК — 1-е фото (башни ночью)             | Скачать из чата     |

> **Совет:** `gavan-hero.jpg` и `gavan-wide.jpg` можно сделать из одного и того же
> фото — для Hero используется portrait/wide crop, для карточки Cases — полный кадр.

## Подключить Webhook (n8n / Make.com)

Открыть `components/Contact.tsx`, найти блок:

```typescript
// Замените URL на ваш n8n / Make.com endpoint:
await fetch("https://your-n8n.com/webhook/xxxx", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, phone, comment }),
});
```

## Структура проекта

```
stroysistemy/
├── app/
│   ├── layout.tsx          ← Lenis smooth scroll, шрифты, meta
│   ├── page.tsx            ← Сборка всех секций
│   └── globals.css         ← CSS переменные, анимации, курсор
├── components/
│   ├── LenisProvider.tsx   ← Smooth scroll провайдер
│   ├── Cursor.tsx          ← Кастомный курсор с инерцией
│   ├── Navigation.tsx      ← Glassmorphism nav + mobile menu
│   ├── Hero.tsx            ← 100vh, staggered reveal, бейдж
│   ├── About.tsx           ← Счётчики (0 → цель)
│   ├── Services.tsx        ← 8 услуг с hover-анимацией
│   ├── Advantages.tsx      ← Sticky scroll, 5 преимуществ
│   ├── Cases.tsx           ← Horizontal scroll pin (2 объекта)
│   ├── Workflow.tsx        ← Вертикальный таймлайн
│   ├── Contact.tsx         ← Форма + webhook ready
│   └── Footer.tsx          ← Логотип, ссылки, копирайт
├── lib/
│   ├── useReveal.ts        ← Intersection Observer хук
│   └── useCounter.ts       ← Анимация числовых счётчиков
├── public/
│   └── images/             ← СЮДА положить фото (см. таблицу выше)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Деплой на Vercel

```bash
npm install -g vercel
vercel --prod
```
