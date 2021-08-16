import { Htag } from '../Htag/Htag';
import { RightSideCardProps } from './right-side-card.props';
import styles from './right-side-card.module.css';

export const RightSideCard = ({
	htagText,
	imgsrc,
	children
}: RightSideCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.rightsidecard}>
				<div>
					<Htag tag="h2">{htagText}</Htag>
					{children}
				</div>
				<div>
					<img src={imgsrc} />
				</div>
			</div>
		</>
	);
};
