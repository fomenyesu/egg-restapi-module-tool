import { request } from "../utils";

export async function query(params) {
  return request({
    url: "/api/restql/web_node",
    method: "GET",
    data: params
  });
}
