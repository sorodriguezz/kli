import { cliOptions } from "../config/cli-options";
import { IArquitectureOptions } from "../config/interfaces/arquitecture-options.interface";
import { ILanguageOptions } from "../config/interfaces/language-options.interface";
import { ProjectConfig } from "../config/interfaces/project-options.interface";
import { IRuntimesOptions } from "../config/interfaces/runtime-options.interface";
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

    const language = getPropertieCliOpts<ILanguageOptions>(
      projectType.languages,
      answers.language
    );

    const arquitecture = getPropertieCliOpts<IArquitectureOptions>(
      language.arquitectures,
      answers.arquitecture
    );

    return arquitecture.runtimes.map((runtime) => runtime.name) || [];
  },
};
