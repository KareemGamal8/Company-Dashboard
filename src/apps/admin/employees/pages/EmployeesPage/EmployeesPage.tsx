import {
  Table,
  actionsColumn,
  emailColumn,
  emailFilter,
  idColumn,
  textColumn,
  textFilter,
  useSuperTable,
} from "@mongez/moonlight";
import EmployeeForm from "apps/admin/employees/pages/EmployeesPage/EmployeeForm";
import { employeeService } from "apps/admin/employees/services/Employee-service";

const columns = [
  idColumn(),
  textColumn("name").sortable(),
  textColumn("phone_number").sortable(),
  emailColumn(),
  actionsColumn(),
];

const filters = [
  textFilter("filters.name", "name"),
  emailFilter("filters.email", "email"),
];

export default function EmployeesPage() {
  const superTable = useSuperTable();

  superTable?.sortBy("sort_by", "desc");

  return (
    <Table
      title="employees"
      name="employees"
      service={employeeService}
      form={EmployeeForm}
      filters={filters}
      columns={columns}
    />
  );
}
