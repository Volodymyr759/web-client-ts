import React, { useContext, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IUser } from '../../../infrastructure/interfaces/user.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag } from '../../../components';
import { useHttp } from '../../../infrastructure/hooks/use-http.hook';
import { AuthContext } from '../../../infrastructure/context/auth-context';
import { Roles } from '../../../infrastructure/roles.enum';
import { AppConstants } from '../../../infrastructure/app.constants';
import { useRefreshToken } from '../../../infrastructure/hooks/use-refresh-token.hook';

function User(props: { user: IUser }): JSX.Element {
	const [userState] = useState(props.user);
	const { access_token } = useContext(AuthContext);

	const rolesOptions = [
		{ key: Roles[Roles.User], value: Roles.User },
		{ key: Roles[Roles.Admin], value: Roles.Admin },
	];
	const submitHandler = async (user: IUser): Promise<void> => {
		try {
			const data = await useHttp('/api/auth/' + userState._id, 'PUT', access_token, JSON.stringify(user));
			if (!data) {
				throw new Error('Error of updating...');
			} else {
				alert('User has been updated');
			}
		} catch (e) {
			Router.push('/login');
		}
	};
	return (
		<>
			<Htag tag="h3">User: {props.user.email}</Htag>
			<Formik
				initialValues={{
					email: props.user.email,
					createdAt: new Date(props.user.createdAt),
					updatedAt: new Date(props.user.updatedAt),
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
						.oneOf([0, 1], 'Choose one of options')
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
							<p><label className="form-label">Roles:</label></p>
							<Field name="roles" className="form-input">
								{   // eslint-disable-next-line @typescript-eslint/no-explicit-any
									({ field }: FieldAttributes<any>) => {
										return rolesOptions.map(option => {
											return (
												<React.Fragment key={option.key}>
													<input
														type="checkbox"
														id={option.value}
														{...field}
														value={option.value}
														checked={field.value.includes(parseInt(option.value.toString()))}
													/>
													<span> </span>
													<label htmlFor={option.value.toString()}>{option.key}</label>
													<span> </span>
												</React.Fragment>
											);
										});
									}
								}
							</Field>
							<ErrorMessage name="roles" render={msg => <div className="form-error-message">{msg}</div>} />
						</div>
						<br />
						<p> </p>
						<br />
						<div className="col-12">
							<Link href="/admin/users">
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
		let user;
		let res = await fetch(AppConstants.API_BASE_URL + '/api/auth/' + context.query.id, {
			method: "GET",
			headers: { "Authorization": "Bearer " + JSON.parse(authCookie).access_token }
		});
		if (res.status == 401) { // access_token has expired
			const jwtObject = await useRefreshToken(JSON.parse(authCookie).refresh_token);
			if (jwtObject) { // try to get user again
				res = await fetch(AppConstants.API_BASE_URL + '/api/auth/' + context.query.id, {
					method: "GET",
					headers: { "Authorization": "Bearer " + jwtObject.access_token }
				});
				user = await res.json();
				return { props: { user } };
			} else { // refresh_token has expired
				throw new Error('Failed to get data.');
			}
		}
		if (res.status == 403) {
			throw new Error('User is not Admin.');
		}
		if (res.ok) {
			user = await res.json();
			return { props: { user } };
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

export default withAdminLayout(User);
