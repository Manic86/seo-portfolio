import CTA from "@/components/CTA";
import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  const services = [
    {
      title: "SEO Audit & Strategy",
      desc: "Complete website audit + keyword strategy + roadmap.",
    },
    {
      title: "On-Page SEO Optimization",
      desc: "Optimize pages, headings, content, internal links, and metadata.",
    },
    {
      title: "Technical SEO",
      desc: "Improve site speed, fix indexing issues, and optimize structure.",
    },
    {
      title: "Local SEO",
      desc: "Rank in Google Maps and local searches for more customers.",
    },
    {
      title: "Content Strategy",
      desc: "SEO content planning that targets keywords and drives traffic.",
    },
    {
      title: "Monthly SEO Retainer",
      desc: "Ongoing SEO management, reporting, and growth improvements.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        title="SEO Services"
        subtitle="Flexible SEO services to help you rank higher and generate more leads."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl bg-slate-900 p-8 shadow">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>

      <CTA />
    </main>
  );
}
