import Link from "next/link";

const posts: Record<
  string,
  { title: string; content: string; date: string }
> = {
  "how-to-rank-faster-on-google": {
    title: "How to Rank Faster on Google",
    date: "06 Feb 2026",
    content:
      "Ranking faster on Google requires technical SEO, content strategy, and backlinks. Focus on low competition keywords, fix site speed, improve on-page SEO, and publish helpful content consistently.",
  },

  "local-seo-checklist": {
    title: "Local SEO Checklist for Small Businesses",
    date: "06 Feb 2026",
    content:
      "Optimize your Google Business Profile, get reviews, build citations, add local keywords, and create location landing pages. Local SEO helps you rank in Google Maps and drive more customers.",
  },

  "technical-seo-mistakes": {
    title: "Technical SEO Mistakes That Hurt Rankings",
    date: "06 Feb 2026",
    content:
      "Slow speed, broken links, duplicate content, missing sitemap, and mobile issues are the biggest technical SEO mistakes. Fix them to improve crawling and indexing.",
  },
};

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = posts[slug];

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-white">Post Not Found</h1>
        <Link href="/blog" className="mt-4 inline-block text-blue-400">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm text-slate-400">{post.date}</p>
      <h1 className="mt-2 text-4xl font-bold text-white">{post.title}</h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-300">
        {post.content}
      </p>

      <Link
        href="/blog"
        className="mt-10 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
      >
        ← Back to Blog
      </Link>
    </main>
  );
}
