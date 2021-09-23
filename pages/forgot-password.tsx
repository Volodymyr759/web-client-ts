import { useState } from 'react';
import Head from 'next/head';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { P, TextCard } from "../components";
import { withLayout } from "../layouts/public/Layout";
import { AppConstants } from '../infrastructure/app.constants';
import { createNotification } from '../infrastructure/notification';
import { NotificationType } from '../infrastructure/enums/notification-types.enum';
import { IEmailObject } from '../infrastructure/interfaces/email-object.interface';
import { useRouter } from 'next/router';

function ForgotPassword(): JSX.Element {
	const [showInfo, setShowInfo] = useState(false);
	const infoTextHandler = (show: boolean) => { setShowInfo(show); };
	const router = useRouter();

	const submitHandler = async (forgotPasswordDto: IForgotPasswordDto): Promise<void> => {
		try {
			// Check if user exists in db
			const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/forgot-password', {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(forgotPasswordDto)
			});
			if (res.status == 201) {
				// Send email with new password
				createNotification('New password has been created.');
				const newPassword = await res.json();
				console.log("Password", newPassword.password);
				const email: IEmailObject = {
					to: forgotPasswordDto.email,
					subject: 'New password has been created.',
					text: '',
					html: `<div>New password has been successfully created: ${newPassword.password}</div>`
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
				createNotification('Error of creating new password.', NotificationType.Error);
				throw new Error('Error of creating new password.');
			}
			createNotification('New password has been sent to your email.');
			createNotification('Please Log In with new password to continue.', NotificationType.Info);
			router.push('/login');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Head>
				<title>Forgot Password</title>
				<meta name="keywords" content="Forgot Password page" />
			</Head>

			<section className="login-form-container">
				<br />
				<P appearance="centered">
					<strong>Forgot your password?</strong>
				</P>
				<Formik
					initialValues={{
						email: '',
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.required('Required')
							.email('Invalid email')
							.min(4, 'Email address must be 4-30 characters')
							.max(30, 'Email address must be 4-30 characters')
					})
					}
					onSubmit={
						(values, { setSubmitting, resetForm }) => {
							submitHandler(values);
							resetForm();
							setSubmitting(false);
						}
					}
					validateOnMount
				>
					{props => (
						<div className="formgroup" style={{ marginBottom: "5px" }}>
							<Form>
								<p><label className="form-label">Email:</label></p>
								<Field name="email" className="form-input" type="email" />
								<ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />
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
												<span>Reset my password</span>
										}
									</button>
								</p>
							</Form>
						</div>
					)}
				</Formik>
				<div className="formgroup">
					<P appearance="centered">
						<a href="/login" className="link-base">Go back to Sign In</a>
					</P>
				</div>

				<hr />
				{
					showInfo ?
						<TextCard>
							We will collect and use your personal information (which may include cookies we collect through your
							use of <a href="www.eivolo.com">eivolo.com</a> and our other websites) to give you a personalised user experience.
							<br />
							We may also contact you to promote our services or those of third parties.
							Our Privacy Policy further explains how we collect, use and disclose personal information and how to access,
							correct or complain about the handling of personal information.
							<p className="col text-center" style={{ marginTop: '30px' }}>
								<button className="btn btn-primary" style={{ margin: 'auto' }} onClick={() => { infoTextHandler(false); }}>
									Close
								</button>
							</p>
						</TextCard>
						:
						null
				}
				<div className="formgroup">
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
				</div>
			</section >
		</>
	);
}

export default withLayout(ForgotPassword);

export interface IForgotPasswordDto {
	email: string;
}
