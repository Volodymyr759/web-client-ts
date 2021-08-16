import { NavbarProps } from "./Navbar.props";
import styles from './Navbar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Image from 'next/image';

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
	return (
		<nav className={cn(className, styles.navbar)} {...props}>
			<Image
				src="/logo_eivolo.png"
				alt="Eivolo Logo"
				width={185}
				height={84}
			/>
			<Menu />
		</nav>
	);
};