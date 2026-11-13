import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DatenschutzContent } from "@/components/datenschutz-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Datenschutzerklärung – YouthBridge & EJKA e.V.",
  description:
    "Datenschutzerklärung von YouthBridge und der Europäischen Janusz Korczak Akademie e.V. (EJKA) zu Datenverarbeitung, Cookies und Ihren Rechten.",
  path: "/datenschutz",
})

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Datenschutz", path: "/datenschutz" }]}
      />
      <Header />
      <main>
        <DatenschutzContent />
      </main>
      <Footer />
    </div>
  )
}
