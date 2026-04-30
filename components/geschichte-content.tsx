"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Globe,
  Building2,
  Users,
  Lightbulb,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react"

/* ─── timeline data ─── */
const milestones = [
  { year: "1997", label: "Gründung YouthBridge New York", icon: Lightbulb },
  { year: "2001", label: "Stärkung nach 9/11", icon: Heart },
  { year: "2017", label: "Start in München", icon: MapPin },
  { year: "2024", label: "Expansion nach Nürnberg", icon: Globe },
]

/* ─── section data (each "chapter" of the story) ─── */
const chapters: {
  id: string
  icon: typeof Globe
  heading: string
  body: string[]
}[] = [
  {
    id: "origin",
    icon: Lightbulb,
    heading: "Der Ursprung – New York, 1997",
    body: [
      "Das amerikanische Mutterprojekt YouthBridge NY entstand im Jahr 1997. Von Beginn an stellte es Vielfalt und Diversität in den Mittelpunkt seiner Arbeit, also jene gesellschaftliche Realität, auf die die USA oft stolz verweisen und die das Land in seiner Identität prägt. Gleichzeitig ging es YouthBridge nicht nur darum, die Chancen dieser Vielfalt sichtbar zu machen, sondern auch die Spannungen und Herausforderungen ernst zu nehmen, die sie für eine Gesellschaft mit sich bringen kann.",
      "Wie lebt man frei von Hass weiter? Wie gelingt es, trotz einer belasteten Vergangenheit, einen echten Dialog zwischen Menschen unterschiedlicher Kulturen, Religionen und ethnischer Gruppen zu ermöglichen? Auf dieses grundlegende gesellschaftliche Problem trifft in New York eine besondere städtische Realität. Der Big Apple ist geprägt von einer enormen Vielfalt an Communities, die sich historisch oft räumlich voneinander getrennt entwickelt haben. Dadurch entstanden Stadtviertel mit klaren Grenzen, in denen sich parallele Lebenswelten herausgebildet haben.",
    ],
  },
  {
    id: "challenge",
    icon: Building2,
    heading: "Die Herausforderung – Entfremdung überwinden",
    body: [
      "Diese Trennung führte nicht selten zu wachsender Entfremdung. Wenn Konflikte eskalierten, war häufig unklar, wer überhaupt als legitimer Gesprächspartner für eine Lösung in Frage kam. Offizielle Institutionen und Organisationen existieren zwar, doch zeigte sich in der Praxis oft, dass ihre Autorität in bestimmten Communities nur begrenzt wirksam war. Stattdessen entstanden informelle Machtstrukturen, in denen sogenannte Street Leader Einfluss ausübten. Deren Autorität beruhte weniger auf Ausbildung, Erfahrung oder Verantwortung, sondern vielmehr auf den Regeln der Straße.",
    ],
  },
  {
    id: "idea",
    icon: Users,
    heading: "Die Idee – Junge Leaders ausbilden",
    body: [
      "Vor diesem Hintergrund entschieden sich die New Yorker Bob Kaplan und Karen Lander dazu, ein Jugendprojekt ins Leben zu rufen, das genau hier ansetzt. Es sollte junge Menschen aus unterschiedlichen Communities zu echten Führungspersönlichkeiten ausbilden. Sie sollten nicht nur Wissen und Kompetenzen erwerben, sondern auch lernen, ihre Communities auf Grundlage von Dialog, Verantwortung und demokratischen Prinzipien mitzugestalten und gleichzeitig Brücken zu anderen Gruppen zu bauen, geprägt von gegenseitigem Respekt und Verständnis.",
      "Heute ist das Projekt seit über zwei Jahrzehnten erfolgreich aktiv. In dieser Zeit haben sich die Spannungen zwischen vielen Communities in New York spürbar verändert, und zahlreiche Alumni des Programms sind heute nicht nur in ihren jeweiligen Communities, sondern auch in Wirtschaft, Zivilgesellschaft und Politik des Big Apple in verantwortungsvollen Positionen tätig.",
    ],
  },
  {
    id: "munich",
    icon: MapPin,
    heading: "Der Weg nach München",
    body: [
      "Doch was hat das alles mit München zu tun?",
      "Seit dem 1. August 2017 arbeitet YouthBridge München in Kooperation mit der Europäischen Janusz Korczak Akademie. Auch die bayerische Landeshauptstadt erlebt seit Jahren einen tiefgreifenden demografischen und kulturellen Wandel. Damit man nicht erst auf Konflikte reagieren muss, sondern ihnen frühzeitig präventiv begegnen kann, setzt YouthBridge München genau hier an: mit einem Programm, das junge Menschen stärkt, verbindet und zu verantwortungsvollen Brückenbauerinnen und Brückenbauern unserer Stadtgesellschaft macht.",
    ],
  },
  {
    id: "future",
    icon: Globe,
    heading: "Wachstum & Zukunft",
    body: [
      "Auch im deutschsprachigen Raum hat diese Idee inzwischen Wurzeln geschlagen. Seit 2024 gibt es die Initiative nun auch in Nürnberg. Darüber hinaus hat sich YouthBridge in Bayern weiterentwickelt und ist mittlerweile auch als Jugendverband aktiv. Damit gehen eigene demokratische Strukturen sowie erweiterte Partizipationsmöglichkeiten für junge Menschen einher, die ihnen mehr Mitbestimmung, Verantwortung und Gestaltungsspielraum innerhalb der Organisation ermöglichen.",
      "Wir halten Sie auf dem Laufenden.",
    ],
  },
]

