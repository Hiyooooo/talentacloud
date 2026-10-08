# 04 — Spesifikasi Bento: Hero Mockup + 5 Modul Wajib

Semua visual dibuat dari **JSX/CSS/SVG + ikon `lucide-react`** (tanpa gambar raster). Data dari `src/lib/data.ts`. Mockup bersifat **showcase interaktif** (state lokal React, tanpa network request), bukan aplikasi sungguhan. Beri `aria-label` deskriptif pada tiap wadah mockup.

**Aturan sub-fitur**: setiap kartu WAJIB menampilkan seluruh sub-fitur modulnya (dari `00-global-rules.md` §2) sebagai kombinasi visual + **chip fitur** (`Badge` dengan ikon Lucide kecil) di bagian bawah kartu. Tidak ada sub-fitur yang boleh hilang.

Struktur kartu: `ikon + eyebrow nama modul` → `H3 manfaat` → `deskripsi ≤ 20 kata` → `visual mini-UI interaktif` → `chip sub-fitur`.

---

## 0. HERO MOCKUP — "All-in-One Bento" (`HeroMockup.tsx`)
Jendela aplikasi (bar atas 3 titik abu + `app.talentacloud.id`), maks `rotateX(4deg)` (nonaktif di mobile), glow biru radial di belakang. Isi grid 12 kolom:

| Kartu mini | Kolom | Isi |
|---|---|---|
| **Presensi Aktif** | 5 | Avatar inisial "RP", `Rani Putri`, badge hijau `Hadir · 08:02 WIB`, titik live berdenyut, `Jam kerja 04:12:33` (mono, berjalan tiap detik). |
| **Total Gaji Terbayar** | 4 | `Gaji Oktober 2026`, angka besar `Rp 482.750.000` (counter naik dari 0), badge `+4,2% vs bulan lalu`, sparkline SVG 12 titik (cyan). |
| **Jadwal Ujian** | 3 | `Ujian Onboarding`, `Kamis, 8 Okt · 10:00 WIB`, avatar stack 4 + `+12`, tombol kecil `Lihat`. |

---

## 1. ABSENSI 📍 (`AbsensiCard.tsx`) — 7 kolom × 2 baris
- **Ikon**: `MapPin` · **H3**: `Absen akurat, di mana pun tim bekerja.`
- **Deskripsi**: `Clock-in/out dengan geofencing GPS, shift fleksibel, dan rekap kehadiran real-time.`
- **Sub-fitur wajib → wujud visual**:
  1. **Clock-in/out**: tombol besar `Clock In` ↔ `Clock Out` dengan jam berjalan (mono, WIB) dan durasi kerja.
  2. **GPS Geofencing**: peta mini SVG gelap abstrak (grid jalan), lingkaran geofence (stroke cyan putus-putus, fill `--cyan-soft`), 3 titik karyawan (2 di dalam hijau, 1 di luar berlabel `Di luar area`).
  3. **Shift kerja**: selektor chip `Pagi 08–16` · `Siang 12–20` · `Malam 20–04`; memilih shift mengubah jam target di tombol clock-in.
  4. **Rekap kehadiran real-time**: ringkasan `32 / 36 hadir` + progress bar, dan daftar live 4 baris: `Rani Putri · Hadir · 08:02`, `Bagas Pratama · Hadir · 08:15`, `Dewi Anggraini · Terlambat · 09:07`, `Fajar Nugroho · Di luar area`.
- **Interaksi**: klik `Clock In` → titik pengguna bergerak masuk geofence, status `Hadir`, toast `Check-in berhasil · 08:21 WIB`, rekap bertambah 1. Hover baris daftar menyorot titik di peta. `Clock Out` menampilkan durasi total.
- **Chip**: `Clock-in/out` · `GPS Geofencing` · `Shift kerja` · `Rekap real-time`.

## 2. GAJI (PAYROLL) 💰 (`GajiCard.tsx`) — 5 kolom × 1 baris
- **Ikon**: `Wallet` · **H3**: `Payroll selesai dalam satu klik.`
- **Deskripsi**: `Gaji, PPh 21, BPJS, dan reimbursement dihitung otomatis. Slip gaji terkirim digital.`
- **Sub-fitur wajib → wujud visual**:
  1. **Kalkulasi otomatis**: tombol `Hitung Gaji` → spinner 600ms → angka total berhitung naik.
  2. **PPh 21**: baris rincian `PPh 21  -Rp 412.000`.
  3. **BPJS**: baris `BPJS Kesehatan  -Rp 85.000` dan `BPJS Ketenagakerjaan  -Rp 170.000`.
  4. **Reimbursement**: baris `Reimbursement transport  +Rp 250.000`.
  5. **Slip gaji digital**: setelah hitung, tombol `Lihat Slip Gaji` membuka panel slip ringkas (nama, periode, total bersih, ikon `FileText`) dengan tombol `Unduh PDF` (dekoratif, tanpa unduhan nyata).
- Contoh angka konsisten: Gaji pokok `Rp 8.500.000` + Lembur `Rp 650.000` + Reimburse `Rp 250.000` − PPh 21 `Rp 412.000` − BPJS `Rp 255.000` = **`Rp 8.733.000`** (bersih). Agent wajib memverifikasi aritmetika di kode.
- **Chip**: `Hitung otomatis` · `PPh 21` · `BPJS` · `Slip digital` · `Reimbursement`.
- Reduced-motion: tampilkan hasil langsung.

