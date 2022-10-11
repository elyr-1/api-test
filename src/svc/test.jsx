import http from "./http";

export function getAdminUsers() {
  return http.get("/admin");
}
