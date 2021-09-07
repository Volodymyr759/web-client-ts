import { useContext, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styles from './Menu.module.css';
import { AuthContext } from '../../context/auth-context';

export const Menu = (): JSX.Element => {
	const { email, logOut } = useContext(AuthContext);

	const [emailState, setEmailState] = useState(email);

	const logout = () => {
		logOut();
		setEmailState(null);
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
			{
				!emailState &&
				<li onClick={() => { Router.push('/login'); }}>
					<Link href="/login">
						<a>LogIn/SignUp</a>
					</Link>
				</li>
			}
			{
				emailState &&
				<li onClick={logout}>
					<Link href="/">
						<a>Log Out</a>
					</Link>
				</li>
			}
		</ul >
	);
};