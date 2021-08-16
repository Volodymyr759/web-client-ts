import { Htag } from '../Htag/Htag';
import { LeftTextCardProps } from './left-text-card.props';
import styles from './left-text-card.module.css';
import { ImageObject } from '..';

export const LeftTextCard = ({
	htagText,
	objdata,
	children
}: LeftTextCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.lefttextcard}>
				<div>
					<Htag tag="h2">{htagText}</Htag>
					{children}
				</div>
				<div>
					<ImageObject objdata={objdata} />
				</div>
			</div>
		</>
	);
};
