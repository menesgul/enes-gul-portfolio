export function normalizeTags(tags: readonly string[]): string[] {
  return [...new Set(tags.map((tag) => tag.trim()).filter(Boolean))];
}

export function formatTags(tags: readonly string[]): string {
  return tags.join(" · ");
}
