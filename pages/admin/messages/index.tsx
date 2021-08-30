import Router from 'next/router';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { Htag, MessageList, Pagination } from '../../../components';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { AppConstants } from '../../../infrastructure/app.constants';

function Messages({ messages }: IMessageProps): JSX.Element {
	const [messagesState, setMessagesState] = useState(messages);
	const [currentPage, setCurrentPage] = useState(AppConstants.MESSAGES_CURRENT_PAGE_DEFAULT);
	const [direction, setDirection] = useState('Asc');
	const [messagesPerPage] = useState(AppConstants.MESSAGES_PER_PAGE);

	// Get current messages
	const indexOfLastMessage = currentPage * messagesPerPage;
	const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
	const currentMessages = messagesState.slice(indexOfFirstMessage, indexOfLastMessage);

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(() => {
		localStorage.getItem('user') == null && Router.push('/login');
	}, []);


	// Sort messages
	const sortMessagesByName = () => {
		if (direction === 'Asc') {
			setMessagesState(sortArray(messagesState));
			setDirection('Desc');
		} else {
			const sortedMessages = sortArray(messagesState).reverse();
			setMessagesState(sortedMessages);
			setDirection('Asc');
		}
	};

	function sortArray(mess: IMessage[]) {
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
			<Htag tag="h3">
				Messages
			</Htag>
			<MessageList messages={currentMessages} sortByName={sortMessagesByName} />
			<Pagination itemsPerPage={messagesPerPage} totalItems={messages.length} paginate={paginate} />

		</>
	);
}

export default withAdminLayout(Messages);

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(process.env.PUBLIC_DOMAIN + '/api/messages');
	const messages = await res.json();

	return {
		props: {
			messages
		}
	};
};

interface IMessageProps extends Record<string, unknown> {
	messages: IMessage[];
}