import Head from 'next/head';
import { withLayout } from '../../layouts/public/Layout';
import { Htag, SayHelloForm, TextCard } from '../../components';

function PropertySpace(): JSX.Element {
	return (
		<>
			<Head>
				<title>Case Study - Property Space – Eivolo </title>
				<meta name="keywords" content="Property Space – Eivolo" />
			</Head>

			<section className="row3">
				<div className="img-container">
					<img src="/logo-1.png" alt="Property Space Logo" />
				</div>
				<TextCard
					htagText="Property Space (Sydney, Australia)"
					htagSize="h2"
				>
					<h4>Application Type</h4>
					<p>
						A 2-year and still ongoing project that intends to make property management easier. Digitizing the rental process
						with paperless leases, tenant inductions, condition reports, routine inspections and more.
					</p>
					<p>
						PropertySpace streamlines the rental process for both tenants and property managers. Digitizing what are currently
						paper based processes and creating a less costly, faster solution.
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

			<section className="row">
				<TextCard
					htagText="One space for all your tenancy needs"
					htagSize="h2"
				>
					<p>
						Property Space has made property management easier. Digitising the rental process with paperless leases,
						tenant inductions, condition reports, routine inspections and more.
					</p>
				</TextCard>
				<div className="img-container">
					<img src="/image-6-1.png" />
				</div>
			</section>

			<SayHelloForm />
		</>
	);
}

export default withLayout(PropertySpace);