import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { BubbleBox, Htag, IconTextBox, P, SayHelloForm, TitleCard } from "../components";

function ForStartups(): JSX.Element {
	return (
		<>
			<Head>
				<title>For Startups – Eivolo </title>
				<meta name="keywords" content="Startups" />
			</Head>

			<TitleCard
				htagText="Eivolo For Startups"
				htagSize="h1"
				buttonText="Talk To Us"
				buttonLink="/contact-us"
				objdata="/EivoloLandingPage_ForStartups_Illustration.svg"
			>
				Our industry leading team will drive and support your digital projects end to end.
			</TitleCard>

			<section className="eiv-header-text">
				<Htag tag="h2">What’s included</Htag>
				<P>
					We understand that start-ups often need assistance to begin with, both financially and on an advisory level,
					as they may lack the technical skills to navigate the digital world.
				</P>
				<P>
					At Eivolo, we can bridge the gap between you and the digital world, and translate your ideas to the online space.
				</P>
			</section>

			<section className="row" style={{ backgroundImage: "url(/gradient_bg.svg)" }}>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Discovery Sessions">
						<ul>
							<li><p>Choosing the suitable architecture & technologies for. your solution.</p></li>
							<li><p>Assisting in controlling your minimal operational cost.</p></li>
							<li><p>Providing policies, procedures, and guidelines to adopt while producing POC or MVP.</p></li>
							<li><p>Offering an understanding of the development process.</p></li>
						</ul>
						<p>
							We provide the best solutions from the start to avoid any rework in the future causing loss of time
							and increase in costs.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="CTO/CIO Services">
						<p>
							We provide a more comprehensive consultancy service where we can act as a CTO/CIO for your solution,
							if needed. This will not only help in navigating the issues already mentioned, but will also help
							cover any CTO-related gap within the organisation itself and help with critical tasks:
						</p>
						<ul>
							<li><p>Selection of crucial user stories that should be part of the MVP.</p></li>
							<li><p>Optimisation of technical operational v/s the technical team costs.</p></li>
							<li><p>Assist in leading the technical objectives of the company.</p></li>
							<li><p>Assist in managing your start up technical budget.</p></li>
							<li><p>Researching, advising, planning, supervising and monitoring technical decisions v/s start up goals.</p></li>
						</ul>

					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Project Management">
						<p>
							We can work with you in an advisory capacity, implicitly supervising team performance while your
							solution is being produced to help assist you not only during the selection phase, but also during the
							implementation and production phases.
						</p>
					</IconTextBox>
				</div>
			</section>

			<section className="eiv-header-text">
				<P>
					Our services can provide you with the clarity you need to help you create the building blocks for success and
					eventually meet your business objectives. It will assist you in growing your start-up successfully and sustainably.
				</P>
			</section>

			<section className="row">
				<div className="bubblewrapper">
					<BubbleBox appearance="left-bottom" headerText="Scalable Solutions" spanText="GROWTH" />
				</div>
				<div className="bubblewrapper">
					<BubbleBox appearance="right-bottom" headerText="Ongoing Support" spanText="MAINTENANCE" />
				</div>
				<div className="bubblewrapper">
					<BubbleBox appearance="right-top" headerText="1-2 weeks" spanText="TIME" />
				</div>
				<div className="bubblewrapper">
					<BubbleBox appearance="left-top" headerText="End-To-End" spanText="Production" />
				</div>
			</section>

			<div style={{ border: "1px solid red" }}>
				<h2>Center text Card $ 5</h2>
			</div>

			<SayHelloForm />
		</>
	);
}

export default withLayout(ForStartups);