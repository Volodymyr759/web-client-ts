import Link from 'next/link';
import styles from './sidebar-menu.module.css';

export const SidebarMenu = (): JSX.Element => {
	return (
		<div className={styles.sidebarmenu}>
			<ul className={styles.menu}>
				<li className={styles.sidebartitle}>Menu</li>

				<li className={styles.sidebaritem}>
					<Link href="/admin">
						<a className={styles.sidebarlink}>
							<i className="bi bi-grid-fill"></i>
							<span>Dashboard</span>
						</a>
					</Link>
				</li>

				<li className={styles.sidebaritem}>
					<Link href="/admin/users">
						<a className={styles.sidebarlink}>
							<i className="bi bi-grid-fill"></i>
							<span>Users</span>
						</a>
					</Link>
				</li>

				<li className={styles.sidebaritem}>
					<Link href="/">
						<a className={styles.sidebarlink}>
							<i className="bi bi-grid-fill"></i>
							<span>Roles</span>
						</a>
					</Link>
				</li>

				<li className={styles.sidebaritem}>
					<Link href="/admin/messages">
						<a className={styles.sidebarlink}>
							<i className="bi bi-stack"></i>
							<span>Messages</span>
						</a>
					</Link>
					<ul className={styles.submenu}>
						<li className={styles.submenuitem}>
							<Link href="/">
								<a>Inbox</a>
							</Link>
						</li>
						<li className={styles.submenuitem}>
							<Link href="/">
								<a>Sent</a>
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};