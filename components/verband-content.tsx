"use client"

import { useEffect, useState } from "react"
import { Vote, HeartHandshake, ShieldAlert, Sparkles, Flag, Layers, MapPin } from "lucide-react"

export function VerbandContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const pillars = [
    {
      title: "Demokratiebildung & Partizipation",
      description: "Jugendarbeit lebt davon, dass Jugendliche selbst bestimmen. Bei uns lernen junge Menschen, ihre Stimme zu nutzen und demokratische Prozesse aktiv zu gestalten.",
      icon: Vote,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-[#1a3a8f]",
    },
    {
      title: "Offenheit & Inklusion",
      description: "Unsere Angebote stehen allen Jugendlichen und jungen Erwachsenen im Alter von 13 bis 27 Jahren offen. Wir leben ein wertschätzendes Miteinander, das auf Gleichberechtigung beruht.",
      icon: HeartHandshake,
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
    },
    {
      title: "Gegen Hass, Diskriminierung & Antisemitismus",
      description: "Wir treten entschieden gegen jede Form von Diskriminierung, Antisemitismus, Hass und extremistische Bestrebungen ein.",
      icon: ShieldAlert,
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
    },
    {
      title: "Ganzheitliche Persönlichkeitsentwicklung",
      description: "Durch außerschulische Bildung, kreative Projekte, Workshops und Freizeitangebote fördern wir die individuellen Stärken und Kompetenzen junger Menschen.",
      icon: Sparkles,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
  ]

  return (
    <div className="w-full bg-slate-50/40">
      {/* Hero Banner with Modern Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a8f] via-[#244cb3] to-[#2a52be] py-16 md:py-24">
        {/* Background Visual Blobs */}
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-2xl animate-pulse" />
        
        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
            <Flag size={13} className="animate-bounce" />
            <span>YouthBridge Bayern e.V.</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.02em",
              textShadow: "0 2px 10px rgba(0,0,0,0.15)"
            }}
          >
            YouthBridge Verband
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-medium">
            Gemeinsam Brücken bauen, Vorurteile abbauen und gesellschaftlichen Zusammenhalt aktiv mitgestalten.
          </p>
        </div>
      </section>

      {/* Main Concept Card Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div 
          className={`bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100/50 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="border-l-4 border-[#1a3a8f] pl-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3a8f] leading-none" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Unser Konzept: Brücken bauen, Vielfalt leben!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2c3e50] text-lg leading-relaxed mt-8">
            <div className="space-y-4">
              <p className="font-semibold text-xl text-[#1a3a8f] leading-snug">
                Willkommen bei YouthBridge Bayern – dem Jugendverband für Begegnung, Dialog und gesellschaftlichen Zusammenhalt!
              </p>
              <p>
                Wir sind eine eigenständig organisierte Jugendorganisation unter dem Dach der Europäischen Janusz Korczak Akademie e. V. (EJKA). Unser Ziel ist es, junge Menschen aus den unterschiedlichsten kulturellen, sozialen und religiösen Gemeinschaften zusammenzubringen.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center space-y-4">
              <p>
                Wir glauben fest daran, dass wir Vorurteile abbauen und Vertrauen stärken können, wenn wir Räume für echte Begegnungen auf Augenhöhe schaffen.
              </p>
              <p className="font-bold text-[#1a5276] border-t border-slate-200/60 pt-3 flex items-center gap-2">
                <Sparkles size={18} className="text-[#5dade2]" />
                <span>Bei uns gestalten Jugendliche ihre Zukunft aktiv mit!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section (Dafür stehen wir) */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a8f] mb-3" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Dafür stehen wir: Werte & Grundlagen
          </h2>
          <p className="text-[#2c3e50] text-lg max-w-2xl mx-auto">
            Unsere Arbeit basiert auf den Grundwerten <strong>Respekt, Vielfalt, Dialog und Teilhabe</strong>. Wir bekennen uns voll und ganz zu den demokratischen Prinzipien des Grundgesetzes und sind konfessionell sowie parteipolitisch unabhängig.
          </p>
          <div className="w-16 h-1 bg-[#1a3a8f] mx-auto mt-6 rounded-full" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`flex flex-col bg-white border border-gray-100 hover:border-gray-250 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl ${pillar.bgColor} ${pillar.textColor} flex-shrink-0 shadow-sm`}>
                  <pillar.icon size={26} />
                </div>
                <h3 className="font-extrabold text-xl text-[#1a3a8f] leading-snug">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[#2c3e50] text-base leading-relaxed flex-grow">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Section (Wie wir arbeiten) */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Wie wir arbeiten: Von der Landesebene bis vor deine Haustür
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto text-lg mb-10">
              YouthBridge Bayern verbindet eine starke Gemeinschaft im gesamten Bundesland mit flexiblen Gruppen vor Ort.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Landesebene */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a3a8f]/60 text-cyan-200 text-xs font-bold uppercase rounded-full tracking-wider">
                    <Layers size={13} />
                    <span>Landesebene</span>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    Überregionale Koordinierung
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    Unser Landesverband koordiniert die überregionalen Aktivitäten und vertritt die Werte des Verbands nach außen. Das höchste beschlussfassende Organ ist die <strong>Landesjugendversammlung</strong>.
                  </p>
                </div>
              </div>

              {/* Lokale Gruppen */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5dade2]/30 text-[#85c1e9] text-xs font-bold uppercase rounded-full tracking-wider">
                    <MapPin size={13} />
                    <span>Lokale Ebene</span>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    Direkt vor Ort
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    Vor Ort in den einzelnen bayerischen Städten (z.B. München und Nürnberg) engagieren sich unsere Jugendlichen in flexiblen Gruppen, um konkrete Projekte umzusetzen und Brücken in ihrer Nachbarschaft zu bauen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
