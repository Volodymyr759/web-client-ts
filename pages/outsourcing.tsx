import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, P, RightImageCard, SayHelloForm } from "../components";

function Outsourcing(): JSX.Element {
	return (
		<>
			<Head>
				<title>Outsourcing – Eivolo </title>
				<meta name="keywords" content="Outsourcing" />
			</Head>

			<RightImageCard
				htagText="Outsourcing"
				buttonText="Talk To Us >"
				buttonLink="/contact-us"
				objdata="/EivoloLandingPage_WhyOutsource_Illustration.svg"
			>
				<p>
					Need help translating your ideas into functional, scalable solutions?
					Outsourcing can greatly enhance your business’ efficiency and, if done correctly,
					it can result in significant cost-savings for your company.
				</p>
			</RightImageCard>

			<section className="row">
				<Htag tag="h2">Outsourcing Benefits</Htag>
				<div className="col-md-6">
					<br /><br />
					<Htag tag="h5">
						<strong>
							<i>
								We recognise how difficult it can be to source experienced local talent, which is why we offer access
								to some of the brightest technical professionals from all over the world.
							</i>
						</strong>
					</Htag>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>Client-Managed Outsourcing</Htag>
						<P>
							If you already have a well-established team and extensive technical knowledge, we can help with your outsourcing needs.
						</P>
						<P>
							Drawing on our extended industry networks, we can act as a recruiter, sourcing you the best talent
							from all over the world at a sustainable cost. This can allow you to implement a variety of
							technological solutions without seeing projects blow out over budget or over time.
						</P>
					</div>
				</div>
				<div className="col-md-6">
					<div className="icon-para">
						<Htag tag='h3'>End-To-End Outsourcing</Htag>
						<P>
							We offer an end-to-end outsourcing service for clients that require more assistance in discovering tech talent.
							Perhaps you don&rsquo;t have a thorough understanding of the resources needed to support your complex project,
							or simply don&rsquo;t have the time or resources to commit to recruiting.
						</P>
						<P>
							Perhaps you don&rsquo;t have a thorough understanding of the resources needed to support your complex project,
							or simply don&rsquo;t have the time or resources to commit to recruiting.
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

export default withLayout(Outsourcing);