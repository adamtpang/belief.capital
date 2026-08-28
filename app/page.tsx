import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
};

const principles = [
  {
    title: "Many small, uncorrelated edges",
    body: "No single signal is expected to carry the book. The aim is a portfolio of small, independently-verified edges across markets, not one big correct call.",
  },
  {
    title: "Obsessive data hygiene",
    body: "Bad data produces confident, wrong backtests. Cleaning and validating data sources is treated as core work, not overhead.",
  },
  {
    title: "Rigorous backtesting",
    body: "Every strategy is tested against its actual constraints: fees, slippage, liquidity, resolution risk, before it touches real capital.",
  },
  {
    title: "Capacity discipline",
    body: "An edge that stops working once it's sized up is not an edge, it's a coincidence. Strategies are sized to what the market can actually absorb.",
  },
];

const notes = [
  "Trading Adam's own capital first. This is not a fund and is not raising outside money.",
  "No code is live yet. This page exists ahead of the system, not the other way around.",
  "Venues under consideration: Polymarket, Kalshi, onchain/crypto rails, and eventually traditional brokers.",
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-24"
    >
      <header className="mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/50">
          Status: research, no live trading yet
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          belief.capital
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          An AI-driven trading system across prediction markets, onchain
          rails, and eventually traditional venues. The public work asks which
          quantitative methods can transfer to markets that resolve once and
          vanish, and where the operational constraints make that impossible.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/research"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/85"
          >
            Start with the research
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:border-white/40"
          >
            Contact Adam
          </Link>
        </div>
      </header>

      <section className="mb-16" aria-labelledby="available-now">
        <h2
          id="available-now"
          className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50"
        >
          What is available now
        </h2>
        <div className="space-y-4 leading-relaxed text-white/70">
          <p>
            belief.capital is a personal research project for builders and
            researchers evaluating market structure, data quality, execution
            risk, and agent-native trading infrastructure. The public offer is
            access to the project&apos;s research notes and a direct channel for
            corrections or relevant technical context.
          </p>
          <p>
            As of August 15, 2026, the library contains 3 long-form research
            notes, 0 live trading strategies, and 0 outside investors. There is
            no paid plan, trial, advisory service, managed account, or quote to
            request; belief.capital is not accepting outside capital.
          </p>
          <p>
            The initial research compares 7 candidate strategy branches, maps
            the venues an autonomous agent could use, and separates trading-bot
            products with documented evidence from products supported mainly by
            marketing claims. Each note links to its underlying sources so
            readers can check the work rather than rely on a summary.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-white/50">
          Principles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border border-white/10 p-5">
              <h3 className="mb-2 font-medium">{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
          Where this actually stands
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-white/70">
          {notes.map((n) => (
            <li key={n} className="flex gap-3">
              <span className="text-white/30">-</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
