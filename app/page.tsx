import { Header } from "@/components/header"
import { ProgramsSection } from "@/components/programs-section"
import { HeroSection } from "@/components/hero-section"
import { AwardsSection } from "@/components/awards-section"
import { GallerySection } from "@/components/gallery-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "YouthBridge – Das Erfolgskonzept aus NYC in Bayern",
  description:
    "YouthBridge verbindet junge Menschen in München, Nürnberg und ganz Bayern: Zweijähriges Leadership-Programm, Peer-to-Peer-Workshops der YouthBridge-UNI und Jugendverband Bayern.",
  path: "/",
  keywords: [
    "YouthBridge",
    "YouthBridge München",
    "YouthBridge Bayern",
    "Leadership Programm München",
    "Jugendverband Bayern",
    "Antisemitismusprävention",
    "Demokratiebildung Jugendliche",
  ],
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AwardsSection />
        <ProgramsSection />
        <GallerySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
