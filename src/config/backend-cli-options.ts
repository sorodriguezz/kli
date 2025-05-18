import { LanguageConfig } from "./interfaces/language-options.interface";

export const backendCliOptions: LanguageConfig[] = [
  {
    name: "javascript",
    runtimes: [
      {
        name: "node",
        frameworks: [
          {
            name: "express",
            databases: ["none", "mongodb", "postgresql"],
          },
        ],
      },
    ],
  },
  {
    name: "typescript",
    runtimes: [
      {
        name: "node",
        frameworks: [
          {
            name: "express",
            databases: ["none", "mongodb", "postgresql"],
          },
          {
            name: "fastify",
            databases: ["none", "mongodb", "postgresql"],
          },
        ],
      },
    ],
  },
];
