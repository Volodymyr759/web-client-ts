import { MessageListProps } from './message-list.props';
import styles from './message-list.module.css';
import { MessageItem } from '../MessageItem/message-item';

export const MessageList = ({ messages, sortByName }: MessageListProps): JSX.Element => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th><span>Name </span><a className={styles.sorting} onClick={sortByName}></a></th>
						<th>Company</th>
						<th>Pref. Comm.</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Text</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{messages.map(message => <MessageItem key={message._id} message={message} />)}
				</tbody>
			</table>
		</div>
	);
};