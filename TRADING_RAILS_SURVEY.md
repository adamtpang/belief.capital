# How an AI Agent Can Actually Trade: The Full Rail Map (Aug 2026)

*Every venue and protocol found (stocks, prediction markets, betting exchanges, and onchain), with what's real vs. hype, and a domain shortlist for the project.*

---

## 0. Domain names ($1.99/yr on Vercel, checked live)

All 12 below are available right now at Vercel's $1.99/year intro price (renewal is usually higher, so check before locking in years ahead, but for under $10 to grab and try, all of these clear it with room to spare):

**Maze/edge theme:** `edgemaze.xyz` · `edgemaze.fun` · `mazeedge.xyz` · `quantmaze.xyz` · `signalmaze.xyz` · `convexedge.xyz` · `probedge.xyz`

**Gap/oracle theme:** `pricegap.xyz` · `oraclegap.xyz`

**Playful/direct:** `longshotbot.xyz` · `yesnobot.xyz` · `calibrated.fun`

My picks if you want one recommendation: **`edgemaze.xyz`** (matches the "idea maze" framing directly, reads clean) or **`probedge.xyz`** (short, literally "probability edge," works whether you end up building sports-model, arbitrage, or market-making). Taken/unavailable, for reference: oddsgap, fairvalue, sharpline, basispoint, wagerwise, fairodds, gapbot, wisewager (all .xyz).

---

## 1. Traditional/regulated markets (stocks, options, futures, forex)

The big story here: 2026 is the year brokers started building **for** AI agents instead of agents scraping around them. A Finance Magnates study found at least 10 brokers launched live-account AI-agent trading integrations between January and June 2026. Claude powers 9 of the 10. Every single one enforces the same rule: **the agent can never move or withdraw money**; it's either draft-and-approve, or autonomous-but-confined-to-a-funds-isolated sub-account.

**Best for building an actual bot (not just chat-to-trade):**
- **Alpaca**: the closest thing to "made for this." Stocks, options, crypto in one API, free unlimited paper trading, an official MCP server, a CLI, and an agent-skills repo. Alpaca raised $135M in 2025/26 explicitly to build "agent-first brokerage infrastructure" and reports ~4x growth in API users in six months.
- **QuantConnect (LEAN)**: open-source backtesting engine with 25+ live-brokerage integrations (IBKR, Alpaca, Tradier, tastytrade, Binance, Kraken, OANDA, dYdX...). If you want to backtest before risking anything, this is the standard tool.
- **Interactive Brokers**: broadest coverage (170+ markets, stocks/options/futures/forex/bonds), TWS/Client Portal/FIX APIs, real paper accounts, and now an official Claude connector (June 2026), though that one's draft-and-approve only, not autonomous.
- **Tradier**, **TradeStation** (official MCP, $10K min balance), **tastytrade**, **Webull** (official MCP + Agent Skills, sandbox), **Public.com** (hosted MCP, published trade caps): all legitimate, all have some flavor of agent tooling as of 2026.
- **Robinhood**: launched official "Agentic Trading" in beta May 2026 (MCP server, ring-fenced sub-account, can execute without per-trade approval if you authorize it). A hands-on review from a developer called it "half-baked": no paper trading, buggy OAuth, equities-only. Worth knowing about, not worth building on yet.
- **OANDA** is the standard for forex/algo bots specifically: v20 REST API, free demo account, historical data back to 2005.

**Regulatory note that matters if you go this route:** the Pattern Day Trader rule (the old $25K minimum for 4+ day-trades in 5 days) was **eliminated in June 2026**, replaced by a risk-based intraday margin framework, which materially lowers the capital bar for running a day-trading bot on a margin account.

**Full comparison table**, from the research:

