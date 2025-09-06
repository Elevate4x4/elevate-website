// components/ProductGrid.tsx
import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const PayButton = dynamic(() => import("@/components/PayButton"), { ssr: false })

type Product = {
  id: string
  name: string
  img: string
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

  const router = useRouter()

  const handleQuoteClick = (productName: string) => {
    setOpenId(null) // close modal first
    const href = `/#contact?interest=${encodeURIComponent(productName)}`
    if (router.pathname === "/") {
      router.push(href, undefined, { shallow: true })
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
        ;(document.querySelector('input[name="name"]') as HTMLInputElement | null)?.focus()
      }, 0)
    } else {
      router.push(href)
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
              {/* Card image (full-bleed, taller by default) */}
              <div className={`relative overflow-hidden rounded-t-2xl bg-neutral-950 ${ratioClass(p)}`}>
                <Image
                  src={p.img}
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
              <div className="relative aspect-[16/10] bg-black">
                <Image
                  src={active.img}
                  alt={active.name}
                  fill
                  sizes="90vw"
                  quality={90}
                  className="object-contain"
                  priority
                />
                {/* full view in modal */}
              </div>

              <div className="p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{active.name}</h3>
                    <p className="text-white/80 mt-1">{active.blurb}</p>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => setOpenId(null)}
                    className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
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

                  {/* Replace Learn more with Buy Now ONLY for Jerry Can Holder */}
                  {active.id === "jerry-holder" ? (
                    <PayButton />
                  ) : (
                    <Link
                      href={{ pathname: "/auto-electrical" }}
                      className="inline-flex items-center rounded-lg border border-white/10 px-5 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                    >
                      Learn more
                    </Link>
                  )}

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
