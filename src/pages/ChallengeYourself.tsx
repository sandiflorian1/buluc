import { FaWhatsapp, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, ScaleViewPortAnimation, FadeInAnimation } from "../components/animations/Animations";

export default function ChallengeYourself() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const textShadow = { textShadow: isMobile ? '' : '1px 1px 2px black' };

  return (
    <MainLayout noPadding>
      <FadeInAnimation className="w-full py-20 mb:py-10">
        <h1 className="text-center text-[6.5vw] mb:text-[17vw] leading-[7.5vw] mb:leading-[21vw]">
          Challenge Yourself
        </h1>
        <h3 className="text-center mb:text-[5.5vw] mb:px-10">
          curs de dezvoltare personală prin tehnici teatrale
        </h3>
      </FadeInAnimation>

      <div className="mx-[12%] mb:mx-[6%]">
        <FadeInAnimation>
          <BannerTextAbsolute
            imageURL={IMAGES.CYImage1}
            direction="right"
            className="h-[35vw] mb-20 mb:mb-0 mb:h-auto"
            noAnimation
          >
            <p className="pb-2">
             <span className="text-orange">Challenge Yourself este, așa cum îi spune și numele, o invitație de a te provoca și de a-ți depăși limitele, dar și o formă de relaxare activă, care creează o pauză în ritmul vieții de zi cu zi. </span> Un spațiu în care provocarea și relaxarea coexistă, iar teatrul devine un instrument de explorare personală.
            </p>

            <p className="pb-2">
              Ne întâlnim o dată pe săptămână, într-o sufragerie interbelică din 1920, unde ne întoarcem atenția către noi și ne jucăm.
            </p>

            <p className="">
            Modulul de începători se desfășoară pe parcursul a trei luni și propune un proces construit în jurul jocului și al tehnicilor teatrale. Explorăm emoția, imaginația și creativitatea și descoperim cum le putem folosi mai liber, atât în relația cu noi înșine, cât și în întâlnirea cu ceilalți.
            </p>
          </BannerTextAbsolute>

        </FadeInAnimation>

        <BannerTextAbsolute
          imageURL={IMAGES.CYImage3}
          direction="left"
          className="h-[32vw] mb-20 mb:mb-10 mb:h-auto"
          title="Unde se întâmplă?"
        >
          <p className="">
            La locul nostru de joacă de pe str. Madrid 4. În sufrageria unei case interbelice din 1920 în zona Dorobanți. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-1 gap-8 mb-20 mb:mb-10 bg-white shadow-lg br p-8">
          <div className="">
            <h4 className="title pb-4 text-red">
              Unde și când ne pot fi de folos tehnicile teatrale?
            </h4>
            <p className="pb-4">
              Aproape în fiecare moment în care trebuie să lucrăm cu emoția, imaginația și creativitatea, cu noi înșine dar și în relație cu ceilalți.
            </p>

            <ul className="list-star pl-8">
              <li className="text-red pl">atunci când ne dorim sa fim productivi</li>
              <li className="text-orange">când vrem să avem o gândire pozitivă</li>
              <li className="text-red">când ne dorim să avem curajul de a acționa şi libertatea de a ne exprima</li>
            </ul>
          </div>

          <div className="">
            <h4 className="title pb-4 text-red">
              Cum te va schimba acest curs?
            </h4>

            <ul className="list-star pl-8">
              <li>Vei vedea de ce ești capabil cu adevărat prin ascultarea si gestionarea propriului corp;</li>
              <li>Îți vei îmbunătăți încrederea prin gestionarea emoțiilor;</li>
              <li>Îți vei dezvolta creativitatea prin arta improvizației;</li>
              <li>Vei descoperi ce înseamnă să te joci cu propriile blocaje;</li>
              <li>Vei învăța lucruri noi despre tine, lucruri pe care probabil nici tu nu le știai, prin acceptarea si afirmarea propriei personalități;</li>
              <li>Vei reuși să te adaptezi situațiilor limită si vei scăpa de frica vorbitului în public;</li>
              <li>Te vei exprima liber, mai puternic și mai nuanțat;</li>
            </ul>

          </div>
        </FadeInViewPortAnimation>

        {!isMobile && (<div className="galery w-full mb-20 mb:mb-10">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {Galery1.map((image, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={image}
                    alt={`image ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {Galery2.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`image ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>)}

      </div>

      <div className="w-full mb:px-0 mb:w-[100vw]">
        <FadeInViewPortAnimation className="mb-20 mb:mb-10">
          <div className="w-[100vw] relative mb:w-full">
            <SimpleSlider
              images={[IMAGES.Show4, IMAGES.Show2, IMAGES.Show3, IMAGES.Show1, IMAGES.Show5, IMAGES.Show7, IMAGES.Show8, IMAGES.Show9]}
              className="w-[100vh] h-[80vh] overflow-hidden"
            ></SimpleSlider>
            <div className="absolute w-[30vw] bottom-0 left-[20vw] pb-20 mb:relative mb:w-full mb:left-0 mb:bg-white mb:p-8">
              <h4 className="title pb-4 text-white mb:text-red" style={textShadow}>
                Ce urmează după
                <br />
                modulul de începatori
              </h4>

              <p className="pb-4 text-white mb:text-black" style={textShadow}>
                La finalul modulului, jocurile și exercițiile explorate în cele trei luni se mută pe scenă, într-un show de improvizație. Nouă ne place să-i spunem „un curs deschis cu apucături de show”: o întâlnire relaxată și distractivă, la care îți poți invita prietenii, familia sau colegii de la birou. 
              </p>

              <p className="pb-4 text-white mb:text-black" style={textShadow}>
                După acest moment, cursul Challenge Yourself continuă cu modulul de avansați, o nouă etapă în care aprofundăm creativitatea, improvizația și spontaneitatea și descoperim legătura lor directă cu teatrul și cu viața de zi cu zi. Jocul capătă mai multă intensitate, urcăm pe scenă în spectacole de improvizație „pe bune” și, treptat, începem să construim propriile spectacole de teatru.
              </p>
            </div>

          </div>
        </FadeInViewPortAnimation>
      </div>

      <div className="mx-[12%] mb:mx-[6%]">
        <FadeInViewPortAnimation className="">
          <BannerTextAbsolute
            imageURL={IMAGES.CYTeamTrainers}
            direction="right"
            className="h-[40vw] mb-20 mb:mb-10 mb:h-auto"
            title="Traineri"
          >
            <p className=""> Pe Madrid, 4 te vei întâlni cu <span className="font-bold">Robert, Mella, Valentina, Victoraş, Lixi şi Andrei</span>.Toți au absolvit Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale", București și în prezent sunt actori și pedagogi teatrali. Cu o experiență de peste 6 ani în cadrul cursurilor de dezvoltare personală pentru adulţi, adolescenți dar şi pentru copii.</p>
          </BannerTextAbsolute>

          <div id="members" className="flex mb:inline gap-10 mb:gap-20 justify-center my-10">
            <TeamMemberCard
              key={1}
              imageSrc={IMAGES.CYTeam1}
              name="Mella & Robert"
              color="red"
            />
            <TeamMemberCard
              key={2}
              imageSrc={IMAGES.CYTeam3}
              name="Valea & Victoraş"
              color="orange"
            />
             <TeamMemberCard
              key={3}
              imageSrc={IMAGES.CYTeam2}
              name="Atabay & Lixi"
              color="red"
            />
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="py-10">
          <div className="bg-white br shadow-lg p-10 mb:mb-6">
            <h3 className="text-red">
              Sesiuni speciale
            </h3>

            <p className="">  În cadrul modulului de avansați, vei trece printr-o serie de şedințe speciale coordonate de traineri din zone complementare precum dicție, dans, lupte scenice sau lucru cu camera, experiențe care completează procesul de lucru prin noi forme de expresie și explorare.</p>
          </div>

          <div id="members" className="flex mb:inline gap-10 mb:gap-20 justify-center my-10">
            <TeamMemberCard
              key={1}
              imageSrc={IMAGES.CYTeam4}
              name="Valentina Boldurescu"
              color="red"
              role="profa de dans & mișcare scenicǎ"
            />
            <TeamMemberCard
              key={2}
              imageSrc={IMAGES.CYTeam5}
              name="Ioana Perescu"
              color="orange"
              role="profa de dicție"
            />
            <TeamMemberCard
              key={1}
              imageSrc={IMAGES.CYTeam6}
              name="Andrei Mihail Dominte"
              color="red"
              role="proful de scrimǎ artisticǎ de teatru/film"
            />
             <TeamMemberCard
              key={1}
              imageSrc={IMAGES.echipaIonutTerteci}
              name="Ionuț Terteci"
              color="orange"
              role="proful de joc la camerǎ"
            />
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="pb-20 mb:pb-0">
          <h4 className="title mb:mb-4">
            Alege varianta care ți se potrivește și contactează-ne.
          </h4>

          <div className="flex mb:inline gap-10 justify-center my-4 mx-auto">
            <ScaleViewPortAnimation className="p-10 bg-orange shadow-lg rounded-full mb:mb-10">
              <h5 className="text-center text-white"> VARIANTA 1 </h5>
              <h5 className="text-center text-white pb-4"> PLATĂ LUNARĂ</h5>
              <p className="text-center text-white">  4 ședințe / lună </p>
              <p className="text-center text-white"> 1 ședință / săptămână </p>
              <h5 className="text-center text-white font-bold pt-4"> 479 lei/lună </h5>
              <p className="text-center text-white mt-2 px-10"> Include <b>1 ședință bonus: Improshow</b> </p>
            </ScaleViewPortAnimation>

            <ScaleViewPortAnimation className="p-10 bg-red shadow-lg rounded-full mb:mb-10">
              <h5 className="text-center text-white"> VARIANTA 2 </h5>
              <h5 className="text-center text-white pb-4"> PLATĂ INTEGRALĂ </h5>

              <p className="text-center text-white"> 12 ședințe / 3 luni </p>
              <p className="text-center text-white"> 1 ședință / săptămână </p>
              <h5 className="text-center text-white font-bold pt-4">1259 lei </h5>
              <p className="text-center text-[#efdc90] text-[12px]"> Economisești 178 lei*</p>
              <p className="text-center text-white mt-2 px-10"> Include <b>1 ședință bonus: Improshow </b> </p>

            </ScaleViewPortAnimation>

          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10 bg-white br shadow-lg p-10">
          <div className="grid grid-cols-1 mb:grid-cols-1 gap-8">
            <div>
              <h4 className="text-orange">
                Despre curs:
              </h4>

              <ul className="list-star pl-8">
                <li>modulul pentru începători durează 3 luni și cuprinde 12 ședințe, câte o ședință pe săptămână</li>
                <li>cursul funcționează sub forma unui abonament, iar plata individuală a ședințelor nu este posibilă</li>
                <li>ședințele la care nu poți participa nu se pot recupera la o altă grupă</li>
                <li>după finalizarea modulului pentru începători, poți continua cu modulul pentru avansați</li>
                <li>clasele pentru avansați sunt construite ca un proces continuu de învățare și explorare</li>
              </ul>

              <p className="mt-2">*Indiferent de varianta aleasă, plata se face la prima ședință: lunar, la începutul fiecărei luni de curs, sau integral, la începutul modulului.</p>
            </div>

            <div>
              <h4 className="text-orange">
                Rezervă-ți locul:
              </h4>
              <p>
                <span className="text-red font-bold">Locul se consideră rezervat după achitarea avansului nerambursabil în valoare de 150 de lei (avans ce acoperă prima ședință)</span>. Acesta se scade automat din plata primei luni sau plata întregului modul.
              </p>
            </div>

          </div>
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20 mb:grid gap-6 mb:gap-4">
          <div className="bg-orange email-btn">
            <Link to="/faq" className="flex">
              <FaQuestionCircle size='30px' className="pr-2" />
              <p className="pt-1 mb:pt-2">Întrebări frecvente</p>
            </Link>
          </div>

          <div className="whatsapp-btn mb:mr-0">
            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+40740993479" className="flex items-center">
              <FaWhatsapp size='30px' className="pr-2" />
              <p className="pt-1">Scrie-ne pe whatsapp</p>
            </a>
          </div>

          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex">
              <FaEnvelope size='30px' className="pr-2" />
              <p className="pt-1 mb:pt-2">Trimite-ne un email</p>
            </a>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

const Galery1 = [
  IMAGES.CYImage2,
  IMAGES.CYImage9,
  IMAGES.CYImage10,
  IMAGES.CYImage4,
];

const Galery2 = [
  IMAGES.CYImage7,
  IMAGES.CYImage5,
  IMAGES.CYImage6,
  IMAGES.CYImage8,
];