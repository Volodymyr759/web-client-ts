import Link from 'next/link';
import { MessageItemProps } from './message-item.props';
import styles from './message-item.module.css';
import { AppConstants } from '../../infrastructure/app.constants';

export const MessageItem = ({ message }: MessageItemProps): JSX.Element => {
	const deleteMessage = async (id: string) => {
		await fetch(AppConstants.API_BASE_URL + '/api/messages/' + id, {
			method: "DELETE"
		});
		alert(`Message with id: ${id} deleted, update this page - to do`);
	};

	return (
		<>
			<tr key={message._id}>
				<td>
					{message.fullName}
				</td>
				<td>{message.company}</td>
				<td>{message.prefCommunication}</td>
				<td>{message.email}</td>
				<td>{message.phoneNumber}</td>
				<td>{message.messageText.substring(0, 10) + '...'}</td>
				<td>
					<Link href="/admin/messages/[id]" as={`/admin/messages/${message._id}`}>
						<a className={styles.edit}></a>
					</Link>
					<span> </span>
					|
					<span> </span>
					<Link href="#">
						<a
							className={styles.delete}
							onClick={
								() => {
									if (message._id) {
										deleteMessage(message._id);
									}
								}
							} />
					</Link>
				</td>
			</tr>
		</>
	);
};