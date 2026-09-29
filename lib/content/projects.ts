import { join } from "node:path";

import {
  getMarkdownFiles,
  optionalBoolean,
  optionalNumber,
  optionalString,
  optionalStringArray,
  readMarkdownFile,
  requiredString,
} from "./markdown";
import type { Frontmatter } from "./markdown";
import { normalizeTags } from "./tags";

export const projectCategories = ["selected", "open-source", "experiments"] as const;
export const projectStatuses = ["In progress", "Final stage", "Open PR", "Completed"] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectStatus = (typeof projectStatuses)[number];

export type Project = {
  branch?: string;
  body: string;
  category: ProjectCategory;
  demo?: string;
  description: string;
  featured: boolean;
  funding?: string;
  github?: string;
  issue?: string;
  order?: number;
  pullRequest?: string;
  proposal?: string;
  role?: string;
  slug: string;
  status?: ProjectStatus;
  technologies: string[];
  title: string;
  topics: string[];
  year?: string;
};

const projectDirectory = join(process.cwd(), "content", "projects");

function readProject(filePath: string, category: ProjectCategory): Project {
  const { body, frontmatter } = readMarkdownFile(filePath);

  return {
    branch: optionalString(frontmatter, "branch", filePath),
    body,
    category,
    demo: optionalString(frontmatter, "demo", filePath),
    description: requiredString(frontmatter, "description", filePath),
    featured: optionalBoolean(frontmatter, "featured", filePath) ?? false,
    funding: optionalString(frontmatter, "funding", filePath),
    github: optionalString(frontmatter, "github", filePath),
    issue: optionalString(frontmatter, "issue", filePath),
    order: optionalNumber(frontmatter, "order", filePath),
    pullRequest: optionalString(frontmatter, "pullRequest", filePath),
    proposal: optionalString(frontmatter, "proposal", filePath),
    role: optionalString(frontmatter, "role", filePath),
    slug: requiredString(frontmatter, "slug", filePath),
    status: optionalProjectStatus(frontmatter, filePath),
    technologies: normalizeTags(optionalStringArray(frontmatter, "technologies", filePath)),
    title: requiredString(frontmatter, "title", filePath),
    topics: normalizeTags(optionalStringArray(frontmatter, "topics", filePath)),
    year: optionalString(frontmatter, "year", filePath),
  };
}

function optionalProjectStatus(frontmatter: Frontmatter, filePath: string): ProjectStatus | undefined {
  const status = optionalString(frontmatter, "status", filePath);

  if (!status) return undefined;

  if ((projectStatuses as readonly string[]).includes(status)) {
    return status as ProjectStatus;
  }

  throw new Error(`${filePath}: status must be one of: ${projectStatuses.join(", ")}.`);
}

function getProjectsByCategory(category: ProjectCategory): Project[] {
  return getMarkdownFiles(join(projectDirectory, category))
    .map((filePath) => readProject(filePath, category))
    .sort((first, second) => {
      const orderDifference = (first.order ?? Number.POSITIVE_INFINITY) - (second.order ?? Number.POSITIVE_INFINITY);
      return orderDifference || first.title.localeCompare(second.title);
    });
}

export function getSelectedProjects(): Project[] {
  return getProjectsByCategory("selected");
}

export function getOpenSourceProjects(): Project[] {
  return getProjectsByCategory("open-source");
}

export function getExperiments(): Project[] {
  return getProjectsByCategory("experiments");
}

export function getAllProjects(): Project[] {
  const projects = projectCategories.flatMap((category) => getProjectsByCategory(category));
  const seenSlugs = new Set<string>();

  for (const project of projects) {
    if (seenSlugs.has(project.slug)) {
      throw new Error(`Duplicate project slug "${project.slug}". Project slugs must be unique across categories.`);
    }
    seenSlugs.add(project.slug);
  }

  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
