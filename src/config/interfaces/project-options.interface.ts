import { ILanguageOptions } from "./language-options.interface";

export interface ProjectConfig {
  name: string;
  languages: ILanguageOptions[];
}
