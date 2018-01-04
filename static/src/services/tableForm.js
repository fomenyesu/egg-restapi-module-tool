import { request } from "../utils";

export async function loadTable(params) {
	const id = params.id || 0;
	const url = id ? `/api/restql/web_node/${id}` : "/api/restql/web_node";

	return request({
		url,
		method: "get"
	});
}

export async function update(params) {
	const id = params.id || 0;
	if (!id) {
		return;
	}

	delete params.id;

	return request({
		url: `/api/restql/web_node/${id}`,
		method: "put",
		data: params
	});
}

export async function save(params) {
	return request({
		url: "/api/restql/web_node",
		method: "post",
		data: params
	});
}

export async function addTable(params) {
	return request({
		url: "/api/table",
		method: "post",
		data: params
	});
}
export async function updateTable(params) {
	return request({
		url: "/api/table",
		method: "put",
		data: params
	});
}
