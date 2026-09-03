import type { Metadata } from "next";
import Link from "next/link";
import { researchDocs } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research notes from building belief.capital, published as they're written.",
  alternates: { canonical: "/research" },
};

export default function ResearchIndex() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-24">
      <header className="mb-16">
        <Link
          href="/"
          className="text-sm text-white/50 underline underline-offset-4 hover:text-white"
        >
          belief.capital
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Research
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Notes from the research that shapes this project. Published as
          findings, not as advice. Nothing here is a recommendation to trade
          or allocate capital.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-white/50">
          Findings
        </h2>
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {researchDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/research/${doc.slug}`}
              className="group py-6 first:pt-0 last:pb-0"
            >
              <h3 className="font-medium group-hover:text-white/80">
                {doc.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
          Weekly reports
        </h2>
        <p className="text-sm leading-relaxed text-white/60">
          No reports published yet. Once a strategy is actually running,
          weekly notes on what was tested and what happened will be posted
          here.
        </p>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
        <p>
          Get in touch:{" "}
          <a
            href="mailto:adam@adampang.com"
            className="text-white/80 underline underline-offset-4 hover:text-white"
          >
            adam@adampang.com
          </a>
        </p>
      </footer>
    </main>
  );
}
