import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Htag, MessageList, Pagination } from '../../../components';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { AppConstants } from '../../../infrastructure/app.constants';

function Messages(): JSX.Element {
	const [messagesState, setMessagesState] = useState<IMessage[]>([]);
	const [currentPage, setCurrentPage] = useState(AppConstants.MESSAGES_CURRENT_PAGE_DEFAULT);
	const [direction, setDirection] = useState('Asc');
	const [messagesPerPage] = useState(AppConstants.MESSAGES_PER_PAGE);

	// Get current messages
	let currentMessages = messagesState;
	if (currentMessages.length > 0) {
		const indexOfLastMessage = currentPage * messagesPerPage;
		const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
		currentMessages = messagesState.slice(indexOfFirstMessage, indexOfLastMessage);
	}

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(() => {
		const data = localStorage.getItem('userData');
		if (!data) {
			Router.push('/login');
		}

		const token = data && JSON.parse(data).access_token;
		fetch(AppConstants.API_BASE_URL + '/api/messages', {
			method: "GET",
			headers: { "Authorization": "Bearer " + token },
		})
			.then(res => {
				return res.json();
			})
			.then(mes => {
				if (mes.statusCode == 401) {
					// here is the point to refresh access_token
					Router.push('/login');
				} else {
					setMessagesState(mes);
				}
			});
	}, []);

	// Sort messages
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

	return (
		<>
			<Htag tag="h3">Messages</Htag>
			<MessageList messages={currentMessages} sortByName={sortMessagesByName} />
			<Pagination itemsPerPage={messagesPerPage} totalItems={messagesState.length} paginate={paginate} />
		</>
	);
}

export default withAdminLayout(Messages);

// Server Side Rendering
// export const getStaticProps: GetStaticProps = async () => {
// 	const res = await fetch(process.env.PUBLIC_DOMAIN + '/api/messages');
// 	const messages = await res.json();

// 	return {
// 		props: {
// 			messages
// 		}
// 	};
// };

// interface IMessageProps extends Record<string, unknown> {
// 	messages: IMessage[];
// }