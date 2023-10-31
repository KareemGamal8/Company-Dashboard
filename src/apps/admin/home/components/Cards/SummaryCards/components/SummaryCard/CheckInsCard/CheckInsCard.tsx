// import { IconDoorEnter } from "@tabler/icons-react";
// import { homeAtom } from "apps/admin/home/atom/home-atom";
// import { summaryCard } from "apps/admin/home/components/Cards/ComparisonsSummaryCards/ComparisonsSummaryCardsClass";

import { preload } from "@mongez/react-utils";
import { getActiveEmployeesByMonth } from "apps/admin/home/services/home-service";

// export default function CheckInsCard() {
//   const monthly_check_ins = homeAtom.use("monthly_check_ins");
//   const prev_month_check_ins = homeAtom.use("prev_month_check_ins");

//   const CheckInsCard = summaryCard("monthlyCheckIns")
//     .color("indigo")
//     .value(monthly_check_ins)
//     .previousValue(prev_month_check_ins)
//     .percentageLabel("comparedToThePreviousMonth")
//     .icon(IconDoorEnter)
//     .asComponent();

//   return <CheckInsCard />;
// }

function _CheckInsCard() {
  return <div>CheckInsCard</div>;
}

const CheckInsCard = preload(_CheckInsCard, getActiveEmployeesByMonth);

export default CheckInsCard;
