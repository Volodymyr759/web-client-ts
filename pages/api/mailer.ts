import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

export default function (req: NextApiRequest, res: NextApiResponse): void {
	const transporter = createTransport({
		port: 2525,
		host: 'mail.smtp2go.com',
		auth: {
			user: 'cyberchisel.com',
			pass: 'y2Q5GXHkxYZQ',
		},
		secure: false,
	});

	const mailData = {
		from: 'noreplay@old.housl.propertyspace.com',
		to: 'logisticmaster.2000@gmail.com',
		subject: `Message From ${req.body.login}`,
		text: 'You are successfully registered to eivolo.com',
		html: `<div>You are successfully registered to eivolo.com with login: ${req.body.login} < /div>`
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err)
			console.log(err);
		else
			console.log(info);
	});

	res.status(200);
}