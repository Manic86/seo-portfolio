import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m Mani 👋 <br /> SEO Expert & Growth Consultant
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            I help businesses rank higher on Google, drive more traffic, and
            generate more leads with proven SEO strategies.
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
          I provide complete SEO solutions to grow your business.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["SEO Audit", "Complete SEO audit with roadmap fixes."],
            ["On-Page SEO", "Optimize content and pages for ranking."],
            ["Technical SEO", "Fix speed, indexing, and structure issues."],
            ["Local SEO", "Rank your business on Google Maps."],
            ["Content Strategy", "SEO blog strategy that ranks faster."],
            ["Link Building", "Backlink strategy to build authority."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-slate-900 p-6 shadow">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold">Let’s Work Together 🚀</h2>
        <p className="mt-2 text-slate-300">
          Want more traffic, leads, and sales? Let’s build your SEO growth plan.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
