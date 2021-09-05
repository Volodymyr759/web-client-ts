import Head from 'next/head';
import Image from 'next/image';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import cookieCutter from 'cookie-cutter';
import { P, TextInput } from "../components";
import { withLayout } from "../layouts/public/Layout";
import { ILoginUser } from '../interfaces/login-user.interface';
import { AppConstants } from '../infrastructure/app.constants';

// const storageName = 'userData';

const submitHandler = async (user: ILoginUser): Promise<void> => {
	// Unset auth-cookie if exists
	cookieCutter.set('auth', '', { expires: new Date(0) });

	const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/login', {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(user)
	});
	const data = await res.json();

	cookieCutter.set('auth', JSON.stringify(data), {
		expires: 3600,
		secure: true,
	});
	res.status == 200 ? alert('User has been logged in.') : alert('Login error.');
	return;
};

function Login(): JSX.Element {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="keywords" content="Login" />
			</Head>

			<section className="login-form-container">
				<br />
				<P appearance="centered">
					<strong>Sign in</strong>
				</P>
				<br />
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
				>
					{props => (
						<div className="formgroup">
							<Form>
								<TextInput label="Email:" name='login' type='email' />
								<TextInput label="Password:" name='password' type='password' />
								<p>
									<button className="primary-button" type="submit">
										{props.isSubmitting ? 'Loading' : 'Sign In'}
									</button>
								</p>
							</Form>
						</div>
					)}
				</Formik>

				<P appearance="centered">
					<a href="/login" className="link-base">Forgot your password?</a>
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
					<a href="/register" className="link-base">Not signed up? Create an account.</a>
				</P>
				<P appearance="centered">
					<span><a href="/login">Personal Information Collection Statement.</a></span>
				</P>
				<br />
			</section >
		</>
	);
}

export default withLayout(Login);
