import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getResearchDoc, researchDocs } from "@/lib/research";

export function generateStaticParams() {
  return researchDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getResearchDoc(slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | belief.capital`,
    description: doc.description,
  };
}

const markdownComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="mb-4 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-3 text-lg font-medium" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed text-white/70" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-white/90 underline underline-offset-4 hover:text-white"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-white/70" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-white/70" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="text-white/60" {...props} />
  ),
  hr: () => <hr className="my-8 border-white/10" />,
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mb-4 border-l-2 border-white/20 pl-4 text-white/60"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="mb-6 overflow-x-auto border border-white/10">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-b border-white/10 bg-white/5" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th
      className="px-3 py-2 text-left font-medium text-white/80"
      {...props}
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      className="border-t border-white/10 px-3 py-2 align-top text-white/60"
      {...props}
    />
  ),
};

export default async function ResearchDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getResearchDoc(slug);
  if (!doc) notFound();

  const filePath = path.join(/* turbopackIgnore: true */ process.cwd(), doc.file);
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-24">
      <Link
        href="/research"
        className="mb-10 text-sm text-white/50 underline underline-offset-4 hover:text-white"
      >
        Back to research
      </Link>
      <article>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
