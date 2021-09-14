import { useEffect, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Cookies from 'universal-cookie';
import { Htag, Pagination, UserList } from '../../../components';
import { useHttp } from '../../../hooks/use-http.hook';
import { AppConstants } from '../../../infrastructure/app.constants';
import { IUser } from '../../../interfaces/user.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';

function Users(props: { users: IUser[] }): JSX.Element {
	const [usersState, setUsersState] = useState(props.users);
	const [direction, setDirection] = useState('Asc');
	const [currentPage, setCurrentPage] = useState(AppConstants.ITEMS_CURRENT_PAGE_DEFAULT);
	const [usersPerPage] = useState(AppConstants.ITEMS_PER_PAGE);
	const [jwtObject, setJwtObject] = useState(null);
	const [isRetry, setIsRetry] = useState(false);

	let currentUsers = usersState;
	if (currentUsers.length > 0) {
		const indexOfLastUser = currentPage * usersPerPage;
		const indexOfFirstUser = indexOfLastUser - usersPerPage;
		currentUsers = usersState.slice(indexOfFirstUser, indexOfLastUser);
	}

	const cookies = new Cookies();
	let authCookie = cookies.get('auth');

	useEffect(() => {
		if (usersState.length == 0) updateCookie();
	}, []);

	function updateCookie() {
		fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: authCookie.refresh_token })
		})
			.then(res => res.json())
			.then((jwt) => setJwtObject(jwt));
	}

	if (jwtObject && props.users.length == 0 && !isRetry) {
		console.log('jwtObject', jwtObject);
		setIsRetry(true);
		try {
			cookies.set('auth', jwtObject, {
				path: '/',
				maxAge: AppConstants.JWT_EXPIRATION_TIME,
			});
			authCookie = cookies.get('auth');
			fetch(AppConstants.API_BASE_URL + "/api/auth", { // Get list of users again
				method: "GET",
				headers: { "Authorization": "Bearer " + authCookie.access_token },
			})
				.then(res => res.json())
				.then((result) => { setUsersState(result); }, (error) => { console.log(error); }
				);
		} catch (e) {
			console.log('Error: ', e.message);
			cookies.remove('auth');
			Router.push('/login');
		}
	}

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const sortUsersByEmail = () => {
		const sortedMessages = sortArrayByName(usersState);
		if (direction === 'Asc') {
			setUsersState(sortedMessages);
			setDirection('Desc');
		} else {
			setUsersState(sortedMessages.reverse());
			setDirection('Asc');
		}
	};

	function sortArrayByName(users: IUser[]) {
		return users.sort(function (a, b) {
			const nameA = a.email.toLowerCase();
			const nameB = b.email.toLowerCase();
			if (nameA < nameB)
				return -1;
			if (nameA > nameB)
				return 1;
			return 0;
		});
	}
	return (
		<>
			<Htag tag="h3">Users</Htag>
			<UserList users={usersState} sortByEmail={sortUsersByEmail} />
			<Pagination itemsPerPage={usersPerPage} totalItems={usersState.length} paginate={paginate} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const authCookie = context.req.cookies.auth;
	try {
		if (!authCookie) {
			throw new Error('No auth data.');
		}
		const users = await useHttp('/api/auth', 'GET', JSON.parse(authCookie).access_token, '');
		if (users.splice) {
			return {
				props: { users }
			};
		} else {
			// const refreshToken = { token: JSON.parse(authCookie).refresh_token };
			// const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
			// 	method: 'POST',
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify(refreshToken)
			// }
			// );
			// const getRefreshedJwtObject = await res.json();
			// console.log('RefreshedJwtObject', getRefreshedJwtObject);
			// // try to get list of users again
			// const users = await useHttp('/api/auth', "GET", getRefreshedJwtObject.access_token, '');
			// if (users) {
			// 	return {
			// 		props: { users }
			// 	};
			// } else {
			// 	throw new Error('User unauthorized');
			// }

			return {
				props: { users: [] }
			};
		}
	} catch (e) {
		console.log('Error from server: ', e.message);
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}
};

export default withAdminLayout(Users);
