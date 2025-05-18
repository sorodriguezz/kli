import { cliOptions } from "../config/cli-options";
import { ProjectConfig } from "../config/interfaces/project-options.interface";
import { ProjectAnswers } from "../core/interfaces/project-answer.interface";
import { getPropertieCliOpts } from "../utils/objects-manipulation.util";

export const languagePrompt = {
  type: "list",
  name: "language",
  message: "¿Qué lenguaje quieres usar?",
  choices: (answers: ProjectAnswers) => {
    const projectType = getPropertieCliOpts<ProjectConfig>(
      cliOptions.projectTypes,
      answers.projectType
    );
    return projectType?.languages.map((lang) => lang.name) || [];
  },
};
