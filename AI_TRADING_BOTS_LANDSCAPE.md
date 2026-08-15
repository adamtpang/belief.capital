# The Best Trading Bots / AI Agents on the Market — Named, and Rated Honestly

*A survey of actual branded products across crypto retail bots, AI stock-trading tools/funds, and crypto-native "AI agents" — with an honest split between real track records and marketing.*

---

## The one-line version

Almost nothing in this space has independently audited, real-money proof it actually works. The exceptions worth knowing by name: **Numerai** (a real hedge fund, JPMorgan put up to $500M behind it), **Qraft's AMOM** (a real AI ETF that's genuinely beaten its benchmark), and **AIEQ** (a real AI ETF that's honestly just underperformed the S&P 500 for 8+ years while charging 8x the fee). Everything else — the retail crypto bot platforms, the crypto "AI agents" like aixbt, the Polymarket-specific bots — ranges from "rules-based automation with an AI label" to "no independently verifiable track record at all" to outright fraud.

---

## 1. Retail crypto trading bot platforms (rules-based, "AI" mostly marketing)

| Name | What it is | Real AI? | Independent reputation |
|---|---|---|---|
| **3Commas** | Grid/DCA bots, manual terminal, signal-following — the biggest name in the category | No — rules-based | Trustpilot 4.2–4.5, but had a real 2022 API-key breach that led to unauthorized trades |
| **Cryptohopper** | Bot marketplace, "AI Strategy Designer" | Marketed as AI, functions as rules/templates per reviewers | Trustpilot 3.6–3.9 |
| **Pionex** | Exchange with 12+ built-in bots (grid/DCA/arb) | No | Trustpilot 2.5 (weak) |
| **Bitsgap** | Grid/DCA aggregator across ~15 exchanges | No | Trustpilot 3.9 |
| **Coinrule** | No-code "if-this-then-that" builder — explicitly *not* claiming AI | No, and proud of it | Solid, transparent about being rules-based |
| **HaasOnline** | Advanced scripting (HaasScript), backtesting, since 2014 | Mostly no | Trustpilot 4.1 |
| **Gunbot** | Self-hosted, one-time license, technical users | No | Trustpilot 4.5 (highest, but self-selected technical user base) |
| **TradeSanta** | Beginner DCA/grid bot | No | Fine, low-stakes |
| **WunderTrading** | TradingView-signal automation, copy trading | Marketed as AI in places | Trustpilot 2.6 (weakest) |
| **Kryll** | Visual drag-and-drop builder, EU-based | No | Fine |

**Discontinued, worth knowing so you don't chase dead links:** Shrimpy and Trality both shut down their consumer products; Cryptohopper absorbed both user bases as acquisition marketing.

**Newer and now bigger than all of the above combined in retail attention:** Telegram-native memecoin sniper bots — **Trojan, BullX, Photon, Banana Gun, Maestro, Axiom, Vector**. These aren't portfolio bots, they're speed-execution tools for buying new token launches in seconds. No AI claim, no real intelligence — the edge is pure latency, and retail users are structurally last in that race. Much higher loss risk (rug pulls, sandwich attacks) than the older DCA/grid platforms.

**Enforcement context, so you know the pattern regulators watch for:** the SEC charged a Texas operator in 2024 for a $12.3M scheme built on "proprietary AI-based trading bots" claiming 40–100%+ returns in weeks (funds went to personal expenses and Ponzi payouts); the FTC separately went after "DK Automation" for a fabricated-testimonial AI bot pitch. Neither is one of the named platforms above, but it's exactly the marketing pattern ("AI" + implied outsized returns) those platforms use — worth knowing what the fraud version looks like.

---

## 2. AI stock-trading tools and AI-managed funds/ETFs

| Name | What it is | Verified performance |
|---|---|---|
| **Trade Ideas / "Holly AI"** | Nightly re-optimization across 60+ quant strategies, picks best-performing recently | Self-reported cherry-picked trades (+2,905% examples); does publish full trade log including losses, which is more honest than most peers |
| **Tickeron** | SEC-registered adviser, "AI Trading Robots/Agents" | Self-published headlines ("up to 279% annualized") — no independent audit found |
| **Composer (now Composer by SoFi)** | No-code rules-based "symphony" builder | The "AI" is a natural-language strategy-authoring assistant, not the trading logic itself — honest about this |
| **Danelfin** | Real multi-factor ML stock scoring (600+ technical/fundamental/sentiment features) | Genuine ML, but headline outperformance (+376% vs +166% S&P since 2017) is **backtested**, not live |
| **Magnifi** | Conversational AI investment *research/discovery* assistant | Not a trading system at all — no return stream to evaluate |
| **AIEQ** (Amplify AI Powered Equity ETF, EquBot/IBM Watson) | Real, live, publicly-traded ETF since Oct 2017 — genuinely sophisticated NLP/ML infra | **Has underperformed the S&P 500 almost every year since inception**, cumulatively, while charging 0.83%/yr (~8x a plain index fund). The single clearest proof that real AI tech ≠ beating the market |
| **Qraft's AMOM** | AI-enhanced momentum ETF | **+111.6% since May 2019 inception, beating its benchmark by +34.3 points — a real, credible win** |
| **Qraft's QRFT** | AI-enhanced large-cap ETF | Beat SPY by +11.7 points at its 5-year mark (2024) — then was **liquidated in July 2026**. 3 of Qraft's ~5 funds have now closed |
| **Numerai** | Crowdsourced hedge fund — thousands of data scientists submit ML models, stake crypto (NMR) on their own accuracy, models aggregate into a live-trading meta-model | **+25.45% net in 2024, 2.75 Sharpe. JPMorgan committed up to $500M in capacity (Aug 2025).** The most institutionally validated "AI fund" in this entire survey |
| Wealthfront / Betterment | Robo-advisors | **Not AI stock-pickers at all** — classical index-fund allocation + rebalancing, included only to contrast honestly against everything above |

---

## 3. Crypto-native "AI agents" (the Twitter/onchain-famous names)

Covered in depth earlier this session, recapped + expanded:

| Name | What it claims | Reality |
|---|---|---|
| **Truth Terminal** | "First AI crypto millionaire," ~$1.5M tracked wallet value | The bot only generates text/memes — a human (Andy Ayrey) controls the wallet and executes |
| **aixbt** (Virtuals Protocol) | Crypto-Twitter analysis, token calls | Advisory/commentary only, doesn't execute trades; documented ~48% win rate on calls (roughly a coin flip) |
| **Luna** (Virtuals Protocol) | Autonomous onchain agent on Base | Real onchain activity, but low-stakes/gamified, not a demonstrated alpha strategy |
| **Ribbita by Virtuals** | Now the #2 Virtuals-ecosystem token by market cap | Identity/payments infrastructure narrative — not a trading agent at all |
| **Moonsage Alpha** (Recall Network) | "Won the last two Recall trading competitions," aiming for a 3-peat | Recall's own docs confirm these competitions are **simulated/paper trading** — "verifiable PnL" marketing language isn't backed by real capital |
| **Zerebro** | Peak ~$800M market cap AI agent project | Collapsed ~99% after co-founder staged his own death while allegedly dumping tokens; class-action fraud suit filed Feb 2026 |
| **Fake "ClawdBot" ($CLAWD)** | Impersonated a real AI project during its rebrand | Hit $16M market cap before the real founder publicly disavowed it, then crashed ~90% |
| **PolyTrader / Polytragent** | AI research/trading agents for Polymarket | Thin AI-assistant wrappers per independent writeups, no demonstrated PnL |
| **`Polymarket/agents`** (official GitHub repo) | Dev framework for building Polymarket trading agents | A toolkit, not a branded agent with a track record |

**No major crypto trading firm** (Wintermute, Jump, DRW/Cumberland) has publicly named a specific autonomous AI trading agent product — the closest things are infrastructure plays: Coinbase's Agentic Wallets/x402, MetaMask's Agent Wallet, Robinhood's agent rollout. These are rails for agents to plug into, not a firm's own branded trading persona.

**The cautionary data point worth remembering:** the Step Finance breach (Jan 2026, ~$40M) happened because a DeFi platform's AI trading agents had excessive wallet permissions with no isolation — attackers used the agents themselves to drain the treasury. If you ever give a bot real signing authority, that's the failure mode to design against (this is exactly what Hyperliquid's scoped "agent wallets" and Coinbase's policy-engine-in-a-TEE approach, both covered in the earlier rails survey, are built to prevent).

---

## What this means for your build

Nobody has actually solved this yet in a way that's both named/branded *and* independently proven — which is either bad news (no shortcut, no template to copy) or good news (the field is much more open than "AI trading bot" marketing makes it look), depending on how you want to read it. The two entities in this whole survey with real institutional-grade validation — Numerai and Qraft's AMOM — got there by being unusually transparent about method (Numerai's whole design is auditable-by-construction via the staking mechanism; Qraft partnered with LG AI Research and published real cumulative numbers) rather than by out-marketing everyone else. That's probably the actual lesson, more than any specific name to emulate.
