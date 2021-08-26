import { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { IAuthContext } from '../interfaces/auth.interface';

export const AuthContext = createContext<IAuthContext>({ token: '', user: { email: '', roles: [] } });

export const AuthContextProvider = ({ token, user, children }: PropsWithChildren<IAuthContext>): JSX.Element => {
	// const [jwttoken, setJwtToken] = useState<string>(token);

	return (
		<AuthContext.Provider value={{ token, user }}>
			{children}
		</AuthContext.Provider>
	);
};

