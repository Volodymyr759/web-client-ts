import { useState, useCallback, useEffect } from 'react';

const storageName = 'user';

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userData, setUserData] = useState({});

	// To do: decript token to user
	const user = { email: 'user@gmail.com', roles: ['user', 'admin'] };

	const login = useCallback((jwtToken) => {
		setToken(jwtToken);
		setUserData(user);
		localStorage.setItem(storageName, JSON.stringify({ user, token }));
	}, []);

	const logOut = useCallback(() => {
		setToken(null);
		setUserData({});
		localStorage.removeItem(storageName);
	}, []);

	useEffect(() => {
		const userExists = localStorage.getItem(storageName);
		if (userExists) {
			const data = JSON.parse(userExists);
			if (data && data.token) {
				login(data.token);
			}
		}
	}, [login]);

	return { login, logOut, token, user };
};
