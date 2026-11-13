import type { Metadata } from "next"

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://youthbridge-website.vercel.app"
).replace(/\/$/, "")

export const SITE_NAME = "YouthBridge"
export const DEFAULT_OG_IMAGE = "/sharing-preview.jpg"

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/youthbridgemunich/",
  "https://www.instagram.com/youthbridge_/",
  "https://www.youtube.com/channel/UCN48PDJPgy4Q47pB8CsBwAg",
]

interface PageMetadataInput {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

/**
 * Builds consistent page-level SEO metadata (title, description, canonical, OpenGraph, Twitter).
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
