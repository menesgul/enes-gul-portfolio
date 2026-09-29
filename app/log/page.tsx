import type { Metadata } from "next";
import Link from "next/link";

import { formatDateRange } from "@/lib/dates";
import { getAllLogs } from "@/lib/content/logs";

export const metadata: Metadata = { title: "Log", description: "A lightweight weekly technical and professional journal by Enes Gül." };

export default function LogPage() {
  const logs = getAllLogs();

  return (
    <>
      <header className="archive-intro">
        <p className="page-kicker">Journal</p>
        <h1>Log</h1>
        <p>Weekly notes on the work, tools, and events I have been spending time with.</p>
      </header>
      {logs.length ? (
        <ol className="archive-list">
          {logs.map((log) => (
            <li key={log.slug}>
              <Link href={`/log/${log.slug}`}>{log.title}</Link>
              <time dateTime={log.endDate}>{formatDateRange(log.startDate, log.endDate)}</time>
              {log.summary ? <p>{log.summary}</p> : null}
            </li>
          ))}
        </ol>
      ) : (
        <p className="content-empty-state">No weekly entries yet.</p>
      )}
    </>
  );
}
