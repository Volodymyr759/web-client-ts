import React, { useContext, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IMessage } from '../../../infrastructure/interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag } from '../../../components';
import { useHttp } from '../../../infrastructure/hooks/use-http.hook';
import { AuthContext } from '../../../infrastructure/context/auth-context';
import { AppConstants } from '../../../infrastructure/app.constants';

function Message(props: { message: IMessage }): JSX.Element {
	const [messageState] = useState(props.message);
	const { access_token } = useContext(AuthContext);
	const router = useRouter();
	const prefCommunicationOptions = [
		{ key: 'Email', value: 'Email' },
		{ key: 'Phone', value: 'Phone' },
	];

	const submitHandler = async (message: IMessage): Promise<void> => {
		try {
			const data = await useHttp('/api/messages/' + messageState._id, 'PUT', access_token, JSON.stringify(message));
			if (!data) {
				throw new Error('Error of updating...');
			} else {
				alert('Message has been updated');
			}
		} catch (e) {
			console.log(e);
			router.push('/login');
		}
	};
	return (
		<>
			<Htag tag="h3">Message</Htag>
			<Formik
				initialValues={{
					fullName: props.message.fullName,
					company: props.message.company,
					prefCommunication: props.message.prefCommunication,
					email: props.message.email,
					phoneNumber: props.message.phoneNumber,
					messageText: props.message.messageText,
				}}
				validationSchema={Yup.object({
					fullName: Yup.string()
						.required('Required')
						.min(4, 'Full name must be 4-30 characters')
						.max(30, 'Full name must be 4-30 characters'),
					company: Yup.string()
						.required('Required')
						.min(3, 'Company name must be 3-50 characters')
						.max(50, 'Company name must be 3-50 characters'),
					prefCommunication: Yup.string()
						.required('Required'),
					email: Yup.string()
						.required('Required')
						.email('Invalid email')
						.min(4, 'Email address must be 4-30 characters')
						.max(30, 'Email address must be 4-30 characters'),
					phoneNumber: Yup.string()
						.required('Required')
						.min(4, 'Phone number must be 4-20 characters')
						.max(20, 'Phone number must be 4-20 characters'),
					messageText: Yup.string()
						.required('Required')
						.min(10, 'Message text must be 4-20 characters')
						.max(500, 'Message text must be 4-20 characters')
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
							<p><label className="form-label">Full Name:</label></p>
							<Field name="fullName" className="form-control" type="text" />
							<ErrorMessage name="fullName" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>

						<div className="col-12">
							<p><label className="form-label">Company:</label></p>
							<Field name="company" className="form-control" type="text" />
							<ErrorMessage name="company" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>

						<div className="w-100 p-3">
							<p><label className="form-label">Preffered communication way:</label></p>
							<Field name="prefCommunication" className="form-input">
								{ // eslint-disable-next-line @typescript-eslint/no-explicit-any
									({ field }: FieldAttributes<any>) => {
										return prefCommunicationOptions.map(option => {
											return (
												<React.Fragment key={option.key}>
													<div className="form-check">
														<input
															className="form-check-input"
															type="radio"
															id={option.value}
															{...field}
															value={option.value}
															checked={field.value === option.value}
														/>
														<label className="form-check-label" htmlFor={option.value}>{option.key}</label>
													</div>
												</React.Fragment>
											);
										});
									}
								}
							</Field>
						</div>
						<br />
						<div className="col-12">
							<p><label className="form-label">Email:</label></p>
							<Field name="email" className="form-control" type="email" />
							<ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>

						<div className="col-12">
							<p><label className="form-label">Phone Number:</label></p>
							<Field name="phoneNumber" className="form-control" type="text" />
							<ErrorMessage name="phoneNumber" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>

						<div className="w-100 p-3">
							<p><label htmlFor="messageText" className="form-label">Message:</label></p>
							<Field
								as="textarea"
								name="messageText"
								className="form-control"
								cols={55}
								rows={5}
								minLength={10}
								maxLength={500}
							/>
							<ErrorMessage
								name="messageText"
								render={msg => <div className="form-error-message">{msg}</div>}
							/>
						</div>
						<br />
						<div className="col-12">
							<Link href="/admin/messages">
								<a className="btn btn-secondary">Go Back</a>
							</Link>
							<span> </span>
							<button type="submit" className="btn btn-primary" disabled={!props.isValid || props.isSubmitting}>
								{
									props.isSubmitting ?
										<>
											<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											<span> Loading...</span>
										</>
										:
										<span>Save</span>
								}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const authCookie = context.req.cookies.auth;
	try {
		if (!authCookie) {
			throw new Error('No auth data.');
		}
		let message;
		let res = await fetch(AppConstants.API_BASE_URL + '/api/messages/' + context.query.id, {
			method: "GET",
			headers: { "Authorization": "Bearer " + JSON.parse(authCookie).access_token }
		});
		if (res.status == 401) { // access_token has expired
			res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token: JSON.parse(authCookie).refresh_token }),
			});
			if (res.ok) { // try to get message again
				const jwtObject = await res.json();
				res = await fetch(AppConstants.API_BASE_URL + '/api/messages/' + context.query.id, {
					method: "GET",
					headers: { "Authorization": "Bearer " + jwtObject.access_token }
				});
				message = await res.json();
				return { props: { message } };
			} else { // refresh_token has expired
				throw new Error('Failed to get data.');
			}
		}
		if (res.status == 403) {
			throw new Error('User is not Admin.');
		}
		if (res.ok) {
			message = await res.json();
			return { props: { message } };
		} else { // Unexpected errors
			throw new Error('Unexpected error.');
		}
	} catch (e) {
		console.log(e);
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}
};

export default withAdminLayout(Message);
