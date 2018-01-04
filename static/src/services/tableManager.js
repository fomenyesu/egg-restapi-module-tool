import { request } from "../utils";

export async function query(params) {
	return request({
		url: "/api/restql/web_node",
		method: "GET",
		data: params
	});
}

export async function remove(params) {
	const selectedRowKeys = params.selectedRowKeys || [];
	const ids = selectedRowKeys.join(",");

	return request({
		url: `/api/restql/web_node/${ids}`,
		method: "delete"
	});
}

export function update(params) {
	const id = params.id;
	delete params.id;

	return request({
		url: `/api/restql/web_node/${id}`,
		method: "put",
		data: params
	});
}

export async function removeTable(params) {
	const templateArr = params.templateArr || [];
	const res = templateArr.join(",");

	return request({
		url: `/api/table/${res}`,
		method: "delete"
	});
}
