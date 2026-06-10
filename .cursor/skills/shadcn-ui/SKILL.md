---
name: shadcn-ui
description: >-
  Use shadcn/ui as the primary component library for UI work in this project.
  Use when building or editing React UI, adding components, styling pages, or
  when the user mentions shadcn, components, buttons, forms, dialogs, or layout.
---

# shadcn/ui

## Rules

- ใช้ shadcn/ui เป็น component library หลัก
- ใช้ **Tailwind CSS v4** สำหรับ styling ทั้งหมด
- อ่าน SKILL.md ก่อน code ทุกครั้ง
- อย่า build component จากศูนย์ถ้า shadcn มีอยู่แล้ว

## Tailwind CSS v4

- Version: **Tailwind CSS v4** (`tailwindcss` + `@tailwindcss/vite`)
- ไม่มี `tailwind.config.js` — config อยู่ใน CSS แทน
- Entry: `src/index.css` ใช้ `@import "tailwindcss"`
- Vite plugin: `@tailwindcss/vite` ใน `vite.config.js`
- Theme tokens: กำหนดใน `:root` / `.dark` และ `@theme inline { ... }`
- Custom variant: `@custom-variant dark (&:is(.dark *))`
- ใช้ utility classes ใน JSX (`className`) แทนเขียน CSS ใหม่เมื่อทำได้
- ใช้ `cn()` จาก `@/lib/utils` เมื่อ merge classes

### ห้ามทำ (Tailwind)

- อย่าติดตั้ง Tailwind v3 หรือสร้าง `tailwind.config.js` / `postcss.config.js` แบบเก่า
- อย่าใช้ `@tailwind base/components/utilities` (syntax v3)
- อย่าใช้ `theme.extend` ใน JS config — ใช้ CSS variables + `@theme` แทน

## Project setup

- `components.json` — shadcn config (radix-nova, Vite, JS)
- `src/components/ui/` — installed: `button`, `dropdown-menu`, `input`, `textarea`, `select`, `label`, `accordion`
- `src/lib/utils.js` — `cn()` helper
- `@/` alias → `src/` (see `jsconfig.json`, `vite.config.js`)
- Theme: dark + gold primary (`#f2ca50`), Inter font
- `CtaButton` / `CtaLink` — project wrappers around shadcn `Button` (pill + gold)
- Migrated: `LanguageSwitcher` (dropdown-menu), `Contact` (input/select/textarea/label), `FAQ` (accordion), all CTA buttons (Header, Hero, Stats, ForCreators, Careers, Contact)

```bash
npx shadcn@latest add <component> -y
```

## Workflow

1. **อ่าน skill นี้ก่อน** — ทุกครั้งที่จะแก้ UI หรือเพิ่ม component
2. **เช็ค shadcn ก่อน** — ดูว่ามี component ที่ต้องการแล้วหรือยัง
   - ในโปรเจกต์: `src/components/ui/`
   - ใน registry: https://ui.shadcn.com/docs/components
3. **ใช้ของที่มี** — import จาก `@/components/ui/...` แล้ว compose ต่อ
4. **ยังไม่มี** — ติดตั้งด้วย CLI แทนการเขียนเอง

```bash
npx shadcn@latest add <component>
```

## Component mapping

| ต้องการ | ใช้ shadcn |
|--------|------------|
| ปุ่ม | `button` |
| ฟอร์ม / input | `input`, `textarea`, `select`, `form`, `label` |
| เมนู / dropdown | `dropdown-menu`, `navigation-menu` |
| modal | `dialog`, `sheet`, `alert-dialog` |
| แจ้งเตือน | `toast`, `sonner`, `alert` |
| ตาราง | `table` |
| tabs / accordion | `tabs`, `accordion` |
| card / layout | `card`, `separator`, `scroll-area` |

## ห้ามทำ

- สร้าง custom Button, Input, Dialog, Dropdown เอง ถ้า shadcn มีให้ใช้
- ใช้ UI library อื่นแทน shadcn โดยไม่จำเป็น
- copy-paste markup จากที่อื่นโดยไม่ปรับให้เข้ากับ shadcn patterns

## อนุญาต

- สร้าง component ใหม่เมื่อเป็น **business logic / layout เฉพาะโปรเจกต์** (เช่น `Hero`, `BrandBanner`)
- compose หลาย shadcn components เข้าด้วยกัน
- ปรับ variant / className ผ่าน `cn()` และ Tailwind v4 ตาม design ของโปรเจกต์
- ห้ามสร้างไฟล์ `.css` แยกใน `src/components/` — ใช้ Tailwind classes ใน JSX เท่านั้น
- shared layout classes อยู่ที่ `src/lib/layout.js`
- animation marquee อยู่ใน `src/index.css` (`@theme` + `@keyframes`)
