import Link from 'next/link';
import styles from './sidebar-menu.module.css';

export const SidebarMenu = (): JSX.Element => {
	return (
		<div className={styles.sidebarmenu}>
			<nav className="nav flex-column">
				<Link href="/admin">
					<a className="nav-link active" aria-current="page">Dashboard</a>
				</Link>
				<Link href="/admin/users">
					<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Users</a>
				</Link>
				<ul className="dropdown-menu">
					<li>
						<Link href="/admin/users">
							<a className="dropdown-item"> Users List </a>
						</Link>
					</li>
					<li>
						<Link href="/admin/roles">
							<a className="dropdown-item" >Roles</a>
						</Link>
					</li>
				</ul>
				<Link href="/admin/messages">
					<a className="nav-link">Messages</a>
				</Link>
			</nav>
		</div>
	);
};