import { LanguageConfig } from "./language-options.interface";

export interface ProjectConfig {
  name: string;
  languages: LanguageConfig[];
}
