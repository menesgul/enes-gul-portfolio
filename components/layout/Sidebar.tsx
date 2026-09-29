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

const onlineItems = [
  { href: "https://github.com/menesgul", label: "GitHub", newTab: true },
  { href: "https://www.linkedin.com/in/menesgul", label: "LinkedIn", newTab: true },
  { href: "https://medium.com/@menesgul", label: "Medium", newTab: true },
  { href: "mailto:enesgull@hotmail.com", label: "Email", newTab: false },
  { download: true, href: "/cv/enes-gul-cv.pdf", label: "CV", newTab: false },
];

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
                  <span>{item.label}</span>
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
