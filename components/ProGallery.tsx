
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

type GalleryImage = {
  src: string
  alt?: string
  caption?: string
}

type Ratio = "16/9" | "3/2" | "4/3" | "1/1"

export default function ProGallery({
  images,
  ratio = "3/2",
  className = "",
}: {
  images: GalleryImage[]
  ratio?: Ratio
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const aspect = useMemo(() => {
    const map: Record<Ratio, string> = {
      "16/9": "aspect-[16/9]",
      "3/2": "aspect-[3/2]",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
    }
    return map[ratio]
  }, [ratio])

  const go = useCallback(
    (dir: number) => {
      setIdx((i) => {
        const n = images.length
        return (i + dir + n) % n
      })
    },
    [images.length]
  )

  // keyboard nav in lightbox
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, go])

  return (
    <div className={className}>
      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => {
                setIdx(i)
                setOpen(true)
              }}
              className="group relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900"
            >
              <div className={`relative ${aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt || `Gallery image ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className={[
                    "object-cover",
                    // unified, premium look:
                    "brightness-105 contrast-110 saturate-110",
                    // hover motion:
                    "transition-transform duration-500 ease-out group-hover:scale-[1.03]",
                  ].join(" ")}
                  priority={i < 2}
                />
                {/* soft gradient + caption */}
                {(img.caption || img.alt) && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3">
                    <p className="text-[12px] md:text-sm text-white/90">
                      {img.caption || img.alt}
                    </p>
                  </div>
                )}
              </div>

              {/* subtle border glow on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20" />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-black/40 ring-1 ring-white/10">
                <Image
                  src={images[idx].src}
                  alt={images[idx].alt || `Gallery image ${idx + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Controls */}
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute -top-3 right-0 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                ✕
              </button>
              <button
                aria-label="Previous"
                onClick={() => go(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={() => go(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              >
                ›
              </button>

              {(images[idx].caption || images[idx].alt) && (
                <p className="mt-3 text-center text-sm text-white/80">
                  {images[idx].caption || images[idx].alt}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
