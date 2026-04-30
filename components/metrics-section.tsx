"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return <span ref={countRef} className="notranslate">{count}{suffix && <span className="notranslate">{suffix}</span>}</span>
}

export function MetricsSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {/* Metric 1 */}
          <div className="space-y-3">
            <div 
              className="text-5xl md:text-6xl font-black text-[#1a5276]" 
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              <AnimatedCounter end={2500} suffix="+" />
            </div>
            <p className="text-[#5d6d7e] text-xs md:text-sm font-bold tracking-widest uppercase">
              junge Menschen erreicht
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-3">
            <div 
              className="text-5xl md:text-6xl font-black text-[#1a5276]" 
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              <AnimatedCounter end={9} />
            </div>
            <p className="text-[#5d6d7e] text-xs md:text-sm font-bold tracking-widest uppercase">
              Jahre Erfahrung
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-3">
            <div 
              className="text-3xl md:text-4xl font-black text-[#1a5276] min-h-[3.5rem] flex items-center justify-center leading-tight" 
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              <span className="notranslate">Peer-to-Peer</span>
            </div>
            <p className="text-[#5d6d7e] text-xs md:text-sm font-bold tracking-widest uppercase">
              von Jugendlichen für Jugendliche
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
