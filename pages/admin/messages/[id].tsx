import React, { useContext, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IMessage } from '../../../infrastructure/interfaces/message.interface';
import { useHttp } from '../../../infrastructure/hooks/use-http.hook';
import { AuthContext } from '../../../infrastructure/context/auth-context';
import { AppConstants } from '../../../infrastructure/app.constants';
import { useRefreshToken } from '../../../infrastructure/hooks/use-refresh-token.hook';
import { withAdminPanel } from '../../../layouts/admin/admin-panel';

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
		<div id="page-wrapper">
			<div className="header">
				<h1 className="page-header"> Message Info </h1>
				<ol className="breadcrumb">
					<li><a href="/admin">Home</a></li>
					<li><a href="/admin/messages">Messages </a></li>
					<li className="active">Data</li>
				</ol>
			</div>

			<div id="page-inner">
				<div className="card">
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
							<div className="card-content">
								<Form className="col s12">
									<div className="col s12">
										<p>Full Name:</p>
										<Field name="fullName" className="form-control" type="text" />
										<ErrorMessage name="fullName" render={msg => <div className="form-error-message">{msg}</div>} />
									</div>

									<div className="col s12">
										<p>Company:</p>
										<Field name="company" className="form-control" type="text" />
										<ErrorMessage name="company" render={msg => <div className="form-error-message">{msg}</div>} />
									</div>

									<div className="col s12">
										<p>Preffered communication way:</p>
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
									<div className="col s12">
										<p>Email:</p>
										<Field name="email" className="form-control" type="email" />
										<ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />
									</div>

									<div className="col s12">
										<p>Phone Number:</p>
										<Field name="phoneNumber" className="form-control" type="text" />
										<ErrorMessage name="phoneNumber" render={msg => <div className="form-error-message">{msg}</div>} />
									</div>

									<div className="col s12">
										<p>Message:</p>
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
									<div className="col s12">
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
							</div>
						)}
					</Formik>
				</div>
			</div>
		</div>
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
			const jwtObject = await useRefreshToken(JSON.parse(authCookie).refresh_token);
			if (jwtObject) { // try to get message again
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

export default withAdminPanel(Message);
