import { Field, useField } from 'formik';
import { TextInputProps } from "./text-input.props";
import styles from './text-input.module.css';

export const TextInput = ({ label, name, type }: TextInputProps): JSX.Element => {
	const [field, meta] = useField(name);
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<Field name={name} type={type} className={styles.forminput} />
			{meta.touched && meta.error ? (<div className={styles.errorMessage}>{meta.error}</div>) : null}
		</>
	);
};