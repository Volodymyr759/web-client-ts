import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Context } from 'vm';
import { GetServerSidePropsContext } from 'next';
import IMessage from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';

function Message({ message }: IMessageProps): JSX.Element {
	return (
		<>
			<h1>Message</h1>
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