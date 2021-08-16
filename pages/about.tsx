import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, LeftTextCard, P, RightTextCard, SayHelloForm } from "../components";
import styles from '../styles/about.module.css';

function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About us – Eivolo </title>
				<meta name="keywords" content="About" />
				<link rel="stylesheet" href="../styles/about.module.css" />
			</Head>

			<LeftTextCard
				htagText="Why Eivolo?"
				objdata="/EivoloLandingPage_AboutUsPage_Illustration.svg"
			>
				We founded Eivolo from a desire to deliver what we felt was lacking in the industry;
				exceptional tech talent and a high level of service, packaged in a way that could be
				customised to suit any client’s needs. We blend talent, resources and finely-tuned
				processes to bring you high-quality service at a sustainable cost.
			</LeftTextCard>

			<RightTextCard
				htagText="History"
				objdata="/EivoloLandingPage_AboutUsHistory_Illustration.svg"
			>
				In such a highly specialised field, our clients found that there was often a gap in
				understanding between them and their technology partners, which led to challenges in
				communicating and lengthy project delays. This saw them overspending on some of the
				most basic web development services. Eivolo uses over 20 years’ industry expertise
				to fill this gap by implementing structured workflow processes, offering clear communication
				and operating with a high level of transparency and integrity in all that we do.
			</RightTextCard>

			<section className="eiv-header-text">
				<Htag tag="h2">Why Work With Eivolo?</Htag>
			</section>

			<section className="row" style={{ backgroundImage: "url(/gradient_bg.svg)" }}>
				<div className="col-md-6">
					<div className="icon-para">
						<span className={styles.iconparagraphs}>
							<Htag tag='h3'> We’re Your Partners In Collaboration</Htag>
						</span>
						<P>
							We can work as an extension of your team, if you need. We operate with clear communication,
							which allows us to manage projects seamlessly. Above all, we focus on forging long-term client
							relationships so we can evolve together and do outstanding work.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<span className={styles.iconparagraphs}>
							<Htag tag='h3'> Streamlined Processes</Htag>
						</span>
						<P>
							Our processes provide a structured framework for project progression and the perfect platform
							to create flawless work. We believe this allows for a more streamlined way of working that means
							projects progress more quickly.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<span className={styles.iconparagraphs}>
							<Htag tag='h3'> Highly Personalised Service</Htag>
						</span>
						<P>
							We believe what sets us apart is our desire to ensure our work is uniquely personalised to each client.
							Our systems support this tailored approach. For us, customisation is crucial.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<span className={styles.iconparagraphs}>
							<Htag tag='h3'> An Agile Approach</Htag>
						</span>
						<P>
							Our agile business model enables us to adopt a flexible approach, allowing us to tailor our systems
							and processes to suit your needs.
						</P>
					</div>
				</div>
			</section>

			<RightTextCard
				htagText="Our Values"
				objdata="/EivoloLandingPage_AboutUsOurValues_Illustration.svg"
			>
				At Eivolo, our values underpin everything we do. We believe our high moral standards and dedication
				to our values is what sets us apart in the industry and has helped us retain so many of our valuable
				clients on an ongoing basis.
			</RightTextCard>

			<section className="row">
				<div className="col-md-6">
					<div className="bubble">
						<h4>Transparency</h4>
						<p>
							Our business is built on systems of trust and honesty. We provide full transparency to
							our clients and seek to build long-lasting relationships that stand the test of time.
						</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="bubble">
						<p>Collaborative</p>
						We’ll work with you towards shared goals, seeking to evolve together with our clients.
						We approach client relationships as a collaborative partnership, adopting a solutions-based,
						forward-thinking approach.
					</div>
				</div>
				<div className="col-md-6">
					<div className="bubble">
						<p>Integrity</p>
						We’re authentic and stay faithful to our promises. We’re confident in our expertise and take
						responsibility for our actions, standing by our decisions. We’ll always do what is right,
						adopting ethical business practices. We don’t believe in taking short cuts.
					</div>
				</div>
				<div className="col-md-6">
					<div className="bubble">
						<p>Innovative</p>
						We use a combination of innovative ideas and strategic thinking to inform our work, utilising
						the latest technological solutions to solve business problems.
					</div>
				</div>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(About);