import { motion } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import ProGallery from '@/components/ProGallery'
import ProductGrid from '@/components/ProductGrid'

export default function Home() {
  const [status, setStatus] = useState({ submitting: false, succeeded: false, error: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: "" });
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/xnnzowzl", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      const json = await res.json();
      if (res.ok) {
        setStatus({ submitting: false, succeeded: true, error: "" });
        form.reset();
      } else {
        const msg = (json && json.errors && json.errors[0] && json.errors[0].message) || "Something went wrong.";
        setStatus({ submitting: false, succeeded: false, error: msg });
      }
    } catch (err) {
      setStatus({ submitting: false, succeeded: false, error: "Network error. Please try again." });
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elevate 4x4 Touring Solutions',
    image: '/og-cover.jpg',
    url: 'https://www.elevate4x4.com.au/',
    telephone: '+61 403 903 461',
    address: {
      '@type': 'U13 67-73 Buderim Avenue, Mooloolaba',
      addressLocality: 'Sunshine Coast',
      addressRegion: 'QLD',
      addressCountry: 'AU'
    },
    areaServed: ['Sunshine Coast', 'Queensland', 'Brisbane', 'Gympie', 'Noosa', 'Moreton Bay'],
    description: 'Custom auto electrical, ute trays and canopies on the Sunshine Coast. Touring-ready builds, lithium systems, solar, central locking, and premium fabrication.',
    sameAs: []
  };

  return (
    <>
      <Head>
        <title>Custom 4x4 Canopies, Ute Trays & Auto Electrical | Sunshine Coast QLD | Elevate</title>
        <meta name="description" content="Elevate 4x4 Touring Solutions builds premium custom ute trays and canopies with expert auto electrical on the Sunshine Coast, QLD. Lithium systems, solar, central locking, water tanks, touring fitouts." />
        <meta name="keywords" content="Sunshine Coast canopies, ute trays, 4x4 canopies, auto electrical Sunshine Coast, dual battery, lithium battery systems, solar MPPT, canopy central locking, custom touring builds QLD" />
        <meta property="og:title" content="Elevate 4x4 Touring Solutions" />
        <meta property="og:description" content="Premium custom trays & canopies with expert auto electrical on the Sunshine Coast, QLD." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.elevate4x4.com.au/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Fixed Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-black/95 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <Navbar />
      </div>

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <motion.section
          id="services"
          className="relative min-h-[70vh] md:min-h-[85vh] w-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.35)), url('/service2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
            <motion.div
              className="max-w-3xl text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Custom Auto Electrical, Ute Trays & Canopies — Sunshine Coast
              </h1>
              <p className="mt-5 text-base md:text-xl text-gray-200 leading-relaxed">
                Expert touring and trade fitouts engineered for Australian conditions: battery management systems, 12v fitouts, central locking, diagnostics, and premium aluminium fabrication.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/auto-electrical" className="inline-flex items-center rounded-lg border border-white px-5 py-3 text-sm md:text-base font-medium text-white hover:bg-white hover:text-black transition">
                  Explore Auto Electrical
                </Link>
                <Link href="#canopies-trays" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm md:text-base font-semibold text-black hover:bg-gray-100 transition">
                  Canopies & Trays
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About */}
        <section id="about" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Elevate</h2>
                <p className="mt-5 text-gray-200 leading-relaxed">
                  Elevate 4x4 Touring Solutions is proudly based on the Sunshine Coast, QLD. With over 15 years of combined experience across Mechanical Engineering and Auto Electrical trades, we build tough, reliable solutions for real Australian conditions.
                </p>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  We source quality materials and design every system for serviceability and safety. From custom ute trays and canopies to complete electrical fitouts, each build is engineered to perform when it matters most.
                </p>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Our goal is simple — deliver premium, adventure-ready touring solutions at fair prices, without compromising on craftsmanship or support. Based locally, we specialise in custom canopies, trays, lithium power, solar integration, lighting, diagnostics and OEM upgrades.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="/about.jpg"
                  alt="Elevate team fitting a custom 4x4 canopy and electrical system on the Sunshine Coast"
                  className="w-full max-w-xl mx-auto rounded-2xl shadow-xl ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Canopies & Trays (integrated) */}
        <section id="canopies-trays" className="bg-black text-white">
          {/* Intro / Positioning */}
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Canopies & Trays</h2>
                <p className="mt-5 text-gray-200 leading-relaxed">
                  Elevate canopies and trays combine smart design with robust construction. We use
                  <span className="text-white font-semibold"> 2.5&nbsp;mm 5052 marine‑grade aluminium</span> and
                  <span className="text-white font-semibold"> 50×50 aluminium RHS bracing</span> for strength without the weight penalty.
                  Our integrated systems deliver real‑world practicality for remote touring and demanding trade work.
                </p>
		<h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">Auto Electrical</h2>  
		<p className="mt-4 text-gray-200 leading-relaxed">
    		Expert touring and trade fitouts engineered for Australian conditions: lithium battery systems, solar & MPPT,
    		central locking, diagnostics, and premium aluminium fabrication — all tailored to work seamlessly with our canopy
		    and tray builds.
 		 </p>
                <div className="mt-6 text-sm text-gray-400">
                  Pricing for tray + canopy combos typically lands around
                  <span className="text-white font-semibold"> $11–12k</span> (without electrical fitout).
                </div>
              </div>

              {/* Feature list: bullets on mobile, cards on sm+ (single UL version) */}
              <div>
                <ul className="list-disc list-inside space-y-1 text-white sm:list-none sm:grid sm:grid-cols-2 sm:gap-4">
                  {[
                    '2.5mm 5052 marine grade aluminium construction',
                    '50×50 aluminium RHS bracing for strength',
		    'Full length under‑body trundle drawer',
                    'Integrated 50L fresh water tank',
                    'Canopy Fitouts (full custom battery management systems to suit your needs)',
                    '12V Accessories (winches, central locking, spotlights, UHF, GPS and communications)',
                    'Full length 900mm dimmable LED lights',
                    'Jack‑off canopy legs',


                  ].map((f) => (
                    <li key={f} className="sm:border sm:border-white/10 sm:rounded-lg sm:p-4 sm:bg-white/[0.03]">
                      <span className="text-white">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

{/* Products */}
<div className="mx-auto max-w-7xl px-6 py-16">
  <h3 className="text-2xl font-bold mb-2">Products</h3>
  <p className="text-sm text-gray-300 mb-6">
    Tap a product for estimated pricing and details. Final prices depend on vehicle, options and install.
  </p>

  <ProductGrid
    products={[
      {
        id: 'canopy',
        name: 'Canopy 1200mm-1600mm.',
        img: '/canopies-1.jpg',
        blurb: '5052 aluminium, 50×50 bracing, central locking ready.',
        estPrice: 'AUD $6,000–$8,000',
        lead: 'Stock availiable or 8–10 weeks (custom build-to-order)',
        warranty: '2-yr structural',
        details: [
          '2.5mm 5052 marine-grade aluminium construction',
          '50×50 aluminium RHS strengthening',
          'Uni-strut roof channel, underbody toolboxes',
          '900mm adjustable LED lighting, central locking ready',
          '12v and electrical solutions',
          'Custom kitchen, draw and storage setups',
        ],
      },
      {
        id: 'electrical-fitout',
        name: 'Electrical Fitout (Custom).',
        img: '/auto-electrical-9.jpg',
        blurb: 'Lithium, DC–DC, 12V, solar & distribution.',
        estPrice: 'POA (from $2,500+)',
        lead: '1-2 Weeks',
        warranty: '2-yr auto-electrical',
        details: [
          'Victron/REDARC battery systems',
          'BCDC/DC–DC, MPPT solar, AC chargers',
          'Neat serviceable wiring & labeling',
        ],
	ratio: "aspect-[4/3]"
      },
      {
        id: 'canopy-tray',
        name: 'Canopy and Tray Combo.',
        img: '/canopies-2.jpg',
        blurb: 'Tough purpose built tray/canopy combos',
        estPrice: 'AUD $8,000–$12,000',
        lead: 'Depending on Stock. Can be built to custom order',
        warranty: '1-yr components',
        details: [
          '2.5mm 5052 marine-grade aluminium construction',
          '50×50 aluminium RHS strengthening',
          'Uni-strut roof channel, underbody toolboxes',
          'Integrated ~50L fresh water tank',
          'Jack-off canopy legs, heavy-duty mud flaps',
          'Central locking ready',
	  'Full legth trundle draw',
	  'Landcruiser 79 Series tail-lights',
        ],
	ratio: "aspect-[4/3]"
      },
      {
  id: 'tray-only',
  name: 'Aluminium Tray (Only).',
  img: '/canopies-3.jpg',  // <-- replace with your actual tray photo
  blurb: 'Heavy-duty aluminium tray designed for strength, usability and style.',
  estPrice: 'AUD $3,500–$4,500',
  lead: 'In Stock. Or 8–10 weeks (custom-build-to-order)',
  warranty: '2-yr structural',
  details: [
    '2.5 mm 5052 marine-grade aluminium construction',
    '50×50 aluminium RHS bracing for strength without weight penalty',
    'Integrated under-body toolboxes (optional)',
    'Heavy-duty custom mud flaps included',
    'Designed for canopy integration or standalone use',
    'Powder-coated finish available in black or custom colours',
  ],
  ratio: "2/1", // ✅ wide product photo
      },
      {
        id: 'jerry-holder',
        name: 'Jerry Can Holder.',
        img: '/jerry-can-holder-1.jpg',
        blurb: 'Secure, powder-coated carrier.',
        estPrice: 'AUD $120–$180',
        lead: 'In stock',
        warranty: '2-yr Structural',
        details: [
          'Fits standard 20L jerry cans',
          'Powder-coated 5052 marine grade aluminium',
	  'Light weight custom design',
    	  'Bolt-on installation with universal mounts',
    	  'Drainage cut-outs to prevent rust and water build-up',
        ],
      },
      {
        id: 'spare-wheel',
        name: 'Spare Wheel Holder.',
        img: '/spare-wheel-holder-1.jpg',
        blurb: 'Robust mount for touring setups.',
        estPrice: 'AUD $240–$380',
        lead: 'In stock',
        warranty: '1-yr components',
        details: [
          'Adjustable PCD options',
          'High-vibration safe hardware',
          'Suits canopy/tray rear or side mounts',
        ],
      },
      {
        id: 'pantry',
        name: 'Kitchen Pantry.',
        img: '/gallery-3.jpg',
        blurb: 'Roof access for racks & awnings.',
        estPrice: 'AUD $350–$450',
        lead: 'In stock',
        warranty: '1-yr components',
        details: [
          'Matches canopy profile',
          'Non-slip rungs',
          'Bolt-on or rivnut mount options',
        ],
      },
      {
        id: 'electrical-enclosure',
        name: 'Custom Electrical Enclosures.',
        img: '/gallery-2.jpg',
        blurb: 'Protect your electrics and Elevate your fitout.',
        estPrice: 'AUD $480–$720',
        lead: '2–3 weeks',
        warranty: '1-yr components',
        details: [
          'Made to suit components',
          'Integrated cooling fan to move away hot air',
	  'Riv-nut design for quick access',
          'Light-weight and strong',
	  'Custom colour options availiable',
        ],
      },
    ]}
  />
</div>

          {/* Warranty & Specs */}
          <div className="bg-neutral-950/60">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 text-gray-200 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Warranty</h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  <li className="border border-white/10 rounded p-3 bg-white/[0.03]"><span className="text-white font-semibold">2‑year structural warranty</span> on fabricated canopies & trays</li>
                  <li className="border border-white/10 rounded p-3 bg-white/[0.03]"><span className="text-white font-semibold">2‑year auto‑electrical warranty</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Popular Add‑Ons</h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  {['Fridge units','Pantry & drawer modules','Water pumps & plumbing','LED scene/work lights','Central locking kits','Solar + 12V fitout'].map(x => (
                    <li key={x} className="border border-white/10 rounded p-3 bg-white/[0.03]">{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h3 className="text-3xl font-extrabold mb-3">Ready to design your canopy & tray?</h3>
            <p className="text-gray-300 mb-8">Tell us your vehicle, usage and must‑haves and we’ll spec a package that fits your budget and timeline.</p>
            <a href="#contact" className="inline-block border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Get a Quote</a>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">What Our Customers Say</h2>
            <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
              {[
                {
                  quote: 'The best custom tray and canopy I’ve ever owned — bulletproof build quality and the electrics work flawlessly. 10/10.',
                  author: 'Jake T., Sunshine Coast'
                },
                {
                  quote: "Elevate's attention to detail is unmatched. Their electrical fitout is clean, intuitive, and reliable even in the outback.",
                  author: 'Sarah L., WA'
                },
                {
                  quote: 'Couldn’t be happier. Great communication, a killer result, and their team even handled the extra mods we wanted.',
                  author: 'Mitch D., Brisbane'
                }
              ].map((t, i) => (
                <figure key={i} className="rounded-2xl bg-white p-6 shadow">
                  <blockquote className="text-gray-800 italic">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 font-semibold text-black">— {t.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white text-black">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Contact Us for a Quote</h2>
            <form className="mx-auto mt-8 grid gap-4 text-left" onSubmit={handleSubmit}>
              <label className="text-sm font-medium text-gray-700">
                Your Name
                <input type="text" name="name" placeholder="John Smith" required minLength={2} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70" />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Email
                <input type="email" name="email" placeholder="you@example.com" required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70" />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Phone
                <input type="tel" name="phone" placeholder="+61 4xx xxx xxx" required pattern="^\\+?61\\s?4[0-9]{2}\\s?[0-9]{3}\\s?[0-9]{3}$" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70" inputMode="tel" autoComplete="tel" />
              </label>
              <label className="text-sm font-medium text-gray-700">
                What are you interested in?
                <select name="interest" required defaultValue="" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70">
                  <option value="" disabled>Select an option…</option>
                  <option>Dual battery & DC–DC</option>
                  <option>Lithium battery system</option>
                  <option>Solar setup & MPPT</option>
                  <option>Complete touring electrical</option>
                  <option>Central locking / CAN integration</option>
                  <option>Work lights / scene lighting</option>
                  <option>Canopy & tray build (no electrics)</option>
                  <option>Canopy & tray + full electrics</option>
                  <option>Diagnostics / repair</option>
                  <option>Other (tell us below)</option>
                </select>
              </label>
              <label className="text-sm font-medium text-gray-700">
                Tell us about your build
                <textarea
                  name="message"
                  placeholder="Vehicle, budget, timeline, must-haves (fridge size, inverter, solar, water, etc.)"
                  required
                  minLength={10}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black/70"
                />
              </label>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center justify-center rounded-lg border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>
              <input type="hidden" name="_subject" value="New Quote Request — Elevate 4x4" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="text-sm mt-2" aria-live="polite">
                {status.succeeded && <p className="text-green-600">Thanks — we've got your request and will be in touch soon.</p>}
                {status.error && <p className="text-red-600">Error: {status.error}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-300 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-light.png" alt="Elevate 4x4 logo" className="h-10" />
              <span className="text-lg font-bold text-white">Elevate 4x4 Touring Solutions</span>
            </div>
            <p className="text-sm text-gray-400">
              Innovative, highly‑functional custom touring solutions at competitive pricing. Sunshine Coast, QLD.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#canopies-trays" className="hover:text-white">Canopies & Trays</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Get a Quote</a></li>
              <li><Link href="/auto-electrical" className="hover:text-white">Auto Electrical Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Sunshine Coast, QLD</li>
              <li><a href="mailto:sales@elevate4x4.com.au" className="hover:text-white">sales@elevate4x4.com.au</a></li>
              <li><a href="tel:+61403903461" className="hover:text-white">+61 403 903 461</a></li>
              <li>Mon–Fri: 8:00–4:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>ABN 57 850 251 59</li>
              <li><Link href="/policies#warranty" className="hover:text-white">Warranty Policy</Link></li>
              <li><Link href="/policies#privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/policies#terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-center text-xs py-6 text-gray-400">
          © {new Date().getFullYear()} Elevate 4x4 Touring Solutions. All rights reserved.
        </div>
      </footer>
    </>
  )
}
