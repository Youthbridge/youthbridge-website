import { SITE_URL } from "@/lib/seo"

/**
 * Renders safe JSON-LD structured data for search engines.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

export interface BreadcrumbItem {
  name: string
  path: string
}

/**
 * Renders Schema.org BreadcrumbList structured data for subpages.
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const list = [
    { name: "Startseite", path: "/" },
    ...items,
  ].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
  }))

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: list,
      }}
    />
  )
}
