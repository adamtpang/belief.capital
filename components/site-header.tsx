import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mb-14 flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="font-medium tracking-tight text-white">
        belief.capital
      </Link>
      <nav aria-label="Primary navigation" className="flex gap-5 text-sm text-white/60">
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/research" className="hover:text-white">
          Research
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
}
