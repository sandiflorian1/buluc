import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, ScaleViewPortAnimation, FadeInAnimation } from "../components/animations/Animations";

export default function ChallengeYourself() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const textShadow = { textShadow: isMobile ? '' : '1px 1px 2px black'};

  return (
    <MainLayout noPadding>
      <FadeInAnimation className="w-full py-20">
        <h1 className="text-center text-[6.5vw] mb:text-[8.5vw] leading-[7.5vw] mb:leading-[9.5vw]">
          Challenge Yourself
        </h1>
        <h3 className="text-center mb:text-[5.5vw] mb:px-10">
          curs de dezvoltare personală prin tehnici teatrale
        </h3>
      </FadeInAnimation>

      <div className="w-full mb:px-0 mb:w-[100vw]">
        <BannerTextAbsolute
          imageURL={IMAGES.CYImage1}
          direction="right"
          className="h-[30vw] mb-20 mb:mb-10 mb:h-auto mx-[12%] mb:mx-[2rem]"
        >
          <p className="pb-2">
            Challenge Yourself este așa cum spune și numele -
            <span className="text-orange"> o provocare, o încercare de a te autodepasi, dar și o relaxare activă care are ca scop formarea unei pauze în viețile noastre. </span>
            Ne întâlnim o dată pe săptămână într-o casă interbelică unde, cu ajutorul tehnicilor teatrale, încercăm să ne deconectăm de la haosul zilnic și să ne conectăm mai mult cu propria persoană.
          </p>

          <p className="">
            Îți propunem un curs ce se desfășoară pe o perioadă de 3 luni unde ”ne jucăm” prin intermediul unor tehnici teatrale pe care le vei folosi în fiecare moment în care trebuie să lucrezi cu emoția, imaginația și creativitatea, cu tine însuți, dar și în relație cu ceilalți.
          </p>
        </BannerTextAbsolute>

        <BannerTextAbsolute
          imageURL={IMAGES.CYImage3}
          direction="left"
          className="h-[32vw] pb-20 mb:h-auto mx-[12%]"
          title="Unde se întâmplă?"
        >
          <p className="">
            La locul nostru de joacă de pe str. Madrid 4. În sufrageria unei case interbelice din 1920 în zona Dorobanți. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-1 gap-8 mb-20 mb:mb-10 mx-[12%] mb:mx-[6%] bg-white br p-8">
          <div className="">
            <h4 className="title pb-4 text-red">
              Unde și când ne pot fi de folos tehnicile teatrale?
            </h4>
            <p className="pb-4">
              Aproape în fiecare moment în care trebuie să lucrăm cu emoția, imaginația și creativitatea, cu noi înșine dar și în relație cu ceilalți.
            </p>

            <ul className="list-disc pl-8">
              <li className="text-red pl">atunci când ne dorim sa fim productivi</li>
              <li className="text-orange">când vrem să avem o gândire pozitivă</li>
              <li className="text-red">când ne dorim să avem curajul de a acționa şi libertatea de a ne exprima</li>
            </ul>
          </div>

          <div className="">
            <h4 className="title pb-4 text-red">
              Cum te va schimba acest curs?
            </h4>

            <ul className="list-disc pl-8">
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

        <div className="galery w-full mb-20 mb:mb-10 px-[12%]">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {Galery1.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`image ${index + 1}`}
                    className="h-full mb:h-auto"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {Galery2.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`image ${index + 1}`}
                    className="h-full mb:h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        <FadeInViewPortAnimation className="mb-20 mb:mb-10">
          <div className="w-[100vw] relative mb:w-full">
            <SimpleSlider
              images={[IMAGES.Show4, IMAGES.Show2, IMAGES.Show3, IMAGES.Show1, IMAGES.Show5, IMAGES.Show7, IMAGES.Show8, IMAGES.Show9]}
              className="w-[100vh] h-[80vh] overflow-hidden"
            ></SimpleSlider>
            <div className="absolute w-[30vw] bottom-0 left-[20vw] pb-20 mb:relative mb:w-full mb:left-0 mb:bg-white mb:p-8">
              <h4 className="title pb-4 text-white mb:text-red" style={textShadow}>
                Ce urmează după cele 
                <br/>
                3 luni de curs?
              </h4>

              <p className="pb-4 text-white mb:text-black" style={textShadow}>
                La finalul modulului, cursanții pregătesc un show de improvizație cu exerciții și jocuri pe care le-au făcut în aceste 3 luni. Ne place să spunem că este <span className="font-bold">un curs deschis cu apucături de show</span> pentru că vrem să oferim o experiență relaxantă și distractivă unde fiecare persoană își invită în sufrageria noastră prietenii, familia sau chiar colegii de la job.
              </p>

              <p className="pb-4 text-white mb:text-black" style={textShadow}>Ulterior, Challenge Yourself continuă la grupele de avansați unde trecem la un alt nivel, aprofundam exercițiile de creativitate, improvizație și spontaneitate. Descoperim cum ne putem folosi de acestea în viața de zi cu zi, dar și care este conexiunea lor cu teatrul. Ne jucăm mai mult și ne distrăm într-un spectacol de Improvizație “pe bune”</p>
            </div>

          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="px-20 pb-20 mb:px-0 mx-[12%]">
          <div className="bg-white p-10 mb:mb-6">
          <h3 className="text-red">
            Traineri
          </h3>

          <p className=""> Pe Madrid, 4 te vei întâlni cu cei doi traineri pe care cu siguranţă îi vei îndrăgi: <span className="font-bold">Robert şi Mella</span>. Ei au absolvit Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale", București şi de mai bine de 5 ani sunt profii ăia cool din cadrul cursurilor de dezvoltare personală cu adulţi, dar şi cu copii.</p>

          </div>
         
          <div id="members" className="flex mb:inline gap-10 justify-center my-10">
            <TeamMemberCard
              key={1}
              imageSrc={IMAGES.CYTeam1}
              name=""
              color="red"
            />
            <TeamMemberCard
              key={2}
              imageSrc={IMAGES.CYTeam2}
              name=""
              color="orange"
            />
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="px-20 pb-20 mb:px-0 mx-[12%]">
          <h4 className="title px-10 mb:mb-4">
            Alege varianta care ți se potrivește și contactează-ne.
          </h4>

          <div className="flex mb:inline gap-10 justify-center my-4 mx-auto">
            <ScaleViewPortAnimation className="p-10 bg-orange rounded-full mb:mb-10">
              <h5 className="text-center text-white"> VARIANTA 1 </h5>
              <h5 className="text-center text-white pb-4"> PLATA LUNARA </h5>
              <p className="text-center text-white"> 4 sedinte/ luna </p>
              <p className="text-center text-white"> o sedinta/ saptamana </p>
            </ScaleViewPortAnimation>

            <ScaleViewPortAnimation className="p-10 bg-red rounded-full mb:mb-10">
              <h5 className="text-center text-white"> VARIANTA 2 </h5>
              <h5 className="text-center text-white pb-4"> PLATA INTEGRALA MODUL </h5>

              <p className="text-center text-white"> 12 sedinte/ 3 luni </p>
              <p className="text-center text-white"> o sedinta/ saptamana </p>
            </ScaleViewPortAnimation>

          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10 mx-[12%] bg-white br p-10">
          <div className="grid grid-cols-1 mb:grid-cols-1 gap-8">
            <div>
              <h4 className="text-orange">
                Trebuie să știi că acest curs:
              </h4>

              <ul className="list-disc pl-8">
                <li>are 4 ședințe pe lună, 1 ședință/săptămână</li>
                <li>funcționează sub forma unui abonament, iar ședințele nu se pot recupera</li>
                <li>se achită în prima ședință a fiecărei luni</li>
              </ul>
              <p className="mt-2">*Plata integrala a cursului se achita in prima sedinta a fiecarei luni in functie de varianta aleasa</p>

            </div>

            <div>
              <h4 className="text-orange">
                Cum îmi rezerv locul?
              </h4>
              <p>
                <span className="text-red font-bold">Locul se consideră rezervat după achitarea avansului nerambursabil în valoare de 100 de lei (avans ce acoperă prima ședință)</span>. Acesta se scade automat din plata primei luni sau plata întregului modul.
              </p>
            </div>

          </div>
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20 mb:grid mb:gap-4">
          <div className="whatsapp-btn mr-10 mb:mr-0">
            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+40740993479" className="flex">
              <FaWhatsapp size='30px' className="pr-2" /> 
              <p className="pt-1">Scrie-ne pe whatsapp</p>
            </a>
          </div>

          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex">
              <FaEnvelope size='30px' className="pr-2" /> 
              <p className="pt-1">Trimite-ne un email</p>
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
  IMAGES.CYImage7,
];

const Galery2 = [
  IMAGES.CYImage4,
  IMAGES.CYImage5,
  IMAGES.CYImage6,
  IMAGES.CYImage8,
];