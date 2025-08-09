import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Policies() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        {/* Hero */}
        <section className="bg-black text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Policies & Legal</h1>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
            Our commitment to quality, privacy, and fair trading.
          </p>
        </section>

        {/* Navigation Links */}
        <section className="max-w-3xl mx-auto px-6 py-6">
          <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
            <h2 className="text-sm font-bold tracking-wider text-gray-700 uppercase">Contents</h2>
            <ul className="mt-2 space-y-1 text-gray-800">
              <li><Link className="underline hover:text-black" href="#warranty">Warranty Policy</Link></li>
              <li><Link className="underline hover:text-black" href="#privacy">Privacy Policy</Link></li>
              <li><Link className="underline hover:text-black" href="#terms">Terms &amp; Conditions of Sale</Link></li>
            </ul>
          </div>
        </section>

        {/* Content container */}
        <section className="max-w-3xl mx-auto px-6 py-16 space-y-20">
          {/* Warranty */}
          <article id="warranty">
            <h2 className="text-3xl font-extrabold mb-6">Warranty Policy</h2>
            <h3 className="text-xl font-semibold mb-4">Elevate 4X4 Touring Solutions – Warranty Statement</h3>
            <p className="text-gray-700 mb-6">
              At Elevate 4X4 Touring Solutions, we pride ourselves on quality workmanship and premium products. We stand behind
              everything we build and install.
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-3">Our Warranties</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>Structural Fabrication Warranty:</strong> 2 years on all fabricated canopies and trays.</li>
              <li><strong>Auto Electrical Workmanship Warranty:</strong> 2 years on all auto electrical work performed by us.</li>
              <li><strong>Electrical Components:</strong> 1 year warranty or the original manufacturer’s warranty, whichever is greater.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">What Our Warranty Covers</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Defects in materials or workmanship under normal use.</li>
              <li>Repairs or replacement of faulty parts at no cost to the customer (labour and materials included).</li>
              <li>Warranty claims are assessed on a case-by-case basis by our team.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">What’s Not Covered</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Damage caused by misuse, neglect, accidents, modifications, or unauthorised repairs.</li>
              <li>Normal wear and tear.</li>
              <li>Corrosion caused by environmental exposure (unless due to a defect in materials).</li>
              <li>Any consequential or indirect loss.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">How to Make a Claim</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Contact us at <a href="tel:+61403903461" className="underline">+61 403 903 461</a> or <a href="mailto:sales@elevate4x4.com.au" className="underline">sales@elevate4x4.com.au</a> with proof of purchase and a description of the fault.</li>
              <li>We may request photos or an inspection of the product.</li>
              <li>If approved, we will arrange repair, replacement, or refund as appropriate.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">Your Rights Under Australian Consumer Law</h4>
            <p className="text-gray-700">
              Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a
              replacement or refund for a major failure, and for compensation for any other reasonably foreseeable loss or damage.
            </p>

            <div className="mt-8"><a href="#top" className="text-sm underline">Back to top</a></div>
          </article>

          {/* Privacy */}
          <article id="privacy">
            <h2 className="text-3xl font-extrabold mb-6">Privacy Policy</h2>
            <h3 className="text-xl font-semibold mb-4">Elevate 4x4 Touring Solutions – Privacy Commitment</h3>
            <p className="text-gray-700 mb-6">
              We respect your privacy and are committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth)
              and the Australian Privacy Principles (APPs).
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-3">What Information We Collect</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Name, address, phone number, email address.</li>
              <li>Vehicle details and product preferences.</li>
              <li>Payment and transaction details (where applicable).</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">How We Collect It</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>When you contact us, place an order, or request a quote.</li>
              <li>Through our website or social media platforms.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">How We Use Your Information</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>To provide our products and services.</li>
              <li>To process payments and manage orders.</li>
              <li>To send you updates, invoices, or service reminders (only if you opt-in to marketing).</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">How We Protect Your Information</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>We store your information securely and take reasonable steps to prevent unauthorised access.</li>
              <li>We do not sell or rent your personal information to third parties.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">Disclosure of Information</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Service providers assisting with order fulfilment.</li>
              <li>Authorities if required by law.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-3">Access and Correction</h4>
            <p className="text-gray-700">
              You can request access to or correction of your personal information at any time by contacting us.
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-3">Contact Us</h4>
            <p className="text-gray-700">
              Email: <a href="mailto:sales@elevate4x4.com.au" className="underline">sales@elevate4x4.com.au</a><br />
              Phone: <a href="tel:+61403903461" className="underline">+61 403 903 461</a>
            </p>

            <div className="mt-8"><a href="#top" className="text-sm underline">Back to top</a></div>
          </article>

          {/* Terms */}
          <article id="terms">
            <h2 className="text-3xl font-extrabold mb-6">Terms &amp; Conditions of Sale</h2>

            <ol className="list-decimal pl-6 space-y-6 text-gray-800">
              <li>
                <strong>Definitions</strong>
                <p className="mt-2">“We”, “us”, “our” refers to Elevate 4x4 Touring Solutions. “You”, “your” refers to the customer.</p>
              </li>
              <li>
                <strong>Orders &amp; Deposits</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>All orders require a non-refundable deposit to secure production.</li>
                  <li>Remaining balance must be paid in full prior to collection or delivery.</li>
                </ul>
              </li>
              <li>
                <strong>Lead Times</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Standard lead time is 8–10 weeks from receipt of deposit, subject to supplier availability.</li>
                  <li>We will notify you of any delays outside our control.</li>
                </ul>
              </li>
              <li>
                <strong>Pricing</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>All prices are in Australian dollars and inclusive of GST unless stated otherwise.</li>
                  <li>Quotes are valid for 14 days.</li>
                </ul>
              </li>
              <li>
                <strong>Delivery &amp; Collection</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Collection is from our workshop unless delivery is agreed in writing.</li>
                  <li>Risk in goods passes to you upon collection or delivery.</li>
                </ul>
              </li>
              <li>
                <strong>Warranty &amp; Returns</strong>
                <p className="mt-2">Warranties are outlined in our Warranty Policy above. Returns are only accepted in accordance with Australian Consumer Law.</p>
              </li>
              <li>
                <strong>Limitation of Liability</strong>
                <p className="mt-2">To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages.</p>
              </li>
              <li>
                <strong>Customer Responsibilities</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Ensure correct vehicle fitment and compatibility before ordering.</li>
                  <li>Follow care and maintenance instructions provided.</li>
                </ul>
              </li>
              <li>
                <strong>Governing Law</strong>
                <p className="mt-2">These terms are governed by the laws of Queensland, Australia.</p>
              </li>
            </ol>

            <div className="mt-8"><a href="#top" className="text-sm underline">Back to top</a></div>
          </article>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700">Questions about any of the above? <Link className="underline" href="/#contact">Get in touch</Link>.</p>
          </div>
        </section>
      </main>
    </>
  )
}
