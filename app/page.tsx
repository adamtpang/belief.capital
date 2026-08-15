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
    body: "Every strategy is tested against its actual constraints — fees, slippage, liquidity, resolution risk — before it touches real capital.",
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
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-24">
      <header className="mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/50">
          Status: research — no live trading yet
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          belief.capital
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          An AI-driven trading system across prediction markets, onchain
          rails, and eventually traditional venues — built on the
          principles behind Renaissance Technologies' actual track record,
          applied to markets that resolve once and vanish.
        </p>
      </header>

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
              <span className="text-white/30">&mdash;</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/50">
        <p>
          Follow the build or get in touch:{" "}
          <a
            href="mailto:adamtpang@gmail.com"
            className="text-white/80 underline underline-offset-4 hover:text-white"
          >
            adamtpang@gmail.com
          </a>
        </p>
        <p className="text-xs text-white/30">belief.capital</p>
      </footer>
    </div>
  );
}
