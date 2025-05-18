import { RuntimesConfig } from "./runtime-options.interface";

export interface LanguageConfig {
  name: string;
  runtimes: RuntimesConfig[];
}
