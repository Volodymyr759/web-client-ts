import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Htag, MessageList, Pagination } from '../../../components';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { AppConstants } from '../../../infrastructure/app.constants';
import cookieCutter from 'cookie-cutter';

function Messages(): JSX.Element {
	const [messagesState, setMessagesState] = useState<IMessage[]>([]);
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

	useEffect(() => {
		getMessages();
	}, []);

	async function getMessages() {
		try {
			if (!getUserData()) {
				throw new Error('No auth data');
			}

			let res = await fetch(AppConstants.API_BASE_URL + '/api/messages', {
				method: "GET",
				headers: { "Authorization": "Bearer " + getUserData().access_token },
			});

			if (res.status == 401) {
				throw new Error('User unauthorized');
			}

			if (res.status == 403) { // Access_token has expired
				const cookieUpdated = await updateCookies();
				if (cookieUpdated) {
					// try to get messages again with new access_token
					res = await fetch(AppConstants.API_BASE_URL + '/api/messages', {
						method: "GET",
						headers: { "Authorization": "Bearer " + getUserData().access_token },
					});
				} else {
					throw new Error('Failed to update cookie throw refresh_token');
				}
			}
			const messages = await res.json();
			setMessagesState(messages);
		} catch (e) {
			console.log(e.message);
			Router.push('/login');
		}
	}

	function getUserData() {
		const authData = cookieCutter.get('auth');
		if (!authData) {
			return undefined;
		}
		return JSON.parse(authData);
	}

	async function updateCookies() {
		let isCookieUpdated = false;
		try {
			const refreshToken = { token: getUserData().refresh_token };
			// Unset auth-cookie if exists
			cookieCutter.set('auth', '', { expires: new Date(0) });
			// Try to update cookie throw refresh_token
			const res = await fetch(AppConstants.API_BASE_URL + '/api/auth/refresh', {
				method: "POST",
				body: JSON.stringify(refreshToken),
			});
			if (res.ok) {
				const data = await res.json();
				cookieCutter.set('auth', JSON.stringify(data));
				isCookieUpdated = true;
			}
		} catch (e) {
			isCookieUpdated = false;
		}
		return isCookieUpdated;
	}

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