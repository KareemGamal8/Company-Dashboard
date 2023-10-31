import { Divider, Flex } from "@mantine/core";
import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { preload } from "@mongez/react-utils";
import { homeAtom } from "app/home/atom/home-atom";
import Cards from "app/home/components/Cards/Cards";
import { getHome } from "app/home/services/home-service";
import Chart from "../../components/BranchesChart/Chart";
import TopEmployees from "../../components/BranchesCheckInCountSlider/TopEmployees";

function _HomePage() {
  return (
    <>
      <Helmet title={trans("dashboard")} appendAppName={false} />
      <Flex direction="column" gap="2rem">
        <Cards />
        <Divider color="#eee" />
        <TopEmployees />
        <Divider color="#eee" />
        <Chart />
      </Flex>
    </>
  );
}

const HomePage = preload(_HomePage, getHome, {
  onSuccess: response => {
    homeAtom.update({
      ...homeAtom.value,
      check_ins_count: response.data.check_ins_count,
      total_employees: response.data.total_employees,
      total_active_employees: response.data.total_active_employees,
      // total_sales: response.data.total_sales,
      // monthly_sales: response.data.monthly_sales,
      // prev_month_sales: response.data.prev_month_sales,
      // monthly_check_ins: response.data.monthly_check_ins,
      // prev_month_check_ins: response.data.prev_month_check_ins,
      // fair_share_monthly_records: response.data.fair_share_monthly_records,
    });
  },
});
export default HomePage;
