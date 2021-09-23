import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { P, TextCard } from "../components";
import { withLayout } from "../layouts/public/Layout";
import { createNotification } from '../infrastructure/notification';
import { ILoginUser } from '../infrastructure/interfaces/login-user.interface';
import { AppConstants } from '../infrastructure/app.constants';
import { IEmailObject } from '../infrastructure/interfaces/email-object.interface';
import { NotificationType } from '../infrastructure/enums/notification-types.enum';
import { useRouter } from 'next/router';

function Register(): JSX.Element {
	const [showModal, setShowModal] = useState(false);
	const modalHandler = (show: boolean) => {
		setShowModal(show);
	};
	const router = useRouter();

	const submitHandler = async (user: ILoginUser): Promise<void> => {
		try {
			// Save user to db
			const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/register', {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(user)
			});
			if (res.status == 201) {
				createNotification('User has been registered.');
				// Sending email-confirmation to user
				const email: IEmailObject = {
					to: user.login,
					subject: 'Registration on eivolo.com is confirmed',
					text: '',
					html: `<div>You are successfully registered to eivolo.com with login: ${user.login}, password: ${user.password}</div>`
				};
				fetch('/api/mailer', {
					method: 'POST',
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ emailObject: email })
				}).then((res) => {
					if (!res.ok) {
						createNotification('Error of sending email.', NotificationType.Error);
						throw new Error('Error of sending email.');
					}
				});
			} else {
				createNotification('Registration error.', NotificationType.Error);
				throw new Error('Error of creating the User.');
			}
			createNotification('Email confirmation has sent.');
			createNotification('Please Log In to continue.', NotificationType.Info);
			router.push('/login');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Head>
				<title>Register</title>
				<meta name="keywords" content="Register Page" />
			</Head>
			<section className="login-form-container">
				<br />
				<P appearance="centered">
					<strong>Create Account</strong>
				</P>
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

								<p>
									<button className="primary-button" type="submit" disabled={!props.isValid || props.isSubmitting}>
										{
											props.isSubmitting ?
												<>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
													<span> Loading...</span>
												</>
												:
												<span>Create Account</span>
										}
									</button>
								</p>
							</Form>
						</div>
					)}
				</Formik>
				<P appearance="centered">
					<strong>Or</strong>
				</P>
				<div className="formgroup">
					<div className="sso-button-wrapper">
						<Image
							src="/images/google-icon.svg"
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
							src="/images/facebook-icon.svg"
							width={24}
							height={24}
							alt="Facebook"
						/>
						<div style={{ width: "100%" }}>
							<button className="primary-button">Continue with Facebook</button>
						</div>

					</div>
				</div>
				{showModal ?
					<TextCard>
						We will collect and use your personal information (which may include cookies we collect through your
						use of <a href="www.eivolo.com">eivolo.com</a> and our other websites) to give you a personalised user experience.
						<br />
						We may also contact you to promote our services or those of third parties.
						Our Privacy Policy further explains how we collect, use and disclose personal information and how to access,
						correct or complain about the handling of personal information.
						<div className="col text-center" style={{ marginTop: '30px' }}>
							<button className="btn btn-primary" style={{ margin: 'auto' }} onClick={() => { modalHandler(false); }}>Close</button>
						</div>
					</TextCard>
					: null}
				<P appearance="centered">
					<span><a href="/register" onClick={(e) => { e.preventDefault(); modalHandler(true); }}>Personal Information Collection Statement.</a></span>
				</P>
				<br />
			</section >
		</>
	);
}

export default withLayout(Register);
