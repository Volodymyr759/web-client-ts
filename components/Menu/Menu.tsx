import Router from 'next/router';
import Link from 'next/link';
import styles from './Menu.module.css';
import { useState } from 'react';

export const Menu = (): JSX.Element => {
	const userFromStorage = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
	const [user, setUser] = useState(userFromStorage);

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<ul className={styles.navbarlist}>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
			<li>
				<a href="/outsourcing">Services</a>
				<ul className={styles.dropdownMenu}>
					<li>
						<Link href="/outsourcing">
							<a>Outsourcing</a>
						</Link>
					</li>
					<li>
						<Link href="/web-development">
							<a>Web Development</a>
						</Link>
					</li>
					<li>
						<Link href="/mobile-development">
							<a>Mobile Development</a>
						</Link>
					</li>
					<li>
						<Link href="/security-auditing">
							<a>Security Auditing</a>
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link href="/for-startups">
					<a>For Startups</a>
				</Link>
			</li>
			<li>
				<Link href="/contact-us">
					<a>Contact Us</a>
				</Link>
			</li>
			<li>
				<Link href="/success-stories">
					<a>Success Stories</a>
				</Link>
			</li>
			{!user &&
				<li onClick={() => { Router.push('/login'); }}>
					<Link href="/login">
						<a>LogIn/SignUp</a>
					</Link>

				</li>}
			{user &&
				<li onClick={logout}>
					<Link href="/">
						<a>Log Out</a>
					</Link>
				</li>}
		</ul >
	);
};