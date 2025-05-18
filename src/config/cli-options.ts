import {
  CLI_PROJECT_TYPE_BACKEND,
  CLI_PROJECT_TYPE_FRONTEND,
} from "../shared/constants";
import { backendCliOptions } from "./backend-cli-options";
import { frontendCliOptions } from "./frontend-cli-options";
import { ProjectConfig } from "./interfaces/project-options.interface";

interface ICliOptions {
  projectTypes: ProjectConfig[];
}

export const cliOptions: ICliOptions = {
  projectTypes: [
    {
      name: CLI_PROJECT_TYPE_FRONTEND,
      languages: frontendCliOptions,
    },
    {
      name: CLI_PROJECT_TYPE_BACKEND,
      languages: backendCliOptions,
    },
  ],
};
