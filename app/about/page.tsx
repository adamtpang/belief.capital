import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "The status, scope, and operating boundaries of belief.capital, a personal AI trading systems research project.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12 sm:py-20"
    >
      <SiteHeader />
      <article>
        <p className="text-sm uppercase tracking-widest text-white/50">About</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          A research project, before it is a trading system
        </h1>
        <div className="mt-8 space-y-5 leading-relaxed text-white/70">
          <p>
            belief.capital is Adam&apos;s personal research project for exploring
            whether a disciplined, AI-assisted system can find and execute
            small edges across prediction markets, onchain venues, and
            eventually traditional brokers. The work begins with market
            structure, data quality, execution constraints, and falsifiable
            testing rather than with a performance claim.
          </p>
          <p>
            The landing page first shipped on August 15, 2026. At that point,
            3 research notes were public, no trading strategy was live, and no
            outside capital was being accepted. Those boundaries remain the
            clearest description of the project today.
          </p>
          <h2 className="pt-4 text-xl font-medium text-white">What is published</h2>
          <p>
            The public library covers candidate Polymarket strategies, the
            technical rails available to autonomous trading agents, and an
            evidence-led survey of branded trading bots. The notes include
            links to source material and distinguish research findings from
            decisions that have not yet been made.
          </p>
          <h2 className="pt-4 text-xl font-medium text-white">What this is not</h2>
          <p>
            belief.capital is not a fund, broker, adviser, managed account,
            signal service, or public trading product. It does not publish an
            investment track record or accept deposits. The useful next step
            is to <Link href="/research" className="text-white underline underline-offset-4">read the research</Link>,
            then <Link href="/contact" className="text-white underline underline-offset-4">contact Adam</Link> if you have a correction or relevant technical context.
          </p>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
