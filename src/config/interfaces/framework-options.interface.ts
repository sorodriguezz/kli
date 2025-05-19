import { IPackageManagerOptions } from "./package-options.interface";

export interface IFrameworkOptions {
  name: string;
  pmanagers: IPackageManagerOptions[];
}
