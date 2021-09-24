import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Htag } from '../components';
import { AuthContext } from '../infrastructure/context/auth-context';
import { withLayout } from "../layouts/public/Layout";
import { useHttp } from '../infrastructure/hooks/use-http.hook';
import { IChangePassword } from '../infrastructure/interfaces/change-password.interface';
import { createNotification } from '../infrastructure/notification';
import { NotificationType } from '../infrastructure/enums/notification-types.enum';

function ChangePassword(): JSX.Element {
	const router = useRouter();
	const { access_token } = useContext(AuthContext);
	const [accessToken, setAccessToken] = useState(access_token);

	useEffect(() => {
		if (!access_token) router.push('/login');
		setAccessToken(access_token);
	}, [accessToken]);

	const submitHandler = async (changePassword: IChangePassword): Promise<void> => {
		try {
			const data = await useHttp('/api/auth/change-password', 'POST', access_token, JSON.stringify(changePassword));
			if (data.Error) {
				createNotification('Error of changing password.', NotificationType.Error);
				throw new Error('Error of updating...');
			} else {
				createNotification('Password has been changed.');
				createNotification('Please Log In to continue.', NotificationType.Info);
			}
			router.push('/login');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Htag tag="h3">Change your password</Htag>
			<Formik
				initialValues={{
					email: '',
					oldPassword: '',
					newPassword: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.required('Required')
						.email('Invalid email')
						.min(4, 'Email address must be 4-30 characters')
						.max(30, 'Email address must be 4-30 characters'),
					oldPassword: Yup.string()
						.required('Required')
						.min(6, 'Password must be 6-10 characters')
						.max(10, 'Password must be 6-10 characters'),
					newPassword: Yup.string()
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
							<p><label className="form-label">Email:</label></p>
							<Field name="email" className="form-control" type="email" />
							<ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<div className="col-12">
							<p><label className="form-label">Existing password:</label></p>
							<Field name="oldPassword" className="form-control" type="password" />
							<ErrorMessage name="oldPassword" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<div className="col-12">
							<p><label className="form-label">New password:</label></p>
							<Field name="newPassword" className="form-control" type="password" />
							<ErrorMessage name="newPassword" render={msg => <div className="form-error-message">{msg}</div>} />
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

export default withLayout(ChangePassword);