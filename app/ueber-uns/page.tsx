import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UeberUnsContent } from "@/components/ueber-uns-content"
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo-jsonld"
import { SITE_URL, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Über uns – YouthBridge: Projekt, UNI & Jugendverband",
  description:
    "YouthBridge vereint Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. in München, Nürnberg (YouthBridge Franken) und ganz Bayern.",
  path: "/ueber-uns",
  keywords: [
    "Über YouthBridge",
    "YouthBridge Projekt",
    "YouthBridge-UNI",
    "Jugendverband YouthBridge Bayern",
    "YouthBridge Franken",
    "Radikalisierungsprävention Bayern",
    "Europäische Janusz Korczak Akademie",
  ],
})

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Über uns", path: "/ueber-uns" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Über uns: YouthBridge",
          url: `${SITE_URL}/ueber-uns`,
          description:
            "Informationen über das Projekt YouthBridge, die YouthBridge-UNI, den Jugendverband YouthBridge Bayern und YouthBridge Franken.",
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <Header />
      <main>
        <UeberUnsContent />
      </main>
      <Footer />
    </div>
  )
}
