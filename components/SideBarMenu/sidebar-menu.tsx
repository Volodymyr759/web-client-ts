import Link from 'next/link';
import styles from './sidebar-menu.module.css';

export const SidebarMenu = (): JSX.Element => {
	return (
		<div className={styles.sidebarmenu}>
			<ul className={styles.menu}>
				<li className={styles.sidebartitle}>Admin Menu</li>
				<li className={styles.sidebaritem}>
					<Link href="/admin">
						<a className={styles.sidebarlink}>
							<i className="bi bi-grid-fill"></i>
							<span>Dashboard</span>
						</a>
					</Link>
				</li>
				<li className={styles.sidebaritem}>
					<span className={styles.sidebarlink}>Users</span>
					<ul className={styles.submenu}>
						<li className={styles.submenuitem}>
							<Link href="/admin/users">
								<a> Users List </a>
							</Link>
						</li>
						<li className={styles.submenuitem}>
							<Link href="/admin/roles">
								<a>Roles</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.sidebaritem}>
					<Link href="/admin/messages">
						<a className={styles.sidebarlink}>
							<i className="bi bi-stack"></i>
							<span>Messages</span>
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};