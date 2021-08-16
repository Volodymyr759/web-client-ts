import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, IconTextBox, SayHelloForm, TitleCard } from "../components";

function MobileDevelopment(): JSX.Element {
	return (
		<>
			<Head>
				<title>Mobile App Design &amp; Development – Eivolo </title>
				<meta name="keywords" content="Mobile App development" />
			</Head>

			<TitleCard
				htagText="Mobile App Design & Development"
				htagSize="h2"
				buttonText="Talk To Us >"
				buttonLink="/contact-us"
				objdata="/EivoloLandingPage_AppDesignandDevelopment_Illustration.svg"
			>
				Create the ultimate customer experience.
				Mobile apps deliver absolute customer loyalty within an engaging and immersive format.
			</TitleCard>

			<section className="row" style={{ backgroundImage: "url(/gradient_bg.svg)" }}>
				<div className="bubblewrapper">
					<Htag tag="h2">App Design & Development With Eivolo</Htag>
				</div>
				<div className="bubblewrapper">

				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="End-To-End Solutions">
						<p>
							We provide end-to-end app solutions, from building a solution or product architecture to app design
							and development as well as aftercare support and maintenance packages. We also offer re-factoring
							options for old coded products that require code upgrades, or need to be written in updated code language.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Technology Partner">
						<p>
							When it comes to the design and development of your app, however, working with a technology partner
							with the capability to intuitively understand your needs is paramount.
						</p>
					</IconTextBox>
				</div>
			</section>

			<div style={{ border: "1px solid red" }}>
				<h2>RightImageCard</h2>
			</div>

			<SayHelloForm />
		</>
	);
}

export default withLayout(MobileDevelopment);