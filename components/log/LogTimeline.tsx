import Image from "next/image";
import Link from "next/link";

import type { LogItem } from "@/lib/content/logs";

type LogTimelineProps = {
  items: LogItem[];
};

function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function LogTimeline({ items }: LogTimelineProps) {
  return (
    <ol className="log-timeline">
      {items.map((item, index) => (
        <li className="log-timeline-item" key={`${item.title ?? "Log item"}-${index}`}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.description ? <p>{item.description}</p> : null}
          {item.href && item.linkLabel ? (
            isExternalLink(item.href) ? (
              <a className="log-item-link" href={item.href} rel="noopener noreferrer" target="_blank">
                {item.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link className="log-item-link" href={item.href}>
                {item.linkLabel}
              </Link>
            )
          ) : null}
          {item.image ? (
            <figure className="log-item-figure">
              <Image
                alt={item.image.alt}
                className="log-item-image"
                height={1008}
                sizes="(max-width: 38rem) calc(100vw - 2.25rem), 560px"
                src={item.image.src}
                width={756}
              />
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
