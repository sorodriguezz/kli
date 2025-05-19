import { IDatabaseOptions } from "./database-options.interface";

export interface IPackageManagerOptions {
  name: string;
  databases: IDatabaseOptions[];
}
