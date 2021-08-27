import Router from 'next/router';
import { useEffect } from 'react';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Dashboard(): JSX.Element {
	useEffect(() => {
		localStorage.getItem('user') == null && Router.push('/login');
	}, []);

	return (
		<>
			<h1>Dashboard</h1>
		</>
	);
}

export default withAdminLayout(Dashboard);