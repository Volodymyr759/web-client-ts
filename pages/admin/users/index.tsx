import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
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
		const users = await useHttp('/api/auth', "GET", JSON.parse(authCookie).access_token, '');
		if (users.splice) {
			return {
				props: { users }
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

export default withAdminLayout(Users);