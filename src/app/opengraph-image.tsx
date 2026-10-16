import { ImageResponse } from "next/og";
import { getSiteConfig } from "@/lib/api";

export const alt =
  "TalentaCloud - Platform HRIS Modern untuk Startup & Tim Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const config = await getSiteConfig();

  // 1. Jika ada banner yang diunggah dari Admin Panel:
  // Ambil gambar dari URL banner tersebut dan langsung sajikan file gambarnya sebagai respons.
  if (config.seo.og_image_url && config.seo.og_image_url.trim() !== "") {
    try {
      const response = await fetch(config.seo.og_image_url);
      if (response.ok) {
        const imageContentType =
          response.headers.get("content-type") || "image/png";
        const buffer = await response.arrayBuffer();
        return new Response(buffer, {
          headers: {
            "Content-Type": imageContentType,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
    } catch (error) {
      console.warn(
        `[OG Image] Gagal mengambil gambar dari ${config.seo.og_image_url}. Beralih ke kartu visual bawaan.`,
        error
      );
    }
  }

  // 2. Jika belum ada banner yang diunggah (mode bawaan):
  // Gunakan desain kartu visual bawaan yang sudah ada, dengan teks judul dan deskripsi dinamis dari API.
  const title =
    config.hero.headline ||
    config.seo.meta_title ||
    "Semua Urusan HR, dalam Satu Dashboard.";
  const description =
    config.hero.subheadline ||
    config.seo.meta_description ||
    "Absensi GPS, payroll otomatis, ujian online, library SOP, dan perizinan dalam arsitektur bento modern.";
  const siteName = config.site.name || "TalentaCloud";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#070A12",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Header / Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Logo Cloud Icon */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#0F1629",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#22D3EE",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#F1F5F9",
                letterSpacing: "-0.02em",
              }}
            >
              {siteName}
            </div>
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "#22D3EE",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            HRIS Modern All-in-One
          </div>
        </div>

        {/* Headline & Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.15,
              marginBottom: "14px",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#A8B3C7",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            {description}
          </div>
        </div>

        {/* 3 Mini Bento Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "auto",
          }}
        >
          {/* Card 1: Presensi */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(15, 22, 41, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#6B7791",
                marginBottom: "8px",
              }}
            >
              Presensi Aktif
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: 700, color: "#F1F5F9" }}
            >
              Rani Putri
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(52, 211, 153, 0.15)",
                  color: "#34D399",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Hadir · 08:02 WIB
              </div>
            </div>
          </div>

          {/* Card 2: Payroll */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(15, 22, 41, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#6B7791",
                marginBottom: "8px",
              }}
            >
              Total Gaji Terbayar
            </div>
            <div
              style={{ fontSize: "22px", fontWeight: 800, color: "#22D3EE" }}
            >
              Rp 482.750.000
            </div>
            <div
              style={{ fontSize: "13px", color: "#34D399", marginTop: "6px" }}
            >
              +4,2% vs bulan lalu
            </div>
          </div>

          {/* Card 3: Exam */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(15, 22, 41, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#6B7791",
                marginBottom: "8px",
              }}
            >
              Jadwal Ujian Online
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: 700, color: "#F1F5F9" }}
            >
              Ujian Onboarding
            </div>
            <div
              style={{ fontSize: "13px", color: "#A8B3C7", marginTop: "6px" }}
            >
              Kamis, 8 Okt · 10:00 WIB
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
