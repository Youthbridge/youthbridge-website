import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BildungsangeboteContent } from "@/components/bildungsangebote-content"

export const metadata: Metadata = {
  title: "Bildungsangebote – YouthBridge München",
  description:
    "YouthBridge-UNI: Workshops, Seminare und YouBienare zu Radikalisierungsprävention, Antisemitismus und Diskriminierung.",
}

export default function BildungsangebotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BildungsangeboteContent />
      </main>
      <Footer />
    </div>
  )
}
