# 00 — Aturan Global Seri 10 Website (WAJIB)

File ini identik di semua 10 folder website. Isinya aturan yang tidak boleh dilanggar. Detail visual per website ada di `02-design-system.md` masing-masing.

## 1. Format Produk
Murni **Website Landing Page**: halaman promosi produk, persuasif, fokus **konversi** dan **showcase fitur**. Bukan aplikasi internal / dashboard. Mockup UI hanya ilustrasi di dalam halaman untuk memamerkan fitur.

Konsekuensi:
- Ada alur persuasi: Hero (janji) → masalah → solusi/modul → cara kerja → bukti sosial → harga/penawaran → FAQ → CTA.
- CTA utama berulang minimal 4× sepanjang halaman (navbar, hero, tengah, penutup).
- Setiap klaim fitur didukung visual mockup atau contoh nyata.

## 2. Lima Modul Wajib (setiap website, semua sub-fitur)

| Modul | Sub-fitur yang WAJIB tampil dan terlihat jelas |
|---|---|
| 📍 **Absensi** | Clock-in/out · GPS Geofencing · Shift kerja · Rekap kehadiran real-time |
| 💰 **Gaji (Payroll)** | Kalkulasi gaji otomatis · PPh 21 · BPJS · Slip gaji digital · Reimbursement |
| 📝 **Exam** | Assessment rekrutmen online · Evaluasi kinerja · Uji kompetensi · Proctoring |
| 📚 **Library** | Knowledge base SOP kantor · Arsip dokumen perusahaan · Modul e-learning |
| 📑 **Perizinan** | Workflow approval cuti · Izin sakit · Lembur · Transparansi sisa cuti |

Aturan:
- Tiap modul punya area/kartu sendiri dengan nama modul, manfaat, dan seluruh sub-fitur di atas (sebagai visual, chip, atau daftar).
- Nama modul memakai istilah persis di atas (Absensi, Gaji, Exam, Library, Perizinan) agar konsisten di seluruh seri; boleh ditambah subjudul kreatif sesuai karakter website.
- Ikon modul dari Lucide (rekomendasi: `MapPin`, `Wallet`, `ClipboardCheck`, `BookOpen`, `CalendarCheck`), boleh diganti selama maknanya jelas.

## 3. Diferensiasi Desain (10 website HARUS berbeda)
Setiap website wajib berbeda pada **semua** sumbu berikut. Dua website tidak boleh sama pada lebih dari dua sumbu.

| Sumbu | Yang harus unik |
|---|---|
| Palet & mode | Warna dominan, aksen, terang/gelap |
| Tipografi | Pasangan font (judul + body), karakter huruf |
| Layout | Struktur hero & grid (bento, editorial, split, timeline, kartu bertumpuk, dsb.) |
| Bahasa visual | Bentuk, radius, border, tekstur, ilustrasi, gaya ikon |
| Motion | Gaya & ritme animasi |
| Branding | Nama, logo wordmark, tagline, suara copywriting |
| Copywriting | Sudut pandang, hook hero, urutan argumen |

Aturan praktis:
- Jangan menyalin komponen, palet, atau layout dari website lain. Setiap folder berdiri sendiri.
- Daftarkan identitas website di tabel registri berikut (pemilik memperbarui; agent mengisi baris website sendiri bila belum terisi, dan **tidak menyentuh baris lain**):

| # | Folder | Brand | Gaya | Mode | Aksen | Font (judul / body) | Layout hero |
|---|---|---|---|---|---|---|---|
| 01 | `01-talentacloud` | TalentaCloud | Modern Bento Grid (ala Linear/Raycast) | Gelap (dark slate) | Electric blue / cyan | Inter / Inter + JetBrains Mono | Mockup bento all-in-one |
| 02–10 | (diisi saat dibuat) | | | | | | |

## 4. SEO & OpenGraph (setiap website, lengkap)
Wajib per website: `title`, `description`, `canonical`, `og:title`, `og:description`, `og:image` (1200×630, unik per website), `og:url`, `og:type`, `og:locale`, Twitter card, **schema markup JSON-LD** (`SoftwareApplication` / `Organization` + `FAQPage`), `sitemap`, `robots`. Detail implementasi Next.js ada di `05-seo-og-quality.md`.

Domain/URL canonical: **placeholder** sampai pemilik memberi domain; simpan di satu tempat (`src/lib/site.ts`) agar mudah diganti.

## 5. Tech Stack & Struktur (Opsi A)
- **Next.js (App Router) + React + TypeScript + Tailwind CSS + Lucide Icons (`lucide-react`)**.
- **Struktur folder independen (Opsi A)**: tiap website = proyek Next.js mandiri di foldernya sendiri (`01-talentacloud`, `02-...`, dst.), dengan `package.json`, konfigurasi, dan komponen sendiri. Tidak ada workspace/monorepo bersama, tidak ada impor lintas folder. Duplikasi kode antar website diperbolehkan demi kemandirian dan keunikan desain.

## 6. Kualitas Minimum
- `npm run build` sukses; tanpa error console.
- Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO).
- Responsif 375 / 768 / 1024 / 1440; WCAG 2.2 AA; hormati `prefers-reduced-motion`.
- Konten Bahasa Indonesia; data dummy realistis; tanpa lorem ipsum.
- Testimoni, angka, dan logo klien yang ilustratif **wajib** ditandai (komentar kode + dilaporkan ke pemilik). Gunakan nama perusahaan fiktif.
