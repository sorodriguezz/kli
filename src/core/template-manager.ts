import inquirer from "inquirer";
import path from "path";

import { databasePrompt } from "../prompt/database.prompt";
import {
  arquitecturePrompt,
  frameworkPrompt,
  installDependenciesJsTsPrompt,
  languagePrompt,
  ormOdmPrompt,
  packageManagerPrompt,
  projectNamePrompt,
  projectTypePrompt,
  runtimePrompt,
} from "../prompt";
import { ProjectOptions } from "./interfaces/project-options.interface";

export class TemplateManager {
  public async promptOptions(): Promise<ProjectOptions> {
    try {
      const questions: any = [
        projectNamePrompt,
        projectTypePrompt,
        languagePrompt,
        arquitecturePrompt,
        runtimePrompt,
        frameworkPrompt,
        packageManagerPrompt,
        databasePrompt,
        ormOdmPrompt,
        installDependenciesJsTsPrompt,
      ];

      const answers = await inquirer.prompt<ProjectOptions>(questions);

      return answers;
    } catch (error) {
      if (error && (error as any).isTtyError) {
        console.error(
          "El prompt no puede ser renderizado en el entorno actual."
        );
        process.exit(1);
      } else if (error instanceof Error && error.name === "ExitPromptError") {
        console.clear();
        console.error("¡Hasta luego!");
        process.exit(1);
      } else {
        throw error;
      }
    }
  }

  public getTemplatePath(projectRoot: string, options: ProjectOptions): string {
    const segments = ["templates"];
    // TODO - validar para tipos de proyecto
    segments.push(
      options.projectType,
      options.language,
      options.arquitecture,
      options.runtime,
      options.framework,
      options.pmanager,
      options.database,
      options.ormodms
    );

    const cleanSegments = segments.filter(Boolean);

    return path.resolve(projectRoot, ...cleanSegments);
  }
}
