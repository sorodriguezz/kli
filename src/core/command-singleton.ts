import { Command } from "commander";

export class CommandSingleton {
  private static instance: CommandSingleton;
  private program: Command;

  private constructor() {
    this.program = new Command();
  }

  public static getInstance(): CommandSingleton {
    if (!CommandSingleton.instance) {
      CommandSingleton.instance = new CommandSingleton();
    }
    return CommandSingleton.instance;
  }

  public getProgram(): Command {
    return this.program;
  }

  public setProgram(program: Command): void {
    this.program = program;
  }
}
