import { GetStaticProps } from 'next';
import { MessageList } from '../../../components/MessageList/message-list';
import IMessage from '../../../interfaces/message.interface';
import { withAdminLayout } from '../../../layouts/admin/AdminLayout';

function Messages({ messages }: IMessageProps): JSX.Element {
	return (
		<>
			<h1>Messages</h1>
			<MessageList messages={messages} />
		</>
	);
}

export default withAdminLayout(Messages);

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(process.env.PUBLIC_DOMAIN + '/api/messages');
	const messages = await res.json();

	return {
		props: {
			messages
		}
	};
};

interface IMessageProps extends Record<string, unknown> {
	messages: IMessage[];
}