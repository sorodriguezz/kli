import inquirer from "inquirer";
import { databasePrompt } from "../prompt/database.prompt";
import {
  frameworkPrompt,
  languagePrompt,
  projectNamePrompt,
  projectTypePrompt,
  runtimePrompt,
} from "../prompt";
import { ProjectOptions } from "./interfaces/project-options.interface";
import { ProjectAnswers } from "./interfaces/project-answer.interface";

export class TemplateManager {
  public async promptOptions(): Promise<ProjectOptions> {
    try {
      const questions: any = [
        projectNamePrompt,
        projectTypePrompt,
        languagePrompt,
        runtimePrompt,
        frameworkPrompt,
        databasePrompt,
      ];

      const answers = await inquirer.prompt<ProjectAnswers>(questions);

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

  // public getTemplatePath(projectRoot: string, options: ProjectOptions): string {
  //   const segments = ["templates", options.projectType];

  //   if (options.projectType === "backend") {
  //     if (
  //       options.language === "javascript" ||
  //       options.language === "typescript"
  //     ) {
  //       segments.push(
  //         "nodejs",
  //         options.language,
  //         options.framework,
  //         options.bundler || "",
  //         options.feature,
  //         options.db || ""
  //       );
  //     } else {
  //       segments.push(
  //         options.language,
  //         options.framework,
  //         options.feature,
  //         options.db || ""
  //       );
  //     }
  //   } else {
  //     segments.push(options.framework, options.feature, options.db || "");
  //   }

  //   const cleanSegments = segments.filter(Boolean);
  //   return path.resolve(projectRoot, ...cleanSegments);
  // }
}
