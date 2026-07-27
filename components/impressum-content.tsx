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
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Datenschutz
            </h2>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              Dispute Resolution in accordance with § 36 VSBG
            </h2>
            <p>
              Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
