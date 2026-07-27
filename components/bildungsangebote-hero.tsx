"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 0,
    src: "/Bildungsangebote-slideshow-1.jpeg",
    alt: "Bildungsangebote Bild 1",
    objectPosition: "center 15%",
  },
  {
    id: 1,
    src: "/Bildungsangebote-slideshow-2.jpeg",
    alt: "Bildungsangebote Bild 2",
    objectPosition: "center 20%",
  },
  {
    id: 2,
    src: "/Bildungsangebote-slideshow-3.jpeg",
    alt: "Bildungsangebote Bild 3",
    objectPosition: "center 25%",
  },
  {
    id: 3,
    src: "/Bildungsangebote-slideshow-4.jpeg",
    alt: "Bildungsangebote Bild 4",
    objectPosition: "center 30%",
  },
  {
    id: 4,
    src: "/Bildungsangebote-slideshow-5.jpeg",
    alt: "Bildungsangebote Bild 5",
    objectPosition: "center 20%",
  },
]

const AUTO_ADVANCE_MS = 5000

export function BildungsangeboteHero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }


  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(() => {
        setAnimating(true)
        setCurrent((c) => (c + 1) % slides.length)
        setTimeout(() => setAnimating(false), 700)
      }, AUTO_ADVANCE_MS)
    }
  }, [paused])

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 700)
      resetTimer()
    },
    [animating, resetTimer]
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Auto-advance with proper cleanup
  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      next()
    } else if (isRightSwipe) {
      prev()
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1a5276] h-[520px] sm:h-[600px] md:h-[680px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {/* Main cover image filling the full container, aligned to top/faces */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Overlay to ensure arrows and dots are visible over images */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20 pointer-events-none" />
        </div>
      ))}

      {/* Bottom navigation bar: arrow · dots · arrow */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30"
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Vorheriges Bild"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md text-slate-900 transition-all duration-200 shadow-md cursor-pointer active:scale-95"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/40 backdrop-blur-md shadow-md">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300 shadow-sm cursor-pointer"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === current ? "#1a5276" : "rgba(26, 82, 118, 0.5)",
              }}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Nächstes Bild"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md text-slate-900 transition-all duration-200 shadow-md cursor-pointer active:scale-95"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  )
}
