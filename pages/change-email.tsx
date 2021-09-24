import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Htag } from '../components';
import { AuthContext } from '../infrastructure/context/auth-context';
import { withLayout } from "../layouts/public/Layout";
import { IChangeEmail } from '../infrastructure/interfaces/change-email.interface';
import { useHttp } from '../infrastructure/hooks/use-http.hook';
import { createNotification } from '../infrastructure/notification';
import { NotificationType } from '../infrastructure/enums/notification-types.enum';

function ChangeEmail(): JSX.Element {
	const router = useRouter();
	const { access_token } = useContext(AuthContext);
	const [accessToken, setAccessToken] = useState(access_token);

	useEffect(() => {
		if (!access_token) router.push('/login');
		setAccessToken(access_token);
	}, [accessToken]);

	const submitHandler = async (changeEmail: IChangeEmail): Promise<void> => {
		try {
			const data = await useHttp('/api/auth/change-email', 'POST', access_token, JSON.stringify(changeEmail));
			if (data.Error) {
				createNotification('Error of changing email.', NotificationType.Error);
				throw new Error('Error of updating...');
			} else {
				createNotification('Email has been changed.');
				createNotification('Please Log In to continue.', NotificationType.Info);
			}
			router.push('/login');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Head>
				<title>Eivolo – Change user's email</title>
				<meta name="keywords" content="Change email" />
			</Head>
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