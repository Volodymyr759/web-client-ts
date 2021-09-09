import { UserListProps } from './user-list.props';
import styles from './user-list.module.css';
import { UserItem } from '../UserItem/user-item';

export const UserList = ({ users, sortByEmail }: UserListProps): JSX.Element => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col"><span>Email </span><a className={styles.sorting} onClick={sortByEmail}></a></th>
						<th scope="col">Registered</th>
						<th scope="col">Roles</th>
						<th scope="col">Options</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => <UserItem key={user._id} user={user} />)}
				</tbody>
			</table>
		</div>
	);
};