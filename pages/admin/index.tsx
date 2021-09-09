import { Htag } from '../../components';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Dashboard(): JSX.Element {
	return (
		<>
			<Htag tag="h3">
				Dashboard
			</Htag>
		</>
	);
}

export default withAdminLayout(Dashboard);