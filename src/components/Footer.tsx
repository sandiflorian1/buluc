import "../css/footer.css";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="footer bg-red mt-auto relative mb:pb-20">
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
								<a href="https://www.instagram.com/_bulucul/" className="pr-[1rem]" target="_blank"><FaInstagram size='20px' /></a>
								<a href="https://www.facebook.com/bulucorg/" className="pr-[1rem]" target="_blank"><FaFacebook size='20px' /></a>
								<a href="https://www.tiktok.com/@_buluc" className="pr-[1rem]" target="_blank"><FaTiktok size='20px' /></a>
								<a href="https://www.youtube.com/channel/UCnn7EVQzc0nzv9YyGb-iUlA" target="_blank"><FaYoutube size='20px' /></a>
							</div>
						</div>

						<div>
							<h6 className="pb-3 text-poppins">VIZITEAZĂ-NE</h6>
							<a
								href="https://www.google.com/maps/place/Buluc/@44.4544214,26.0945763,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1f97ee0b335e5:0x29cc88d7ed8ecf20!8m2!3d44.4544176!4d26.0971512!16s%2Fg%2F11tfysv30j?entry=ttu"
								target="_blank"
							>
								<p>Strada Madrid 4</p>
							</a>
						</div>

						<div className="flex items-end mb:justify-center">
							<div className="text-xs mb:text-[0.5rem]">Ⓒ2024 by Buluc.</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;