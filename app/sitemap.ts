import type { MetadataRoute } from "next";
import { researchDocs } from "@/lib/research";
import {
  POLICY_EFFECTIVE_DATE,
  PROJECT_LAUNCH_DATE,
  SITE_URL,
  publicPages,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = publicPages.map((page) => ({
    url: page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`,
    lastModified:
      page.path === "/privacy" || page.path === "/contact" || page.path === "/about"
        ? POLICY_EFFECTIVE_DATE
        : PROJECT_LAUNCH_DATE,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const researchPages: MetadataRoute.Sitemap = researchDocs.map((document) => ({
    url: `${SITE_URL}/research/${document.slug}`,
    lastModified: PROJECT_LAUNCH_DATE,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...researchPages];
}
