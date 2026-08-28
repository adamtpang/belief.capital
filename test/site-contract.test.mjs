import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { buildContentSecurityPolicy } from "../lib/security.ts";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_URL,
  homepageJsonLd,
  publicPages,
} from "../lib/site.ts";

test("homepage metadata and schema use the canonical production identity", () => {
  assert.ok(HOME_TITLE.length >= 20 && HOME_TITLE.length <= 65);
  assert.ok(HOME_DESCRIPTION.length >= 70 && HOME_DESCRIPTION.length <= 170);
  assert.equal(SITE_URL, "https://www.belief.capital");

  const organization = homepageJsonLd["@graph"].find(
    (node) => node["@type"] === "Organization",
  );
  const webpage = homepageJsonLd["@graph"].find(
    (node) => node["@type"] === "WebPage",
  );

  assert.equal(organization?.url, `${SITE_URL}/`);
  assert.equal(webpage?.url, `${SITE_URL}/`);
});

test("the public page inventory includes every trust anchor", () => {
  const paths = new Set(publicPages.map((page) => page.path));
  assert.ok(paths.has("/about"));
  assert.ok(paths.has("/contact"));
  assert.ok(paths.has("/privacy"));
  assert.ok(paths.has("/research"));
});

test("production CSP is nonce-based and contains no unsafe wildcard source", () => {
  const policy = buildContentSecurityPolicy("test-nonce");
  assert.match(policy, /script-src 'self' 'nonce-test-nonce' 'strict-dynamic'/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /upgrade-insecure-requests/);
  assert.doesNotMatch(policy, /unsafe-inline|unsafe-eval|\*/);
});

test("llms.txt identifies the project, key pages, and current boundaries", async () => {
  const content = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
  assert.match(content, /belief\.capital/);
  assert.match(content, /https:\/\/www\.belief\.capital\/research/);
  assert.match(content, /no trading strategy is live/i);
  assert.match(content, /no outside capital/i);
});
