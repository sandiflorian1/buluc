import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import IMAGES from "../assets/Images";
import Modal from "../components/Modal";
import { FadeInViewPortAnimation, FadeInAnimation } from "../components/animations/Animations";
import CardContainer from '../components/cards/CardContainer';
import ScrollIndicator from '../components/ScrollIndicator';

export interface IExperienceProps { }
const Experience: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setcurrentImage] = useState<string>('');
  const imagesRef = useRef<HTMLImageElement | null>(null);
  const inscriereRef = useRef<HTMLDivElement>(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const onImageClick = (image: any) => {
    setcurrentImage(image);
    setModalOpen(true);
  }

  const scrollToInscriere = () => {
    document.getElementById('inscriere-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const images = imagesRef.current?.querySelectorAll('.galery img');
    images?.forEach((image: any) => {
      image.addEventListener('click', () => (onImageClick(image?.src)))
    })
  })

  return (
    <MainLayout noPadding>
      <FadeInAnimation>
        <img src={isMobile ? IMAGES.ExperienceV2_1 : IMAGES.ExperienceV2_2} className="w-full" />
        <ScrollIndicator />
      </FadeInAnimation>

      <FadeInViewPortAnimation>
        <div className="mx-[12%] mb:mx-[6%]">
          <CardContainer cardClass="p-6 w-[60%] my-20 mb:my-10 mb:w-full">
            <span>Un bootcamp artistic unde te vei conecta cu sinele tău într-un spațiu safe, unde natura devine nu doar o sursă de inspirație, ci și un partener în procesul creativ. Dacă anul trecut am testat limitele creativității și ale dezvoltării personale printr-o competiție, acum ne propunem să pătrundem în lumea emoțiilor. Plecăm de la joacă și învățăm să recunoaștem, să acceptăm și să ne folosim emoțiile în viața de zi cu zi. </span>
            <p onClick={scrollToInscriere} className="cursor-pointer text-orange hover:underline">Cum mă înscriu?</p>
          </CardContainer>
        </div>
      </FadeInViewPortAnimation>

      <div className="mx-[12%] mb:mx-[6%]">
        <BannerTextAbsolute
          imageURL={IMAGES.Experience4}
          direction="left"
          className="h-[35vw] mb-20 mb:mb-10"
          title="Ce am pregătit?"
          noAnimation={isMobile}
        >
          <p>
            Timp de 4 zile descoperim bucuria autentică a exprimării fără judecată, ne oferim libertatea de a simți fără rețineri și de a ne transforma trăirile interioare în artă. Un spațiu sigur, unde vulnerabilitatea devine forță și unde fiecare emoție își găsește un loc de exprimare printr-o varietate de tehnici artistice.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-6 mb:grid-cols-1 gap-8 mb:gap-0 mb-20 mb:mb-10">
          <div className="col-start-1 col-end-5 mb:col-end-7 bg-white br shadow-lg p-6">
            <h5 className="title pb-4 text-red">
              Pentru cine este? 
            </h5>
            <ul className="list-disc pl-8">
              <li>pentru oricine simte nevoia să se reconecteze cu sine printr-o provocare artistică, în mijlocul naturii</li>
              <li>pentru oricine vrea să se joace cu emoția, în mijlocul naturii, alături de oameni care împărtășesc aceeași curiozitate</li>
              <li>pentru cei care simt că au nevoie de o pauză de la zgomotul cotidian și vor să se redescopere</li>
              <li>pentru oricine vrea să experimenteze emoția într-un mod autentic, prin joc și creativitate</li>
            </ul>
          </div>

          <div className="col-end-7 col-span-2 mb:col-span-7 bg-white br shadow-lg p-6 relative overflow-hidden mb:mt-2">
            <h5 className="title pb-4 text-red">
              Ce este inclus?
            </h5>

            <ul className="list-disc pl-8 gap-x-10">
              <li>un sat doar pentru tine </li>
              <li>3 nopți de cazare</li>
              <li>3 mese pe zi 100% homemade</li>
              <li>acces la saună</li>
              <li>transport dus-întors</li>
              <li>goodies & premii de la parteneri</li>
            </ul>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="columns-2 mb:grid gap-10 mb:gap-0 mb-20 mb:mb-10">
          <div className="p-6 bg-white br shadow-lg mb-2">
            <h4 className="text-orange">Atelier de muzicoterapie coordonat de Monica Dimofte</h4>
            <p className="pb-2">Monica Dorofte este muzicoterapeut, pedagog special și profesor de muzică, cu o experiență vastă în domeniul educației și asistenței sociale, în special în München. De-a lungul timpului s-a specializat în muzică și comunicare nonverbală urmând cursuri de specializare în Berlin, iar în München a aplicat aceste cunoștințe în centre pedagogice speciale, școli și instituții culturale. Pe lângă partea pedagogică și terapeutică, are o carieră muzicală activă, participând la competiții internaționale de pian în Franța, Grecia, Italia și alte țări europene. </p>
            <p>Acest atelier îmbină muzica, vocea și elementele de teatru pentru a oferi participanților un spațiu sigur de explorare interioară. Scopul este să creștem încrederea de sine, să reducem stresul și anxietatea prin tehnici de relaxare, să ne îmbunătățim conștientizarea de sine prin sunet, ritm și mișcare </p>
          </div>
          <div><img src={IMAGES.ExperienceV2_3} className='br shadow-lg'></img></div>
          <div><img src={IMAGES.ExperienceV2_4} className='br shadow-lg mb:mt-2'></img></div>
          <div className="p-6 bg-white br shadow-lg mt-2">
            <h4 className="text-orange">Atelier de Teatru coordonat de Rareș Florin Stoica.</h4>
            <h4>”Din Interior” - Descoperă Actorul Autentic din Tine </h4>
            <p className="pb-2">Rareș Florin Stoica este actor și pedagog, doctor în Artele Spectacolului, cu o experiență bogată atât pe scenă, cât și în fața camerei de filmat. Prin abordarea sa autentică și profundă, el explorează și transmite esența actoriei, punând accent pe conexiunea emoțională și sinceritatea interpretării. În prezent continuă să inspire și să formeze noi generații de actori printr-o abordare profundă și autentică a artei actoricești, punând în prim-plan adevărul emoțional și expresivitatea scenică.</p>
            <p>În cadrul atelierului vei explora partea practică a actoriei printr-o serie de exerciții menite să îmbine tehnicile scenice cu explorarea profundă a emoțiilor autentice din interiorul tău. Scopul este să te ajute să redescoperi și să îmbrățișezi veridicitatea și sinceritatea ta, transformând experiențele interioare în performanțe pline de viață și autenticitate.</p>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="columns-2 mb:grid gap-10 mb:gap-0 mb-20 mb:mb-10">
          <div className="p-6 bg-white br shadow-lg mb-2">
            <h4 className="text-orange">Yoga la apus și la răsărit</h4>
            <p>Alături de Martha, vom trăi momente deosebite de conectare cu respirația, ghidați spre o stare profundă de liniște, pace și prezent. Fiecare sesiune ne va purta într-o călătorie interioară, iar la final vom încheia cu o meditație ghidată sau, opțional, cu Yoga Nidra – o tehnică profundă de meditație, cunoscută și sub numele de „somn yoghin”, care aduce beneficii remarcabile pentru minte și corp.</p>
          </div>
          <div><img src={IMAGES.Experience3} className='br shadow-lg'></img></div>
          <div><img src={IMAGES.Experience6} className='br shadow-lg mb:mt-2'></img></div>
          <div className="p-6 bg-white br shadow-lg mt-2">
            <h4 className="text-orange">Foc de tabără</h4>
            <p>Ne strângem buluc în jurul focului de tabără, sub cerul înstelat și privirile atente ale vârfului Cozia. Un moment magic de reconectare cu natura și cu noi înșine, o oportunitate de a regăsi simplitatea și frumusețea vieții chiar la poalele muntelui, în mijlocul poveștilor.</p>
          </div>
        </FadeInViewPortAnimation>

        <BannerTextAbsolute
          imageURL={IMAGES.Experience8}
          direction="left"
          className="h-[40vw] mb-20 mb:mb-10"
          title="Despre Albastru și Origini"
          link="https://albastrusiorigini.ro/"
          noAnimation={isMobile}
        >
          <p className="pb-4">
            Un sat din Berislăvești, Jud. Vâlcea format din 4 case vechi de peste 100 de ani srămutate și readuse la viață, din nordul țării, alături de un hambar transformat în vatra satului – locul unde ne vom aduna buluc cu toții la povesti si la bucate delicioase. Un loc în care timpul parcă stă în loc.
          </p>
          <ul className="list-disc pl-8">
            <li>Casa Amurg</li>
            <li>Casa Zori de Zi</li>
            <li>Casa Rădăcini</li>
            <li>Casa Origini</li>
            <li>Hambarul Albastru și Origini</li>
          </ul>
        </BannerTextAbsolute>

        <BannerTextAbsolute
          imageURL={IMAGES.Experience7}
          direction="right"
          className="h-[40vw] pb-20"
          title="Bucătăria"
          noAnimation={isMobile}
        >
          <p className="pb-4">
            Te vei bucura de o bucatarie cu mult bun gust și de influențe din multe culturi. Și, mai ales, 100% homemade. 3 mese pe zi  gătite “with a twist”, niciodată banal. O mancare…eclectică, așa cum este și satul Albastru și Origini.
          </p>
          <p className="pb-4">
            Vei lua masa într-o șură veche, transformată în bucatarie, șezătoare, sufragerie, loc de povesti, loc de adunări buluc …și dacă ești fan mâncării vegetariene - te vei bucura de legume de sezon.
          </p>
        </BannerTextAbsolute>
      </div>

      <div className="mb-20 mb:mb-10">
        <div className="w-100% mb:pb-2">
          <h3 className="title p-4 text-orange mx-[12%] mb:mx-6">
            Echipa
          </h3>

          <div id="members" className="flex mb:inline gap-10 justify-center">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.key}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
                color={member.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-[12%] mb:mx-[6%]" ref={imagesRef}>
        <FadeInViewPortAnimation className="mb-20 mb:mb-10 flex gap-10 mb:inline">
          <div className="w-[50%] mb:w-[100%] bg-white p-6 br shadow-lg">
            <h4 className="title pb-4 text-orange">
              Cum ajung acolo?
            </h4>
            <p>Oferta include transport asigurat de dus - întors: din București către Albastru și Origini & Albastru și Origini către București.  Preluarea din București se va face dintr-o singură locație.</p>
          </div>

          <div className="w-[50%] mb:w-[100%] bg-white p-6 br shadow-lg">
            <h4 className="title pb-4 text-orange">
              Cum a fost la prima editie?
            </h4>
            <p>Poti vedea detaliile primei editii vizitant pagina <Link to="/experience" className='text-orange underline'>Experience V2</Link></p>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10" id="inscriere-section">
          <div className="w-[50%] mb:w-[100%] bg-white p-6 br shadow-lg">
            <h4 className="title pb-4 text-orange">
              Cum mă înscriu?
            </h4>
            <p>Înscrierea se face exclusiv prin email la rezervari.buluc@gmail.com</p>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="pb-10">
          <div className="h-[7vw] w-[50%] mb:w-full mb:h-[15vw] image-cover br" style={{ backgroundImage: `url(${IMAGES.locuriLimitate})` }} />
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20">
          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex items-center">
              <FaEnvelope size='30px' className="mr-2" />
              <span>Trimite-ne un email</span>
            </a>
          </div>
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} image={currentImage} />
    </MainLayout>
  );
};

export default Experience;

const galerie1 = [
  IMAGES.Experience2,
  IMAGES.Experience5,
  IMAGES.Experience10,
  IMAGES.Experience11,
];

const galerie2 = [
  IMAGES.Experience12,
  IMAGES.Experience4,
  IMAGES.Experience14,
  IMAGES.Experience15,
];


const teamMembers = [
  {
    key: "mella",
    imageSrc: IMAGES.echipaMihaelaMardare,
    name: "Mella",
    role: "trainer",
    color: "red"
  },
  {
    key: "robert",
    imageSrc: IMAGES.echipaRobertCiupitu,
    name: "Robert",
    role: "trainer",
    color: "orange"
  },
  {
    key: "mari",
    imageSrc: IMAGES.echipaMarilenaAdam,
    name: "Mari",
    role: "comunicare & social media",
    color: "orange"
  },
  {
    key: "andreea",
    imageSrc: IMAGES.echipaMarilenaAdam,
    name: "Andreea",
    role: "Identitate Vizuală",
    color: "red"
  }
];