import { cliOptions } from "../config/cli-options";

export const projectTypePrompt = {
  type: "list",
  name: "projectType",
  message: "¿Qué tipo de proyecto?",
  choices: cliOptions.projectTypes.map((type) => type.name),
};
