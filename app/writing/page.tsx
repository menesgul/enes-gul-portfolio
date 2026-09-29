import type { Metadata } from "next";

import { WritingArchive } from "@/components/writing/WritingArchive";
import { noteCollections } from "@/data/notes";
import { getPublishedWriting } from "@/lib/content/writing";

export const metadata: Metadata = { title: "Writing", description: "Longer technical writing and notes by Enes Gül." };

export default function WritingPage() {
  const writing = getPublishedWriting();

  return <WritingArchive noteCollections={noteCollections} writing={writing} />;
}
