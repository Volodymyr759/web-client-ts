import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { IUser } from '../../../interfaces/user.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag, TextInputAdmin } from '../../../components';
import { useHttp } from '../../../hooks/use-http.hook';
import { AuthContext } from '../../../context/auth-context';
import { Roles } from '../../../infrastructure/roles.enum';

function User(props: { user: IUser }): JSX.Element {
	const [userState] = useState(props.user);
	const { access_token } = useContext(AuthContext);

	const submitHandler = async (user: IUser): Promise<void> => {
		try {
			const data = await useHttp('/api/auth/' + userState._id, 'PUT', access_token, JSON.stringify(user));
			if (!data) {
				throw new Error('Error of updating...');
			} else {
				alert('User has been updated');
			}
		} catch (e) {
			console.log(e.user);
			Router.push('/login');
		}
	};

	return (
		<>
			<Htag tag="h3">User</Htag>
			<Formik
				initialValues={{
					email: props.user.email,
					createdAt: new Date(props.user.createdAt),
					roles: props.user.roles.includes(0) ? [Roles.User] : [Roles.Admin],
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.required('Required')
						.email('Invalid email')
						.min(4, 'Email address must be 4-30 characters')
						.max(30, 'Email address must be 4-30 characters'),
					roles: Yup.number()
						.required('Required')
				})
				}
				onSubmit={
					(values, { setSubmitting }) => {
						submitHandler(values); // To do convert string from input-field to Role.Admin / Role.User
						setSubmitting(false);
					}
				}
			>
				{props => (
					<Form className="row">
						<TextInputAdmin label="Email:" name='email' type='email' />
						{/* <br />
						<DatePicker name="createdAt" label="Registered:" /> */}
						<br />
						<TextInputAdmin label="Roles:" name='roles' type='text' />
						<br />
						<p> </p>
						<br />
						<div className="col-12">
							<Link href="/admin/users">
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
		const user = await useHttp('/api/auth/' + context.query.id, "GET", JSON.parse(authCookie).access_token, '');
		if (user.email) {
			return {
				props: { user }
			};
		} else {
			throw new Error('User unauthorized');
		}
	} catch (e) {
		console.log(e.user);
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}
};

export default withAdminLayout(User);
