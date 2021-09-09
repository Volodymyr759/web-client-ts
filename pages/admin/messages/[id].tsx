import Link from 'next/link';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag, TextInputAdmin } from '../../../components';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useHttp } from '../../../hooks/use-http.hook';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth-context';
import Router from 'next/router';

function Message(props: { message: IMessage }): JSX.Element {
	const [messageState] = useState(props.message);
	const [radioEmailPhone, setRadioEmailPhone] = useState(true);
	const { access_token } = useContext(AuthContext);

	const submitHandler = async (message: IMessage): Promise<void> => {
		try {
			const data = await useHttp('/api/messages/' + messageState._id, 'PUT', access_token, JSON.stringify(message));
			if (!data) {
				throw new Error('Error of updating...');
			} else {
				alert('Message has been updated');
			}
		} catch (e) {
			console.log(e.message);
			Router.push('/login');
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
			>
				{props => (
					<Form className="row">
						<TextInputAdmin label="Full Name:" name='fullName' type='text' />
						<TextInputAdmin label="Company:" name='company' type='text' />
						<div className="w-100 p-3">
							<p>Preffered communication way:</p>
							<div className="form-check">
								<Field
									className="form-check-input"
									type="radio"
									name="Email"
									value="Email"
									onClick={() => { setRadioEmailPhone(true); }}
									checked={radioEmailPhone} />
								<label className="form-check-label" htmlFor="Email">
									Email
								</label>
							</div>
							<div className="form-check">
								<Field
									className="form-check-input"
									type="radio"
									name="Phone"
									value="Phone"
									onClick={() => { setRadioEmailPhone(!radioEmailPhone); }}
									checked={!radioEmailPhone} />
								<label className="form-check-label" htmlFor="Phone">
									Phone
								</label>
							</div>
						</div>
						<br />
						<TextInputAdmin label="Email:" name='email' type='email' />
						<TextInputAdmin label="Phone Number:" name='phoneNumber' type='text' />

						<div className="w-100 p-3">
							<label htmlFor="messageText" className="form-label">Message:</label>
							<Field
								name="messageText" as="textarea"
								className="form-control"
								cols={55}
								rows={5}
								minLength={10}
								maxLength={500}
							/>
						</div>
						<br />
						<div className="col-12">
							<Link href="/admin/messages">
								<a className="btn btn-secondary">Go Back</a>
							</Link>
							<span> </span>
							<button type="submit" className="btn btn-primary">
								{props.isSubmitting ? 'Loading' : 'Save'}
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
		const message = await useHttp('/api/messages/' + context.query.id, "GET", JSON.parse(authCookie).access_token, '');
		if (message._id) {
			return {
				props: { message }
			};
		} else {
			throw new Error('User unauthorized');
		}
	} catch (e) {
		console.log(e.message);
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}
};

export default withAdminLayout(Message);
