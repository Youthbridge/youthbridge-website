"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"

const slides = [
  {
    id: 0,
    src: "/Bildungsangebote-slideshow-1.jpeg",
    alt: "Bildungsangebote Bild 1",
  },
  {
    id: 1,
    src: "/Bildungsangebote-slideshow-2.jpeg",
    alt: "Bildungsangebote Bild 2",
  },
  {
    id: 2,
    src: "/Bildungsangebote-slideshow-3.jpeg",
    alt: "Bildungsangebote Bild 3",
  },
  {
    id: 3,
    src: "/Bildungsangebote-slideshow-4.jpeg",
    alt: "Bildungsangebote Bild 4",
  },
  {
    id: 4,
    src: "/Bildungsangebote-slideshow-5.jpeg",
    alt: "Bildungsangebote Bild 5",
  },
]

const AUTO_ADVANCE_MS = 5000

export function BildungsangeboteHero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 700)
    },
    [animating]
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-[#e8f0f5]" style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center text-[#85c1e9]"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {slide.src ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <ImageIcon size={64} strokeWidth={1} />
              <span className="text-sm font-medium text-[#5d6d7e]">
                Bild-Platzhalter {i + 1} – wird später ersetzt
              </span>
            </div>
          )}

          {/* Overlay to ensure arrows and dots are visible over images */}
          {slide.src && (
             <div className="absolute inset-0 bg-black/10" />
          )}
        </div>
      ))}

      {/* Bottom navigation bar: arrow · dots · arrow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3"
        style={{ zIndex: 10 }}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Vorheriges Bild"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-black hover:bg-white/50 transition-colors duration-200"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/30 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300 shadow-sm"
              style={{
                width: i === current ? "22px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === current ? "#1a5276" : "rgba(26, 82, 118, 0.4)",
              }}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Nächstes Bild"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-black hover:bg-white/50 transition-colors duration-200"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>
    </section>
  )
}
