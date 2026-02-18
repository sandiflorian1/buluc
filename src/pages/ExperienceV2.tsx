import { useRef, useEffect, useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import IMAGES from "../assets/Images";
import Modal from "../components/Modal";
import { FadeInViewPortAnimation, FadeInAnimation } from "../components/animations/Animations";
import CardContainer from '../components/cards/CardContainer';

export interface IExperienceProps { }
const Experience: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setcurrentImage] = useState<string>('');
  const imagesRef = useRef<HTMLImageElement | null>(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const onImageClick = (image: any) => {
    setcurrentImage(image);
    setModalOpen(true);
  }

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
      </FadeInAnimation>

      <FadeInViewPortAnimation>
        <div className="mx-[12%] mb:mx-[6%]">
          <CardContainer cardClass="p-6 my-20 mb:my-10 mb:w-full">
            <h5 className="text-orange mb-4 text-shadow-white">Tema de anul acesta este {isMobile && <br/>} ”Joacă-te cu emoția”</h5>
            <p className='pb-4'>Un bootcamp artistic unde te vei conecta cu sinele tău într-un spațiu safe, unde natura devine nu doar o sursă de inspirație, ci și un partener în procesul creativ. Dacă anul trecut am testat limitele creativității și ale dezvoltării personale printr-o competiție, acum ne propunem să pătrundem în lumea emoțiilor. Plecăm de la joacă și învățăm să recunoaștem, să acceptăm și să ne folosim emoțiile în viața de zi cu zi. </p>
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
          <CardContainer cardClass="col-start-1 col-end-5 mb:col-end-7 p-6">
            <h5 className="title pb-4 text-red">
              Pentru cine este? 
            </h5>
            <ul className="list-star pl-8">
              <li>pentru oricine simte nevoia să se reconecteze cu sine printr-o provocare artistică, în mijlocul naturii</li>
              <li>pentru oricine vrea să se joace cu emoția, în mijlocul naturii, alături de oameni care împărtășesc aceeași curiozitate</li>
              <li>pentru cei care simt că au nevoie de o pauză de la zgomotul cotidian și vor să se redescopere</li>
              <li>pentru oricine vrea să experimenteze emoția într-un mod autentic, prin joc și creativitate</li>
            </ul>
          </CardContainer>

          <CardContainer cardClass="col-end-7 col-span-2 mb:col-span-7 p-6 relative overflow-hidden mb:mt-2">
            <h5 className="title pb-4 text-red">
              Ce este inclus?
            </h5>

            <ul className="list-star pl-8 gap-x-10">
              <li>un sat doar pentru tine </li>
              <li>3 nopți de cazare</li>
              <li>3 mese pe zi 100% homemade</li>
              <li>acces la saună</li>
              <li>transport dus-întors</li>
              <li>goodies & premii de la parteneri</li>
            </ul>
          </CardContainer>
        </FadeInViewPortAnimation>

        <BannerTextAbsolute
          imageURL={IMAGES.ExperienceV2_5}
          direction="left"
          className="h-[40vw] mb-20 mb:mb-10"
          title="Traineri"
          noAnimation={isMobile}
        >
          <p className="pb-4">
            Alături de Mella și Robert, actori și traineri ai cursului Challenge Yourself by Buluc, vei experimenta ateliere de creativitate și improvizație, menite să-ți stimuleze spontaneitatea și expresivitatea, dar și activități interactive care te vor scoate din zona de confort. Cu toate acestea, conținutul exact al atelierelor rămâne o surpriză – vei afla despre ce este vorba abia în momentul în care ajungi în satul Albastru și Origini. 
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10">
          <div>
            <h4 className="text-red bg-white w-fit rounded-lg pt-2 px-6 border-2 border-red mb-4">Invitați speciali</h4>
            <div className="flex mb:inline gap-10">
              <CardContainer cardClass="p-6 w-[50%] mb:w-full mb:mb-4">
                <div className='flex flex-col gap-4'>
                <h5 className="text-orange">Atelier de muzicoterapie cu Monica Dorofte</h5>

                <img src={IMAGES.ExperienceV2_3} className='br shadow-lg w-full'></img>
                <p>Monica Dorofte este muzicoterapeut, pedagog special și profesor de muzică, cu experiență vastă în educație și asistență socială, activând în special în München. Pe lângă activitatea pedagogică și terapeutică, are o carieră muzicală activă, participând la competiții internaționale de pian în diferite țări europene. Acest atelier îmbină muzica, vocea și elementele de teatru pentru a oferi participanților un spațiu sigur de explorare interioară. Scopul este să creștem încrederea de sine, să reducem stresul și anxietatea prin tehnici de relaxare, să ne îmbunătățim conștientizarea de sine prin sunet, ritm și mișcare. </p>
                </div>
              </CardContainer>
              
              <CardContainer cardClass="p-6 w-[50%] mb:w-full">
                <div className='flex flex-col gap-4'>
                  <h5 className="text-orange">Atelierul ”Din Interior” - Descoperă Actorul Autentic din tine cu Rareș Florin Stoica</h5>

                  <img src={IMAGES.ExperienceV2_4} className='br shadow-lg w-full'></img>
                  <p>Rareș Florin Stoica este actor și pedagog, doctor în Artele Spectacolului, cu o experiență bogată atât pe scenă, cât și în fața camerei de filmat. În cadrul atelierului vei explora partea practică a actoriei printr-o serie de exerciții menite să îmbine tehnicile scenice cu explorarea profundă a emoțiilor autentice din interiorul tău. Scopul este să te ajute să redescoperi și să îmbrățișezi veridicitatea și sinceritatea ta, transformând experiențele interioare în performanțe pline de viață și autenticitate.</p>
                </div>
              </CardContainer>
            </div>
          </div>
        </FadeInViewPortAnimation>


        <FadeInViewPortAnimation className="mb-20 mb:mb-10">
          <h4 className="text-red bg-white w-fit rounded-lg pt-2 px-6 border-2 border-red mb-4">Relaxare & Deconectare</h4>
          <div className='columns-2 mb:grid gap-10 mb:gap-0'>
            <CardContainer cardClass="p-6 mb-4 mb:mb-4">
              <h4 className="text-orange">Yoga la apus și la răsărit</h4>
              <p>Alături de Martha, vom trăi momente deosebite de conectare cu respirația, ghidați spre o stare profundă de liniște, pace și prezent. Fiecare sesiune ne va purta într-o călătorie interioară, iar la final vom încheia cu o meditație ghidată sau, opțional, cu Yoga Nidra – o tehnică profundă de meditație, cunoscută și sub numele de „somn yoghin”, care aduce beneficii remarcabile pentru minte și corp.</p>
            </CardContainer>
            <div><img src={IMAGES.Experience3} className='br shadow-lg'></img></div>
            <CardContainer cardClass="p-6 mb-4 mb:mb-4 mb:mt-4">
              <h4 className="text-orange">Foc de tabără</h4>
              <p>Ne strângem buluc în jurul focului de tabără, sub cerul înstelat și privirile atente ale vârfului Cozia. Un moment magic de reconectare cu natura și cu noi înșine, o oportunitate de a regăsi simplitatea și frumusețea vieții chiar la poalele muntelui, în mijlocul poveștilor.</p>
            </CardContainer>
            <div><img src={IMAGES.Experience6} className='br shadow-lg'></img></div>
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
          <ul className="list-star pl-8">
            <li>Casa Amurg</li>
            <li>Casa Zori de Zi</li>
            <li>Casa Rădăcini</li>
            <li>Casa Origini</li>
            <li>Hambarul Albastru și Origini</li>
          </ul>
        </BannerTextAbsolute>

        <BannerTextAbsolute
          imageURL={IMAGES.Experience7}
          direction={isMobile ? "left" : "right"}
          className="h-[40vw] pb-20"
          title="Bucătăria"
          noAnimation={isMobile}
        >
          <p className="pb-4">
            Te vei bucura de o bucătărie cu mult bun gust și de influențe din multe culturi. Și, mai ales, 100% homemade. 3 mese pe zi  gătite “with a twist”, niciodată banal. O mâncare…eclectică, așa cum este și satul Albastru și Origini.
          </p>
          <p className="pb-4">
            Vei lua masa într-o șură veche, transformată în bucătărie, șezătoare, sufragerie, loc de povești, loc de adunări buluc …și dacă ești fan mâncării vegetariene - te vei bucura de legume de sezon.
          </p>
        </BannerTextAbsolute>
      </div>

      <div className="mb-20 mb:mb-10">
        <div className="w-100% mb:pb-2">
          <h4 className="title bg-white text-orange mx-[12%] mb-4  mb:mx-6 w-fit rounded-lg py-2 px-4 border-2 border-red">
            Echipa
          </h4>

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

      {/* <div className="mx-[12%] mb:mx-[6%]" ref={imagesRef} id="inscriere-section">
        <FadeInViewPortAnimation className="mb-20 mb:mb-10 flex gap-10 mb:inline">
          <CardContainer cardClass="p-6 mb:mb-4">
            <h5 className="title pb-4 text-orange">
              Cum ajung acolo?
            </h5>
            <p className='pb-4'>Oferta include transport asigurat de dus - întors: din București către Albastru și Origini & Albastru și Origini către București.  Preluarea din București se va face dintr-o singură locație.</p>
            <p className='pb-4 font-bold'>Vezi cum a fost în Challenge Yourself <Link to="/experience" className='text-orange underline'> @Experience #1</Link></p>
            <h5 className="title pb-4 text-orange">
              Cum mă înscriu?
            </h5>
            <p>Înscrierea se face exclusiv prin mail la rezervari.buluc@gmail.com unde vei primi și oferta detaliată.</p>
          </CardContainer>
        </FadeInViewPortAnimation>


        <FadeInViewPortAnimation className="pb-10 flex gap-10 mb:inline">
          <div className="h-[7vw] w-[50%] mb:w-full mb:h-[15vw] image-cover br mb:mb-4" style={{ backgroundImage: `url(${IMAGES.locuriLimitate})` }} />
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20">
          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex items-center">
              <FaEnvelope size='30px' className="mr-2" />
              <span>Trimite-ne un email</span>
            </a>
          </div>
        </div>
      </div> */}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} image={currentImage} />
    </MainLayout>
  );
};

export default Experience;

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
    color: "red"
  },
  {
    key: "andreea",
    imageSrc: IMAGES.echipaAdreeaD,
    name: "Andreea",
    role: "Identitate Vizuală",
    color: "orange"
  }
];