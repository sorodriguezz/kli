import type { Command } from "commander";
import { version } from "../../package.json";
import { CreateCommand } from "../commands/create.command";
import { CommandSingleton } from "./command-singleton";
import { COMMAND_CREATE, NAME_CLI } from "../shared/constants";

export class Program {
  program: Command;

  constructor() {
    this.program = CommandSingleton.getInstance().getProgram();
  }

  public initProgram(): Command {
    this.generateKliCommand();
    this.generateKliCreateCommand();

    return this.program;
  }

  private generateKliCommand(): void {
    this.program
      .name(NAME_CLI)
      .description("CLI para generación de proyectos y componentes")
      .version(version, "-v, --version", "versión actual");
  }

  private generateKliCreateCommand(): void {
    this.program
      .command(COMMAND_CREATE)
      .description("Crear un nuevo proyecto")
      .action(async () => {
        const command = new CreateCommand();
        await command.execute();
      });
  }
}
