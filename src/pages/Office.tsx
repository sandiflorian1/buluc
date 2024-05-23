import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import IMAGES from "../assets/Images";

export interface IOfficeProps { }


const Office: React.FC = () => {
  const officeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(officeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title="@The Office">
      <section id="office" ref={officeRef}>
        <div className="container">
          <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8">
            <div className="flex flex-col">
              <p className="mb-1 text-5xl md:text-xl">Challenge Yourself @The Office are la bază dezvoltarea personală și profesională a angajaților, contribuind la îmbunătățirea performanței individuale și a succesului organizațional. O experiență interactivă și provocatoare, menită să încurajeze creșterea personală și profesională a membrilor unei echipe prin intermediul tehnicilor teatrale. </p>
              <br/>
              <p className="mb-1 text-5xl md:text-xl">În cadrul acestui workshop dinamic și interactiv, participanții vor fi conduși printr-o serie de exerciții și activități teatrale care îi vor provoca să-și exploreze și să-și depășească limitele, să-și îmbunătățească abilitățile de comunicare și să-și dezvolte încrederea în sine. </p>
              <br/>
              <h5 className="title font-bold text-orange">OBIECTIVE:</h5>
              <ul>
                <li>Explorarea și dezvoltarea abilităților de comunicare și colaborare în echipă</li>
                <li>Îmbunătățirea capacității de adaptare și rezolvare a problemelor în contextul profesional</li>
                <li>Stimularea creativității și a gândirii inovatoare în soluționarea provocărilor de la locul de muncă</li>
                <li>Dezvoltarea empatiei și a abilităților de leadership</li>
                <li>reșterea încrederii în sine și gestionarea stresului în situații de prezentare sau de interacțiune în public</li>
              </ul>
              <h5 className="title font-bold text-orange">CE BENEFICII ARE ACEST WORKSHOP: :</h5>

              <p>Toate aceste schimbări pot avea un impact pozitiv asupra performanței individuale și a contribuției acestuia la succesul organizational.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Office;