import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";
import StaffLongeScreenPage from "./pages/StaffLongeScreenPage";

publicRoutes([
  {
    path: URLS.staffLongueScreen,
    component: StaffLongeScreenPage,
  },
]);
