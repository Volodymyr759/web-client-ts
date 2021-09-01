import { useState } from 'react';
import Router from 'next/router';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormLabel, Htag, TextInput } from '../../components';
import { AppConstants } from '../../infrastructure/app.constants';
import { IMessage } from '../../interfaces/message.interface';
import styles from './say-hello.module.css';

export const SayHelloForm = (): JSX.Element => {
	const [radioEmailPhone, setRadioEmailPhone] = useState(true);

	const submitHandler = async (message: IMessage): Promise<void> => {

		console.log("Message: ", message);
		const data = localStorage.getItem('userData');
		if (!data) {
			Router.push('/login');
		}

		const token = data && JSON.parse(data).access_token;

		const res = await fetch(AppConstants.API_BASE_URL + '/api/messages', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token
			},
			body: JSON.stringify(message)
		});

		if (res.ok) {
			alert('Message has been created.');
		} else {
			alert('Sending error...');
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
								setTimeout(() => {
									alert('Values: ' + values);
									submitHandler(values);
									resetForm();
									setSubmitting(false);
								}, 3000);
							}
						}
					>
						{props => (
							<div className="formgroup">
								<Form>
									<TextInput label="Full Name:" name='fullName' type='text' />
									<TextInput label="Company:" name='company' type='text' />
									<br />
									<div>
										<p>Select A Preferable way of communication:</p>
										<div role="group" aria-labelledby="my-radio-group">
											<p>
												<Field
													type="radio"
													name="Email"
													value="Email"
													onClick={() => { setRadioEmailPhone(true); }}
													checked={radioEmailPhone} />
												Email
											</p>
											<p>
												<Field
													type="radio"
													name="Phone"
													value="Phone"
													onClick={() => { setRadioEmailPhone(false); }}
													checked={!radioEmailPhone} />
												Phone
											</p>
										</div>
									</div>

									<TextInput label="Email:" name='email' type='email' />
									<TextInput label="Phone Number:" name='phoneNumber' type='text' />

									<FormLabel>Message:</FormLabel>
									<Field
										name="messageText" as="textarea"
										className="forminput"
										cols={55}
										rows={5}
										minLength={10}
										maxLength={500}
									/>
									<p>
										<button className="primary-button" type="submit">
											{props.isSubmitting ? 'Loading' : 'Submit'}
										</button>
									</p>
								</Form>
							</div>
						)}
					</Formik>

				</div>
				<div>
					<img src="/contact-us.jpeg" />
				</div>
			</div>
		</>
	);
};
