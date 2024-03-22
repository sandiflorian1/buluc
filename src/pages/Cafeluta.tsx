import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect, Ref } from 'react';
import { gsap } from "gsap";
import IMAGES from "../assets/Images";
import { FaRegSmileBeam } from "react-icons/fa";
import "../styles/article.scss";


export interface ICafelutaProps { }


const Cafeluta: React.FC = () => {
  const cafelutaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(cafelutaRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title='"Bună dimineața la cafeluță!”  - cu Buluc'>
      <section id="cafeluta" ref={cafelutaRef} className="article">
        <div>
          <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8 md:max-w-[50vw]">
            <div className="flex flex-col">
              <p className="text-5xl md:text-xl font-bold">Bună dimineața la cafeluță! Azi avem un invitat special, nou în domeniul artistic, care abia așteaptă să ne povestească despre planurile lui de viitor. Chiar dacă are doar câteva luni, Buluc crește foarte repede, este plin de energie și dornic să ne vorbească despre pasiunile sale, despre prietenii ce i-au fost aproape de mic copil, despre ceea ce îl motivează să se dezvolte alături de ei. </p>
              <br />
              <p className="text-5xl md:text-xl font-bold text-red "><span><FaRegSmileBeam /></span> <span>Ne bucurăm foarte mult că ai fost de acord să participi la acest interviu, știm că ești destul de ocupat în ultima perioadă...</span></p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Bună! Da, am foarte multă treabă, dar mereu găsesc timp pentru prieteni și oameni faini. Mă bucur și eu că m-ați invitat.</p>
              <p className="text-5xl md:text-xl font-bold text-red"><FaRegSmileBeam />Pentru început am vrea să ne cunoaștem puțin. Care sunt pasiunile tale? Ce îți place cel mai mult să faci? </p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Am avut mereu o pasiune pentru artă, motiv pentru care am și ales să încep să lucrez în acest sens. Îmi place teatrul, poezia, dansul, toate aceste ramuri ale artei unde se poate lucra în echipă. Am fost mereu interesat de toate lucrurile pe care le poți face dacă ai oamenii potriviți lângă tine. Și asta mi-am și propus să fac. Sa găsesc oameni pasionați, frumoși, de la care să învăț cât mai multe lucruri și cu care să pot face cât mai multe lucruri.  </p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam />Să înțeleg că până în prezent ai găsit câțiva oameni de genul acesta? </p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Da, am câțiva prieteni care m-au susținut încă de la început. Ne acceptăm ideile, propunerile, chiar dacă poate nu suntem mereu de acord. Ce mi se pare cel mai frumos e ca în final, pornind de la o simplă idee, după zeci de discuții și păreri ajungem la un produs mult mai bun, cu care toate lumea este mulțumită. Toți suntem încăpățânați, dar de multe ori asta ne și ajută. </p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam />Ne poți spune mai multe lucruri despre proiectele viitoare? </p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Nu pot să spun foarte multe pentru că nu vreau să stric surpriza. Dar da, chiar acum lucrăm la ceva, și cred că o să fie gata destul de curând. Dacă totul merge ca până acum, ar trebui să iasă ceva foarte drăguț. Se mai poate, vă rog, o cafea? </p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam />Sigur! </p>
              <p className="text-5xl md:text-xl font-bold text-red"> După 5 minute... </p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam /> Așadar, ar trebui să ne așteptăm la o premieră...un spectacol de teatru? Dans? Poți să ne dai un indiciu?</p>
              <p className="text-5xl md:text-xl"><FaRegSmileBeam />Pentru început am ales teatrul. Dar vom încerca să acoperim în timp toată această sferă artistică. Cred că toate domeniile se pot combina. Poți aduce dansul, muzica și pictura alături de teatru. Vreau să fiu cât mai liber în idei, pentru că tocmai această libertate de creație poate duce la proiecte cu adevărat interesante, care să nască ceva în spectator. Până la urmă, spectatorul este cel mai important. </p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam />Și pentru viitorul îndepărtat? Ai câteva idei despre unde ai vrea să fii peste câțiva ani?</p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Ce știu sigur e că vreau să am cât mai mulți oameni lângă mine. De aici, totul e posibil. O idee mai concretă despre viitor ar fi că îmi doresc să avem un spațiu doar al nostru, pentru repetiții, spectacole și tot ce ne propunem să facem. Asta îmi doresc și asta mi-am și propus. Nu vreau să promit nimic, dar sunt destul de hotărât și optimist. Și de cele mai multe ori, când lucrez la un lucru în care cred cu adevărat, până la urmă îmi iese așa cum vreau.</p>
              <p className="text-5xl md:text-xl font-bold text-red"> <FaRegSmileBeam />În încheiere...ai câteva cuvinte pentru public? Ceva ce ai vrea să împărtășești cu ei? </p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Sigur! Să fie cu ochii pe noi, să vină la spectacole, să fie deschiși să privească, să asculte, dar și sinceri mai apoi în feed-back, pentru că asta ne va ajuta cu siguranță. Și, bineînțeles, să participe la activități culturale, să se îmbogățească cât mai mult prin artă. Chiar dacă poate unii nu sunt obișnuiți, nu au timp, sau au impresia că pur și simplu nu sunt atrași de acest domeniu, cred că trebuie măcar să încerce. Și eu încerc ceva nou și îmi place din ce în ce mai mult.</p>
              <p className="text-5xl md:text-xl font-bold text-red"><FaRegSmileBeam />Așa este...trebuie să încercăm cât mai multe. Mulțumim foarte mult că ai fost alături de noi astăzi. Și, bineînțeles, ne vedem la spectacol. </p>
              <p className="text-5xl md:text-xl"> <FaRegSmileBeam />Mulțumesc de invitație. Vă aștept cu drag! Și după, mai stăm la o cafea pentru feed-back. </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cafeluta;