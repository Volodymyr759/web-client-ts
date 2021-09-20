import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { SayHelloForm, TitleCard } from "../components";
import styles from '../styles/success-stories.module.css';

function SuccessStories(): JSX.Element {
	return (
		<>
			<Head>
				<title>Case Studies – Eivolo </title>
				<meta name="keywords" content="Success Stories" />
			</Head>

			<TitleCard
				htagText="Success Stories"
				htagSize="h2"
				buttonText="Talk To Us >"
				buttonLink="/contact-us"
				objdata="/images/EivoloLandingPage_CaseStudies_Illustration.svg"
			>
				We take pride in showcasing the successful technological solutions developed for our clients, as they reflect our dedication in helping them evolve through customized professional services that best fit their needs.
				Are you ready to take your business to the next level?
			</TitleCard>

			<section className="row">
				<div className={styles.casestudyblock}>
					<a href="/cases/property-space">
						<img src="/images/image-6-1.png" />
						<h4>Property Space</h4>
					</a>
				</div>
				<div className={styles.casestudyblock}>
					<a href="/cases/inspection-manager/">
						<img src="/images/Layer-1-1-2.png" />
						<h4>Inspection Manager</h4>
					</a>
				</div>
				<div className={styles.casestudyblock}>
					<a href="/cases/hybrid-mena">
						<img src="/images/logo-3.png" />
						<h4>Hibrid Media Platform</h4>
					</a>
				</div>
				<div className={styles.casestudyblock}>
					<a href="/cases/diamond-emporium">
						<img src="/images/logo-4.png" />
						<h4>Diamond Emporium</h4>
					</a>
				</div>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(SuccessStories);