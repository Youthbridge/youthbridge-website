import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FrankenContent } from "@/components/franken-content"

export const metadata: Metadata = {
  title: "YouthBridge Franken – Standort Nürnberg & Region",
  description: "YouthBridge Franken ist der regionale Zugang für Jugendliche aus Nürnberg und ganz Franken. Entdecke Bildungsfahrten, Kamingespräche und unser Netzwerk.",
}

export default function FrankenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FrankenContent />
      </main>
      <Footer />
    </div>
  )
}
