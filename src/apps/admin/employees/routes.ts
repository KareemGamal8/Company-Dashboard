import { guardedRoutes } from "apps/admin/utils/router";
import URLS from "apps/admin/utils/urls";
import EmployeesPage from "./pages/EmployeesPage";

guardedRoutes([
  {
    path: URLS.users,
    component: EmployeesPage,
  },
]);
