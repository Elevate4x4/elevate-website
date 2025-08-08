import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function AutoElectrical() {
  return (
    <>
      <Navbar />
      <section className="bg-neutral-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          >
            Auto Electrical Services
          </motion.h1>
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
              'UHF, USB/Type-C, invertors & GPOs',
            ].map((service) => (
              <div key={service} className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
                <p className="text-gray-200">{service}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
            Limited storage means we keep small runs of trays/canopies and core components in stock. Custom orders require a deposit and run on an 8–10 week lead time.
          </div>
        </div>
      </section>
    </>
  )
}