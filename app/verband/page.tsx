import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VerbandContent } from "@/components/verband-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "YouthBridge Verband – Jugendverband & Teilhabe in Bayern",
  description:
    "Der Jugendverband YouthBridge Bayern (Mitglied im Bayerischen Jugendring BJR): Demokratiebildung, Partizipation, Satzung und demokratische Strukturen für Jugendliche.",
  path: "/verband",
  keywords: [
    "YouthBridge Verband",
    "Jugendverband YouthBridge Bayern",
    "Bayerischer Jugendring BJR",
    "Demokratische Teilhabe Jugendliche Bayern",
    "YouthBridge Satzung",
  ],
})

export default function VerbandPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "YB Verband", path: "/verband" }]} />
      <Header />
      <main>
        <VerbandContent />
      </main>
      <Footer />
    </div>
  )
}
