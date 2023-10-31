import endpoint from "shared/endpoint";

export function getHome() {
  return endpoint.get("/dashboard");
}

export function getTopTenEmployees() {
  return endpoint.get("/dashboard/top-ten-employees");
}

export function getActiveEmployees() {
  return endpoint.get("/dashboard/active-employees");
}

export function getActiveEmployeesByMonth() {
  return endpoint.get("/dashboard/active-employees?month=2023-10");
}

export function getUserGym() {
  return endpoint.get("/my-places");
}
