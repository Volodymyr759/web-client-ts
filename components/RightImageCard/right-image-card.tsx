import { Htag } from '../Htag/Htag';
import { RightImageCardProps } from './right-image-card.props';
import styles from './right-image-card.module.css';
import { P } from '../P/P';
import { ImageObject, LinkButton } from '..';

export const RightImageCard = ({
	htagText,
	buttonText,
	buttonLink,
	objdata,
	children
}: RightImageCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.rightimagecard}>
				<div>
					<Htag tag="h2">{htagText}</Htag>
					<P>{children}</P>
					<LinkButton appearance="white" linkTo={buttonLink}>
						<span>{buttonText}</span>
					</LinkButton>
				</div>
				<div>
					<ImageObject objdata={objdata} />
				</div>
			</div>
		</>
	);
};
