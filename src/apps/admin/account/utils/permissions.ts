import { trans } from "@mongez/localization";

const crudOperations = ["list", "create", "update", "delete"];

export type PermissionRule = {
  rule: string;
  title: string;
  description?: string;
};

export type ModulePermissionData = {
  name: string;
  title: string;
  rules: PermissionRule[];
};

export const crud = (
  moduleName: string,
  operations: string[] = crudOperations,
) => {
  return new ModulePermission(moduleName, trans(moduleName), operations);
};

export class ModulePermission {
  /**
   * Rules list
   */
  public rules: PermissionRule[] = [];
  /**
   * Constructor
   */
  public constructor(
    public name: string,
    public title: string = trans(name),
    rules: string[] = [],
  ) {
    //
    for (const rule of rules) {
      this.add(rule);
    }
  }

  /**
   * Add rule key
   */
  public add(rule: string) {
    this.rules.push({
      rule: `${this.name}.${rule}`,
      title: trans(rule),
      description: "",
    });

    return this;
  }

  /**
   * Get it except the given rules
   */
  public except(rules: string[]) {
    rules = rules.map(rule => {
      if (!rule.startsWith(this.name)) {
        return `${this.name}.${rule}`;
      }

      return rule;
    });
    this.rules = this.rules.filter((rule: any) => {
      return !rules.includes(rule.rule);
    });

    return this;
  }

  /**
   * Append rules
   */
  public append(...rules: PermissionRule[]) {
    this.rules = [...this.rules, ...rules];

    return this;
  }

  /**
   * Viewable crud
   */
  public viewable() {
    return this.add("view");
  }
}

export const viewableCrud = (moduleName: string) => {
  return crud(moduleName, [...crudOperations, "view"]);
};
