import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Logo = (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        className="max-w-[800px] sm:max-w-[400px] flex justify-center cursor-pointer"
      >
        <motion.div
          animate={{
            filter: [
              "hue-rotate(220deg) saturate(12) brightness(0.85)",
              "hue-rotate(220deg) saturate(12) brightness(1.1)",
              "hue-rotate(220deg) saturate(12) brightness(0.85)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/elevate-logo.png"
            alt="Elevate Logo"
            width={800}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </Link>
  );

  return (
    <nav className="bg-black border-b text-white relative">
      {/* Mobile header row with logo centered behind burger */}
      <div className="sm:hidden relative flex items-center justify-center px-4" style={{ height: '64px' }}>
        {/* Burger button aligned left */}
        <div className="absolute left-4 z-10">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded p-2 hover:bg-white/10 transition"
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{ width: '48px', height: '48px' }}
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Centered logo */}
        <div className="absolute left-1/2 -translate-x-1/2 z-0">
          {Logo}
        </div>
      </div>

      {/* Desktop nav (center-aligned) */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="py-4">{Logo}</div>
        <div className="flex justify-center space-x-6 font-semibold text-base pb-4">
          <Link href="/#services" className="hover:underline transition-colors">Our Services</Link>
          <Link href="/#about" className="hover:underline transition-colors">About Us</Link>
          <Link href="/auto-electrical" className="hover:underline transition-colors">Auto Electrical</Link>
          <Link href="/canopies-trays" className="hover:underline transition-colors">Canopies &amp; Trays</Link>
          <Link href="/#contact" className="hover:underline transition-colors">Get a Quote</Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden border-t border-white/10 bg-black overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2 font-semibold text-left">
              <Link href="/#services" onClick={() => setOpen(false)} className="block hover:underline">Our Services</Link>
              <Link href="/#about" onClick={() => setOpen(false)} className="block hover:underline">About Us</Link>
              <Link href="/auto-electrical" onClick={() => setOpen(false)} className="block hover:underline">Auto Electrical</Link>
              <Link href="/canopies-trays" onClick={() => setOpen(false)} className="block hover:underline">Canopies &amp; Trays</Link>
              <Link href="/#contact" onClick={() => setOpen(false)} className="block hover:underline">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
