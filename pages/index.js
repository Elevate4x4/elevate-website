// pages/index.js
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="services"
        className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/service2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        <motion.div
          className="relative z-10 p-10 rounded max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Auto Electrical and Vehicle Builds for Recreation and Trade
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Expertly designed and installed auto electrical systems for touring and trade, paired with premium custom trays,
            canopies, and vehicle builds — engineered for reliability, serviceability, and safety in Australian conditions.
          </p>
        </motion.div>
      </motion.section>

      {/* About Us Section */}
{/* About Us Section */}
<section id="about" className="bg-black text-white py-24 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
      <p className="text-lg text-gray-200 leading-relaxed mb-4">
        At Elevate 4x4 Touring Solutions, we’re proud to call the Sunshine Coast home. 
        With over 15 years of combined experience in the automotive industry, our team 
        of qualified Mechanical Engineers and Auto Electricians is driven by one mission — 
        to create tough, reliable solutions built for real Australian conditions.
      </p>
      <p className="text-lg text-gray-200 leading-relaxed mb-4">
        We believe in supporting our local community and sourcing quality materials 
        wherever possible, delivering products that combine innovation, durability, 
        and value. From custom ute trays and canopies to full electrical fitouts, 
        every build is designed to perform when it matters most.
      </p>
      <p className="text-lg text-gray-200 leading-relaxed">
        Our goal is simple — provide everyday Australians with premium, adventure-ready 
        touring solutions at an affordable price, without compromising on quality or 
        craftsmanship. Whether you’re heading off-road, on the job, or across the country, 
        you can count on Elevate to get you there.
      </p>
    </div>
    <div className="md:w-1/3 flex justify-center items-center">
      <img 
        src="/about.jpg" 
        alt="Our Team" 
        className="rounded-xl shadow-lg max-w-sm w-full h-auto" 
      />
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h2 className="text-3xl font-extrabold mb-10">What Our Customers Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-800 italic">
                "The best custom tray and canopy I’ve ever owned — bulletproof build quality and the electrics work flawlessly. 10/10."
              </p>
              <div className="mt-4 font-semibold text-black">— Jake T., Sunshine Coast</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-800 italic">
                "Elevate's attention to detail is unmatched. Their electrical fitout is clean, intuitive, and reliable even in the outback."
              </p>
              <div className="mt-4 font-semibold text-black">— Sarah L., WA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-800 italic">
                "Couldn’t be happier. Great communication, a killer result, and their team even handled the extra mods we wanted."
              </p>
              <div className="mt-4 font-semibold text-black">— Mitch D., Brisbane</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white text-black py-24 px-6 text-center">
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-3xl font-extrabold mb-4">Contact Us For a Quote</h2>

          {/* Enhanced enquiry form with phone + interest dropdown */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <label className="block text-left text-sm font-medium text-gray-700">
              Your Name
              <input type="text" name="name" placeholder="John Smith" required className="mt-1 w-full px-4 py-2 border rounded" />
            </label>

            {/* Email */}
            <label className="block text-left text-sm font-medium text-gray-700">
              Email
              <input type="email" name="email" placeholder="you@example.com" required className="mt-1 w-full px-4 py-2 border rounded" />
            </label>

            {/* Phone */}
            <label className="block text-left text-sm font-medium text-gray-700">
              Phone
              <input type="tel" name="phone" placeholder="+61 4xx xxx xxx" required className="mt-1 w-full px-4 py-2 border rounded" inputMode="tel" autoComplete="tel" />
            </label>

            {/* Interest dropdown */}
            <label className="block text-left text-sm font-medium text-gray-700">
              What are you interested in?
              <select name="interest" required className="mt-1 w-full px-4 py-2 border rounded bg-white" defaultValue="">
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

            {/* Message */}
            <label className="block text-left text-sm font-medium text-gray-700">
              Tell us about your build
              <textarea
                name="message"
                placeholder="Vehicle, budget, timeline, must‑haves (fridge size, inverter, solar, water, etc.)"
                required
                className="mt-1 w-full px-4 py-2 border rounded"
                rows={5}
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={status.submitting}
              className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {/* Metadata / anti-spam */}
            <input type="hidden" name="_subject" value="New Quote Request — Elevate 4x4" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Status feedback */}
            <div className="text-sm mt-2" aria-live="polite">
              {status.succeeded && <p className="text-green-600">Thanks — we've got your request and will be in touch soon.</p>}
              {status.error && <p className="text-red-600">Error: {status.error}</p>}
            </div>
          </form>
        </div>
      </section>

      {/* Footer - Updated */}
      <footer className="bg-black text-gray-300 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-light.png" alt="Elevate 4x4" className="h-10" />
              <span className="text-lg font-bold text-white">Elevate 4x4 Touring Solutions</span>
            </div>
            <p className="text-sm text-gray-400">
              Innovative, highly-functional custom touring solutions at competitive pricing. Sunshine Coast, QLD.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Get a Quote</a></li>
              <li><Link href="/auto-electrical" className="hover:text-white">Auto Electrical Services</Link></li>
              <li><Link href="/canopies-trays" className="hover:text-white">Canopies &amp; Trays</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Sunshine Coast, QLD</li>
              <li><a href="mailto:info@elevate4x4.com.au" className="hover:text-white">info@elevate4x4.com.au</a></li>
              <li><a href="tel:+61403903461" className="hover:text-white">+61 403 903 461</a></li>
              <li>Mon–Fri: 8:00–4:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>ABN 57 850 251 59</li>
              <li><a className="hover:text-white" href="#">Warranty Policy</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms & Conditions</a></li>
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
