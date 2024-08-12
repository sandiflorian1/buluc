import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { toast } from 'react-toastify';
import MainLayout from "../components/layouts/MainLayout";
import CardContainer from '../components/cards/CardContainer';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e: any) => {
		e.preventDefault();

		const templateParams = {
			user_email: email,
			subject: subject,
			message: message,
			from_name: name,
			to_name: 'Buluc',
			reply_to: email,
		};

		emailjs.send(
			'service_66jq7x7',  // Service ID
			'template_jwf5sbr',  // Template ID
			templateParams,
			'C5A5KHDNv4Ww4teXH' // User ID
		)
			.then((result) => {
				console.log(result.text);
				toast.success("Mesajul a fost trimis cu succes");
			}, (error) => {
				console.log(error.text);
				toast.error("Ne pare rau mesajul nu a fost trimis");
			});
	};

	return (
		<MainLayout>
			<div className="mt-20">
				<CardContainer cardClass="p-10 w-[30vw] mb:w-full">
					<div>
						<h4 className="text-end mb-4 mb:text-start">Conectează-te cu noi!</h4>
						<div className="flex justify-end mb:justify-start">
							<a aria-label="Chat on WhatsApp" href="https://wa.me/+40743760430" target="_blank" className='mr-4'><FaWhatsapp size='30px' /></a>
							<a href="https://www.facebook.com/bulucorg/" target="_blank" className='mr-4'><FaFacebook size='30px' /></a>
							<a href="https://www.instagram.com/_bulucul/" target="_blank"><FaInstagram size='30px' /></a>
						</div>
						<div className="mt-6">
							<div role="form" className="w-20vw">
								<form onSubmit={sendEmail}>
									<label>Name*:</label>
									<input
										type="name"
										value={name}
										className="w-full rounded-[6px] mb-4"
										onChange={(e) => setName(e.target.value)}
										required
									/>
									<label>Email*:</label>
									<input
										type="email"
										value={email}
										className="w-full rounded-[6px] mb-4"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<label>Subiect*:</label>
									<input
										type="text"
										className="w-full rounded-[6px] mb-4"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										required
									/>
									<label>Mesaj*:</label>
									<textarea
										value={message}
										cols={40}
                    rows={5}
										className="w-full rounded-[6px] mb-4"
										onChange={(e) => setMessage(e.target.value)}
										required
									/>
									<button type="submit" className="bg-red px-4 py-2 br text-white">Trimite</button>
								</form>
							</div>
						</div>
					</div>
				</CardContainer>
			</div>
		</MainLayout >
	);
};

export default ContactForm;