## 3. EXAM 📝 (`ExamCard.tsx`) — 5 kolom × 1 baris
- **Ikon**: `ClipboardCheck` · **H3**: `Ujian online, nilai keluar seketika.`
- **Deskripsi**: `Rekrutmen, evaluasi kinerja, dan uji kompetensi dengan proctoring dan skor otomatis.`
- **Sub-fitur wajib → wujud visual**:
  1. **Tab jenis ujian**: `Rekrutmen` · `Kinerja` · `Kompetensi` (mengganti judul dan soal contoh).
  2. **Timer & soal**: header `Soal 3/10`, timer mono hitung mundur dari `09:42` (jadi `--warning` di bawah 01:00), soal pilihan ganda 3 opsi; jawab → benar/salah ditandai (warna + ikon), lalu ring skor `80/100`.
  3. **Proctoring**: indikator `Proctoring aktif` (ikon `ShieldCheck`/`Eye`) dengan log mini: `Tab tetap fokus ✓` dan simulasi `Pindah tab terdeteksi` (tombol demo `Simulasi pelanggaran` → badge peringatan kuning + penghitung pelanggaran bertambah).
- Contoh soal (Kompetensi): `Apa langkah pertama saat menemukan data absensi yang janggal?` — (a) Hapus datanya (b) **Laporkan ke atasan/HR** (c) Abaikan.
- **Chip**: `Assessment rekrutmen` · `Evaluasi kinerja` · `Uji kompetensi` · `Proctoring`.

## 4. LIBRARY 📚 (`LibraryCard.tsx`) — 5 kolom × 1 baris
- **Ikon**: `BookOpen` · **H3**: `Pengetahuan tim, selalu dalam jangkauan.`
- **Deskripsi**: `SOP, arsip dokumen, dan modul e-learning dalam satu pencarian instan.`
- **Sub-fitur wajib → wujud visual**:
  1. **Knowledge base SOP**: command-palette mini (input + kbd `⌘ K`), pencarian memfilter real-time.
  2. **Arsip dokumen perusahaan**: filter tab `Semua` · `SOP` · `Arsip` · `E-learning`; ikon per tipe (`FileText`, `Archive`, `GraduationCap`).
  3. **E-learning**: item bertipe e-learning memiliki progress bar (mis. `Onboarding Karyawan Baru · 60%`).
- **Data (7 item)**: `SOP Pengajuan Cuti` (SOP), `SOP Keamanan Data` (SOP), `Panduan Reimbursement` (SOP), `Kebijakan Kerja Hybrid` (Arsip), `Kontrak Kerja Template 2026` (Arsip), `Onboarding Karyawan Baru` (E-learning), `Dasar Keselamatan Kerja` (E-learning).
- **Interaksi**: ketik memfilter (case-insensitive, sorot teks cocok dengan `--cyan`); ↑↓ memindah sorotan; state kosong `Tidak ada dokumen yang cocok`. Placeholder `Cari "cuti"…` (auto-ketik sekali saat masuk viewport, kecuali reduced-motion).
- **Chip**: `SOP kantor` · `Arsip dokumen` · `E-learning`.

## 5. PERIZINAN 📑 (`PerizinanCard.tsx`) — 7 kolom × 1 baris
- **Ikon**: `CalendarCheck` · **H3**: `Setujui izin tanpa chat panjang.`
- **Deskripsi**: `Cuti, izin sakit, dan lembur dengan alur approval jelas dan sisa cuti yang transparan.`
- **Sub-fitur wajib → wujud visual**:
  1. **Workflow approval**: stepper `Diajukan → Atasan → HR`, langkah aktif cyan; tombol `Accept` (hijau) / `Reject` (outline merah).
  2. **Tiga jenis izin**: 3 permintaan contoh dengan label jenis:
     - `Dewi Anggraini · Cuti Tahunan · 13–15 Okt 2026`
     - `Fajar Nugroho · Izin Sakit · 7 Okt 2026 (surat dokter terlampir)`
     - `Bagas Pratama · Lembur · 9 Okt, 18:00–21:00 WIB (3 jam)`
  3. **Transparansi sisa cuti**: panel `Sisa Cuti` per karyawan (`Dewi: 8 dari 12 hari`) dengan progress bar; saat Cuti Tahunan disetujui, sisa cuti berkurang 3 hari secara animatif.
- **Interaksi**: Accept/Reject mengubah status (`Disetujui`/`Ditolak`), stepper maju, kartu berikutnya naik. Setelah semua: `Semua permintaan sudah ditinjau ✓` + `Reset Demo`.
- **Chip**: `Approval cuti` · `Izin sakit` · `Lembur` · `Sisa cuti transparan`.

---

## Aturan Lintas Modul
- State lokal dengan React hooks; **tanpa network request**.
- Tombol memakai `<button>` asli, target sentuh ≥ 44px; status dinamis di `aria-live="polite"`.
- Timer/counter hanya jalan saat kartu terlihat (IntersectionObserver) dan berhenti saat tab tersembunyi (`visibilitychange`).
- Maks **satu** animasi looping per kartu.
- Hover: border ke `--border-2` + spotlight kursor; focus-visible: ring cyan 2px.
- Warna/radius/spacing dari token `02-design-system.md`; ikon hanya dari `lucide-react`.
- Verifikasi akhir: untuk tiap modul, centang bahwa semua sub-fitur di tabel `00-global-rules.md` §2 terlihat di layar.
