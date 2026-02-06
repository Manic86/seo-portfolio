import CTA from "@/components/CTA";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        title="About Me"
        subtitle="I’m an SEO Expert focused on growing traffic, rankings, and leads for businesses."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-900 p-8 shadow">
          <h2 className="text-xl font-semibold">Who I Am</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I’m Mani, an SEO Consultant helping startups, ecommerce brands, and
            service businesses grow through organic traffic.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            My SEO strategies are based on technical improvements, keyword
            research, content optimization, and building authority to rank on
            Google.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            I believe in long-term SEO growth with transparent reporting and
            measurable results.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-slate-900 p-8 text-slate-400 shadow">
          Add Your Photo Here
        </div>
      </div>

      <CTA />
    </main>
  );
}
