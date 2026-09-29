import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type Frontmatter = Record<string, boolean | number | string | string[]>;

export type MarkdownDocument = {
  body: string;
  frontmatter: Frontmatter;
};

function parseScalar(value: string): boolean | number | string {
  const trimmed = value.trim();

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatter(source: string, filePath: string): MarkdownDocument {
  if (!source.startsWith("---\n")) {
    throw new Error(`Missing frontmatter in ${filePath}.`);
  }

  const closingDelimiter = source.indexOf("\n---", 4);

  if (closingDelimiter === -1) {
    throw new Error(`Unclosed frontmatter in ${filePath}.`);
  }

  const rawFrontmatter = source.slice(4, closingDelimiter);
  const body = source.slice(closingDelimiter + 4).trim();
  const lines = rawFrontmatter.split("\n");
  const frontmatter: Frontmatter = {};
  let currentListKey: string | null = null;

  for (const line of lines) {
    if (!line.trim()) continue;

    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem) {
      if (!currentListKey) {
        throw new Error(`List item without a field in ${filePath}.`);
      }

      const currentValue = frontmatter[currentListKey];
      if (!Array.isArray(currentValue)) {
        throw new Error(`Invalid list field "${currentListKey}" in ${filePath}.`);
      }

      currentValue.push(String(parseScalar(listItem[1])));
      continue;
    }

    const field = line.match(/^([A-Za-z][A-Za-z0-9]*):(?:\s*(.*))?$/);
    if (!field) {
      throw new Error(`Invalid frontmatter line in ${filePath}: ${line}`);
    }

    const [, key, value] = field;
    if (key in frontmatter) {
      throw new Error(`Duplicate frontmatter field "${key}" in ${filePath}.`);
    }

    if (value) {
      frontmatter[key] = parseScalar(value);
      currentListKey = null;
    } else {
      frontmatter[key] = [];
      currentListKey = key;
    }
  }

  return { body, frontmatter };
}

export function readMarkdownFile(filePath: string): MarkdownDocument {
  return parseFrontmatter(readFileSync(filePath, "utf8"), filePath);
}

export function getMarkdownFiles(directory: string): string[] {
  try {
    return readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => join(directory, entry.name));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export function requiredString(frontmatter: Frontmatter, key: string, filePath: string): string {
  const value = frontmatter[key];

  if (typeof value !== "string" || !value) {
    throw new Error(`Missing required "${key}" frontmatter in ${filePath}.`);
  }

  return value;
}

export function optionalString(frontmatter: Frontmatter, key: string, filePath: string): string | undefined {
  const value = frontmatter[key];

  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    throw new Error(`Expected "${key}" to be a string in ${filePath}.`);
  }

  return value || undefined;
}

export function optionalBoolean(frontmatter: Frontmatter, key: string, filePath: string): boolean | undefined {
  const value = frontmatter[key];

  if (value === undefined) return undefined;
  if (typeof value !== "boolean") {
    throw new Error(`Expected "${key}" to be a boolean in ${filePath}.`);
  }

  return value;
}

export function optionalNumber(frontmatter: Frontmatter, key: string, filePath: string): number | undefined {
  const value = frontmatter[key];

  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Expected "${key}" to be a number in ${filePath}.`);
  }

  return value;
}

export function optionalStringArray(frontmatter: Frontmatter, key: string, filePath: string): string[] {
  const value = frontmatter[key];

  if (value === undefined) return [];
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
    throw new Error(`Expected "${key}" to be a list of strings in ${filePath}.`);
  }

  return value;
}
