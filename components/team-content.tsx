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
  return (
    <>
      {/* ── Title ── */}
      <section className="w-full pt-16 pb-4 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a5276]"
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Team
          </h1>
        </div>
      </section>

      {/* ── Team Members List ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          <TeamMemberRow
            index={0}
            title="Olga Kotlytska – Projektleiterin YouthBridge München"
            text={`Heute habe ich den Eindruck, dass mein gesamtes schulisches, berufliches und familiäres Leben eine Vorbereitung auf YouthBridge war, ein Projekt, in dem sich die Leaders of Tomorrow entwickeln. Geboren 1968 in der Ukraine und seit 2005 in München, habe ich an Universitäten in Kharkiv, Poznan und Lüneburg studiert und als Philologin, Lehrerin, Journalistin und PR-Expertin gearbeitet sowie internationale Medienprojekte realisiert.

Seit 2017 leite ich YouthBridge, das 2021 mit dem Integrationspreis der Bayerischen Staatsregierung ausgezeichnet wurde, und 2022 wurde auch mein Engagement mit dem Bayerischen Verdienstorden gewürdigt. YouthBridge bildet junge Menschen unterschiedlichster Herkunft zu Brückenbauern zwischen Kulturen aus, für eine tolerante, friedliche und demokratische Gesellschaft.`}
            imageSrc="/team-olga.jpg"
            imageAlt="Olga Kotlytska, Projektleiterin YouthBridge München"
          />
          <TeamMemberRow
            index={1}
            title="Mathias Kaspar – Projektleiter der YouthBridge-UNI Bildungsangebote & Landessprecher des Jugendverbands YouthBridge Bayern"
            text={`Schon früh habe ich erlebt, wie entscheidend es ist, dass junge Menschen nicht nur über Demokratie sprechen, sondern sie aktiv mitgestalten. Heute verstehe ich mein Engagement als Beitrag dazu, Räume zu schaffen, in denen genau das möglich wird.

Mein Studium der Politikwissenschaft und Soziologie an der Ludwig Maximilians Universität München hat meine fachliche Perspektive auf demokratische Prozesse, Partizipation und gesellschaftlichen Zusammenhalt geschärft und bestärkt mich nun darin, theoretische Konzepte bei YouthBridge in konkrete Praxis umzusetzen.

Als Landessprecher von YouthBridge Bayern vertrete ich die Interessen unseres Jugendverbands, begleite den organisatorischen Aufbau in Bayern und setze mich für starke, partizipative Strukturen ein. Mein Schwerpunkt liegt auf der Aktivierung und Befähigung junger Menschen, Verantwortung zu übernehmen in Projekten, in öffentlichen Debatten und in gesellschaftlichen Prozessen.

Als Projektleiter der YouthBridge UNI Bildungsprodukte entwickle und koordiniere Formate, die junge Menschen zu demokratischer Beteiligung, Zivilcourage und kritischem Denken ermutigen. Dabei geht es nicht nur um Wissensvermittlung, sondern um Empowerment. Junge Menschen sollen ihre Stimme finden und wirksam einsetzen können.

YouthBridge ist für mich ein Ort gelebter Verbandsarbeit und aktiver Jugendbeteiligung, ein Netzwerk, das Engagement stärkt, Brücken baut und junge Menschen befähigt, unsere Gesellschaft verantwortungsvoll mitzugestalten.`}
            imageSrc="/team-mathias.jpg"
            imageAlt="Mathias Kaspar, Projektleiter der YouthBridge-UNI Bildungsangebote & Landessprecher des Jugendverbands YouthBridge Bayern"
          />
          <TeamMemberRow
            index={2}
            title="Igor Breger – Vorstand Youthbridge Bayern & Leiter Youthbridge Franken"
            text={`Als jüdische Person mit Wurzeln in der Ukraine war ich sowohl dort als auch in Deutschland oft mit Vorurteilen konfrontiert, bevor ein echter Dialog hätte stattfinden können. Nicht nur deshalb suchte ich nach Möglichkeiten, Gleichgesinnte zu finden, die die Annahmen kritisch hinterfragen und eine eigene Meinung durch Begegnung und Austausch bilden wollen.

YouthBridge hatte mehr als das für mich im Angebot: eine Gemeinschaft, die wie ein bunter Fleckenteppich funktioniert – jedes Stück mit seiner eigenen Herkunft, Erfahrung und Perspektive. Die Möglichkeit, im Rahmen des YouthBridge-Programms mit Politikern, Unternehmen und engagierten Menschen aus der Zivilgesellschaft in Kontakt zu kommen, zeigte, dass unsere Stimmen konsequent gehört werden und unsere Message erhalten bleibt.

Obwohl die Entfernung eine Herausforderung war, ist es mir gelungen, das YouthBridge-Programm in nur einem Jahr erfolgreich abzuschließen. Damit noch mehr junge Menschen aus meiner Region davon profitieren und unvergessliche Erfahrungen machen könnten, habe ich die Initiative ergriffen und 2024 den Standort YouthBridge Franken gegründet, der inzwischen aktive YouBies aus der gesamten Metropolregion Nürnberg verbindet.

Durch meine Tätigkeit im Vorstand von YouthBridge Bayern unterstütze ich die Förderung und Beteiligung junger Menschen, die ihre Erfahrungen und ihr Engagement in echte Projekte und Prozesse mit spürbaren Auswirkungen einbringen wollen.

Erreichbar unter: igorbreger@ejka.org.
Wir sehen uns bei YouthBridge!`}
            imageSrc="/team-igor.jpg"
            imageAlt="Igor Breger, Vorstand Youthbridge Bayern & Leiter Youthbridge Franken"
          />
          <TeamMemberRow
            index={3}
            title="Anastasya Semyantych – Jugendleiterin"
            text={`Ich bin seit August 2025 bei YouthBridge dabei und habe durch eine Freundin den Weg dorthin gefunden. Schon von Anfang an habe ich mich dort unglaublich wohlgefühlt. Die offene und herzliche Art dort hat es mir leicht gemacht, mich einzubringen und Teil der Gemeinschaft zu werden.

Durch mein Engagement habe ich nicht nur viele wundervolle und inspirierende Menschen kennengelernt, sondern auch persönlich viel dazugewonnen. Vor allem mein Selbstbewusstsein hat sich enorm gestärkt, weil ich gemerkt habe, wie viel ich bewirken und mitgestalten kann.

Meine persönlichen Highlights sind immer die Kamingespräche mit unterschiedlichen Politikern. Dabei finde ich es besonders spannend, direkt Fragen stellen zu können und neue Einblicke in politische Themen zu bekommen, die man sonst nicht erhält.

Ich kann YouthBridge wirklich jedem empfehlen – besonders, wenn man auf der Suche nach einem Raum ist, in dem man sich entfalten kann und sich weiterentwickeln kann.`}
            imageSrc="/team-anastasia.jpg"
            imageAlt="Anastasya Semyantych, Jugendleiterin bei YouthBridge"
          />
          <TeamMemberRow
            index={4}
            title="Radoslav Karastoyanov – Jugendleiter"
            text={`Ich bin 21 Jahre alt und seit 2022 als Jugendleiter bei YouthBridge aktiv. Neben meinem Studium engagiere ich mich mit großer Überzeugung für unsere Gesellschaft. Besonders motiviert mich dabei die eigene Erfahrung: Als ich selbst noch Mitglied war, hat mich YouthBridge fachlich wie persönlich stark geprägt und mir wichtige Perspektiven eröffnet. Diese Erfahrung möchte ich an die nächste Generation weitergeben.

Ich bin überzeugt, dass echter Dialog zwischen jungen Menschen und fundierte politische Bildung zentrale Voraussetzungen für eine offene, verantwortungsbewusste und solidarische Gesellschaft sind. Als Jugendleiter möchte ich Räume schaffen, in denen Austausch, Reflexion und demokratisches Engagement möglich werden, damit wir gemeinsam an einer produktiven und gemeinschaftlichen Zukunft arbeiten können.`}
            imageSrc="/team-radoslav.jpg"
            imageAlt="Radoslav Karastoyanov, Jugendleiter bei YouthBridge"
          />
          <TeamMemberRow
            index={5}
            title="Elisa Mikaelyan – Jugendleiterin"
            text={`Hey!
Ich bin Elisa, 19 Jahre alt, Schülerin und eine absolute „waschechte Münchnerin". Alles begann für mich vor zwei Jahren, als mir Youthbridge über die Schule vorgestellt wurde. Ich weiß noch genau, wie ich zu meinem ersten Treffen kam: Ich habe mich vom ersten Moment an unglaublich wohl und direkt willkommen gefühlt. Die offene und inspirierende Atmosphäre hat mich so begeistert, dass ich nicht lange gezögert und mich kurz darauf dazu entschieden habe, als Jugendleiterin aktiv zu werden.

Was mich an dieser Aufgabe am meisten motiviert? Es ist ein fantastisches Gefühl, Teil eines Umfelds zu sein, in dem sich so viele engagierte und motivierte Jugendliche finden. Ich habe durch die Arbeit als Jugendleiterin bereits unglaublich viel über Teamwork, Verantwortung und Kommunikation gelernt.

Ich bin stolz darauf, euch auf diesem Weg begleiten zu dürfen, und freue mich darauf, gemeinsam Neues zu bewegen!`}
            imageSrc="/team-elisa.jpg"
            imageAlt="Elisa Mikaelyan, Jugendleiterin bei YouthBridge"
          />
          <TeamMemberRow
            index={6}
            title="Tymur Tsapliienko – Jugendleiter"
            text={`Seit 2025 engagiere ich mich als Jugendleiter bei YouthBridge. Mit meinem Migrationshintergrund war das Projekt für mich selbst ein wichtiger Ankerpunkt: Es hat mir nicht nur Orientierung gegeben, sondern auch meine Integration in Deutschland maßgeblich unterstützt.

Derzeit studiere ich TUM-BWL und bringe mich bei YouthBridge insbesondere im Bereich Media Literacy ein. Aufklärung, kritisches Denken und der reflektierte Umgang mit Informationen sind für mich zentrale Voraussetzungen für eine starke, inklusive und demokratische Gesellschaft.

Besonders motiviert mich die Möglichkeit, Wissen und Kompetenzen an neue Projektmitglieder weiterzugeben. Gemeinsam möchten wir unser Netzwerk weiter ausbauen und unsere Rolle bei der aktiven Mitgestaltung einer lebendigen Zivilgesellschaft in Bayern nachhaltig stärken.`}
            imageSrc="/team-tymur.jpg"
            imageAlt="Tymur Tsapliienko, Jugendleiter bei YouthBridge"
          />
          <TeamMemberRow
            index={7}
            title="Kateryna Romanenko – Jugendleiterin"
            text={`Ich bin 19 Jahre alt und im März 2022 aus Odesa 🇺🇦 nach Deutschland geflüchtet. Derzeit absolviere ich ein duales Studium bei der Landeshauptstadt München im Bereich BWL mit dem Schwerpunkt Stadtverwaltung.

Bei YouthBridge übernehme ich die Koordination von Veranstaltungen, Bildungsreisen und Terminen. Dabei ist es mir besonders wichtig, Strukturen zu schaffen, die reibungslose Abläufe ermöglichen und engagierten jungen Menschen den Raum geben, sich aktiv einzubringen.

Es freut mich sehr zu sehen, dass viele YouBies die Ergebnisse meiner Arbeit wertschätzen und mit Begeisterung an unseren Projekten teilnehmen. Dieses positive Feedback motiviert mich, weiterhin Verantwortung zu übernehmen und YouthBridge organisatorisch wie inhaltlich zu stärken.`}
            imageSrc="/team-kateryna.jpg"
            imageAlt="Kateryna Romanenko, Jugendleiterin bei YouthBridge"
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
