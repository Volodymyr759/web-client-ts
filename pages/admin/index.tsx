import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Htag } from '../../components';
import { AuthContext } from '../../infrastructure/context/auth-context';
import { Roles } from '../../infrastructure/roles.enum';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Dashboard(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles || !roles.includes(Roles.Admin)) router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">Dashboard</Htag>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
				<div className="card" style={{ width: '18rem' }}>
					<div className="card-body">
						<h5 className="card-title">Users</h5>
						<h6 className="card-subtitle mb-2 text-muted">List of registered users</h6>
						<p className="card-text">Displays list of users with edit/delete options</p>
						<Link href="/admin/users" >
							<a className="card-link">Show users</a>
						</Link>
					</div>
				</div>
				<div className="card" style={{ width: '18rem' }}>
					<div className="card-body">
						<h5 className="card-title">Messages</h5>
						<h6 className="card-subtitle mb-2 text-muted">List of recieved messages</h6>
						<p className="card-text">Displays list of users messages</p>
						<Link href="/admin/messages" >
							<a className="card-link">Show messages</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default withAdminLayout(Dashboard);