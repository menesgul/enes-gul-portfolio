import Link from "next/link";

import type { LogEntry } from "@/lib/content/logs";

import { ArrowRight } from "@/components/shared/ArrowRight";

type LatestLogProps = {
  log?: LogEntry;
};

export function LatestLog({ log }: LatestLogProps) {
  if (!log) {
    return <p className="content-empty-state">The first weekly entry is being prepared.</p>;
  }

  const previewSections = log.sections.filter((section) => section.items.length).slice(0, 2);

  return (
    <article className="log-preview">
      <p className="log-preview-summary">
        {log.summary ?? log.title}
      </p>
      <dl className="log-preview-details">
        {previewSections.map((section) => (
          <div key={section.heading}>
            <dt>{section.heading}</dt>
            <dd>{section.items.join(" ")}</dd>
          </div>
        ))}
      </dl>
      <Link className="inline-link" href={`/log/${log.slug}`}>
        Read the log
        <ArrowRight />
      </Link>
    </article>
  );
}
