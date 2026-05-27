"use client"

import Image from "next/image"
import { Instagram, ArrowUpRight, Image as ImageIcon } from "lucide-react"

interface AwardItem {
  id: number
  recipient: string
  title: string
  date: string
  quote: string
  instagramUrl: string
  imageSrc?: string // Future use for real images
  colorClass: string
}

export function AwardsSection() {
  const awardsData: AwardItem[] = [
    {
      id: 1,
      recipient: "Eva Haller",
      title: "Bundesverdienstkreuz am Bande",
      date: "Februar 2026",
      quote: "„Herzlichen Glückwunsch zu dieser Auszeichnung: Bundesverdienstkreuz! Du verdienst alle Orden und Medaillen dieser Welt! 🏆“",
      instagramUrl: "https://www.instagram.com/p/DUoAXR6iMkD/?img_index=1",
      imageSrc: "/award-eva-haller.jpg",
      colorClass: "from-amber-500/10 to-amber-600/5 border-amber-100",
    },
    {
      id: 2,
      recipient: "Olga Kotlytska",
      title: "Bayerischer Verdienstorden",
      date: "Oktober 2022",
      quote: "„Es ist ein wunderbares Gefühl, wenn die Mühen und das Herzblut für eine große Vision wahrgenommen werden.“",
      instagramUrl: "https://www.instagram.com/p/Cjub3hsIbui/?img_index=1",
      imageSrc: "/award-olga-kotlytska.jpg",
      colorClass: "from-sky-500/10 to-sky-600/5 border-sky-100",
    },
    {
      id: 3,
      recipient: "Mathias Kaspar",
      title: "Auszeichnung für herausragende Verdienste in der Jugendarbeit",
      date: "November 2025",
      quote: "„Diese Auszeichnung ist nicht nur eine Ehre, sondern ein Versprechen an mich selbst: Weitermachen. Weiterreden. Weiter zuhören.“",
      instagramUrl: "https://www.instagram.com/p/DRIDLIUCC0-/?img_index=1",
      colorClass: "from-emerald-500/10 to-emerald-600/5 border-emerald-100",
    },
    {
      id: 4,
      recipient: "YouthBridge",
      title: "Bayerischer Integrationspreis 2021",
      date: "Juni 2021",
      quote: "„Fulminanter hätte der Neustart in die Präsenzveranstaltungen für uns nicht sein können. Wir sind stolz und glücklich!“",
      instagramUrl: "https://www.instagram.com/p/CQauNoBh36w/?img_index=1",
      colorClass: "from-indigo-500/10 to-indigo-600/5 border-indigo-100",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-y border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a5276]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span 
            className="text-xs md:text-sm font-bold tracking-widest text-[#1a5276] uppercase block"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Anerkennung & Erfolge
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Auszeichnungen & Ehrungen
          </h2>
          <div className="h-1.5 w-16 bg-[#1a5276] mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-sm md:text-base pt-2 leading-relaxed">
            Unser Engagement und der Beitrag von YouthBridge zur Stärkung der Zivilgesellschaft, 
            Demokratiebildung und Antisemitismusprävention werden auf höchster Landes- und Bundesebene gewürdigt.
          </p>
        </div>

        {/* 2x2 Grid Layout for Desktop, 1 Column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardsData.map((award, index) => {
            // Determine if the card is in the left or right column
            const isLeftColumn = index % 2 === 0

            return (
              <div 
                key={award.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row gap-6 p-6 relative overflow-hidden group items-stretch"
              >
                {/* Visual Highlight gradient corner based on position */}
                <div className={`absolute top-0 ${isLeftColumn ? 'left-0' : 'right-0'} w-20 h-20 bg-gradient-to-br ${award.colorClass} opacity-25 rounded-full filter blur-xl pointer-events-none`} />

                {/* Content Area */}
                <div className={`flex-grow flex flex-col justify-between space-y-4 ${
                  isLeftColumn 
                    ? "order-2" // Image on left, content on right
                    : "order-2 md:order-1" // Image on right (outer edge) on desktop, left on mobile
                }`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {award.date}
                    </span>
                    <h3 className="font-extrabold text-slate-800 text-lg tracking-tight group-hover:text-[#1a5276] transition-colors duration-300 leading-snug">
                      {award.recipient}
                    </h3>
                    <p className="text-xs font-bold text-[#1a5276] uppercase tracking-wide leading-normal">
                      {award.title}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed pl-3 border-l-2 border-[#1a5276]/30 my-3 font-medium text-balance">
                      {award.quote}
                    </p>
                  </div>

                  {/* Instagram Button */}
                  <a
                    href={award.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`award-link-${award.id}`}
                    className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 hover:bg-[#e1306c] hover:text-white transition-all duration-300 border border-slate-100 hover:border-transparent w-fit shadow-sm active:scale-95"
                  >
                    <Instagram className="w-4 h-4 text-[#e1306c] group-hover:text-white transition-colors duration-300" />
                    <span>Beitrag ansehen</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>

                {/* Image Placeholder or Actual Image on respective Outer Edge */}
                <div className={`w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center relative self-center ${
                  isLeftColumn 
                    ? "order-1" // Left side
                    : "order-1 md:order-2" // Right side on desktop, left on mobile
                }`}>
                  {award.imageSrc ? (
                    <Image 
                      src={award.imageSrc} 
                      alt={`Foto von ${award.recipient}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-2 group-hover:border-[#1a5276]/30 group-hover:bg-slate-50 transition-all duration-300">
                      <ImageIcon className="w-6 h-6 text-slate-300 group-hover:text-[#1a5276]/40 transition-colors" />
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-slate-500 transition-colors select-none">
                        Bild folgt
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
