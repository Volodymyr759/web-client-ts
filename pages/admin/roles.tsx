import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Htag } from '../../components';
import { AuthContext } from '../../context/auth-context';
import { Roles } from '../../infrastructure/roles.enum';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function UserRoles(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles || !roles.includes(Roles.Admin)) router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">User Roles</Htag>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
				<div className="card" style={{ width: '18rem' }}>
					<div className="card-body">
						<h5 className="card-title">Admin</h5>
						<h6 className="card-subtitle mb-2 text-muted">role 'Administrator'</h6>
						<p className="card-text">Administrator-role: allows to read/write everything.</p>
					</div>
				</div>
				<div className="card" style={{ width: '18rem' }}>
					<div className="card-body">
						<h5 className="card-title">User</h5>
						<h6 className="card-subtitle mb-2 text-muted">role 'registered User'</h6>
						<p className="card-text">User-role: registered user can send message to the site administration.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default withAdminLayout(UserRoles);