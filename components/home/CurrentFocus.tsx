const focusAreas = [
  {
    title: "Developer tooling for AI agents",
    description: "Far Away from Codex and the infrastructure that helps agent workflows stay practical.",
  },
  {
    title: "Open-source contribution work",
    description: "Working on Bazaar repository tests for Oracle OpenGrok.",
  },
  {
    title: "Systems experiments",
    description: "Learning through distributed systems, local LLM experiments, and agent protocols.",
  },
];

export function CurrentFocus() {
  return (
    <ul className="focus-list">
      {focusAreas.map((area) => (
        <li key={area.title}>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </li>
      ))}
    </ul>
  );
}
