import endpoint from "shared/endpoint";

export function getModules() {
  return endpoint.get("/employees/modules");
}
