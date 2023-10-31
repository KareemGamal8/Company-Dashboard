import endpoint, { authEndpoint } from "shared/endpoint";

export function getGuestToken() {
  return endpoint.post("/login/guests");
}
export function login(data: any) {
  return authEndpoint.post("/login", data);
}
export function forgetPassword(data: any) {
  return endpoint.post("/password-resets", data);
}

export function resetPassword(data: any) {
  return endpoint.post("/password-resets/reset", data);
}

export function updateProfile(data: any) {
  return endpoint.put("/update-profile", data);
}

export function changePassword(data: any) {
  return endpoint.post("/change-password", data);
}
/**
 * Verify forget password code
 */
export function verifyForgetPassword(data: any) {
  return endpoint.post("/forget-password/verify-code", data);
}
