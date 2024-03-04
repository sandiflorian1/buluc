import "../css/footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
	return (
	<>
		<div className="footer bg-red mt-auto">
			<div className="container mx-auto sm:w-[40rem] sm:py-10 py-5">
				<div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-2 sm:text-start text-center">
						<div className="sm:text-sm text-xl">CONTACTEAZĂ-NE</div>
						<div className="sm:text-sm text-xl">URMĂREȘTE-NE</div>
						<div className="sm:text-sm text-xl"><a href="mailto:contact@buluc.org">contact@buluc.org</a></div>
						<div className="sm:text-sm text-xl flex sm:justify-start justify-center items-center">
							<a href="https://www.instagram.com/_bulucul/" className="pr-[1rem]" target="_blank"><FaInstagram size = '16px' /></a>
							<a href="https://www.facebook.com/bulucorg/" className="" target="_blank"><FaFacebook size = '16px' /></a>
						</div>
						<div className="sm:text-sm text-xl"><a href="tel:+40740 993 479">0740 993 479</a></div>
						<div className="sm:text-sm text-xl">Ⓒ 2023 by Buluc.</div>
				</div>
			</div>
		</div>
	</>
	);
}

export default Footer;