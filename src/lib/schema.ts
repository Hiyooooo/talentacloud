import { site } from "./site";
import { faqList } from "./data";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/favicon.svg`,
        email: site.email,
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "id-ID",
        publisher: {
          "@id": `${site.url}/#organization`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#software`,
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: site.description,
        author: {
          "@id": `${site.url}/#organization`,
        },
        featureList: [
          // Absensi
          "Absensi Clock-in/out",
          "GPS Geofencing Absensi",
          "Shift Kerja Fleksibel",
          "Rekap Kehadiran Real-time",
          // Gaji (Payroll)
          "Kalkulasi Gaji Otomatis",
          "Perhitungan Pajak PPh 21",
          "Perhitungan Iuran BPJS Kesehatan dan Ketenagakerjaan",
          "Slip Gaji Digital",
          "Pengelolaan Reimbursement",
          // Exam
          "Assessment Rekrutmen Online",
          "Evaluasi Kinerja Karyawan",
          "Uji Kompetensi Terstruktur",
          "Proctoring Pengawasan Ujian Online",
          // Library
          "Knowledge Base SOP Kantor",
          "Arsip Dokumen Perusahaan",
          "Modul E-learning Interaktif",
          // Perizinan
          "Workflow Approval Cuti Berjenjang",
          "Pengajuan Izin Sakit",
          "Pengajuan Lembur",
          "Transparansi Sisa Cuti Real-time",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqList.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
