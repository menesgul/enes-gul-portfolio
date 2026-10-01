import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LogTimeline } from "@/components/log/LogTimeline";
import { formatDateRange } from "@/lib/dates";
import { formatTags } from "@/lib/content/tags";
import { getAllLogs, getLogBySlug } from "@/lib/content/logs";

type LogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLogs().map((log) => ({ slug: log.slug }));
}

export async function generateMetadata({ params }: LogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) return {};

  return { title: log.title, description: log.summary ?? "A weekly technical and professional log entry." };
}

export default async function LogDetailPage({ params }: LogPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) notFound();

  return (
    <article className="content-detail">
      <header className="detail-intro">
        <p className="page-kicker">Weekly Log</p>
        <h1>{log.title}</h1>
        <p>{formatDateRange(log.startDate, log.endDate)}</p>
      </header>
      {log.topics.length ? (
        <dl className="content-metadata">
          <div>
            <dt>Topics</dt>
            <dd>{formatTags(log.topics)}</dd>
          </div>
        </dl>
      ) : null}
      <div className="log-detail-timeline">
        <LogTimeline items={log.items} />
      </div>
      <Link className="inline-link detail-back-link" href="/log">
        Back to log
      </Link>
    </article>
  );
}
