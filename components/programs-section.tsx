import { ExternalLink, Flag, GraduationCap, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    id: "muenchen",
    title: "YB Projekt",
    subtitle: "Leadership",
    points: [
      'Werde ein "Leader of Tomorrow"',
      "Interkulturelle Kompetenzen",
      "Bildungsreisen",
      "Kamingespräche mit gefragten Experten",
      "spannende Fortbildungsseminare",
    ],
    buttonText: "MACH MIT!",
    buttonIcon: ExternalLink,
  },
  {
    id: "bayern",
    title: "YB Verband",
    subtitle: "Demokratie&Teilhabe",
    points: [
      "demokratische Mitgestaltung",
      "Interessenvertretung junger Menschen gegenüber der Politik",
      "Seit 2024 in Nürnberg",
      "Bringe YouthBridge in deine Stadt!",
    ],
    buttonText: "ERFAHRE MEHR!",
    buttonIcon: Flag,
  },
  {
    id: "uni",
    title: "YB UNI",
    subtitle: "Bildungsangebote",
    points: [
      "Peer-to-peer Workshops",
      "Sensibilisierung für Desinformation & Radikalisierung",
      "Ideal für Inter- & Außerschulische Bildung",
      "Werde selbst zum Juniorreferenten!",
    ],
    buttonText: "BUCHE UNS!",
    buttonIcon: GraduationCap,
  },
]

export function ProgramsSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex flex-col items-center border border-[#d6eaf8] rounded-2xl px-8 pt-10 pb-8 shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:shadow-md bg-white"
            >
              {/* Logo */}
              <div className="w-44 h-44 relative mb-6 flex-shrink-0">
                {program.id === "muenchen" && (
                  <Image
                    src="/youthbridge-logo-muenchen.jpg"
                    alt="YouthBridge München Logo"
                    fill
                    className="object-contain"
                  />
                )}
                {program.id === "bayern" && (
                  <Image
                    src="/youthbridge-logo-bayern.png"
                    alt="YouthBridge Bayern Logo"
                    fill
                    className="object-contain"
                  />
                )}
                {program.id === "uni" && (
                  <Image
                    src="/youthbridge-logo-uni.png"
                    alt="YouthBridge UNI Logo"
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a5276] text-center leading-tight">
                {program.title}
              </h3>
              <h4 className="text-lg font-bold text-[#1a5276] text-center mb-6 leading-tight">
                {program.subtitle}
              </h4>

              {/* Points – grows to fill space so buttons align */}
              <ul className="space-y-3 mb-8 w-full flex-1">
                {program.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-[#5dade2] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#1a5276] text-sm font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button – always at bottom */}
              <button className="w-full py-4 px-6 bg-[#85c1e9] hover:bg-[#5dade2] text-[#1a5276] font-bold rounded-full flex items-center justify-center gap-3 transition-colors text-sm tracking-wide mt-auto">
                <program.buttonIcon size={18} />
                {program.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
