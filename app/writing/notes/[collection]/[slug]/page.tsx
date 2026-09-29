import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowUpRight } from "@/components/shared/ArrowUpRight";
import { getNote, getNoteCollection, noteCollections } from "@/data/notes";

type NotePageProps = {
  params: Promise<{ collection: string; slug: string }>;
};

export function generateStaticParams() {
  return noteCollections.flatMap((collection) =>
    collection.notes.map((note) => ({ collection: collection.slug, slug: note.slug })),
  );
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { collection: collectionSlug, slug } = await params;
  const note = getNote(collectionSlug, slug);

  if (!note) return {};

  return { title: note.title, description: note.description };
}

export default async function NotePage({ params }: NotePageProps) {
  const { collection: collectionSlug, slug } = await params;
  const collection = getNoteCollection(collectionSlug);
  const note = getNote(collectionSlug, slug);

  if (!collection || !note) notFound();

  return (
    <article className="content-detail">
      <header className="detail-intro">
        <p className="page-kicker">{collection.title} · Notes</p>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </header>
      <section className="note-pdf-preview" aria-label={`${note.title} PDF preview`}>
        <a
          className="inline-link note-open-link"
          href={note.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${note.title} PDF in a new tab`}
        >
          Open PDF <ArrowUpRight />
        </a>
        <iframe className="note-pdf-embed" src={note.pdfPath} title={`${note.title} PDF`} loading="lazy">
          <a href={note.pdfPath}>Open {note.title} PDF</a>
        </iframe>
      </section>
      <Link className="inline-link detail-back-link" href={`/writing/notes/${collection.slug}`}>
        ← Back to {collection.title} Notes
      </Link>
    </article>
  );
}
