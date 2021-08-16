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
				objdata="/EivoloLandingPage_CaseStudies_Illustration.svg"
			>
				We take pride in showcasing the successful technological solutions developed for our clients, as they reflect our dedication in helping them evolve through customized professional services that best fit their needs.
				Are you ready to take your business to the next level?
			</TitleCard>

			<section className="row">
				<div className="col-md-6">
					<div className={styles.casestudyblock}>
						<a href="https://eivolo.com/case-study-property-space/">
							<img src="/image-6-1.png" />
							<h4>Property Space</h4>
						</a>
					</div>
				</div>
				<div className="col-md-6">
					<div className={styles.casestudyblock}>
						<a href="https://eivolo.com/case-study-inspection-manager/">
							<img src="/Layer-1-1-2.png" />
							<h4>Inspection Manager</h4>
						</a>
					</div>
				</div>
				<div className="col-md-6">
					<div className={styles.casestudyblock}>
						<a href="https://eivolo.com/case-study-hybrid-mena-platform/">
							<img src="/logo-3.png" />
							<h4>Hibrid Media Platform</h4>
						</a>
					</div>
				</div>
				<div className="col-md-6">
					<div className={styles.casestudyblock}>
						<a href="https://eivolo.com/case-study-diamond-emporium/">
							<img src="/logo-4.png" />
							<h4>Diamond Emporium</h4>
						</a>
					</div>
				</div>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(SuccessStories);