# belief.capital

**One-sentence purpose:** An AI-driven, multi-venue trading bot (Polymarket, Kalshi, onchain/crypto, potentially stocks) inspired by the best Polymarket traders and Jim Simons / Renaissance Technologies' quant principles.

**Status (2026-08-15):** Domain owned. Pre-build / research stage — no code yet. On the standard North Star ladder (`AETHER_STANDARD.md` item 18) this is stage 0 of 6: the core loop doesn't exist yet. Treat as a "dormant — research/notes only" entry in `PROJECT_INDEX.md` until a real repo exists, then promote it to Active and add its one-line purpose there.

**Start here:** [`HANDOFF_FROM_polymarket-research.md`](./HANDOFF_FROM_polymarket-research.md) — full context, decisions, and open questions from the research session that produced this project. Read that first.

## Docs in this folder

- **`HANDOFF_FROM_polymarket-research.md`** — the handoff doc. What was researched, what was decided, what's still open.
- **`IDEA_MAZE.md`** — the strategy landscape: who's already winning on Polymarket and how, what does/doesn't transfer from Renaissance Technologies' actual playbook, 7 strategy branches rated by feasibility and crowding, technical map (SDKs, data sources, rate limits), risks.
- **`TRADING_RAILS_SURVEY.md`** — every way an AI agent can actually trade in 2026: traditional broker APIs (Alpaca, IBKR, Tradier, etc.), prediction markets & betting exchanges (Kalshi, Polymarket, Novig, ProphetX, Betfair, SX Bet...), and onchain/crypto-native agent rails (Hyperliquid agent wallets, Coinbase x402/AgentKit/Agentic Wallets, dYdX Permissioned Keys).
- **`AI_TRADING_BOTS_LANDSCAPE.md`** — survey of existing branded trading bots/AI agents on the market (retail crypto bots, AI stock-trading tools/ETFs, crypto-native "AI agents"), honestly split between what's real (Numerai, Qraft AMOM) and what's mostly marketing or worse.
- **`DOMAIN_NAMING.md`** — the full naming research log: why `.xyz` got rejected, why `.capital` beat `.fund` (regulatory framing), the mythical-wealth-word search, and why `belief.capital` won.
- **`goat-investors-chart.html`** — standalone interactive chart ("the investing GOAT debate": annualized return vs. longevity across history's best investors, Simons vs. Buffett headline comparison). Open directly in a browser.

## Next steps

See the "Open questions" section at the bottom of `HANDOFF_FROM_polymarket-research.md` — the short version: decide US-based-or-not (determines which Polymarket entity/legal terrain applies), decide starting capital, and pick a first branch to build (market-making on incentivized TWAP markets is the recommended starting point).
