import { Grid } from "@mantine/core";
import { NumberFormatter } from "@mongez/moonlight";
import { IconChartBar, IconUserCheck, IconUsers } from "@tabler/icons-react";
import { homeAtom } from "apps/admin/home/atom/home-atom";
import SummaryCard from "apps/admin/home/components/Cards/SummaryCards/components/SummaryCard";

function Cards() {
  const check_ins_count = homeAtom.use("check_ins_count");
  const total_employees = homeAtom.use("total_employees");
  const total_active_employees = homeAtom.use("total_active_employees");

  const summaryCardsData = [
    {
      Icon: IconChartBar,
      title: "totalSales",
      content: NumberFormatter(check_ins_count),
      iconColor: "#b60101b7",
      bgColor: "#ffe2e2",
    },
    {
      Icon: IconUsers,
      title: "totalEmployees",
      content: NumberFormatter(total_employees),
      iconColor: "#5234da",
      bgColor: "#f6f4ff",
    },
    {
      Icon: IconUserCheck,
      title: "totalActiveEmployees",
      content: NumberFormatter(total_active_employees),
      iconColor: "#81097b",
      bgColor: "#fff4fe",
    },
  ];

  return (
    <Grid w="100%" grow gutter={30}>
      {summaryCardsData.map((card, index) => (
        <Grid.Col md={4} sm={6} xs={12} key={index}>
          <SummaryCard card={card} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default Cards;
