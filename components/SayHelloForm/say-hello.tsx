import { useState } from 'react';
import { Htag } from '../Htag/Htag';
import styles from './say-hello.module.css';
import { LinkButton } from '..';

export const SayHelloForm = (): JSX.Element => {
	const [fullName, setFullName] = useState('');
	const [company, setCompany] = useState('');
	const [prefCommunication, setPrefCommunication] = useState('Email');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [messageText, setMessageText] = useState('');

	const saveMessage = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();

		return;
	};

	return (
		<>
			<div className={styles.sayhello}>
				<div>
					<Htag tag="h2">Say Hello!</Htag>

					<form
						method="POST"
						onSubmit={saveMessage}
						noValidate={true}
					>
						<div className="formgroup">
							<label className={styles.formlabel}>Fullname *</label><br /><br />
							<input
								type="text"
								name="fullName"
								placeholder="Full Name *"
								className={styles.forminput}//"wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
								size={40}
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								required
								minLength={4}
								maxLength={30}
							/>
						</div>
						<div className="formgroup">
							<label className={styles.formlabel}>Company *</label><br /><br />
							<input
								type="text"
								name="company"
								placeholder="Company Name *"
								className={styles.forminput}//"wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
								size={40}
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								required
								minLength={3}
								maxLength={50}
							/>
						</div>
						<div className="formgroup">
							<label className={styles.formlabel}>Select A Preferable way of communication *</label><br /><br />
							<label className={styles.formlabel}>
								<input type="radio" name="Phone"
									onChange={
										() => { if (prefCommunication !== "Phone") setPrefCommunication("Phone"); }
									}
									checked={prefCommunication === "Phone"}
								/>
								<span className="wpcf7-list-item-label">Phone</span>
							</label>
							<label className={styles.formlabel}>
								<input type="radio" name="Email"
									onChange={
										() => { if (prefCommunication !== "Email") setPrefCommunication("Email"); }
									}
									checked={prefCommunication === "Email"}
								/>
								<span className="wpcf7-list-item-label">Email</span>
							</label>
						</div>
						<div className="formgroup">
							<label className={styles.formlabel}>Email *</label><br /><br />
							<input
								type="email"
								name="email"
								placeholder="Email *"
								className={styles.forminput}//"wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
								size={30}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								minLength={4}
								maxLength={30}
							/>
						</div>
						<div className="formgroup">
							<label className={styles.formlabel}>Phone Number *</label><br /><br />
							<input
								type="text"
								name="phoneNumber"
								placeholder="Phone Number *"
								className={styles.forminput}
								size={240}
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								required
								minLength={4}
								maxLength={20}
							/>
						</div>
						<div className="formgroup">
							<label className={styles.formlabel}>Message *</label><br /><br />
							<textarea
								name="messageText"
								cols={40}
								rows={5}
								className={styles.forminput}
								value={messageText}
								onChange={(e) => setMessageText(e.target.value)}
								required
								minLength={10}
								maxLength={500}
							/>
						</div>
					</form>
					<br /><br />
					<LinkButton appearance="primary" linkTo="/">
						<strong>Submit</strong>
					</LinkButton>
				</div>
				<div>
					<img src="/contact-us.jpeg" />
				</div>
			</div>
		</>
	);
};
