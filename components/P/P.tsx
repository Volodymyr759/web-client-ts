import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ appearance = 'middle', children, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, {
				[styles.large]: appearance == 'large',
				[styles.middle]: appearance == 'middle',
				[styles.strong]: appearance == 'strong',
				[styles.centered]: appearance == 'centered',
				[styles.centered]: appearance == 'colored'
			})}
			{...props}
		>
			{children}
		</p>
	);
};