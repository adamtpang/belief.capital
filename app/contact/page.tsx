import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Adam about belief.capital research corrections, sources, market infrastructure, or technical collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12 sm:py-20"
    >
      <SiteHeader />
      <section>
        <p className="text-sm uppercase tracking-widest text-white/50">Contact</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Share a correction or useful context
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-white/70">
          <p>
            Email is the direct contact path for belief.capital. Useful messages
            include corrections to a published note, primary sources that
            change a conclusion, details about market infrastructure, and
            technically specific collaboration ideas.
          </p>
          <p>
            The project is not accepting outside capital and does not offer a
            managed account, advisory service, or trading signal subscription.
            Please do not send money, account credentials, API keys, or other
            sensitive financial information.
          </p>
          <a
            href={`mailto:${PUBLIC_CONTACT_EMAIL}?subject=belief.capital%20research`}
            className="inline-flex rounded-md bg-white px-4 py-2 font-medium text-black hover:bg-white/85"
          >
            Email Adam about the research
          </a>
          <p className="text-sm text-white/50">
            This link opens your email application. belief.capital does not run
            a web contact form or collect message contents on this site.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
