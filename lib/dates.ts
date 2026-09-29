export function parseContentDate(value: string, context: string): Date {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`Invalid date "${value}" in ${context}. Use YYYY-MM-DD.`);
  }

  return date;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    parseContentDate(value, "content"),
  );
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = parseContentDate(startDate, "content");
  const end = parseContentDate(endDate, "content");
  const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

  if (startDate === endDate) return formatter.format(start);
  if (start.getUTCFullYear() === end.getUTCFullYear() && start.getUTCMonth() === end.getUTCMonth()) {
    return `${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", timeZone: "UTC" }).format(start)}–${end.getUTCDate()}, ${end.getUTCFullYear()}`;
  }

  return `${formatter.format(start)} – ${formatter.format(end)}`;
}
