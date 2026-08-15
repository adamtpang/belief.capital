export type ResearchDoc = {
  slug: string;
  title: string;
  description: string;
  file: string;
};

export const researchDocs: ResearchDoc[] = [
  {
    slug: "idea-maze",
    title: "The Polymarket Trading Bot Idea Maze",
    description:
      "Who is actually winning on Polymarket today, what does and does not transfer from Renaissance Technologies' methodology, and seven strategy branches rated by feasibility and crowding.",
    file: "IDEA_MAZE.md",
  },
  {
    slug: "trading-rails",
    title: "How an AI Agent Can Actually Trade: The Full Rail Map",
    description:
      "Every venue and protocol surveyed for an autonomous trading agent: broker APIs, prediction markets and betting exchanges, and onchain agent-native rails.",
    file: "TRADING_RAILS_SURVEY.md",
  },
  {
    slug: "trading-bots-landscape",
    title: "The Best Trading Bots and AI Agents on the Market, Rated Honestly",
    description:
      "A survey of branded trading bots and AI agents already on the market, split honestly between what has a real track record and what is mostly marketing.",
    file: "AI_TRADING_BOTS_LANDSCAPE.md",
  },
];

export function getResearchDoc(slug: string) {
  return researchDocs.find((doc) => doc.slug === slug);
}
