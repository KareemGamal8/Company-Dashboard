import ProfilePage from "apps/admin/profile/pages/ProfilePage";
import { publicRoutes } from "apps/admin/utils/router";
import URLS from "apps/admin/utils/urls";

publicRoutes([
  {
    path: URLS.profile,
    component: ProfilePage,
  },
]);
