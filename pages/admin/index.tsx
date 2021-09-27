import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../../infrastructure/context/auth-context';
import { Roles } from '../../infrastructure/roles.enum';
import { withAdminPanel } from '../../layouts/admin/admin-panel';

function Dashboard(): JSX.Element {
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
						Dashboard
					</h1>
					<ol className="breadcrumb">
						<li><a href="/admin">Home</a></li>
						<li><a href="/admin">Dashboard</a></li>
						<li className="active">Data</li>
					</ol>
				</div>
				<div id="page-inner">
					<div className="dashboard-cards">
						<div className="row4">
							<div>
								<div className="card horizontal cardIcon waves-effect waves-dark">
									<div className="card-image green">
										<i className="material-icons dp48">supervisor_account</i>
									</div>
									<div className="card-stacked green">
										<div className="card-content">
											<h3>3</h3>
										</div>
										<div className="card-action">
											<Link href="/admin/users" >
												<a className="card-link">Users</a>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="card horizontal cardIcon waves-effect waves-dark">
									<div className="card-image blue">
										<i className="material-icons dp48">equalizer</i>
									</div>
									<div className="card-stacked blue">
										<div className="card-content">
											<h3>24</h3>
										</div>
										<div className="card-action">
											<Link href="/admin/messages" >
												<a className="card-link">Messages</a>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="card horizontal cardIcon waves-effect waves-dark">
									<div className="card-image red">
										<i className="material-icons dp48">import_export</i>
									</div>
									<div className="card-stacked red">
										<div className="card-content">
											<h3>84,198</h3>
										</div>
										<div className="card-action">
											<Link href="/admin/roles" >
												<a className="card-link">Roles</a>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="card horizontal cardIcon waves-effect waves-dark">
									<div className="card-image orange">
										<i className="material-icons dp48">shopping_cart</i>
									</div>
									<div className="card-stacked orange">
										<div className="card-content">
											<h3>36,540</h3>
										</div>
										<div className="card-action">
											<strong>SALES</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default withAdminPanel(Dashboard);