import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

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

      {/* Body */}
      <section className="bg-neutral-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-center text-lg">
            From simple upgrades to complete electrical ecosystems, we design for <strong>reliability, serviceability, and safety</strong>. Our builds are neatly loomed, labeled, and fused to standards you can trust out bush.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Dual battery & DC–DC charging',
              'Lithium systems & battery monitors',
              'Solar integration & MPPTs',
              '12V/24V distribution, fusing & relays',
              'Central locking, CANBUS integration',
              'Work lights, beacons, scene lighting',
              'Water pumps, compressors, accessories',
              'UHF, USB/Type-C, inverters & GPOs',
            ].map((service) => (
              <div key={service} className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
                <p className="text-gray-200">{service}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  )
}
