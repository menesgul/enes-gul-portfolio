import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/shared/MarkdownContent";
import { ArrowUpRight } from "@/components/shared/ArrowUpRight";
import { formatTags } from "@/lib/content/tags";
import { getAllProjects, getProjectBySlug, type Project } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryLabels: Record<Project["category"], string> = {
  selected: "Selected Work",
  "open-source": "Open Source",
  experiments: "Experiments",
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return pageMetadata(project.title, project.description, `/projects/${project.slug}`);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const externalLinks = [
    project.github ? { href: project.github, label: "GitHub", accessibleLabel: `View ${project.title} on GitHub` } : undefined,
    project.branch ? { href: project.branch, label: "Branch", accessibleLabel: `View ${project.title} branch` } : undefined,
    project.issue ? { href: project.issue, label: "Issue", accessibleLabel: `View ${project.title} issue` } : undefined,
    project.pullRequest ? { href: project.pullRequest, label: "PR", accessibleLabel: `View ${project.title} pull request` } : undefined,
    project.demo ? { href: project.demo, label: "Demo", accessibleLabel: `View ${project.title} demo` } : undefined,
  ].filter((link): link is { href: string; label: string; accessibleLabel: string } => Boolean(link));

  return (
    <article className="content-detail">
      <header className="detail-intro">
        <p className="page-kicker">{categoryLabels[project.category]}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      {project.year || project.status || project.role || project.funding || project.technologies.length || project.topics.length ? (
        <dl className="content-metadata">
          {project.year ? (
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
          ) : null}
          {project.status ? (
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          ) : null}
          {project.role ? (
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
          ) : null}
          {project.funding ? (
            <div>
              <dt>Funding</dt>
              <dd>{project.funding}</dd>
            </div>
          ) : null}
          {project.technologies.length ? (
            <div>
              <dt>Technologies</dt>
              <dd>{formatTags(project.technologies)}</dd>
            </div>
          ) : null}
          {project.topics.length ? (
            <div>
              <dt>Topics</dt>
              <dd>{formatTags(project.topics)}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {externalLinks.length ? (
        <p className="content-links">
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.accessibleLabel}>
              {link.label} <ArrowUpRight />
            </a>
          ))}
        </p>
      ) : null}

      <MarkdownContent content={project.body} />
      {project.proposal ? (
        <section className="proposal-preview" aria-labelledby="research-proposal-title">
          <h2 id="research-proposal-title">Research Proposal</h2>
          <p>
            The original TÜBİTAK 2209-A proposal describes the research goals, planned interaction model, methodology and evaluation approach.
          </p>
          <a
            className="inline-link proposal-open-link"
            href={project.proposal}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the research proposal for ${project.title}`}
          >
            Open proposal <ArrowUpRight />
          </a>
          <iframe
            className="proposal-embed"
            src={project.proposal}
            title={`Research proposal for ${project.title}`}
            loading="lazy"
          >
            <a href={project.proposal}>Open the research proposal</a>
          </iframe>
        </section>
      ) : null}
      <Link className="inline-link detail-back-link" href="/projects">
        ← Back to projects
      </Link>
    </article>
  );
}
