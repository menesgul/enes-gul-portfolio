import type { Metadata } from "next";

import { stackGroups } from "@/data/stack";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Stack",
  "Technologies Muhammet Enes Gül has used meaningfully across software engineering work.",
  "/stack",
);

export default function StackPage() {
  return (
    <>
      <header className="archive-intro">
        <p className="page-kicker">Tools and technologies</p>
        <h1>Stack</h1>
      </header>
      <dl className="stack-list">
        {stackGroups.map((group) => (
          <div key={group.name}>
            <dt>{group.name}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
