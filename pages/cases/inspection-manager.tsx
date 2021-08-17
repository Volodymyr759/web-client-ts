import Head from 'next/head';
import { withLayout } from '../../layouts/public/Layout';
import { Htag, SayHelloForm, TextCard } from '../../components';

function InspectionManager(): JSX.Element {
	return (
		<>
			<Head>
				<title>Case Study - Inspection Manager – Eivolo </title>
				<meta name="keywords" content="Inspection Manager – Eivolo" />
			</Head>

			<section className="row3">
				<div className="img-container">
					<img src="/logo-2.png" alt="Inspection Manager Logo" />
				</div>
				<TextCard
					htagText="Inspection Manager (Sydney, Australia)"
					htagSize="h2"
				>
					<h4>Application Type</h4>
					<p>
						A 6-months and still ongoing project that handles home inspection & property management. InpsectionManager’s
						main power is through its seamless integration with various information providers within the property
						management world including REST, PropertyTree, Palace Liquid and Re-Leased.
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
						<li>Mobile Application Development</li>
					</ul>
				</TextCard>
				<TextCard>
					<p>
						<strong>Quality Assurance & Deployment</strong>
					</p>
					<ul>
						<li>Test strategy and planning</li>
						<li>Test case generation</li>
					</ul>
				</TextCard>
				<TextCard>
					<p>
						<strong>Training & Documentation</strong>
					</p>
					<p>
						<strong>Monitoring & Feedback Analysis</strong>
					</p>
				</TextCard>
			</section>

			<section className="row">
				<TextCard
					htagText="An app that does the job for you."
					htagSize="h2"
				>
					<p>
						The Inspection Manager app runs on any iPhone or iPad and has also been developed for selected
						devices using the Android platform
					</p>
				</TextCard>
				<div className="img-container">
					<img src="/Layer-1-1-2.png" />
				</div>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(InspectionManager);