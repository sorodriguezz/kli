import { cliOptions } from "../config/cli-options";
import { LanguageConfig } from "../config/interfaces/language-options.interface";
import { ProjectConfig } from "../config/interfaces/project-options.interface";
import { RuntimesConfig } from "../config/interfaces/runtime-options.interface";
import { ProjectAnswers } from "../core/interfaces/project-answer.interface";
import { getPropertieCliOpts } from "../utils/objects-manipulation.util";

export const frameworkPrompt = {
  type: "list",
  name: "framework",
  message: "¿Qué framework quieres usar?",
  choices: (answers: ProjectAnswers) => {
    const projectType = getPropertieCliOpts<ProjectConfig>(
      cliOptions.projectTypes,
      answers.projectType
    );

    const language = getPropertieCliOpts<LanguageConfig>(
      projectType.languages,
      answers.language
    );

    const runtime = getPropertieCliOpts<RuntimesConfig>(
      language.runtimes,
      answers.runtime
    );

    return runtime.frameworks.map((runtime) => runtime.name) || [];
  },
};
