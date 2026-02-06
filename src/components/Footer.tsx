export default function Footer() {
    return (
      <footer className="mt-16 border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} ManiSEO. All rights reserved.</p>
            <p>Built with Next.js + Tailwind + Vercel 🚀</p>
          </div>
        </div>
      </footer>
    );
  }
  