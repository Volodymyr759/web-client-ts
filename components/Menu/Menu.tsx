import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Menu.module.css';
import { AuthContext } from '../../infrastructure/context/auth-context';

export const Menu = (): JSX.Element => {
	const { email, logOut } = useContext(AuthContext);
	const [emailState, setEmailState] = useState(email);
	const router = useRouter();

	useEffect(() => {
		setEmailState(email);
	}, [emailState]);

	const logout = () => {
		logOut();
		setEmailState('');
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
			<li>
				{
					emailState ?
						<>
							<Link href="/">
								<a>Profile</a>
							</Link>
							<ul className={styles.profiledropdownMenu}>
								<li>
									<Link href="/profile">
										<a>Profile Settings</a>
									</Link>
								</li>
								<li>
									<Link href="/profile-messages">
										<a>My Messages</a>
									</Link>
								</li>
								<li>
									<Link href="/change-email">
										<a>Change Email</a>
									</Link>
								</li>
								<li>
									<Link href="/change-password">
										<a>Change Password</a>
									</Link>
								</li>
								<li><hr /></li>
								<li onClick={logout}>
									<Link href="/">
										<a>Log Out</a>
									</Link>
								</li>
							</ul>
						</>
						:
						<Link href="/login">
							<a>LogIn/SignUp</a>
						</Link>
				}
			</li>
		</ul >
	);
};