import type { MetadataRoute } from "next";

import { noteCollections } from "@/data/notes";
import { absoluteUrl } from "@/data/site";
import { getAllLogs } from "@/lib/content/logs";
import { getAllProjects } from "@/lib/content/projects";
import { getPublishedWriting } from "@/lib/content/writing";

const staticPaths = ["/", "/projects", "/journey", "/log", "/writing", "/stack", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: absoluteUrl(path) })),
    ...getAllProjects().map((project) => ({ url: absoluteUrl(`/projects/${project.slug}`) })),
    ...getAllLogs().map((log) => ({
      url: absoluteUrl(`/log/${log.slug}`),
      lastModified: log.endDate,
    })),
    ...getPublishedWriting().map((entry) => ({
      url: absoluteUrl(`/writing/${entry.slug}`),
      ...(entry.publishedAt ? { lastModified: entry.publishedAt } : {}),
    })),
    ...noteCollections.flatMap((collection) => [
      { url: absoluteUrl(`/writing/notes/${collection.slug}`) },
      ...collection.notes.map((note) => ({
        url: absoluteUrl(`/writing/notes/${collection.slug}/${note.slug}`),
      })),
    ]),
  ];
}
