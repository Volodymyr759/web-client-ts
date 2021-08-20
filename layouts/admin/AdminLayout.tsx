import React, { FunctionComponent } from "react";
import { AdminLayoutProps } from "./admin-layout.props";
import styles from '../../styles/Layout.module.css';
import { Footer, Header, Navbar, SidebarMenu } from '../../components';

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => (
	<>
		<Header className={styles.header} />
		<Navbar className={styles.navbar} />
		<div className={styles.body}>
			<div className={styles.admincontainer}>
				<div>
					<SidebarMenu />
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
		<Footer className={styles.footer} />
	</>
);

export const withAdminLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withAdminLayoutComponent(props: T): JSX.Element {
		return (
			<AdminLayout>
				<Component {...props} />
			</AdminLayout>
		);
	};
};