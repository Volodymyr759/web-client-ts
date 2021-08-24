import { MessageListProps } from './message-list.props';
import styles from './message-list.module.css';
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
					</tr>
					{messages.map(m => <MessageItem key={m._id} message={m} />)}
				</tbody>
			</table>
		</div>
	);
};