import MainLayout from "../components/layouts/MainLayout";
import { useEffect } from 'react';
import { gsap } from "gsap";
import SimpleCard from "../components/cards/SimpleCard";
import { FadeInAnimation } from "../components/animations/Animations";

export interface IDonatieProps {
}

export default function Donatie(props: IDonatieProps) {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: 0 });
		tl.fromTo(".image1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
			.fromTo(".card1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
			.fromTo(".image2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
			.fromTo(".card2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
		return () => {
			tl.kill();
		};
	});

	return (
		<MainLayout>
			<div className="container mt-20 mb:mt-10">
				{/* <div className="w-full h-[30vw] image-cover" style={{ backgroundImage: `url(${IMAGES.zoomtalks})` }} /> */}
				<FadeInAnimation className="mx-[15%] mb:mx-0">
					<SimpleCard>
						<h2 className="pb-4 mb:text-[1.5rem]">Toate ideile și inițiativele noastre pot fi susținute printr-o donație directă în contul bancar al Asociației Buluc</h2>

						<p className="pb-2">Dacă îți place ce facem la Buluc și vrei să ne susții ideile & proiectele, poți face asta și printr-o donație directă. Fiecare donație este investită în proiectele culturale care aduc valoare comunității noastre și are un impact semnificativ în atingerea obiectivelor. </p>
						<p className="pb-2">Îți mulțumim și suntem bucuroși să te avem alături! </p>
						<p className="pb-2">Te așteptam cu drag la proiectele noastre!</p>
						<p className="pb-2"><span className="font-bold">IBANRO57BTRLRONCRT0606181701</span> - deschis la Banca Transilvania</p>
						<p className="pb-2"><span className="font-bold">Beneficiar:</span> Asociația „Buluc”, reprezentată prin Robert Damian Ciupitu</p>
					</SimpleCard>
				</FadeInAnimation>
			</div>
		</MainLayout>
	);
}
