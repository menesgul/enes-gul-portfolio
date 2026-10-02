import type { Metadata } from "next";

import { WritingArchive } from "@/components/writing/WritingArchive";
import { noteCollections } from "@/data/notes";
import { getPublishedWriting } from "@/lib/content/writing";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Writing",
  "Longer technical writing and study notes by Muhammet Enes Gül.",
  "/writing",
);

export default function WritingPage() {
  const writing = getPublishedWriting();

  return <WritingArchive noteCollections={noteCollections} writing={writing} />;
}
