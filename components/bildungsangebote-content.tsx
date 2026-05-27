"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { BildungsangeboteHero } from "./bildungsangebote-hero"
import { MetricsSection } from "./metrics-section"
import { Copy, Check, Mail } from "lucide-react"


/* ─── Workshop row (alternating) ─── */
function WorkshopRow({
  title,
  text,
  index,
  imageSrc,
  imageAlt,
}: {
  title: string
  text: string
  index: number
  imageSrc?: string
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
          className="text-2xl font-bold text-[#1a5276]"
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h2>
        <p className="text-[#2c3e50] leading-relaxed text-[15px]">
          {text}
        </p>
      </div>
      {/* Image / Placeholder Area */}
      <div className="flex-1 w-full aspect-video bg-[#e8f0f5] rounded-2xl flex flex-col items-center justify-center text-[#85c1e9] shadow-sm border border-[#d6eaf8] overflow-hidden relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-lg border-2 border-dashed border-[#85c1e9] flex items-center justify-center text-[#85c1e9] text-lg">📷</div>
            <span className="text-xs text-[#5d6d7e]">Bild-Platzhalter</span>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Juniorreferent row (alternating, portrait images) ─── */
function ReferentRow({
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
        <h3
          className="text-2xl font-bold text-[#1a5276]"
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        <p className="text-[#2c3e50] leading-relaxed text-[15px] whitespace-pre-line">
          {text}
        </p>
      </div>
      {/* Image Area - no box, larger, portrait ratio */}
      <div className="w-full md:w-[320px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md flex-shrink-0">
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

/* ─── Call to Action Component ─── */
function BookingCTA() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("youthbridge@ejka.org")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-[#f4f9fc] border-y border-[#d6eaf8]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2
          className="text-2xl md:text-3xl font-bold text-[#1a5276]"
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          Buchen Sie uns jetzt!
        </h2>
        <p className="text-[#2c3e50] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Unsere YouBienare sind ideal für Schulunterricht und für Veranstaltungen von Vereinen, Verbänden, Institutionen und Unternehmen!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mt-6">
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-[#d6eaf8] shadow-sm w-full sm:w-auto flex-1 justify-center sm:justify-start min-w-0">
            <Mail className="w-5 h-5 text-[#85c1e9] flex-shrink-0" />
            <a
              href="mailto:youthbridge@ejka.org"
              className="text-[#1a5276] font-semibold hover:underline truncate select-all"
            >
              youthbridge@ejka.org
            </a>
          </div>

          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm border cursor-pointer ${
              copied
                ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                : "bg-[#1a5276] hover:bg-[#154360] border-transparent text-white active:scale-95"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy to clipboard</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── Main component ─── */
export function BildungsangeboteContent() {
  const [introVisible, setIntroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIntroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Full-width hero slideshow ── */}
      <BildungsangeboteHero />

      {/* ── Metrics Section ── */}
      <MetricsSection />

      {/* ── Booking Call to Action ── */}
      <BookingCTA />

      {/* ── Intro text ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
            introVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-8"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            YouthBridge-UNI
          </h1>

          <div className="space-y-6 text-[#2c3e50] text-[15px] leading-relaxed">
            <p>
              YouthBridge-UNI ist das Ergebnis des siebenjährigen Wirkens unseres
              Projekts, das in Form von Seminaren, Workshops und Lernspielen
              junge Menschen in ihrer ganzen Vielfalt zusammenbringt. Die
              Kenntnisse und Kompetenzen, die wir in all den Jahren zu den
              wichtigsten gesellschaftspolitischen Themen erlangt haben, wollen
              wir nun mit anderen Menschen teilen.
            </p>

            <p className="font-semibold text-[#1a5276]">
              Die wichtigsten Themen der YouthBridge-Uni:
              Radikalisierungsprävention sowie die Bekämpfung von Antisemitismus
              und Diskriminierung.
            </p>

            <p>
              Kern der YouthBridge-Uni sind unsere Workshops: Zwei bis drei
              YouBies besuchen mit den Workshops Schulen, Institutionen,
              Organisationen. Unsere Workshops und Seminare nennen wir YouBienare
              (Projekt: YouthBridge, Teilnehmer: YouBies, Bildungsprodukt:
              YouBienar).
            </p>

            <p>
              Jedes YouBienar dauert 1,5 Stunden und kommt sowohl bei Kindern
              und Jugendlichen als auch bei Erwachsenen und Senioren sehr gut an.
              Der Austausch ist interaktiv, lebendig, auf Augenhöhe. Wir sind mit
              sehr viel Motivation und Engagement dabei. Wir haben die
              Kartenspiele, die Videos, die Rollenspiele etc. selbst entwickelt.
            </p>

            <p>
              Derzeit bieten wir sechs YouBienare an, die wir ständig
              weiterentwickeln:
            </p>
          </div>
        </div>
      </section>

      {/* ── Detailed Workshops ── */}
      <section className="w-full py-16 px-4 bg-[#f4f9fc] border-t border-[#d6eaf8]">
        <div className="max-w-5xl mx-auto space-y-24">
          <WorkshopRow
            index={0}
            title="Fake or Fact? – Gegen Fake News und Desinformation"
            text="In diesem Workshop geht es darum, Fake News, Desinformation & KI-Inhalte zu durchschauen: Wo entstehen Falschinformationen, warum sind sie so gefährlich und wie erkennt man sie? Durch interaktive Übungen und unser „Fake or Fact“-Spiel werden die Teilnehmenden selbst zu JournalistInnen und prüfen, wer die größte Medienkompetenz hat und echte von erfundenen Schlagzeilen unterscheiden kann. Wissen trifft Spaß mit garantiertem Aha-Effekt!"
            imageSrc="/Fake-oder-Fact.jpg"
            imageAlt="Fake or Fact Workshop"
          />
          <WorkshopRow
            index={1}
            title="Myth-Oh-No! – Verschwörungstheorien nicht mit uns"
            text="Verschwörungstheorien faszinieren, verunsichern und können gefährlich werden. In diesem Workshop decken wir die bekanntesten Mythen auf, hinterfragen ihre Logik und lernen, wie man mit Menschen im eigenen Umfeld umgehen kann, die an sie glauben. Im interaktiven Kartenspiel stellen sich die Teilnehmenden verschwörerischen Behauptungen, von der internationalen Weltverschwörung bis hin zu der “Flat Earth Society” und entlarven gemeinsam, was wirklich hinter den Behauptungen steckt. Kritisch denken, diskutieren und auch mal schmunzeln – das ist unser Ziel!"
            imageSrc="/Verschwoerungsmythen.jpg"
            imageAlt="Verschwörungsmythen Workshop"
          />
          <WorkshopRow
            index={2}
            title="Bot or not? – KI & Medienkompetenz"
            text="Die Technologie der Künstlichen Intelligenz fasziniert aktuell Menschen auf der ganzen Welt: Wird sie das Ende der Menschheit bedeuten oder ein Segen sein, um lästige Aufgaben zu erledigen? Worauf sich jedoch alle einigen können, wäre dass wir lernen müssen mit ihr verantwortungvoll umzugehen. Darum bearbeiten wir gemeinsam folgende Fragen: Wie funktioniert KI, welche Chancen bietet sie und welche Gefahren stecken dahinter? Wir testen spielerisch, wie man KI-Inhalte von echten unterscheiden kann und üben wie man die Präzision der KI verbessern kann, etwa beim Erstellen von Bildern und Texten. Interaktive Übungen vermitteln praxisnah die Grenzen dieser Technologie und stärken die Medienkompetenz der Teilnehmenden."
            imageSrc="/Bot or not.png"
            imageAlt="Bot or not Workshop"
          />
          <WorkshopRow
            index={3}
            title="Mut tut Gut! – Gegen Mobbing & Diskriminierung"
            text="Mobbing und Diskriminierung betreffen viele, ob in der Schule, im Freundeskreis oder online. Was jedoch viele vergessen, ist dass die Opfer auch lange Zeit nach den Ereignissen darunter leiden können. In diesem Workshop sprechen wir offen über Erfahrungen, lernen Strategien gegen Ausgrenzung kennen und stärken den Mut zum Eingreifen. Im interaktiven Rollenspiel erleben die Teilnehmenden Gruppendynamiken hautnah und entdecken, wie man mit Empathie und Zivilcourage ein faires Miteinander fördern kann."
            imageSrc="/MUT-TUT-GUT.jpg"
            imageAlt="Mut tut Gut Workshop"
          />
          <WorkshopRow
            index={4}
            title="Gegenwind – Radikalisierung & Extremismus"
            text="Wie entstehen extremistische Überzeugungen und warum werden manche Menschen radikal? In diesem Workshop nehmen wir die TeilnehmerInnen mit auf eine Reise durch reale Personenbeispiele und ihre individuellen Werdegänge. Gemeinsam besprechen wir Unterschiede und Gemeinsamkeiten verschiedener Strömungen und erarbeiten praktische Strategien, wie man respektvoll und sicher mit radikalen Menschen umgeht und welche Aussteigerprogramme helfen könnten. Interaktive Übungen machen die Themen erlebbar und sorgen für einen spannenden Lernprozess."
            imageSrc="/Gegenwind-Radikalisierung.jpg"
            imageAlt="Gegenwind Workshop"
          />
          <WorkshopRow
            index={5}
            title="Lebendige Bilder – Geschichten die bleiben"
            text="Wie kann Erinnerung lebendig bleiben, wenn Zeitzeugen nicht mehr berichten können? In diesem Workshop beschäftigen sich die Teilnehmenden mit kulturellen Artefakten, die im Zusammenhang mit der Shoah entstanden sind, und erfahren die verschiedenen Schicksale der KünstlerInnen, die sie geschaffen haben. So ordnen die Teilnehmenden die Artefakte anhand der Lebensgeschichten den jeweiligen SchöpferInnen zu. Auf diese Weise verbinden wir historische Einblicke mit spielerischem Lernen und fördern ein tieferes Verständnis für die Erinnerungskultur."
            imageSrc="/Lebendige Bilder.png"
            imageAlt="Lebendige Bilder Workshop"
          />
        </div>
      </section>

      {/* ── Juniorreferenten Section ── */}
      <section className="w-full py-16 px-4 bg-white border-t border-[#d6eaf8]">
        <div className="max-w-5xl mx-auto space-y-24">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a5276] text-center"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Unsere Juniorreferenten
          </h2>
          <ReferentRow
            index={0}
            title="Timur – Juniorreferent"
            text="Als Juniorreferent bei YouthBridge setze ich mich aktiv für den Austausch zwischen jungen Menschen mit unterschiedlichen Hintergründen ein. Gerade in einer vielfältigen Stadt wie München sehe ich großes Potenzial darin, Dialogräume zu schaffen, in denen gegenseitiges Verständnis wachsen kann. Durch meinen eigenen Hintergrund habe ich erlebt, wie wichtig es ist, gehört zu werden und sich einbringen zu können. Diese Erfahrung motiviert mich, Projekte mitzugestalten, die Integration, Teilhabe und demokratisches Engagement fördern. Bei YouthBridge bringe ich meine Perspektive ein, entwickle meine Kompetenzen weiter und leiste einen konkreten Beitrag für eine open und solidarische Gesellschaft."
            imageSrc="/juniorreferent-1.jpg"
            imageAlt="Juniorreferent Timur bei YouthBridge"
          />
          <ReferentRow
            index={1}
            title="Sammy – Juniorreferent"
            text="Ich mag es, Dinge auseinanderzunehmen und gemeinsam neu zusammenzusetzen. Was mich motiviert: Räume schaffen, in denen verschiedene Perspektiven Platz haben."
            imageSrc="/juniorreferent-2.jpg"
            imageAlt="Juniorreferent Sammy bei YouthBridge"
          />
          <ReferentRow
            index={2}
            title="Jan Buchala – Juniorreferent"
            text={`Servus, ich bin Jan Buchala und bei YouthBridge als Referent aktiv. Aktuell strebe ich einen Master in Politikwissenschaft an der LMU an und setze mich intensiv mit gesellschaftlichen und politischen Entwicklungen auseinander.

Gerade weil ich viele Entwicklungen unserer Zeit mit Sorge betrachte, ist es mir wichtig, nicht nur zu kritisieren, sondern selbst aktiv zu werden. Bei YouthBridge habe ich die Möglichkeit, Schüler dort abzuholen, wo sie stehen, durch interaktive Workshops, die an ihre Lebensrealität und Erfahrungen auf Social Media anknüpfen.

Mir ist besonders wichtig zu zeigen, wie stark wir alle durch Algorithmen und Desinformation beeinflusst werden und warum Medienkompetenz eine zentrale Rolle für unsere Demokratie spielt.

Ich freue mich, meine Begeisterung für politische Bildung und das Sprechen vor Gruppen mit einem sinnvollen Ziel verbinden zu können und so einen kleinen Beitrag zur Stärkung unserer Demokratie in Bayern zu leisten.`}
            imageSrc="/juniorreferent-3.jpg"
            imageAlt="Juniorreferent Jan Buchala bei YouthBridge"
          />
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-[#2c3e50] text-lg md:text-xl leading-relaxed">
            <p>
              Unsere YouBienare sind ideal für den Schulunterricht und für
              Veranstaltungen von Vereinen, Verbänden, Institutionen und
              Unternehmen. Möchten Sie mehr über die YouBienare erfahren und sie
              buchen? Schreiben Sie uns:{" "}
              <a
                href="mailto:youthbridge@ejka.org"
                className="text-[#2980b9] hover:underline"
              >
                youthbridge@ejka.org
              </a>
              . Wir freuen uns auf den Austausch mit Ihnen!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
