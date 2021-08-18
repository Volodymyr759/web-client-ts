import { useState } from 'react';
import { Htag, FormLabel, LinkButton } from '../../components';
import styles from './say-hello.module.css';

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
							<FormLabel>Fullname *:</FormLabel>
							<p>
								<input
									type="text"
									name="fullName"
									className="forminput"
									size={40}
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required
									minLength={4}
									maxLength={30}
								/>
							</p>
						</div>
						<div className="formgroup">
							<FormLabel>Company *:</FormLabel>
							<input
								type="text"
								name="company"
								className="forminput"
								size={40}
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								required
								minLength={3}
								maxLength={50}
							/>
						</div>
						<div className="formgroup">
							<FormLabel>Select A Preferable way of communication *:</FormLabel>
							<FormLabel>Phone</FormLabel>
							<input type="radio" name="Phone"
								onChange={
									() => { if (prefCommunication !== "Phone") setPrefCommunication("Phone"); }
								}
								checked={prefCommunication === "Phone"}
							/>
							<FormLabel>Email</FormLabel>
							<input type="radio" name="Email"
								onChange={
									() => { if (prefCommunication !== "Email") setPrefCommunication("Email"); }
								}
								checked={prefCommunication === "Email"}
							/>
						</div>
						<div className="formgroup">
							<FormLabel>Email *:</FormLabel>
							<input
								type="email"
								name="email"
								className="forminput"
								size={30}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								minLength={4}
								maxLength={30}
							/>
						</div>
						<div className="formgroup">
							<FormLabel>Phone Number *:</FormLabel>
							<input
								type="text"
								name="phoneNumber"
								className="forminput"
								size={240}
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								required
								minLength={4}
								maxLength={20}
							/>
						</div>
						<div className="formgroup">
							<FormLabel>Message *:</FormLabel>
							<textarea
								name="messageText"
								cols={40}
								rows={5}
								className="forminput"
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
