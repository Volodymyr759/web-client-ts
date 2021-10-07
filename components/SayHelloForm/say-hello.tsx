import { useContext } from 'react';
import Router from 'next/router';
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Htag } from '../../components';
import { IMessage } from '../../infrastructure/interfaces/message.interface';
import styles from './say-hello.module.css';
import { useHttp } from '../../infrastructure/hooks/use-http.hook';
import { AuthContext } from '../../infrastructure/context/auth-context';
import React from 'react';

export const SayHelloForm = (): JSX.Element => {
	const { access_token } = useContext(AuthContext);

	const prefCommunicationOptions = [
		{ key: 'email', value: 'Email' },
		{ key: 'phone', value: 'Phone' },
	];

	const submitHandler = async (message: IMessage): Promise<void> => {
		try {
			const data = await useHttp('/api/messages', 'POST', access_token, JSON.stringify(message));
			if (!data) {
				throw new Error('Sending error...');
			} else {
				alert('Message has been sent');
			}
		} catch (e) {
			Router.push('/login');
		}
	};

	return (
		<>
			<div className={styles.sayhello}>
				<div>
					<Htag tag="h2">Say Hello!</Htag>
					<Formik
						initialValues={{
							fullName: '',
							company: '',
							prefCommunication: 'Email',
							email: '',
							phoneNumber: '',
							messageText: '',
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
							(values, { setSubmitting, resetForm }) => {
								submitHandler(values);
								resetForm();
								setSubmitting(false);
							}
						}
						validateOnMount
					>
						{props => (
							<div className="formgroup">
								<Form>
									<p><label className="form-label">Full Name:</label></p>
									<Field name="fullName" className="form-input" type="text" />
									<ErrorMessage name="fullName" render={msg => <div className="form-error-message">{msg}</div>} />

									<p><label className="form-label">Company:</label></p>
									<Field name="company" className="form-input" type="text" />
									<ErrorMessage name="company" render={msg => <div className="form-error-message">{msg}</div>} />
									<br />
									<div className="col-12">
										<p> <label className="form-label">Select A Preferable way of communication:</label> </p>
										<Field name="prefCommunication" className="form-input">
											{
												// eslint-disable-next-line @typescript-eslint/no-explicit-any
												({ field }: FieldAttributes<any>) => {
													return prefCommunicationOptions.map(option => {
														return (
															<React.Fragment key={option.key}>
																<input
																	type="radio"
																	id={option.value}
																	{...field}
																	value={option.value}
																	checked={field.value === option.value}
																/>
																<span> </span>
																<label htmlFor={option.value}>{option.key}</label>
																<span> </span>
															</React.Fragment>
														);
													});
												}
											}
										</Field>
									</div>

									<p><label className="form-label">Email:</label></p>
									<Field name="email" className="form-input" type="email" />
									<ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />

									<p><label className="form-label">Phone Number:</label></p>
									<Field name="phoneNumber" className="form-input" type="text" />
									<ErrorMessage name="phoneNumber" render={msg => <div className="form-error-message">{msg}</div>} />

									<p><label className="form-label">Message:</label></p>
									<Field
										as="textarea"
										name="messageText"
										className="form-input"
										cols={55}
										rows={5}
										minLength={10}
										maxLength={500}
									/>
									<ErrorMessage
										name="messageText"
										render={msg => <div className="form-error-message">{msg}</div>}
									/>
									<p>
										<button className="primary-button" type="submit" disabled={!props.isValid || props.isSubmitting}>
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
									</p>
								</Form>
							</div>
						)}
					</Formik>
				</div>
				<div style={{ margin: 'auto' }}>
					<img src="/images/contact-us.webp" />
				</div>
			</div>
		</>
	);
};
