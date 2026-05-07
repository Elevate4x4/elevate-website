// pages/index.js
import { motion } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
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
        const msg = (json?.errors?.[0]?.message) || "Something went wrong.";
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
      '@type': 'PostalAddress',
      streetAddress: 'U13 67-73 Buderim Ave',
      addressLocality: 'Mooloolaba',
      addressRegion: 'QLD',
      addressCountry: 'AU'
    },
    areaServed: ['Sunshine Coast', 'Queensland', 'Brisbane', 'Gympie', 'Noosa', 'Moreton Bay'],
    description: 'Custom auto electrical, ute trays and canopies on the Sunshine Coast.',
    sameAs: []
  };

  return (
    <>
      <Head>
        <title>Custom 4x4 Canopies, Ute Trays & Auto Electrical | Sunshine Coast QLD | Elevate</title>
        <meta name="description" content="Elevate 4x4 Touring Solutions builds premium custom ute trays and canopies with expert auto electrical on the Sunshine Coast, QLD." />
        <meta property="og:title" content="Elevate 4x4 Touring Solutions" />
        <meta property="og:description" content="Premium custom trays & canopies with expert auto electrical on the Sunshine Coast, QLD." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.elevate4x4.com.au/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Fixed Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-black/95 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <Navbar />
      </div>

      <main className="pt-20 md:pt-24 bg-black">

        {/* ── HERO ── */}
        <motion.section
          id="services"
          className="relative min-h-[88vh] w-full flex items-end bg-cover bg-no-repeat bg-[position:center_55%] md:bg-[position:center_35%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.95) 100%), url('/service2.jpg')" }}
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-28">
            <motion.div
              className="max-w-3xl text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="section-label text-white/80">Sunshine Coast, QLD &nbsp;·&nbsp; Custom Touring Fitouts</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mt-2 mb-8">
                Built for<br />
                <span className="text-white/50">the Road</span>
              </h1>
              <div className="w-12 h-px bg-white/25 mb-7" />
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-light mb-6">
                Premium aluminium canopies, ute trays and auto electrical fitouts — engineered for Australian touring and trade.
              </p>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-white/50 tracking-wide">5-star rated · Sunshine Coast locals</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center bg-white text-black px-7 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition">
                  Get a Free Quote →
                </a>
                <Link href="/canopies-trays" className="inline-flex items-center border border-white/30 text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-white/10 transition">
                  Canopies & Trays
                </Link>
                <Link href="/auto-electrical" className="inline-flex items-center border border-white/30 text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-white/10 transition">
                  Auto Electrical
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── TRUST BAR ── */}
        <section className="bg-neutral-950 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { num: '2yr', label: 'Structural & Electrical Warranty' },
                { num: '15+', label: 'Years Combined Experience' },
                { num: '1–2wk', label: 'Electrical Turnaround' },
                { num: 'Local', label: 'Mooloolaba, Sunshine Coast' },
              ].map((item) => (
                <div key={item.num} className="flex flex-col items-center md:items-start px-6 py-4 first:pl-0">
                  <span className="trust-num text-white">{item.num}</span>
                  <span className="text-xs text-white/40 tracking-widest uppercase mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-black text-white border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <span className="section-label text-white/40">01 / About</span>
                <h2 className="text-5xl md:text-6xl font-black mt-2 mb-8">Elevate<br />4×4 Touring</h2>
                <div className="w-8 h-px bg-white/20 mb-8" />
                <p className="text-white/65 leading-relaxed font-light mb-4">
                  Based on the Sunshine Coast, QLD — with over 15 years of combined experience across Mechanical Engineering and Auto Electrical trades.
                </p>
                <p className="text-white/65 leading-relaxed font-light mb-4">
                  Every system is designed for serviceability and safety. From custom ute trays and canopies to complete electrical fitouts — premium builds at fair prices, without compromising on craftsmanship.
                </p>
                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center bg-white text-black px-7 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition">
                    Start Your Build →
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/about.jpg"
                  alt="Elevate team fitting a custom 4x4 canopy"
                  className="w-full max-w-xl mx-auto shadow-2xl ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="bg-neutral-950 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex justify-between items-end mb-10 pb-8 border-b border-white/10">
              <div>
                <span className="section-label text-white/40">02 / Products</span>
                <h2 className="text-5xl md:text-6xl font-black mt-2">What We Build</h2>
              </div>
              <p className="text-sm text-white/40 max-w-xs text-right hidden md:block">
                Tap any product for pricing, lead times and inclusions.
              </p>
            </div>
            <ProductGrid
              products={[
                {
                  id: 'canopy',
                  name: 'Canopy 1200mm-1600mm',
                  imgs: ['/canopies-1.jpg', '/full-canopy-fitout.jpg'],
                  blurb: '5052 aluminium, 50×50 bracing, central locking ready.',
                  estPrice: 'AUD $6,000–$8,000',
                  lead: 'Stock available now · Custom builds 3 months',
                  warranty: '2-yr structural',
                  details: ['2.5mm 5052 marine-grade aluminium construction', '50×50 aluminium RHS strengthening', 'Uni-strut roof channel, underbody toolboxes', '900mm adjustable LED lighting, central locking ready', '12V and electrical solutions', 'Custom kitchen, drawer and storage setups'],
                },
                {
                  id: 'electrical-fitout',
                  name: 'Electrical Fitout (Custom)',
                  imgs: ['/auto-electrical-9.jpg', '/custom-enclosure.jpg', '/fuse-blocks-and-outlets.jpg', '/electrical-enclosure-4.jpg', '/auto-electrical-1.jpg', '/auto-electrical-2.jpg', '/auto-electrical-8.jpg'],
                  blurb: 'Lithium, DC–DC, 12V, solar & distribution.',
                  estPrice: 'From $2,500+',
                  lead: '1–2 Weeks',
                  warranty: '2-yr auto-electrical',
                  details: ['Victron/REDARC battery systems', 'BCDC/DC–DC, MPPT solar, AC chargers', 'Neat serviceable wiring & labelling'],
                  ratio: "4/3"
                },
                {
                  id: 'canopy-tray',
                  name: 'Canopy and Tray Combo',
                  imgs: ['/canopies-2.jpg', '/full-canopy-accessories.png', '/canopies-3.jpg', '/canopy-tray.png', '/canopy-tray-2.png'],
                  blurb: 'Tough purpose-built tray/canopy combos.',
                  estPrice: 'AUD $10,000–$12,000',
                  lead: 'Stock available now · Custom builds 3 months',
                  warranty: '2-yr structural',
                  details: ['2.5mm 5052 marine-grade aluminium construction', '50×50 aluminium RHS strengthening', 'Uni-strut roof channel, underbody toolboxes', 'Integrated ~50L fresh water tank', 'Jack-off canopy legs, heavy-duty mud flaps', 'Central locking ready', 'Full length trundle drawer', 'Landcruiser 79 Series tail-lights'],
                  ratio: "4/3"
                },
                {
                  id: 'tray-only',
                  name: 'Aluminium Tray (Only)',
                  imgs: ['/canopies-3.jpg'],
                  blurb: 'Heavy-duty aluminium tray designed for strength, usability and style.',
                  estPrice: 'AUD $5,000–$6,000',
                  lead: 'Stock available now · Custom builds 3 months',
                  warranty: '2-yr structural',
                  details: ['2.5mm 5052 marine-grade aluminium construction', '50×50 aluminium RHS bracing for strength without weight penalty', 'Integrated under-body toolboxes (optional)', 'Heavy-duty custom mud flaps included', 'Designed for canopy integration or standalone use', 'Powder-coated finish available in black or custom colours'],
                  ratio: "2/1"
                },
                {
                  id: 'jerry-holder',
                  name: 'Jerry Can Holder',
                  imgs: ['/jerry-can-holder-1.jpg', '/jerry-can-holder.png'],
                  blurb: 'Secure, powder-coated carrier.',
                  estPrice: 'AUD $120–$150',
                  lead: 'In stock',
                  warranty: '2-yr structural',
                  details: ['Fits standard 20L jerry cans', 'Powder-coated 5052 marine grade aluminium', 'Lightweight custom design', 'Bolt-on installation with universal mounts', 'Drainage cut-outs to prevent rust and water build-up'],
                },
                {
                  id: 'spare-wheel',
                  name: 'Spare Wheel Holder',
                  imgs: ['/spare-wheel-holder-1.jpg'],
                  blurb: 'Robust mount for touring setups.',
                  estPrice: 'AUD $220–$300',
                  lead: 'In stock',
                  warranty: '2-yr structural',
                  details: ['Adjustable PCD options', 'High-vibration safe hardware', 'Suits canopy/tray rear or side mounts'],
                },
                {
                  id: 'pantry',
                  name: 'Kitchen Pantry',
                  imgs: ['/gallery-3.jpg', '/pantry-3.png', '/pantry-2.png'],
                  blurb: 'Slide-out camp kitchen pantry for serious tourers.',
                  estPrice: 'AUD $400–$500',
                  lead: 'In stock',
                  warranty: '2-yr structural',
                  details: ['Matches canopy profile', 'Non-slip rungs', 'Bolt-on or rivnut mount options'],
                },
                {
                  id: 'fridge-surround',
                  name: 'Fridge Surround',
                  imgs: ['/fridge-surround-rendered.png', '/fridge-surround-3.jpg', '/fridge-surround-bench-2.jpg', '/fridge-surround-4.jpg'],
                  blurb: '85L fridge surround with optional slide-out bench.',
                  estPrice: 'AUD $500–$600',
                  lead: 'In stock',
                  warranty: '2-yr structural',
                  details: ['Silver or black (5052 marine grade aluminium)', 'Engineered ventilation for maximum efficiency', 'Integrated wood slide-out bench (optional)', 'Custom built to suit 85L fridges from all local brands', 'Bolt-on or rivnut mount options'],
                },
                {
                  id: '900mm-light',
                  name: '900mm LED Lights',
                  imgs: ['/900mm-light.png', '/light-2.png'],
                  blurb: 'Dimmable strip lights for work and camping.',
                  estPrice: 'AUD $60–$90',
                  lead: 'In stock',
                  warranty: '2-yr components',
                  details: ['Aluminium design', '5-way dimmable', 'Multiple colour configurations for insect control', 'Lightweight and strong', 'Easy mounting and connection'],
                },
              ]}
            />
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-black text-white border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <span className="section-label text-white/40">03 / Services</span>
            <div className="grid md:grid-cols-2 gap-0 mt-10 border border-white/10">
              <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-4xl font-black mb-6">Canopies & Trays</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6">
                  Smart design meets robust construction. We use <span className="text-white font-normal">2.5mm 5052 marine-grade aluminium</span> and <span className="text-white font-normal">50×50 RHS bracing</span> — strength without the weight penalty.
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {['Marine-grade 5052 aluminium', '50×50 RHS bracing', '50L fresh water tank', 'Central locking ready', 'Full-length trundle drawer', '900mm dimmable LEDs'].map(f => (
                    <li key={f} className="text-white/55 text-sm pl-3 border-l border-white/10 font-light">{f}</li>
                  ))}
                </ul>
                <p className="text-white/40 text-sm mb-6">Tray + canopy combos from <span className="text-white">$11–12k</span> · Stock canopies available now</p>
                <Link href="/canopies-trays" className="inline-flex items-center border border-white/25 text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-white/10 transition">
                  View Canopies & Trays →
                </Link>
              </div>
              <div className="p-10">
                <h3 className="text-4xl font-black mb-6">Auto Electrical</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6">
                  Lithium battery systems, solar & MPPT, central locking, diagnostics, and clean wiring — all tailored to work seamlessly with our canopy and tray builds.
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {['Dual battery systems', 'Lithium & DC–DC', 'MPPT solar', 'Canopy 12V fitouts', 'Central locking', 'Diagnostics & repair'].map(f => (
                    <li key={f} className="text-white/55 text-sm pl-3 border-l border-white/10 font-light">{f}</li>
                  ))}
                </ul>
                <p className="text-white/40 text-sm mb-6">Electrical fitouts from <span className="text-white">$2,500</span> · 2-year warranty</p>
                <Link href="/auto-electrical" className="inline-flex items-center border border-white/25 text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-white/10 transition">
                  View Auto Electrical →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" className="bg-neutral-950 border-t border-white/10 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="flex justify-between items-end mb-10 pb-8 border-b border-white/10">
              <div>
                <span className="section-label text-white/40">04 / Reviews</span>
                <h2 className="text-5xl md:text-6xl font-black mt-2">From Our<br />Customers</h2>
              </div>
              <div className="text-right hidden md:block">
                <div className="text-yellow-400 text-2xl mb-1">★★★★★</div>
                <span className="text-xs text-white/40 tracking-widest uppercase">5-star · Sunshine Coast</span>
              </div>
            </div>
            <div className="grid gap-px md:grid-cols-3 bg-white/10">
              {[
                { quote: "These legends supplied and fitted some of their strip lights in my canopy and I couldn't be happier with the result. Great service and very neat install. 10/10 recommend.", author: 'Drew Pitcher', location: 'Sunshine Coast' },
                { quote: "Couple of legends doing good things! Got a dual battery and inverter set up for my work 4x4. Great service and well priced. I'd use them again.", author: 'Kobi Lynn', location: 'Sunshine Coast' },
                { quote: "Reached out after seeing a Facebook ad. They were more than helpful in finding the right solution for me. Can't fault their quality or service. Have recommended them to multiple mates.", author: 'Riley Korac', location: 'Sunshine Coast' },
              ].map((t, i) => (
                <figure key={i} className="bg-neutral-950 p-10 flex flex-col justify-between min-h-64">
                  <blockquote className="text-white/60 leading-relaxed font-light text-sm">"{t.quote}"</blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-white font-semibold text-sm tracking-wide uppercase">{t.author}</div>
                    <div className="text-white/35 text-xs tracking-widest uppercase mt-1">{t.location}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#contact" className="inline-flex items-center bg-white text-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition">
                Get Your Build Started →
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-black border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Left info */}
              <div>
                <span className="section-label text-white/40">05 / Contact</span>
                <h2 className="text-5xl md:text-7xl font-black text-white mt-2 mb-8">Get a<br />Free Quote</h2>
                <div className="w-8 h-px bg-white/20 mb-8" />
                <p className="text-white/60 font-light leading-relaxed mb-10">
                  Tell us your vehicle, how you use it, and your budget. We'll spec the right package and get back to you within 1 business day.
                </p>
                <div className="border border-yellow-400/30 bg-yellow-400/5 px-5 py-4 mb-8">
                  <p className="text-yellow-400 text-xs tracking-widest uppercase font-semibold mb-1">⏱ Current Lead Time</p>
                  <p className="text-white/70 text-sm font-light"><span className="text-white font-normal">Custom-built canopies</span> are currently running a <span className="text-white font-normal">3-month wait</span>. Stock canopies are available now with no wait. Get in touch early to secure your spot in the build queue.</p>
                </div>
                {[
                  { label: 'Phone', value: '+61 403 903 461', href: 'tel:+61403903461' },
                  { label: 'Email', value: 'sales@elevate4x4.com.au', href: 'mailto:sales@elevate4x4.com.au' },
                  { label: 'Hours', value: 'Mon–Fri · 8:00am – 4:00pm', href: null },
                  { label: 'Location', value: 'Mooloolaba, Sunshine Coast QLD', href: null },
                ].map(item => (
                  <div key={item.label} className="flex gap-8 py-4 border-b border-white/10">
                    <span className="text-white/35 text-xs tracking-widest uppercase w-20 pt-0.5 shrink-0">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="text-white text-sm font-light hover:text-white/70">{item.value}</a>
                      : <span className="text-white text-sm font-light">{item.value}</span>
                    }
                  </div>
                ))}
              </div>

              {/* Right form */}
              <form className="grid gap-4 text-left" onSubmit={handleSubmit}>
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Name
                  <input type="text" name="name" placeholder="John Smith" required minLength={2}
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 placeholder:text-white/20" />
                </label>
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 placeholder:text-white/20" />
                </label>
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Phone
                  <input type="tel" name="phone" placeholder="+61 4xx xxx xxx" required
                    pattern="^(0|61|\+61)[0-9\s]{6,}$" inputMode="tel" autoComplete="tel"
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 placeholder:text-white/20" />
                </label>
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Interested In
                  <select name="interest" required defaultValue=""
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 appearance-none">
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
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Your Vehicle
                  <input type="text" name="vehicle" placeholder="e.g. 2022 Toyota HiLux SR5 Double Cab" required
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 placeholder:text-white/20" />
                </label>
                <label className="text-xs tracking-widest uppercase text-white/50 block">
                  Tell Us More
                  <textarea name="message" placeholder="Budget, timeline, must-haves (fridge size, inverter, solar, water, etc.)…"
                    required minLength={10} rows={4}
                    className="mt-2 w-full bg-neutral-900 border border-white/15 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-white/40 placeholder:text-white/20 resize-none" />
                </label>
                <input type="hidden" name="_subject" value="New Quote Request — Elevate 4x4" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <button type="submit" disabled={status.submitting}
                  className="w-full bg-white text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2">
                  {status.submitting ? 'Sending…' : 'Send Quote Request →'}
                </button>
                <div aria-live="polite">
                  {status.succeeded && <p className="text-green-400 text-sm text-center tracking-wide">✓ Received — we'll be in touch within 1 business day.</p>}
                  {status.error && <p className="text-red-400 text-sm">Error: {status.error}</p>}
                </div>
                <p className="text-xs text-center text-white/25 tracking-wide">No spam. No obligation. Just a straight quote.</p>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-neutral-950 text-white/50 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <img src="/logo-light.png" alt="Elevate 4x4 logo" className="h-8 mb-4 opacity-80" />
            <p className="text-sm text-white/35 font-light leading-relaxed max-w-xs">
              Custom touring solutions at competitive pricing. Sunshine Coast, QLD.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/profile.php?id=61580900101247" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase hover:text-white transition">Facebook</a>
              <a href="https://www.instagram.com/elevate4x4/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase hover:text-white transition">Instagram</a>
            </div>
          </div>
          {[
            { heading: 'Pages', links: [{ label: 'About Us', href: '#about' }, { label: 'Canopies & Trays', href: '/canopies-trays' }, { label: 'Auto Electrical', href: '/auto-electrical' }, { label: 'Get a Quote', href: '#contact' }] },
            { heading: 'Contact', links: [{ label: '+61 403 903 461', href: 'tel:+61403903461' }, { label: 'sales@elevate4x4.com.au', href: 'mailto:sales@elevate4x4.com.au' }, { label: 'Mon–Fri · 8am–4pm', href: null }] },
            { heading: 'Legal', links: [{ label: 'ABN 57 850 251 59', href: null }, { label: 'Warranty Policy', href: '/policies#warranty' }, { label: 'Privacy Policy', href: '/policies#privacy' }, { label: 'Terms & Conditions', href: '/policies#terms' }] },
          ].map(col => (
            <div key={col.heading}>
              <div className="text-xs tracking-widest uppercase text-white/25 mb-4">{col.heading}</div>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.href
                      ? (link.href.startsWith('/') || link.href.startsWith('#')
                          ? <Link href={link.href} className="text-sm text-white/40 hover:text-white transition font-light">{link.label}</Link>
                          : <a href={link.href} className="text-sm text-white/40 hover:text-white transition font-light">{link.label}</a>)
                      : <span className="text-sm text-white/40 font-light">{link.label}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 text-center py-6">
          <span className="text-xs tracking-widest uppercase text-white/25">© {new Date().getFullYear()} Elevate 4x4 Touring Solutions · All rights reserved</span>
        </div>
      </footer>
    </>
  )
}