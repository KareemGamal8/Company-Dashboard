import { reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import ForgotPasswordPage from "./components/ForgotPassword";
import LoginPage from "./components/LoginPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

reverseGuardedRoutes([
  {
    path: URLS.login,
    component: LoginPage,
  },
  {
    path: URLS.forgotPassword,
    component: ForgotPasswordPage,
  },
  {
    path: URLS.resetPassword,
    component: ResetPasswordPage,
  },
]);
