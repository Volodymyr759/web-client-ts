import Link from 'next/link';
import { UserItemProps } from './user-item.props';
import styles from './user-item.module.css';
import { format } from 'date-fns';
import { Roles } from '../../infrastructure/roles.enum';

export const UserItem = ({ user }: UserItemProps): JSX.Element => {
	const deleteUser = async (id: string) => {
		await fetch('https://polar-castle-18354.herokuapp.com/api/auth/' + id, {
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
									if (user._id) {
										deleteUser(user._id);
									}
								}
							} />
					</Link>
				</td>
			</tr>
		</>
	);
};