import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { AppConstants } from "../infrastructure/app.constants";
import { IMessage } from "../interfaces/message.interface";
import { Htag, MessageList, Pagination } from '../components';
import { withAdminLayout } from '../layouts/admin/AdminLayout';
import { useHttp } from '../hooks/use-http.hook';

function MessagesTest(props: { messages: IMessage[] }): JSX.Element {
	const [messagesState, setMessagesState] = useState<IMessage[]>(props.messages);
	const [currentPage, setCurrentPage] = useState(AppConstants.MESSAGES_CURRENT_PAGE_DEFAULT);
	const [direction, setDirection] = useState('Asc');
	const [messagesPerPage] = useState(AppConstants.MESSAGES_PER_PAGE);

	let currentMessages = messagesState;
	if (currentMessages.length > 0) {
		const indexOfLastMessage = currentPage * messagesPerPage;
		const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
		currentMessages = messagesState.slice(indexOfFirstMessage, indexOfLastMessage);
	}

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

	return <>
		<Htag tag="h3">Messages</Htag>
		<MessageList messages={currentMessages} sortByName={sortMessagesByName} />
		<Pagination itemsPerPage={messagesPerPage} totalItems={messagesState.length} paginate={paginate} />
	</>;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
	const authCookie = context.req.cookies.auth;
	let messages;
	try {
		if (!authCookie) {
			throw new Error('No auth data.');
		}
		messages = await useHttp(JSON.parse(authCookie), '/api/messages', "GET", null);
		return messages && { props: { messages } };
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

export default withAdminLayout(MessagesTest);