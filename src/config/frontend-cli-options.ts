import { ILanguageOptions } from "./interfaces/language-options.interface";

export const frontendCliOptions: ILanguageOptions[] = [
  {
    name: "typescript",
    arquitectures: [
      {
        name: "clean-arquitecture",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "feature-based",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "layered",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "monorepo",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ports-and-adapters",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "javascript",
    arquitectures: [
      {
        name: "clean-arquitecture",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "feature-based",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "layered",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "monorepo",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ports-and-adapters",
        runtimes: [
          {
            name: "node",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deno",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "bun",
            frameworks: [
              {
                name: "express",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "fastify",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "hapi",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "koa",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "nest",
                pmanagers: [
                  {
                    name: "npm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "yarn",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                  {
                    name: "pnpm",
                    databases: [
                      {
                        name: "mongo",
                        ormodms: ["mongoose", "prisma"],
                      },
                      {
                        name: "postgres",
                        ormodms: ["prisma", "sequelize", "typeorm"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
