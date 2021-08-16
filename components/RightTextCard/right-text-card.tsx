import { Htag } from '../Htag/Htag';
import { RightTextCardProps } from './right-text-card.props';
import styles from './right-text-card.module.css';
import { ImageObject } from '..';

export const RightTextCard = ({
	htagText,
	objdata,
	children
}: RightTextCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.righttextcard}>
				<div>
					<ImageObject objdata={objdata} />
				</div>
				<div>
					<Htag tag="h2">{htagText}</Htag>
					{children}
				</div>
			</div>
		</>
	);
};
