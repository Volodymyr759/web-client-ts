import { Htag } from '../Htag/Htag';
import styles from './text-card.module.css';
import { TextCardProps } from './text-card.props';

export const TextCard = ({
	htagText,
	htagSize,
	children
}: TextCardProps): JSX.Element => {
	return (
		<div className={styles.textcard}>
			<div>
				{htagText != 'undefined' && <Htag tag={htagSize == 'h1' ? 'h1' : 'h2'}>{htagText}</Htag>}
				{children}
			</div>
		</div>
	);
};
