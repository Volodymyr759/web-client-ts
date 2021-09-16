import { useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Htag, Pagination, UserList } from '../../../components';
import { AppConstants } from '../../../infrastructure/app.constants';
import { IUser } from '../../../interfaces/user.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';

function Users(props: { users: IUser[] }): JSX.Element {
	const [usersState, setUsersState] = useState(props.users);
	const [direction, setDirection] = useState('Asc');
	const [currentPage, setCurrentPage] = useState(AppConstants.ITEMS_CURRENT_PAGE_DEFAULT);
	const [usersPerPage] = useState(AppConstants.ITEMS_PER_PAGE);

	let currentUsers = usersState;
	if (currentUsers.length > 0) {
		const indexOfLastUser = currentPage * usersPerPage;
		const indexOfFirstUser = indexOfLastUser - usersPerPage;
		currentUsers = usersState.slice(indexOfFirstUser, indexOfLastUser);
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
		let users;
		let res = await fetch(AppConstants.API_BASE_URL + '/api/auth', {
			method: "GET",
			headers: { "Authorization": "Bearer " + JSON.parse(authCookie).access_token }
		});
		if (res.status == 401) { // access_token has expired
			res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token: JSON.parse(authCookie).refresh_token }),
			});
			if (res.ok) { // try to get users again
				const jwtObject = await res.json();
				res = await fetch(AppConstants.API_BASE_URL + '/api/auth', {
					method: "GET",
					headers: { "Authorization": "Bearer " + jwtObject.access_token }
				});
				users = await res.json();
				return { props: { users } };
			} else { // refresh_token has expired
				throw new Error('Failed to get data.');
			}
		}
		if (res.status == 403) {
			throw new Error('User is not Admin.');
		}
		if (res.ok) {
			users = res.json();
			return { props: { users } };
		} else { // Unexpected errors
			throw new Error('Unexpected error.');
		}
	} catch (e) {
		console.log('Error from server: ', e);
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}
};

export default withAdminLayout(Users);
