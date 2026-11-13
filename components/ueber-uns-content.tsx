"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Compass,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Vote,
} from "lucide-react"

const keyMilestones = [
  { label: "2003 · New York", detail: "Ursprungsidee von Bob Kaplan" },
  { label: "2017 · München", detail: "Zweijähriges Leadership-Programm" },
  { label: "2021 · Auszeichnung", detail: "Integrationspreis" },
  { label: "2024 · Nürnberg", detail: "Standort YouthBridge Franken" },
]

export function UeberUnsContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="w-full bg-slate-50/50">
      {/* ── 1. Hero Banner (passend zu Verband & Franken) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a8f] via-[#1a5276] to-[#2980b9] py-16 md:py-24">
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/10 blur-2xl animate-pulse" />

        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 backdrop-blur-md border border-white/15">
            <Users size={14} className="text-cyan-300" />
            <span>Europäische Janusz Korczak Akademie e.V.</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.02em",
              textShadow: "0 2px 10px rgba(0,0,0,0.18)",
            }}
          >
            Über uns: YouthBridge
          </h1>

          {/* Quick Section Navigation Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <a
              href="#projekt"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold border border-white/20 backdrop-blur-sm transition-colors"
            >
              Das Projekt YouthBridge
            </a>
            <a
              href="#youthbridge-uni"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold border border-white/20 backdrop-blur-sm transition-colors"
            >
              YouthBridge-UNI
            </a>
            <a
              href="#jugendverband"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold border border-white/20 backdrop-blur-sm transition-colors"
            >
              Jugendverband Bayern
            </a>
            <a
              href="#franken"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold border border-white/20 backdrop-blur-sm transition-colors"
            >
              YouthBridge Franken
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Content Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-10 md:space-y-12">
        {/* ── SEKTION 1: Über uns: YouthBridge (Intro Concept Card) ── */}
        <section
          className={`bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="border-l-4 border-[#1a3a8f] pl-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2980b9]">
              Projekt &amp; Jugendverband
            </span>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#1a3a8f] mt-1"
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              Gesellschaftlichen Zusammenhalt aktiv stärken
            </h2>
          </div>

          <p className="text-[#2c3e50] text-base md:text-lg leading-relaxed">
            YouthBridge vereint sowohl ein Projekt als auch einen Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. und bringt junge Menschen unterschiedlicher Herkunft, Religion und Kultur zusammen, um den gesellschaftlichen Zusammenhalt aktiv zu stärken. Im Zentrum unserer Arbeit steht die Prävention von Antisemitismus, Diskriminierung und Radikalisierung. Diesem Ziel nähern wir uns über die gezielte Förderung demokratischer Kompetenzen und gelebter Vielfalt: Unsere Teilnehmenden setzen sich kontinuierlich mit unterschiedlichen Perspektiven und Erfahrungen auseinander, hinterfragen dadurch eigene Vorurteile und entwickeln eine Haltung, die auf Verständigung basiert.
          </p>

          {/* Compact Milestone Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMilestones.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-slate-50/80 border border-slate-100 px-4 py-3.5"
              >
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#1a3a8f]">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-[#5d6d7e] mt-1 font-medium">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SEKTION 2: Das Projekt YouthBridge ── */}
        <section
          id="projekt"
          className="scroll-mt-24 bg-white border border-[#d6eaf8]/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a3a8f] to-[#2980b9] flex items-center justify-center shadow-md flex-shrink-0">
              <Compass size={24} className="text-white" />
            </div>
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-[#1a3a8f] text-xs font-bold uppercase tracking-wider mb-1">
                Leadership-Programm
              </span>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#1a5276] leading-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Das Projekt YouthBridge: Leadership und Radikalisierungsprävention
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-[#2c3e50] text-base md:text-lg leading-relaxed">
            <p>
              Der Ursprung von YouthBridge liegt im Jahr 2003 in New York, in einer Zeit, die von den Folgen der Terroranschläge des 11. September 2001 geprägt war. Zwischen muslimischen, jüdischen und christlichen Communities herrschten erhebliche Berührungsängste, das gegenseitige Misstrauen nahm massiv zu. Gründer Bob Kaplan begegnete dieser Entwicklung mit einem gezielten Ansatz: Er setzte bewusst bei jungen Menschen an, da diese von bestehenden Vorurteilen weniger geprägt waren als viele Erwachsene und dadurch eher in der Lage waren, unbefangene Beziehungen über Communitygrenzen hinweg aufzubauen. Auf dieser Grundlage entstand YouthBridge New York. Im Jahr 2017 wurde das Konzept durch die Europäische Janusz Korczak Akademie nach München gebracht und dort als zweijähriges Leadership-Programm etabliert; 2021 wurde YouthBridge für seine Verdienste mit dem Integrationspreis ausgezeichnet.
            </p>
            <p>
              Im Rahmen des Programms treffen über einen Zeitraum von zwei Jahren Jugendliche unterschiedlichster Communities in Seminaren, Kamingesprächen, Bildungsfahrten und eigenständiger Projektarbeit zusammen. Sie werden dabei zu Multiplikatorinnen und Multiplikatoren ausgebildet, die anschließend innerhalb ihrer jeweiligen Communities als Vorbild wirken und sich aktiv gegen Antisemitismus, Diskriminierung und Radikalisierung einsetzen. Über die YouthBridge-UNI geben ehemalige Teilnehmende ihr erworbenes Wissen im Peer-to-Peer-Format an nachfolgende Jahrgänge weiter, sodass die Wirkung des Programms nachhaltig ist – sie reicht stets über den einzelnen Durchgang hinaus. So entsteht ein stetig wachsendes Netzwerk junger Persönlichkeiten, die Vielfalt und Zusammenhalt in Bayern erlebbar machen und sich Hass sowie Ausgrenzung entgegenstellen.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {["Seminare", "Kamingespräche", "Bildungsfahrten", "Projektarbeit"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 text-[#1a5276] text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              <Award size={14} />
              Integrationspreis 2021
            </span>
          </div>
        </section>

        {/* ── SEKTION 3: Die YouthBridge-UNI ── */}
        <section
          id="youthbridge-uni"
          className="scroll-mt-24 bg-white border border-[#d6eaf8]/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                Jugendbildungsinitiative · 8 Workshops
              </span>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#1a5276] leading-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Die YouthBridge-UNI: Peer-to-Peer-Bildungsformate
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-[#2c3e50] text-base md:text-lg leading-relaxed">
            <p>
              Im Rahmen der Jugendbildungsinitiative YouthBridge-UNI hat YouthBridge gemeinsam mit Jugendlichen bislang acht Workshops entwickelt, die im Peer-to-Peer-Format an Schulen, Jugendgruppen und Vereine weitergegeben werden. Die Workshops leisten wichtige Aufklärungsarbeit zu Themen wie Desinformation, Verschwörungstheorien und Antisemitismus und vermitteln zugleich zentrale Werte wie Zivilcourage, Menschenwürde und Verantwortung. Jeder Workshop besteht aus einem interaktiven, spielerischen Teil, wodurch sich die Formate besonders gut für Jugendliche und alle Schulformen eignen und sich zugleich individuell an die jeweilige Zielgruppe anpassen lassen.
            </p>
            <p>
              Die Workshops entstehen in der Regel als direkte Reaktion auf aktuelle gesellschaftliche Herausforderungen. So wurde das Format „Myth-Oh-No!“ während der Corona-Pandemie entwickelt, um Verschwörungstheorien mit Gegenfragen und Fakten zu begegnen. Nach dem russischen Angriff auf die Ukraine folgte der Workshop „Fake or Fact?“, der sich mit den Auswirkungen von Desinformation und Fake News auf Demokratie und Medien befasst. Nach dem 7. Oktober 2023 entwickelte YouthBridge zudem ein Format zur Aufklärung über Antisemitismus. Auf diese Weise reagiert YouthBridge fortlaufend auf aktuelle gesellschaftliche Entwicklungen und stattet junge Menschen mit dem Wissen und den Argumenten aus, diesen Entwicklungen eigenständig entgegentreten zu können.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {["„Myth-Oh-No!“", "„Fake or Fact?“", "Antisemitismus-Aufklärung"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/bildungsangebote"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1a5276] hover:text-[#2980b9] transition-colors group"
            >
              <span>Zu den Bildungsangeboten</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ── SEKTION 4 & 5: Verband & Franken im Responsive 2-Spalten-Raster bzw. klare Karten ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── SEKTION 4: Der Jugendverband YouthBridge Bayern ── */}
          <section
            id="jugendverband"
            className="scroll-mt-24 bg-white border border-[#d6eaf8]/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                  <Vote size={24} className="text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
                    Mitglied im BJR
                  </span>
                  <h2
                    className="text-2xl font-extrabold text-[#1a5276] leading-tight"
                    style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                  >
                    Der Jugendverband YouthBridge Bayern: demokratische Teilhabe organisieren
                  </h2>
                </div>
              </div>

              <p className="text-[#2c3e50] text-base leading-relaxed">
                Nach jahrelanger Projektarbeit ist YouthBridge inzwischen auch als eigenständiger Jugendverband organisiert und damit in die Strukturen der Jugendverbandsarbeit in Bayern eingebunden. Als Mitglied des Bayerischen Jugendrings (BJR), dem freiwilligen Zusammenschluss der Jugendverbände und Jugendgruppen im Freistaat, wirkt YouthBridge Bayern in demokratischen Gremien mit. Im Zentrum dieser Verbandsarbeit steht die Mitbestimmung: Die Teilnehmenden entscheiden aktiv mit, welche Themen bearbeitet werden, und gestalten die Verbandsarbeit von innen heraus mit. Darüber hinaus vertritt der Verband die Anliegen junger Menschen gegenüber Politik und weiteren Entscheidungsträgern und organisiert auf diese Weise ihre Stimme im öffentlichen und politischen Raum. Getragen unter anderem durch einen Vorstand, ermöglicht diese Struktur echte Mitwirkung in den Gremien. Für die jungen Mitglieder resultiert daraus vor allem eine zentrale Erfahrung: Selbstwirksamkeit im Sinne des Gefühls, mit eigenem Engagement Verbesserung für junge Menschen erreichen zu können.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
                  Mitbestimmung
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
                  Selbstwirksamkeit
                </span>
              </div>
              <Link
                href="/verband"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1a5276] hover:text-[#2980b9] transition-colors group flex-shrink-0"
              >
                <span>Zum Verband</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          {/* ── SEKTION 5: YouthBridge Franken ── */}
          <section
            id="franken"
            className="scroll-mt-24 bg-white border border-[#d6eaf8]/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-[#1a5276] flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-sky-50 text-[#1a5276] text-xs font-bold uppercase tracking-wider mb-1">
                    Nürnberg &amp; Region
                  </span>
                  <h2
                    className="text-2xl font-extrabold text-[#1a5276] leading-tight"
                    style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                  >
                    YouthBridge Franken: neuer Standort in Nürnberg seit 2024
                  </h2>
                </div>
              </div>

              <p className="text-[#2c3e50] text-base leading-relaxed">
                Im Jahr 2024 wurde mit YouthBridge Franken ein weiterer Standort in Nürnberg gegründet, initiiert von einem Vorstandsmitglied von YouthBridge Bayern, das zuvor selbst als Teilnehmer am Programm mitgewirkt hatte. Mit diesem Schritt ist YouthBridge nicht mehr auf München beschränkt, sondern kann seine Arbeit erstmals bayernweit ausrichten. Über den Standort in Nürnberg erreicht YouthBridge zusätzliche Jugendliche über die Metropolregion Nürnberg hinaus in ganz Bayern und macht sie mit den zentralen Werten des Verbands vertraut: demokratische Teilhabe, gelebte Vielfalt und der aktive Einsatz gegen Antisemitismus, Diskriminierung und Radikalisierung.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-[#1a5276] text-xs font-semibold">
                  München &amp; Nürnberg
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-50 text-[#1a5276] text-xs font-semibold">
                  Bayernweit
                </span>
              </div>
              <Link
                href="/franken"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1a5276] hover:text-[#2980b9] transition-colors group flex-shrink-0"
              >
                <span>Mehr über YouthBridge Franken erfahren</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </div>

        {/* ── SEKTION 6: Gemeinsam für ein offenes, demokratisches Bayern ── */}
        <section className="rounded-3xl bg-gradient-to-br from-[#f4f9fc] via-white to-[#e8f4f8] border border-[#d6eaf8] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a3a8f] to-[#2980b9] flex items-center justify-center shadow-lg flex-shrink-0">
              <HeartHandshake size={28} className="text-white" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2980b9]">
                <ShieldCheck size={14} />
                <span>Unser Anspruch</span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#1a5276] leading-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Gemeinsam für ein offenes, demokratisches Bayern
              </h2>
              <p className="text-[#2c3e50] text-base md:text-lg leading-relaxed">
                Ob im Rahmen des Leadership-Projekts, in der Verbandsarbeit im Bayerischen Jugendring oder am Standort in Nürnberg: Bei YouthBridge stehen junge Menschen im Mittelpunkt, die zeigen, dass Vielfalt eine gesellschaftliche Stärke darstellt und Demokratie durch aktives Handeln entsteht. Mit diesem Anspruch verfolgt YouthBridge das Ziel, junge Menschen zu befähigen, gesellschaftliche Verantwortung zu übernehmen und einen nachhaltigen Beitrag zu einer offenen, vielfältigen und demokratischen Gesellschaft zu leisten.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── Closing Call to Action Banner ── */}
      <section className="w-full bg-gradient-to-r from-[#1a3a8f] via-[#1a5276] to-[#2980b9] py-16 mt-6">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md border border-white/15">
            <Sparkles size={14} />
            <span>Werde Teil des Netzwerks</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Möchtest du auch Teil von YouthBridge werden?
          </h2>
          <p className="text-white/85 text-lg md:text-xl max-w-xl mx-auto font-medium">
            Egal ob in München oder Nürnberg – mache mit, bringe deine Ideen ein und werde Brückenbauer:in!
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/mitmachen"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a3a8f] font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg text-sm tracking-wide"
            >
              Jetzt mitmachen
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/ueber-uns/team"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-sm transition-colors text-sm tracking-wide"
            >
              Unser Team kennenlernen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
