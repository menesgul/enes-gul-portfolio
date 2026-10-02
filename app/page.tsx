import type { Metadata } from "next";

import { CurrentFocus } from "@/components/home/CurrentFocus";
import { LatestLog } from "@/components/home/LatestLog";
import { ProjectItem } from "@/components/home/ProjectItem";
import { RecentWriting } from "@/components/home/RecentWriting";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getLatestLog } from "@/lib/content/logs";
import { getOpenSourceProjects, getSelectedProjects } from "@/lib/content/projects";
import { getPublishedWriting } from "@/lib/content/writing";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Home",
  "Recent Computer Engineering graduate and software engineer focused on reliable, high-performance software, backend systems, distributed systems, developer tooling, and applied AI.",
  "/",
);

export default function Home() {
  const latestLog = getLatestLog();
  const selectedProjects = getSelectedProjects().filter((project) => project.featured);
  const openSourceProjects = getOpenSourceProjects();
  const recentWriting = getPublishedWriting().slice(0, 3);

  return (
    <>
      <section className="intro" aria-labelledby="intro-heading">
        <h1 id="intro-heading">Hi, I&apos;m Enes.</h1>
        <div className="intro-copy">
          <p>
            I&apos;m a recent Computer Engineering graduate and software engineer focused on building reliable, high-performance software and solving complex technical problems. My interests span backend systems, distributed systems, developer tooling, and applied AI, and I&apos;m continuing to grow across software engineering as a whole.
          </p>
          <p>Currently open to software engineering opportunities.</p>
        </div>
      </section>

      <div className="home-sections">
        <section className="home-section" aria-labelledby="current-focus-heading">
          <SectionHeading
            id="current-focus-heading"
            label="Now"
            title="Current / Now"
          />
          <CurrentFocus />
        </section>

        <section className="home-section home-section-after-focus" aria-labelledby="latest-log-heading">
          <SectionHeading
            id="latest-log-heading"
            label="Journal"
            title="Latest Log"
            href="/log"
            linkLabel="All log entries"
          />
          <LatestLog log={latestLog} />
        </section>

        <section className="home-section" aria-labelledby="selected-work-heading">
          <SectionHeading
            id="selected-work-heading"
            label="Projects"
            title="Selected Work"
            href="/projects"
            linkLabel="All projects"
          />
          <ol className="project-list">
            {selectedProjects.map((project) => (
              <ProjectItem key={project.slug} {...project} themes={project.topics} />
            ))}
          </ol>
        </section>

        <section className="home-section" aria-labelledby="open-source-heading">
          <SectionHeading
            id="open-source-heading"
            label="In the open"
            title="Open Source"
            href="/projects"
            linkLabel="Open-source work"
          />
          <ol className="project-list">
            {openSourceProjects.map((project) => (
              <ProjectItem key={project.slug} {...project} themes={project.topics} />
            ))}
          </ol>
        </section>

        <section className="home-section" aria-labelledby="recent-writing-heading">
          <SectionHeading
            id="recent-writing-heading"
            label="Notes"
            title="Writing"
            href="/writing"
            linkLabel="Writing archive"
          />
          <RecentWriting entries={recentWriting} />
        </section>
      </div>
    </>
  );
}
