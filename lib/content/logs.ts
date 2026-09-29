import { join } from "node:path";

import { parseContentDate } from "@/lib/dates";

import {
  getMarkdownFiles,
  optionalString,
  optionalStringArray,
  readMarkdownFile,
  requiredString,
} from "./markdown";
import { normalizeTags } from "./tags";

export type LogSection = {
  heading: string;
  items: string[];
};

export type LogEntry = {
  body: string;
  endDate: string;
  sections: LogSection[];
  slug: string;
  startDate: string;
  summary?: string;
  title: string;
  topics: string[];
};

const logDirectory = join(process.cwd(), "content", "log");

function parseLogSections(body: string): LogSection[] {
  const sections: LogSection[] = [];
  let currentSection: LogSection | undefined;

  for (const line of body.split("\n")) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      currentSection = { heading: heading[1], items: [] };
      sections.push(currentSection);
      continue;
    }

    const item = line.match(/^\s*-\s+(.+)$/);
    if (item && currentSection) currentSection.items.push(item[1]);
  }

  return sections;
}

function readLog(filePath: string): LogEntry {
  const { body, frontmatter } = readMarkdownFile(filePath);
  const startDate = requiredString(frontmatter, "startDate", filePath);
  const endDate = requiredString(frontmatter, "endDate", filePath);
  const start = parseContentDate(startDate, filePath);
  const end = parseContentDate(endDate, filePath);

  if (start > end) throw new Error(`The startDate must be before endDate in ${filePath}.`);

  return {
    body,
    endDate,
    sections: parseLogSections(body),
    slug: requiredString(frontmatter, "slug", filePath),
    startDate,
    summary: optionalString(frontmatter, "summary", filePath),
    title: requiredString(frontmatter, "title", filePath),
    topics: normalizeTags(optionalStringArray(frontmatter, "topics", filePath)),
  };
}

export function getAllLogs(): LogEntry[] {
  const logs = getMarkdownFiles(logDirectory).map(readLog);
  const slugs = new Set<string>();

  for (const log of logs) {
    if (slugs.has(log.slug)) throw new Error(`Duplicate log slug "${log.slug}".`);
    slugs.add(log.slug);
  }

  return logs.sort((first, second) => parseContentDate(second.endDate, second.slug).getTime() - parseContentDate(first.endDate, first.slug).getTime());
}

export function getLatestLog(): LogEntry | undefined {
  return getAllLogs()[0];
}

export function getLogBySlug(slug: string): LogEntry | undefined {
  return getAllLogs().find((log) => log.slug === slug);
}
