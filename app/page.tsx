import { Header } from "@/components/header"
import { ProgramsSection } from "@/components/programs-section"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <GallerySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
