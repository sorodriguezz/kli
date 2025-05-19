import { CLI_PROJECT_TYPE_BACKEND } from "../shared/constants";
import { backendCliOptions } from "./backend-cli-options";
import { ProjectConfig } from "./interfaces/project-options.interface";

interface ICliOptions {
  projectTypes: ProjectConfig[];
}

export const cliOptions: ICliOptions = {
  projectTypes: [
    {
      name: CLI_PROJECT_TYPE_BACKEND,
      languages: backendCliOptions,
    },
    // TODO - Crear directorios frontend
    // {
    //   name: CLI_PROJECT_TYPE_FRONTEND,
    //   languages: frontendCliOptions,
    // },
  ],
};
