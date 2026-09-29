export type StackGroup = {
  items: string[];
  name: string;
};

export const stackGroups: StackGroup[] = [
  { name: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express", "Python", "FastAPI"] },
  { name: "Data", items: ["PostgreSQL", "MySQL", "Redis", "Firebase", "Firestore"] },
  { name: "Infrastructure", items: ["Docker", "NGINX"] },
  { name: "Messaging", items: ["Kafka", "RabbitMQ"] },
  { name: "AI", items: ["RAG", "LLMs", "Ollama", "Python AI services"] },
  { name: "Mobile", items: ["Kotlin", "Android", "React Native"] },
  { name: "Web", items: ["React", "TypeScript", "JavaScript"] },
  { name: "Developer Tools / Workflow", items: ["Git", "GitHub", "Postman", "OpenAPI", "Swagger"] },
];
