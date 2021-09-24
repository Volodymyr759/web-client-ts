import React, { FunctionComponent } from "react";
import Cookies from 'universal-cookie';
import { LayoutProps } from './Layout.props';
import styles from '../../styles/Layout.module.css';
import { Footer, Header, Navbar } from '../../components/';
import { AuthContext } from "../../infrastructure/context/auth-context";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const cookies = new Cookies();
	const authCookie = cookies.get('auth');

	return (
		<AuthContext.Provider value={{
			access_token: authCookie?.access_token,
			expires_in: authCookie ? parseInt(authCookie.expires_in) : 0,
			token_type: authCookie?.token_type,
			refresh_token: authCookie?.refresh_token,
			email: authCookie?.email,
			roles: authCookie ? authCookie.roles : [],
			userId: authCookie?.userId,
			logOut: () => { cookies.remove('auth'); }
		}}>
			<Header className={styles.header} />
			<Navbar className={styles.navbar} />
			<div className="container" style={{ minHeight: '100vh' }}>
				{children}
			</div>
			<Footer className={styles.footer} />
		</AuthContext.Provider>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};