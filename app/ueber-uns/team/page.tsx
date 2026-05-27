import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamContent } from "@/components/team-content"

export const metadata: Metadata = {
  title: "Unser Team – YouthBridge München",
  description:
    "Lernen Sie das Team hinter YouthBridge München kennen – Projektleitung, Referenten und Unterstützer.",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeamContent />
      </main>
      <Footer />
    </div>
  )
}
