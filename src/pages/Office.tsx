import MainLayout from "../components/layouts/MainLayout";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, SlideXViewPortAnimation } from "../components/animations/Animations";

export interface IOfficeProps { }


const Office: React.FC = () => {
  return (
    <MainLayout title="@The Office">
      <div className="pt-10 mb:pt-5">
        <BannerTextAbsolute
          imageURL={IMAGES.Office6}
          direction="left"
          className="h-[30vw] mb-20 mb:mb-10 mb:h-auto"
        >
          <p className="pb-2">
            Challenge Yourself @The Office are la bază dezvoltarea personală și profesională a angajaților, contribuind la îmbunătățirea performanței individuale și a succesului organizațional. O experiență interactivă și provocatoare, menită să încurajeze creșterea personală și profesională a membrilor unei echipe prin intermediul tehnicilor teatrale.
          </p>
        </BannerTextAbsolute>

        <div className="grid grid-cols-6 gap-8 mb:gap-0 mb-20 mb:mb-10">
          <FadeInViewPortAnimation className="overflow-hidden col-start-1 col-end-4 mb:col-end-7">
            <img src={IMAGES.suit}></img>
          </FadeInViewPortAnimation>

          <div className="col-end-7 col-span-3 mb:col-span-7">
            <SlideXViewPortAnimation className="bg-white p-6 br mb-4">
            <p >
              În cadrul acestui workshop dinamic și interactiv, participanții vor fi conduși printr-o serie de exerciții și activități teatrale care îi vor provoca să-și exploreze și să-și depășească limitele, să-și îmbunătățească abilitățile de comunicare și să-și dezvolte încrederea în sine.
            </p>
            </SlideXViewPortAnimation>
           

            <SlideXViewPortAnimation className="bg-white p-6 br mb-4">
              <h4 className="title pb-4 text-red">
                Obiective:
              </h4>
              <ul className="list-disc pl-8">
                <li>Explorarea și dezvoltarea abilităților de comunicare și colaborare în echipă</li>
                <li>Îmbunătățirea capacității de adaptare și rezolvare a problemelor în contextul profesional</li>
                <li>Stimularea creativității și a gândirii inovatoare în soluționarea provocărilor de la locul de muncă</li>
                <li>Dezvoltarea empatiei și a abilităților de leadership</li>
                <li>Creșterea încrederii în sine și gestionarea stresului în situații de prezentare sau de interacțiune în public</li>
              </ul>
            </SlideXViewPortAnimation>

            <SlideXViewPortAnimation className="bg-white p-6 br">
              <h4 className="title pb-4 text-red">
                Beneficii:
              </h4>

              <ul className="list-disc pl-8">
                <li>Angajați mai încrezători și mai motivați, capabili să abordeze provocările profesionale cu creativitate și încredere</li>
                <li>O cultură organizațională îmbunătățită, bazată pe comunicare eficientă și colaborare</li>
                <li>Îmbunătățirea abilităților de comunicare</li>
                <li>Creşterea încrederii de sine</li>
                <li>Dezvoltarea capacității de adaptare</li>
                <li>Îmbunătățirea abilităților de lucru în echipă</li>
              </ul>
            </SlideXViewPortAnimation>
          </div>
        </div>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10 bg-white p-6 br">
          <h3 className="text-red">
            Traineri
          </h3>

          <p className=""> Echipa noastră este formată din actori profesioniști și specialiști în dezvoltare personală cu o vastă experiență în facilitarea workshopurilor corporate. Acest workshop se întâmplă alături de trainerii echipei Buluc care au absolvit Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale", București şi au o experiență de mai bine de 5 ani în cadrul cursurilor de dezvoltare personală prin tehnici teatrale pentru adulţi, dar şi pentru adolescenți și copii. </p>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation>
          <div className="grid grid-cols-6 mb:grid-cols-1 gap-8 mb:gap-0 pb-20">
            <div className="col-start-1 col-end-5 mb:col-end-7 bg-white p-6 br">
              <h4 className="text-red">
                Unde se întâmpla?
              </h4>

              <p> Ne adaptăm în funcție de nevoile companiei tale. Alege varianta care crezi că ți se potrivește. </p>
            </div>

            <div className="col-start-1 col-end-3 mb:col-end-7">
              <img src={IMAGES.grafica1}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">la noi ACASĂ</h6>
                <p>
                  în sufrageria de pe str. Madrid 4, într-o casă din 1920 din zona Dorobanți. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.
                </p>
              </div>
            </div>

            <div className="col-start-3 col-span-2 mb:col-span-7">
              <img src={IMAGES.grafica2}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">la tine ACASĂ</h6>
                <p>
                  la birou, găzduit chiar în cadrul companiei, într-un mediu familiar. O sală de conferințe sau un spațiu deschis suficient de mare pentru a permite mișcarea și interacțiunea participanților.
                </p>
              </div>

            </div>

            <div className="col-end-7 col-span-2 mb:col-span-7">
              <img src={IMAGES.grafica3}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">în TEAMBUILDING</h6>
                <p>într-un loc care să ofere inspirație facilitând astfel un mediu propice pentru deconectare și creativitate</p>
              </div>
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
};

export default Office;