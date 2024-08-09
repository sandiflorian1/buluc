import "../css/footer.css";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import IMAGES from "../assets/Images";

function Footer() {
	return (
	<>
		<div className="footer bg-red mt-auto relative">
			{/* <img className="caracter mb:top-[-20px]" src={IMAGES.caracter2} loading="lazy" alt="Image 1" /> */}
			<div className="container mx-auto px-[18vw] mb:px-[4vw] sm:py-10 py-5">
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-4 mb:text-center">
					<div>
						<h6 className="pb-3 text-poppins">CONTACTEAZĂ-NE</h6>
						<div className="pb-1"><a href="tel:+40740 993 479">0740 993 479</a></div>
						<div><a href="mailto:contact@buluc.org">buluc.org@gmail.com</a></div>
					</div>
					
					<div>
						<h6 className="pb-3 text-poppins">URMĂREȘTE-NE</h6>
						<div className=" flex sm:justify-start justify-center items-center">
							<a href="https://www.instagram.com/_bulucul/" className="pr-[1rem]" target="_blank"><FaInstagram size = '20px' /></a>
							<a href="https://www.facebook.com/bulucorg/" className="pr-[1rem]" target="_blank"><FaFacebook size = '20px' /></a>
							<a href="https://www.tiktok.com/@_buluc" className="pr-[1rem]" target="_blank"><FaTiktok size = '20px' /></a>
							<a href="https://www.youtube.com/channel/UCnn7EVQzc0nzv9YyGb-iUlA" target="_blank"><FaYoutube size = '20px' /></a>
						</div>
					</div>

					<div>
						<h6 className="pb-3 text-poppins">VIZITEAZĂ-NE</h6>
						<p>Strada Madrid 4</p>
					</div>
					
					<div className="flex items-end mb:justify-center">
						<div className="text-sm mb:text-[0.5rem]">Ⓒ2024 by Buluc.</div>
					</div>
				</div>
			</div>
		</div>
	</>
	);
}

export default Footer;