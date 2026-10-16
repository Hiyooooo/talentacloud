import { cache } from "react";
import { site } from "./site";

export interface SiteConfig {
  site: {
    id: string;
    name: string;
    domain: string;
  };
  branding: {
    logo_url: string;
    favicon_url: string;
    primary_color: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta_text: string;
  };
  cta: {
    whatsapp_number: string;
    whatsapp_message_template: string;
    whatsapp_url: string;
  };
  contact: {
    email: string;
    phone: string;
    social_links: Array<{ platform?: string; name?: string; url: string }>;
  };
  footer_text: string;
  tracking: {
    ga_id: string | null;
    meta_pixel_id: string | null;
  };
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
    og_image_url: string;
  };
}

export const DEFAULT_CONFIG: SiteConfig = {
  site: {
    id: "01-talentacloud",
    name: site.name,
    domain: site.url,
  },
  branding: {
    logo_url: "",
    favicon_url: "/favicon.svg",
    primary_color: "#2563EB", // default electric blue TalentaCloud
  },
  hero: {
    headline: "Semua urusan HR, dalam satu dashboard.",
    subheadline:
      "Absensi GPS, payroll dengan PPh 21 dan BPJS otomatis, ujian online, library SOP, serta perizinan: terhubung dan rapi. Tanpa spreadsheet, tanpa grup WhatsApp.",
    cta_text: "Coba Gratis 14 Hari",
  },
  cta: {
    whatsapp_number: site.whatsappNumber,
    whatsapp_message_template:
      "Halo TalentaCloud, saya ingin konsultasi mengenai platform HRIS.",
    whatsapp_url: site.whatsapp,
  },
  contact: {
    email: site.email,
    phone: site.whatsappNumber,
    social_links: [
      { platform: "LinkedIn", name: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Instagram", name: "Instagram", url: "https://instagram.com" },
      { platform: "Twitter", name: "Twitter", url: "https://x.com" },
    ],
  },
  footer_text: "© 2026 TalentaCloud. Seluruh hak dilindungi.",
  tracking: {
    ga_id: null,
    meta_pixel_id: null,
  },
  seo: {
    meta_title: site.title,
    meta_description: site.description,
    keywords: [
      "HRIS",
      "Absensi GPS",
      "Payroll Otomatis",
      "PPh 21",
      "BPJS",
      "Ujian Online",
      "SOP Perusahaan",
    ],
    og_image_url: "",
  },
};

/**
 * Normalisasi URL aset gambar (og_image_url, logo_url, favicon_url)
 * 1. Jika alamat relatif (misalnya diawali dengan /storage/), otomatis gabungkan dengan host dasar API_URL.
 * 2. Jika alamat localhost:8000 padahal API_URL menggunakan domain lain/ngrok, otomatis ganti domainnya ke domain aktif API_URL.
 * 3. Tetap pertahankan aset lokal bawaan website (misal: /favicon.svg, /logo.svg).
 */
export function normalizeImageUrl(
  url?: string | null,
  apiUrl?: string
): string {
  if (!url || typeof url !== "string" || url.trim() === "") {
    return "";
  }

  const trimmed = url.trim();

  // Aset lokal Next.js di folder public (jangan diubah)
  if (
    trimmed === "/favicon.svg" ||
    trimmed === "/logo.svg" ||
    trimmed === "/opengraph-image"
  ) {
    return trimmed;
  }

  if (!apiUrl) {
    return trimmed;
  }

  try {
    const apiOrigin = new URL(apiUrl).origin;

    // Jika alamat relatif (misalnya diawali dengan /storage/ atau storage/)
    if (trimmed.startsWith("/")) {
      return `${apiOrigin}${trimmed}`;
    }
    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      return `${apiOrigin}/${trimmed}`;
    }

    // Jika backend mengirimkan alamat localhost:8000 / 127.0.0.1 padahal API_URL pakai domain/ngrok lain
    const parsedUrl = new URL(trimmed);
    const isLocalhostBackend =
      parsedUrl.hostname === "localhost" || parsedUrl.hostname === "127.0.0.1";
    const apiHostIsDifferent = new URL(apiUrl).hostname !== parsedUrl.hostname;

    if (isLocalhostBackend && apiHostIsDifferent) {
      return `${apiOrigin}${parsedUrl.pathname}${parsedUrl.search}`;
    }

    return trimmed;
  } catch {
    return trimmed;
  }
}

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  const apiUrl = process.env.API_URL;
  const siteId = process.env.SITE_ID || "01-talentacloud";
  const siteSecret = process.env.SITE_SECRET;

  if (!apiUrl || !siteSecret) {
    return DEFAULT_CONFIG;
  }

  try {
    const cleanUrl = apiUrl.replace(/\/+$/, "").replace(/\/api$/, "");
    const revalidateSeconds = Number(process.env.REVALIDATE_SECONDS) || 60;
    const response = await fetch(`${cleanUrl}/api/v1/site/config`, {
      method: "GET",
      headers: {
        "X-Site-Id": siteId,
        "X-Site-Secret": siteSecret,
        Accept: "application/json",
      },
      next: { revalidate: revalidateSeconds },
    });

    if (!response.ok) {
      return DEFAULT_CONFIG;
    }

    const data = await response.json();

    const socialLinks = Array.isArray(data.contact?.social_links)
      ? data.contact.social_links
      : typeof data.contact?.social_links === "object" &&
          data.contact?.social_links !== null
        ? Object.entries(data.contact.social_links).map(([platform, url]) => ({
            platform,
            url: String(url),
          }))
        : [];

    const logoUrlRaw = data.branding?.logo_url;
    const faviconUrlRaw = data.branding?.favicon_url;
    const ogImageUrlRaw = data.seo?.og_image_url;

    return {
      site: {
        id: data.site?.id || DEFAULT_CONFIG.site.id,
        name: data.site?.name || DEFAULT_CONFIG.site.name,
        domain: data.site?.domain || DEFAULT_CONFIG.site.domain,
      },
      branding: {
        logo_url:
          normalizeImageUrl(logoUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.branding.logo_url,
        favicon_url:
          normalizeImageUrl(faviconUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.branding.favicon_url,
        primary_color:
          data.branding?.primary_color || DEFAULT_CONFIG.branding.primary_color,
      },
      hero: {
        headline: data.hero?.headline || DEFAULT_CONFIG.hero.headline,
        subheadline: data.hero?.subheadline || DEFAULT_CONFIG.hero.subheadline,
        cta_text: data.hero?.cta_text || DEFAULT_CONFIG.hero.cta_text,
      },
      cta: {
        whatsapp_number:
          data.cta?.whatsapp_number || DEFAULT_CONFIG.cta.whatsapp_number,
        whatsapp_message_template:
          data.cta?.whatsapp_message_template ||
          DEFAULT_CONFIG.cta.whatsapp_message_template,
        whatsapp_url: data.cta?.whatsapp_url || DEFAULT_CONFIG.cta.whatsapp_url,
      },
      contact: {
        email: data.contact?.email || DEFAULT_CONFIG.contact.email,
        phone: data.contact?.phone || DEFAULT_CONFIG.contact.phone,
        social_links:
          socialLinks.length > 0
            ? socialLinks
            : DEFAULT_CONFIG.contact.social_links,
      },
      footer_text: data.footer_text || DEFAULT_CONFIG.footer_text,
      tracking: {
        ga_id: data.tracking?.ga_id ?? null,
        meta_pixel_id: data.tracking?.meta_pixel_id ?? null,
      },
      seo: {
        meta_title: data.seo?.meta_title || DEFAULT_CONFIG.seo.meta_title,
        meta_description:
          data.seo?.meta_description || DEFAULT_CONFIG.seo.meta_description,
        keywords: Array.isArray(data.seo?.keywords)
          ? data.seo.keywords
          : DEFAULT_CONFIG.seo.keywords,
        og_image_url:
          normalizeImageUrl(ogImageUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.seo.og_image_url,
      },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
});

// Backward compatibility aliases
export const defaultSiteConfig = DEFAULT_CONFIG;
export type SiteBranding = SiteConfig["branding"];
export type SiteHero = SiteConfig["hero"];
export type SiteCta = SiteConfig["cta"];
export type SiteContact = SiteConfig["contact"];
export type SiteSeo = SiteConfig["seo"];
export type SiteTracking = SiteConfig["tracking"];
