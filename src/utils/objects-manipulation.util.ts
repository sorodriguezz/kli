export const getPropertieCliOpts = <T>(obj: T[], name?: string): T | undefined => {
  return obj.find((type: any) => type.name === name);
};
