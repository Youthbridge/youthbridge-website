"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function TeamMemberRow({
  title,
  text,
  index,
  imageSrc,
  imageAlt,
}: {
  title: string
  text: string
  index: number
  imageSrc: string
  imageAlt?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isEven = index % 2 === 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-16 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Text Area */}
      <div className="flex-1 space-y-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-[#1a5276]"
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h2>
        <p className="text-[#2c3e50] leading-relaxed text-[15px] whitespace-pre-line">
          {text}
        </p>
      </div>
      {/* Image Area - no box, portrait ratio, larger */}
      <div className="w-full md:w-[350px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  )
}

export function TeamContent() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a5276] via-[#2471a3] to-[#5dade2] py-20 md:py-28">
        {/* decorative shapes */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5" />

        <div
          className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/80 border border-white/20 rounded-full">
            Über Uns
          </span>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Unser Team
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Die Gesichter hinter YouthBridge München – Brückenbauer für eine tolerante und demokratische Gesellschaft.
          </p>
        </div>
      </section>

      {/* ── Team Members List ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          <TeamMemberRow
            index={0}
            title="Olga – Projektleiterin YouthBridge München"
            text={`Heute habe ich den Eindruck, dass mein gesamtes schulisches, berufliches und familiäres Leben eine Vorbereitung auf YouthBridge war, ein Projekt, in dem sich die Leaders of Tomorrow entwickeln. Geboren 1968 in der Ukraine und seit 2005 in München, habe ich an Universitäten in Kharkiv, Poznan und Lüneburg studiert und als Philologin, Lehrerin, Journalistin und PR-Expertin gearbeitet sowie internationale Medienprojekte realisiert.

Seit 2017 leite ich YouthBridge, das 2021 mit dem Integrationspreis der Bayerischen Staatsregierung ausgezeichnet wurde, und 2022 wurde auch mein Engagement mit dem Bayerischen Verdienstorden gewürdigt. YouthBridge bildet junge Menschen unterschiedlichster Herkunft zu Brückenbauern zwischen Kulturen aus, für eine tolerante, friedliche und demokratische Gesellschaft.`}
            imageSrc="/team-olga.jpg"
            imageAlt="Olga, Projektleiterin YouthBridge München"
          />
        </div>
      </section>

      {/* ── Closing CTA banner ── */}
      <section className="w-full bg-gradient-to-r from-[#1a5276] to-[#2980b9] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Möchten Sie mehr erfahren?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Entdecken Sie unsere Bildungsangebote und Workshops für Jugendliche und Erwachsene.
          </p>
          <Link
            href="/bildungsangebote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a5276] font-bold rounded-full hover:bg-[#d6eaf8] transition-colors shadow-lg text-sm tracking-wide"
          >
            Bildungsangebote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
