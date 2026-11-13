import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GeschichteContent } from "@/components/geschichte-content"
import { BreadcrumbJsonLd } from "@/components/seo-jsonld"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Unsere Geschichte – Von New York nach München & Bayern | YouthBridge",
  description:
    "Die Geschichte von YouthBridge: Vom Mutterprojekt YouthBridge NY von Bob Kaplan über den Start in München 2017 bis zur Expansion nach Nürnberg und dem Jugendverband Bayern.",
  path: "/ueber-uns/geschichte",
  keywords: [
    "YouthBridge Geschichte",
    "YouthBridge New York",
    "Bob Kaplan YouthBridge",
    "YouthBridge München 2017",
    "YouthBridge Entwicklung",
  ],
})

export default function GeschichtePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Über uns", path: "/ueber-uns" },
          { name: "Unsere Geschichte", path: "/ueber-uns/geschichte" },
        ]}
      />
      <Header />
      <main>
        <GeschichteContent />
      </main>
      <Footer />
    </div>
  )
}
