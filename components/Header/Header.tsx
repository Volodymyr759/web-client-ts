import { useContext, useState } from "react";
import Link from 'next/link';
import { HeaderProps } from "./Header.props";
import styles from './header.module.css';
import { AuthContext } from "../../context/auth-context";
import Router from "next/router";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	const { email, logOut } = useContext(AuthContext);
	const [emailState, setEmailState] = useState(email);

	const logout = () => {
		logOut();
		setEmailState(null);
	};

	return (
		<>
			<div className={styles.navbarwrapper} {...props}>
				<a className={styles.hamburger} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></a>
				<div className="collapse" id="collapseExample">
					<div className="navbar-collapse text-left collapse show" id="mainNavbar" style={{ backgroundColor: 'white', padding: '0 20px' }}>
						<ul className="navbar-nav justify-content-between">
							<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active menu-item-31 nav-item">
								<Link href="/" >
									<a className="nav-link" aria-current="page">
										<span>Home</span>
									</a>
								</Link>
							</li>
							<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138 nav-item">
								<Link href="/about" >
									<a className="nav-link">
										<span>About us</span>
									</a>
								</Link>
							</li>
							<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-26 nav-item">
								<a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-26">
									<span>Services</span>
								</a>
								<ul className="dropdown-menu" style={{ padding: '0 20px' }}>
									<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142 nav-item">
										<Link href="/outsourcing" >
											<a className="nav-link">
												<span>Outsourcing</span>
											</a>
										</Link>
									</li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141 nav-item">
										<Link href="/web-development/" >
											<a className="nav-link">
												<span>Web Development</span>
											</a>
										</Link>
									</li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140 nav-item">
										<Link href="/mobile-development/" >
											<a className="nav-link">
												<span>Mobile Development</span>
											</a>
										</Link>
									</li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139 nav-item">
										<Link href="/security-auditing" >
											<a className="nav-link">
												<span>Security Auditing</span>
											</a>
										</Link>
									</li>
								</ul>
							</li>
							<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-145 nav-item">
								<Link href="/for-startups" >
									<a className="nav-link">
										<span>For Startups</span>
									</a>
								</Link>
							</li>
							<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143 nav-item">
								<Link href="/contact-us" >
									<a className="nav-link">
										<span>Contact Us</span>
									</a>
								</Link>
							</li>
							<li className="cta-button menu-item menu-item-type-post_type menu-item-object-page menu-item-144 nav-item">
								<Link href="/success-stories" >
									<a className="nav-link">
										<span>Success Stories</span>
									</a>
								</Link>
							</li>
							{
								!emailState &&
								<li className="cta-button menu-item menu-item-type-post_type menu-item-object-page menu-item-144 nav-item" onClick={() => { Router.push('/login'); }}>
									<Link href="/login" >
										<a className="nav-link">
											<span>LogIn/SignUp</span>
										</a>
									</Link>
								</li>
							}
							{
								emailState &&
								<li className="cta-button menu-item menu-item-type-post_type menu-item-object-page menu-item-144 nav-item" onClick={logout}>
									<Link href="/" >
										<a className="nav-link">
											<span>Log Out</span>
										</a>
									</Link>
								</li>
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};