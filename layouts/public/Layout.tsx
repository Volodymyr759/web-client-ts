import React, { FunctionComponent } from "react";
import { LayoutProps } from './layout.props';
import styles from '../../styles/Layout.module.css';
import { Footer, Header, Navbar } from '../../components/';

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<>
		<Header className={styles.header} />
		<Navbar className={styles.navbar} />
		<div className={styles.body}>
			{children}
		</div>
		<Footer className={styles.footer} />
	</>
);

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};