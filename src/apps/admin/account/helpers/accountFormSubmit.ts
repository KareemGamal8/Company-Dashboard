import { trans } from "@mongez/localization";
import { parseError, toastError, toastSuccess } from "@mongez/moonlight";
import { navigateBack, navigateTo } from "@mongez/react-router";
import user from "user";
import URLS from "../../utils/urls";
import { forgetPasswordAtom } from "../atom/forget-password-atom";
import { forgetPassword, login, resetPassword } from "../service/auth";

// Handling Login page form...
export const performLogin = ({ values, form }) => {
  login(values)
    .then(response => {
      user.login({
        ...response.data.user,
        accessToken: response.data.token,
      });
      navigateBack();
      toastSuccess("Login Success");
    })
    .catch(error => {
      form.submitting(false);
      toastError(parseError(error.response.data.message));
    });
};

// Handling Logout page form...
export const performLogout = () => {
  user.logout();
  navigateTo(URLS.login);
  toastSuccess(trans("logoutSuccessMessage"));
};

// Handling forgot password form submit...
export const forgotPasswordSubmit = ({ values, form }) => {
  forgetPassword(values)
    .then(() => {
      forgetPasswordAtom.change("email", form.value("email"));
      setTimeout(() => {
        navigateTo(URLS.resetPassword);
      }, 0);
    })
    .catch(error => {
      form.submitting(false);
      toastError(parseError(error.response.data.message));
    });
};

// Handling Reset password form...
export const resetFormSubmit = ({ form }) => {
  resetPassword({
    ...form.values(["password", "password_confirmation", "token"]),
  })
    .then(() => {
      toastSuccess("Success");
      forgetPasswordAtom.reset();
      navigateTo(URLS.login);
    })
    .catch(error => {
      form.submitting(false);
      toastError(parseError(error.response.data.message));
    });
};
