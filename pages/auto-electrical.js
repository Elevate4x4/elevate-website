import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Link from 'next/link'

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
          
          {/* Services — 2 rows of 3 boxes */}
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

      {/* Gallery placeholders - reduced */}
<section className="bg-black text-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-2xl font-bold mb-6">Gallery</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        '/auto-electrical-1.jpg', // real image
        '/auto-electrical-2.jpg',              // placeholder
        null                      // placeholder
      ].map((src, i) => (
        <div key={i} className="w-full h-auto object-contain">
          {src ? (
            <img src={src} alt={`Auto Electrical ${i+1}`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-400">
              Add <code>/auto-electrical-{i+1}.jpg</code>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Warranty */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-3">Warranty</h3>
          <p className="text-gray-300 mb-0">
            <span className="text-white font-semibold">2-year auto-electrical warranty</span> (to be negotiated based on application)
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
