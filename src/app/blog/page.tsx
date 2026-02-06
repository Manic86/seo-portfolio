import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata = {
  title: "SEO Blog",
  description:
    "SEO tips and strategies to improve rankings, traffic, and lead generation.",
};

export default function Blog() {
  const posts = [
    {
      title: "How to Rank Faster on Google",
      desc: "Learn the best SEO strategies to rank faster and get traffic quickly.",
    },
    {
      title: "Local SEO Checklist for Small Businesses",
      desc: "A complete guide to rank on Google Maps and local search results.",
    },
    {
      title: "Technical SEO Mistakes That Hurt Rankings",
      desc: "Common SEO errors that prevent your website from ranking on Google.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        title="SEO Blog"
        subtitle="SEO tips, ranking strategies, and updates to help you grow organic traffic."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <div key={p.title} className="rounded-2xl bg-slate-900 p-6 shadow">
            <h2 className="text-xl font-semibold text-white">{p.title}</h2>
            <p className="mt-2 text-slate-300">{p.desc}</p>
          </div>
        ))}
      </div>

      <CTA />
    </main>
  );
}
