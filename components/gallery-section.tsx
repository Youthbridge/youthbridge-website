export function GallerySection() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-[4/5] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
            >
              Galeriebild {index} Platzhalter
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
