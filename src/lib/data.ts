// Data dummy realistis untuk showcase fitur TalentaCloud

export interface AttendanceRecord {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "hadir" | "terlambat" | "luar_area";
  time: string;
  coords: { x: number; y: number };
}

export interface ExamQuestion {
  id: string;
  type: "rekrutmen" | "kinerja" | "kompetensi";
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: "sop" | "arsip" | "elearning";
  categoryLabel: string;
  updatedAt: string;
  progress?: number;
}

export interface LeaveRequest {
  id: string;
  employeeName: string;
  role: string;
  type: "cuti" | "sakit" | "lembur";
  title: string;
  detail: string;
  durationDays?: number;
  remainingLeaveBefore: number;
  remainingLeaveTotal: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/* =========================================================================
   1. TRUST STRIP DATA
   ilustratif: ganti dengan data & klien asli
   ========================================================================= */
export const trustStats = [
  { value: "500+", label: "tim terbantu" },
  { value: "98%", label: "kehadiran tercatat akurat" },
  { value: "1 klik", label: "hitung payroll" },
  { value: "< 10 mnt", label: "setup awal" },
];

export const clientLogos = [
  "Kodein Studio",
  "Nusantara Fin",
  "Aethel Lab",
  "Logika Digital",
  "PixelArt ID",
  "Karsa Tech",
];

/* =========================================================================
   2. PROBLEM -> SOLUTION DATA
   ========================================================================= */
export const problemSolutions = [
  {
    before: "Absensi di spreadsheet",
    after: "Absensi GPS real-time, rekap otomatis",
    icon: "MapPin",
    detail:
      "Mencegah kecurangan absensi dan menghilangkan waktu input manual setiap akhir bulan.",
  },
  {
    before: "Hitung gaji & pajak manual",
    after: "Payroll, PPh 21, dan BPJS otomatis",
    icon: "Wallet",
    detail:
      "Kalkulasi otomatis komponen gaji sesuai regulasi pajak tanpa risiko salah hitung.",
  },
  {
    before: "Izin lewat chat berantai",
    after: "Approval satu tombol, sisa cuti transparan",
    icon: "CalendarCheck",
    detail:
      "Alur perizinan berjenjang yang tertib dan sisa saldo cuti yang selalu sinkron.",
  },
];

/* =========================================================================
   3. ABSENSI DATA
   ========================================================================= */
export const shiftOptions = [
  { id: "pagi", label: "Pagi", time: "08:00 – 16:00 WIB" },
  { id: "siang", label: "Siang", time: "12:00 – 20:00 WIB" },
  { id: "malam", label: "Malam", time: "20:00 – 04:00 WIB" },
];

export const initialAttendanceRecords: AttendanceRecord[] = [
  {
    id: "att-1",
    name: "Rani Putri",
    role: "Head of People",
    avatar: "RP",
    status: "hadir",
    time: "08:02 WIB",
    coords: { x: 42, y: 46 }, // di dalam geofence
  },
  {
    id: "att-2",
    name: "Bagas Pratama",
    role: "Software Engineer",
    avatar: "BP",
    status: "hadir",
    time: "08:15 WIB",
    coords: { x: 55, y: 52 }, // di dalam geofence
  },
  {
    id: "att-3",
    name: "Dewi Anggraini",
    role: "Product Designer",
    avatar: "DA",
    status: "terlambat",
    time: "09:07 WIB",
    coords: { x: 48, y: 40 }, // di dalam geofence
  },
  {
    id: "att-4",
    name: "Fajar Nugroho",
    role: "Frontend Dev",
    avatar: "FN",
    status: "luar_area",
    time: "Di luar area",
    coords: { x: 88, y: 22 }, // di luar geofence
  },
];

/* =========================================================================
   4. PAYROLL (GAJI) DATA
   Aritmetika:
   Gaji Pokok: 8.500.000
   Lembur: +650.000
   Reimbursement transport: +250.000
   PPh 21: -412.000
   BPJS Kesehatan: -85.000
   BPJS Ketenagakerjaan: -170.000 (Total BPJS: -255.000)
   Total Bersih: 8.500.000 + 650.000 + 250.000 - 412.000 - 255.000 = 8.733.000
   ========================================================================= */
export const payrollData = {
  employeeName: "Rani Putri",
  employeeId: "EMP-2026-081",
  department: "Human Resources",
  period: "Oktober 2026",
  baseSalary: 8500000,
  overtime: 650000,
  reimbursement: 250000,
  pph21: 412000,
  bpjsKesehatan: 85000,
  bpjsKetenagakerjaan: 170000,
  totalBpjs: 255000,
  netSalary: 8733000,
};

/* =========================================================================
   5. EXAM DATA
   ========================================================================= */
export const examData: Record<
  "rekrutmen" | "kinerja" | "kompetensi",
  ExamQuestion
> = {
  rekrutmen: {
    id: "ex-rec",
    type: "rekrutmen",
    title: "Assessment Rekrutmen: Product Manager",
    question:
      "Bagaimana cara memprioritaskan backlog saat terjadi konflik kebutuhan tim dan bisnis?",
    options: [
      "Mengutamakan fitur yang paling mudah dikerjakan developer",
      "Gunakan kerangka RICE atau Value vs Effort bersama stakeholders",
      "Pilih fitur yang paling disukai oleh tim internal",
    ],
    correctIndex: 1,
    explanation:
      "Kerangka kerja terukur seperti RICE menyelaraskan dampak bisnis dan kapasitas tim.",
  },
  kinerja: {
    id: "ex-kin",
    type: "kinerja",
    title: "Evaluasi Kinerja Q3: Kepemimpinan & Kolaborasi",
    question: "Indikator utama keberhasilan sprint delivery tim produk adalah?",
    options: [
      "Sprint goal tercapai dengan kualitas teruji tanpa technical debt kritis",
      "Jumlah jam kerja tim melebihi 50 jam seminggu",
      "Semua tiket dipindahkan ke done tanpa code review",
    ],
    correctIndex: 0,
    explanation:
      "Pencapaian sprint goal berkualitas mencerminkan disiplin kerja dan fokus nilai pengguna.",
  },
  kompetensi: {
    id: "ex-kom",
    type: "kompetensi",
    title: "Uji Kompetensi: Kepatuhan & Kebijakan HR",
    question: "Apa langkah pertama saat menemukan data absensi yang janggal?",
    options: [
      "Hapus datanya langsung dari sistem",
      "Laporkan ke atasan/HR untuk verifikasi log audit",
      "Abaikan selama karyawan tetap masuk kerja",
    ],
    correctIndex: 1,
    explanation:
      "Verifikasi log audit menjaga kepatuhan dan integritas catatan kehadiran perusahaan.",
  },
};

/* =========================================================================
   6. LIBRARY DATA (7 ITEMS)
   ========================================================================= */
export const libraryItems: LibraryItem[] = [
  {
    id: "lib-1",
    title: "SOP Pengajuan Cuti",
    category: "sop",
    categoryLabel: "SOP",
    updatedAt: "Diperbarui 3 hari lalu",
  },
  {
    id: "lib-2",
    title: "SOP Keamanan Data",
    category: "sop",
    categoryLabel: "SOP",
    updatedAt: "Diperbarui 1 minggu lalu",
  },
  {
    id: "lib-3",
    title: "Panduan Reimbursement",
    category: "sop",
    categoryLabel: "SOP",
    updatedAt: "Diperbarui 2 minggu lalu",
  },
  {
    id: "lib-4",
    title: "Kebijakan Kerja Hybrid",
    category: "arsip",
    categoryLabel: "Arsip",
    updatedAt: "Arsip Dokumen 2026",
  },
  {
    id: "lib-5",
    title: "Kontrak Kerja Template 2026",
    category: "arsip",
    categoryLabel: "Arsip",
    updatedAt: "Legal Doc v2.1",
  },
  {
    id: "lib-6",
    title: "Onboarding Karyawan Baru",
    category: "elearning",
    categoryLabel: "E-learning",
    updatedAt: "Modul 3 dari 5",
    progress: 60,
  },
  {
    id: "lib-7",
    title: "Dasar Keselamatan Kerja",
    category: "elearning",
    categoryLabel: "E-learning",
    updatedAt: "Selesai",
    progress: 100,
  },
];

/* =========================================================================
   7. PERIZINAN DATA
   ========================================================================= */
export const initialLeaveRequests: LeaveRequest[] = [
  {
    id: "leave-1",
    employeeName: "Dewi Anggraini",
    role: "Product Designer",
    type: "cuti",
    title: "Cuti Tahunan · 13–15 Okt 2026",
    detail: "Durasi 3 hari kerja untuk urusan keluarga.",
    durationDays: 3,
    remainingLeaveBefore: 8,
    remainingLeaveTotal: 12,
  },
  {
    id: "leave-2",
    employeeName: "Fajar Nugroho",
    role: "Frontend Dev",
    type: "sakit",
    title: "Izin Sakit · 7 Okt 2026",
    detail: "Surat dokter terlampir dalam lampiran digital.",
    remainingLeaveBefore: 12,
    remainingLeaveTotal: 12,
  },
  {
    id: "leave-3",
    employeeName: "Bagas Pratama",
    role: "Software Engineer",
    type: "lembur",
    title: "Lembur · 9 Okt, 18:00–21:00 WIB",
    detail: "Penyelesaian deployment sistem sprint release (3 jam).",
    remainingLeaveBefore: 10,
    remainingLeaveTotal: 12,
  },
];

/* =========================================================================
   8. HOW IT WORKS STEPS
   ========================================================================= */
export const howItWorksSteps = [
  {
    step: "01",
    title: "Tambah tim",
    description:
      "Impor karyawan dari CSV atau undang lewat email dalam hitungan detik.",
    subtext: "Template kolom standar siap pakai",
  },
  {
    step: "02",
    title: "Atur aturan",
    description:
      "Tentukan lokasi kantor geofence, jadwal shift, komponen gaji, dan alur approval.",
    subtext: "Penyesuaian kebijakan fleksibel",
  },
  {
    step: "03",
    title: "Jalankan",
    description:
      "Karyawan absen lewat HP; HR tinggal memantau rekap dan menyetujui dokumen.",
    subtext: "Otomasi berjalan secara real-time",
  },
];

/* =========================================================================
   9. TESTIMONIALS
   ilustratif: ganti dengan data & klien asli
   ========================================================================= */
export const testimonials = [
  {
    quote:
      "Rekap absensi dan payroll kini selesai dalam 15 menit. Tim kami tidak lagi berkutat dengan spreadsheet manual setiap akhir bulan.",
    name: "Rani Putri",
    role: "Head of People",
    company: "Kodein Studio",
    avatar: "RP",
  },
  {
    quote:
      "Transparansi izin cuti dan ujian kompetensi internal langsung terasa dampaknya sejak minggu pertama implementasi.",
    name: "Bagas Pratama",
    role: "Founder & CEO",
    company: "Aethel Lab",
    avatar: "BP",
  },
  {
    quote:
      "Perhitungan PPh 21 dan BPJS sangat akurat. Slip gaji digital langsung diterima staf tepat waktu tanpa komplain.",
    name: "Dewi Anggraini",
    role: "HR Operations Lead",
    company: "Nusantara Fin",
    avatar: "DA",
  },
];

/* =========================================================================
   10. PRICING PACKAGES
   ilustratif: konfirmasi dengan pemilik sebelum peluncuran resmi
   ========================================================================= */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Rp 15.000",
    period: "/ karyawan / bulan",
    description:
      "Ideal untuk startup awal dan tim kecil yang membutuhkan keteraturan operasional.",
    features: [
      "Absensi GPS Geofencing & Shift fleksibel",
      "Rekap kehadiran real-time",
      "Knowledge Base SOP kantor",
      "Aplikasi karyawan mobile-friendly",
      "Dukungan email responsif",
    ],
    ctaText: "Mulai Percobaan 14 Hari",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Paling Populer",
    isPopular: true,
    price: "Rp 25.000",
    period: "/ karyawan / bulan",
    description:
      "Solusi lengkap untuk tim berkembang yang ingin otomatisasi gaji dan izin terpusat.",
    features: [
      "Semua fitur di paket Starter",
      "Kalkulasi payroll & slip gaji digital",
      "Perhitungan PPh 21 & BPJS otomatis",
      "Workflow approval cuti, sakit, dan lembur",
      "Pengelolaan reimbursement transparan",
      "Dukungan prioritas via chat",
    ],
    ctaText: "Mulai Percobaan 14 Hari",
  },
  {
    id: "scale",
    name: "Scale",
    price: "Hubungi Kami",
    period: "Kebutuhan Khusus",
    description:
      "Dukungan penuh untuk perusahaan dengan kepatuhan tinggi dan penilaian komprehensif.",
    features: [
      "Semua fitur di paket Growth",
      "Modul Exam dengan proctoring online",
      "Arsip dokumen & modul e-learning kustom",
      "Dedicated account manager",
      "Integrasi custom API & Single Sign-On (SSO)",
      "SLA jaminan ketersediaan 99.9%",
    ],
    ctaText: "Jadwalkan Konsultasi",
  },
];

