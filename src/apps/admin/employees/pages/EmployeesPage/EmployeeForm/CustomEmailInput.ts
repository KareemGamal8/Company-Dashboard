import { InputBuilder } from "@mongez/moonlight";
import { EmailInputTest } from "app/employees/pages/EmployeesPage/EmployeeForm/emailInputTest";

export function customEmailInput(name = "email") {
  return new InputBuilder(name).component(EmailInputTest);
}
