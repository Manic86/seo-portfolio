"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("❌ Failed: " + (data.error || "Unknown error"));
      } else {
        setStatus("✅ Message sent successfully! I’ll contact you soon.");
        setForm({ name: "", email: "", website: "", message: "" });
      }
    } catch {
      setStatus("❌ Something went wrong. Try again.");
    }

    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <SectionTitle
        title="Contact Me"
        subtitle="Send your website link and goal. I’ll reply with next steps."
      />

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-2xl bg-slate-900 p-8 shadow"
      >
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your Name"
          className="rounded-xl bg-slate-950 px-4 py-3 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Your Email"
          type="email"
          className="rounded-xl bg-slate-950 px-4 py-3 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          placeholder="Website URL"
          className="rounded-xl bg-slate-950 px-4 py-3 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Your Message / Goal"
          className="min-h-[140px] rounded-xl bg-slate-950 px-4 py-3 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          disabled={loading}
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-sm text-slate-300">{status}</p>}
      </form>
    </main>
  );
}
