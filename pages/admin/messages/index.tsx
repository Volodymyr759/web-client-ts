import Router from 'next/router';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { MessageList, Pagination } from '../../../components';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';

function Messages({ messages }: IMessageProps): JSX.Element {
	const [messagesState] = useState(messages);
	const [currentPage, setCurrentPage] = useState(1);
	const [messagesPerPage] = useState(5);

	// Get current messages
	const indexOfLastMessage = currentPage * messagesPerPage;
	const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
	const currentMessages = messagesState.slice(indexOfFirstMessage, indexOfLastMessage);

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(() => {
		localStorage.getItem('user') == null && Router.push('/login');
	}, []);

	return (
		<>
			<h1>Messages</h1>
			<MessageList messages={currentMessages} />

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