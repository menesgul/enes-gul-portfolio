"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/journey", label: "Journey" },
  { href: "/log", label: "Log" },
  { href: "/writing", label: "Writing" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <div className="mobile-header-content">
        <Link className="mobile-site-name" href="/">
          Enes Gül
        </Link>
        <nav aria-label="Primary navigation">
          <ul>
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <Link className={isActive ? "is-active" : undefined} href={item.href} aria-current={isActive ? "page" : undefined}>
                  {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
