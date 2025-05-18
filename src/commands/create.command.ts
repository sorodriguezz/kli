import path from "path";
import fs from "fs";
// import { execSync } from "child_process";

import { TemplateManagerSingleton } from "../core/template-manager-singleton";
import { copyTemplate } from "../utils/copy-template.util";

export class CreateCommand {
  templateManager = TemplateManagerSingleton.getInstance().getTemplateManager();

  async execute() {
    const options = await this.templateManager.promptOptions();
    const projectRoot = path.resolve(__dirname, "..", "..");

    // const templatePath = this.templateManager.getTemplatePath(
    //   projectRoot,
    //   options
    // );
    // const destination = path.resolve(process.cwd(), options.name);

    // console.log("Template path:", templatePath);
    // console.log("Project root:", projectRoot);

    // if (!fs.existsSync(templatePath)) {
    //   console.error(`❌ La ruta del template no existe: ${templatePath}`);
    //   console.error(
    //     "Por favor, verifica que la estructura de directorios sea correcta."
    //   );
    //   return;
    // }

    // await copyTemplate(templatePath, destination, {
    //   replacements: {
    //     [`"name": "cli"`]: `"name": "${options.name}"`,
    //   },
    // });

      // execSync("npm install", { stdio: "inherit" });


    // console.log(`✅ Proyecto ${options.name} creado:`);
    // console.log(`  - Tipo: ${options.projectType}`);
    // console.log(`  - Lenguaje: ${options.language}`);
    // console.log(`  - Framework: ${options.framework}`);
    // if (options.bundler) console.log(`  - Bundler: ${options.bundler}`);
    // console.log(`  - Características: ${options.feature}`);
    // if (options.db) console.log(`  - Base de datos: ${options.db}`);
  }
}
