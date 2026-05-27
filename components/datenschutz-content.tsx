"use client"

import { useEffect, useState } from "react"

export function DatenschutzContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <>
      {/* Hero Banner */}
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
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-10 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-[#2c3e50] leading-loose text-lg">
          
          {/* Section 1 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a3a8f]">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h3 className="text-xl font-semibold text-[#1a3a8f] mt-4">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden (sofern Sie eingewilligt haben).
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a3a8f]">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erklärt auch, wie und zu welchem Zweck das geschieht.
              </p>
              <h3 className="text-xl font-semibold text-[#1a3a8f] mt-4">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="bg-gray-50 p-4 rounded border border-gray-100">
                <strong>Europäische Janusz Korczak Akademie e.V.</strong><br />
                Janusz Korczak Haus München<br />
                Blumenstraße 29<br />
                80331 München<br />
                Deutschland<br /><br />
                Telefon: +49 (0) 8937946640<br />
                E-Mail: info@ejka.org
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              <h3 className="text-xl font-semibold text-[#1a3a8f] mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns oder Sie nutzen die <strong>Cookie-Einstellungen</strong> in der Fußzeile unserer Website, um Ihre Zustimmung zu Widerrufen oder anzupassen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              3. Datenerfassung auf unserer Website
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a3a8f]">Cookies & Einwilligung</h3>
              <p>
                Unsere Internetseiten verwenden teilweise so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
              <p>
                Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Übersetzungsdienste).
              </p>
              <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden. Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten.
              </p>
              <p>
                Wir verwenden beim Aufruf der Seite ein Cookie-Einwilligungs-Banner, um Ihre Zustimmung zu den einzelnen Kategorien einzuholen. Folgende Kategorien stehen zur Auswahl:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Notwendige Cookies (Immer aktiv):</strong> Diese Cookies sind für den Betrieb der Seite und grundlegende Funktionen (z.B. Speicherung Ihrer Cookie-Einstellungen) zwingend erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </li>
                <li>
                  <strong>Funktionelle Cookies/Dienste:</strong> Ermöglicht das Laden von Zusatzdiensten wie dem Google Translate Widget zur Übersetzung der Website. Ohne Ihre Zustimmung werden diese Dienste nicht geladen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
                </li>
                <li>
                  <strong>Analytische Cookies/Dienste:</strong> Ermöglicht es uns, anonymisierte statistische Informationen darüber zu sammeln, wie unsere Website genutzt wird (über Vercel Analytics), um unser Angebot kontinuierlich zu verbessern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              4. Analyse-Tools und Drittanbieter-Dienste
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a3a8f]">Vercel Analytics</h3>
              <p>
                Wir nutzen zur statistischen Auswertung der Besucherzugriffe den Dienst „Vercel Analytics“ des Anbieters Vercel Inc., 650 2nd St, San Francisco, CA 94107, USA.
              </p>
              <p>
                Vercel Analytics erfasst anonyme Metriken wie die Anzahl der eindeutigen Besucher, Seitenaufrufe und gängige Systeminformationen (z. B. Browsertyp und Betriebssystem). Es werden standardmäßig keine personenbezogenen Daten (wie vollständige IP-Adressen) oder Tracker gespeichert, die eine seitenübergreifende Identifizierung ermöglichen. Dennoch aktivieren wir diesen Dienst erst, nachdem Sie Ihre aktive Einwilligung über das Cookie-Banner erteilt haben.
              </p>

              <h3 className="text-xl font-semibold text-[#1a3a8f] mt-6">Google Translate (Übersetzungsdienst)</h3>
              <p>
                Diese Website bietet die Möglichkeit, Inhalte mithilfe von Google Translate (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ins Englische zu übersetzen.
              </p>
              <p>
                Wenn Sie diesen Dienst über die Flaggenauswahl oder das Cookie-Banner aktivieren, stellt Ihr Browser eine direkte Verbindung zu den Servern von Google her. Google erfährt dadurch, dass Sie unsere Website aufgerufen haben und setzt Cookies zur Speicherung Ihrer Spracheinstellungen (`googtrans`). Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit über die Cookie-Einstellungen im Footer widerrufen.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a8f] border-b border-gray-100 pb-3">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Wenden Sie sich hierzu oder zu weiteren Fragen zum Thema personenbezogene Daten gerne an uns unter den im Impressum angegebenen Kontaktdaten.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
