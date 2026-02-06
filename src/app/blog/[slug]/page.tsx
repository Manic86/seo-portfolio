import Link from "next/link";

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
