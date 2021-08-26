import { useCallback, useState } from "react";

export const useHttp = async () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const request = useCallback(async (url, method = "GET", headers = {}, body = null) => {
		setLoading(true);
		try {
			const res = await fetch(url, { method, headers, body });
			const data = res.json();
			if (!res.ok) {
				throw new Error('Something went wrong');
			}
			return data;
		} catch (e) {
			setError(e.message);
			throw e;
		} finally {
			setLoading(false);
		}
	}, []);

	const clearError = () => setError('');

	return { loading, request, error, clearError };
};

