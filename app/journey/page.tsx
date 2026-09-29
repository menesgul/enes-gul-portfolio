import type { Metadata } from "next";

import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { journeyEntries } from "@/data/journey";

export const metadata: Metadata = { title: "Journey", description: "A chronological record of professional and technical milestones by Enes Gül." };

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
