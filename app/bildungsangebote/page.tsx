import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BildungsangeboteContent } from "@/components/bildungsangebote-content"
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo-jsonld"
import { SITE_URL, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Bildungsangebote & Workshops – YouthBridge-UNI",
  description:
    "YouthBridge-UNI: Peer-to-Peer-Workshops, YouBienare und Schulformate zu Desinformation, Verschwörungsmythen, Zivilcourage, Antisemitismus- und Radikalisierungsprävention.",
  path: "/bildungsangebote",
  keywords: [
    "YouthBridge-UNI",
    "Peer-to-Peer Workshops Schule",
    "Workshops gegen Antisemitismus",
    "Fake or Fact Workshop",
    "Verschwörungsmythen Workshop",
    "Juniorreferenten YouthBridge",
    "Politische Bildung Bayern",
  ],
})

export default function BildungsangebotePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Bildungsangebote", path: "/bildungsangebote" }]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "YouthBridge-UNI",
          url: `${SITE_URL}/bildungsangebote`,
          description:
            "Peer-to-Peer-Bildungsinitiative von YouthBridge mit interaktiven Workshops für Schulen, Jugendgruppen und Vereine.",
          parentOrganization: { "@id": `${SITE_URL}/#organization` },
          email: "bildungsangebote@ejka.org",
        }}
      />
      <Header />
      <main>
        <BildungsangeboteContent />
      </main>
      <Footer />
    </div>
  )
}
