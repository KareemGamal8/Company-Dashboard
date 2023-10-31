import { RestfulEndpoint } from "@mongez/http";

class EmployeeService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/employees";
}

export const employeeService = new EmployeeService();
