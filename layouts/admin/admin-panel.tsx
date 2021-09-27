import React, { FunctionComponent } from "react";
import Cookies from 'universal-cookie';
import { AdminLayoutProps } from "./admin-layout.props";
import { AuthContext } from "../../infrastructure/context/auth-context";
import Head from "next/head";

const AdminPanel = ({ children }: AdminLayoutProps): JSX.Element => {
	const cookies = new Cookies();
	const authCookie = cookies.get('auth');

	return (
		<AuthContext.Provider value={{
			access_token: authCookie?.access_token,
			expires_in: authCookie ? parseInt(authCookie.expires_in) : 0,
			token_type: authCookie?.token_type,
			refresh_token: authCookie?.refresh_token,
			email: authCookie?.email,
			roles: authCookie ? authCookie.roles : [],
			userId: authCookie?.userId,
			logOut: () => { cookies.remove('auth'); }
		}}>
			<>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>Target Material Design Bootstrap Admin Template</title>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link rel="stylesheet" href="/assets/materialize/css/materialize.min.css" media="screen,projection" />
					<link href="/assets/css/bootstrap.css" rel="stylesheet" />
					<link href="/assets/css/font-awesome.css" rel="stylesheet" />
					<link href="/assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
					<link href="/assets/css/custom-styles.css" rel="stylesheet" />
					<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
					<link rel="stylesheet" href="/assets/js/Lightweight-Chart/cssCharts.css" />
				</Head>
				<div id="wrapper">
					<nav className="navbar navbar-default top-navbar" role="navigation">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse"
								data-target=".sidebar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand waves-effect waves-dark" href="index.html"><i
								className="large material-icons">track_changes</i> <strong>eivolo</strong></a>

							<div id="sideNav"><i className="material-icons dp48">toc</i></div>
						</div>
						<ul className="nav navbar-top-links navbar-right">
							<li>
								<a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown4">
									<i className="fa fa-envelope fa-fw"></i> <i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li>
								<a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown3">
									<i className="fa fa-tasks fa-fw"></i> <i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li>
								<a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown2">
									<i className="fa fa-bell fa-fw"></i> <i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
							<li>
								<a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1">
									<i className="fa fa-user fa-fw"></i> <b>John Doe</b> <i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
						</ul>
					</nav>

					<ul id="dropdown1" className="dropdown-content active" style={{ display: 'none', width: '146px', position: 'absolute', top: '0', left: '-19px', opacity: '1' }}>
						<li>
							<a href="#"><i className="fa fa-user fa-fw"></i> My Profile</a>
						</li>
						<li>
							<a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
						</li>
						<li>
							<a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
						</li>
					</ul>

					<ul id="dropdown2" className="dropdown-content w250">
						<li>
							<div>
								<i className="fa fa-comment fa-fw"></i> New Comment
								<span className="pull-right text-muted small">4 min</span>
							</div>
						</li>
						<li className="divider"></li>
						<li>
							<div>
								<i className="fa fa-twitter fa-fw"></i> 3 New Followers
								<span className="pull-right text-muted small">12 min</span>
							</div>

						</li>
						<li className="divider"></li>
						<li>
							<div>
								<i className="fa fa-envelope fa-fw"></i> Message Sent
								<span className="pull-right text-muted small">4 min</span>
							</div>

						</li>
						<li className="divider"></li>
						<li>
							<div>
								<i className="fa fa-tasks fa-fw"></i> New Task
								<span className="pull-right text-muted small">4 min</span>
							</div>

						</li>
						<li className="divider"></li>
						<li>
							<div>
								<i className="fa fa-upload fa-fw"></i> Server Rebooted
								<span className="pull-right text-muted small">4 min</span>
							</div>

						</li >
						<li className="divider"></li>
						<li>
							<a className="text-center" href="#">
								<strong>See All Alerts</strong>
								<i className="fa fa-angle-right"></i>
							</a>
						</li>
					</ul >

					<ul id="dropdown3" className="dropdown-content dropdown-tasks w250">
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 1</strong>
										<span className="pull-right text-muted">60% Complete</span>
									</p>
									<div className="progress progress-striped active">
										<div className="progress-bar progress-bar-success" role="progressbar" style={{ width: '60%' }}>
											<span className="sr-only">60% Complete (success)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 2</strong>
										<span className="pull-right text-muted">28% Complete</span>
									</p>
									<div className="progress progress-striped active">
										<div className="progress-bar progress-bar-info" role="progressbar" style={{ width: '28%' }}>
											<span className="sr-only">28% Complete</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 3</strong>
										<span className="pull-right text-muted">60% Complete</span>
									</p>
									<div className="progress progress-striped active">
										<div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: '60%' }}>
											<span className="sr-only">60% Complete (warning)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="divider"></li>
						<li>
							<a href="#">
								<div>
									<p>
										<strong>Task 4</strong>
										<span className="pull-right text-muted">85% Complete</span>
									</p>
									<div className="progress progress-striped active">
										<div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '85%' }}>
											<span className="sr-only">85% Complete (danger)</span>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="divider"></li>

					</ul>

					<ul id="dropdown4" className="dropdown-content dropdown-tasks w250 taskList">
						<li>
							<div>
								<strong>John Doe</strong>
								<span className="pull-right text-muted">
									<em>Today</em>
								</span>
							</div>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
						</li>
						<li className="divider"></li>
						<li>
							<div>
								<strong>John Smith</strong>
								<span className="pull-right text-muted">
									<em>Yesterday</em>
								</span>
							</div>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</p>
						</li>
						<li className="divider"></li>
						<li>
							<a href="#">
								<div>
									<strong>John Smith</strong>
									<span className="pull-right text-muted">
										<em>Yesterday</em>
									</span>
								</div>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
							</a>
						</li>
						<li className="divider"></li>
						<li>
							<a className="text-center" href="#">
								<strong>Read All Messages</strong>
								<i className="fa fa-angle-right"></i>
							</a>
						</li>
					</ul>

					<nav className="navbar-default navbar-side" role="navigation">
						<div className="sidebar-collapse">
							<ul className="nav" id="main-menu">
								<li>
									<a className="active-menu waves-effect waves-dark" href="/admin"><i className="fa fa-dashboard"></i>
										Dashboard</a>
								</li>
								<li>
									<a href="/admin/users" className="waves-effect waves-dark">
										<i className="fa fa-desktop"></i>
										Users
									</a>
								</li>
								<li>
									<a href="/admin/roles" className="waves-effect waves-dark">
										<i className="fa fa-bar-chart-o"></i>
										Roles
									</a>
								</li>
								<li>
									<a href="/admin/messages" className="waves-effect waves-dark">
										<i className="fa fa-qrcode"></i>
										Messages
									</a>
								</li>
								<li>
									<a href="#!" className="waves-effect waves-dark">
										<i className="fa fa-table"></i>
										Link 5
									</a>
								</li>
								<li>
									<a href="#!" className="waves-effect waves-dark">
										<i className="fa fa-edit"></i>
										Link 6
									</a>
								</li>
								<li>
									<a href="#" className="waves-effect waves-dark"><i className="fa fa-sitemap"></i> Multi-Level
										Dropdown<span className="fa arrow"></span></a>
									<ul className="nav nav-second-level">
										<li>
											<a href="#">Second Level Link</a>
										</li>
										<li>
											<a href="#">Second Level Link</a>
										</li>
										<li>
											<a href="#">Second Level Link<span className="fa arrow"></span></a>
											<ul className="nav nav-third-level">
												<li>
													<a href="#">Third Level Link</a>
												</li>
												<li>
													<a href="#">Third Level Link</a>
												</li>
												<li>
													<a href="#">Third Level Link</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#!" className="waves-effect waves-dark">
										<i className="fa fa-fw fa-file"></i>
										Empty Page
									</a>
								</li>
							</ul>
						</div>
					</nav>

					{children}

				</div>

				<script src="/assets/js/jquery-1.10.2.js"></script>
				<script src="/assets/js/bootstrap.min.js"></script>
				<script src="/assets/materialize/js/materialize.min.js"></script>
				<script src="/assets/js/jquery.metisMenu.js"></script>
				<script src="/assets/js/easypiechart.js"></script>
				<script src="/assets/js/easypiechart-data.js"></script>
				<script src="/assets/js/Lightweight-Chart/jquery.chart.js"></script>
				<script src="/assets/js/custom-scripts.js"></script>
			</>
		</AuthContext.Provider>
	);
};

export const withAdminPanel = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withAdminPanelComponent(props: T): JSX.Element {
		return (
			<AdminPanel>
				<Component {...props} />
			</AdminPanel>
		);
	};
};