import Link from "next/link";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
      <nav aria-label="Site information" className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/about" className="underline underline-offset-4 hover:text-white">
          About
        </Link>
        <Link href="/research" className="underline underline-offset-4 hover:text-white">
          Research
        </Link>
        <Link href="/contact" className="underline underline-offset-4 hover:text-white">
          Contact
        </Link>
        <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
          Privacy
        </Link>
      </nav>
      <p className="mt-4 text-xs text-white/30">
        belief.capital · {PUBLIC_CONTACT_EMAIL}
      </p>
    </footer>
  );
}
