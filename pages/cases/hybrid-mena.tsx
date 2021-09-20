import Head from 'next/head';
import { withLayout } from '../../layouts/public/Layout';
import { Htag, SayHelloForm, TextCard } from '../../components';

function HybridMena(): JSX.Element {
	return (
		<>
			<Head>
				<title>Case Study - Hybrid Mena Platform – Eivolo </title>
				<meta name="keywords" content="Hybrid Mena Platform – Eivolo" />
			</Head>

			<section className="row3">
				<div className="img-container">
					<img src="/images/logo-3.png" alt="Hybrid Mena Platform Logo" />
				</div>
				<TextCard
					htagText="Hibrid Media Platform (Dubai, UAE)"
					htagSize="h2"
				>
					<h4>Application Type</h4>
					<p>
						A 2-year and ongoing project that provides a full digital experience for media publishers
						(TV stations, Radio Stations, Newspapers, etc.) and online media viewers. The platform handles
						ingesting media, media management, monetization (Susbscriptions, Pay-Per-View and Ads), playout
						on various devices (PCs, Mobiles, TVs, OTT), reporting and activity analysis.
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

export default withLayout(HybridMena);