| Broker | Assets | Sandbox | Official agent/MCP tooling |
|---|---|---|---|
| Alpaca | Stocks, options, crypto | Yes, free paper | Yes, MCP, CLI, agent-skills |
| Interactive Brokers | Stocks, options, futures, forex, bonds | Yes | Yes, Claude connector (approval-only) |
| Tradier | Stocks/ETFs, options | Yes | Community only |
| TradeStation | Stocks, options, futures | Yes | Yes, official MCP |
| Charles Schwab | Stocks, options | Not confirmed | Community only |
| Robinhood | Stocks (options/crypto "coming") | No | Yes, official MCP, buggy |
| Webull | Stocks, ETFs, options, futures, crypto | Yes | Yes, MCP + Agent Skills |
| Public.com | Stocks, ETFs, options, crypto, bonds | No | Yes, hosted MCP |
| tastytrade | Equities, options, futures, crypto | Yes | Community SDKs |
| OANDA | Forex, CFDs | Yes | None official |
| eToro | Stocks, crypto | No | Yes, Agent Portfolios API |

---

## 2. Prediction markets & betting exchanges

This is the category from the earlier research. Quick recap plus what's *new* since then:

**Real-money, US-legal, well-documented:**
- **Kalshi**: CFTC-regulated, REST/WebSocket/FIX, RSA-signed auth, has a demo sandbox. The most "just build against it" option in this category.
- **Novig** and **ProphetX**: new (2025-26) CFTC-regulated peer-to-peer sports exchanges, both with genuine developer docs (OAuth2, REST/WebSocket/GraphQL for Novig; REST+WS for ProphetX). Worth knowing about since they didn't exist in most people's mental model of this space a year ago.
- **Polymarket**: crypto/global, non-US-facing, CLOB V2 (broke all old SDKs in April 2026, use `-v2` clients).

**Play-money (good for backtesting/dev, zero real risk):**
- **Manifold Markets**: full API, `POST /v0/bet`, 500 req/min.

**Not a trading venue at all** (common confusion): **Metaculus** is forecast-aggregation, no shares, no order book: a signal source, not a place to trade.

