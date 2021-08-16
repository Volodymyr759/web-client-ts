import { Htag } from '../Htag/Htag';
import styles from './title-card.module.css';
import { P } from '../P/P';
import { ImageObject, LinkButton } from '..';
import { TitleCardProps } from './title-card.props';

export const TitleCard = ({
	htagText,
	htagSize,
	buttonText,
	buttonLink,
	objdata,
	children
}: TitleCardProps): JSX.Element => {
	return (
		<>
			<div className={styles.titlecard}>
				<div>
					<Htag tag={htagSize == 'h1' ? 'h1' : 'h2'}>{htagText}</Htag>
					<P appearance="large">{children}</P>
					<LinkButton appearance="primary" linkTo={buttonLink}>
						<strong>{buttonText}</strong>
					</LinkButton>
				</div>
				<div>
					<ImageObject objdata={objdata} />
				</div>
			</div>
		</>
	);
};
