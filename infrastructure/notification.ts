import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function createNotification(message: string, messageType?: string | number): void {
	toast.configure();
	const closeIn = 3000;
	switch (messageType) {
		case 'info':
			toast.info(message, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: closeIn });
			break;
		case 'warn':
			toast.warn(message, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: closeIn });
			break;
		case 'error':
			toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: closeIn });
			break;
		default:
			toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: closeIn });
	}
}