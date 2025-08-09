// components/Navbar.js
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black border-b text-white">
      {/* Top row: logo + hamburger (mobile) */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
        <div className="flex justify-center w-full">
          <Image
            src="/elevate-logo.png"
            alt="Elevate Logo"
            width={1000}
            height={250}
            className="w-[80%] max-w-[900px] h-auto object-contain"
            priority
          />
        </div>

        {/* Hamburger - shown on mobile only */}
        <button
          className="sm:hidden mt-4 inline-flex items-center justify-center rounded p-2 ring-1 ring-white/20 hover:bg-white/10 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden sm:flex justify-center space-x-6 font-semibold text-base pb-4">
        <Link href="/#services" className="hover:underline transition-colors">Our Services</Link>
        <Link href="/#about" className="hover:underline transition-colors">About Us</Link>
        <Link href="/auto-electrical" className="hover:underline transition-colors">Auto Electrical</Link>
        <Link href="/canopies-trays" className="hover:underline transition-colors">Canopies &amp; Trays</Link>
        <Link href="/#contact" className="hover:underline transition-colors">Get a Quote</Link>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 font-semibold">
            <Link href="/#services" className="block hover:underline" onClick={() => setOpen(false)}>Our Services</Link>
            <Link href="/#about" className="block hover:underline" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/auto-electrical" className="block hover:underline" onClick={() => setOpen(false)}>Auto Electrical</Link>
            <Link href="/canopies-trays" className="block hover:underline" onClick={() => setOpen(false)}>Canopies &amp; Trays</Link>
            <Link href="/#contact" className="block hover:underline" onClick={() => setOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
