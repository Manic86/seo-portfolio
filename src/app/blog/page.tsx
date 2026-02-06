import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata = {
  title: "SEO Blog",
  description: "SEO tips and strategies to grow organic traffic.",
};

export default function Blog() {
  const posts = [
    {
      slug: "how-to-rank-faster-on-google",
      title: "How to Rank Faster on Google",
      desc: "Learn the best SEO strategies to rank faster and get traffic quickly.",
    },
    {
      slug: "local-seo-checklist",
      title: "Local SEO Checklist for Small Businesses",
      desc: "A complete guide to rank on Google Maps and local search results.",
    },
    {
      slug: "technical-seo-mistakes",
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
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl bg-slate-900 p-6 shadow hover:bg-slate-800 transition"
          >
            <h2 className="text-xl font-semibold text-white">{p.title}</h2>
            <p className="mt-2 text-slate-300">{p.desc}</p>
            <p className="mt-4 text-blue-400 font-semibold">
              Read More →
            </p>
          </Link>
        ))}
      </div>

      <CTA />
    </main>
  );
}
