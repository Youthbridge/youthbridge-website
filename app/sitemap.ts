import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.9 },
  { path: "/bildungsangebote", changeFrequency: "monthly", priority: 0.9 },
  { path: "/mitmachen", changeFrequency: "monthly", priority: 0.9 },
  { path: "/verband", changeFrequency: "monthly", priority: 0.85 },
  { path: "/franken", changeFrequency: "monthly", priority: 0.85 },
  { path: "/ueber-uns/team", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ueber-uns/geschichte", changeFrequency: "yearly", priority: 0.75 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
