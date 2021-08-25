import Head from 'next/head';
import Image from 'next/image';
import { Form, Field, useField, Formik } from 'formik';
import * as Yup from 'yup';
import { P } from "../components";
import { withLayout } from "../layouts/public/Layout";

const TextInput = ({ label, props }): JSX.Element => {
	const [field, meta] = useField(props.name);
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<Field className="text-input" {...props} />
			{meta.touched && meta.error ? (<div className="errorMessage">{meta.error}</div>) : null}
		</>
	);
};

interface ILoginUser {
	login: string;
	password: string;
}

const handleSubmit = async (registerUserDto: ILoginUser): Promise<void> => {
	const res = await fetch('https://polar-castle-18354.herokuapp.com/api/auth/register', {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(registerUserDto)
	});
	return res.status == 201 ? alert('User has been registered.') : alert('Registration error.');
};

function Register(): JSX.Element {
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
								handleSubmit(values);
								// alert(JSON.stringify(values, null, 2));
								resetForm();
								setSubmitting(false);
							}, 1);
						}
					}
				>
					{props => (
						<div className="formgroup">
							<Form>
								<TextInput label="Email:" props={{ name: 'login', type: 'email', className: 'forminput' }} />
								<TextInput label="Password:" props={{ name: 'password', type: 'password', className: 'forminput' }} />
								<p>
									<button className="primary-button" type="submit">
										{props.isSubmitting ? 'Loading' : 'Create Account'}
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
			</section >
		</>
	);
}

export default withLayout(Register);
