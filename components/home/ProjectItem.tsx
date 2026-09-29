import Link from "next/link";

import { ArrowUpRight } from "@/components/shared/ArrowUpRight";
import type { ProjectStatus } from "@/lib/content/projects";

type ProjectItemProps = {
  title: string;
  description: string;
  github?: string;
  slug: string;
  status?: ProjectStatus;
  showStatus?: boolean;
  themes: string[];
};

const statusClassNames: Record<ProjectStatus, string> = {
  "In progress": "project-item-status--in-progress",
  "Final stage": "project-item-status--final-stage",
  "Open PR": "project-item-status--open-pr",
  Completed: "project-item-status--completed",
};

export function ProjectItem({ title, description, github, slug, status, showStatus = false, themes }: ProjectItemProps) {
  return (
    <li className="project-item">
      <article>
        <div className="project-item-title-row">
          <h3>
            <Link href={`/projects/${slug}`}>{title}</Link>
          </h3>
          {github ? (
            <a
              className="project-item-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              <ArrowUpRight />
            </a>
          ) : null}
        </div>
        <p>{description}</p>
        <p className="project-item-meta">
          {themes.join(" · ")}
          {showStatus && status ? (
            <span className={`project-item-status ${statusClassNames[status]}`}>
              {themes.length ? " · " : null}● {status}
            </span>
          ) : null}
        </p>
      </article>
    </li>
  );
}
