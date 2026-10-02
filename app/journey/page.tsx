import type { Metadata } from "next";

import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { journeyEntries } from "@/data/journey";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Journey",
  "A chronological record of professional and technical milestones by Muhammet Enes Gül.",
  "/journey",
);

export default function JourneyPage() {
  return (
    <>
      <header className="archive-intro">
        <p className="page-kicker">Timeline</p>
        <h1>Journey</h1>
      </header>
      <JourneyTimeline entries={journeyEntries} />
    </>
  );
}
