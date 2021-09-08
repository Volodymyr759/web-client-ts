import { AppConstants } from "../infrastructure/app.constants";

export async function useHttp(
	endPoint: string,
	method = "GET",
	accessToken: string,
	body?: string,
): Promise<Record<string, unknown>> {
	let res;
	try {
		if (body) {
			res = await fetch(AppConstants.API_BASE_URL + endPoint, {
				method: method,
				headers: {
					"Authorization": "Bearer " + accessToken,
					"Content-Type": "application/json",
				},
				body: body,
			});
		} else {
			res = await fetch(AppConstants.API_BASE_URL + endPoint, {
				method: method,
				headers: { "Authorization": "Bearer " + accessToken },
			});
		}
		const data = await res.json();
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
