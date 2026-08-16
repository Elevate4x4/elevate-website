import { motion } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import ProGallery from '@/components/ProGallery'

export default function CanopiesTrays() {
  return (
    <>
      <Head>
        <title>Custom Aluminium Canopies & Ute Trays | Sunshine Coast QLD | Elevate</title>
        <meta name="description" content="Premium 5052 marine-grade aluminium canopies and ute trays, built for Australian touring and trade. Stock and custom builds on the Sunshine Coast, QLD." />
        <meta property="og:title" content="Custom Canopies & Ute Trays | Elevate 4x4 Touring Solutions" />
        <meta property="og:description" content="Lightweight strength, serious functionality. Aluminium canopies and trays built for Aussie touring and trade." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.elevate4x4.com.au/canopies-trays" />
      </Head>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.4)), url('/canopy-hero.jpg')",
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
            Canopies & Trays
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Lightweight strength. Serious functionality. Built for Aussie touring and trade.
          </p>
        </motion.div>
      </section>

      {/* Intro / Positioning */}
      <section className="bg-black text-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Engineered for Real Use</h2>
            <p className="leading-relaxed">
              Elevate canopies and trays combine smart design with robust construction. We use
              <span className="text-white font-semibold"> 2.5&nbsp;mm 5052 marine grade aluminium</span> and
              <span className="text-white font-semibold"> 50×50 aluminium RHS bracing</span> for strength without the weight penalty. 
              Our integrated systems deliver real-world practicality for remote touring and demanding trade work.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Pricing for tray + canopy combos typically lands around
              <span className="text-white font-semibold"> $11–12k</span> (without electrical fitout).
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
'Full length underbody trundle drawer',
'Integrated 50L fresh water tank',
              'Central locking ready',
              'Uni-strut channel roof mounting',
              'Under-body toolboxes',
              'Heavy-duty mud flaps',
              'Full length 900mm dimmable LED lights',
              'Jack-off canopy legs',
              '2.5mm 5052 marine grade aluminium construction',
              '50×50 aluminium RHS bracing for strength',
            ].map((f) => (
              <li key={f} className="border border-white/10 rounded-lg p-4 bg-white/[0.03]">
                <span className="text-white">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Layouts / Options */}
      <section className="bg-neutral-950 text-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Your Build, Your Way</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Touring Setup',
                bullets: [
                  'Drawer system + pantry module',
                  'Fridge + enclosure',
                  'Scene lighting & water pump ready',
                ],
              },
              {
                title: 'Trade Setup',
                bullets: [
                  'Under-body boxes & ladder racks',
                  'Central locking',
		  '240v battery charging & tool storage',
                ],
              },
              {
                title: 'Hybrid / Custom',
                bullets: [
                  'Electrical 240v & 12v fitout',
                  'Kitchen and drawer setups',
                  'Custom mounts & brackets',
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-white/10 p-6 bg-white/[0.03]">
                <h4 className="text-white font-semibold mb-3">{card.title}</h4>
                <ul className="space-y-2 text-sm">
                  {card.bullets.map((b) => (
                    <li key={b} className="text-gray-300">• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Gallery</h3>
          <ProGallery
            ratio="4/3"
            images={[
              { src: '/canopies-1.jpg' },
              { src: '/auto-electrical-9.jpg' },
              { src: '/gallery-3.jpg' },
              { src: '/fridge-surround-3.jpg' },
              { src: '/full-canopy-accessories.png' },
              { src: '/full-canopy-fitout.jpg' },
            ]}
          />
        </div>
      </section>


      {/* Warranty & Specs */}
      <section className="bg-neutral-950 text-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Warranty</h3>
            <ul className="space-y-2 text-sm">
              <li>• <span className="text-white font-semibold">2-year structural warranty</span> on fabricated canopies & trays</li>
              <li>• <span className="text-white font-semibold">2-year auto-electrical warranty</span> </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Popular Add‑Ons</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {['Fridge units', 'Pantry & drawer modules', 'Water pumps & plumbing', 'LED scene/work lights', 'Central locking kits', 'Solar + 12V Fitout'].map(x => (
                <li key={x} className="border border-white/10 rounded p-3 bg-white/[0.03]">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-3">Ready to design your canopy & tray?</h3>
          <p className="text-gray-300 mb-8">
            Tell us your vehicle, usage and must-haves and we’ll spec a package that fits your budget and timeline.
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
