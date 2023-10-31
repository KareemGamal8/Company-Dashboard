import router from "@mongez/react-router";
import NotFoundPage from "../design-system/layouts/NotFoundPage";
import { guardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import CheckInHistoryPage from "./pages/CheckInHistoryPage";

router.add("/404", NotFoundPage);

guardedRoutes([
  {
    path: URLS.checkInHistory,
    component: CheckInHistoryPage,
  },
]);
