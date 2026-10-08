# 02 — Design System (SUMBER KEBENARAN VISUAL)

Gaya: **Modern Bento Grid** (referensi Linear / Raycast). Gelap, presisi, tenang. Kemewahan datang dari detail kecil, bukan dari efek besar.

## 1. Token Warna (CSS variables, taruh di `:root`)

```css
:root {
  /* Surface (dark slate) */
  --bg-0: #070A12;          /* kanvas halaman */
  --bg-1: #0B1020;          /* section alternatif */
  --surface-1: #0F1629;     /* kartu bento dasar */
  --surface-2: #141C33;     /* kartu terangkat / hover */
  --surface-3: #1A2340;     /* elemen di dalam kartu */

  /* Border (hairline) */
  --border-1: rgba(148, 163, 184, 0.10);
  --border-2: rgba(148, 163, 184, 0.18);
  --border-accent: rgba(56, 189, 248, 0.45);

  /* Teks */
  --text-1: #F1F5F9;        /* judul */
  --text-2: #A8B3C7;        /* body */
  --text-3: #6B7791;        /* meta, label */

  /* Aksen */
  --blue: #3B82F6;          /* electric blue (primer) */
  --blue-strong: #2563EB;
  --cyan: #22D3EE;          /* cyan glow (sekunder) */
  --cyan-soft: rgba(34, 211, 238, 0.14);
  --blue-soft: rgba(59, 130, 246, 0.14);

  /* Status */
  --success: #34D399;
  --warning: #FBBF24;
  --danger: #F87171;

  /* Glow */
  --glow-blue: 0 0 0 1px rgba(59,130,246,.35), 0 0 32px -6px rgba(59,130,246,.45);
  --glow-cyan: 0 0 28px -8px rgba(34,211,238,.5);
}
```

**Aturan warna**
- Aksen dipakai hemat: maksimal ±10% area layar. Sisanya slate.
- Gradient hanya boleh **blue → cyan** (arah 135°) atau radial glow transparan. Dilarang ungu/pink.
- Kontras teks minimal WCAG AA (4.5:1 body, 3:1 teks besar). `--text-3` hanya untuk meta non-kritis.

## 2. Tipografi
| Peran | Font | Ukuran (desktop / mobile) | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Display (H1 hero) | Inter | 64 / 38 px | 600 | -0.03em | 1.05 |
| H2 section | Inter | 40 / 28 px | 600 | -0.02em | 1.15 |
| H3 judul kartu | Inter | 20 / 18 px | 600 | -0.01em | 1.3 |
| Body | Inter | 16 px | 400 | 0 | 1.6 |
| Small / meta | Inter | 13 px | 500 | 0.01em | 1.4 |
| Eyebrow (label atas) | Inter | 12 px, uppercase | 600 | 0.12em | 1.2 |
| Angka / waktu / Rupiah | JetBrains Mono | sesuai konteks | 500 | -0.01em | 1.2 |

- Gunakan `font-feature-settings: "cv11", "ss01"` untuk Inter; `font-variant-numeric: tabular-nums` pada semua angka yang berubah.
- Judul besar boleh memakai gradient teks halus: `--text-1` → `#9FB4D6` (bukan pelangi).

## 3. Spacing, Radius, Layout
- Skala spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px.
- Container: `max-width: 1200px`, padding sisi 20px (mobile) / 32px (desktop).
- Section vertical padding: 96px desktop, 64px mobile.
- Radius: kartu **20px**, elemen dalam kartu **12px**, pill/badge **999px**, tombol **10px**.
- **Bento grid**: 12 kolom desktop, gap 16px (mobile 12px). Mobile: 1 kolom. Tablet (≥768): 6 kolom. Desktop (≥1024): 12 kolom.
- Padding dalam kartu: 24px (mobile 20px). Tiap kartu = judul + deskripsi 1–2 kalimat + visual mini-UI.

