import { NavbarProps } from "./Navbar.props";
import styles from './Navbar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Image from 'next/image';
import Link from "next/link";

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
	return (
		<nav className={cn(className, styles.navbar)} {...props}>
			<Link href="/">
				<a>
					<Image
						src="/images/logo_eivolo.png"
						alt="Eivolo Logo"
						width={185}
						height={84}
					/>
				</a>
			</Link>
			<Menu />
		</nav>
	);
};