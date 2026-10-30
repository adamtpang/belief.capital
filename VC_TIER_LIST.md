# Aether projects: VC-backability tier list

Written 2026-10-30. Companion to `CAPITAL_ALLOCATORS.md`.

None of these projects is VC-backable today. VCs fund traction plus a market
that could reach $1B, and the fleet audits (`MONEY_FORMULA.md` at the Aether
root) show zero verified stranger revenue or active user base on any project.
This list ranks **venture potential if traction came**, not readiness.

## How it was judged

Sources: the manifests (`repos.yaml`) of 80 live and in-progress projects from
`fleet.json`, the `MONEY_FORMULA.md` audit, and the GitHub repo list. Apps were
not run one by one. The archived idea album and client work were skipped.
Category comparables are from general knowledge and were not freshly verified.

Each project was scored on:

- **Market size:** could it reach $100M+ a year in revenue?
- **2026 money flow:** is venture money going into this category right now?
- **Defensibility:** what would stop a funded competitor from copying it?
- **Founder fit:** does the founder use it and know the problem?

## The tier list

**S: ready to raise.** None. That needs paying users growing every week.

**A: venture-scale category with money flowing in now**

| Project | Why it could be venture-scale | Biggest risk |
|---|---|---|
| **skill.supply** | AI agents that place people in jobs are among the most funded categories of 2025 to 2026; Mercor is the comparable. Hiring is a huge market. Matches the talent-allocation thesis. | Crowded and capital-hungry. Overlaps darktalent.tech. |
| **cleared.chat** | An AI inbox that ranks open loops and drafts replies across WhatsApp. Messaging is used daily by billions, and it was built for the founder's own use. Most-starred repo in the fleet. | Depends on WhatsApp access that Meta can restrict. Overlaps sprite.email. |
| **lightmark.app** | Checks how a site looks to AI crawlers, a category that barely existed two years ago and where startups like Profound have raised. Earned a 100/A score on deathmoney.fyi in production. | Many competitors appeared fast, and it may stay a feature rather than a company. |

**B: real category, weaker position**

- **waterfall.sh:** model routing is a real need, but OpenRouter and the model
  labs can add it themselves.
- **sprite.email:** should merge into cleared.chat. On its own it is a crowded
  email client, and it is blocked on Google verification.
- **repos.chat:** agent-to-agent developer tooling is early and interesting,
  but there are no users and no clear buyer yet.
- **summon.guide / summon.company:** AI personas built on large text libraries
  have a comparable in Delphi, but consumer chat is crowded and quoting real
  people's content carries rights risk.
- **darktalent.tech:** fold into skill.supply as its scouting side.
- **sellsniper.com:** AI that finds buyers for a product is useful, but it is
  more a tool than a company.
- **iron.credit:** a bitcoin-backed credit card is a large market, but it needs
  licenses, lending capital and a fintech team. Very hard solo.

**C: good small businesses, not venture-scale.** Fine for cash, wrong for VC.

- beware.dog, youchop.app, anchormarianas.com, deathmoney.fyi, moneymeta.fun,
  portal.voyage, pokedex.life, everybot.fun
- **belief.capital:** VCs don't fund trading strategies. If it works, the money
  comes from fund investors after a track record.

**D: content, research or personal tools, not companies**

- optimism.fun, themain.quest, company.university, senrajobs.com,
  worldcupelo.com, the `.school` and `.college` sites, technodemocracy.app

**Not applicable:** client work (Quantus, IDI), and community builds like
townhall.town.

## What this means

- **The A tier has a theme.** All three are AI agents doing a specific job for
  a specific person, which is where 2026 seed money is going.
- **Pick one, not three.** VCs back a founder obsessed with one problem.
- **The test before any pitch:** 10 strangers using it every week without
  being asked twice. Y Combinator's application asks for exactly that.

Pick: **skill.supply**, for thesis fit and category funding. **cleared.chat**
if the deciding factor is building the thing used every day.

## What would make an idea S tier

An S-tier idea has all six of these at once. Missing any one drops it a tier.

1. **Proof people want it badly.** Strangers use it every week without
   reminders, and some pay. Usage growing 5 to 10% a week is the YC bar.
2. **A market that can reach $1B.** Enough buyers paying enough that $100M+ a
   year in revenue is plausible. Venture funds need a few huge wins to return
   the whole fund, so they skip markets that cap out smaller.
3. **Why now.** Something just changed (a new technology, a law, a price drop)
   that makes this possible or necessary this year and not five years ago.
   Without it, the obvious question is why nobody already did it.
4. **A secret.** The founder knows something true about the market that most
   smart people disagree with or have not noticed. If everyone agrees it is a
   good idea, it is already crowded.
5. **A moat that grows.** It gets harder to copy as it grows: network effects,
   proprietary data, switching costs, or brand. A feature a big company can
   add in a sprint is not a moat.
6. **The right founder.** Obsessed with the problem, with unusual insight or
   access, and able to recruit and sell.

Every Aether project fails test 1 today, so nothing can be above A. Test 1 is
also the only one a founder fully controls: it is earned by putting the product
in front of strangers, the REACH link in `MONEY_FORMULA.md`.
