export type JourneyEntry = {
  dateLabel: string;
  description: string;
  details?: string[];
  organization?: string;
  period: string;
  technologies?: string[];
  title: string;
  type: "work" | "education" | "project" | "open-source" | "event" | "milestone";
  year: string;
};

const carbonTrackingDetails = [
  "Led a four-member team developing a cross-platform carbon-footprint tracking application.",
  "Worked across React Native, Node.js / Express, Firebase and Python-based AI services.",
  "Designed architecture for transportation, food and product emission tracking.",
  "Worked on AI-assisted food recognition and receipt/product analysis workflows.",
  "Coordinated development, API integration, testing, literature review and project planning.",
];

export const journeyEntries: JourneyEntry[] = [
  {
    year: "2026",
    dateLabel: "Dec 2025 — May 2026",
    period: "Dec 2025 — May 2026",
    title: "Part-Time Corporate Communications and Web Specialist Assistant — Istanbul Aydın University Web Department",
    organization: "Istanbul Aydın University Web Department",
    description: "Maintained institutional web and mobile platforms, notification systems, accessibility and technical operations.",
    type: "work",
    technologies: ["Web platforms", "Mobile applications", "Accessibility"],
    details: [
      "Maintained institutional websites and mobile applications.",
      "Supported content updates and technical operations.",
      "Worked with UX and accessibility requirements.",
      "Administered web-based notification systems and communication infrastructure.",
      "Monitored performance, analyzed errors and contributed to optimization.",
    ],
  },
  {
    year: "2026",
    dateLabel: "2026",
    period: "2026",
    title: "TÜBİTAK 2209-A Project Lead — final-stage project work",
    organization: "TÜBİTAK 2209-A",
    description: "Continued development and final-stage project work on the TÜBİTAK 2209-A research project.",
    type: "project",
    technologies: ["React Native", "Node.js", "Express", "Firebase", "Python"],
    details: carbonTrackingDetails,
  },
  {
    year: "2026",
    dateLabel: "2026",
    period: "2026",
    title: "Oracle OpenGrok contribution work",
    description: "Contributed to Oracle OpenGrok in the open.",
    type: "open-source",
  },
  {
    year: "2026",
    dateLabel: "Sep 2021 — Jun 2026",
    period: "Sep 2021 — Jun 2026",
    title: "Computer Engineering — Istanbul Aydın University",
    organization: "Istanbul Aydın University",
    description: "Graduated in Computer Engineering with a 100% scholarship and a GPA of 3.38/4.00.",
    type: "education",
  },
  {
    year: "2025",
    dateLabel: "Dec",
    period: "Dec 2025",
    title: "Web Developer Intern — Istanbul Aydın University Web Department",
    organization: "Istanbul Aydın University Web Department",
    description: "Maintained university web content, supported UI/UX improvements and resolved issues found during routine QA.",
    type: "work",
    technologies: ["Web content", "UI/UX", "Quality assurance"],
    details: [
      "Performed maintenance on the university website.",
      "Updated academic announcements, departmental pages and visual content.",
      "Supported UI/UX improvements.",
      "Resolved technical issues found during quality checks.",
    ],
  },
  {
    year: "2025",
    dateLabel: "Sep — Oct",
    period: "Sep 2025 — Oct 2025",
    title: "Part-Time Android Developer — Paylisher",
    organization: "Paylisher",
    description: "Worked on Android features and integration work around a marketing analytics SDK.",
    type: "work",
    technologies: ["Kotlin", "Android", "Marketing analytics SDK"],
    details: [
      "Developed Android application features with Kotlin.",
      "Contributed to a marketing analytics SDK integration.",
      "Worked on performance and user-experience improvements.",
    ],
  },
  {
    year: "2025",
    dateLabel: "Aug — Sep",
    period: "Aug 2025 — Sep 2025",
    title: "Backend Developer Intern — Ventura BT",
    organization: "Ventura BT",
    description: "Built and maintained Java / Spring Boot backend services, working with API design, caching and rate limiting.",
    type: "work",
    technologies: ["Java", "Spring Boot", "MVC", "Caching", "Rate limiting"],
    details: [
      "Developed and maintained backend services with Java and Spring Boot.",
      "Worked with MVC-based enterprise backend architecture.",
      "Worked on API design, caching and rate limiting.",
      "Contributed to an internal portal serving 5,000+ active users.",
    ],
  },
  {
    year: "2025",
    dateLabel: "2025",
    period: "2025 — 2026",
    title: "TÜBİTAK 2209-A Project Lead",
    organization: "TÜBİTAK 2209-A",
    description: "Started leading a TÜBİTAK 2209-A project focused on cross-platform carbon-footprint tracking.",
    type: "project",
    technologies: ["React Native", "Node.js", "Express", "Firebase", "Python"],
    details: carbonTrackingDetails,
  },
  {
    year: "2024",
    dateLabel: "Oct 2024 — Feb 2025",
    period: "Oct 2024 — Feb 2025",
    title: "Android Developer Intern — Serrasoft",
    organization: "Serrasoft",
    description: "Built Android application features with Kotlin, Firebase, Google Maps and QR workflows.",
    type: "work",
    technologies: ["Kotlin", "Firebase", "Google Maps", "QR code"],
    details: [
      "Developed Android application features using Kotlin and object-oriented programming principles.",
      "Integrated Firebase Realtime Database, Authentication and Cloud Storage.",
      "Implemented Google Maps integration for geolocation and interactive mapping.",
      "Built QR code recognition and generation functionality.",
      "Worked on dynamic UI components and real-time status indicators.",
    ],
  },
];
