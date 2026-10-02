import type { Metadata } from "next";

import { ProjectItem } from "@/components/home/ProjectItem";
import { getExperiments, getOpenSourceProjects, getSelectedProjects, type Project } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Projects",
  "Selected software work, open-source contributions, and technical experiments by Muhammet Enes Gül.",
  "/projects",
);

type ProjectSectionProps = {
  id: string;
  projects: Project[];
  title: string;
};

function ProjectSection({ id, projects, title }: ProjectSectionProps) {
  return (
    <section className="archive-section" aria-labelledby={id}>
      <h2 className="archive-section-heading" id={id}>{title}</h2>
      {projects.length ? (
        <ol className="project-list">
          {projects.map((project) => (
            <ProjectItem key={project.slug} {...project} showStatus themes={project.topics} />
          ))}
        </ol>
      ) : (
        <p className="content-empty-state">No entries yet.</p>
      )}
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <header className="archive-intro">
        <h1>Projects</h1>
        <p>Selected work, open-source contributions, and technical experiments.</p>
      </header>
      <div className="archive-sections">
        <ProjectSection id="selected-work" title="Selected Work" projects={getSelectedProjects()} />
        <ProjectSection id="open-source" title="Open Source" projects={getOpenSourceProjects()} />
        <ProjectSection id="experiments" title="Experiments" projects={getExperiments()} />
      </div>
    </>
  );
}
