import type { Metadata } from "next";

import { absoluteUrl, site } from "@/data/site";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const canonicalUrl = site.url ? absoluteUrl(pathname) : undefined;

  return {
    title,
    description,
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      siteName: site.name,
      type: "website",
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
    },
    twitter: {
      card: "summary",
      title: `${title} · ${site.name}`,
      description,
    },
  };
}