/* =========================================================================
   11. FAQ DATA (SINKRON DENGAN SCHEMA JSON-LD)
   ========================================================================= */
export const faqList: FaqItem[] = [
  {
    question: "Apakah cocok untuk tim remote atau hybrid?",
    answer:
      "Ya. Absensi bisa dibatasi geofence kantor, atau dibuka ke lokasi mana pun sesuai kebijakan perusahaan.",
  },
  {
    question: "Apakah PPh 21 dan BPJS dihitung otomatis?",
    answer:
      "Ya. Komponen dihitung dari data gaji dan absensi, lalu hasilnya bisa dicek sebelum dibayarkan. Pastikan konfigurasi sesuai kebijakan perusahaan dan konsultasikan dengan konsultan pajak.",
  },
  {
    question: "Bagaimana proctoring ujian bekerja?",
    answer:
      "Peserta diawasi lewat pemantauan sesi (pindah tab, kamera/aktivitas mencurigakan ditandai) dan hasilnya masuk laporan evaluasi.",
  },
  {
    question: "Apakah data karyawan aman?",
    answer:
      "Akses dibatasi per peran, dan perubahan penting tercatat di riwayat aktivitas secara transparan.",
  },
  {
    question: "Bisakah impor data karyawan yang sudah ada?",
    answer:
      "Bisa lewat file CSV. Template kolom standar telah disediakan saat proses setup awal.",
  },
  {
    question: "Apakah ada masa percobaan?",
    answer:
      "Ada, 14 hari gratis dengan seluruh 5 modul aktif tanpa kewajiban kartu kredit.",
  },
];
