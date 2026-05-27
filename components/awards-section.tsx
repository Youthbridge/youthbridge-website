"use client"

import { Award, Medal, Trophy, Sparkles, Instagram, ArrowUpRight } from "lucide-react"

interface AwardItem {
  id: number
  recipient: string
  title: string
  date: string
  quote: string
  instagramUrl: string
  icon: React.ReactNode
  colorClass: string
  badgeBg: string
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
      icon: <Award className="w-7 h-7 text-amber-600 animate-pulse" />,
      colorClass: "from-amber-500/20 to-amber-600/5 text-amber-700 border-amber-200/50",
      badgeBg: "bg-amber-50",
    },
    {
      id: 2,
      recipient: "Olga Kotlytska",
      title: "Bayerischer Verdienstorden",
      date: "Oktober 2022",
      quote: "„Es ist ein wunderbares Gefühl, wenn die Mühen und das Herzblut für eine große Vision wahrgenommen werden.“",
      instagramUrl: "https://www.instagram.com/p/Cjub3hsIbui/?img_index=1",
      icon: <Medal className="w-7 h-7 text-sky-600" />,
      colorClass: "from-sky-500/20 to-sky-600/5 text-sky-700 border-sky-200/50",
      badgeBg: "bg-sky-50",
    },
    {
      id: 3,
      recipient: "Mathias Kaspar",
      title: "Auszeichnung für herausragende Verdienste in der Jugendarbeit",
      date: "November 2025",
      quote: "„Diese Auszeichnung ist nicht nur eine Ehre, sondern ein Versprechen an mich selbst: Weitermachen. Weiterreden. Weiter zuhören.“",
      instagramUrl: "https://www.instagram.com/p/DRIDLIUCC0-/?img_index=1",
      icon: <Trophy className="w-7 h-7 text-emerald-600" />,
      colorClass: "from-emerald-500/20 to-emerald-600/5 text-emerald-700 border-emerald-200/50",
      badgeBg: "bg-emerald-50",
    },
    {
      id: 4,
      recipient: "YouthBridge",
      title: "Bayerischer Integrationspreis 2021",
      date: "Juni 2021",
      quote: "„Fulminanter hätte der Neustart in die Präsenzveranstaltungen für uns nicht sein können. Wir sind stolz und glücklich!“",
      instagramUrl: "https://www.instagram.com/p/CQauNoBh36w/?img_index=1",
      icon: <Sparkles className="w-7 h-7 text-indigo-600" />,
      colorClass: "from-indigo-500/20 to-indigo-600/5 text-indigo-700 border-indigo-200/50",
      badgeBg: "bg-indigo-50",
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

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((award) => (
            <div 
              key={award.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col p-6 relative overflow-hidden group"
            >
              {/* Highlight gradient corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${award.colorClass} opacity-30 rounded-bl-full group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

              {/* Icon Badge */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${award.badgeBg} border border-slate-100 mb-6 shadow-sm group-hover:scale-110 transition-all duration-300`}>
                {award.icon}
              </div>

              {/* Card Meta & Header */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  {award.date}
                </span>
                <h3 className="font-extrabold text-slate-800 text-lg tracking-tight group-hover:text-[#1a5276] transition-colors duration-300 leading-snug">
                  {award.recipient}
                </h3>
                <p className="text-xs font-bold text-[#1a5276] uppercase tracking-wide min-h-[2.5rem] flex items-start pt-1 leading-normal">
                  {award.title}
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="w-full h-px bg-slate-100 my-4" />

              {/* Extract Quote Text */}
              <div className="relative flex-grow flex flex-col justify-between">
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed pl-3 border-l-2 border-[#1a5276]/30 mb-6 font-medium text-balance">
                  {award.quote}
                </p>

                {/* Instagram Preview Button */}
                <a
                  href={award.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`award-link-${award.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 hover:bg-[#e1306c] hover:text-white transition-all duration-300 border border-slate-100 hover:border-transparent mt-auto group/btn shadow-sm active:scale-95"
                >
                  <Instagram className="w-4 h-4 text-[#e1306c] group-hover:text-white transition-colors duration-300" />
                  <span>Beitrag ansehen</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
