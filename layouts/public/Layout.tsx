import React, { FunctionComponent } from "react";
import Cookies from 'universal-cookie';
import { LayoutProps } from './Layout.props';
import styles from '../../styles/Layout.module.css';
import { Footer, Header, Navbar } from '../../components/';
import { AuthContext } from "../../infrastructure/context/auth-context";
import Head from "next/head";

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
			<Head>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />
				<title>Next App</title>
				<link rel="icon" href="/images/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="/css/all.css" type="text/css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
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