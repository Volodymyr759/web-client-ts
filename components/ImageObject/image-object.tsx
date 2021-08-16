import { ImageObjectProps } from "./image-object.props";

export const ImageObject = (
	{
		objType = 'image/svg+xml',
		objdata
	}: ImageObjectProps): JSX.Element => {
	return (
		<>
			<object type={objType} data={objdata}>
				<img
					src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
					alt={objdata}
					data-lazy-src={objdata}
					width="100%"
				/>
				<noscript>
					<img
						src={objdata}
						alt={objdata}
						width="100%"
					/>
				</noscript>
			</object>
		</>

	);
};