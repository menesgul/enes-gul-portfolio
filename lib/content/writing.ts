import { join } from "node:path";

import { parseContentDate } from "@/lib/dates";

import {
  getMarkdownFiles,
  optionalBoolean,
  optionalString,
  optionalStringArray,
  readMarkdownFile,
  requiredString,
} from "./markdown";
import { normalizeTags } from "./tags";

export type WritingEntry = {
  body: string;
  description: string;
  draft: boolean;
  externalUrl?: string;
  publishedAt?: string;
  slug: string;
  tags: string[];
  title: string;
};

const writingDirectory = join(process.cwd(), "content", "writing");

function readWriting(filePath: string): WritingEntry {
  const { body, frontmatter } = readMarkdownFile(filePath);
  const publishedAt = optionalString(frontmatter, "publishedAt", filePath);

  if (publishedAt) parseContentDate(publishedAt, filePath);

  return {
    body,
    description: requiredString(frontmatter, "description", filePath),
    draft: optionalBoolean(frontmatter, "draft", filePath) ?? false,
    externalUrl: optionalString(frontmatter, "externalUrl", filePath),
    publishedAt,
    slug: requiredString(frontmatter, "slug", filePath),
    tags: normalizeTags(optionalStringArray(frontmatter, "tags", filePath)),
    title: requiredString(frontmatter, "title", filePath),
  };
}

export function getAllWriting(): WritingEntry[] {
  return getMarkdownFiles(writingDirectory)
    .map(readWriting)
    .sort((first, second) => {
      if (!first.publishedAt && !second.publishedAt) return first.title.localeCompare(second.title);
      if (!first.publishedAt) return 1;
      if (!second.publishedAt) return -1;
      return parseContentDate(second.publishedAt, second.slug).getTime() - parseContentDate(first.publishedAt, first.slug).getTime();
    });
}

export function getPublishedWriting(): WritingEntry[] {
  return getAllWriting().filter((entry) => !entry.draft);
}

export function getWritingBySlug(slug: string): WritingEntry | undefined {
  return getPublishedWriting().find((entry) => entry.slug === slug);
}
