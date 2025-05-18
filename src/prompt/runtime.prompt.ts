import { cliOptions } from "../config/cli-options";
import { LanguageConfig } from "../config/interfaces/language-options.interface";
import { ProjectConfig } from "../config/interfaces/project-options.interface";
import { ProjectOptions } from "../core/interfaces/project-options.interface";
import { getPropertieCliOpts } from "../utils/objects-manipulation.util";

export const runtimePrompt = {
  type: "list",
  name: "runtime",
  message: "¿Qué runtime quieres usar?",
  choices: (answers: ProjectOptions) => {
    const projectType = getPropertieCliOpts<ProjectConfig>(
      cliOptions.projectTypes,
      answers.projectType
    );
    const language = getPropertieCliOpts<LanguageConfig>(
      projectType.languages,
      answers.language
    );

    return language.runtimes.map((runtime) => runtime.name) || [];
  },
};
