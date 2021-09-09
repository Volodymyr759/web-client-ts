import { MessageListProps } from './message-list.props';
import styles from './message-list.module.css';
import { MessageItem } from '../MessageItem/message-item';

export const MessageList = ({ messages, sortByName }: MessageListProps): JSX.Element => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col"><span>Name </span><a className={styles.sorting} onClick={sortByName}></a></th>
						<th scope="col">Company</th>
						<th scope="col">Pref. Comm.</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col">Text</th>
						<th scope="col">Options</th>
					</tr>
				</thead>
				<tbody>
					{messages.map(message => <MessageItem key={message._id} message={message} />)}
				</tbody>
			</table>
		</div>
	);
};