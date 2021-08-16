import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, P, SayHelloForm, TitleCard } from "../components";

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

			<section className="row">
				<Htag tag="h2">App Design & Development With Eivolo</Htag>
				<div className="col-md-6">

				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>End-To-End Solutions</Htag>
						<P>
							We provide end-to-end app solutions, from building a solution or product architecture to app design
							and development as well as aftercare support and maintenance packages. We also offer re-factoring
							options for old coded products that require code upgrades, or need to be written in updated code
							language.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>Technology Partner</Htag>
						<P>
							When it comes to the design and development of your app, however, working with a technology partner
							with the capability to intuitively understand your needs is paramount.
						</P>
					</div>
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