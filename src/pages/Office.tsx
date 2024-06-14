import MainLayout from "../components/layouts/MainLayout";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, ScaleViewPortAnimation } from "../components/animations/Animations";

export interface IOfficeProps { }


const Office: React.FC = () => {
  return (
    <MainLayout title="The Office">
      <div className="pt-10">
        <BannerTextAbsolute
            imageURL={IMAGES.Office6}
            direction="left"
            className="h-[30vw] mb-20 mb:h-auto"
        >
          <p className="pb-2">
          Challenge Yourself @The Office are la bază dezvoltarea personală și profesională a angajaților, contribuind la îmbunătățirea performanței individuale și a succesului organizațional. O experiență interactivă și provocatoare, menită să încurajeze creșterea personală și profesională a membrilor unei echipe prin intermediul tehnicilor teatrale.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-6 mb:grid-cols-1 gap-8 mb-20">
          <div className="overflow-hidden col-start-1 col-end-5 mb:col-end-7">
            <SimpleSlider
              images={[IMAGES.Office1, IMAGES.Office2, IMAGES.Office3, IMAGES.Office4, IMAGES.Office5]}
              className="w-[30vw] h-[30vw] mb:h-[60vw] br overflow-hidden"
            ></SimpleSlider>
          </div>

          <div className="col-end-7 col-span-2 mb:col-span-7 my-auto bg-white p-6 br">
            <p className="">
              În cadrul acestui workshop dinamic și interactiv, participanții vor fi conduși printr-o serie de exerciții și activități teatrale care îi vor provoca să-și exploreze și să-și depășească limitele, să-și îmbunătățească abilitățile de comunicare și să-și dezvolte încrederea în sine.
            </p>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="grid grid-cols-6 mb:grid-cols-1 gap-8 pb-20">
          <div className="col-start-1 col-end-3 mb:col-end-7 bg-white p-6 br">
            <h4 className="title pb-4 text-red">
              Obiective:
            </h4>
            <ul className="list-disc pl-8">
            <li>Explorarea și dezvoltarea abilităților de comunicare și colaborare în echipă</li>
                <li>Îmbunătățirea capacității de adaptare și rezolvare a problemelor în contextul profesional</li>
                <li>Stimularea creativității și a gândirii inovatoare în soluționarea provocărilor de la locul de muncă</li>
                <li>Dezvoltarea empatiei și a abilităților de leadership</li>
                <li>reșterea încrederii în sine și gestionarea stresului în situații de prezentare sau de interacțiune în public</li>
            </ul>
          </div>

          <div className="col-end-7 col-span-4 mb:col-span-7 bg-white p-6 br">
            <h4 className="title pb-4 text-red">
              Ce beneficii are acest workshop:
            </h4>

            <ul className="list-disc pl-8">
              <li>Angajați mai încrezători și mai motivați, capabili să abordeze provocările profesionale cu creativitate și încredere.</li>
              <li>O cultură organizațională îmbunătățită, bazată pe comunicare eficientă și colaborare.</li>
              <li>Dezvoltarea abilităților de leadership și management al echipei.</li>
              <li>O mai bună gestionare a stresului și a presiunii în mediul de lucru.</li>
              <li>Îmbunătățirea abilităților de comunicare </li>
              <li>Creşterea încrederii de sine </li>
              <li>Dezvoltarea capacității de adaptare </li>
              <li>Îmbunătățirea abilităților de lucru în echipă</li>
              <li>Managementul stresului și a presiunii</li>
            </ul>
            <p className="py-4">Toate aceste schimbări pot avea un impact pozitiv asupra performanței individuale și a contribuției acestuia la succesul organizational.</p>
          </div>  
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="mb-20 bg-white p-6 br">
            <h3 className="text-red">
              Traineri
            </h3>

            <p className=""> Acest workshop se va întâmpla alături de o echipă de traineri Buluc pe care cu siguranţă îi vei îndrăgi! Toți trainerii din echipa noastră au absolvit Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale", București şi de mai bine de 5 ani sunt cei mai cool profi din cadrul cursurilor de dezvoltare personală pentru adulţi, dar şi pentru adolescenți și copii.</p>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation>
          <div className="grid grid-cols-6 mb:grid-cols-1 gap-8 pb-20">
            <div className="col-start-1 col-end-7 bg-white p-6 br">
              <h4 className="text-red">
                Unde se întâmpla?
              </h4>

              <p> Ne adaptăm în funcție de nevoile companiei tale, dar dacă vrei să ieși din atmosfera de birou și să te deconectezi pe bune - poți alege varianta de a ne strânge buluc la noi acasă. </p>
            </div>

            <div className="col-start-1 col-end-3 mb:col-end-7 bg-white p-6 br">
              <p>
                <span className="text-orange pr-2"> la noi ACASĂ: în sufrageria de pe str. Madrid 4.</span>
                Într-o casă din 1920 cu trăsături burgheze în inima Capitalei amplasată în zona Dorobanți într-o vilă interbelică. O locație de care te vei îndrăgosti așa cum am făcut și noi prima dată când i-am pășit pragul. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.
              </p>
            </div>

            <div className="col-start-3 col-span-2 mb:col-span-7 bg-white p-6 br">
              <p>
                <span className="text-orange pr-2"> la noi ACASĂ:</span>
                la birou, în cadrul companiei tale
              </p>
            </div>

            <div className="col-end-7 col-span-2 mb:col-span-7 bg-white p-6 br">
              <p className="text-orange">in teambuilding</p>
            </div>
          </div>
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20">
          <div className="whatsapp-btn mr-10">
            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+40743760430" className="flex">
              <FaWhatsapp size='30px' className="pr-2" /> 
              <p className="pt-1">Chat on WhatsApp</p>
            </a>
          </div>

          <div className="bg-red email-btn">
            <a href="mailto:someone@example.com" className="flex">
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