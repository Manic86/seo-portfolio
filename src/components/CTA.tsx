import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-20 rounded-2xl bg-slate-900 p-10 text-center shadow">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Want More Leads from Google?
      </h2>
      <p className="mt-3 text-slate-300">
        Book a free call or request a free SEO audit today.
      </p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Book Free Call
        </Link>

        <Link
          href="/services"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
        >
          View Services
        </Link>
      </div>
    </section>
  );
}
