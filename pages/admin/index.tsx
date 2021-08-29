import Router from 'next/router';
import { useEffect } from 'react';
import { Htag } from '../../components';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Dashboard(): JSX.Element {
	useEffect(() => {
		localStorage.getItem('user') == null && Router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">
				Dashboard
			</Htag>
		</>
	);
}

export default withAdminLayout(Dashboard);