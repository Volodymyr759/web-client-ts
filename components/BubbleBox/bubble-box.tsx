import { BubbleBoxProps } from './bubble-box.props';
import styles from './bubble-box.module.css';
import cn from 'classnames';

export const BubbleBox = ({ appearance, headerText, spanText, children }: BubbleBoxProps): JSX.Element => {
	return (
		<div
			className={cn(styles.bubble, {
				[styles.lefttopbubble]: appearance == 'left-top',
				[styles.righttopbubble]: appearance == 'right-top',
				[styles.rightbottombubble]: appearance == 'right-bottom',
				[styles.leftbottombubble]: appearance == 'left-bottom'
			})}
		>
			<span className={styles.bubblespan}>{spanText}</span>
			<h4 className={styles.bubbleheader}>{headerText}</h4>
			{children}
		</div>
	);
};