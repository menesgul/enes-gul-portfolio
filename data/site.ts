const siteUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://menesgul.dev";

export const site = {
  description:
    "Recent Computer Engineering graduate and software engineer focused on reliable, high-performance software, backend systems, distributed systems, developer tooling, and applied AI.",
  name: "Muhammet Enes Gül",
  title: "Muhammet Enes Gül — Software Engineer",
  url: new URL(siteUrl),
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
