"use client"

import Image from "next/image"

export function PartnersSection() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-start gap-6 lg:gap-8">

          {/* Gefördert durch */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
              Gefördert durch:
            </span>
            <div className="w-44 h-14 relative">
              <Image
                src="/partner-stmas.png"
                alt="Bayerisches Staatsministerium für Familie, Arbeit und Soziales"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* In Kooperation mit - JIZ */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
              In Kooperation mit:
            </span>
            <div className="w-32 h-20 relative">
              <Image
                src="/partner-jiz.jpg"
                alt="JIZ – Jugend Informations Zentrum München"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Hanns Seidel Stiftung - Large */}
          <div className="w-40 h-24 relative self-center">
            <Image
              src="/partner-hanns-seidel.jpg"
              alt="Hanns Seidel Stiftung"
              fill
              className="object-contain"
            />
          </div>

          {/* YouthBridge New York */}
          <div className="w-32 h-16 relative self-center">
            <Image
              src="/partner-yb-newyork.png"
              alt="YouthBridge New York"
              fill
              className="object-contain"
            />
          </div>

          {/* KJR + Allianz stacked */}
          <div className="flex flex-col gap-4 items-center">
            <div className="w-28 h-16 relative">
              <Image
                src="/partner-kjr.jpg"
                alt="Kreisjugendring München-Stadt"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-28 h-10 relative">
              <Image
                src="/partner-allianz.png"
                alt="Allianz"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Friedrich Naumann + Thomas Dehler stacked */}
          <div className="flex flex-col gap-4 items-end">
            <div className="w-36 h-12 relative">
              <Image
                src="/partner-naumann.png"
                alt="Friedrich Naumann Stiftung für die Freiheit"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-10 relative">
              <Image
                src="/partner-dehler.png"
                alt="Thomas Dehler Stiftung"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
