import { LanguageConfig } from "./interfaces/language-options.interface";

export const frontendCliOptions: LanguageConfig[] = [
  {
    name: "javascript",
    runtimes: [
      {
        name: "node",
        frameworks: [
          {
            name: "express",
            databases: ["none", "mongo", "postgresql"],
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
            databases: ["none", "mongo", "postgresql"],
          },
        ],
      },
    ],
  },
];
