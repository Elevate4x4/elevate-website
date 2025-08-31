// pages/auto-electrical.js
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import ProGallery from '@/components/ProGallery'

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
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex items-center justify-center text-center"
              >
                <span className="text-white text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black text-white py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold mb-6">Gallery</h3>
          <ProGallery
            ratio="3/2"
            images={[
              { src: '/auto-electrical-9.jpg', caption: '240V and 12V Power Outlets' },
              { src: '/auto-electrical-1.jpg', caption: '240V and 12V Power Outlets' },
              { src: '/gallery-2.jpg', caption: 'Custom Electrical Enclosure' },
              { src: '/auto-electrical-8.jpg', caption: 'BT-50 Behind Seat Lithium and Inverter Upgrade' },
              { src: '/auto-electrical-2b.jpg', caption: 'Full Canopy System - Electrical Panel' },
              { src: '/auto-electrical-2.jpg', caption: 'Full Canopy System - Control Panel' },
              { src: '/auto-electrical-3.jpg', caption: 'Full Canopy System - Fridge/Pantry Combo' },
              { src: '/auto-electrical-4.jpg', caption: 'Hidden Secondary Battery Under False-Floor - Prado' },
              { src: '/auto-electrical-5.jpg', caption: 'Compact Caravan Lithium Upgrade' },
              { src: '/auto-electrical-6.jpg', caption: 'Under Lounge Caravan Lithium Upgrade' },
              { src: '/auto-electrical-7.jpg', caption: 'Start Battery Distribution Block' },
              { src: '/auto-electrical-1b.jpg', caption: 'Full Victron Caravan Lithium/Solar Upgrade' },
            ]}
          />
        </div>
      </section>

      {/* Warranty */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-3">Warranty</h3>
          <p className="text-gray-300 mb-0">
            <span className="text-white font-semibold">2-year auto-electrical warranty</span>
          </p>
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