## 4. Anatomi Kartu Bento
```
.bento-card {
  position: relative;
  background: linear-gradient(180deg, rgba(20,28,51,.72), rgba(15,22,41,.72));
  border: 1px solid var(--border-1);        /* hairline 1px */
  border-radius: 20px;
  backdrop-filter: blur(12px) saturate(120%);
  overflow: hidden;
  transition: border-color .25s, transform .25s, background .25s;
}
.bento-card::before {                         /* spotlight yang mengikuti kursor */
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(420px circle at var(--mx,50%) var(--my,0%),
              rgba(56,189,248,.10), transparent 60%);
  opacity: 0; transition: opacity .3s;
}
.bento-card:hover { border-color: var(--border-2); transform: translateY(-2px); }
.bento-card:hover::before { opacity: 1; }
.bento-card:focus-visible { outline: 2px solid var(--cyan); outline-offset: 3px; }
```
- Blur hanya dipakai pada kartu & navbar (bukan seluruh halaman).
- Shadow: tipis saja (`0 1px 0 rgba(255,255,255,.04) inset`). **Dilarang drop-shadow tebal.**
- Latar halaman: `--bg-0` + 1 radial glow biru di atas hero (opacity ≤ .25) + grain/grid garis sangat tipis (opacity ≤ .04).

## 5. Komponen
**Tombol primer**: bg `--blue`, teks putih, radius 10, tinggi 44px, hover naik 1px + `--glow-blue`.
**Tombol sekunder**: transparan, border `--border-2`, hover bg `--surface-2`.
**Badge/pill**: bg `--cyan-soft`, teks `--cyan`, 12px, padding 4×10.
**Navbar**: sticky, tinggi 64px, bg `rgba(7,10,18,.7)` + blur 14px, border bawah hairline. Muncul border hanya setelah scroll.
**Input/Toggle (di mockup)**: bg `--surface-3`, border `--border-1`, fokus ring cyan.

## 6. Motion
- Durasi: 150ms (micro), 250ms (hover), 600ms (reveal). Easing: `cubic-bezier(.2,.8,.2,1)`.
- **Reveal on scroll**: fade + translateY(12px) → 0, stagger 60ms antar kartu, via IntersectionObserver (sekali saja).
- Micro-interactions: spotlight kursor, counter angka, timer berjalan, pulse titik "live" (satu elemen saja per kartu).
- `@media (prefers-reduced-motion: reduce)`: matikan transform, counter, pulse; tampilkan state akhir langsung.
- Dilarang: animasi infinite pada >3 elemen bersamaan, parallax berat, video autoplay.

## 7. Ikonografi & Logo
- Ikon **hanya dari `lucide-react`**: `strokeWidth={1.5}`, ukuran 20–24px, warna `currentColor`. Import per-ikon (tree-shaking).
- Logo: wordmark "TalentaCloud" (Inter 600) + ikon buatan sendiri (awan minimal dengan titik spark cyan) sebagai komponen SVG. Simpan juga sebagai `public/favicon.svg`.

## 8. Implementasi Tailwind + Next.js
- Token di `src/app/globals.css` (`:root`) persis seperti §1. Petakan ke tema Tailwind agar dipakai sebagai utilitas (`bg-surface-1`, `text-text-2`, `border-line-1`, `text-cyan`, dst.). Tailwind v4: lewat `@theme inline { --color-surface-1: var(--surface-1); ... }`; Tailwind v3: lewat `theme.extend.colors` di `tailwind.config.ts`.
- Font: `next/font/google` untuk Inter (`--font-sans`) dan JetBrains Mono (`--font-mono`), dipasang di `<html>`.
- Anatomi kartu (§4) dibuat sebagai komponen `ui/BentoCard.tsx` (props: `className`, `as`, `children`) dengan spotlight kursor via `onPointerMove` yang mengatur `--mx`/`--my`. Semua kartu modul memakai komponen ini.
- Reveal on scroll dibuat sebagai komponen `ui/Reveal.tsx` (IntersectionObserver, sekali jalan, stagger via prop `delay`).
- Identitas visual ini **khusus TalentaCloud**; jangan dipakai ulang di website lain pada seri (lihat diferensiasi di `00-global-rules.md` §3).
