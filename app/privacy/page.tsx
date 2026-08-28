import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How belief.capital handles website requests, cookies, analytics, third-party hosting, and email contact.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12 sm:py-20"
    >
      <SiteHeader />
      <article>
        <p className="text-sm uppercase tracking-widest text-white/50">Privacy</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Effective <time dateTime="2026-08-28">August 28, 2026</time>
        </p>
        <div className="mt-8 space-y-6 leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-medium text-white">What the site collects</h2>
            <p className="mt-3">
              belief.capital does not use an account system, web contact form,
              advertising pixel, or analytics script. The initial website
              response sets no cookies. The site therefore does not directly
              ask visitors for names, payment details, trading credentials, or
              other personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-white">Hosting data</h2>
            <p className="mt-3">
              The site is hosted by Vercel. Like other web hosts, Vercel may
              process request data such as an IP address, browser and device
              information, requested URL, timestamp, and security events to
              deliver and protect the service. That processing is governed by
              Vercel&apos;s own terms and privacy policy.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-white">Email contact</h2>
            <p className="mt-3">
              The contact link opens the visitor&apos;s email application. If you
              choose to send a message, the message and address are handled by
              your email provider and Adam&apos;s email provider rather than by a
              form on belief.capital. Email may be retained for as long as it
              is useful to answer the message or preserve relevant project
              context. Do not email account credentials, API keys, payment
              details, or other sensitive financial information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-white">Sharing and links</h2>
            <p className="mt-3">
              belief.capital does not sell visitor data. Request data may be
              processed by Vercel for hosting and security, and email data is
              processed by the providers involved in delivery. Research pages
              also link to third-party sources; visiting those sites makes
              their privacy practices apply.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-white">Questions</h2>
            <p className="mt-3">
              For a privacy question, email {PUBLIC_CONTACT_EMAIL}. The policy
              will be updated if the site later adds accounts, forms, analytics,
              payments, or other data collection.
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
