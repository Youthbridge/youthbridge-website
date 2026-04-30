import Script from "next/script"

export function GallerySection() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-c1ab171a-a799-4b9d-b1af-05d5ed017360" data-elfsight-app-lazy></div>
      </div>
    </section>
  )
}
