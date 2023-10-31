import { crud } from "apps/admin/account/utils/permissions";

export const permissionsList = (moduleName, operations: any) => [
  crud(moduleName, operations),
];
