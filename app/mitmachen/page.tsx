import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MitmachenContent } from "@/components/mitmachen-content"

export const metadata: Metadata = {
  title: "Mitmachen – YouthBridge München",
  description:
    "Werde Teil von YouthBridge München! Melde dich jetzt an und gestalte unsere Stadtgesellschaft aktiv mit.",
}

export default function MitmachenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MitmachenContent />
      </main>
      <Footer />
    </div>
  )
}
