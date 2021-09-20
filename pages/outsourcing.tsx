import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { Htag, IconTextBox, RightImageCard, RightSideCard, SayHelloForm } from "../components";
import React from 'react';

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
				objdata="/images/EivoloLandingPage_WhyOutsource_Illustration.svg"
			>
				<p>
					Need help translating your ideas into functional, scalable solutions?
					Outsourcing can greatly enhance your business’ efficiency and, if done correctly,
					it can result in significant cost-savings for your company.
				</p>
			</RightImageCard>

			<section className="row" style={{ backgroundImage: "url(/images/gradient_bg.svg)" }}>
				<div className="bubblewrapper">
					<Htag tag="h2">Outsourcing Benefits</Htag>
				</div>
				<div className="bubblewrapper">
					<Htag tag="h5">
						<strong>
							<i>
								We recognise how difficult it can be to source experienced local talent, which is why we offer access
								to some of the brightest technical professionals from all over the world.
							</i>
						</strong>
					</Htag>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Client-Managed Outsourcing">
						<p>
							If you already have a well-established team and extensive technical knowledge, we can help with your
							outsourcing needs.
						</p>
						<p>
							Drawing on our extended industry networks, we can act as a recruiter, sourcing you the best talent from
							all over the world at a sustainable cost. This can allow you to implement a variety of technological
							solutions without seeing projects blow out over budget or over time.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="End-To-End Outsourcing">
						<p>
							We offer an end-to-end outsourcing service for clients that require more assistance in discovering tech talent.
						</p>
						<p>
							Perhaps you don’t have a thorough understanding of the resources needed to support your complex project,
							or simply don’t have the time or resources to commit to recruiting.
						</p>
					</IconTextBox>
				</div>
			</section>

			<RightSideCard htagText="Technologies" imgsrc="/images/Technologies-Logotypes.png">
				<p>
					Eivolo works with a variety of different technologies, offering our clients a wide range of flexibility.
					A frequent mistake that businesses make is choosing unsuitable technologies that do not allow results to
					manifest quickly or at all. Unfortunately, this results in clients having to seek our and reinvest in
					alternative solutions that are stable and scalable.
					At Eivolo, we will make sure that your solutions are produced using a stable technology stack. We take
					care in choosing appropriate technology that gives you the ability to evolve your solution and maintain
					it over an extended period of time.
				</p>
			</RightSideCard>

			<SayHelloForm />
		</>
	);
}

export default withLayout(Outsourcing);