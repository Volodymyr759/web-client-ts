import Link from 'next/link';
import { UserItemProps } from './user-item.props';
import { format } from 'date-fns';
import { Roles } from '../../infrastructure/roles.enum';
import { AppConstants } from '../../infrastructure/app.constants';

export const UserItem = ({ user }: UserItemProps): JSX.Element => {
	const deleteUser = async (id: string) => {
		await fetch(AppConstants.API_BASE_URL + '/api/auth/' + id, {
			method: "DELETE"
		});
		alert(`User with id: ${id} deleted`);
	};

	return (
		<>
			<tr key={user._id}>
				<td>
					{user.email}
				</td>
				<td>{format(new Date(user.createdAt), 'dd-MM-yyyy')}</td>
				<td>{user.roles.map(role => Roles[role] + ', ')}</td>
				<td>
					<Link href="/admin/users/[id]" as={`/admin/users/${user._id}`}>
						<a>
							<i className="fa fa-pencil"></i>
						</a>
					</Link>
					<span> </span>
					|
					<span> </span>
					<Link href="#">
						<a onClick={() => { if (user._id) { deleteUser(user._id); } }}>
							<i className="fa fa-trash-o"></i>
						</a>
					</Link>
				</td>
			</tr>
		</>
	);
};