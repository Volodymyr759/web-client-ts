import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Htag } from '../components';
import { AuthContext } from '../infrastructure/context/auth-context';
import { withLayout } from "../layouts/public/Layout";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { AppConstants } from '../infrastructure/app.constants';
import { IUser } from '../infrastructure/interfaces/user.interface';

function Profile(props: { profile: IUser }): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles) router.push('/login');
	}, []);

	return (
		<>
			<Head>
				<title>Profile page – Eivolo </title>
				<meta name="keywords" content="About" />
			</Head>
			<Htag tag="h3">Profile</Htag>
			<p>User profile</p>
			<ul>
				<li>{props.profile.email}</li>
				<li>{props.profile.createdAt}</li>
				<li>{props.profile.updatedAt}</li>
				<li>{props.profile.roles}</li>
			</ul>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const authCookie = context.req.cookies.auth;
	try {
		if (!authCookie) {
			throw new Error('No auth data.');
		}
		let profile;
		let res = await fetch(AppConstants.API_BASE_URL + '/api/auth/' + JSON.parse(authCookie).userId, {
			method: "GET",
			headers: { "Authorization": "Bearer " + JSON.parse(authCookie).access_token }
		});
		if (res.status == 401) { // access_token has expired
			res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token: JSON.parse(authCookie).refresh_token }),
			});
			if (res.ok) { // try to get profile again
				const jwtObject = await res.json();
				res = await fetch(AppConstants.API_BASE_URL + '/api/auth/' + JSON.parse(authCookie).userId, {
					method: "GET",
					headers: { "Authorization": "Bearer " + jwtObject.access_token }
				});
				profile = await res.json();
				return { props: { profile } };
			} else { // refresh_token has expired
				throw new Error('Failed to get data.');
			}
		}
		if (res.ok) {
			profile = await res.json();
			return { props: { profile } };
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

export default withLayout(Profile);