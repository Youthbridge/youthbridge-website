import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GeschichteContent } from "@/components/geschichte-content"

export const metadata: Metadata = {
  title: "Unsere Geschichte – YouthBridge München",
  description:
    "Die Geschichte von YouthBridge: Vom Erfolgskonzept in New York City seit 1997 bis nach München und Bayern.",
}

export default function GeschichtePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GeschichteContent />
      </main>
      <Footer />
    </div>
  )
}
