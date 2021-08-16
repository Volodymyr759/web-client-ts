import { Htag } from '../Htag/Htag';
import { LeftImageCardProps } from './left-image-card.props';
import styles from './left-image-card.module.css';
import { P } from '../P/P';
import { ImageObject, LinkButton } from '..';

export const LeftImageCard = ({
	htagText,
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
					<P>{children}</P>
					<LinkButton appearance="white" linkTo={buttonLink}>
						<span>{buttonText}</span>
					</LinkButton>
				</div>
			</div>
		</>
	);
};
