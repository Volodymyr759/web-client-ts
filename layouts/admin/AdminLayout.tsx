import React, { FunctionComponent } from "react";
import Cookies from 'universal-cookie';
import { AdminLayoutProps } from "./admin-layout.props";
import styles from '../../styles/Layout.module.css';
import { Footer, Header, Navbar, SidebarMenu } from '../../components';
import { AuthContext } from "../../infrastructure/context/auth-context";

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => {
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
			{/* <div className={styles.body}> */}
			<div className={styles.admincontainer}>
				<div>
					<SidebarMenu />
				</div>
				<div>
					{children}
				</div>
			</div>
			{/* </div> */}
			<Footer className={styles.footer} />
		</AuthContext.Provider>
	);
};

export const withAdminLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withAdminLayoutComponent(props: T): JSX.Element {
		return (
			<AdminLayout>
				<Component {...props} />
			</AdminLayout>
		);
	};
};