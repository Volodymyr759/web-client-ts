import { IconTextBoxProps } from './icon-text-box.props';
import styles from './icon-text-box.module.css';
import cn from 'classnames';

export const IconTextBox = ({ appearance, headerText, children }: IconTextBoxProps): JSX.Element => {
	return (
		<div className={cn(styles.p, {
			[styles.icontextbox]: appearance == 'exotic',
			[styles.icontextboxrocket]: appearance == 'rocket'
		})}
		>
			<h4 className={styles.boxheader}>&nbsp;{headerText}</h4>
			{children}
		</div>
	);
};