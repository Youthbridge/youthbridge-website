"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { 
  MapPin, 
  Users, 
  Globe, 
  Award, 
  Mail, 
  Sparkles, 
  Building2, 
  Calendar, 
  CheckCircle2,
  Landmark,
  FileDown
} from "lucide-react"

export function FrankenContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const opportunities = [
    {
      title: "Begegnungen mit Persönlichkeiten",
      description: "Treffen und Begegnungen mit einflussreichen Persönlichkeiten aus Politik, Wirtschaft und anderen wichtigen Bereichen für unsere Region.",
      icon: Landmark,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-[#1a3a8f]",
      badge: "Politik & Wirtschaft"
    },
    {
      title: "Spannende Bildungsfahrten",
      description: "Spannende Bildungsfahrten, bei denen du Bayern, Europa und die Welt kennenlernst.",
      icon: Globe,
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      badge: "Bayern & Europa"
    },
    {
      title: "Aussagekräftiges Zertifikat",
      description: "Ein aussagekräftiges Zertifikat für YouthBridge-Absolvent:innen und vieles mehr.",
      icon: Award,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      badge: "Qualifikation"
    },
  ]

  const galleryItems = [
    {
      src: "/franken-meeting.png",
      title: "Kamingespräche & Austausch",
      desc: "Dialog auf Augenhöhe mit Entscheidungsträgern aus Politik und Gesellschaft.",
      tag: "Politik & Begegnung"
    },
    {
      src: "/franken-group.png",
      title: "Unvergessliche Bildungsfahrten",
      desc: "Junge Menschen erkunden bayerische & europäische Institutionen.",
      tag: "Gemeinschaft & Reisen"
    },
    {
      src: "/franken-certificates.png",
      title: "Feierliche Zertifikatsübergabe",
      desc: "Auszeichnung für das Engagement unserer Absolventinnen und Absolventen.",
      tag: "Abschluss & Anerkennung"
    },
    {
      src: "/franken-pope.png",
      title: "Youbie et Orbi",
      desc: "YouthBridge Delegation im Austausch in Rom.",
      tag: "Internationaler Austausch"
    },
  ]

  return (
    <div className="w-full bg-slate-50/50">
      {/* ── 1. Hero Section with Gradient & Recreated Logo ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a8f] via-[#1a5276] to-[#2980b9] py-16 md:py-24">
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-2xl" />

        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Header Text */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/15 text-cyan-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                <MapPin size={14} className="text-cyan-300 animate-bounce" />
                <span>Nürnberg & Region Franken</span>
              </div>

              <h1
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                }}
              >
                YouthBridge Franken
              </h1>

              <p className="text-white/90 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                Der regionale Zugang für junge Menschen in Franken & Nürnberg. Gemeinsam Brücken bauen, Netzwerke knüpfen und Demokratie gestalten.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#schnuppern"
                  className="px-6 py-3 bg-white text-[#1a3a8f] hover:bg-cyan-50 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-sm flex items-center gap-2"
                >
                  <Sparkles size={16} className="text-[#1a3a8f]" />
                  Schnupper-Event anfragen
                </a>
                <a
                  href="mailto:igorbreger@ejka.org"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-200 text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  Kontakt aufnehmen
                </a>
              </div>
            </div>

            {/* Right Logo Banner Box */}
            <div className="flex-shrink-0 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-white/40 max-w-xs w-full flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-2">
                <Image
                  src="/youthbridge-logo-franken.png"
                  alt="YouthBridge Franken Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xs font-bold text-[#1a5276] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                Standort Nürnberg
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Overview & Map Section (Bayern Map + Nürnberg Marker) ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div
          className={`bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map Graphic Container */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[4/4.5] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 p-4">
                <Image
                  src="/bayern-map.png"
                  alt="YouthBridge in Bayern – München & Nürnberg"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-xs text-slate-500 font-semibold mt-3 text-center flex items-center gap-1">
                <MapPin size={13} className="text-[#1a3a8f]" />
                Standorte: Nürnberg & München
              </span>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#1a3a8f]/10 text-[#1a3a8f] flex items-center justify-center font-bold">
                  <Building2 size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5dade2]">
                    Seit 2017 in Bayern · Seit 2024 in Franken
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a8f]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    Ungehindert dabei – von Nürnberg aus
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-[#2c3e50] text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-[#1a3a8f] text-lg leading-snug">
                  YouthBridge begleitet seit 2017 Jugendliche aus ganz Bayern. Seit 2024 ist es möglich, am Programm in vollem Maße und ungehindert teilzunehmen – auch wenn man außerhalb von München wohnt.
                </p>
                <p>
                  Der Standort <strong>YouthBridge Franken</strong> ist der Zugang für alle jungen Menschen aus der Region, die Teil unserer etablierten Initiative werden möchten.
                </p>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                  <p className="text-sm md:text-base text-slate-700">
                    So schaffen wir ein viel umfangreicheres und zielgerichtetes Programm, indem wir die politischen und gesellschaftlichen Akteure sowie die Unternehmen erreichen, die für unsere Region und die <strong>Stadt der Menschenrechte</strong> prägend sind.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#1a3a8f] text-xs font-bold rounded-full">
                  <CheckCircle2 size={13} className="text-blue-600" />
                  Ganz Bayern vernetzt
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 text-[#1a5276] text-xs font-bold rounded-full">
                  <CheckCircle2 size={13} className="text-cyan-600" />
                  Stadt der Menschenrechte Nürnberg
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Opportunities (Zugang zu...) ── */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a3a8f]/10 text-[#1a3a8f] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            <Sparkles size={14} />
            <span>Was dich erwartet</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a8f]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Deine Vorteile & Möglichkeiten
          </h2>
          <p className="text-[#2c3e50] text-base md:text-lg max-w-2xl mx-auto mt-3">
            Unsere Teilnehmer, die aus verschiedenen kulturellen, ethnischen und religiösen Communities aus Nürnberg und darüber hinaus zu uns kommen, erhalten Zugang zu:
          </p>
          <div className="w-16 h-1 bg-[#1a3a8f] mx-auto mt-6 rounded-full" />
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, i) => {
            const IconComponent = opp.icon
            return (
              <div
                key={i}
                className={`flex flex-col bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${opp.bgColor} ${opp.textColor} shadow-sm`}>
                    <IconComponent size={28} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {opp.badge}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-[#1a3a8f] mb-3 leading-snug">
                  {opp.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                  {opp.description}
                </p>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#1a5276]">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Inklusive bei YouthBridge Franken</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 4. Photo Impressions Grid (Static compact cards without modal overlay) ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a8f]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Eindrücke & Erlebnisse
          </h2>
          <p className="text-[#2c3e50] text-base md:text-lg mt-2">
            Die unvergesslichen Erfahrungen sind nur einen Schritt entfernt!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#1a3a8f] text-sm leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Schnupperveranstaltung & Contact Call-to-Action ── */}
      <section id="schnuppern" className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-[#1a3a8f] via-[#1a5276] to-[#2980b9] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 text-cyan-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
              <Calendar size={14} />
              <span>Schnupperveranstaltung</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Interesse da, aber nicht zu 100% sicher?
            </h2>

            <p className="text-cyan-100 text-lg md:text-xl font-medium">
              Kein Problem! Melde dich unverbindlich für eine Schnupperveranstaltung bei uns an.
            </p>

            {/* Contact & Flyer Download Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-xl mx-auto text-left space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-300 flex-shrink-0 bg-slate-200 shadow-md">
                  <Image
                    src="/team-igor.jpg"
                    alt="Igor Breger – Leiter YouthBridge Franken"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Igor Breger</h4>
                  <p className="text-cyan-200 text-xs font-medium">Leiter YouthBridge Franken</p>
                  <p className="text-white/80 text-xs">EJKA e.V. Standort Nürnberg</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="mailto:igorbreger@ejka.org"
                  className="flex-1 px-5 py-3 bg-white text-[#1a3a8f] font-bold rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Mail size={16} />
                  <span>E-Mail senden</span>
                </a>
                <a
                  href="/YouthBridge-Flyer-Franken.pdf"
                  download="YouthBridge-Flyer-Franken.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-cyan-400 text-slate-950 font-bold rounded-xl hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <FileDown size={18} />
                  <span>Flyer als PDF</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                WIR SEHEN UNS BEI YOUTHBRIDGE!
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
