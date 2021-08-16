import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, P, SayHelloForm, TitleCard } from "../components";

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

			<section className="row">
				<Htag tag="h2">Web Design And Development With Eivolo</Htag>
				<div className="col-md-6">

				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>End-To-End</Htag>
						<P>
							We provide an end-to-end solution that can help you with everything from design to content writing
							to web development and maintenance.  Whether you need a complete overhaul of your website, are building
							a new site or would like to re-design certain aspects of your existing site, we have a solution to fit
							all scenarios.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>E-Commerce</Htag>
						<P>
							Consumer expectations are increasing when it comes to e-commerce; therefore, it is crucial that brands
							build interactive and secure e-commerce websites.
						</P>
						<P>
							We specialise in secure, customisable e-payment gateways and cybersecurity solutions so you can
							safeguard customer data, all while providing users with an engaging and immersive e-shopping experience.
						</P>
					</div>
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