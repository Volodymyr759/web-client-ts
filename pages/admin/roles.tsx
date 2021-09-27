import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../infrastructure/context/auth-context';
import { Roles } from '../../infrastructure/roles.enum';
import { withAdminPanel } from '../../layouts/admin/admin-panel';

function UserRoles(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles || !roles.includes(Roles.Admin)) router.push('/login');
	}, []);

	return (
		<>
			<div id="page-wrapper">
				<div className="header">
					<h1 className="page-header">
						User roles
					</h1>
					<ol className="breadcrumb">
						<li><a href="/admin">Home</a></li>
						<li><a href="/admin/roles">Roles </a></li>
						<li className="active">Data</li>
					</ol>

				</div>
				<div id="page-inner">
					<div className="card">
						<div className="card-content">
							<div className="alert alert-success">
								<strong>User-role:</strong> registered user can send message to the site administration.
							</div>
							<div className="alert alert-info">
								<strong>Administrator-role:</strong> allows to read/write everything.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default withAdminPanel(UserRoles);