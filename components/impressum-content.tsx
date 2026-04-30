"use client"

import { useEffect, useState } from "react"

export function ImpressumContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <>
      {/* Hero Banner - Reduced padding */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a8f] to-[#2a52be] py-12 md:py-16">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div
          className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Impressum
          </h1>
        </div>
      </section>

      {/* Content - Adjusted padding and max-width */}
      <section className="w-full py-10 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-[#2c3e50] leading-loose text-lg">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2">
              <p className="font-semibold text-xl">
                Europäische Janusz Korczak Akademie<br />
                Janusz Korczak Haus München
              </p>
              <p>
                Blumenstraße 29.<br />
                80331 München<br />
                Deutschland
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="space-y-3">
              <p className="font-bold text-[#1a3a8f] uppercase tracking-wider text-sm">Kontakt</p>
              <p>Telefon: +49 (0) 8937946640</p>
              <p>Telefax: +49 (0) 8938902450</p>
              <p>E-Mail: <a href="mailto:info@ejka.org" className="text-[#2a52be] hover:underline">info@ejka.org</a></p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-[#1a3a8f] uppercase tracking-wider text-sm">Vertreten durch</p>
              <p>1. Vorsitzende: Eva Haller</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Registereintrag
            </h2>
            <div className="space-y-2">
              <p>Eintragung im Vereinsregister.</p>
              <p>Registergericht: Amtsgericht München</p>
              <p>Registernummer: VR 202447</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Haftungshinweis
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Disclaimer
            </h2>
            <div className="space-y-6">
              <p>
                Der Inhalt dieser Homepage ist in Wort und Bild urheberrechtlich geschützt. 
                Nachdruck – auch auszugsweise – nur mit schriftlicher Genehmigung der EJKA e.V.
              </p>
              <p>
                Die Webseite enthält externe Links (Verlinkungen) zu anderen Webseiten, auf deren Inhalt die Europäische Janusz Korczak Akademie keinen Einfluss hat. 
                Für die Inhalte und Richtigkeit der bereitgestellten Informationen ist der jeweilige Anbieter der verlinkten Webseite verantwortlich. 
                Die Europäische Janusz Korczak Akademie übernimmt für diese Inhalte und Richtigkeit keine Haftung.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
