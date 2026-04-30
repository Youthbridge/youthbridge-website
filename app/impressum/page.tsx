import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImpressumContent } from "@/components/impressum-content"

export const metadata: Metadata = {
  title: "Impressum – YouthBridge München",
  description: "Impressum der YouthBridge München und der Europäischen Janusz Korczak Akademie.",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ImpressumContent />
      </main>
      <Footer />
    </div>
  )
}
