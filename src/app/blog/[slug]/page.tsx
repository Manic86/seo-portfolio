import Link from "next/link";

const posts: Record<string, { title: string; date: string; content: string[] }> =
  {
    "how-to-rank-faster-on-google": {
      title: "How to Rank Faster on Google",
      date: "06 Feb 2026",
      content: [
        "Ranking faster on Google requires a strong SEO foundation and consistent strategy. Many websites fail because they focus only on keywords and ignore technical SEO and content quality.",

        "Step 1: Fix Technical SEO issues. Your website must load fast, be mobile-friendly, and have no crawl errors. Use Google Search Console to find indexing issues.",

        "Step 2: Target low competition long-tail keywords. Ranking is easier when you choose keywords with low difficulty and clear search intent.",

        "Step 3: Write SEO optimized content. Use proper headings (H1, H2, H3), add FAQs, and include keywords naturally inside your content.",

        "Step 4: Improve internal linking. Link related pages together so Google can crawl your site and understand topic relevance.",

        "Step 5: Build backlinks. Quality backlinks from blogs, directories, and guest posts will increase your domain authority.",

        "Step 6: Update old content regularly. Google loves fresh content, so updating articles can boost rankings quickly.",

        "Final Tip: SEO is not instant. Consistency is key. Publish regularly, track results, and optimize your pages monthly.",
      ],
    },

    "local-seo-checklist": {
      title: "Local SEO Checklist for Small Businesses",
      date: "06 Feb 2026",
      content: [
        "Local SEO helps your business rank on Google Maps and in local search results.",
        "Step 1: Optimize your Google Business Profile with correct name, phone, address and categories.",
        "Step 2: Add photos regularly and post updates weekly.",
        "Step 3: Get customer reviews and reply to every review.",
        "Step 4: List your business in local directories like JustDial, Sulekha, IndiaMart.",
        "Step 5: Add local keywords in your website like 'SEO Expert in Chennai'.",
        "Step 6: Embed Google Maps on your contact page.",
        "Step 7: Build local backlinks from nearby websites and local blogs.",
      ],
    },

    "technical-seo-mistakes": {
      title: "Technical SEO Mistakes That Hurt Rankings",
      date: "06 Feb 2026",
      content: [
        "Technical SEO is the backbone of ranking. Even good content won’t rank if technical SEO is weak.",
        "Mistake 1: Slow website speed. Compress images, enable caching, and reduce scripts.",
        "Mistake 2: Broken links and 404 pages. Fix them using Google Search Console.",
        "Mistake 3: Missing sitemap.xml and robots.txt. These help Google crawl your website properly.",
        "Mistake 4: Duplicate content. Avoid copying same text across multiple pages.",
        "Mistake 5: Poor mobile design. Google uses mobile-first indexing.",
        "Mistake 6: Incorrect canonical tags. Always set correct canonical URLs.",
      ],
    },
  };


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts[slug];

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-white">Post Not Found</h1>
        <p className="mt-4 text-slate-300">Slug received: {slug}</p>

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
        {post.content.map((para, index) => (
        <p key={index} className="mt-4 text-lg leading-relaxed text-slate-300">
        {para}
    </p>
))}
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
