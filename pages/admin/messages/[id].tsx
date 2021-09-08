import Link from 'next/link';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { FormLabel, Htag, TextInput } from '../../../components';
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
											onClick={() => { setRadioEmailPhone(!radioEmailPhone); }}
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
								<div className="col text-center" style={{ marginTop: '30px' }}>
									<button className="btn btn-primary" type="submit">
										{props.isSubmitting ? 'Loading' : 'Save'}
									</button>
								</div>
							</p>
						</Form>
					</div>
				)}
			</Formik>
			<p>
				<Link href="/admin/messages">
					<a><strong>Back To All Messages</strong></a>
				</Link>
			</p>
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
