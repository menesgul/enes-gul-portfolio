import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/shared/MarkdownContent";
import { ArrowUpRight } from "@/components/shared/ArrowUpRight";
import { formatTags } from "@/lib/content/tags";
import { formatDate } from "@/lib/dates";
import { getPublishedWriting, getWritingBySlug } from "@/lib/content/writing";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedWriting().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);

  if (!entry) return {};

  return { title: entry.title, description: entry.description };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);

  if (!entry) notFound();

  if (entry.externalUrl) {
    return (
      <article className="content-detail">
        <header className="detail-intro">
          <p className="page-kicker">Writing</p>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
        </header>
        <a className="inline-link" href={entry.externalUrl} target="_blank" rel="noopener noreferrer">
          Read the article
          <ArrowUpRight />
        </a>
      </article>
    );
  }

  return (
    <article className="content-detail">
      <header className="detail-intro">
        <p className="page-kicker">Writing</p>
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
      </header>
      {entry.publishedAt || entry.tags.length ? (
        <dl className="content-metadata">
          {entry.publishedAt ? (
            <div>
              <dt>Published</dt>
              <dd>{formatDate(entry.publishedAt)}</dd>
            </div>
          ) : null}
          {entry.tags.length ? (
            <div>
              <dt>Tags</dt>
              <dd>{formatTags(entry.tags)}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
      <MarkdownContent content={entry.body} />
      <Link className="inline-link detail-back-link" href="/writing">
        Back to writing
      </Link>
    </article>
  );
}
