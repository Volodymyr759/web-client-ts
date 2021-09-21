import { ChangeEvent, useEffect, useState } from 'react';
import { Htag, MessageList, Pagination } from '../../../components';
import { IMessage } from '../../../infrastructure/interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { AppConstants } from '../../../infrastructure/app.constants';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRefreshToken } from '../../../infrastructure/hooks/use-refresh-token.hook';

function Messages(props: { messages: IMessage[] }): JSX.Element {
	const [messagesState, setMessagesState] = useState(props.messages);
	const [currentPage, setCurrentPage] = useState(AppConstants.ITEMS_CURRENT_PAGE_DEFAULT);
	const [direction, setDirection] = useState('Asc');
	const [messagesPerPage] = useState(AppConstants.ITEMS_PER_PAGE);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState<IMessage[]>([]);

	let currentMessages = messagesState;
	if (currentMessages.length > 0) {
		const indexOfLastMessage = currentPage * messagesPerPage;
		const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
		currentMessages = messagesState.slice(indexOfFirstMessage, indexOfLastMessage);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	useEffect(() => {
		const results = messagesState.filter(message => message.fullName.toLowerCase().includes(search));
		setSearchResults(results);
	}, [search]);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const sortMessagesByName = () => {
		const sortedMessages = sortArrayByName(messagesState);
		if (direction === 'Asc') {
			setMessagesState(sortedMessages);
			setDirection('Desc');
		} else {
			setMessagesState(sortedMessages.reverse());
			setDirection('Asc');
		}
	};

	function sortArrayByName(mess: IMessage[]) {
		return mess.sort(function (a, b) {
			const nameA = a.fullName.toLowerCase();
			const nameB = b.fullName.toLowerCase();
			if (nameA < nameB)
				return -1;
			if (nameA > nameB)
				return 1;
			return 0;
		});
	}

	return <>
		<div className="row">
			<Htag tag="h3">Messages</Htag>
			<div style={{ marginTop: '32px' }}>
				<input
					className="form-input"
					type="text"
					placeholder="Search by name..."
					value={search}
					onChange={handleChange}
				/>
			</div>
		</div>
		{
			searchResults.length < messagesState.length ?
				<MessageList messages={searchResults} sortByName={sortMessagesByName} />
				:
				<>
					<MessageList messages={currentMessages} sortByName={sortMessagesByName} />
					<Pagination itemsPerPage={messagesPerPage} totalItems={messagesState.length} paginate={paginate} />
				</>
		}

	</>;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const authCookie = context.req.cookies.auth;
	try {
		if (!authCookie) {
			throw new Error('No auth data.');
		}
		let messages;
		let res = await fetch(AppConstants.API_BASE_URL + '/api/messages', {
			method: "GET",
			headers: { "Authorization": "Bearer " + JSON.parse(authCookie).access_token }
		});
		if (res.status == 401) { // access_token has expired
			const jwtObject = await useRefreshToken(JSON.parse(authCookie).refresh_token);
			if (jwtObject) {// try to get messages again
				res = await fetch(AppConstants.API_BASE_URL + '/api/messages', {
					method: "GET",
					headers: { "Authorization": "Bearer " + jwtObject.access_token }
				});
				messages = await res.json();
				return { props: { messages } };
			} else { // refresh_token has expired
				throw new Error('Failed to get data.');
			}
		}
		if (res.status == 403) {
			throw new Error('User is not Admin.');
		}
		if (res.ok) {
			messages = await res.json();
			return { props: { messages } };
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

export default withAdminLayout(Messages);
