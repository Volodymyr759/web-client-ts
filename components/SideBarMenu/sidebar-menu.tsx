import styles from './sidebar-menu.module.css';

export const SidebarMenu = (): JSX.Element => {
	return (
		<div className={styles.sidebarmenu}>
			<ul className={styles.menu}>
				<li className={styles.sidebartitle}>Menu</li>

				<li className={styles.sidebaritem}>
					<a href="/admin" className={styles.sidebarlink}>
						<i className="bi bi-grid-fill"></i>
						<span>Dashboard</span>
					</a>
				</li>

				<li className={styles.sidebaritem}>
					<a href="/admin/users" className={styles.sidebarlink}>
						<i className="bi bi-grid-fill"></i>
						<span>Users</span>
					</a>
				</li>

				<li className={styles.sidebaritem}>
					<a href="index.html" className={styles.sidebarlink}>
						<i className="bi bi-grid-fill"></i>
						<span>Roles</span>
					</a>
				</li>

				<li className={styles.sidebaritem}>
					<a href="#" className={styles.sidebarlink}>
						<i className="bi bi-stack"></i>
						<span>Messages</span>
					</a>
					<ul className={styles.submenu}>
						<li className={styles.submenuitem}>
							<a href="component-alert.html">Inbox</a>
						</li>
						<li className={styles.submenuitem}>
							<a href="component-badge.html">Sent</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};