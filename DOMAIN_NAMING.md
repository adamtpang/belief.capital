# Domain naming — the full research log

**Result: `belief.capital`, purchased August 2026.**

This document is the trail of how we got there, kept in full because the rejected
candidates are a real shortlist worth revisiting if `belief.capital` ever needs a
sibling domain (a `.com` redirect, a docs site, a second product).

## Round 1 — `.xyz`, relevance + low syllable count

Started from "what evokes a bot that trades and makes money like Jim Simons."
Generated 20+ candidates, rated by syllable count / thesis relevance / price, all
checked live via Vercel's domain API at $1.99/yr intro pricing. Consolidated top 10:

`turingtrade.xyz`, `cipherquant.xyz`, `patternquant.xyz`, `compoundsage.xyz`,
`franklinquant.xyz`, `newtonquant.xyz`, `simonsignal.xyz`, `midasmind.xyz`,
`sagevault.xyz`, `keplerbot.xyz` — with `turingtrade.xyz` as the top pick.

Also considered and rejected: `compoundbot.xyz` / `compound.xyz` (name collision
risk with Compound Finance, the DeFi lending protocol), `simonsays.xyz` (too
gimmicky/childish for a serious quant fund).

## Round 2 — rejecting `.xyz`

Adam's call: "xyz is a messy tld so i want a clean name." Correct call — `.xyz`
was the cheapest available option at the time, never the *best* one. Checked the
top-10 names above across `.com`, `.co`, `.io`, `.ai`, `.app`, `.dev`, `.net`,
`.trade`, `.finance`, `.fund`, `.capital`, `.money`, `.tech`, `.bot`:

- `.co` was cheap ($4.99) across the board but **rejected**: spoken aloud it's
  indistinguishable from `.com`, which fails the explicit "phone-spellable"
  requirement.
- `.com` was mostly already taken for the good names (only `patternquant.com` /
  `compoundsage.com` were open, at ~$11.25/yr — technically over the $10 budget).
- `.io` ($30), `.ai` ($160/2yr), `.trade` ($27), `.bot` ($65), `.money` ($20) —
  all too expensive for the stated budget.
- **`.capital`** ($9.99/yr, e.g. `turingtrade.capital`) won: in budget,
  unambiguous over the phone, and thesis-relevant on its own terms (a fund
  trades capital) rather than just tolerated.

## Round 3 — `.capital` banger search (generic quant/genius words)

Checked 30+ single premium words on `.capital`: `turing`, `newton`, `kepler`,
`euler`, `davinci`, `axiom`, `apex`, `vertex`, `cipher`, `pattern`, `compass`,
`sigma`, `sage`, `atlas`, `prime`, `north`, `vector`, `quant`, `edge`, `oracle`,
`lucid`, `forge`, `helix`, `nexus`, `zenith`, `summit`, `codex`, `simons`,
`franklin`. **29 of 30 were already squatted.** Only `medallion.capital`
survived — a direct homage to Renaissance Technologies' actual fund (Medallion),
short, recognizable, reads as a legit standalone finance brand. Flagged one real
caveat: Medallion Fund is still operating under RenTech, so using its exact name
for a competing product carries real trademark-confusion risk — worth a
trademark gut-check before building a brand on it, not necessarily a dealbreaker.

Compound-word fallback (all open, $9.99): `turingquant.capital`,
`keplerquant.capital`, `newtonquant.capital`, `cipherquant.capital`,
`patternquant.capital`, `davinciquant.capital`, `eulerquant.capital`,
`franklinquant.capital`, plus `gaussian.capital`, `purequant.capital`,
`latentedge.capital`, `mnemonic.capital` (all open).

## Round 4 — GOAT investors chart (tangent, not naming, but informed it)

Built `goat-investors-chart.html`: annualized return vs. longevity across
history's best investors (Simons, Buffett, Munger, Druckenmiller, Soros, Thorp,
Sleep, etc.), reliability-tiered by how well-documented each figure is. Ludwig
Jesselson researched and excluded — he was chairman of Philipp Brothers (a
commodities trading house), not a fund manager, so no annualized return exists
to plot. Confirmed the "GOAT debate" really does come down to Simons (~66%/yr,
capacity-capped) vs. Buffett (~20%/yr, uncapped, 60+ year track record) —
different games (short-horizon edge-compounding vs. long-horizon compounding at
scale).

## Round 5 — naming-scheme lessons from the competitive landscape

Surveyed existing branded trading bots/AI agents (`AI_TRADING_BOTS_LANDSCAPE.md`).
Pattern found: **plain, serious names (Numerai, AIEQ, AMOM/QRFT) correlate with
real institutional backing; buzzword-stacked "hype" names (Moonsage Alpha,
Zerebro) correlate with unverified or outright fraudulent claims** in this
dataset. Used as a live rationale for preferring plain, story-accurate names
over cute/hype ones — reinforced the case for `.capital` names like
`gaussian.capital` or `purequant.capital` over anything more gimmicky.

