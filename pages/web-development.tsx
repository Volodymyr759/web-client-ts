import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, IconTextBox, SayHelloForm, TitleCard } from "../components";

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
				objdata="/EivoloLandingPage_WebDesignandDevelopment_Illustration.svg"
			>
				Fast, intuitive web design & development. In an increasingly digital world, basic websites are no longer
				immersive or intuitive enough to meet changing consumer expectations.
			</TitleCard>

			<section className="row" style={{ backgroundImage: "url(/gradient_bg.svg)" }}>
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

			<div style={{ border: "1px solid red" }}>
				<h2>RightImageCard #?</h2>
			</div>

			<SayHelloForm />
		</>
	);
}

export default withLayout(WebDevelopment);