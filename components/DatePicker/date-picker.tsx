import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, useField } from 'formik';
import styles from '../TextInputAdmin/text-input-admin.module.css';

export const DatePicker = (props): JSX.Element => {
	const { label, name, ...rest } = props;
	const [field, meta] = useField(name);

	return (
		<div className="col-12">
			<label htmlFor={name}>{label}</label>
			<Field name={name}>
				{
					({ form, field }) => {
						const { setFieldValue } = form;
						const { value } = field;
						return (
							<DateView
								id={name}
								{...field}
								{...rest}
								selected={value}
								onChange={val => setFieldValue(name, val)}
							/>
						);
					}
				}
			</Field>
			{meta.touched && meta.error ? (<div className={styles.errorMessage}>{meta.error}</div>) : null}
		</div>
	);
};
