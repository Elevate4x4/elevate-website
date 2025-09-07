// components/ProductGrid.tsx
import { useMemo, useState, useEffect } from "react"
import Image from "next/image"

type Product = {
  id: string
  name: string
  /** Cover image will be imgs[0] */
  imgs: string[]
  blurb: string
  estPrice: string
  details: string[]
  lead?: string
  warranty?: string
  /** Optional: card aspect ratio. Use "2/1" for wide or "4/3" (default) for taller. */
  ratio?: "2/1" | "4/3"
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const active = useMemo(() => products.find(p => p.id === openId) || null, [openId, products])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    // Reset selected image when opening a new product
    if (openId) setSelectedIndex(0)
  }, [openId])

  const handleQuoteClick = (productName: string) => {
    setOpenId(null);
    if (typeof window !== "undefined") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      const url = new URL(window.location.href);
      url.hash = "contact";
      url.searchParams.set("interest", productName);
      window.history.replaceState({}, "", url.toString());
    }
  }

  const ratioClass = (p: Product) => (p.ratio === "2/1" ? "aspect-[2/1]" : "aspect-[4/3]")

  return (
    <div className="w-full">
      {/* Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpenId(p.id)}
              className="group w-full text-left rounded-2xl bg-neutral-900 ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              {/* Card image (cover) */}
              <div className={`relative overflow-hidden rounded-t-2xl bg-neutral-950 ${ratioClass(p)}`}>
                <Image
                  src={p.imgs[0]}
                  alt={p.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-white font-semibold text-base md:text-lg">{p.name}</h4>
                  <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {p.estPrice}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.blurb}</p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  {p.lead && <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Lead: {p.lead}</span>}
                  {p.warranty && <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Warranty: {p.warranty}</span>}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/50">Click for details</span>
                  <span className="text-white/80 group-hover:text-white">›</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
        >
          <div
            className="mx-auto h-full max-w-3xl px-4 flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-950 ring-1 ring-white/10">
              {/* Main image */}
              <div className="relative aspect-[16/10] bg-black">
                <Image
                  src={active.imgs[selectedIndex]}
                  alt={active.name}
                  fill
                  sizes="90vw"
                  quality={90}
                  className="object-contain"
                  priority
                />
                {/* Prev / Next */}
                {active.imgs.length > 1 && (
                  <>
                    <button
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                      onClick={() => setSelectedIndex((i) => (i - 1 + active.imgs.length) % active.imgs.length)}
                    >
                      ‹
                    </button>
                    <button
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                      onClick={() => setSelectedIndex((i) => (i + 1) % active.imgs.length)}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="p-6 text-white">
                {/* Thumbnails */}
                {active.imgs.length > 1 && (
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {active.imgs.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedIndex(i)}
                        className={`relative w-16 h-16 rounded border ${i === selectedIndex ? "border-white" : "border-white/30"}`}
                        aria-label={`Show image ${i + 1}`}
                      >
                        <Image src={img} alt={`${active.name} ${i + 1}`} fill className="object-cover rounded" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{active.name}</h3>
                    <p className="text-white/80 mt-1">{active.blurb}</p>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => setOpenId(null)}
                    className="rounded-full bg-white/10 px-3 py-1 text-white hover:bgWHITE/20"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4 grid gap-2 text-sm">
                  <div>
                    <span className="text-white/60">Estimated price:</span>{" "}
                    <span className="font-semibold">{active.estPrice}</span>
                  </div>
                  {active.lead && <div><span className="text-white/60">Lead time:</span> {active.lead}</div>}
                  {active.warranty && <div><span className="text-white/60">Warranty:</span> {active.warranty}</div>}
                </div>

                <ul className="mt-5 grid gap-2 text-sm list-disc list-inside text-white/90">
                  {active.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleQuoteClick(active.name)}
                    className="inline-flex items-center rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
                  >
                    Get a Quote
                  </button>
                  <button
                    onClick={() => setOpenId(null)}
                    className="inline-flex items-center rounded-lg border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
