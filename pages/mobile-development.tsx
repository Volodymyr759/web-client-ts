import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, IconTextBox, RightSideCard, SayHelloForm, TitleCard } from "../components";

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
				objdata="/images/EivoloLandingPage_AppDesignandDevelopment_Illustration.svg"
			>
				Create the ultimate customer experience.
				Mobile apps deliver absolute customer loyalty within an engaging and immersive format.
			</TitleCard>

			<section className="row" style={{ backgroundImage: "url(/images/gradient_bg.svg)" }}>
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

			<RightSideCard htagText="Technologies" imgsrc="/images/Technologies-Logotypes.png">
				<p>
					Eivolo works with a variety of different technologies, offering our clients a wide range of flexibility.
					A frequent mistake that businesses make is choosing unsuitable technologies that do not allow results to manifest
					quickly or at all. Unfortunately, this results in clients having to seek our and reinvest in alternative solutions
					that are stable and scalable.
					At Eivolo, we will make sure that your solutions are produced using a stable technology stack. We take care in
					choosing appropriate technology that gives you the ability to evolve your solution and maintain it over an extended
					period of time.
				</p>
			</RightSideCard>

			<SayHelloForm />
		</>
	);
}

export default withLayout(MobileDevelopment);