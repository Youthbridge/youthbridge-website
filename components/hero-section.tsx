import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
      {/* Background Image – no aggressive overlay so image stays bright */}
      <Image
        src="/hero-bg.jpg"
        alt="YouthBridge Abschlussfeier"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Very light overlay for text readability only */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Text positioned lower to show faces */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center text-white px-6">
        <h1
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-balance"
          style={{ fontFamily: "var(--font-oswald), sans-serif", letterSpacing: "0.01em" }}
        >
          YouthBridge – Das Erfolgskonzept aus NYC in Bayern
        </h1>
        <p
          className="mt-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "var(--font-oswald), sans-serif", letterSpacing: "0.02em" }}
        >
          Seit 2017 in München
        </p>
      </div>
    </section>
  )
}
