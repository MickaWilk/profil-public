import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e2330] bg-[#0d0f14]/90 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-[#e8ecf4] font-semibold tracking-tight hover:text-[#6b9fd4] transition-colors"
        >
          Micka Wilk
        </Link>
        <ul className="flex items-center gap-8 text-sm text-[#7a8499]">
          <li>
            <Link href="/gouts" className="hover:text-[#e8ecf4] transition-colors">
              Goûts
            </Link>
          </li>
          <li>
            <Link href="/projets" className="hover:text-[#e8ecf4] transition-colors">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/cv" className="hover:text-[#e8ecf4] transition-colors">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
