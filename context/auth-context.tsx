import { createContext } from 'react';
import Cookies from 'universal-cookie';
import { IAuthContext } from '../interfaces/auth-context.interface';

const cookies = new Cookies();
const authCookie = cookies.get('auth');

export const AuthContext = createContext<IAuthContext>(
	{
		access_token: authCookie ? authCookie.access_token : '',
		expires_in: authCookie ? parseInt(authCookie.access_token) : 0,
		token_type: authCookie ? authCookie.token_type : '',
		refresh_token: authCookie ? authCookie.refresh_token : '',
		email: authCookie ? authCookie.email : null,
		roles: authCookie ? authCookie.roles : null,
		logOut: () => {
			cookies.remove('auth');
		}
	}
);
