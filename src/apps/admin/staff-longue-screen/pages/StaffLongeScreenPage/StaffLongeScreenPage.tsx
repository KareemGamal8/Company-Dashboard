import {
  DeleteButton,
  EditButton,
  Table,
  actionsColumn,
  activeColumn,
  avatarColumn,
  booleanFilter,
  circleImage,
  emailColumn,
  emailFilter,
  idColumn,
  textColumn,
  textFilter,
} from "@mongez/moonlight";
import StaffLongueScreenForm from "apps/admin/staff-longue-screen/components/StaffLongueScreenForm";
import { getStaffLoungeData } from "apps/admin/staff-longue-screen/services";
import { useState } from "react";

export default function StaffLongeScreenPage() {
  const [data, setData] = useState([]);

  getStaffLoungeData().then((response: any) => {
    setData(response);
  });

  const columns = [
    idColumn(),
    avatarColumn("name", "image"),
    circleImage("nationalID", "nationalID"),
    emailColumn(),
    textColumn("jobTitle"),
    activeColumn(),
    actionsColumn([EditButton, DeleteButton]),
  ];

  const filters = [
    textFilter("name"),
    emailFilter(),
    booleanFilter("isActive"),
  ];

  return (
    <Table
      title="staffLounge"
      name="staffLounge"
      data={data}
      columns={columns}
      filters={filters}
      form={StaffLongueScreenForm}
    />
  );
}
