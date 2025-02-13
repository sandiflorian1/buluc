import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas'
import { modifyPdf } from '../utils/modifyPdf';
import { emailHandler } from '../utils/emailHandler';
import "../../css/form35.css";

// Regex patterns to allow only letters (without diacritics), numbers and spaces
const nameRegex = /^[a-zA-Z\s]*$/;
const addressRegex = /^[a-zA-Z0-9\s]*$/;
const cnpRegex = /^[0-9]*$/;
const phoneRegex = /^[0-9+]*$/;

type FormData = {
	firstName: string;
	lastName: string;
	firstLetter: string;
	cnp: string;
	email: string;
	phone: string;
	street: string;
	number: string;
	building: string;
	sc: string;
	floor: string;
	apt: string;
	county: string;
	city: string;
	zipCode: string;
	gdpr: boolean;
	period: '1' | '2'; 
};

function Form35() {
	const isMobile = window.matchMedia("(max-width: 768px)").matches;
	const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
	const signatureRef = useRef<SignatureCanvas>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmitForm = async (data: FormData) => {
		try {
			setIsSubmitting(true);
			const signatureImage = signatureRef.current?.getTrimmedCanvas().toDataURL('image/png');
			const params = {
				...data,
				signature: signatureImage,
			}

			const modifiedPdfBlob = await modifyPdf(params);

			const reader = new FileReader();
			reader.readAsDataURL(modifiedPdfBlob);
			reader.onloadend = async () => {
				const base64pdf = reader.result as string;
				try {
					await emailHandler(
						{
							to_name: 'Buluc',
							form: base64pdf,
							subject: 'Formular 230',
							message: 'Formular 230 trimis',
							user_email: data.email,
							from_name: data.firstName + ' ' + data.lastName,
							reply_to: data.email,
						}
					);
					// Reset form and signature
					reset();
					signatureRef.current?.clear();
				} catch (error) {
					console.error(error);
				} finally {
					setIsSubmitting(false);
				}
			};
		} catch (error) {
			console.error(error);
			setIsSubmitting(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<div className="mx-auto mt-4">
				<div className="form-row">
					<div>
						<label>
							<span>Nume*:</span>
							<input
								type="text"
								size={25}
								{...register('lastName', {
									required: 'Numele este obligatoriu',
									pattern: {
										value: nameRegex,
										message: 'Numele poate conține doar litere, fără diacritice'
									}
								})} />
							{errors.lastName && <span className='error'>{errors.lastName.message}</span>}
						</label>
					</div>

					<div>
						<label>
							<span>Prenume:*</span>
							<input
								type="text"
								size={25}
								{...register('firstName', {
									required: 'Prenumele este obligatoriu',
									pattern: {
										value: nameRegex,
										message: 'Prenumele poate conține doar litere, fără diacritice'
									}
								})} />
							{errors.firstName && <span className='error'>{errors.firstName.message}</span>}
						</label>
					</div>
				</div>

				<div className="form-row">
					<div>
						<label>
							<span>Initiala tatalui:*</span>
							<input
								type="text"
								size={15}
								maxLength={1}
								{...register('firstLetter', {
									required: 'Initiala este obligatorie',
									pattern: {
										value: nameRegex,
										message: 'Initiala poate conține doar litere, fără diacritice'
									}
								})} />
							{errors.firstLetter && <span className='error'>{errors.firstLetter.message}</span>}
						</label>
					</div>

					<div>
						<label>
							<span>CNP:*</span>
							<input
								type="text"
								size={35}
								maxLength={13}
								{...register('cnp', {
									required: 'CNP este obligatoriu',
									pattern: {
										value: cnpRegex,
										message: 'CNP poate conține doar cifre'
									},
									minLength: {
										value: 13,
										message: 'CNP trebuie să aibă 13 cifre'
									},
									maxLength: {
										value: 13,
										message: 'CNP trebuie să aibă 13 cifre'
									}
								})} />
							{errors.cnp && <span className='error'>{errors.cnp.message}</span>}
						</label>
					</div>
				</div>

				<div className="form-row">
					<div>
						<label>
							<span>Strada:*</span>
							<input
								type="text"
								size={35}
								{...register('street', {
									required: 'Strada este obligatorie',
									pattern: {
										value: addressRegex,
										message: 'Strada poate conține doar litere și numere, fără diacritice'
									}
								})} />
							{errors.street && <span className='error'>{errors.street.message}</span>}
						</label>
					</div>

					<div>
						<label>
							<span>Numar:*</span>
							<input
								type="text"
								size={15}
								{...register('number', { required: 'Numarul este obligatoriu' })} />
							{errors.number && <span className='error'>{errors.number.message}</span>}
						</label>
					</div>
				</div>

				<div className="form-row">
					<div>
						<label>
							<span>Bloc:</span>
							<input
								type="text"
								size={5}
								{...register('building')} />
						</label>
					</div>

					<div>
						<label>
							<span>Scara:</span>
							<input
								type="text"
								size={5}
								{...register('sc')} />
						</label>
					</div>

					<div>
						<label>
							<span>Etaj:</span>
							<input
								type="text"
								size={5}
								{...register('floor')} />
						</label>
					</div>

					<div>
						<label>
							<span>Apt:</span>
							<input
								type="text"
								size={5}
								{...register('apt')} />
						</label>
					</div>

					<div>
						<label>
							<span>Judet/Sector:*</span>
							<input
								type="text"
								size={18}
								{...register('county', {
									required: 'Judetul este obligatoriu', pattern: {
										value: addressRegex,
										message: 'Judetul poate conține doar litere, fără diacritice'
									}
								})} />
							{errors.county && <span className='error'>{errors.county.message}</span>}
						</label>
					</div>
				</div>

				<div className="form-row">
					<div>
						<label>
							<span>Localitate:*</span>
							<input
								type="text"
								size={25}
								{...register('city', {
									required: 'Localitatea este obligatorie', pattern: {
										value: addressRegex,
										message: 'Localitatea poate conține doar litere, fără diacritice'
									}
								})} />
							{errors.city && <span className='error'>{errors.city.message}</span>}
						</label>
					</div>

					<div>
						<label>
							<span>Cod postal:*</span>
							<input
								type="text"
								size={25}
								{...register('zipCode', { required: 'Codul postal este obligatoriu' })} />
							{errors.zipCode && <span className='error'>{errors.zipCode.message}</span>}
						</label>
					</div>
				</div>

				<div className="form-row">
					<div>
						<label>
							<span>Email*:</span>
							<input
								{...register('email', {
									required: 'Emailul este obligatoriu',
									pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email invalid' }
								})}
								size={25}
							/>
							{errors.email && <span className='error'>{errors.email.message}</span>}
						</label>
					</div>

					<div>
						<label>
							<span>Telefon:*</span>
							<input
								type="text"
								size={25}
								{...register('phone', {
									required: 'Telefonul este obligatoriu',
									pattern: {
										value: phoneRegex,
										message: 'Telefonul poate conține doar cifre și +'
									}
								})} />
							{errors.phone && <span className='error'>{errors.phone.message}</span>}
						</label>
					</div>
				</div>

				<div className="mb-4">
					<div className="mb-2">Pentru câți ani doriți să redirecționați?</div>
					<div className="flex gap-4">
						<label className="flex items-center">
							<input
								type="radio"
								value="1"
								className="mr-2"
								{...register('period', { required: 'Vă rugăm să selectați perioada' })}
							/>
							<span>1 an</span>
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								value="2"
								className="mr-2"
								{...register('period', { required: 'Vă rugăm să selectați perioada' })}
							/>
							<span>2 ani</span>
						</label>
					</div>
					{errors.period && <span className='error mt-2'>{errors.period.message}</span>}
				</div>

				<div>
					<p className="text"> Semnatura:* </p>
					<div className="signarure">
						<SignatureCanvas
							ref={signatureRef}
							penColor='black'
							canvasProps={{ width: isMobile ? 200 : 500, height: 100, className: 'sigCanvas' }}
						/>
					</div>

				</div>

				<div className="flex items-center mb-4 mt-2">
					<label>
						<div className='flex'>
							<input
								type="checkbox"
								className='w-4 mb:w-6'
								{...register('gdpr', { required: 'Trebuie sa acceptati GDPR' })} />
							<p className="mb-0 ml-2">
								Sunt de acord cu <a href="politica-de-confidentialitate/" className='underline'>Politica de Confidențialitate</a>.
							</p>
						</div>

						{errors.gdpr && <span className='error mt-2'>{errors.gdpr.message}</span>}
					</label>
				</div>

				<div className="flex justify-center pb-4">
					<button 
						type="submit" 
						className="px-6 py-2 bg-red text-white br disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Se trimite...' : 'Trimite'}
					</button>
				</div>
			</div>
		</form>
	);
}

export default Form35;