export type Note = {
  description: string;
  pdfPath: string;
  slug: string;
  title: string;
};

export type NoteCollection = {
  description: string;
  label: string;
  notes: Note[];
  slug: string;
  title: string;
};

export const noteCollections: NoteCollection[] = [
  {
    title: "Distributed Systems",
    slug: "distributed-systems",
    label: "Distributed systems",
    description: "Study notes on distributed systems.",
    notes: [
      {
        title: "Chapter 1",
        slug: "chapter-1",
        description: "Distributed systems fundamentals, middleware, transparency, openness and scalability.",
        pdfPath: "/notes/distributed-systems/chapter-1.pdf",
      },
      {
        title: "Chapter 2",
        slug: "chapter-2",
        description: "Architectural styles including layered, object-based, REST and publish-subscribe systems.",
        pdfPath: "/notes/distributed-systems/chapter-2.pdf",
      },
      {
        title: "Chapter 3",
        slug: "chapter-3",
        description: "Processes, threads, context switching, server models and virtualization.",
        pdfPath: "/notes/distributed-systems/chapter-3.pdf",
      },
      {
        title: "Communication",
        slug: "communication",
        description: "Networking layers, TCP/UDP, middleware communication and synchronous/asynchronous messaging.",
        pdfPath: "/notes/distributed-systems/communication.pdf",
      },
      {
        title: "Naming",
        slug: "naming",
        description: "Identifiers, location-independent naming, forwarding pointers, Chord and hierarchical location services.",
        pdfPath: "/notes/distributed-systems/naming.pdf",
      },
      {
        title: "Coordination",
        slug: "coordination",
        description: "Physical clocks, NTP, clock drift, happened-before and logical clocks.",
        pdfPath: "/notes/distributed-systems/coordination.pdf",
      },
      {
        title: "Consistency & Replication",
        slug: "consistency-replication",
        description: "Sequential and causal consistency, client-centric consistency and replica trade-offs.",
        pdfPath: "/notes/distributed-systems/consistency-replication.pdf",
      },
      {
        title: "Fault Tolerance",
        slug: "fault-tolerance",
        description: "Dependability, reliability, availability, failure models and redundancy.",
        pdfPath: "/notes/distributed-systems/fault-tolerance.pdf",
      },
    ],
  },
  {
    title: "Cloud Architecture",
    slug: "cloud-architecture",
    label: "Cloud infrastructure",
    description: "Study notes on cloud infrastructure and operations.",
    notes: [
      {
        title: "Week 1 — Cloud Computing Fundamentals",
        slug: "week-01-cloud-fundamentals",
        description: "Essential cloud characteristics, service models, deployment models and shared responsibility.",
        pdfPath: "/notes/cloud-architecture/week-01-cloud-fundamentals.pdf",
      },
      {
        title: "Week 2 — Virtualization & Virtual Machines",
        slug: "week-02-virtualization",
        description: "Hypervisors, virtual compute, networking, storage and container fundamentals.",
        pdfPath: "/notes/cloud-architecture/week-02-virtualization.pdf",
      },
      {
        title: "Week 3 — Cloud Migration",
        slug: "week-03-cloud-migration",
        description: "Migration assessment, planning, execution, validation and the six migration strategies.",
        pdfPath: "/notes/cloud-architecture/week-03-cloud-migration.pdf",
      },
      {
        title: "Week 4 — Cloud Agility & Application Lifecycle",
        slug: "week-04-cloud-agility-devops",
        description: "Agile cloud delivery, application lifecycle management, DevOps and release automation.",
        pdfPath: "/notes/cloud-architecture/week-04-cloud-agility-devops.pdf",
      },
      {
        title: "Week 5 — Cloud Networking",
        slug: "week-05-cloud-networking",
        description: "Software-defined networking, VPCs, IP addressing, subnetting, routing and load balancing.",
        pdfPath: "/notes/cloud-architecture/week-05-cloud-networking.pdf",
      },
      {
        title: "Week 6 — Hybrid & Multi-Cloud Networking",
        slug: "week-06-hybrid-multicloud-networking",
        description: "Hybrid and multi-cloud connectivity through VPNs, direct links, peering, DNS and routing.",
        pdfPath: "/notes/cloud-architecture/week-06-hybrid-multicloud-networking.pdf",
      },
      {
        title: "Week 7 — Cloud Security Configurations",
        slug: "week-07-cloud-security",
        description: "Cloud threats, security scanning, DevSecOps, micro-segmentation and virtual network controls.",
        pdfPath: "/notes/cloud-architecture/week-07-cloud-security.pdf",
      },
      {
        title: "Week 8 — Data & Protocol Security",
        slug: "week-08-data-protocol-security",
        description: "Compute hardening, application protection, data states, encryption and secure protocols.",
        pdfPath: "/notes/cloud-architecture/week-08-data-protocol-security.pdf",
      },
      {
        title: "Week 10 — IAM & Authentication",
        slug: "week-10-iam-authentication",
        description: "Identity lifecycle, privileged access, authentication factors, federation and authorization.",
        pdfPath: "/notes/cloud-architecture/week-10-iam-authentication.pdf",
      },
      {
        title: "Week 11 — Cloud Storage",
        slug: "week-11-cloud-storage",
        description: "File, block and object storage, RAID, performance, availability and data protection.",
        pdfPath: "/notes/cloud-architecture/week-11-cloud-storage.pdf",
      },
      {
        title: "Week 12 — Monitoring, Events & Logs",
        slug: "week-12-monitoring-logging",
        description: "Cloud metrics, continuous monitoring, dashboards, event correlation and centralized logging.",
        pdfPath: "/notes/cloud-architecture/week-12-monitoring-logging.pdf",
      },
      {
        title: "Week 13 — Automation & Cloud Operations",
        slug: "week-13-automation-operations",
        description: "Automation workflows, infrastructure as code, configuration management and operational tooling.",
        pdfPath: "/notes/cloud-architecture/week-13-automation-operations.pdf",
      },
    ],
  },
];

export function getNoteCollection(slug: string) {
  return noteCollections.find((collection) => collection.slug === slug);
}

export function getNote(collectionSlug: string, noteSlug: string) {
  return getNoteCollection(collectionSlug)?.notes.find((note) => note.slug === noteSlug);
}
