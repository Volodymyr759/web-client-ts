import Router from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { IMessage } from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';
import { Htag } from '../../../components';

function Message({ message }: IMessageProps): JSX.Element {
	useEffect(() => {
		localStorage.getItem('user') == null && Router.push('/login');
	}, []);

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

export default withAdminLayout(Message);

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const res = await fetch(process.env.PUBLIC_DOMAIN + '/api/messages/' + context.params?.id);
	const message: IMessage = await res.json();

	return { props: { message } };
};

interface IMessageProps extends Record<string, unknown> {
	message: IMessage;
}