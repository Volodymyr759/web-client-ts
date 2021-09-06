import { useCallback } from 'react';
import { IJwtData } from '../interfaces/jwt-object.interface';

export function useHttp(jwtData: IJwtData): IUseHttp {
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);
	let loading = false;
	let error = '';

	const request = useCallback(async (url, method = 'GET', body = null, headers = []) => {
		// setLoading(true);
		loading = true;
		try {
			if (body) {
				body = JSON.stringify(body);
				// headers['Content-Type'] = 'application/json';
				headers['Authorization'] = 'Bearer ' + jwtData.access_token;
			}

			const response = await fetch(url, { method, body, headers });
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Something went wrong');
			}

			// setLoading(false);
			loading = false;
			return data;
		} catch (e) {
			// setLoading(false);
			loading = false;
			error = e.message;
			// setError(e.message);
			throw e;
		}
	}, []);

	// const clearError = useCallback(() => setError(null), []);
	const clearError = useCallback(() => (error = ''), []);

	return { loading, request, error, clearError };
}

export interface IUseHttp {
	loading: boolean;
	request: (
		url: string,
		method?: string,
		body?: Record<string, unknown>,
		headers?: [Record<string, string>],
	) => Promise<any>;
	error: string;
	clearError: () => void;
}