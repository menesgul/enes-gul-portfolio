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
  year?: string;
};

export const noteCollections: NoteCollection[] = [
  {
    title: "Distributed Systems",
    slug: "distributed-systems",
    label: "Distributed systems",
    year: "2025–2026",
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
    year: "2025–2026",
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
  {
    title: "Computer Networks",
    slug: "computer-networks",
    label: "Networking fundamentals",
    year: "2025",
    description: "Study notes on networking fundamentals.",
    notes: [
      {
        title: "Week 1 — Network Services & Client-Server",
        slug: "week-01-network-services",
        description: "Client-server applications, file and print services, communication services and email protocols.",
        pdfPath: "/notes/computer-networks/week-01-network-services.pdf",
      },
      {
        title: "Week 2 — Addressing, DNS & Ports",
        slug: "week-02-addressing-dns-ports",
        description: "MAC, IP, domain and port addressing, plus DNS resolution and server hierarchy.",
        pdfPath: "/notes/computer-networks/week-02-addressing-dns-ports.pdf",
      },
      {
        title: "Week 3 — TCP/IP Core Protocols",
        slug: "week-03-tcp-ip-protocols",
        description: "TCP/IP encapsulation and the core TCP, UDP, IP, ICMP, IGMP and ARP protocols.",
        pdfPath: "/notes/computer-networks/week-03-tcp-ip-protocols.pdf",
      },
      {
        title: "Week 4 — Structured Cabling & Network Equipment",
        slug: "week-04-structured-cabling",
        description: "Structured cabling, distribution frames, cable management, equipment racks and network storage.",
        pdfPath: "/notes/computer-networks/week-04-structured-cabling.pdf",
      },
      {
        title: "Week 5 — Transmission Basics",
        slug: "week-05-transmission-basics",
        description: "Analog and digital signals, modulation, baseband and broadband transmission, and multiplexing.",
        pdfPath: "/notes/computer-networks/week-05-transmission-basics.pdf",
      },
      {
        title: "Week 6 — Wireless Networking",
        slug: "week-06-wireless-networking",
        description: "Wireless spectrum and propagation, WLAN architecture, 802.11 access, roaming and WPA security.",
        pdfPath: "/notes/computer-networks/week-06-wireless-networking.pdf",
      },
      {
        title: "Week 7 — Cloud Computing",
        slug: "week-07-cloud-computing",
        description: "Cloud service and deployment models, remote access, VPN tunneling and encryption.",
        pdfPath: "/notes/computer-networks/week-07-cloud-computing.pdf",
      },
      {
        title: "Week 10 — Network Security",
        slug: "week-10-network-security",
        description: "Security assessments, network risks, attack vectors and internet-access threats.",
        pdfPath: "/notes/computer-networks/week-10-network-security.pdf",
      },
      {
        title: "Week 11 — Network Management & SNMP",
        slug: "week-11-network-management",
        description: "Network baselines, performance and fault management, SNMP, managed devices, MIBs and event logs.",
        pdfPath: "/notes/computer-networks/week-11-network-management.pdf",
      },
      {
        title: "Week 12 — Segmentation & Subnetting",
        slug: "week-12-subnetting",
        description: "Network segmentation, subnet masks, CIDR, subnet calculations and virtualization concepts.",
        pdfPath: "/notes/computer-networks/week-12-subnetting.pdf",
      },
      {
        title: "Week 13 — WAN Essentials",
        slug: "week-13-wan-essentials",
        description: "WAN sites, DTE and DCE, WAN topologies and public switched telephone networks.",
        pdfPath: "/notes/computer-networks/week-13-wan-essentials.pdf",
      },
      {
        title: "Week 14 — Industrial Networks, IoT & Operations",
        slug: "week-14-industrial-networks",
        description: "Industrial control and SCADA networks, IoT, asset management and change management.",
        pdfPath: "/notes/computer-networks/week-14-industrial-networks.pdf",
      },
    ],
  },
  {
    title: "Operating Systems",
    slug: "operating-systems",
    label: "Systems fundamentals",
    year: "2024–2025",
    description: "Study notes on operating system fundamentals and resource management.",
    notes: [
      {
        title: "Week 1 — Operating System Fundamentals",
        slug: "week-01-os-fundamentals",
        description: "Computer components, processor registers, instruction execution, interrupts and the memory hierarchy.",
        pdfPath: "/notes/operating-systems/week-01-os-fundamentals.pdf",
      },
      {
        title: "Week 2 — OS Overview & Services",
        slug: "week-02-os-overview-services",
        description: "Operating system objectives, user services, resource management and interfaces between applications and hardware.",
        pdfPath: "/notes/operating-systems/week-02-os-overview-services.pdf",
      },
      {
        title: "Week 3 — Processes & Process Control",
        slug: "week-03-processes-process-control",
        description: "Process elements, control blocks, process states, execution traces and operating system control structures.",
        pdfPath: "/notes/operating-systems/week-03-processes-process-control.pdf",
      },
      {
        title: "Week 4 — Processes & Threads",
        slug: "week-04-processes-threads",
        description: "Processes as resource owners, threads as units of execution and single- and multithreaded models.",
        pdfPath: "/notes/operating-systems/week-04-processes-threads.pdf",
      },
      {
        title: "Week 5 — Concurrency & Mutual Exclusion",
        slug: "week-05-concurrency-mutual-exclusion",
        description: "Concurrent execution, mutual exclusion, software approaches and coordination between competing processes.",
        pdfPath: "/notes/operating-systems/week-05-concurrency-mutual-exclusion.pdf",
      },
      {
        title: "Week 6 — Deadlocks",
        slug: "week-06-deadlocks",
        description: "Deadlock conditions, resource allocation and strategies for prevention, avoidance, detection and recovery.",
        pdfPath: "/notes/operating-systems/week-06-deadlocks.pdf",
      },
      {
        title: "Week 7 — Memory Management",
        slug: "week-07-memory-management",
        description: "Memory management requirements, relocation, protection, sharing, partitioning, paging and segmentation.",
        pdfPath: "/notes/operating-systems/week-07-memory-management.pdf",
      },
      {
        title: "Week 8 — Virtual Memory",
        slug: "week-08-virtual-memory",
        description: "Virtual addressing, paging, segmentation, resident sets, locality and the causes of thrashing.",
        pdfPath: "/notes/operating-systems/week-08-virtual-memory.pdf",
      },
      {
        title: "Week 10 — Uniprocessor Scheduling",
        slug: "week-10-uniprocessor-scheduling",
        description: "Long-, medium- and short-term scheduling, dispatching and processor scheduling criteria.",
        pdfPath: "/notes/operating-systems/week-10-uniprocessor-scheduling.pdf",
      },
      {
        title: "Week 11 — Multiprocessor Scheduling",
        slug: "week-11-multiprocessor-scheduling",
        description: "Multiprocessor organization, parallelism granularity, process assignment and master-slave and peer scheduling.",
        pdfPath: "/notes/operating-systems/week-11-multiprocessor-scheduling.pdf",
      },
      {
        title: "Week 12 — I/O Management",
        slug: "week-12-io-management",
        description: "I/O device types, programmed and interrupt-driven I/O, direct memory access and buffering strategies.",
        pdfPath: "/notes/operating-systems/week-12-io-management.pdf",
      },
      {
        title: "Week 13 — File Systems",
        slug: "week-13-file-systems",
        description: "File structures and operations, file management responsibilities, device drivers and basic I/O layers.",
        pdfPath: "/notes/operating-systems/week-13-file-systems.pdf",
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
