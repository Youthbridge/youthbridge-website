import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VerbandContent } from "@/components/verband-content"

export const metadata: Metadata = {
  title: "YouthBridge Verband – Demokratie & Teilhabe in Bayern",
  description: "Erfahre mehr über den YouthBridge Verband, unsere demokratischen Werte, Säulen der Jugendarbeit und unsere Struktur in Bayern.",
}

export default function VerbandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VerbandContent />
      </main>
      <Footer />
    </div>
  )
}
