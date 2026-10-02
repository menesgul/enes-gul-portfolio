import type { Metadata } from "next";

import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "Background, education, interests, and current engineering focus of Muhammet Enes Gül.",
  "/about",
);

export default function AboutPage() {
  return (
    <article className="about-page">
      <header className="archive-intro">
        <h1>About</h1>
        <p>I&apos;m Enes, a software engineer based in Istanbul, Türkiye. I studied Computer Engineering at Istanbul Aydın University and currently focus on backend systems, distributed systems, developer tooling, and applied AI.</p>
      </header>

      <div className="about-sections">
        <section aria-labelledby="focus-heading">
          <h2 id="focus-heading">Current focus</h2>
          <dl className="about-focus-list">
            <div>
              <dt>Backend systems</dt>
              <dd>Java, Spring Boot, APIs, caching and service design</dd>
            </div>
            <div>
              <dt>Distributed systems</dt>
              <dd>Caching, replication, messaging and infrastructure experiments</dd>
            </div>
            <div>
              <dt>Developer tooling</dt>
              <dd>Far Away from Codex and agent workflows</dd>
            </div>
            <div>
              <dt>Applied AI</dt>
              <dd>RAG, local LLMs and AI-assisted services</dd>
            </div>
          </dl>
        </section>
        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <p className="about-education">Computer Engineering — Istanbul Aydın University</p>
          <p className="about-secondary">100% scholarship · GPA 3.38 / 4.00 · 2021–2026</p>
        </section>
        <section aria-labelledby="outside-heading">
          <h2 id="outside-heading">Outside software</h2>
          <p>Basketball · Music</p>
        </section>
      </div>
    </article>
  );
}
