import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MitmachenContent } from "@/components/mitmachen-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Mitmachen & Bewerben – YouthBridge München & Nürnberg",
  description:
    "Werde Teil von YouthBridge! Jetzt für das zweijährige Leadership-Programm in München oder Nürnberg bewerben, Seminare erleben und Gesellschaft aktiv mitgestalten.",
  path: "/mitmachen",
  keywords: [
    "YouthBridge mitmachen",
    "YouthBridge bewerben",
    "Jugendprojekt München mitmachen",
    "Leadership Programm Jugendliche Bayern",
    "Ehrenamt Jugendliche München Nürnberg",
  ],
})

export default function MitmachenPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Mitmachen", path: "/mitmachen" }]} />
      <Header />
      <main>
        <MitmachenContent />
      </main>
      <Footer />
    </div>
  )
}
