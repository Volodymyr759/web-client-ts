import Link from 'next/link';
import { UserItemProps } from './user-item.props';
import styles from './user-item.module.css';

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
				<td>{user.createdAt}</td>
				<td>{user.roles}</td>
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