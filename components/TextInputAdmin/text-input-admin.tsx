import { Field, useField } from 'formik';
import { TextInputAdminProps } from "./text-input-admin.props";
import styles from './text-input-admin.module.css';

export const TextInputAdmin = ({ label, name, type }: TextInputAdminProps): JSX.Element => {
	const [field, meta] = useField(name);
	return (
		<>
			<div className="col-12">
				<label htmlFor={name} className="form-label">{label}</label>
				<Field name={name} type={type} className="form-control" />
				{meta.touched && meta.error ? (<div className={styles.errorMessage}>{meta.error}</div>) : null}
			</div>
		</>
	);
};