import cookieCutter from 'cookie-cutter';
import { AppConstants } from "../infrastructure/app.constants";
import { IJwtData } from "../interfaces/jwt-object.interface";

export async function useHttp(jwtObjext: IJwtData | null, endPoint: string, method = "GET", body?: string | null): Promise<Record<string, unknown>> {
	let accessToken = '';
	let refreshToken = '';
	let res;
	try {
		if (jwtObjext) {
			accessToken = jwtObjext.access_token;
			refreshToken = jwtObjext.refresh_token;
		}
		if (!body) {
			body = '';
		}
		if (jwtObjext) {
			res = await fetch(AppConstants.API_BASE_URL + endPoint, {
				method: method,
				headers: { "Authorization": "Bearer " + accessToken },
			});
		} else {
			console.log("Body: ", body);
			res = await fetch(AppConstants.API_BASE_URL + endPoint, {
				method: method,
				headers: { "Content-type": "application/json" },
				body: body,
			});
		}

		if (res.status == 401) {
			throw new Error('User unauthorized');
		}

		if (jwtObjext && res.status == 403) {// Access_token has expired
			const cookieUpdated = await updateCookies(refreshToken);
			if (cookieUpdated) {
				// try to get data again with new access_token
				res = await fetch(AppConstants.API_BASE_URL + endPoint, {
					method: method,
					headers: { "Authorization": "Bearer " + accessToken },
				});
			} else {
				throw new Error('Failed to update cookie throw refresh_token');
			}
		}
		const data = await res.json();
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}

async function updateCookies(token: string) {
	let isCookieUpdated = false;
	try {
		const refreshToken = { token };
		// Unset auth-cookie if exists
		cookieCutter.set('auth', '', { expires: new Date(0) });
		// Try to update cookie throw refresh_token
		const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
			method: "POST",
			body: JSON.stringify(refreshToken),
		});
		if (res.ok) {
			const data = await res.json();
			cookieCutter.set('auth', JSON.stringify(data));
			isCookieUpdated = true;
		}
	} catch (e) {
		isCookieUpdated = false;
	}
	return isCookieUpdated;
}