import Head from 'next/head';
import Image from 'next/image';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import cookieCutter from 'cookie-cutter';
import Cookies from 'universal-cookie';
import { P, TextInput } from "../components";
import { withLayout } from "../layouts/public/Layout";
import { ILoginUser } from '../interfaces/login-user.interface';
import { useHttp } from '../hooks/use-http.hook';

const submitHandler = async (user: ILoginUser): Promise<void> => {
	const cookies = new Cookies();
	cookies.remove('auth');
	try {
		const data = await useHttp(null, '/api/auth/login', 'POST', JSON.stringify(user));
		cookies.set('auth', data, {
			path: '/',
			maxAge: 2592000,
			// httpOnly: true,
		});
		alert('User has been logged in.');
	} catch (e) {
		console.log(e.message);
		alert('Login error.');
	}
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
