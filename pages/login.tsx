import Head from 'next/head';
import Image from 'next/image';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'universal-cookie';
import { P, TextCard } from "../components";
import { withLayout } from "../layouts/public/Layout";
import { ILoginUser } from '../infrastructure/interfaces/login-user.interface';
import { useState } from 'react';
import { AppConstants } from '../infrastructure/app.constants';

const submitHandler = async (user: ILoginUser): Promise<void> => {
	const cookies = new Cookies();
	cookies.remove('auth');
	try {
		const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/login', {
			method: 'POST',
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(user)
		});
		if (!res.ok) {
			throw new Error('User not found');
		}
		const data = await res.json();
		cookies.set('auth', data, {
			path: '/',
			maxAge: 2592000,
			// httpOnly: true,
		});
	} catch (e) {
		alert('Login error.');
	}
};

function Login(): JSX.Element {
	const [showInfo, setShowInfo] = useState(false);
	const infoTextHandler = (show: boolean) => {
		setShowInfo(show);
	};

	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="keywords" content="Login" />
			</Head>
			<section className="login-form-container">
				<br />
				<P appearance="centered"><strong>Sign in</strong></P>
				<Formik
					initialValues={{
						login: '',
						password: ''
					}}
					validationSchema={Yup.object({
						login: Yup.string()
							.required('Required')
							.email('Invalid email')
							.min(4, 'Email address must be 4-30 characters')
							.max(30, 'Email address must be 4-30 characters'),
						password: Yup.string()
							.required('Required')
							.min(6, 'Password must be 6-10 characters')
							.max(10, 'Password must be 6-10 characters')
					})
					}
					onSubmit={
						(values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								submitHandler(values);
								resetForm();
								setSubmitting(false);
							}, 1);
						}
					}
					validateOnMount
				>
					{props => (
						<div className="formgroup">
							<Form>
								<p><label className="form-label">Email:</label></p>
								<Field name="login" className="form-input" type="email" />
								<ErrorMessage name="login" render={msg => <div className="form-error-message">{msg}</div>} />

								<p><label className="form-label">Password:</label></p>
								<Field name="password" className="form-input" type="password" />
								<ErrorMessage name="password" render={msg => <div className="form-error-message">{msg}</div>} />
								<br /><br />
								<p>
									<button className="primary-button" type="submit" disabled={!props.isValid || props.isSubmitting}>
										{
											props.isSubmitting ?
												<>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
													<span> Loading...</span>
												</>
												:
												<span>Sign In</span>
										}
									</button>
								</p>
							</Form>
						</div>
					)}
				</Formik>

				<P appearance="centered">
					<a href="/forgot-password" className="link-base">Forgot your password?</a>
				</P>
				<hr />
				<P appearance="centered">
					<strong>Or</strong>
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
					<a
						href="/register"
						className="link-base"
					>
						Not signed up? Create an account.
					</a>
				</P>
				{
					showInfo ?
						<TextCard>
							We will collect and use your personal information (which may include cookies we collect through your
							use of <a href="www.eivolo.com">eivolo.com</a> and our other websites) to give you a personalised user experience.
							<br />
							We may also contact you to promote our services or those of third parties.
							Our Privacy Policy further explains how we collect, use and disclose personal information and how to access,
							correct or complain about the handling of personal information.
							<div className="col text-center" style={{ marginTop: '30px' }}>
								<button className="btn btn-primary" style={{ margin: 'auto' }} onClick={() => { infoTextHandler(false); }}>Close</button>
							</div>
						</TextCard>
						:
						null
				}
				<P appearance="centered">
					<span>
						<a href="/login"
							onClick={(e) => { e.preventDefault(); infoTextHandler(true); }}
						>
							Personal Information Collection Statement.
						</a>
					</span>
				</P>
				<br />
			</section >
		</>
	);
}

export default withLayout(Login);
