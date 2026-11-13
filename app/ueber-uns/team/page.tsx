import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamContent } from "@/components/team-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Unser Team – YouthBridge München & Bayern",
  description:
    "Lernen Sie das Team hinter YouthBridge kennen: Projektleitung, pädagogische Leitung, Standortleitung Franken sowie Referentinnen und Referenten in München und Nürnberg.",
  path: "/ueber-uns/team",
  keywords: [
    "YouthBridge Team",
    "YouthBridge München Team",
    "YouthBridge Franken Leitung",
    "EJKA Team",
  ],
})

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Über uns", path: "/ueber-uns" },
          { name: "Unser Team", path: "/ueber-uns/team" },
        ]}
      />
      <Header />
      <main>
        <TeamContent />
      </main>
      <Footer />
    </div>
  )
}
