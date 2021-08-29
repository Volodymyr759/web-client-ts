import { CenterTextCardProps } from './center-text-card.props';

export const CenterTextCard = ({
	htagText,
	children
}: CenterTextCardProps): JSX.Element => {
	return (
		<div className="px-4 py-5 my-5 text-center">
			<h1 className="display-5 fw-bold">{htagText}</h1>
			<div className="col-lg-6 mx-auto">
				{children}
			</div>
		</div>
	);
};
