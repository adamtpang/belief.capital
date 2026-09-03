export const SITE_URL = "https://www.belief.capital";
export const PUBLIC_CONTACT_EMAIL = "adam@adampang.com";
export const PROJECT_LAUNCH_DATE = "2026-08-15";
export const POLICY_EFFECTIVE_DATE = "2026-08-28";

export const HOME_TITLE = "belief.capital | AI Trading Research";
export const HOME_DESCRIPTION =
  "Public research on AI-driven trading systems across prediction markets, onchain rails, and traditional venues. No live trading or outside capital.";

export const publicPages = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/research", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
] as const;

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "belief.capital",
      url: `${SITE_URL}/`,
      email: `mailto:${PUBLIC_CONTACT_EMAIL}`,
      description:
        "A personal research project documenting the development of an AI-driven, multi-venue trading system.",
      sameAs: ["https://github.com/adamtpang/belief.capital"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "belief.capital",
      url: `${SITE_URL}/`,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      name: HOME_TITLE,
      url: `${SITE_URL}/`,
      description: HOME_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
} as const;
