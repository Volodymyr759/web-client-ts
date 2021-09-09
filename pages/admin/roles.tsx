import { Htag } from '../../components';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Roles(): JSX.Element {
	return (
		<>
			<Htag tag="h3">
				<div className="card">
					<div className="card-header">
						Admin
					</div>
					<div className="card-body">
						<h5 className="card-title">Admin - role: allows to read/write everything</h5>
					</div>
				</div>
				<div className="card">
					<div className="card-header">
						User
					</div>
					<div className="card-body">
						<h5 className="card-title">User - role: registered user can send message to the site-administration</h5>
					</div>
				</div>
			</Htag>
		</>
	);
}

export default withAdminLayout(Roles);