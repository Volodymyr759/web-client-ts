import { MessageListProps } from './message-list.props';
// import styles from './message-list.module.css';
import { MessageItem } from '../MessageItem/message-item';

export const MessageList = ({ messages }: MessageListProps): JSX.Element => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Company</th>
						<th>Pref. Comm.</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Text</th>
						<th>Options</th>
					</tr>
					{messages.map(message => <MessageItem key={message._id} message={message} />)}
				</tbody>
			</table>
		</div>
	);
};