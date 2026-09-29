import Link from "next/link";

import { ArrowRight } from "./ArrowRight";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({ id, label, title, description, href, linkLabel }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {href && linkLabel ? (
        <Link className="section-archive-link" href={href}>
          {linkLabel}
          <ArrowRight />
        </Link>
      ) : null}
    </header>
  );
}
