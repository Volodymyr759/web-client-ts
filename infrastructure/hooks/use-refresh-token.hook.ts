import Cookies from "universal-cookie";
import { AppConstants } from "../app.constants";
import { IJwtData } from "../interfaces/jwt-object.interface";

export async function useRefreshToken(): Promise<IJwtData> {
	const cookies = new Cookies();
	const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: cookies.get('auth').refresh_token }),
	});
	const jwt = await res.json();
	cookies.set('auth', jwt, { path: '/', maxAge: AppConstants.JWT_EXPIRATION_TIME });
	return jwt;
}