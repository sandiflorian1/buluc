function Form35() {
	return (
		<form
			action="/contact/#wpcf7-f136-o1"
			method="post"
			className="init"
			noValidate={true}
			data-status="init"
		>
			<div className="mx-auto">
				<p className="text">Nume:* </p>
				<p>
					<span className="your-name">
						<input
							type="text"
							name="your-name"
							size={40}
							className=""
							aria-required="true"
							aria-invalid="false"
						/>
					</span>
				</p>
				<p className="text"> Email:* </p>
				<p>
					<span className="your-email">
						<input
							type="email"
							name="your-email"
							size={40}
							className=""
							aria-required="true"
							aria-invalid="false"
						/>
					</span>
				</p>
				<p className="text"> Telefon:* </p>
				<p>
					<span className="your-phone">
						<input
							type="tel"
							name="your-phone"
							size={40}
							className=""
							aria-required="true"
							aria-invalid="false"
						/>
					</span>
				</p>
				<p className="text"> Mesaj:* </p>
				<p>
					<span className="mesaj">
						<textarea
							name="mesaj"
							cols={40}
							rows={5}
							className=""
							aria-required="true"
							aria-invalid="false"
						></textarea>
					</span>
				</p>
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
				<div className="flex justify-center">
					<button type="submit" className=" wpcf7-submit btn-submit">
						Trimite
					</button>
					<span className="ajax-loader"></span>
				</div>
			</div>
			<div className="wpcf7-response-output" aria-hidden="true"></div>
		</form>
	);
}

export default Form35;