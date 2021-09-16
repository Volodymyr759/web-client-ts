import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Menu.module.css';
import { AuthContext } from '../../context/auth-context';

export const Menu = (): JSX.Element => {
	const { email, logOut } = useContext(AuthContext);
	const [emailState, setEmailState] = useState(email);
	const router = useRouter();

	const logout = () => {
		logOut();
		setEmailState(null);
		router.reload();
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
				emailState ?
					<li onClick={logout}>
						<Link href="/">
							<a>Log Out</a>
						</Link>
					</li>
					:
					<li onClick={() => { router.push('/login'); }}>
						<Link href="/login">
							<a>LogIn/SignUp</a>
						</Link>
					</li>
			}
		</ul >
	);
};