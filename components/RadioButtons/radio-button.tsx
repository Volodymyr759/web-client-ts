import { ErrorMessage, Field } from 'formik';
import { RadioButtonsProps } from "./radio-buttons.props";
import styles from '../TextInput/text-input.module.css';
import React from 'react';

export const RadioButtons = ({ label, name, options, ...props }: RadioButtonsProps): JSX.Element => {
	return (
		<div className="col-12">
			<p>
				<label className="formlabel" htmlFor={name}>{label}</label>
			</p>
			<Field name={name} className={styles.forminput} {...props}>
				{
					({ field }) => {
						return options.map(option => {
							return (
								<React.Fragment key={option.key}>
									<input
										type="radio"
										id={option.value}
										{...field}
										value={option.value}
										checked={field.value === option.value}
									/>
									<span> </span>
									<label htmlFor={option.value}>{option.key}</label>
									<span> </span>
								</React.Fragment>
							);
						});
					}
				}
			</Field>
			<ErrorMessage name={name} />
		</div>
	);
};
