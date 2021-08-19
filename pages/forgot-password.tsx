import Head from 'next/head';
import { useState } from 'react';
import { FormLabel, P } from "../components";
import { withLayout } from "../layouts/public/Layout";

function ForgotPassword(): JSX.Element {
	const [email, setEmail] = useState('');

	return (
		<>
			<Head>
				<title>Eivolo = Forgot Password</title>
				<meta name="keywords" content="Forgot Password page" />
			</Head>

			<section className="login-form-container">
				<br />
				<P appearance="centered">
					<h3>Forgot your password?</h3>
				</P>
				<br />
				<form
					method="POST"
					// onSubmit={saveMessage}
					noValidate={true}
				>
					<div className="formgroup">
						<P appearance="centered">
							Enter your email and we’ll send you a code you can use to update your password.
						</P>
						<FormLabel>Email *:</FormLabel>
						<input
							type="email"
							name="email"
							className="forminput"
							size={30}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							minLength={4}
							maxLength={30}
						/>
					</div>
					<br />
					<div className="formgroup">
						<button className="primary-button">Reset my password</button>
					</div>
					<P appearance="centered">
						<a href="/login" className="link-base">Go back to sign in.</a>
					</P>
					<hr />
					<P appearance="centered">
						<span><a href="/">Personal Information Collection Statement.</a></span>
					</P>
					<br />
				</form>
			</section >
		</>
	);
}

export default withLayout(ForgotPassword);
