import { createContext } from 'react';
import Cookies from 'universal-cookie';
import { IAuthContext } from '../interfaces/auth.interface';

const cookies = new Cookies();
const authCookie = cookies.get('auth');

export const AuthContext = createContext<IAuthContext>(
	{
		email: authCookie ? authCookie.email : null,
		logOut: () => {
			cookies.remove('auth');
		}
	}
);
