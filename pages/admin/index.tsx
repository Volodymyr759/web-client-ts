import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { Htag } from '../../components';
import { AuthContext } from '../../context/auth-context';
import { withAdminLayout } from '../../layouts/admin/AdminLayout';

function Dashboard(): JSX.Element {
	const { email } = useContext(AuthContext);
	useEffect(() => {
		if (!email) {
			Router.push('/login');
		}
	}, []);

	return (
		<>
			<Htag tag="h3">
				<div className="card">
					<div className="card-header">
						Users
					</div>
					<div className="card-body">
						<h5 className="card-title">List of registered users</h5>
						<a href="/admin/users" className="btn btn-primary">Show All</a>
					</div>
				</div>
				<div className="card">
					<div className="card-header">
						Messages
					</div>
					<div className="card-body">
						<h5 className="card-title">List of recieved messages</h5>
						<a href="/admin/messages" className="btn btn-primary">Show All</a>
					</div>
				</div>
			</Htag>
		</>
	);
}

export default withAdminLayout(Dashboard);