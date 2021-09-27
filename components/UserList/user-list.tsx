import { UserListProps } from './user-list.props';
import { UserItem } from '../UserItem/user-item';

export const UserList = ({ users, sortByEmail }: UserListProps): JSX.Element => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">
							<a onClick={sortByEmail}>
								<span>Email </span>
								<i className="fa fa-arrows-v"></i>
							</a>
						</th>
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