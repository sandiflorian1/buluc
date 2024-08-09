import SignatureCanvas from 'react-signature-canvas'
import { toast } from 'react-toastify';
import "../../css/form35.css";

function Form35() {
	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	const onSubmitForm = () => {
		toast.error("Ne pare rau mesajul nu a fost trimis");
	}

	return (
		<form
			onSubmit={onSubmitForm}
		>
			<div className="mx-auto mt-4">
				<div className="flex gap-2 mb:flex-col pb-2">
					<div>
						<p className="mb-1">Nume:* </p>
						<input
							type="text"
							name="your-name"
							size={25}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Prenume:* </p>
						<input
							type="text"
							name="your-name"
							size={25}
							className=""
						/>
					</div>
				</div>

				<div className="flex gap-2 mb:flex-col pb-2">
					<div>
						<p className="mb-1">Initiala tatalui:* </p>
						<input
							type="text"
							name="your-name"
							size={15}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">CNP:* </p>
						<input
							type="text"
							name="your-name"
							size={35}
							className=""
						/>
					</div>
				</div>

				<div className="flex gap-2 mb:flex-col pb-2">
					<div>
						<p className="mb-1">Strada:* </p>
						<input
							type="text"
							name="your-name"
							size={35}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Nr:* </p>
						<input
							type="text"
							name="your-name"
							size={15}
							className=""
						/>
					</div>
				</div>

				<div className="flex gap-2 mb:flex-col pb-2">
					<div>
						<p className="mb-1">Bloc:* </p>
						<input
							type="text"
							name="your-name"
							size={5}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Scara:* </p>
						<input
							type="text"
							name="your-name"
							size={5}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Etaj:* </p>
						<input
							type="text"
							name="your-name"
							size={5}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Apt:* </p>
						<input
							type="text"
							name="your-name"
							size={5}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Judet/Sector:* </p>
						<input
							type="text"
							name="your-name"
							size={18}
							className=""
						/>
					</div>
				</div>

				<div className="flex gap-2 mb:flex-col pb-2">
					<div>
						<p className="mb-1">Email:* </p>
						<input
							type="text"
							name="your-name"
							size={25}
							className=""
						/>
					</div>

					<div>
						<p className="mb-1">Telefon:* </p>
						<input
							type="text"
							name="your-name"
							size={25}
							className=""
						/>
					</div>
				</div>

				<div>
					<p className="text"> Semnatura:* </p>
					<div className="signarure">
					<SignatureCanvas
						penColor='black'
						canvasProps={{ width: isMobile ? 200 : 500, height: 100, className: 'sigCanvas' }}
					/>
					</div>
					
				</div>


				<div className="flex items-center mb-4">
					<div className="mr-4">
						<span className="gdpr-accept">
							<span className=" wpcf7-acceptance">
								<span className="wpcf7-list-item">
									<input type="checkbox" name="gdpr-accept" value="1" aria-invalid="false" />
								</span>
							</span>
						</span>
					</div>
					<p className="mb-0">
						Sunt de acord cu <a href="politica-de-confidentialitate/">Politica de Confidențialitate</a>.
					</p>
				</div>
				<div className="flex justify-center pb-4">
					<button type="submit" className="px-6 py-2 bg-red text-white br">
						Trimite
					</button>
				</div>
			</div>
		</form>
	);
}

export default Form35;