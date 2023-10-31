import { Table, textColumn } from "@mongez/moonlight";
import { TableWrapper } from "apps/admin/home/Home-Style";
import { homeAtom } from "apps/admin/home/atom/home-atom";
import LatestOrderTableForm from "./ProviderTableForm/ProviderTableForm";

export const columnsList = [
  textColumn("month"),
  textColumn("total_check_ins", "total_check_ins"),
  textColumn("branches_share"),
  textColumn("branches_total_income"),
];

export default function ProviderTable() {
  const tableData = homeAtom.use("fair_share_monthly_records");
  return (
    <TableWrapper>
      <Table
        shortcuts={false}
        striped
        displayHeader={false}
        withColumnBorders
        bulkSelection={false}
        data={tableData}
        pagination={false}
        permissions={{
          create: false,
          delete: false,
          update: false,
        }}
        name="ProviderTable"
        form={LatestOrderTableForm}
        columns={columnsList}
      />
    </TableWrapper>
  );
}
