import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { RightSideCard, SayHelloForm } from "../components";
import styles from '../styles/contact-us.module.css';

function ContactUs(): JSX.Element {
	return (
		<>
			<Head>
				<title>Get In Touch – Eivolo </title>
				<meta name="keywords" content="Contact Us" />
			</Head>

			<RightSideCard
				htagText="Get In Touch"
				imgsrc="/images/EivoloLandingPage_GetinTouch_Illustration.svg"
			>
				<p>
					We can’t wait to hear about your latest project.
					Need to request a quote, learn more about our service offering or ask a question?
				</p>
				<p>Contact us at:</p>
				<a href="mailto:info@eivolo.com" className={styles.email}> info@eivolo.com</a>
				<p>Give us a call on:</p>
				<a href="tel:0434268269" className={styles.tel}> 0434 268 269</a><br /><br />

				<p>Or complete the contact form below and we’ll get back to you as soon as we can.</p>
			</RightSideCard>

			<SayHelloForm />
		</>
	);
}

export default withLayout(ContactUs);