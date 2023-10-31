import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";
import BranchTablePage from "./pages/BranchTablePage";

publicRoutes([
  {
    path: URLS.branches,
    component: BranchTablePage,
  },
]);
