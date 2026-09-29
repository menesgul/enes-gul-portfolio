"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const shortcutRoutes: Record<string, string> = {
  "1": "/",
  "2": "/projects",
  "3": "/journey",
  "4": "/log",
  "5": "/writing",
  "6": "/stack",
  "7": "/about",
};

function isTextEditingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;

  return target.isContentEditable || Boolean(target.closest("input, textarea, select, [contenteditable='true'], [contenteditable='']"));
}

export function NavigationShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.shiftKey ||
        isTextEditingTarget(event.target) ||
        document.querySelector("dialog[open]")
      ) {
        return;
      }

      const route = shortcutRoutes[event.key];
      if (!route) return;

      event.preventDefault();
      router.push(route);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return null;
}
