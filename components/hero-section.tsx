"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 0,
    src: "/hero-bg.jpg",
    alt: "YouthBridge Slide 1",
    title: "YouthBridge – Das Erfolgskonzept aus NYC in Bayern",
    subtitle: "Seit 2017 in München",
  },
  {
    id: 1,
    src: "/hero-rom.jpg",
    alt: "YouthBridge in Rom",
    title: "YouthBridge in Rom",
    subtitle: "Kulturaustausch und Vernetzung",
  },
  {
    id: 2,
    src: "/hero-pope.jpg",
    alt: "Youthbridge mit Papst",
    title: "Youbie et Orbi",
    subtitle: "Perspektiven erweitern und Brücken bauen",
  },
  {
    id: 3,
    src: "/hero-bg.jpg",
    alt: "YouthBridge Slide 4",
    title: "Slide 4 – Titel kommt noch",
    subtitle: "Untertitel kommt noch",
  },
]

const AUTO_ADVANCE_MS = 5000

export function HeroSection() {
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
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center text-white px-6">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-balance"
              style={{ fontFamily: "var(--font-oswald), sans-serif", letterSpacing: "0.01em" }}
            >
              {slide.title}
            </h1>
            <p
              className="mt-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "var(--font-oswald), sans-serif", letterSpacing: "0.02em" }}
            >
              {slide.subtitle}
            </p>
          </div>
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
          className="flex items-center justify-center w-7 h-7 rounded-full text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10"
        >
          <ChevronLeft size={18} strokeWidth={1.8} />
        </button>

        {/* Dot indicators */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              background: i === current ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Nächstes Bild"
          className="flex items-center justify-center w-7 h-7 rounded-full text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10"
        >
          <ChevronRight size={18} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  )
}
