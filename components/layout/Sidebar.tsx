"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "@/components/shared/ArrowUpRight";

const primaryNavigation = [
  { href: "/", label: "Home", shortcut: "1" },
  { href: "/projects", label: "Projects", shortcut: "2" },
  { href: "/journey", label: "Journey", shortcut: "3" },
  { href: "/log", label: "Log", shortcut: "4" },
  { href: "/writing", label: "Writing", shortcut: "5" },
  { href: "/stack", label: "Stack", shortcut: "6" },
  { href: "/about", label: "About", shortcut: "7" },
];

type OnlineIconName = "github" | "linkedin" | "medium" | "email" | "cv";

const onlineItems: Array<{
  download?: boolean;
  href: string;
  icon: OnlineIconName;
  label: string;
  newTab: boolean;
}> = [
  { href: "https://github.com/menesgul", icon: "github", label: "GitHub", newTab: true },
  { href: "https://www.linkedin.com/in/menesgul", icon: "linkedin", label: "LinkedIn", newTab: true },
  { href: "https://medium.com/@menesgul", icon: "medium", label: "Medium", newTab: true },
  { href: "mailto:enesgull@hotmail.com", icon: "email", label: "Email", newTab: false },
  { download: true, href: "/cv/enes-gul-cv.pdf", icon: "cv", label: "CV", newTab: false },
];

function OnlineIcon({ name }: { name: OnlineIconName }) {
  if (name === "github") {
    return (
      <svg aria-hidden="true" className="online-icon" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 1.25a6.75 6.75 0 0 0-2.14 13.15c.34.06.46-.15.46-.33v-1.3c-1.88.4-2.28-.8-2.28-.8-.3-.8-.75-1.02-.75-1.02-.62-.42.05-.41.05-.41.68.05 1.04.7 1.04.7.61 1.04 1.59.74 1.98.56.06-.44.24-.74.44-.91-1.5-.17-3.08-.75-3.08-3.34 0-.74.27-1.34.7-1.81-.07-.17-.3-.86.07-1.8 0 0 .57-.18 1.86.7A6.5 6.5 0 0 1 8 4.3c.56 0 1.12.08 1.65.23 1.3-.88 1.87-.7 1.87-.7.37.94.14 1.63.07 1.8.43.47.7 1.07.7 1.81 0 2.6-1.59 3.16-3.1 3.33.24.21.46.62.46 1.25v1.86c0 .18.12.4.47.33A6.75 6.75 0 0 0 8 1.25Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" className="online-icon" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.2 5.7H1.35V14H3.2V5.7ZM2.28 2A1.08 1.08 0 1 0 2.3 4.16 1.08 1.08 0 0 0 2.28 2ZM14 9.24c0-2.5-1.34-3.66-3.13-3.66-1.44 0-2.09.8-2.45 1.35V5.7H6.57V14h1.85V9.9c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.24 1.34 2.2V14h1.85V9.24Z" />
      </svg>
    );
  }

  if (name === "medium") {
    return (
      <svg aria-hidden="true" className="online-icon" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1.5 4.22a.5.5 0 0 0-.17-.42L.18 2.43V2.2h3.58l2.77 6.08L8.96 2.2h3.42v.23l-.98.94a.3.3 0 0 0-.11.3v8.66a.3.3 0 0 0 .11.3l.96.94v.23H7.54v-.23l1-.96c.1-.1.1-.12.1-.3V5.3l-2.8 8.47h-.38L2.2 5.3v5.9c-.03.24.05.48.22.65l1.3 1.58v.23H.02v-.23l1.3-1.58a.88.88 0 0 0 .18-.65V4.22Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg aria-hidden="true" className="online-icon" fill="none" viewBox="0 0 16 16">
        <rect height="10" rx="1" stroke="currentColor" strokeWidth="1.25" width="13" x="1.5" y="3" />
        <path d="m2.2 4 5.17 4.1a1 1 0 0 0 1.25 0L13.8 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="online-icon" fill="none" viewBox="0 0 16 16">
      <path d="M4 1.75h5l3 3v9.5H4a1 1 0 0 1-1-1v-10.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M9 1.75v3h3M5.5 8h5M5.5 10.5h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function isActivePath(pathname: string, href: string): boolean {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="site-sidebar" aria-label="Site navigation">
      <div className="sidebar-content">
        <Link className="sidebar-profile" href="/">
          <span className="avatar-placeholder" aria-hidden="true">
            EG
          </span>
          <span>
            <span className="sidebar-name">Enes Gül</span>
            <span className="sidebar-role">Software Engineer</span>
          </span>
        </Link>

        <nav className="sidebar-primary-navigation" aria-label="Primary navigation">
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className={isActivePath(pathname, item.href) ? "is-active" : undefined}
                  href={item.href}
                  aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <kbd>{item.shortcut}</kbd>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-divider" />

        <section className="sidebar-online" aria-labelledby="online-heading">
          <p id="online-heading">Online</p>
          <ul>
            {onlineItems.map((item) => (
              <li key={item.label}>
                <a
                  download={item.download}
                  href={item.href}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  target={item.newTab ? "_blank" : undefined}
                >
                  <span className="online-label">
                    <OnlineIcon name={item.icon} />
                    <span>{item.label}</span>
                  </span>
                  {item.newTab ? <ArrowUpRight /> : null}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
