import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNoteCollection, noteCollections } from "@/data/notes";
import { pageMetadata } from "@/lib/metadata";

type NotesCollectionPageProps = {
  params: Promise<{ collection: string }>;
};

export function generateStaticParams() {
  return noteCollections.map((collection) => ({ collection: collection.slug }));
}

export async function generateMetadata({ params }: NotesCollectionPageProps): Promise<Metadata> {
  const { collection: collectionSlug } = await params;
  const collection = getNoteCollection(collectionSlug);

  if (!collection) return {};

  return pageMetadata(
    `${collection.title} Notes`,
    collection.description,
    `/writing/notes/${collection.slug}`,
  );
}

export default async function NotesCollectionPage({ params }: NotesCollectionPageProps) {
  const { collection: collectionSlug } = await params;
  const collection = getNoteCollection(collectionSlug);

  if (!collection) notFound();

  return (
    <>
      <header className="archive-intro">
        <p className="page-kicker">Notes</p>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
      </header>
      <ol className="archive-list">
        {collection.notes.map((note) => (
          <li key={note.slug}>
            <Link href={`/writing/notes/${collection.slug}/${note.slug}`}>{note.title}</Link>
            <p>{note.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
