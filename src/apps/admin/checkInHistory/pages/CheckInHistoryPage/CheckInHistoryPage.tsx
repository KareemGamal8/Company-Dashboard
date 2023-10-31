import { Table, numberColumn, textColumn, textFilter } from "@mongez/moonlight";
import CheckInHistoryForm from "../../components/CheckInHistoryForm";
import checkInHistoryService from "../../services/check-in-history";

export default function CheckInHistoryPage() {
  const columns = [textColumn("name"), numberColumn("check_ins_count")];

  const filters = [textFilter("name"), textFilter("check_ins_count")];

  return (
    <Table
      title="checkInHistory"
      name="checkInHistory"
      service={checkInHistoryService}
      form={CheckInHistoryForm}
      filters={filters}
      columns={columns}
      createButtons={[]}
    />
  );
}
