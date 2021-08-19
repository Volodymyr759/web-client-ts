import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { FormLabel, P } from "../components";
import { withLayout } from "../layouts/public/Layout";

function Register(): JSX.Element {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Head>
				<title>Register</title>
				<meta name="keywords" content="Register Page" />
			</Head>

			<section className="login-form-container">
				<br />
				<P appearance="centered">
					<h3>Create Account</h3>
				</P>
				<br />
				<form
					method="POST"
					// onSubmit={saveMessage}
					noValidate={true}
				>
					<div className="formgroup">
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
					<div className="formgroup">
						<FormLabel>Password *:</FormLabel>
						<input
							type="password"
							name="password"
							className="forminput"
							size={20}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							minLength={4}
							maxLength={20}
						/>
					</div>
					<br />
					<div className="formgroup">
						<button className="primary-button">Create Account</button>
					</div>
					{/* <hr style={{ width: "75%" }} /> */}
					<P appearance="centered">
						<h3>Or</h3>
					</P>
					<div className="formgroup">
						<div className="sso-button-wrapper">
							<Image
								src="/google-icon.svg"
								width={24}
								height={24}
								alt="Google"
							/>
							<div style={{ width: "100%" }}>
								<button className="white-button">Continue with Google</button>
							</div>

						</div>
					</div>
					<div className="formgroup">
						<div className="sso-button-wrapper">
							<Image
								src="/facebook-icon.svg"
								width={24}
								height={24}
								alt="Google"
							/>
							<div style={{ width: "100%" }}>
								<button className="primary-button">Continue with Facebook</button>
							</div>

						</div>
					</div>
					<P appearance="centered">
						<span><a href="/">Personal Information Collection Statement.</a></span>
					</P>
					<br />
				</form>
			</section >
		</>
	);
}

export default withLayout(Register);
