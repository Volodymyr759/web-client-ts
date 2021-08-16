import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { RightImageCard } from "../components";
import styles from '../styles/contact-us.module.css';

function ContactUs(): JSX.Element {
	return (
		<>
			<Head>
				<title>Get In Touch – Eivolo </title>
				<meta name="keywords" content="Contact Us" />
			</Head>

			<RightImageCard
				htagText="Get In Touch"
				buttonText="Learn More >"
				buttonLink="/security-auditing"
				objdata="/EivoloLandingPage_GetinTouch_Illustration.svg"
			>
				We can’t wait to hear about your latest project.
				Need to request a quote, learn more about our service offering or ask a question?<br /><br />

				Contact us at:<br />
				<a href="mailto:info@eivolo.com" className={styles.email}> info@eivolo.com</a><br />
				Give us a call on:<br />
				<a href="tel:0434268269" className={styles.tel}> 0434 268 269</a><br /><br />

				Or complete the contact form below and we’ll get back to you as soon as we can.
			</RightImageCard>
		</>
	);
}

export default withLayout(ContactUs);