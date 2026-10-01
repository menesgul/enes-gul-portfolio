import Link from "next/link";

import type { LogEntry } from "@/lib/content/logs";
import { formatDateRange } from "@/lib/dates";

import { ArrowRight } from "@/components/shared/ArrowRight";

type LatestLogProps = {
  log?: LogEntry;
};

export function LatestLog({ log }: LatestLogProps) {
  if (!log) {
    return <p className="content-empty-state">The first weekly entry is being prepared.</p>;
  }

  const itemTitles = log.items.flatMap((item) => (item.title ? [item.title] : [])).slice(0, 4);

  return (
    <article className="log-preview">
      <div className="log-preview-heading">
        <h3>{log.title}</h3>
        <time dateTime={log.endDate}>{formatDateRange(log.startDate, log.endDate)}</time>
      </div>
      {itemTitles.length ? (
        <ul className="log-preview-items">
          {itemTitles.map((title) => <li key={title}>{title}</li>)}
        </ul>
      ) : null}
      <Link className="inline-link" href={`/log#${log.slug}`}>
        View full week
        <ArrowRight />
      </Link>
    </article>
  );
}
