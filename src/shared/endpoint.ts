import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { getCurrentLocaleCode } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import URLS from "app/utils/urls";
import user from "user";
import { apiBaseUrl } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl + "/api/company",

  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

export const authEndpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl + "/api/auth",

  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

export const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["X-Lang-ID"] = getCurrentLocaleCode() === "ar" ? 1 : 2;
});

endpointEvents.onError(response => {
  if (response?.status === 401) {
    user.logout();
    navigateTo(URLS.login);
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
