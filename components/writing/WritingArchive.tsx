"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import type { NoteCollection } from "@/data/notes";
import type { WritingEntry } from "@/lib/content/writing";
import { formatDate } from "@/lib/dates";

const desktopPanelQuery = "(min-width: 55.0625rem)";

type WritingArchiveProps = {
  noteCollections: NoteCollection[];
  writing: WritingEntry[];
};

export function WritingArchive({ noteCollections, writing }: WritingArchiveProps) {
  const router = useRouter();
  const notesLinkRef = useRef<HTMLAnchorElement | null>(null);
  const panelHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldRestoreFocusRef = useRef(false);
  const [openCollectionSlug, setOpenCollectionSlug] = useState<string | null>(null);
  const openCollection = noteCollections.find((collection) => collection.slug === openCollectionSlug);
  const isNotesPanelOpen = Boolean(openCollection);

  useEffect(() => {
    const syncPanelState = () => {
      const collectionSlug = new URLSearchParams(window.location.search).get("notes");
      setOpenCollectionSlug(
        noteCollections.some((collection) => collection.slug === collectionSlug) ? collectionSlug : null,
      );
    };

    syncPanelState();
    window.addEventListener("popstate", syncPanelState);
    return () => window.removeEventListener("popstate", syncPanelState);
  }, [noteCollections]);

  useEffect(() => {
    if (isNotesPanelOpen && window.matchMedia(desktopPanelQuery).matches) {
      panelHeadingRef.current?.focus();
      return;
    }

    if (shouldRestoreFocusRef.current) {
      notesLinkRef.current?.focus();
      shouldRestoreFocusRef.current = false;
    }
  }, [isNotesPanelOpen]);

  useEffect(() => {
    if (!isNotesPanelOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      shouldRestoreFocusRef.current = true;
      setOpenCollectionSlug(null);
      router.replace("/writing", { scroll: false });
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isNotesPanelOpen, router]);

  function openNotesPanel(collectionSlug: string, event: MouseEvent<HTMLAnchorElement>) {
    if (!window.matchMedia(desktopPanelQuery).matches) return;

    event.preventDefault();
    notesLinkRef.current = event.currentTarget;
    setOpenCollectionSlug(collectionSlug);
    router.push(`/writing?notes=${collectionSlug}`, { scroll: false });
  }

  function closeNotesPanel() {
    shouldRestoreFocusRef.current = true;
    setOpenCollectionSlug(null);
    router.replace("/writing", { scroll: false });
  }

  return (
    <div className={`writing-split-layout${isNotesPanelOpen ? " is-notes-open" : ""}`}>
      <div className="writing-archive">
        <header className="archive-intro">
          <p className="page-kicker">Archive</p>
          <h1>Writing</h1>
          <p>Longer notes on the systems and tools I am learning through.</p>
        </header>
        <div className="archive-sections">
          <section className="archive-section" aria-labelledby="articles-heading">
            <h2 className="archive-section-heading" id="articles-heading">
              Articles
            </h2>
            {writing.length ? (
              <ol className="archive-list">
                {writing.map((entry) => (
                  <li key={entry.slug}>
                    {entry.externalUrl ? (
                      <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer">
                        {entry.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <Link href={`/writing/${entry.slug}`}>{entry.title}</Link>
                    )}
                    {entry.publishedAt ? <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time> : null}
                    <p>{entry.description}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="writing-empty-state archive-empty-state">
                <p>No published articles yet.</p>
              </div>
            )}
          </section>
          <section className="archive-section" aria-labelledby="notes-heading">
            <h2 className="archive-section-heading" id="notes-heading">
              Notes
            </h2>
            <ol className="archive-list">
              {noteCollections.map((collection) => (
                <li key={collection.slug}>
                  <Link
                    href={`/writing/notes/${collection.slug}`}
                    onClick={(event) => openNotesPanel(collection.slug, event)}
                  >
                    {collection.title} <span aria-hidden="true">→</span>
                  </Link>
                  <p>
                    {collection.notes.length} notes · {collection.label}
                    {collection.year ? <> · {collection.year}</> : null}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      {openCollection ? (
        <aside
          className="notes-panel"
          id={`${openCollection.slug}-panel`}
          aria-labelledby={`${openCollection.slug}-panel-title`}
        >
          <div className="notes-panel-header">
            <div>
              <p className="page-kicker">Notes</p>
              <h2 id={`${openCollection.slug}-panel-title`} ref={panelHeadingRef} tabIndex={-1}>
                {openCollection.title}
              </h2>
            </div>
            <button className="notes-panel-close" type="button" onClick={closeNotesPanel}>
              Close
            </button>
          </div>
          <ol className="notes-panel-list">
            {openCollection.notes.map((note) => (
              <li key={note.slug}>
                <Link href={`/writing/notes/${openCollection.slug}/${note.slug}`}>{note.title}</Link>
                <p>{note.description}</p>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}
    </div>
  );
}
