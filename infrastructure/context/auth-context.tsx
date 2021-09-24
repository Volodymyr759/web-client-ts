import { createContext } from 'react';
import Cookies from 'universal-cookie';
import { IAuthContext } from '../interfaces/auth-context.interface';

const cookies = new Cookies();
// const authCookie = cookies.get('auth');

export const AuthContext = createContext<IAuthContext>(
	{
		access_token: '',
		expires_in: 0,
		token_type: '',
		refresh_token: '',
		email: '',
		roles: [],
		userId: '',
		logOut: () => {
			cookies.remove('auth');
		}
	}
);
