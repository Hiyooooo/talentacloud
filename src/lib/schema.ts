import { site } from "./site";
import { faqList } from "./data";
import type { SiteConfig } from "./api";

export function generateJsonLd(config?: SiteConfig) {
  const siteName = config?.site?.name || site.name;
  const siteEmail = config?.contact.email || site.email;
  const siteDesc = config?.seo.meta_description || site.description;
  const siteLogo = config?.branding.logo_url || `${site.url}/logo.svg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: siteName,
        url: site.url,
        logo: siteLogo,
        email: siteEmail,
        description: siteDesc,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: siteName,
        description: siteDesc,
        inLanguage: "id-ID",
        publisher: {
          "@id": `${site.url}/#organization`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#software`,
        name: siteName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteDesc,
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
