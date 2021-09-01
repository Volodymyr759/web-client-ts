import { HeaderProps } from "./Header.props";
import styles from './header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={styles.navbarwrapper} {...props}>
			<a className={styles.hamburger} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></a>
			<div className="collapse" id="collapseExample">
				<div className="navbar-collapse text-center collapse show" id="mainNavbar">
					<ul className="navbar-nav justify-content-between">
						<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active menu-item-31 nav-item">
							<a href="/" className="nav-link" aria-current="page">
								<span>Home</span>
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138 nav-item">
							<a href="/about" className="nav-link">
								<span>About us</span>
							</a>
						</li>
						<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-26 nav-item">
							<a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-26">
								<span>Services</span>
							</a>
							<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-26">
								<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142 nav-item">
									<a href="/outsourcing" className="dropdown-item">
										<span>Outsourcing</span>
									</a>
								</li>
								<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141 nav-item">
									<a href="/web-development/" className="dropdown-item">
										<span>Web Development</span>
									</a>
								</li>
								<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140 nav-item">
									<a href="/mobile-development/" className="dropdown-item">
										<span>Mobile Development</span>
									</a>
								</li>
								<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139 nav-item">
									<a href="/security-auditing" className="dropdown-item">
										<span>Security Auditing</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-145 nav-item">
							<a href="/for-startups" className="nav-link">
								<span>For Startups</span>
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143 nav-item">
							<a href="/contact-us" className="nav-link">
								<span>Contact Us</span>
							</a>
						</li>
						<li className="cta-button menu-item menu-item-type-post_type menu-item-object-page menu-item-144 nav-item">
							<a href="/success-stories" className="nav-link">
								<span>Success Stories</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};