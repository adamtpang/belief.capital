# Handoff: polymarket-research session → belief.capital

**Origin:** a cloud research session (2026-08-15), not another Aether project.
Adam asked to research a Polymarket/multi-venue AI trading bot inspired by the
best Polymarket traders and Jim Simons/Renaissance Technologies, "explore the
idea maze" before building anything, then separately worked through domain
naming to a purchase decision. This folder is the destination for that
research and context.

**Note on an earlier mis-fire:** an initial version of this handoff was
mistakenly written into `worldcupelo.com/docs/polymarket-idea-maze.md` and
`8020.best/💡 C Ideas & Someday.md` — that was a wrong target (worldcupelo.com
is a specific football/Elo project, unrelated). This folder, `belief.capital`,
is the correct and current location. The stray file in worldcupelo.com is
stale and safe to delete whenever convenient; it was not touched as part of
this handoff.

## What was done, in order

1. **Idea maze research** → `IDEA_MAZE.md`. Mapped who's actually winning on
   Polymarket today (information-edge traders like "Théo" and "Domer",
   institutional desks like Jump/SIG/DRW, the retail bot economy, wash-trading
   noise), what does and doesn't transfer from Renaissance Technologies'
   actual methodology (the core HMM/time-series machinery doesn't — prediction
   markets resolve once and vanish — but "many small uncorrelated edges,"
   obsessive data cleaning, rigorous backtesting, and capacity-awareness all
   do), and laid out 7 strategy branches (market making, cross-platform arb,
   intra-market structural arb, latency trading, fair-value modeling, copy
   trading, sentiment signals) rated by feasibility and how crowded each
   already is.

2. **Trading rails survey** → `TRADING_RAILS_SURVEY.md`. Catalogued every real
   way an AI agent can trade in 2026: traditional broker APIs (Alpaca stands
   out as "built for this"), prediction markets & betting exchanges beyond
   Polymarket (Kalshi, Novig, ProphetX, Betfair, SX Bet), and the fast-moving
   "agent-native" crypto rail category (Hyperliquid's agent wallets, Coinbase's
   x402/AgentKit/Agentic Wallets with Nitro Enclave key isolation, dYdX
   Permissioned Keys) — this last category is the newest and most directly
   relevant to "how does an autonomous bot safely hold signing authority."

3. **GOAT investors chart** → `goat-investors-chart.html`. A tangent Adam
   requested mid-research: annualized return vs. longevity across history's
   greatest investors, to visualize the actual "Simons vs. Buffett" GOAT
   debate. Built with reliability tiers (audited vs. press-reported vs.
   anecdotal) rather than presenting every figure as equally trustworthy;
   Ludwig Jesselson researched and excluded with a footnote (he ran a
   commodities trading house, not a fund — no annualized return exists for
   him).

4. **Best AI trading bots/agents survey** → `AI_TRADING_BOTS_LANDSCAPE.md`.
   Named and rated the actual competitive landscape — retail crypto bot
   platforms (mostly rules-based despite "AI" marketing), AI stock-trading
   tools/ETFs (Numerai and Qraft's AMOM are the two genuinely validated ones;
   AIEQ is the clearest proof real ML infrastructure doesn't guarantee beating
   the market), and crypto-native "AI agents" (mostly thin wrappers or
   outright fraud — Zerebro, the fake ClawdBot). Extracted a naming lesson:
   plain/serious names correlate with real backing, hype-stacked names
   correlate with unverified or fraudulent claims.

5. **Domain naming, end to end** → `DOMAIN_NAMING.md`. Full trail from the
   first `.xyz` shortlist through the `.capital` pivot, the mythical-wealth-word
   search, and the final decision. Read that file for the complete log — the
   short version is below.

## Key decisions worth knowing before writing any code

- **Domain: `belief.capital`**, purchased. Philosophical/conviction framing
  rather than mythical or math-coded — evokes sizing a position because you
  believe in your edge, not noise-trading.
- **"Fund" language is intentionally avoided.** A fund implies a pooled
  investment vehicle taking outside money (SEC registration, accredited-
  investor rules — what Renaissance Technologies actually is). This project is
  most likely trading Adam's own capital first. `.capital` was chosen partly
  *because* it doesn't carry the pooled-vehicle implication that `.fund` does
  — keep that distinction in any copy, docs, or marketing until/unless this
  actually becomes a fund.
- **The core Renaissance/Medallion machinery does not directly transfer** to
  prediction markets (see `IDEA_MAZE.md` §2) — this isn't "build a Medallion
  clone for Polymarket," it's "apply the *principles* — many small
  uncorrelated edges, obsessive data hygiene, rigorous backtesting, capacity
  discipline — to a structurally different market type."
- **Recommended first build, in order of feasibility** (from `IDEA_MAZE.md` §6):
  1. Market making on Polymarket's incentivized crypto TWAP markets (paid
     directly by Polymarket's promotional program, not just competing on
     prediction skill).
  2. A fair-value model against external forecasts in one narrow vertical
     (sports ELO/Bayesian modeling is the most tractable starting point).
  3. Intra-Polymarket structural arbitrage as a monitoring bot (mechanically
     simple, good first project to learn the CLOB API).
  Cross-platform arbitrage and pure latency trading are flagged as later-stage
  projects — both now compete against institutional desks on execution speed,
  a harder game for a first build.
- **Technical note that will save real time:** Polymarket did a full V2
  platform migration in April 2026 — the old `py-clob-client`/`clob-client`
  SDKs are archived and non-functional. Build against the `-v2` clients or the
  newer unified `py-sdk`/`ts-sdk` only. NautilusTrader is the strongest
  existing backtesting/execution foundation (real Polymarket adapter), a much
  better starting point than one-off GitHub arb-bot repos.

## Open questions (from `IDEA_MAZE.md` §7, still unanswered)

- **US-based or not?** Determines which Polymarket entity, docs, SDKs, and
  legal terrain actually apply (offshore polymarket.com geoblocks US IPs;
  there's a separate regulated Polymarket US / QCEX product as of Dec 2025,
  and it's unclear from public docs whether the API surface is identical).
- **Rough starting capital?** Determines whether market-making/liquidity-reward
  farming (low capital, incentive-subsidized) or cross-platform arbitrage
  (recommended $5–10K+ minimum) makes more sense as a starting point.
- **How much original research vs. infrastructure work?** Fair-value modeling
  (Branch E) is more original research; market-making/structural-arb (Branches
  A/C) are more engineering against a well-specified opportunity.
- **Build solo or get help scaffolding?** NautilusTrader plus the official
  `py-sdk`/`ts-sdk` is the concrete starting stack either way.

## Next step for whoever picks this up

Answer the open questions above, then follow the Aether project bootstrap
conventions (`AETHER_STANDARD.md`) once real code exists — at that point this
folder should move from "dormant/research" to "Active" in
`../PROJECT_INDEX.md` with a one-line purpose.
