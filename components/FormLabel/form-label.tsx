import { FormLabelProps } from './form-label.props';
import styles from './form-label.module.css';

export const FormLabel = ({ children, ...props }: FormLabelProps): JSX.Element => {
	return (
		<p>
			<label
				className={styles.formlabel}
				{...props}
			>
				{children}
			</label>
		</p>
	);
};