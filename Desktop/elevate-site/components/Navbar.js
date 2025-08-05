import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm border-b flex flex-col items-center py-4">
      {/* Logo centered and responsive */}
      <div className="w-full flex justify-center items-center mb-2">
        <Image
          src="/elevate-logo.png"
          alt="Elevate Logo"
          width={800}
          height={200}
          className="
            w-44
            sm:w-72
            md:w-[400px]
            lg:w-[600px]
            xl:w-[800px]
            h-auto
            object-contain
            mx-auto
          "
          priority
        />
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-6 font-semibold text-white text-base mt-2">
        <a href="#services" className="hover:underline transition-colors">Our Services</a>
        <a href="#about" className="hover:underline transition-colors">About Us</a>
        <a href="#contact" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">Get a Quote</a>
      </div>
    </nav>
  )
}
