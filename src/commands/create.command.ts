import path from "path";
import fs from "fs";
import { execSync } from "child_process";

import { TemplateManagerSingleton } from "../core/template-manager-singleton";
import { TemplateManager } from "../core/template-manager";
import { copyTemplate } from "../utils/copy-template.util";
import { COLORS } from "../utils/colors.util";

export class CreateCommand {
  templateManager: TemplateManager;

  constructor() {
    this.templateManager =
      TemplateManagerSingleton.getInstance().getTemplateManager();
  }

  async execute() {
    const options = await this.templateManager.promptOptions();
    const projectRoot = path.resolve(__dirname, "..", "..");

    const templatePath = this.templateManager.getTemplatePath(
      projectRoot,
      options
    );

    const destination = path.resolve(process.cwd(), options.name);

    if (!fs.existsSync(templatePath)) {
      console.error(`❌ La ruta del template no existe: ${templatePath}`);
      console.error(
        "Por favor, verifica que la estructura de directorios sea correcta."
      );
      return;
    }

    await copyTemplate(templatePath, destination, {
      replacements: {
        [`"name": "kli"`]: `"name": "${options.name}"`,
      },
    });

    if (options.dependencies === "sí") {
      execSync(`cd ${options.name} && npm install`, { stdio: "inherit" });
    }

      // console.log("%cConsulta:\n", COLORS.red);

    console.clear();
    console.log(`✅ Proyecto "${options.name}" creado:`);
    console.log(`  - Tipo: %c${options.projectType}`, COLORS.blue);
    console.log(`  - Lenguaje: ${options.language}`);
    console.log(`  - Arquitectura: ${options.arquitecture}`);
    console.log(`  - Runtime: ${options.runtime}`);
    console.log(`  - Framework: ${options.framework}`);
    console.log(`  - Gestor de paquetes: ${options.pmanager}`);
    console.log(`  - Base de datos: ${options.database}`);
    console.log(`  - Base de datos: ${options.ormodms}`);
    if (options.dependencies !== "no") console.log(`  - Se instalaron dependencias`);
  }
}
