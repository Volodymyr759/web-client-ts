import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Htag } from '../components';
import { AuthContext } from '../context/auth-context';
import { withLayout } from "../layouts/public/Layout";
import { IChangeEmail } from '../interfaces/change-email.interface';
import { useHttp } from '../hooks/use-http.hook';

function ChangeEmail(): JSX.Element {
	const router = useRouter();
	const { access_token, roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles) router.push('/login');
	}, []);

	const submitHandler = async (changeEmail: IChangeEmail): Promise<void> => {
		try {
			const data = await useHttp('/api/auth/change-email', 'POST', access_token, JSON.stringify(changeEmail));
			if (!data) {
				throw new Error('Error of updating...');
			}
		} catch (e) {
			console.log(e);
			router.push('/login');
		}
	};

	return (
		<>
			<Htag tag="h3">Change your email</Htag>
			<Formik
				initialValues={{
					oldEmail: '',
					newEmail: '',
					password: '',
				}}
				validationSchema={Yup.object({
					oldEmail: Yup.string()
						.required('Required')
						.email('Invalid email')
						.min(4, 'Email address must be 4-30 characters')
						.max(30, 'Email address must be 4-30 characters'),
					newEmail: Yup.string()
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
					(values, { setSubmitting }) => {
						submitHandler(values);
						setSubmitting(false);
						alert('Email has been changed. Please re-Sign-in with new email.');
						setTimeout(() => { router.push('/login'), 3000; });
					}
				}
				validateOnMount
			>
				{props => (
					<Form className="row">
						<div className="col-12">
							<p><label className="form-label">Existing email:</label></p>
							<Field name="oldEmail" className="form-control" type="email" />
							<ErrorMessage name="oldEmail" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<div className="col-12">
							<p><label className="form-label">New email:</label></p>
							<Field name="newEmail" className="form-control" type="email" />
							<ErrorMessage name="newEmail" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<div className="col-12">
							<p><label className="form-label">Password:</label></p>
							<Field name="password" className="form-control" type="password" />
							<ErrorMessage name="password" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<p> </p>
						<br />
						<div className="col-12">
							<button type="submit" className="btn btn-primary" disabled={!props.isValid || props.isSubmitting}>
								{
									props.isSubmitting ?
										<>
											<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											<span> Loading...</span>
										</>
										:
										<span>Submit</span>
								}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default withLayout(ChangeEmail);