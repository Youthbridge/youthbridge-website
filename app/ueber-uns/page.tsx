import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UeberUnsContent } from "@/components/ueber-uns-content"

export const metadata: Metadata = {
  title: "Über uns – YouthBridge",
  description:
    "Erfahren Sie mehr über YouthBridge, unsere Projekte, den YouthBridge-UNI Bildungscampus, den Jugendverband Bayern und den Standort Franken.",
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <UeberUnsContent />
      </main>
      <Footer />
    </div>
  )
}
