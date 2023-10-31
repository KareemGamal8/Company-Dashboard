import { navigateTo } from "@mongez/react-router";
import URLS from "apps/admin/utils/urls";
import user from "user";

export function Guardian() {
  if (!user.isLoggedIn() || user.isGuest()) {
    navigateTo(URLS.login);
    return <></>;
  }

  return null;
}

export function ReverseGuardian() {
  if (user.isLoggedIn() && !user.isGuest()) {
    navigateTo(URLS.home);
    return <></>;
  }

  return null;
}

export function hasPermission(permission: string) {
  return () => {
    if (!user.can(permission)) {
      return navigateTo(URLS.home);
    }

    return null;
  };
}
