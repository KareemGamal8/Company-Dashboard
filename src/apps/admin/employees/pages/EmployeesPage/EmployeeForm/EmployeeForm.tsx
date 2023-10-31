import { createReactForm, emailInput, textInput } from "@mongez/moonlight";
import { employeeService } from "apps/admin/employees/services/Employee-service";
import React from "react";

const singleName = "employee";

const service = employeeService;

const inputs = [
  textInput("name").col(12).required(),
  emailInput().col(12).required(),
  textInput("phone_number").col(12),
  // reactiveInput(UserGroupsPermissions, "modules").col(12),
];

const EmployeeForm = createReactForm(reactiveForm => {
  reactiveForm.singleName(singleName).setInputs(inputs).service(service);
});

export default React.memo(EmployeeForm);
