import { IconEyeDollar } from "@tabler/icons-react";
import { homeAtom } from "apps/admin/home/atom/home-atom";
import { summaryCard } from "apps/admin/home/components/Cards/ComparisonsSummaryCards/ComparisonsSummaryCardsClass";

export default function SalesCard() {
  const monthly_sales = homeAtom.use("monthly_sales");
  const prev_month_sales = homeAtom.use("prev_month_sales");

  const SalesCard = summaryCard("monthlySales")
    .color("indigo")
    .value(monthly_sales)
    .previousValue(prev_month_sales)
    .percentageLabel("comparedToThePreviousMonth")
    .icon(IconEyeDollar)
    .asComponent();

  return <SalesCard />;
}
