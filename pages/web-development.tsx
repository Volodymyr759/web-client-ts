import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, IconTextBox, RightSideCard, SayHelloForm, TitleCard } from "../components";

function WebDevelopment(): JSX.Element {
	return (
		<>
			<Head>
				<title>Web Design and Development – Eivolo </title>
				<meta name="keywords" content="Web development" />
			</Head>

			<TitleCard
				htagText="Web Design & Development"
				htagSize="h2"
				buttonText="Talk To Us >"
				buttonLink="/contact-us"
				objdata="/images/EivoloLandingPage_WebDesignandDevelopment_Illustration.svg"
			>
				Fast, intuitive web design & development. In an increasingly digital world, basic websites are no longer
				immersive or intuitive enough to meet changing consumer expectations.
			</TitleCard>

			<section className="row" style={{ backgroundImage: "url(/images/gradient_bg.svg)" }}>
				<div className="bubblewrapper">
					<Htag tag="h2">Web Design And Development With Eivolo</Htag>
				</div>
				<div className="bubblewrapper">

				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="End-To-End">
						<p>
							We provide an end-to-end solution that can help you with everything from design to content writing
							to web development and maintenance.  Whether you need a complete overhaul of your website, are building
							a new site or would like to re-design certain aspects of your existing site, we have a solution to fit
							all scenarios.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="E-Commerce">
						<p>
							Consumer expectations are increasing when it comes to e-commerce; therefore, it is crucial that brands
							build interactive and secure e-commerce websites.
						</p>
						<p>
							We specialise in secure, customisable e-payment gateways and cybersecurity solutions so you can
							safeguard customer data, all while providing users with an engaging and immersive e-shopping experience.
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

export default withLayout(WebDevelopment);