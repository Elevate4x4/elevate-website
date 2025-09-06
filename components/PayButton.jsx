// components/PayButton.jsx
import { useState } from "react";

export default function PayButton({ label = "Pay securely", className = "" }) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const r = await fetch("/api/checkout", { method: "POST" });
      const { url } = await r.json();
      if (url) window.location.assign(url);
      else alert("No checkout URL returned.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition disabled:opacity-60 ${className}`}
    >
      {loading ? "Redirecting…" : label}
    </button>
  );
}
