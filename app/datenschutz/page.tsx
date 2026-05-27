import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DatenschutzContent } from "@/components/datenschutz-content"

export const metadata: Metadata = {
  title: "Datenschutzerklärung – YouthBridge München",
  description: "Datenschutzerklärung der YouthBridge München und der Europäischen Janusz Korczak Akademie.",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <DatenschutzContent />
      </main>
      <Footer />
    </div>
  )
}
