"use client";

import { useEffect, useRef, useState } from "react";

import type { JourneyEntry } from "@/data/journey";

const typeLabels: Record<JourneyEntry["type"], string> = {
  education: "Education",
  event: "Event",
  milestone: "Milestone",
  "open-source": "Open source",
  project: "Project",
  work: "Work",
};

type JourneyTimelineProps = {
  entries: JourneyEntry[];
};

export function JourneyTimeline({ entries }: JourneyTimelineProps) {
  const [selectedEntry, setSelectedEntry] = useState<JourneyEntry>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const entriesByYear = entries.reduce<Record<string, JourneyEntry[]>>((groups, entry) => {
    (groups[entry.year] ??= []).push(entry);
    return groups;
  }, {});
  const years = Object.keys(entriesByYear).sort((first, second) => Number(second) - Number(first));

  const restoreFocus = () => {
    triggerRef.current?.focus();
    triggerRef.current = null;
  };

  const closeDialog = () => {
    setSelectedEntry(undefined);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedEntry) {
      if (!dialog.open) dialog.showModal();
      closeButtonRef.current?.focus();
      return;
    }

    if (dialog.open) dialog.close();
  }, [selectedEntry]);

  return (
    <>
      <div className="journey-timeline">
        {years.map((year) => (
          <section key={year} className="journey-year" aria-labelledby={`journey-${year}`}>
            <h2 id={`journey-${year}`}>{year}</h2>
            <ol>
              {entriesByYear[year].map((entry) => (
                <li key={`${entry.period}-${entry.title}`}>
                  {entry.details ? (
                    <button
                      className="journey-entry journey-entry-button"
                      type="button"
                      onClick={(event) => {
                        triggerRef.current = event.currentTarget;
                        setSelectedEntry(entry);
                      }}
                      aria-label={`View details for ${entry.title}`}
                    >
                      <span className="journey-entry-date">{entry.dateLabel}</span>
                      <span className="journey-entry-content">
                        <span className="journey-type">{typeLabels[entry.type]}</span>
                        <span className="journey-entry-title">{entry.title}</span>
                        <span className="journey-entry-description">{entry.description}</span>
                        <span className="journey-entry-details">Details →</span>
                      </span>
                    </button>
                  ) : (
                    <article className="journey-entry">
                      <p className="journey-entry-date">{entry.dateLabel}</p>
                      <div className="journey-entry-content">
                        <p className="journey-type">{typeLabels[entry.type]}</p>
                        <h3 className="journey-entry-title">{entry.title}</h3>
                        <p className="journey-entry-description">{entry.description}</p>
                      </div>
                    </article>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="journey-dialog"
        aria-labelledby="journey-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={() => {
          setSelectedEntry(undefined);
          restoreFocus();
        }}
      >
        {selectedEntry ? (
          <div className="journey-dialog-content">
            <div className="journey-dialog-header">
              <div>
                <p className="journey-dialog-type">{typeLabels[selectedEntry.type]}</p>
                <h2 id="journey-dialog-title">{selectedEntry.title}</h2>
              </div>
              <button ref={closeButtonRef} className="journey-dialog-close" type="button" onClick={closeDialog} aria-label="Close details">
                Close
              </button>
            </div>
            {selectedEntry.organization ? <p className="journey-dialog-organization">{selectedEntry.organization}</p> : null}
            <p className="journey-dialog-period">{selectedEntry.period}</p>
            <ul>
              {selectedEntry.details?.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            {selectedEntry.technologies?.length ? (
              <p className="journey-dialog-technologies">
                <span>Technologies</span>
                {selectedEntry.technologies.join(" · ")}
              </p>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
