import { AppConstants } from "../app.constants";
import { IJwtData } from "../interfaces/jwt-object.interface";

export async function useRefreshToken(refreshToken: string): Promise<IJwtData> {
	const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: refreshToken }),
	});
	return await res.json();
}