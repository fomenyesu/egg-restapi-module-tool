import { request } from '../utils'

export async function login (params) {
  return params.name=='admin'&&params.pass=='123';
}

export async function updatePassword(params) {
  const uid = params.uid;

  return request({
    url: `/api/restql/users/${uid}`,
    method: 'put',
    data: {
      name: params.name,
      pass: params.password
    }
  })
}
