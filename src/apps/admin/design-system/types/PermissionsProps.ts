export type PermissionRule = {
  rule: string;
  title: string;
  description?: string;
};

export type ModulePermission = {
  name: string;
  title: string;
  rules: PermissionRule[];
};
