# AGENTS.md — TalentaCloud (Website 01 dari 10)

> File ini dibaca PERTAMA oleh setiap AI agent. Ikuti urutan baca dan aturan di bawah.

## 1. Misi
Bangun **website landing page** (halaman promosi produk, persuasif, fokus konversi & showcase fitur) untuk **TalentaCloud**, platform HRIS modern untuk startup & tim digital. Bukan aplikasi internal/dashboard: mockup UI di dalam halaman hanyalah alat showcase.

Gaya visual website ini: **Modern Bento Grid** ala Linear / Raycast: dark slate, aksen electric blue / cyan glow, hairline border, subtle backdrop blur, micro-interaction halus.

## 2. Urutan Baca Wajib
0. `docs/00-global-rules.md` — aturan wajib seri 10 website (format, 5 modul, diferensiasi, SEO, stack)
1. `docs/01-brief.md` — konteks, audiens, tujuan konversi, tone
2. `docs/02-design-system.md` — token, tipografi, spacing, efek (SUMBER KEBENARAN visual)
3. `docs/03-page-structure.md` — urutan section & copywriting
4. `docs/04-bento-modules.md` — spesifikasi hero mockup + 5 modul wajib
5. `docs/05-seo-og-quality.md` — metadata Next.js, schema, aksesibilitas, performa, checklist final

Prioritas jika konflik: `00-global-rules` > `02-design-system` > `04-bento-modules` > `03-page-structure` > `01-brief`.

## 3. Tech Stack (WAJIB)
- **Next.js (App Router) + React + TypeScript**
- **Tailwind CSS** (token warna dipetakan dari CSS variables ke tema Tailwind)
- **Lucide Icons** lewat `lucide-react` (stroke 1.5). Tidak ada library ikon lain.
- Font via `next/font/google` (Inter + JetBrains Mono untuk site ini).
- Library tambahan hanya yang benar-benar perlu (`clsx`, `tailwind-merge` boleh). **Tanpa** framer-motion/GSAP kecuali pemilik mengizinkan; animasi pakai CSS + IntersectionObserver.
- **Struktur folder independen (Opsi A)**: website ini adalah proyek Next.js mandiri dengan `package.json` sendiri. Tidak boleh mengimpor dari folder website lain.

```
01-talentacloud/
├── AGENTS.md
├── docs/
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── public/
│   └── favicon.svg
└── src/
    ├── app/
    │   ├── layout.tsx            # font, <html lang="id">, metadata dasar
    │   ├── page.tsx              # merakit semua section + JSON-LD
    │   ├── globals.css           # token CSS variables + utilitas custom
    │   ├── opengraph-image.tsx   # og:image 1200x630 (next/og)
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/               # Navbar, Footer
    │   ├── sections/             # Hero, TrustStrip, Problem, Modules, HowItWorks, Testimonials, Pricing, Faq, FinalCta
    │   ├── bento/                # AbsensiCard, GajiCard, ExamCard, LibraryCard, PerizinanCard, HeroMockup
    │   └── ui/                   # Button, Badge, BentoCard, Reveal
    └── lib/
        ├── site.ts               # nama, url, deskripsi, tautan (satu sumber data)
        ├── schema.ts             # builder JSON-LD
        └── data.ts               # data dummy (karyawan, gaji, soal, dokumen, izin)
```
Komponen berstatus interaktif memakai `"use client"`; selebihnya Server Component.

## 4. Aturan Mutlak (DO / DON'T)
**DO**
- Semua warna lewat token (CSS variables → Tailwind theme); jangan hardcode hex di komponen.
- Konten **Bahasa Indonesia** yang ringkas, persuasif, tidak kaku. Istilah teknis (payroll, geofencing, dashboard) boleh Inggris.
- **Semua 5 modul wajib ada dengan seluruh sub-fiturnya** (lihat `00-global-rules.md` §2 dan `04`). Tidak ada yang boleh hilang.
- Setiap section mengarah ke konversi: CTA jelas, bukti sosial, penanganan keberatan (FAQ).
- Mobile-first; uji di 375, 768, 1024, 1440. Hover, focus-visible, dan reduced-motion di tiap kartu.
- Data dummy realistis (nama Indonesia, Rupiah, WIB).

**DON'T**
- Jangan buat tampilan seperti aplikasi internal (sidebar, tabel CRUD penuh, login screen).
- Jangan gradient ungu-pink generik, glassmorphism berlebihan, drop-shadow tebal.
- Jangan stock photo orang. Visual = UI mockup berbasis JSX/SVG/CSS.
- Jangan `lorem ipsum`, `href="#"` kosong, atau "Your text here".
- Jangan menyalin brand/logo/karakter pihak lain (Linear, Raycast hanya referensi gaya).
- Jangan menyalin desain, palet, atau layout dari website lain di seri ini.
- Jangan animasi infinite pada banyak elemen sekaligus.
- Jangan klaim palsu yang tampak seperti fakta (testimoni, angka, logo klien). Tandai sebagai ilustratif.

## 5. Alur Kerja Agent
1. Baca semua docs → ringkas pemahaman dalam 5 baris.
2. `npx create-next-app` (TypeScript, Tailwind, App Router, `src/`), pasang `lucide-react`.
3. Bangun `globals.css` + tema Tailwind (token) dan `lib/site.ts`, `lib/data.ts`.
4. Bangun kerangka `page.tsx` dengan semua section.
5. Hero mockup, lalu 5 kartu modul satu per satu (semua sub-fitur).
6. Interaksi (client components), reveal, counter, timer.
7. SEO: metadata, canonical, OG image, JSON-LD, sitemap, robots.
8. `npm run build` harus sukses tanpa error; jalankan checklist `05` sampai lolos.
9. Laporkan: selesai, asumsi, perlu keputusan pemilik.

## 6. Definition of Done
`npm run build` sukses, tanpa error/warning console, Lighthouse ≥ 90 (Performance, Accessibility, SEO, Best Practices), 5 modul lengkap dengan sub-fitur, metadata SEO/OG/schema lengkap, checklist `05` tercentang, dan tampilan konsisten dengan `02-design-system.md` serta berbeda dari website lain di seri.