/* ─── reusable fade-in hook ─── */
function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

/* ─── Chapter Card ─── */
function ChapterCard({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number]
  index: number
}) {
  const { ref, visible } = useFadeIn<HTMLDivElement>()
  const Icon = chapter.icon
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* vertical accent line (desktop) */}
      <div className="hidden md:block absolute left-[27px] top-16 bottom-0 w-[2px] bg-gradient-to-b from-[#85c1e9] to-transparent" />

      {/* icon bubble */}
      <div
        className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          isEven
            ? "bg-gradient-to-br from-[#1a5276] to-[#2980b9]"
            : "bg-gradient-to-br from-[#2980b9] to-[#5dade2]"
        }`}
      >
        <Icon size={24} className="text-white" />
      </div>

      {/* card */}
      <div className="flex-1 bg-white border border-[#d6eaf8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3
          className="text-xl md:text-2xl font-bold text-[#1a5276] mb-4"
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {chapter.heading}
        </h3>
        <div className="space-y-4">
          {chapter.body.map((para, i) => (
            <p
              key={i}
              className="text-[#2c3e50] leading-relaxed text-[15px]"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export function GeschichteContent() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    // trigger hero animation on mount
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
            Unsere Geschichte
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Von New York nach München – wie aus einer Idee eine Bewegung wurde,
            die junge Menschen stärkt und Brücken baut.
          </p>
        </div>
      </section>

      {/* ── Horizontal Timeline (mini) ── */}
      <section className="w-full bg-[#f4f9fc] border-b border-[#d6eaf8]">
        <div className="max-w-5xl mx-auto px-6 py-10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[580px]">
            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={m.year} className="flex items-center">
                  {/* dot + label */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5276] to-[#5dade2] flex items-center justify-center shadow-md">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-[#1a5276]">
                      {m.year}
                    </span>
                    <span className="text-xs text-[#5d6d7e] text-center max-w-[120px]">
                      {m.label}
                    </span>
                  </div>

                  {/* connector arrow */}
                  {i < milestones.length - 1 && (
                    <div className="flex-1 mx-4 flex items-center">
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#85c1e9] to-[#d6eaf8]" />
                      <ArrowRight
                        size={16}
                        className="text-[#85c1e9] -ml-1"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Story Chapters ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {chapters.map((chapter, i) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={i} />
          ))}
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
            Werde Teil der Geschichte
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            YouthBridge wächst – und du kannst mitgestalten.
          </p>
          <Link
            href="/mitmachen"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a5276] font-bold rounded-full hover:bg-[#d6eaf8] transition-colors shadow-lg text-sm tracking-wide"
          >
            Mitmachen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
