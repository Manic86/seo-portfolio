import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m Mani 👋 <br /> SEO Expert & Growth Consultant
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            I help businesses rank higher on Google, drive more organic traffic,
            and generate leads using powerful SEO strategies.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-500"
            >
              Get Free SEO Audit
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white hover:bg-slate-900"
            >
              View Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-2xl font-bold">120+</p>
              <p className="text-sm text-slate-400">Projects</p>
            </div>
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-2xl font-bold">3X</p>
              <p className="text-sm text-slate-400">Growth</p>
            </div>
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm text-slate-400">Years</p>
            </div>
          </div>
        </div>

        <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-900 text-slate-400 shadow">
          Your Photo / SEO Illustration
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">SEO Services</h2>
        <p className="mt-2 text-slate-300">
          Complete SEO solutions designed to increase rankings and conversions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["SEO Audit", "Full SEO audit with roadmap fixes."],
            ["On-Page SEO", "Optimize pages for ranking + conversions."],
            ["Technical SEO", "Fix indexing, speed, and site structure."],
            ["Local SEO", "Rank your business on Google Maps."],
            ["Content Strategy", "Keyword-driven blog plan that ranks."],
            ["Link Building", "Backlink strategy to build authority."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-slate-900 p-6 shadow">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