## Round 6 — mythical/legendary wealth words

Brainstormed and checked words evoking legendary wealth: `midas`, `croesus`,
`plutus`, `mammon`, `fortuna`, `ophir`, `xanadu`, `golconda`, `chrysos`,
`kubera`, `sovereign`, `doubloon`, `aureus`, `argonaut`, `tarshish`, `danae`,
`ploutos`, `ingot`, `hoard`, `trove` on `.capital`. Most obvious ones
(midas, plutus, fortuna, ophir, golconda, sovereign, aureus, argonaut, trove)
were taken. Open and ranked:

1. **`croesus.capital`** — top pick of this round. "Rich as Croesus" is a still-
   live English idiom (King of Lydia, richest man in antiquity) — lands without
   needing the myth explained. Minor spelling risk on the phone ("oe").
2. **`mammon.capital`** — short, biblical, universally recognized, trivially easy
   to spell. Carries a greed connotation — could be a feature or a bug.
3. **`xanadu.capital`** — legendary palace of splendor (Coleridge, Citizen Kane).
   Reads more "opulence/old money" than "earned edge" — slightly off-thesis.
4. `doubloon.capital` / `hoard.capital` — fun, mythic, but pirate-whimsical /
   "passive treasure" respectively — both cut against the serious-quant-fund
   register.
5. `tarshish.capital` / `danae.capital` — technically open, but too obscure and
   not phone-spellable. Skipped.

## Round 7 — checked specific names on request

- `optimism.capital` / `optimism.fund` — **both taken** per Vercel's check
  (worth re-verifying at a registrar directly if a listing shows otherwise
  elsewhere). Independent of availability, flagged as a poor fit either way:
  collides with Optimism (OP), a major Ethereum L2, which is a real confusion
  risk given this bot may eventually touch onchain rails — and it also
  overlaps with Adam's own `/optimism` life-coaching skill namespace.
- `mammoth.capital` — taken. Open variants at $9.99: `mammothtrade.capital`,
  **`mammothquant.capital`** (matches the genius-quant naming family),
  `mammothfund.capital`, **`mammothedge.capital`** (reads as a real fund name),
  `mammothalpha.capital`, `mammothsignal.capital`, `trademammoth.capital`,
  `getmammoth.capital`, `mammothbot.capital` (last two read more
  consumer-product than serious-fund).

## Round 8 — reviewed Adam's existing saved-domains pile

Cross-checked ~19 previously-saved domains from other projects for relevance to
this one. Verdict: essentially none fit — they read as leftovers for other
ideas in the portfolio (a password-manager pun, a CEO dashboard tool, a
construction company, a hair product, a dog app, etc.). Two came close but
still missed: `optimism.fund` (right TLD category, wrong word — see the
Optimism/OP collision above) and `quantus.school` (great root word, echoes
"quant," but `.school` signals an education platform, wrong category
entirely).

## Round 9 — "fund" vs. "capital": a framing decision, not just a naming one

Adam correctly flagged that "fund" implies something specific: a pooled
investment vehicle taking outside money, which is what Renaissance Technologies
actually is — SEC-registered, accredited-investor rules, the full regulatory
apparatus. What's being built here is an algorithmic trading bot, most likely
trading Adam's own capital first, not soliciting outside investors. `.capital`
doesn't carry that implication — "capital" just means money/assets, no
pooled-vehicle promise attached. **Practical takeaway: avoid "fund" language in
branding/docs/marketing unless and until this is actually operating as one.**
`.capital` was the more accurate choice on top of being the cleaner-sounding
one.

## Round 10 — `belief.capital` found and purchased

Adam found `belief.capital` independently ($9.99/yr, available). Different
register than everything else on this list — not mythical, not math-coded,
*philosophical*. "Belief" evokes conviction: sizing a position because you
believe in your model/edge, the opposite of noise-trading. Short (2 syllables),
trivially phone-spellable, reads as a serious, deliberate name on its own with
zero backstory required — the tradeoff is it doesn't carry the "legendary
wealth" or "genius quant" imagery the rest of this search was built around, so
someone hearing it cold won't immediately guess "Simons-style pattern-detection
bot." **Adam purchased it and it's now the project's name.**

## Retained shortlist (in case a sibling domain is ever needed)

| Domain | Why it's still worth knowing about |
|---|---|
| `croesus.capital` | best mythic-wealth resonance, real idiom |
| `medallion.capital` | direct RenTech homage — trademark caveat above |
| `mammothquant.capital` / `mammothedge.capital` | mammoth + quant-family naming |
| `gaussian.capital` | single word, real quant-math pedigree |
| `purequant.capital` | plain/serious, matches the "plain names = real backing" pattern |
| `turingtrade.capital` | the original #1 pick, clean TLD |
