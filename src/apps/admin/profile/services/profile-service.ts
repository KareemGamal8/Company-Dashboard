import endpoint from "shared/endpoint";

/**
 * Get Profiles list
 */
export function getProfilesList(params: any = {}) {
  return endpoint.get("/profile", {
    params,
  });
}
export function editProfile(data: any) {
  return endpoint.put("/profile", data);
}
export function editProfileImage(data: any) {
  return endpoint.post("profile/update-icon", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

/**
 * Get profile details
 */
export function getProfile(id: string | number) {
  return endpoint.get("/profile/" + id);
}
