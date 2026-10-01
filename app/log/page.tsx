import type { Metadata } from "next";

import { LogTimeline } from "@/components/log/LogTimeline";
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
        <div className="log-archive">
          {logs.map((log, index) => (
            <details id={log.slug} key={log.slug} open={index === 0}>
              <summary>
                <span className="log-week-heading">{log.title}</span>
                <time dateTime={log.endDate}>{formatDateRange(log.startDate, log.endDate)}</time>
                <span className="log-week-toggle" aria-hidden="true" />
              </summary>
              <div className="log-week-content">
                <LogTimeline items={log.items} />
              </div>
            </details>
          ))}
        </div>
      ) : (
        <p className="content-empty-state">No weekly entries yet.</p>
      )}
    </>
  );
}
