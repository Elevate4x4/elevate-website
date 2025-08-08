// components/Navbar.js
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm border-b flex flex-col items-center py-4">
      {/* Logo */}
      <div className="w-full flex justify-center items-center mb-2">
        <Image
          src="/elevate-logo.png"
          alt="Elevate Logo"
          width={800}
          height={200}
          className="w-44 sm:w-72 md:w-[400px] lg:w-[600px] xl:w-[800px] h-auto object-contain mx-auto"
          priority
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-6 font-semibold text-white text-base mt-2">
        <Link href="/#services" className="hover:underline transition-colors">
          Our Services
        </Link>
        <Link href="/#about" className="hover:underline transition-colors">
          About Us
        </Link>
        <Link href="/auto-electrical" className="hover:underline transition-colors">
          Auto Electrical
        </Link>
        <Link href="/canopies-trays" className="hover:underline transition-colors">
          Canopies &amp; Trays
        </Link>
        <Link href="/#contact" className="hover:underline transition-colors">
          Get a Quote
        </Link>
      </div>
    </nav>
  )
}
