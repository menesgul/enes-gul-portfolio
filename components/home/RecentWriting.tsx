import Link from "next/link";

import type { WritingEntry } from "@/lib/content/writing";

import { ArrowRight } from "@/components/shared/ArrowRight";

type RecentWritingProps = {
  entries: WritingEntry[];
};

export function RecentWriting({ entries }: RecentWritingProps) {
  if (entries.length) {
    return (
      <ol className="writing-list">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/writing/${entry.slug}`}>{entry.title}</Link>
            <p>{entry.description}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="writing-empty-state">
      <p>
        No published notes yet.
      </p>
      <Link className="inline-link" href="/writing">
        Visit writing
        <ArrowRight />
      </Link>
    </div>
  );
}
