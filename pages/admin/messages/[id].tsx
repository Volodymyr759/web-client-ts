import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag } from '../../../components';
import { AppConstants } from '../../../infrastructure/app.constants';


function Message(): JSX.Element {
	const [message, setMessage] = useState<IMessage | null>(null);

	const { id } = useRouter().query;

	useEffect(() => {
		const data = localStorage.getItem('userData');
		if (!data) {
			Router.push('/login');
		}

		const token = data && JSON.parse(data).access_token;
		fetch(AppConstants.API_BASE_URL + '/api/messages/' + id, {
			method: "GET",
			headers: { "Authorization": "Bearer " + token },
		})
			.then(res => {
				return res.json();
			})
			.then(mes => {
				if (mes.statusCode == 401) {
					// here is the point to refresh access_token
					Router.push('/login');
				} else {
					setMessage(mes);
				}
			});
	}, []);

	if (!message) {
		return (
			<Htag tag="h3">Message not found</Htag>);
	} else {
		return (
			<>
				<Htag tag="h3">Message</Htag>
				<p><strong>Full name: </strong>{message.fullName}</p>
				<p><strong>Company:</strong> {message.company}</p>
				<p><strong>Preffered communication way:</strong> {message.prefCommunication}</p>
				<p><strong>Email:</strong> {message.email}</p>
				<p><strong>Phone number:</strong> {message.phoneNumber}</p>
				<p><strong>Message:</strong> {message.messageText}</p>
				<p>
					<Link href="/admin/messages">
						<a><strong>Go back</strong></a>
					</Link>
				</p>
			</>
		);
	}
}

export default withAdminLayout(Message);
