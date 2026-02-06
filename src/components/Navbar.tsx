import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          Mani<span className="text-blue-500">SEO</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-white">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Free Audit
        </Link>
      </div>
    </header>
  );
}
