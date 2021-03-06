import { Htag } from '../Htag/Htag';
import { LeftImageCardProps } from './left-image-card.props';
import styles from './left-image-card.module.css';
import { ImageObject, LinkButton } from '..';

export const LeftImageCard = ({
	htagText,
	isButtonNeeded = true,
	buttonText,
	buttonLink,
	objdata,
	children
}: LeftImageCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.leftimagecard}>
				<div>
					<ImageObject objdata={objdata} />
				</div>
				<div>
					<Htag tag="h2">{htagText}</Htag>
					{children}
					{isButtonNeeded && <LinkButton appearance="white" linkTo={buttonLink}><span>{buttonText}</span></LinkButton>}
				</div>
			</div>
		</>
	);
};
