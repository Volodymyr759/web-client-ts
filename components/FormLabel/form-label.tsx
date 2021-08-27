import { FormLabelProps } from './form-label.props';

export const FormLabel = ({ children, ...props }: FormLabelProps): JSX.Element => {
	return (
		<p>
			<label
				className="formlabel"
				{...props}
			>
				{children}
			</label>
		</p>
	);
};