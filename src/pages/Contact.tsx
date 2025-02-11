import { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import CardContainer from '../components/cards/CardContainer';
import { FadeInAnimation } from "../components/animations/Animations";
import { emailHandler } from '../components/utils/emailHandler';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = async (e: any) => {
		e.preventDefault();
		try {
			await emailHandler(
				{
					user_email: email,
					subject: subject,
					message: message,
					from_name: name,
					to_name: 'Buluc',
					reply_to: email,
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

return (
	<MainLayout>
		<FadeInAnimation className="mt-20">
			<CardContainer cardClass="p-10 w-[30vw] mb:w-full">
				<div>
					<h4 className="text-end mb-4 mb:text-start">Conectează-te cu noi!</h4>
					<div className="flex justify-end mb:justify-start">
						<a aria-label="Chat on WhatsApp" href="https://wa.me/+40740993479" target="_blank" className='mr-4'><FaWhatsapp size='30px' /></a>
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

								<div className="flex mb-4">
									<input type="checkbox" name="gdpr-accept" value="1" aria-invalid="false" className='w-[12px]' />
									<p className="mb-0 ml-2">
										Sunt de acord cu <a href="politica-de-confidentialitate/" className='underline'>Politica de Confidențialitate</a>.
									</p>
								</div>
								<button type="submit" className="bg-red px-4 py-2 br text-white">Trimite</button>
							</form>
						</div>
					</div>
				</div>
			</CardContainer>
		</FadeInAnimation>
	</MainLayout >
);
};

export default ContactForm;
