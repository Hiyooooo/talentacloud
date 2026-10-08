# 05 — SEO, OpenGraph, Schema, Aksesibilitas, Performa & Checklist Final

## 1. Sumber Data Tunggal — `src/lib/site.ts`
```ts
export const site = {
  name: "TalentaCloud",
  url: "https://talentacloud.id",            // PLACEHOLDER: ganti dengan domain asli
  title: "TalentaCloud - Platform HRIS Modern untuk Startup & Tim Digital",
  description:
    "Kelola absensi GPS, payroll otomatis, ujian online, library SOP, dan perizinan dalam satu dashboard bento modern.",
  locale: "id_ID",
  email: "halo@talentacloud.id",             // PLACEHOLDER
};
```
Title dan description **persis** seperti di atas (jangan diubah). Description ≤ 160 karakter.

## 2. Metadata Next.js (`src/app/layout.tsx`)
```ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },                       // → <link rel="canonical">
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: site.title,
    description: site.description,
    // og:image otomatis dari src/app/opengraph-image.tsx
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};
export const viewport = { themeColor: "#070A12" };      // sesuaikan dengan bg website
```
- `<html lang="id">` wajib.
- Wajib ada: `title`, `description`, `canonical`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, Twitter card.

## 3. OG Image Unik (`src/app/opengraph-image.tsx`)
- Gunakan `ImageResponse` dari `next/og`, ukuran **1200×630**, `contentType = "image/png"`, `alt` deskriptif (mis. `Dashboard bento TalentaCloud: absensi, gaji, dan jadwal ujian`).
- Desain: latar `--bg-0` + glow biru, wordmark TalentaCloud, tagline, dan 3 kartu bento mini (presensi, gaji, ujian) dalam gaya website ini.
- Setiap website di seri **wajib** punya OG image yang berbeda dan mengikuti branding sendiri.

## 4. Schema Markup (JSON-LD) — `src/lib/schema.ts` + `page.tsx`
Render di `page.tsx` lewat `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />` dengan satu `@graph` berisi:
- `Organization` (name, url, logo, email)
- `WebSite` (name, url, inLanguage `id-ID`)
- `SoftwareApplication` (name, applicationCategory `BusinessApplication`, operatingSystem `Web`, description, `featureList` berisi **seluruh sub-fitur 5 modul**, `offers` hanya bila harga sudah final; jika masih placeholder, jangan sertakan `offers`)
- `FAQPage` (dibangun dari data FAQ yang sama dengan komponen, agar selalu sinkron)

Jangan memasukkan `aggregateRating`/`review` palsu.

## 5. Sitemap & Robots
- `src/app/sitemap.ts`: URL halaman utama (`lastModified`, `changeFrequency: "monthly"`, `priority: 1`).
- `src/app/robots.ts`: izinkan semua, tunjuk `sitemap`.

## 6. HTML Semantik
- Satu `<h1>`; heading berurutan.
- Landmark: `<header>`, `<nav aria-label="Utama">`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Tautan "Lewati ke konten" di paling atas.
- Gunakan `next/link` untuk tautan internal dan `next/font` untuk font (tanpa layout shift).

## 7. Aksesibilitas (WCAG 2.2 AA)
- Kontras teks ≥ 4.5:1; elemen UI ≥ 3:1.
- Seluruh interaksi bisa dengan keyboard; focus ring terlihat.
- Mockup dekoratif `aria-hidden="true"`; bagian interaktif punya role/label yang benar.
- Status dinamis `aria-live="polite"`. Jangan hanya mengandalkan warna (selalu ikon/teks).
- Target sentuh ≥ 44×44px. Hormati `prefers-reduced-motion`.

## 8. Performa (Lighthouse ≥ 90 semua kategori)
- Server Components sebagai default; `"use client"` hanya untuk bagian interaktif; pertimbangkan `dynamic()` untuk kartu di bawah lipatan.
- Tanpa gambar raster berat; ilustrasi SVG/JSX; ikon `lucide-react` di-import per-ikon (tree-shaking).
- Font via `next/font` (`display: swap`), hanya weight yang dipakai.
- CLS < 0.05: beri dimensi pasti pada mockup & kartu.
- `backdrop-filter` hanya navbar & kartu, dengan fallback `@supports not`.
- Animasi hanya `transform` & `opacity`.
- `npm run build` harus sukses tanpa warning lint/type.

## 9. Checklist Final (agent wajib mencentang semua)

**Format & Konten**
- [ ] Terasa seperti landing page promosi (bukan dashboard internal); alur persuasi lengkap
- [ ] CTA utama muncul ≥ 4×
- [ ] Teks Bahasa Indonesia; tanpa lorem ipsum / `href="#"` kosong
- [ ] Testimoni, angka, klien, dan harga ilustratif ditandai di kode

**5 Modul Wajib (semua sub-fitur terlihat)**
- [ ] Absensi: Clock-in/out · GPS Geofencing · Shift kerja · Rekap real-time
- [ ] Gaji: Kalkulasi otomatis · PPh 21 · BPJS · Slip gaji digital · Reimbursement (aritmetika benar)
- [ ] Exam: Rekrutmen · Evaluasi kinerja · Uji kompetensi · Proctoring
- [ ] Library: SOP · Arsip dokumen · E-learning
- [ ] Perizinan: Approval cuti · Izin sakit · Lembur · Transparansi sisa cuti

**Desain & Diferensiasi**
- [ ] Semua warna dari token; konsisten dengan `02-design-system.md`
- [ ] Tidak ada gradient ungu/pink, drop-shadow tebal, atau stock photo
- [ ] Hanya `lucide-react` untuk ikon
- [ ] Identitas berbeda dari website lain di registri `00-global-rules.md` §3 (tidak ada komponen/palet/layout yang disalin)

**SEO & OG**
- [ ] `title` & `description` persis sesuai §1
- [ ] `canonical`, `og:*`, `twitter:*` lengkap; `og:image` 1200×630 tampil (cek `/opengraph-image`)
- [ ] JSON-LD valid (Organization, WebSite, SoftwareApplication, FAQPage)
- [ ] `sitemap.xml` dan `robots.txt` tersedia

**Teknis**
- [ ] `npm run build` sukses; tanpa error console
- [ ] Responsif 375/768/1024/1440 tanpa scroll horizontal
- [ ] Hover, focus-visible, reduced-motion di tiap kartu
- [ ] Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO)

## 10. Format Laporan Akhir Agent
1. **Selesai**: daftar fitur/halaman/file penting.
2. **Asumsi**: domain placeholder, angka/testimoni/klien/harga ilustratif, logo buatan sendiri.
3. **Skor**: hasil Lighthouse (atau alasan jika tidak bisa dijalankan).
4. **Perlu keputusan pemilik**: domain asli, data asli, harga final, kebijakan privasi/syarat.
