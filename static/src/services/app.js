import { request } from "../utils";

export async function login(params) {
  return request({
    url: "/user/authorize",
    // url: '/oauth2/access_token',
    method: "POST",
    data: {
      username: params.name,
      password: params.pass,
      client_id: "eggClient",
      grant_type: "password"
    }
  });
}
export async function updatePassword(params) {
  const uid = params.uid;

  return request({
    url: `/api/restql/users/${uid}`,
    method: "put",
    data: {
      username: params.name,
      password: params.password
    }
  });
}
