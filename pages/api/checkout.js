// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],

      // ✅ Collect delivery address & phone on Checkout:
      shipping_address_collection: { allowed_countries: ["AU", "NZ"] },
      phone_number_collection: { enabled: true },

      // ✅ Optional: show shipping choices (Stripe adds to total):
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 1500, currency: "aud" }, // $15.00 AUD
            display_name: "Standard (3–7 business days)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],

      // Optional niceties:
      allow_promotion_codes: true,

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      // Useful to identify what was bought if you sell multiple items:
      metadata: { sku: "jerry-can-holder", source: "site-grid" },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return res.status(500).json({ error: "Unable to create session" });
  }
}
