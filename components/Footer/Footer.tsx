import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import { format } from 'date-fns';
import cn from 'classnames';
import { Htag } from '../Htag/Htag';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>
				<img src="https://eivolo.com/wp-content/themes/eivolo/assets/images/logo-white.png" alt="" />
				<span>©{format(new Date(), 'yyyy')} Eivolo. All Rights Reserved.</span>
			</div>
			<div>
				<Htag tag="h5">get in touch</Htag>
				<span><a href="tel:0434 268 269">0434 268 269</a></span>
				<span><a href="mailto:info@eivolo.com">info@eivolo.com</a></span>
			</div>
			<div>
				<Htag tag="h5">our address</Htag>
				<address>Darlinghurst, NSW 2010 <br />Sydney - Australia</address>
			</div>
			<div>
				<Htag tag="h5">follow us</Htag>
				<a href="https://www.facebook.com/eivolo/" target="_blank" className="color-white"><i className="fab fa-facebook-f"></i></a>&#160;&#160;
				<a href="https://www.instagram.com/eivolo/" target="_blank"><i className="fab fa-instagram"></i></a>&#160;&#160;
				<a href="https://www.linkedin.com/company/eivolo/about/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
			</div>
		</footer>
	);
};