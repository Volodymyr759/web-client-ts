import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import React, { FunctionComponent } from "react";
import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

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