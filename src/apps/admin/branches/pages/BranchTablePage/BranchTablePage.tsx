import {
  DeleteButton,
  EditButton,
  Table,
  actionsColumn,
  idColumn,
  textColumn,
  textFilter,
  translateColumn,
} from "@mongez/moonlight";
import BranchForm from "apps/admin/branches/pages/BranchTablePage/BranchForm";
import { getBranchesData } from "apps/admin/branches/services";
import { useState } from "react";

export default function BranchTablePage() {
  const [data, setData] = useState([]);

  getBranchesData().then((response: any) => {
    setData(response);
  });

  const columns = [
    idColumn(),
    textColumn("name"),
    textColumn("city"),
    translateColumn("network"),
    actionsColumn([EditButton, DeleteButton]),
  ];

  const filters = [textFilter("name"), textFilter("city")];

  return (
    <Table
      data={data}
      name="branches"
      title="branches"
      columns={columns}
      filters={filters}
      form={BranchForm}
    />
  );
}
