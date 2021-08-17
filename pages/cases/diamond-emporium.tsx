import Head from 'next/head';
import { withLayout } from '../../layouts/public/Layout';
import { Htag, SayHelloForm, TextCard } from '../../components';

function DiamondEmporium(): JSX.Element {
	return (
		<>
			<Head>
				<title>Case Study - Diamond Emporium – Eivolo </title>
				<meta name="keywords" content="Diamond Emporium – Eivolo" />
			</Head>

			<section className="row3">
				<div className="img-container">
					<img src="/logo-4.png" alt="Diamond Emporium Logo" />
				</div>
				<TextCard
					htagText="Diamond Emporium (Sydney, Australia)"
					htagSize="h2"
				>
					<h4>Application Type</h4>
					<p>
						A 9-months project that provides a full-fledge e-commerce platform for diamonds and jewellery.
						DiamondEmporium provides a full integration with various diamond providers and allows users
						to buy jewellery, pair a jewellery item with compatible diamonds, check diamond certificates
						and authenticity, etc.
					</p>
					<p>
						It also digitizes the customer service cycle including sales requests, customer service,
						complaints, meetings, etc. through integrations with 3rd party systems.
					</p>
				</TextCard>
			</section>

			<Htag tag="h3">Services Provided</Htag>

			<section className="row4">
				<TextCard>
					<p>
						<strong>Consultancy</strong>
					</p>
					<ul>
						<li>Requirements analysis</li>
						<li>Best practices</li>
						<li>Digital strategy</li>
						<li>Technology guidelines</li>
						<li>Technical guidelines</li>
					</ul>
				</TextCard>
				<TextCard>
					<p>
						<strong>Development</strong>
					</p>
					<ul>
						<li>Solution architecture</li>
						<li>Technology stack</li>
						<li>Infrastructure setup, configuration and maintenance</li>
						<li>Backend and frontend development</li>
					</ul>
				</TextCard>
				<TextCard>
					<p>
						<strong>Quality Assurance & Deployment</strong>
					</p>
					<ul>
						<li>Test strategy and planning</li>
						<li>Test case generation</li>
						<li>E2E test automation</li>
						<li>Continuous Integration and Continuous Deployment (CI/CD)</li>
					</ul>
				</TextCard>
				<TextCard>
					<p>
						<strong>Training & Documentation</strong>
					</p>
					<p>
						<strong>Maintenance & Support Monitoring & Feedback Analysis</strong>
					</p>
				</TextCard>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(DiamondEmporium);