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

export type LogItem = {
  caption?: string;
  description?: string;
  href?: string;
  image?: {
    alt: string;
    src: string;
  };
  linkLabel?: string;
  title?: string;
};

export type LogEntry = {
  body: string;
  endDate: string;
  items: LogItem[];
  slug: string;
  startDate: string;
  summary?: string;
  title: string;
  topics: string[];
};

const logDirectory = join(process.cwd(), "content", "log");

function parseLogItems(body: string): LogItem[] {
  const items: LogItem[] = [];
  let currentItem: LogItem | undefined;
  let description: string[] = [];

  const ensureItem = () => {
    currentItem ??= {};
    return currentItem;
  };

  const flushDescription = () => {
    if (currentItem && description.length) {
      currentItem.description = description.join(" ");
    }
    description = [];
  };

  const flushItem = () => {
    flushDescription();
    if (currentItem && Object.keys(currentItem).length) items.push(currentItem);
    currentItem = undefined;
  };

  for (const line of body.split("\n")) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      flushItem();
      currentItem = { title: heading[1] };
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      flushDescription();
      ensureItem().image = { alt: image[1], src: image[2] };
      continue;
    }

    const link = line.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      flushDescription();
      const item = ensureItem();
      item.linkLabel = link[1];
      item.href = link[2];
      continue;
    }

    const caption = line.match(/^\*([^*]+)\*$/);
    if (caption) {
      flushDescription();
      ensureItem().caption = caption[1];
      continue;
    }

    if (line.trim()) {
      ensureItem();
      description.push(line.trim());
    }
  }

  flushItem();
  return items;
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
    items: parseLogItems(body),
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
