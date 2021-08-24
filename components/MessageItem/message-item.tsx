import Link from 'next/link';
import { MessageItemProps } from './message-item.props';
import styles from './message-list.module.css';

export const MessageItem = ({ message }: MessageItemProps): JSX.Element => {
	return (
		<>
			<tr key={message._id}>
				<td>
					<Link href="/admin/messages/[id]" as={`/admin/messages/${message._id}`}>
						<a>{message.fullName}</a>
					</Link>
				</td>
				<td>{message.company}</td>
				<td>{message.prefCommunication}</td>
				<td>{message.email}</td>
				<td>{message.phoneNumber}</td>
				<td>{message.messageText}</td>
			</tr>
		</>
	);
};