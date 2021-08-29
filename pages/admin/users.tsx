import { Htag } from '../../components';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Users(): JSX.Element {
	return (
		<>
			<Htag tag="h3">
				Users page
			</Htag>
		</>
	);
}

export default withAdminLayout(Users);