**Exchanges outside the US** (structurally interesting because they don't limit winners: they earn commission on volume, not by beating you): **Betfair Exchange** (the mature gold standard, UK), **Smarkets**, **Matchbook**.

**Onchain, beyond Polymarket:** **SX Bet** (V3, genuinely bot-ready order-book API, EIP-712 signed orders) is the standout. **Azuro Protocol** and **Overtime Markets** (Thales, on Optimism) are real infrastructure but smaller/AMM-based. **Augur** is effectively dead, mentioned for completeness only.

**Reality check on retail sportsbooks** (DraftKings, FanDuel, BetMGM): **no public bet-placement API exists**, and these books actively limit/ban winning bettors algorithmically. Betting exchanges and CFTC-regulated prediction markets exist partly *because* of this: they profit from volume/commission, not from beating you, so they have no incentive to limit winners. Bots that try browser automation on retail sportsbooks face real ToS and detection risk.

**One more thing worth flagging**: **Pinnacle's public API, historically the "sharpest reference book" for fair-value sports pricing, shut down to the general public in July 2025.** If your bot needs a sharp reference price, plan around Betfair Exchange, The Odds API, or SportsGameOdds instead.

---

## 3. Onchain / crypto-native (including the newest "agent-native" rails)

This is the category that's moved fastest and is most directly about *AI agents specifically*, not just "APIs a bot happens to use."

**Centralized exchanges** (Coinbase, Binance, Kraken, OKX, Bybit) are all mature and well-documented: the boring-but-reliable layer. Coinbase stands out because of what's built on top of it (next section). OKX and Bybit both have particularly good demo/sandbox environments.

**Onchain DEXs/perps built for bots:**
- **Hyperliquid**: the most bot-native perps venue that exists. It has a first-class **"agent wallet"** primitive: a delegated signing key scoped to trade, without ever exposing your master wallet's key. This is exactly the primitive an autonomous trading bot wants.
- **dYdX v4**: its own app-chain, wallet-signed (not API keys), with a "Permissioned Keys" feature for the same delegated-scoped-signing idea.
- **GMX**: ships a dedicated `gmx-io/gmx-ai` repo of pre-built agent skills for Claude Code/Cursor, MCP server "in development."
- **Uniswap** (hosted Trading API + SDK), **Jupiter** (the default rail for Solana bots), **1inch** (cross-chain aggregation, has an MCP server).

**The genuinely new category, "agent-native" payment/trading rails (2025-2026):**
- **x402 (Coinbase)**: this is the one to know. Revives HTTP 402: a server says "pay $X," the agent signs an onchain stablecoin payment, resubmits, done, end to end in ~2 seconds. As of March 2026: **~119M transactions on Base, ~35M on Solana, ~$600M annualized volume.** This is real, production-scale infrastructure, not a whitepaper. Coinbase + Cloudflare formed the x402 Foundation to govern it as an open standard; Stripe integrated it in Feb 2026.
- **Coinbase AgentKit**: open-source, framework-agnostic toolkit so an AI agent can hold a wallet and transact (50+ actions, plugs into LangChain, MCP, OpenAI Agents SDK, Eliza, etc.).
- **Coinbase Agentic Wallets / CDP Wallets** (Feb 2026), the sharpest piece of infra in this whole survey for your purposes: private keys live inside AWS Nitro Enclaves and are **never exposed to the LLM or to Coinbase itself**, with a "Programmable Policy Engine" (spend caps, address allowlisting) enforced *below* the agent, meaning a prompt-injection or bad LLM output literally cannot exceed the policy, because the enforcement isn't the LLM's job.
- **Crossmint**, **Turnkey**, **Privy** (acquired by Stripe, June 2025): the other serious players in agent wallet/key infrastructure, split between "onchain-enforced policy" (Crossmint, Coinbase) and "off-chain signing-service policy" (Turnkey, Privy).
- **Virtuals Protocol / GAME framework**: Base-based, agents get tokenized treasuries they can trade with. Real and live, but heavy speculative/meme dynamics: read claims of agent "autonomy" skeptically.

**Worth knowing, cautionary tale:** **ai16z/ElizaOS** (the most widely-used open-source framework for crypto trading agents) had its associated token (once valued at $2.4B) declared "dead" by its founder on August 4, 2026, following a class-action lawsuit alleging the "autonomous AI-run venture fund" narrative was false and insiders actually controlled it. The open-source framework itself lives on; the "AI agent runs a treasury" story around it didn't survive contact with reality. Worth keeping in mind as you think about how to frame and market this: "the bot trades autonomously" is a claim people will now reasonably ask you to prove, not just assert.

**On documented "AI agents that already trade with real results"**: I'd treat almost all of the famous examples (Truth Terminal, aixbt, Freysa) skeptically. Truth Terminal's ~$1.5M in tracked wallet value is real, but the bot only generates text. A human controls the wallet. aixbt's actual documented track record is roughly a coin flip (~48% win rate on token calls). None of the widely-cited examples have a rigorously audited, fully-autonomous, no-human-in-the-loop PnL. Recall Network is an early, genuine attempt to fix this (cryptographically-verified agent trading competitions) but is still Phase 1.

---

## 4. What this means for picking a lane

Given everything above plus the earlier Polymarket research, three realistic "which rail" paths:

1. **Prediction-market-only** (the original idea maze): Kalshi + Polymarket, maybe Novig/ProphetX. Most novel edge, most competitive already (institutional desks moved in).
2. **Crypto-perps/DeFi**: Hyperliquid's agent wallets are the single best-designed primitive in this entire survey for "let a bot trade autonomously, safely." If the strategy itself (not the plumbing) is the hard part, this is the easiest plumbing.
3. **Traditional stocks/options via Alpaca**: most regulatory clarity, best backtesting tooling (QuantConnect), but the most crowded, most efficiently-priced market of the three, hardest to find genuine edge in.

None of these are mutually exclusive with the Polymarket idea-maze research: Kalshi/Polymarket/Novig/ProphetX all slot into "branch of a broader multi-venue bot" if that's the direction you want.
