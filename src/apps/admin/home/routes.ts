import router from "@mongez/react-router";
import { guardedRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import DashboardPage from "apps/admin/home/pages/HomePage/HomePage";
import NotFoundPage from "../design-system/layouts/NotFoundPage";

router.add("/404", NotFoundPage);

guardedRoutes([
  {
    path: URLS.home,
    component: DashboardPage,
  },
]);
