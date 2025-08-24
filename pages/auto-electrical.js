import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

// --- Responsive Slider with spacing, uniform height, and hover captions ----
function AutoSlider({ images = [], autoMs = 4000 }) {
  const [index, setIndex] = useState(0)
  const [vw, setVw] = useState(0)
  const timerRef = useRef(null)
  const isHovering = useRef(false)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const wrapRef = useRef(null)
  const [activeCaption, setActiveCaption] = useState(null)

  const slides = useMemo(() => images.filter(Boolean), [images])
  const count = slides.length

  // Responsive columns + row height
  const getLayout = () => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280
    if (w < 768) return { cols: 2, h: 420 }
    if (w < 1024) return { cols: 3, h: 500 }
    return { cols: 3, h: 580 }
  }
  const [layout, setLayout] = useState(getLayout())

  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) setVw(wrapRef.current.clientWidth)
      setLayout(getLayout())
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const go = (dir = 1) => {
    setIndex((i) => {
      const max = Math.max(0, count - layout.cols)
      let next = i + dir
      if (next < 0) next = max
      if (next > max) next = 0
      return next
    })
  }

  useEffect(() => {
    if (!count) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isHovering.current) go(1)
    }, autoMs)
    return () => clearInterval(timerRef.current)
  }, [count, autoMs, layout.cols])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0 }
  const onTouchMove = (e) => { touchDeltaX.current = e.touches[0].clientX - touchStartX.current }
  const onTouchEnd = (i) => {
    const dx = touchDeltaX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    else setActiveCaption(activeCaption === i ? null : i) // toggle caption on tap
  }

  if (!count) return null

  const cellW = vw / layout.cols
  const offsetX = -(index * cellW)

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      <div
        className="flex will-change-transform"
        style={{ transform: `translateX(${offsetX}px)`, transition: 'transform 500ms ease-out' }}
      >
        {slides.map((item, i) => (
          <div key={i} className="shrink-0 px-1" style={{ width: `${cellW}px` }}>
            <div
              className="relative flex h-full items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10 group"
              style={{ height: `${layout.h}px` }}
              onTouchEnd={() => onTouchEnd(i)}
            >
              <img
                src={typeof item === 'string' ? item : item.src}
                alt={typeof item === 'string' ? `Auto electrical gallery image ${i + 1}` : item.alt}
                className="max-h-full max-w-full object-contain select-none"
                draggable={false}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              {/* Caption overlay - only visible on hover or tap */}
              {item.caption && (
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs md:text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeCaption === i ? 'opacity-100' : ''}`}
                >
                  {item.caption}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
      >
        ›
      </button>
    </div>
  )
}

export default function AutoElectrical() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section
        className="relative min-h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.4)), url('/auto-electrical-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        <motion.div
          className="relative z-10 p-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Auto Electrical Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Clean, reliable power systems and wiring — built for Aussie touring and trade.
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="bg-black text-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Built for Reliability & Safety</h2>
          <p className="leading-relaxed mb-12">
            From simple upgrades to complete battery management systems, we design for <strong>reliability</strong>, <strong>serviceability</strong>, and <strong>safety</strong>. 
            Our builds are neatly installed, fully customisable, and built to a standard you can trust when exploring our beautiful country.
          </p>
          <h3 className="text-2xl font-bold text-white mb-6">Your Build, Your Way</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Canopy Fitouts (full custom battery management systems to suit your needs)',
              'Towing Solutions (anderson plugs, reverse cameras, trailer plugs and electric braking systems)',
              '12V Accessories (winches, central locking, spotlights, UHF, GPS and communications)',
              'Caravan and Solar Upgrades (battery management and full off grid systems)',
              'Dual Battery Systems  (full custom solutions tailored to your vehicle and needs)',
              'DIY (Using market leading brands, we can supply all electrical components and battery management systems at competitve prices)',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex items-center justify-center text-center">
                <span className="text-white text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sliding Gallery Responsive */}
      <section className="bg-black text-white py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold mb-6">Gallery</h3>
          <AutoSlider
            autoMs={4500}
            images={[
              { src: '/auto-electrical-1.jpg', caption: '240V and 12V Power Outlets' },
              { src: '/gallery-2.jpg', caption: 'Custom Electrical Enclosure' },
              { src: '/auto electrical 8.jpg', caption: 'BT-50 Behind Seat Lithium and Inverter Upgrade' },
              { src: '/auto electrical 2.jpg', caption: 'Full Canopy System - Electrical Panel' },
              { src: '/auto-electrical-2.jpg', caption: 'Full Canopy System - Control Panel' },
              { src: '/auto electrical 3.jpg', caption: 'Full Canopy System - Fridge/Pantry Combo' },
              { src: '/auto electrical 4.jpg', caption: 'Hidden Secondary Battery Under False-Floor - Prado' },
              { src: '/auto electrical 5.jpg', caption: 'Compact Caravan Lithium Upgrade' },
              { src: '/auto electrical 6.jpg', caption: 'Under Lounge Caravan Lithium Upgrade' },
              { src: '/auto electrical 7.jpg', caption: 'Start Battery Distribution Block' },
              { src: '/auto electrical 1.jpg', caption: 'Full Victron Caravan Lithium/Solar Upgrade' },
            ]}
          />
        </div>
      </section>

      {/* Warranty */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-3">Warranty</h3>
          <p className="text-gray-300 mb-0">
            <span className="text-white font-semibold">2-year auto-electrical warranty</span>           </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-3">Ready to upgrade your auto electrical setup?</h3>
          <p className="text-gray-300 mb-8">
            Tell us your vehicle, usage, and must-haves and we’ll spec a package that fits your budget and timeline.
          </p>
          <Link
            href="/#contact"
            className="inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  )
}