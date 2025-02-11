import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

type EmailTemplateParams = {
	user_email?: string;
	message?: string;
	subject?: string;
	from_name?: string;
	to_name?: string;
	reply_to?: string;
	form?: string;
}

export const emailHandler = async (
	emailParams: EmailTemplateParams,
): Promise<void> => {
	try {
		const response = await emailjs.send(
			'service_66jq7x7',
			'template_jwf5sbr',
			emailParams,
			'C5A5KHDNv4Ww4teXH'
		);

		if (response.status === 200) {
			toast.success("Mesajul a fost trimis cu succes!");
		} else {
			throw new Error("Failed to send email");
		}
	} catch (error) {
		console.error(error);
		toast.error("Ne pare rău, mesajul nu a fost trimis");
		throw error;
	}
};