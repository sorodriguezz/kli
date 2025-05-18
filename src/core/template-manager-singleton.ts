import { TemplateManager } from "./template-manager";

export class TemplateManagerSingleton {
  private static instance: TemplateManagerSingleton;
  private templateManager: TemplateManager;

  private constructor() {
    this.templateManager = new TemplateManager();
  }

  public static getInstance(): TemplateManagerSingleton {
    if (!TemplateManagerSingleton.instance) {
      TemplateManagerSingleton.instance = new TemplateManagerSingleton();
    }
    return TemplateManagerSingleton.instance;
  }

  public getTemplateManager(): TemplateManager {
    return this.templateManager;
  }

  public setTemplateManager(templateManager: TemplateManager): void {
    this.templateManager = templateManager;
  }
}
