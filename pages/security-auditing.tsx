import Head from 'next/head';
import { withLayout } from "../layouts/public/Layout";
import { CenterTextCard, Htag, IconTextBox, LeftImageCard, P, RightImageCard, SayHelloForm, TitleCard } from "../components";

function SecurityAuditing(): JSX.Element {
	return (
		<>
			<Head>
				<title>Security Auditing Services – Eivolo </title>
				<meta name="keywords" content="Security Auditing Services" />
			</Head>

			<TitleCard
				htagText="Security Auditing Services"
				htagSize="h2"
				buttonText="Reach Out >"
				buttonLink="/contact-us"
				objdata="/EivoloLandingPage_SecurityAuditServices_Illustration.svg"
			>
				Fortify your IT systems against malicious attackers.
				It’s important to strengthen your company’s cyber resilience and ensure your IT systems are fortified against potential harm.
			</TitleCard>

			<section className="row" style={{ backgroundImage: "url(/gradient_bg.svg)" }}>
				<div className="bubblewrapper">
					<Htag tag="h2">Security Resilience With Eivolo</Htag>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Early Stage Detection">
						<p>
							Understand, analyze, measure and monitor security risks that exist or might be exist within your
							solution. This process is crucial for any system to ensure early detection of security-related traits.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Boost Security">
						<p>
							At Eivolo, security is not an add-on, but rather a crucial component of any system architecture,
							system development and implementation process, or code being generated or already generated. This
							guarantees maximum security on all levels.
						</p>
					</IconTextBox>
				</div>
				<div className="bubblewrapper">
					<IconTextBox appearance="rocket" headerText="Reveal Vulnerabilities">
						<p>
							Whether intentionally or non-intentionally, security vulnerabilities should always be researched
							and uncovered before malicious users do. Doing so guarantees a proper system reputation
							and maximizes trust.
						</p>
					</IconTextBox>
				</div>
			</section>

			<section className="row">
				<div className="bubblewrapper">
					<div className="img-container">
						<img
							src="http://localhost:3000/OBJECTS-300x300.png"
						/>
					</div>
					<P appearance="large">
						<strong>Around 98%</strong> of the web apps that have been tested are VULNERABLE TO CYBER ATTACK
					</P>
				</div>
				<div className="bubblewrapper">
					<div className="img-container">
						<img
							src="http://localhost:3000/illustration-300x250.png"
						/>
					</div>
					<P appearance="large">
						Cybercrime will cost the world <strong>$US 6 trillion annually by end of 2021</strong>
					</P>
				</div>
			</section>

			<CenterTextCard
				htagText="Our Security Audit Services"
			>
				<p className="lead mb-4">
					We offer a comprehensive security consulting service that can assist you in making the decisions that will secure your company’s IT systems for years to come.
					Take the first step to building your business’ cyber resilience today.
				</p>
			</CenterTextCard>

			<LeftImageCard
				htagText="Cybersecurity consultancy"
				isButtonNeeded={false}
				objdata="/EivoloLandingPage_WhyOutsource_Illustration.svg"
			>
				<p>We provide businesses with expert advice on various security topics, including:</p>
				<ul>
					<li><p>Company-wide cybersecurity policies, procedures and guidelines.</p></li>
					<li><p>Solution-oriented cybersecurity policies, procedures and guidelines</p></li>
					<li><p>Process-specific cybersecurity policies, procedures and guidelines.</p></li>
					<li><p>Security-related cyber strategies and best-practice cybersecurity standards</p></li>
				</ul>
			</LeftImageCard>

			<RightImageCard
				htagText="Cybersecurity Auditing & Risk Assessment"
				isButtonNeeded={false}
				objdata="/Mobility-Security-Illustration.svg"
				buttonLink="!#"
			>
				<p>
					As part of our auditing service, we use tools and our vast set of skills to inspect and evaluate
					your organisation’s current standing from a security perspective including your current cybersecurity policies,
					procedures and processes. This covers your cybersecurity compliance through to processes, communications,
					standards, certifications, and more. Our service extends the analysis spectrum to cover risk-based assessment
					of various organisational threats while providing proper measures and counter-measures to maintain assurance,
					build a comprehensive security program and mitigate any future problems.
				</p>
			</RightImageCard>

			<LeftImageCard
				htagText="Ethical Penetration Testing"
				isButtonNeeded={false}
				objdata="/Ethical-Testing-illustration.svg"
			>
				<p>
					Our ethical penetration testing service attempts to test the defences of a given solution or software through
					various techniques that malicious attackers may use. This offers businesses a complete evaluation report
					on the strengths and capabilities of your software or solutions. This ensures that security requirements and
					objectives are met at the highest standards.
				</p>
			</LeftImageCard>

			<SayHelloForm />
		</>
	);
}

export default withLayout(SecurityAuditing);