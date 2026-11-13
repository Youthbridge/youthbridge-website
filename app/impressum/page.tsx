import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImpressumContent } from "@/components/impressum-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Impressum – YouthBridge & EJKA e.V.",
  description:
    "Impressum von YouthBridge und der Europäischen Janusz Korczak Akademie e.V. (EJKA) mit Kontakt- und Vereinsangaben.",
  path: "/impressum",
})

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Impressum", path: "/impressum" }]} />
      <Header />
      <main>
        <ImpressumContent />
      </main>
      <Footer />
    </div>
  )
}
