import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FrankenContent } from "@/components/franken-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "YouthBridge Franken – Standort Nürnberg & Region",
  description:
    "YouthBridge Franken seit 2024 in Nürnberg: Kamingespräche, Bildungsfahrten, Schnupperveranstaltungen und starkes Jugendnetzwerk für die Metropolregion Nürnberg und Franken.",
  path: "/franken",
  keywords: [
    "YouthBridge Franken",
    "YouthBridge Nürnberg",
    "Jugendprojekt Nürnberg",
    "Leadership Programm Franken",
    "Schnupperveranstaltung YouthBridge Nürnberg",
  ],
})

export default function FrankenPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "YB Franken", path: "/franken" }]} />
      <Header />
      <main>
        <FrankenContent />
      </main>
      <Footer />
    </div>
  )
}
