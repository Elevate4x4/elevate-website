import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'

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

      {/* Our Services Section */}
<motion.section
  id="services"
  className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center text-white text-center"
  style={{
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/service2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center", // <--- Ensures image is centered both ways
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
  {/* Content */}
  <motion.div
    className="relative z-10 p-10 rounded max-w-3xl"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
  >
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
      Our Services
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      Purpose-built ute trays, canopies, and trailers.<br />
      Custom electrical fitouts. Australian engineered solutions for every adventure.
    </p>
  </motion.div>
</motion.section>

      {/* About Us Section */}
<section
  id="about"
  className="bg-black text-white py-24 px-6"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Text Section */}
    <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        We are an Australian-owned and operated business with over 15 years of combined experience
        in the automotive industry. Our team of Mechanical Engineers and Auto Electricians design,
        build, and deliver purpose-built ute trays, canopies, and trailers — fully equipped with 
        custom electrical fitouts, tailored for rugged Australian adventures.
      </p>
    </div>
    {/* Image Section */}
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
      <section
        id="testimonials"
        className="bg-black text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center w-full">
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
      <section
        id="contact"
        className="bg-white text-black py-24 px-6 text-center"
      >
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-3xl font-extrabold mb-4">Contact Us For a Quote</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded"
              rows="5"
            />
            <button
              type="submit"
              disabled={status.submitting}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {/* Metadata for inbox clarity */}
            <input type="hidden" name="_subject" value="New Quote Request — Elevate 4x4" />
            {/* Optional redirect after submit: <input type=\"hidden\" name=\"_next\" value=\"/thanks\" /> */}
            {/* Simple honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            {/* Status feedback */}
            <div className="text-sm mt-2" aria-live="polite">
              {status.succeeded && <p className="text-green-600">Thanks — we\'ve got your request and will be in touch soon.</p>}
              {status.error && <p className="text-red-600">Error: {status.error}</p>}
            </div>

          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-10 border-t text-sm text-gray-200">
        &copy; {new Date().getFullYear()} ELEVATE - TOURING SOLUTIONS. All rights reserved.
      </footer>
    </>
  )
}
