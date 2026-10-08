# 03 — Struktur Halaman & Copywriting (Landing Page Konversi)

Satu halaman (`src/app/page.tsx`), single scroll. **Urutan section tetap**; jangan tambah/kurangi tanpa izin. Setiap section = satu komponen di `components/sections/`.

## Peta Section
1. Navbar
2. Hero + Mockup Bento
3. Trust Strip (angka & logo fiktif)
4. Masalah → Solusi
5. **Modul (bento 5 modul)** — inti halaman
6. Cara Kerja (3 langkah)
7. Testimoni
8. Paket & Harga (ilustratif)
9. FAQ
10. CTA Penutup
11. Footer

CTA utama (`Coba Gratis 14 Hari`) muncul di: navbar, hero, setelah modul, paket, CTA penutup (≥ 4×).

---

## 1. Navbar
- Kiri: logo TalentaCloud (`Link` ke `/`).
- Tengah (desktop): `Modul` · `Cara Kerja` · `Harga` · `FAQ` (anchor smooth-scroll).
- Kanan: sekunder `Jadwalkan Demo`, primer `Coba Gratis`.
- Mobile: hamburger (`Menu`/`X` Lucide) → panel penuh, focus trap, tutup dengan Esc.

## 2. Hero
- Eyebrow pill: `HRIS modern untuk tim digital`
- H1: **Semua urusan HR, dalam satu dashboard.**
- Sub (≤ 2 kalimat): `Absensi GPS, payroll dengan PPh 21 & BPJS otomatis, ujian online, library SOP, dan perizinan — terhubung dan rapi. Tanpa spreadsheet, tanpa grup WhatsApp.`
- CTA: primer `Coba Gratis 14 Hari` · sekunder `Lihat Semua Modul` (ke `#modul`).
- Catatan mikro: `Tanpa kartu kredit · Setup kurang dari 10 menit`
- **Hero Mockup All-in-One Bento** (spesifikasi `04` §0): kartu presensi aktif, total gaji terbayar, jadwal ujian.

## 3. Trust Strip
Baris 4 angka (counter, font mono) + deretan 5–6 nama perusahaan **fiktif** (teks wordmark abu, bukan logo asli):
- `500+` tim terbantu · `98%` kehadiran tercatat akurat · `1 klik` hitung payroll · `< 10 mnt` setup awal
- Komentar kode wajib: `{/* ilustratif: ganti dengan data & klien asli */}`

## 4. Masalah → Solusi
- H2: **HR manual itu mahal, diam-diam.**
- 3 kartu "sebelum → sesudah" (ikon Lucide + 1 kalimat):
  - `Absensi di spreadsheet` → `Absensi GPS real-time, rekap otomatis`
  - `Hitung gaji & pajak manual` → `Payroll, PPh 21, dan BPJS otomatis`
  - `Izin lewat chat berantai` → `Approval satu tombol, sisa cuti transparan`
- Penutup 1 kalimat + tautan `Lihat solusinya ↓` ke `#modul`.

## 5. Section Modul (id="modul")
- Eyebrow: `5 modul, 1 platform`
- H2: **Semua yang tim HR kamu butuhkan.**
- Sub: `Pakai satu modul saja, atau semuanya. Paling kuat saat terhubung.`
- Isi: bento grid 5 kartu, **masing-masing menampilkan seluruh sub-fitur wajib** (`00-global-rules.md` §2, spesifikasi `04`).
- CTA di bawah grid: `Coba Gratis 14 Hari`.

Layout desktop (12 kolom):
```
┌───────────────────────┬──────────────┐
│ ABSENSI (7 kol, 2 brs)│ GAJI (5 kol) │
│                       ├──────────────┤
│                       │ EXAM (5 kol) │
├──────────────┬────────┴──────────────┤
│ LIBRARY (5)  │ PERIZINAN (7)         │
└──────────────┴───────────────────────┘
```
Tablet: 2 kolom. Mobile: 1 kolom (Absensi → Gaji → Exam → Library → Perizinan).

## 6. Cara Kerja (id="cara-kerja")
- H2: **Mulai dalam 3 langkah.**
  1. `Tambah tim` — Impor karyawan dari CSV atau undang lewat email.
  2. `Atur aturan` — Tentukan lokasi kantor, shift, komponen gaji, dan alur approval.
  3. `Jalankan` — Karyawan absen lewat HP; HR tinggal memantau dan menyetujui.

## 7. Testimoni
3 kartu bento: kutipan 1–2 kalimat, nama, jabatan, perusahaan **fiktif** (contoh: `Rani Putri, Head of People, Kodein Studio`). Fokus hasil konkret (waktu hemat, kesalahan berkurang). Wajib ditandai ilustratif di kode dan laporan.

## 8. Paket & Harga (id="harga", ilustratif)
3 kartu: `Starter`, `Growth` (disorot, badge `Paling Populer`), `Scale`. Setiap kartu: harga per karyawan/bulan (**placeholder**, mis. `Rp 15.000`, `Rp 25.000`, `Hubungi kami`), daftar modul yang termasuk (ikon centang Lucide), CTA. Catatan: `Harga ilustratif — konfirmasi dengan pemilik.` Semua paket menyertakan masa percobaan 14 hari.

## 9. FAQ (id="faq")
Akordeon aksesibel (`button` + `aria-expanded`), 6 pertanyaan:
1. **Apakah cocok untuk tim remote atau hybrid?** Ya. Absensi bisa dibatasi geofence kantor, atau dibuka ke lokasi mana pun sesuai kebijakan.
2. **Apakah PPh 21 dan BPJS dihitung otomatis?** Ya. Komponen dihitung dari data gaji dan absensi, lalu hasilnya bisa dicek sebelum dibayarkan. Pastikan konfigurasi sesuai kebijakan perusahaan dan konsultasikan dengan konsultan pajak.
3. **Bagaimana proctoring ujian bekerja?** Peserta diawasi lewat pemantauan sesi (pindah tab, kamera/aktivitas mencurigakan ditandai) dan hasilnya masuk laporan.
4. **Apakah data karyawan aman?** Akses dibatasi per peran, dan perubahan penting tercatat di riwayat aktivitas.
5. **Bisakah impor data karyawan yang sudah ada?** Bisa lewat CSV; template tersedia saat setup.
6. **Apakah ada masa percobaan?** Ada, 14 hari gratis dengan semua modul aktif.

## 10. CTA Penutup
Kartu bento lebar dengan glow cyan.
- H2: **Siap merapikan HR tim kamu?**
- Sub: `Coba 14 hari gratis. Tanpa kartu kredit.`
- Tombol: `Coba Gratis 14 Hari` + `Jadwalkan Demo`

## 11. Footer
- Logo + tagline `HRIS modern untuk startup & tim digital.`
- Kolom: Produk (5 modul, anchor), Perusahaan (Tentang, Kontak), Legal (Privasi, Syarat).
- `© 2026 TalentaCloud. Seluruh hak dilindungi.`
- Tautan memakai anchor nyata atau `mailto:halo@talentacloud.id` (placeholder); **tanpa `href="#"` kosong**.

## Aturan Copywriting
- Judul ≤ 8 kata. Deskripsi kartu ≤ 20 kata. Mulai dengan manfaat/kata kerja.
- Data dummy: nama (Rani Putri, Bagas Pratama, Dewi Anggraini, Fajar Nugroho), kota (Jakarta, Bandung, Yogyakarta), `Rp`, `WIB`.
