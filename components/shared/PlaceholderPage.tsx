type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="placeholder-page" aria-labelledby="page-heading">
      <p className="page-kicker">Portfolio</p>
      <h1 id="page-heading">{title}</h1>
      <p>{description}</p>
    </section>
  );
}
